import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { WeddingsPageComponent } from './weddings-page/weddings-page.component';
import { RetroCarsPageComponent } from './retro-cars-page/retro-cars-page.component';
import { PortraitsPageComponent } from './portraits-page/portraits-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'weddings',
    component: WeddingsPageComponent,
  },
  {
    path: 'portraits',
    component: PortraitsPageComponent,
  },
  {
    path: 'cars',
    component: RetroCarsPageComponent,
  },

  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
