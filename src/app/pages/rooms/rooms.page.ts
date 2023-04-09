import { Component } from '@angular/core';

const fillArray = (n: number) => {
  const arr = [];
  if (n) for (let i = 1; i <= n;) arr.push('Переговорка ' + i++);
  return arr;
}

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.page.html',
  styleUrls: ['./styles/rooms.page.scss']
})

export class RoomsPageComponent {
  rooms = fillArray(5);
  isOpenCalendar = false;
}
