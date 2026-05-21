import { Component } from '@angular/core';
import { HeroComponent } from './hero.component';
import { AboutComponent } from './about.component';
import { EventsHighlightComponent } from './events-highlight.component';
import { GalleryComponent } from './gallery.component';

@Component({
  standalone: true,
  selector: 'jwn-home',
  imports: [HeroComponent, AboutComponent, EventsHighlightComponent, GalleryComponent],
  template: `
    <jwn-hero />
    <jwn-about />
    <jwn-events-highlight />
    <jwn-gallery />
  `,
})
export class HomePage {}
