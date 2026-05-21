import { Component } from '@angular/core';

@Component({
  selector: 'jwn-site-footer',
  standalone: true,
  template: `
    <footer class="ftr" id="contact">
      <div class="container grid">
        <div>
          <div class="kicker">Journey Worship Network</div>
          <div class="title">Let’s build worship moments together.</div>
          <p class="p">Bookings • Partnerships • Worship nights • Community outreach</p>
        </div>

        <div class="card box">
          <div class="label">Contact</div>
          <p class="p small">Email: info@journeyworshipnetwork.org<br/>Phone: +27 (0) __ __ __ __</p>
          <div class="row">
            <a class="btn" href="#">Facebook</a>
            <a class="btn" href="#">YouTube</a>
            <a class="btn" href="#">Instagram</a>
          </div>
        </div>
      </div>

      <div class="container bottom">
        <span>© {{year}} Journey Worship Network. All rights reserved.</span>
        <span class="muted">ESTD 2024</span>
      </div>
    </footer>
  `,
  styles: [`
    .ftr{ padding: 3.5rem 0 2rem; border-top:1px solid var(--jwn-border); background: rgba(255,255,255,.02); }
    .grid{ display:grid; grid-template-columns: 1.2fr .8fr; gap:1.25rem; align-items:start; }
    .title{ font-family:'Playfair Display', serif; font-size:1.7rem; margin:.5rem 0 .25rem; }
    .box{ padding:1.25rem; }
    .label{ letter-spacing:.22em; text-transform:uppercase; font-size:.75rem; color: var(--jwn-muted); }
    .small{ font-size:.95rem; }
    .row{ display:flex; flex-wrap:wrap; gap:.55rem; margin-top:.8rem; }
    .bottom{ display:flex; justify-content:space-between; gap:1rem; padding-top:1.5rem; color: rgba(255,255,255,.75); font-size:.9rem; }
    .muted{ color: var(--jwn-muted); }
    @media (max-width: 860px){
      .grid{ grid-template-columns:1fr; }
      .bottom{ flex-direction:column; }
    }
  `]
})
export class SiteFooterComponent { year = new Date().getFullYear(); }
