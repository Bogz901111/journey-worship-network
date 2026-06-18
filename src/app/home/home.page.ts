
import { Component } from '@angular/core';
import { AboutComponent } from './about.component';
import { ArtistSliderComponent } from './artist-slider.component';
import { EventsHighlightComponent } from './events-highlight.component';
import { GalleryComponent } from './gallery.component';
import { HeroComponent } from './hero.component';

@Component({
  standalone: true,
  selector: 'jwn-home',
  imports: [
    HeroComponent,
    ArtistSliderComponent,
    AboutComponent,
    EventsHighlightComponent,
    GalleryComponent
  ],
  template: `
    <jwn-hero />
    <jwn-artist-slider />
    <jwn-about />
    <jwn-events-highlight />
    <jwn-gallery />
  `,
})
export class HomePage {}
