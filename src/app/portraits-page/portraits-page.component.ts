import { Component } from '@angular/core';
import { Ialbum } from '../Ialbums';
import { portraits } from '../albums';

@Component({
  selector: 'app-portraits-page',
  templateUrl: './portraits-page.component.html',
  styleUrls: ['./portraits-page.component.scss'],
})
export class PortraitsPageComponent {
  portraits: Ialbum[] = portraits;
}
