import { Component, OnInit } from '@angular/core';
import { ialbum } from '../Ialbums';
import { albums } from '../albums';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent{
  albums : ialbum[] = albums
 
  
  album : ialbum = {} as ialbum;

}
console.log(albums);