import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

@Component({
    templateUrl: './cabinet-layout.component.html',
    styleUrls: ['./styles/cabinet-layout.component.scss'],
})
export class CabinetLayoutComponent {

  public title$: BehaviorSubject<string> = new BehaviorSubject<string>('Title');

  constructor(private _router: Router) {
    this._router.events
      .pipe(

      )
      .subscribe(
        {
          next: (value: any) => {
            switch (value.url) {
              case '/':
                this.title$.next('Главная страница')
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
            }
          }
        }
      )
  }
}
