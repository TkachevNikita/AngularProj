import {
    Component,
    ChangeDetectionStrategy,
    OnInit,
    Renderer2,
    ElementRef,
    ViewChild,
    AfterViewInit,
    Input,
} from '@angular/core';
import { isSameDay, isSameMonth } from 'date-fns';
import { BehaviorSubject, Observable, Subject, filter, take } from 'rxjs';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { EventColor } from 'calendar-utils';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { CalendarViewModel } from 'src/app/view-models/calendar.view-model';
import { LocalStorageManagerService } from '../../../../services/local-storage-manager.service';
import { EventsKey } from '../../../../enums/events-key.enum';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ModalService } from '../../../../libs/modal-service/modal.service';
import { ModalComponent } from 'src/app/cabinet/components/modals/modal.component';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'mwl-demo-component',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [LocalStorageService, LocalStorageManagerService],
    styleUrls: ['styles/custom-calendar.component.scss'],
    templateUrl: 'custom-calendar.component.html',
})
export class DemoComponent implements OnInit {

    @Input() public calendarViewModel!: CalendarViewModel;

    constructor(
        private _modal: NgbModal,
        private _storage: LocalStorageService,
        private _renderer: Renderer2,
        private _storageManager: LocalStorageManagerService,
        private _router: Router,
        private _modalService: ModalService,
        private _userService: UserService
    ) {
        this.calendarViewModel = new CalendarViewModel([]);
    }

    public onCreateModal(): void {
        const modalRef = this._modalService.open(ModalComponent,
            { title: this.calendarViewModel.currentTitle, message: 'My dynamic message', members: this.calendarViewModel.currentMembers });

        modalRef.onResult()
            .pipe(
                take(1)
            )
            .subscribe(
                closed => console.log('closed', closed),
                dismissed => console.log('dismissed', dismissed),
                () => console.log('completed')
            );
    }


    public ngOnInit(): void {
        const data = this._storageManager.getEventsByKey(this.calendarViewModel.id);
        console.log(data);
        if (data) {
            const currentEvents = this.refactorEvents(data);
            this.calendarViewModel.events$.next(currentEvents);
        }
    }

    public refactorEvents(data: CalendarEvent[]): CalendarEvent[] {
        data.forEach((element: CalendarEvent) => {
            element.start = new Date(element.start);
            element.end = new Date(element.end as unknown as string);
        });
        const events: CalendarEvent[] = data
            .filter(
                event => event.members?.some(member => member.id === this._userService.user.id)
            );

        return events;
    }

    public onSubmit(event: CalendarEvent): void {
        event.start = new Date(this.calendarViewModel.currentDay);
        this.addEvent(event);
        this.closeModal();
    }

    /**
     * выбор дня
     */
    public dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
        if (isSameMonth(date, this.calendarViewModel.viewDate)) {
            if (
                (isSameDay(this.calendarViewModel.viewDate, date) && this.calendarViewModel.activeDayIsOpen === true) ||
                events.length === 0
            ) {
                this.calendarViewModel.activeDayIsOpen = false;
            } else {
                this.calendarViewModel.activeDayIsOpen = true;
            }
            this.calendarViewModel.viewDate = date;
            this.calendarViewModel.currentDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        }
        this.calendarViewModel.dayIsClicked = true;
    }

    public addEvent(event: any): void {
        this.calendarViewModel.events$.next([
            ...this.calendarViewModel.events$.getValue(),
            {
                title: event.eventTitle,
                start: new Date(event.start),
                end: new Date(event.start),
                color: this.calendarViewModel.color,
                draggable: true,
                resizable: {
                    beforeStart: true,
                    afterEnd: true,
                },
                members: event.eventMembers,
            },
        ]);
        this._storageManager.setEventsByKey(this.calendarViewModel.id, this.calendarViewModel.events$.getValue());

    }

    public eventClicked(event: any): void {
        this.calendarViewModel.currentMembers = event.event.members;
        this.calendarViewModel.currentTitle = event.event.title;
        this.onCreateModal();
    }

    public deleteEvent(eventToDelete: CalendarEvent): void {
        this.calendarViewModel.events$.next(this.calendarViewModel.events$.getValue().filter((event: any) => event !== eventToDelete));
    }

    public setView(view: CalendarView): void {
        this.calendarViewModel.view = view;
    }

    public closeOpenMonthViewDay(): void {
        this.calendarViewModel.activeDayIsOpen = false;
    }

    public openEventDialog(): void {
        this.calendarViewModel.eventDialogIsOpen = true;
    }

    public closeEventDialog(): void {
        this.calendarViewModel.eventDialogIsOpen = false;
    }

    public openModal(): void {
        this.calendarViewModel.modalIsOpen = true;
    }

    public closeModal(): void {
        this.calendarViewModel.modalIsOpen = false;
    }
}
