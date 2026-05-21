import { Component } from '@angular/core';

@Component({
  selector: 'jwn-hero',
  standalone: true,
  template: `
    <section class="hero">
      <div class="shade"></div>
      <div class="container content">
        <div class="badge">
          <span class="dot"></span>
          <span>ESTD 2024 · Worship Movement</span>
        </div>

        <h1>Raising a Sound of Worship Across Nations</h1>
        <p>
          Journey Worship Network is a community of worshippers committed to authentic praise,
          unity, and impact—on stages, in churches, and in the streets.
        </p>

        <div class="cta">
          <a class="btn primary" href="#contact">Join the Movement</a>
          <a class="btn" href="#events">See Events</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero{
      position:relative; min-height: 84vh;
      background: url("/assets/images/hero.jpg") center/cover no-repeat;
      display:flex; align-items:center;
    }
    .shade{
      position:absolute; inset:0;
      background: radial-gradient(1200px 500px at 20% 30%, rgba(156,132,88,.28), transparent 60%),
                  linear-gradient(180deg, rgba(0,0,0,.35), rgba(0,0,0,.78));
    }
    .content{ position:relative; padding: 5rem 0; }
    .badge{
      display:inline-flex; align-items:center; gap:.55rem;
      padding:.45rem .75rem; border-radius: 999px;
      border: 1px solid var(--jwn-border);
      background: rgba(0,0,0,.35);
      color: rgba(255,255,255,.88);
      font-size:.85rem;
      letter-spacing:.06em;
    }
    .dot{ width:8px; height:8px; border-radius:999px; background: var(--jwn-gold); box-shadow: 0 0 0 4px rgba(156,132,88,.18); }
    h1{
      margin: 1.1rem 0 .75rem;
      font-family:'Playfair Display', serif;
      font-size: clamp(2.1rem, 4.3vw, 3.6rem);
      line-height:1.06;
      max-width: 18ch;
    }
    p{ max-width: 60ch; color: rgba(255,255,255,.82); line-height:1.7; font-size:1.05rem; }
    .cta{ margin-top: 1.6rem; display:flex; gap:.75rem; flex-wrap:wrap; }
  `]
})
export class HeroComponent {}
