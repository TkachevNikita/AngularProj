import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { CalendarEvent } from 'angular-calendar';
import { EventsKey } from '../enums/events-key.enum';
import { UserService } from './user.service';

@Injectable()
export class LocalStorageManagerService {

    private static readonly _key = 'LOCAL_STOR_SERVICE';

    constructor(private _localStorageService: LocalStorageService, private _userService: UserService) { }

    /**
     * Устанавливаем ивенты для авторизованного сотрудника
     *
     */
    public setSelfEvents(key: EventsKey): void {
        const events = this.getEventsByKey(EventsKey.allMeetingRooms);
        if (events) {
            const newEvents: CalendarEvent[] = events
                .filter(
                    event => event.members?.some(member  => member.id === this._userService.user.id) ||
                    event.owner?.id === this._userService.user.id
                );
            this.setEventsByKey(key, newEvents);
        }
    }
    /**
     * Объединяем все ивенты
     */
    public setAllEvents(key: EventsKey): void {
        const eventKeys: string[] = Object.keys(localStorage);
        const data: CalendarEvent[] = [];
        const selfKey: string = LocalStorageManagerService._key + '_' + EventsKey.selfMeetingRooms.toString();
        const storageKey: string = LocalStorageManagerService._key + '_' + key.toString();
        for (const eventKey of eventKeys) {
            if (eventKey !== storageKey && eventKey !== selfKey && eventKey.includes(LocalStorageManagerService._key)) {
                const values = this._localStorageService.getItem(eventKey);
                data.push(...values);
            }
        }
        this._localStorageService.setItem(storageKey, JSON.stringify(data));
    }

    /**
     * Возвращаем ивенты по ключу
     */
    public getEventsByKey(key: EventsKey): CalendarEvent[] {
        const storageKey: string = LocalStorageManagerService._key + '_' + key.toString();

        return this._localStorageService.getItem(storageKey);
    }

    /**
     * Устанавливаем ивенты по ключу
     */
    public setEventsByKey(key: EventsKey, data: CalendarEvent[]): void {
        const storageKey: string = LocalStorageManagerService._key + '_' + key.toString();
        const storageData: string = JSON.stringify(data);
        this._localStorageService.setItem(storageKey, storageData);
        this.setAllEvents(EventsKey.allMeetingRooms);

    }

}
