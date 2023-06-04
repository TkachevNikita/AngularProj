import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

@Component({
    templateUrl: './cabinet-layout.component.html',
    styleUrls: ['./styles/cabinet-layout.component.scss'],
})
export class CabinetLayoutComponent {

    public title$: BehaviorSubject<string> = new BehaviorSubject<string>('Главная страница');
    constructor(private _router: Router) {
        this._router.events.pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(
                {
                    next: (value: any) => {
                        switch (value.url) {
                            case '/cabinet':
                                this.title$.next('Главная страница');
                                break;
                            case '/cabinet/calendar':
                                this.title$.next('Расписание');
                                break;
                            case '/cabinet/employees':
                                this.title$.next('Сотрудники');
                                break;
                            case '/cabinet/rooms':
                                this.title$.next('Переговорные комнаты');
                                break;
                            case '/cabinet/selfcalendar':
                                this.title$.next('Моё расписание');
                                break;
                            default:
                                this.title$.next('Страница не найдена');
                                break;
                        }
                    }
                });
    }
}
