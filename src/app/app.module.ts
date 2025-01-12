import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SkeletonModule } from 'primeng/skeleton';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';
import { CarouselModule } from 'primeng/carousel';
import { PrimeNGConfig } from 'primeng/api';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

//Gallery
import { GalleryComponent } from '@components/gallery/gallery.component';

//SidePanel
import { ThemeButtonComponent } from '@components/theme-button/theme-button.component';
import { ScrollTopComponent } from '@components/scroll-top/scroll-top.component';

import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ThemeButtonComponent,
    ScrollTopComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SkeletonModule,
    ProgressSpinnerModule,
    DialogModule,
    CarouselModule,
    AnimateOnScrollModule,
  ],
  providers: [PrimeNGConfig],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
