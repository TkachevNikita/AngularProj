import { Component } from '@angular/core';
import { roomData } from 'src/app/view-models/room/room.model';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.page.html',
  styleUrls: ['./styles/rooms.page.scss']
})

export class RoomsPageComponent {
  rooms = roomData;
}
