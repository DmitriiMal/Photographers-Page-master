import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { WeddingsPageComponent } from './weddings-page/weddings-page.component';
import { PortraitsPageComponent } from './portraits-page/portraits-page.component';
import { RetroCarsPageComponent } from './retro-cars-page/retro-cars-page.component';
// register Swiper custom elements
register();
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    FooterComponent,
    WeddingsPageComponent,
    PortraitsPageComponent,
    RetroCarsPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
