import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RoomService } from 'src/app/services/rooms.service';
import { RoomModel } from 'src/app/view-models/room/room.model';
import { Observable, Subject, takeUntil } from 'rxjs';


@Component({
    selector: 'app-rooms',
    providers: [LocalStorageService],
    templateUrl: './rooms.page.html',
    styleUrls: ['./styles/rooms.page.scss']
})

export class RoomsPageComponent implements OnDestroy{
    public choiceIsClose: boolean = false;
    public rooms$!: Observable<RoomModel[]>;
    public roomsData!: RoomModel[];
    private _subscription$: Subject<void> = new Subject<void>();

    constructor
    ( private _router: Router,
      private _roomSerivce: RoomService
    ) {
        this.rooms$ = _roomSerivce.getRooms();
        this.rooms$
            .pipe(
                takeUntil(this._subscription$)
            )
            .subscribe(data => this.roomsData = data);
    }

    public clickRoute(room: RoomModel): void {
        this._router.navigate(['/cabinet/rooms', room.id]);
    }

    public ngOnDestroy(): void {
        this._subscription$.unsubscribe();
    }
}
