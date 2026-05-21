import { Component } from '@angular/core';

@Component({
  selector: 'jwn-gallery',
  standalone: true,
  template: `
    <section class="section" id="gallery">
      <div class="container">
        <div class="kicker">Gallery</div>
        <div class="h2">Moments of worship</div>
        <p class="p">A glimpse into the journey — community, praise, and presence.</p>

        <div class="grid">
          <img class="card" src="assets/images/event-crowd.jpg" alt="Event crowd" />
          <img class="card" src="assets/images/worship-dance.jpg" alt="Worship dancing" />
          <img class="card" src="assets/images/community-fire.jpg" alt="Community gathering" />
          <img class="card" src="assets/images/drone-wide.jpg" alt="Drone view event" />
        </div>
      </div>
    </section>
  `,
  styles: [`
    .grid{
      margin-top: 1.25rem;
      display:grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 1rem;
    }
    img{ width:100%; height:100%; object-fit:cover; display:block; border-radius:18px; border:1px solid var(--jwn-border); }
    img:nth-child(1){ grid-column: span 7; aspect-ratio: 16/9; }
    img:nth-child(2){ grid-column: span 5; aspect-ratio: 4/5; }
    img:nth-child(3){ grid-column: span 5; aspect-ratio: 4/3; }
    img:nth-child(4){ grid-column: span 7; aspect-ratio: 16/9; }
    @media (max-width: 860px){
      .grid{ grid-template-columns: 1fr; }
      img{ aspect-ratio: 16/10 !important; grid-column:auto !important; }
    }
  `]
})
export class GalleryComponent {}
