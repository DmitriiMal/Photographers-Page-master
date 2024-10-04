import { Component } from '@angular/core';
import { Ialbum } from '../Ialbums';
import { retro_cars } from '../albums';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-retro-cars-page',
  templateUrl: './retro-cars-page.component.html',
  styleUrls: ['./retro-cars-page.component.scss'],
})
export class RetroCarsPageComponent {
  retro_cars: Ialbum[] = retro_cars;

  // private _album: Array = [];
  // constructor(private _lightbox: Lightbox) {
  //   for (let i = 1; i <= 4; i++) {
  //     const src = 'demo/img/image' + i + '.jpg';
  //     const caption = 'Image ' + i + ' caption here';
  //     const thumb = 'demo/img/image' + i + '-thumb.jpg';
  //     const album = {
  //        src: src,
  //        caption: caption,
  //        thumb: thumb
  //     };

  //     this._albums.push(album);
  //   }

  //   open(index: number): void {
  //     // open lightbox
  //     this._lightbox.open(this._albums, index);
  //   }

  //   close(): void {
  //     // close lightbox programmatically
  //     this._lightbox.close();
  //   }
  // }
}
