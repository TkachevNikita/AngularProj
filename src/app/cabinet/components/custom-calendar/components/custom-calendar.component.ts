import {
    Component,
    ChangeDetectionStrategy,
    OnInit,
    Renderer2,
    Input,
} from '@angular/core';
import { addHours, isSameDay, isSameMonth } from 'date-fns';
import { take } from 'rxjs';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { CalendarViewModel } from 'src/app/view-models/calendar.view-model';
import { LocalStorageManagerService } from '../../../../services/local-storage-manager.service';
import { Router } from '@angular/router';
import { ModalService } from '../../../../libs/modal-service/modal.service';
import { ModalComponent } from 'src/app/cabinet/components/modals/modal.component';
import { UserService } from 'src/app/services/user.service';
import { EmployeeModel } from 'src/app/view-models/employee/employee.model';
import { ErrorModalComponent } from 'src/app/cabinet/components/modals/error-modal/error-modal.component';

@Component({
    selector: 'mwl-demo-component',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [LocalStorageService, LocalStorageManagerService],
    styleUrls: ['styles/custom-calendar.component.scss'],
    templateUrl: 'custom-calendar.component.html',
})
export class CustomCalendarComponent implements OnInit {

    @Input() public calendarViewModel!: CalendarViewModel;
    public eventsRemainingCount!: number;
    public dayIsClicked: boolean = false;
    public ownerCount!: number;
    public isRoom: boolean = false;
    public isAdmin: boolean | undefined = this._userService.user.isAdmin;

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

    public onCreateModal(eventTitle: string, members: EmployeeModel[], owner: EmployeeModel ): void {
        const modalRef = this._modalService.open(ModalComponent,
            { title: eventTitle, members: members, owner: owner });

        modalRef.onResult()
            .pipe(
                take(1)
            );
    }

    public onErrorModal(title: string, message: string ): void {
        const modalRef = this._modalService.open(ErrorModalComponent,
            { title: title, errorMessage: message });

        modalRef.onResult()
            .pipe(
                take(1)
            );
    }

    public ngOnInit(): void {
        const data = this._storageManager.getEventsByKey(this.calendarViewModel.id);
        if (data) {
            const currentEvents = this.refactorEvents(data);
            this.calendarViewModel.events$.next(currentEvents);
        }
    }

    /**
     * Проверяет наличие конфликта в расписании
     * @param eventStart - Начало текущего ивента
     * @param eventEnd - Конец текущего ивента
     * @param events - Ивенты текущего дня
     * @returns boolean - Конфликт в расписании
     */
    public isEventConflict(eventStart: number, eventEnd: number, events: any): boolean {
        for (const event of events) {
            if (eventStart < event.end.getHours() && eventEnd > event.start.getHours()) {
                return true;
            }
        }

        return false;
    }

    /**
     * Преобразует даты из string в Date
     * @param data - Ивенты текущего календаря
     * @returns CalendarEvent[] - Ивенты с форматированными датами
     */
    public refactorEvents(data: CalendarEvent[]): CalendarEvent[] {
        data.forEach((element: CalendarEvent) => {
            element.start = new Date(element.start);
            element.end = new Date(element.end as unknown as string);
        });

        return data;
    }

    /**
     * Получает количество созданных сотрудником ивентов
     * @param events - Все ивенты
     * @returns number - Количество созданных ивентов
     */
    public createEventsCount(events: CalendarEvent[]): number {
        return events.reduce((acc, event) => {
            if (event.owner?.id === this._userService.user.id) {
                return acc + 1;
            }

            return acc;
        }, 0);
    }

    /**
     * Отправляет форму ивента
     * @param event - ивент
     */
    public onSubmit(event: CalendarEvent): void {
        event.start = new Date(this.calendarViewModel.currentDay);
        this.addEvent(event);
        this.closeModal();
    }

    /**
     * Нажатие на день
     */
    public dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
        this.dayIsClicked = true;
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

        this.ownerCount = this.createEventsCount(events);

        if (this.ownerCount < this._userService.user.eventLimit) {
            this.calendarViewModel.dayIsClicked = true;
        } else {
            this.calendarViewModel.dayIsClicked = false;
        }
        this.eventsRemainingCount = this._userService.user.eventLimit - this.ownerCount;
    }

    /**
     * Добавляет ивент
     * @param event - Добавляемый ивент
     */
    public addEvent(event: any): void {
        const events = this.calendarViewModel.events$.getValue().filter(
            needEvent => needEvent.start.getDay() === event.start.getDay()
        );

        if (!this.isEventConflict(Number(event.eventStart), Number(event.eventEnd), events)) {
            this.calendarViewModel.events$.next([
                ...this.calendarViewModel.events$.getValue(),
                {
                    title: event.eventTitle,
                    start: addHours(event.start, Number(event.eventStart)),
                    end: addHours(event.start, Number(event.eventEnd)),
                    color: this.calendarViewModel.color,
                    draggable: true,
                    resizable: {
                        beforeStart: true,
                        afterEnd: true,
                    },
                    members: event.eventMembers,
                    owner: this._userService.user
                },
            ]);

            this.eventsRemainingCount = this._userService.user.eventLimit - events.length;
            if (this.eventsRemainingCount === 0) {
                this.calendarViewModel.dayIsClicked = false;
            }
            this._storageManager.setEventsByKey(this.calendarViewModel.id, this.calendarViewModel.events$.getValue());
        } else {
            this.onErrorModal('Конфликт расписания', '*Ваше событие конфликтует с другими, пожалуйста, ознакомьтесь с расписанием');
        }

    }

    public populateHoursArray(start: number, end: number): number[] {
        const result = [];
        for (let i = start; i <= end; i++) {
            result.push(i);
        }

        return result;
    }

    public eventClicked(event: any): void {
        this.onCreateModal(event.event.title, event.event.members, event.event.owner);
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

    public openModal(): void {
        this.calendarViewModel.modalIsOpen = true;
    }

    public closeModal(): void {
        this.calendarViewModel.modalIsOpen = false;
    }
}
