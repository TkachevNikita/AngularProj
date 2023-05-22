import { Injectable } from "@angular/core";
import { LocalStorageService } from "./local-storage.service";
import { CalendarEvent } from "angular-calendar";
import { EventsKey } from "../enums/events-key.enum";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs";

@Injectable()
export class LocalStorageManagerService {

    private static readonly key = 'LOCAL_STOR_SERVICE';

    constructor(private _localStorageService: LocalStorageService) { }

    /**
     * Объединяем все ивенты
     */
    public setAllEvents(key: EventsKey): void {
      const eventKeys: string[] = Object.keys(localStorage);
      const data: CalendarEvent[] = [];
      const storageKey: string = LocalStorageManagerService.key + '_' + key.toString();
      for (const eventKey of eventKeys) {
        if (eventKey !== storageKey) {
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
        const storageKey: string = LocalStorageManagerService.key + '_' + key.toString();
        return this._localStorageService.getItem(storageKey);
    }

    /**
     * Устанавливаем ивенты по ключу
     */
    public setEventsByKey(key: EventsKey, data: CalendarEvent<any>[]): void {
      const storageKey: string = LocalStorageManagerService.key + '_' + key.toString();
      const storageData: string = JSON.stringify(data)
      this._localStorageService.setItem(storageKey, storageData);
      this.setAllEvents(EventsKey.allMeetingRooms);
    }

}
