import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'exploreplaces';
  slides = [
    {
      src: 'https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp',
      img: 'https://mdbootstrap.com/img/Photos/Slides/1.webp',
      alt: 'Table Full of Spices',
    },
    {
      src: 'https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/2.webp',
      img: 'https://mdbootstrap.com/img/Photos/Slides/2.webp',
      alt: 'Winter Landscape',
    },
    {
      src: 'https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/3.webp',
      img: 'https://mdbootstrap.com/img/Photos/Slides/3.webp',
      alt: 'View of the City in the Mountains',
    },
    {
      src: 'https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/4.webp',
      img: 'https://mdbootstrap.com/img/Photos/Slides/4.webp',
      alt: 'Place Royale Bruxelles',
    },
  ];
}
