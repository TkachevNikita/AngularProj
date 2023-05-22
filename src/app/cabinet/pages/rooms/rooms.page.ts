import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsKey } from '../../../enums/events-key.enum';
import { CalendarViewModel } from '../../../view-models/calendar.view-model';
import { DataSendService } from 'src/app/services/data-send.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { CalendarEvent } from 'angular-calendar';
import { EventColor } from 'calendar-utils';


@Component({
    selector: 'app-rooms',
    providers: [LocalStorageService],
    templateUrl: './rooms.page.html',
    styleUrls: ['./styles/rooms.page.scss']
})

export class RoomsPageComponent {
    public rooms: number[] = [1, 2, 3, 4, 5];
    public model!: CalendarViewModel;
    public choiceIsClose: boolean = false;
    public colors: Record<string, EventColor> = {
        red: {
            primary: '#ad2121',
            secondary: '#FAE3E3',
        },
        blue: {
            primary: '#1e90ff',
            secondary: '#D1E8FF',
        },
        yellow: {
            primary: '#e3bc08',
            secondary: '#FDF1BA',
        },
        purple: {
            primary: '#8c19c2',
            secondary: '#b554e3',
        },
        black: {
            primary: '#0e0d0f',
            secondary: '#7d7a80'
        }
    };


    constructor (private _router: Router, private _dataSendService: DataSendService, private _storage: LocalStorageService) {
        this.init();
    }

    public setEventColor(id: number): void {
        switch(id) {
            case 1:
                this.model.color = this.colors['red'];
                break;
            case 2:
                this.model.color = this.colors['blue'];
                break;
            case 3:
                this.model.color = this.colors['yellow'];
                break;
            case 4:
                this.model.color = this.colors['purple'];
                break;
            case 5:
                this.model.color = this.colors['black'];
                break;
        }
    }

    public init(): void {
        this.model = new CalendarViewModel([]);
    }

    public clickRoute(id: number): void {
        this._router.navigate([`cabinet/rooms/${id}`]);
        this.model.id = id;
        this.setEventColor(this.model.id);
        this.choiceIsClose = true;
    }

}
