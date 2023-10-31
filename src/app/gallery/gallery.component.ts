import { Component, OnInit } from '@angular/core';
import { ialbum } from '../Ialbums';
import { albums } from '../albums';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent{
  albums : ialbum[] = albums
  album : ialbum = {} as ialbum;
  id: number =0;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe((param:Params) => {
      
      this.id = +param["id"];
      this.album = albums[this.id];
  
    })
  }
}