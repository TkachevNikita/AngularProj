import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-main-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./styles/layout.component.scss']
})
export class MainLayoutComponent {
  subject = new BehaviorSubject<string>('');
}
