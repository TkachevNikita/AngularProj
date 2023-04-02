import { Component } from '@angular/core';

const fillArray = (n: number) => {
  let arr = [];
  if (n) for (let i = 1; i <= n;) arr.push('Переговорка ' + i++);
  return arr;
}

@Component({
  selector: 'rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})

export class RoomsComponent {
  rooms = fillArray(5);
  isOpenCalendar: boolean = false;
}
