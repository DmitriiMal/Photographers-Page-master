import { Component } from '@angular/core';
import { Ialbum } from '../Ialbums';
import { retro_cars } from '../albums';

@Component({
  selector: 'app-retro-cars-page',
  templateUrl: './retro-cars-page.component.html',
  styleUrls: ['./retro-cars-page.component.scss'],
})
export class RetroCarsPageComponent {
  retro_cars: Ialbum[] = retro_cars;
}
