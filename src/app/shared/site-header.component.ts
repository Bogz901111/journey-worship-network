import { Component } from '@angular/core';

@Component({
  selector: 'jwn-site-header',
  standalone: true,
  template: `
    <header class="hdr">
      <div class="container row">
        <a class="brand" href="/">
          <img class="logo" src="/assets/images/logo-white-bg.jpg" alt="Journey Worship Network logo" />
          <div class="brandText">
            <div class="name">Journey</div>
            <div class="sub">Worship Network</div>
          </div>
        </a>

        <nav class="nav">
          <a href="#about">About</a>
          <a href="#events">Events</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        <div class="actions">
          <a class="btn support" href="https://www.quicket.co.za" target="_blank" rel="noopener">
            Support The Event
          </a>
          <a class="details-btn" href="#gallery">
          View Artists
        </a>
          <a class="btn" href="#contact">Partner</a>
          <a class="btn primary" href="#contact">Join</a>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .hdr{
      position:sticky;
      top:0;
      z-index:20;
      backdrop-filter:blur(10px);
      background:rgba(10,10,10,.72);
      border-bottom:1px solid var(--jwn-border);
    }

    .row{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:1rem;
      padding:.9rem 0;
    }

    .brand{
      display:flex;
      align-items:center;
      gap:.8rem;
    }

    .logo{
      width:42px;
      height:42px;
      border-radius:999px;
      object-fit:cover;
      border:1px solid var(--jwn-border);
    }

    .name{
      font-family:'Playfair Display', serif;
      font-size:1.05rem;
      line-height:1;
    }

    .sub{
      font-size:.75rem;
      color:var(--jwn-muted);
      letter-spacing:.18em;
      text-transform:uppercase;
      margin-top:.15rem;
    }

    .nav{
      display:flex;
      gap:1.1rem;
      color:rgba(255,255,255,.88);
    }

    .nav a{
      padding:.35rem .2rem;
      font-weight:500;
    }

    .nav a:hover{
      color:var(--jwn-white);
    }

    .actions{
      display:flex;
      align-items:center;
      gap:.6rem;
    }

    .support{
      background:linear-gradient(180deg,#ffd461,#d79618);
      color:#050505;
      border-color:transparent;
      font-weight:800;
      padding:.7rem 1rem;
      border-radius:999px;
    }

    .support:hover{
      transform:translateY(-2px);
    }

    @media (max-width:860px){
      .nav{
        display:none;
      }

      .support{
        display:none;
      }
    }
  `]
})
export class SiteHeaderComponent {}