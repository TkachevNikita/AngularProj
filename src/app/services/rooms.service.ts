import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { IRoom } from '../interfaces/room.interface';
import { RoomModel } from '../view-models/room/room.model';

@Injectable({
    providedIn: 'root',
})
export class RoomService {

    /**
     * Получение переговорных комнат
     * @return Observable<EmployeeModel[]>
     */
    public getRooms(): Observable<RoomModel[]> {

        return this.requestRoom()
            .pipe(
                map((data: IRoom[]) => data.map((room: IRoom) => new RoomModel(room)))
            );
    }

    private requestRoom(): Observable<IRoom[]> {

        const roomList: IRoom[] = [
            {
                name: 'Meeting Room 1',
                id: 0
            },
            {
                name: 'Meeting Room 2',
                id: 1
            },
            {
                name: 'Meeting Room 3',
                id: 2
            },
            {
                name: 'Meeting Room 4',
                id: 3
            },
            {
                name: 'Meeting Room 5',
                id: 4
            },
        ];

        return of(roomList);
    }

}
