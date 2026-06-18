import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'jwn-hero',
  standalone: true,
  imports: [CommonModule],

  template: `
    <section class="hero">
      <div class="hero-content">



      </div>
    </section>
  `,

  styles: [`
    .hero{
      min-height:calc(100vh - 76px);
      background:
      linear-gradient(rgba(0,0,0,.05), rgba(0,0,0,.25)),
      url("/assets/images/H.jpeg") center center / cover no-repeat;
      background-color:#050505;

      display:flex;
      align-items:center;
    }

    .hero-content{
      max-width:700px;
      padding:80px;
      color:white;
    }

    .eyebrow{
      color:#f5c542;
      letter-spacing:2px;
      font-weight:700;
      margin-bottom:1rem;
    }

    h1{
      font-size:5rem;
      line-height:1;
      margin:0 0 1rem;
    }

    .date,
    .venue{
      font-size:1.2rem;
      margin-bottom:1rem;
    }

    .hero-buttons{
      display:flex;
      gap:1rem;
      margin-top:2rem;
    }

    .support-btn{
      background:#f5c542;
      color:#111;
      padding:14px 24px;
      border-radius:8px;
      text-decoration:none;
      font-weight:700;
    }

    .details-btn{
      border:2px solid white;
      color:white;
      padding:14px 24px;
      border-radius:8px;
      text-decoration:none;
    }

    @media(max-width:760px){
      .hero{
        min-height:75vh;
      }

      .hero-content{
        padding:40px 20px;
      }

      h1{
        font-size:3rem;
      }

      .hero-buttons{
        flex-direction:column;
      }
    }
  `]
})
export class HeroComponent {}