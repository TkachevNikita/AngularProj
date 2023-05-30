import { EventsKey } from 'src/app/enums/events-key.enum';
import { IRoom } from 'src/app/interfaces/room.interface';

export class RoomModel {

    public readonly name: string;
    public readonly id: EventsKey;

    constructor(data: IRoom) {
        this.name = data.name;
        this.id = this.getId(data.id);
    }

    /**
     * Вернуть айди
     */
    public getId(key: number): EventsKey {
        switch (key) {
            case 0:
                return EventsKey.meetingRoom1;
            case 1:
                return EventsKey.meetingRoom2;
            case 2:
                return EventsKey.meetingRoom3;
            case 3:
                return EventsKey.meetingRoom4;
            case 4:
                return EventsKey.meetingRoom5;
            default:
                return EventsKey.allMeetingRooms;
        }
    }
}
