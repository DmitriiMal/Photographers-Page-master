import { Component } from '@angular/core';
import { Ialbum } from '../Ialbums';
import { weddings } from '../albums';

@Component({
  selector: 'app-weddings-page',
  templateUrl: './weddings-page.component.html',
  styleUrls: ['./weddings-page.component.scss'],
})
export class WeddingsPageComponent {
  weddings: Ialbum[] = weddings;
}
