import { Component, OnInit } from '@angular/core';
import { ialbum } from '../Ialbums';
import { albums } from '../albums';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  albums : ialbum[] = albums
  album : ialbum = {} as ialbum;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {

  }
}
