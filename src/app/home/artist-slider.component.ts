import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'jwn-artist-slider',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="artist-section" id="artists">
      <div class="wrap">
        <p class="kicker">Featured Ministers</p>
        <h2>Meet the voices around the fire</h2>

        <div class="slider-window">
          <div class="slider-track">
            <article class="poster" *ngFor="let poster of posters">
              <img [src]="'/assets/images/' + poster" alt="Worship Around The Fire poster" />
            </article>

            <article class="poster" *ngFor="let poster of posters">
              <img [src]="'/assets/images/' + poster" alt="Worship Around The Fire poster" />
            </article>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .artist-section{
      background:#070707;
      color:white;
      padding:4rem 0;
      border-top:1px solid rgba(212,166,60,.25);
      overflow:hidden;
    }

    .wrap{
      width:min(1150px, calc(100% - 2rem));
      margin:0 auto;
    }

    .kicker{
      color:#d4a63c;
      text-transform:uppercase;
      letter-spacing:.22em;
      font-size:.78rem;
      font-weight:800;
    }

    h2{
      font-family:'Playfair Display', serif;
      font-size:clamp(2rem,4vw,3rem);
      margin:.5rem 0 1.5rem;
    }

    .slider-window{
      overflow:hidden;
      width:100%;
    }

    .slider-track{
      display:flex;
      gap:1rem;
      width:max-content;
      animation: slide 35s linear infinite;
    }

    .slider-track:hover{
      animation-play-state:paused;
    }

    .poster{
      width:300px;
      flex:0 0 300px;
      border-radius:18px;
      overflow:hidden;
      background:#111;
      border:1px solid rgba(255,255,255,.12);
      box-shadow:0 18px 50px rgba(0,0,0,.32);
    }

    img{
      width:100%;
      display:block;
      aspect-ratio:4/5.65;
      object-fit:cover;
    }

    @keyframes slide{
      from{ transform:translateX(0); }
      to{ transform:translateX(-50%); }
    }

    @media(max-width:760px){
      .poster{
        width:240px;
        flex-basis:240px;
      }
    }
  `]
})
export class ArtistSliderComponent {
  posters = [
    'poster1.jpeg',
    'poster2.jpeg',
    'poster3.jpeg',
    'poster4.jpeg',
    'poster5.jpeg',
    'poster6.jpeg',
    'poster7.jpeg','poster8.jpeg',
  ];
}
