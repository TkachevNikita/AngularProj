import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RoomService } from 'src/app/services/rooms.service';
import { RoomModel } from 'src/app/view-models/room/room.model';
import { Observable } from 'rxjs';


@Component({
    selector: 'app-rooms',
    providers: [LocalStorageService],
    templateUrl: './rooms.page.html',
    styleUrls: ['./styles/rooms.page.scss']
})

export class RoomsPageComponent {
    public choiceIsClose: boolean = false;
    public rooms$!: Observable<RoomModel[]>;
    public roomsData!: RoomModel[];

    constructor
    ( private _router: Router,
      private _roomSerivce: RoomService
    ) {
        this.rooms$ = _roomSerivce.getRooms();
        this.rooms$.subscribe(data => this.roomsData = data);
    }

    public clickRoute(room: RoomModel): void {
        this._router.navigate(['/cabinet/rooms', room.id]);
    }

}
