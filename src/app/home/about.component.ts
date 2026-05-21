import { Component } from '@angular/core';

@Component({
  selector: 'jwn-about',
  standalone: true,
  template: `
    <section class="section" id="about">
      <div class="container grid">
        <div>
          <div class="kicker">Who we are</div>
          <div class="h2">A network of worshippers on a journey.</div>
          <p class="p">
            We exist to connect worship leaders, musicians, and communities—creating worship nights,
            recordings, and moments that point hearts back to Jesus.
          </p>
          <div class="points">
            <div class="card pnt"><b>Community</b><span>We gather, pray, and build together.</span></div>
            <div class="card pnt"><b>Excellence</b><span>Sound, media, and preparation with purpose.</span></div>
            <div class="card pnt"><b>Mission</b><span>Worship that transforms lives beyond the stage.</span></div>
          </div>
        </div>

        <div class="card photo">
          <img src="assets/images/community-fire.jpg" alt="Community worship moment" />
        </div>
      </div>
    </section>
  `,
  styles: [`
    .grid{ display:grid; grid-template-columns: 1.15fr .85fr; gap:1.25rem; align-items:start; }
    .photo img{ width:100%; height:100%; display:block; object-fit:cover; aspect-ratio: 4/3; }
    .points{ display:grid; grid-template-columns:1fr; gap:.7rem; margin-top:1.25rem; }
    .pnt{ padding: .95rem 1rem; display:grid; gap:.2rem; }
    .pnt b{ font-size:1rem; }
    .pnt span{ color: rgba(255,255,255,.75); line-height:1.55; }
    @media (max-width: 860px){
      .grid{ grid-template-columns:1fr; }
    }
  `]
})
export class AboutComponent {}
