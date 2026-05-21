import { Component } from '@angular/core';

@Component({
  selector: 'jwn-events-highlight',
  standalone: true,
  template: `
    <section class="section" id="events">
      <div class="container">
        <div class="top">
          <div>
            <div class="kicker">Events</div>
            <div class="h2">Worship nights & gatherings</div>
            <p class="p">From outdoor worship to church collaborations — here are recent moments.</p>
          </div>
          <a class="btn" href="#contact">Book / Invite Us</a>
        </div>

        <div class="grid">
          <article class="card tile">
            <img src="assets/images/event-crowd.jpg" alt="Worship crowd event" />
            <div class="body">
              <div class="tag">Gathering</div>
              <h3>Community Worship Night</h3>
              <p>Live worship, prayer, and fellowship under open skies.</p>

              <a 
              href="https://www.quicket.co.za/events/your-event"
              target="_blank"
              class="btn primary"
            >
              Buy Tickets
            </a>

            </div>
          </article>

          <article class="card tile">
            <img src="assets/images/worship-dance.jpg" alt="Worship dancing" />
            <div class="body">
              <div class="tag">Praise</div>
              <h3>Moments of Joy</h3>
              <p>Celebrating the goodness of God through praise and dance.</p>
            </div>
          </article>

          <article class="card tile wide">
            <img src="assets/images/drone-wide.jpg" alt="Drone view of event venue" />
            <div class="body">
              <div class="tag">Outreach</div>
              <h3>Open-Air Worship Experience</h3>
              <p>A snapshot of the atmosphere — worship filling the space.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .top{ display:flex; align-items:flex-end; justify-content:space-between; gap:1rem; margin-bottom:1.25rem; }
    .grid{ display:grid; grid-template-columns: 1fr 1fr; gap:1rem; }
    .tile{ overflow:hidden; }
    .tile img{ width:100%; height:240px; object-fit:cover; display:block; }
    .wide{ grid-column: 1 / -1; }
    .wide img{ height: 280px; }
    .body{ padding: 1rem 1.05rem 1.15rem; }
    .tag{ display:inline-block; font-size:.75rem; letter-spacing:.22em; text-transform:uppercase; color:#0b0b0b;
      background: var(--jwn-gold); padding:.35rem .55rem; border-radius: 999px; }
    h3{ margin:.7rem 0 .35rem; font-size:1.15rem; }
    p{ margin:0; color: rgba(255,255,255,.75); line-height:1.55; }
    @media (max-width: 860px){
      .top{ flex-direction:column; align-items:flex-start; }
      .grid{ grid-template-columns:1fr; }
      .wide{ grid-column:auto; }
    }
  `]
})
export class EventsHighlightComponent {}
