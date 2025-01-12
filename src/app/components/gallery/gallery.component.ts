import { Album } from '@app-types/album.type';
import { SliderImages } from '@app-types/sliderImages.type';

import {
  Component,
  ElementRef,
  QueryList,
  ViewEncapsulation,
  ViewChildren,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GalleryComponent {
  openModalDialog: boolean = false;
  album?: Album;
  selectedAlbumSlides: SliderImages[] = [];

  @ViewChild('swiper') swiperRef?: ElementRef;
  @ViewChildren('galleryProject') galleryProject!: QueryList<ElementRef>;

  constructor() {}

  onHide() {
    this.album = undefined;
    this.selectedAlbumSlides = [];
  }

  goPrev() {
    this.swiperRef?.nativeElement.swiper.slidePrev();
  }

  goNext() {
    this.swiperRef?.nativeElement.swiper.slideNext();
  }

  openModal(album: Album) {
    this.openModalDialog = true;
    this.album = album;
    this.selectedAlbumSlides = album.SliderImages;
    this.swiperRef?.nativeElement.focus();
  }

  //ALBUMS PHOTO DATA
  albums: Album[] = [
    {
      thumbnailSrc: '../../assets/images/gallery/thumbnails/gti-thumbnail.webp',
      thumbnailDescription: 'GTI | 2020',
      thumbnailAlt: 'Album - GTI 2020',
      SliderImages: [
        {
          src: '../../assets/images/gallery/project/gti/gti01.jpg',
          alt: 'album picture GTI 01',
        },
        {
          src: '../../assets/images/gallery/project/gti/gti02.jpg',
          alt: 'album picture GTI 02',
        },
        {
          src: '../../assets/images/gallery/project/gti/gti03.jpg',
          alt: 'album picture GTI 03',
        },
        {
          src: '../../assets/images/gallery/project/gti/gti04.jpg',
          alt: 'album picture GTI 04',
        },
        {
          src: '../../assets/images/gallery/project/gti/gti05.jpg',
          alt: 'album picture GTI 05',
        },
        {
          src: '../../assets/images/gallery/project/gti/gti06.jpg',
          alt: 'album picture GTI 06',
        },
        {
          src: '../../assets/images/gallery/project/gti/gti07.jpg',
          alt: 'album picture GTI 07',
        },
        {
          src: '../../assets/images/gallery/project/gti/gti08.jpg',
          alt: 'album picture GTI 08',
        },
      ],
    },
    {
      thumbnailSrc:
        '../../assets/images/gallery/thumbnails/summer2020-thumbnail.webp',
      thumbnailDescription: 'Summer | 2020',
      thumbnailAlt: 'Album - Summer 2020',
      SliderImages: [
        {
          src: '../../assets/images/gallery/project/summer2020/summer202001.jpg',
          alt: 'album picture Summer 01',
        },
        {
          src: '../../assets/images/gallery/project/summer2020/summer202002.jpg',
          alt: 'album picture Summer 02',
        },
        {
          src: '../../assets/images/gallery/project/summer2020/summer202003.jpg',
          alt: 'album picture Summer 03',
        },
        {
          src: '../../assets/images/gallery/project/summer2020/summer202004.jpg',
          alt: 'album picture Summer 04',
        },
        {
          src: '../../assets/images/gallery/project/summer2020/summer202005.jpg',
          alt: 'album picture Summer 05',
        },
        {
          src: '../../assets/images/gallery/project/summer2020/summer202006.jpg',
          alt: 'album picture Summer 06',
        },
        {
          src: '../../assets/images/gallery/project/summer2020/summer202007.jpg',
          alt: 'album picture Summer 07',
        },
      ],
    },

    {
      thumbnailSrc:
        '../../assets/images/gallery/thumbnails/autumm2019-thumbnail.webp',
      thumbnailDescription: 'Autumm | 2019',
      thumbnailAlt: 'Album - Autumm 2019',
      SliderImages: [
        {
          src: '../../assets/images/gallery/project/autumm2019/autumm201901.jpg',
          alt: 'album picture Autumm 01',
        },
        {
          src: '../../assets/images/gallery/project/autumm2019/autumm201902.jpg',
          alt: 'album picture Autumm 02',
        },
        {
          src: '../../assets/images/gallery/project/autumm2019/autumm201903.jpg',
          alt: 'album picture Autumm 03',
        },
        {
          src: '../../assets/images/gallery/project/autumm2019/autumm201904.jpg',
          alt: 'album picture Autumm 04',
        },
        {
          src: '../../assets/images/gallery/project/autumm2019/autumm201905.jpg',
          alt: 'album picture Autumm 05',
        },
        {
          src: '../../assets/images/gallery/project/autumm2019/autumm201906.jpg',
          alt: 'album picture Autumm 06',
        },
        {
          src: '../../assets/images/gallery/project/autumm2019/autumm201907.jpg',
          alt: 'album picture Autumm 07',
        },
        {
          src: '../../assets/images/gallery/project/autumm2019/autumm201908.jpg',
          alt: 'album picture Autumm 08',
        },
        {
          src: '../../assets/images/gallery/project/autumm2019/autumm201909.jpg',
          alt: 'album picture Autumm 09',
        },
      ],
    },
    {
      thumbnailSrc:
        '../../assets/images/gallery/thumbnails/berchtesgaden-thumbnail.webp',
      thumbnailDescription: 'Berchtesgaden | 2019',
      thumbnailAlt: 'Album - Berchtesgaden 2019',
      SliderImages: [
        {
          src: '../../assets/images/gallery/project/berchtesgaden/berchtesgaden01.jpg',
          alt: 'album picture Berchtesgaden 01',
        },
        {
          src: '../../assets/images/gallery/project/berchtesgaden/berchtesgaden02.jpg',
          alt: 'album picture Berchtesgaden 02',
        },
        {
          src: '../../assets/images/gallery/project/berchtesgaden/berchtesgaden03.jpg',
          alt: 'album picture Berchtesgaden 03',
        },
        {
          src: '../../assets/images/gallery/project/berchtesgaden/berchtesgaden04.jpg',
          alt: 'album picture Berchtesgaden 04',
        },
      ],
    },

    {
      thumbnailSrc:
        '../../assets/images/gallery/thumbnails/mannheim-thumbnail.webp',
      thumbnailDescription: 'Mannheim | 2019',
      thumbnailAlt: 'Album - Mannheim 2019',
      SliderImages: [
        {
          src: '../../assets/images/gallery/project/mannheim/mannheim01.jpg',
          alt: 'album picture Mannheim 01',
        },
        {
          src: '../../assets/images/gallery/project/mannheim/mannheim02.jpg',
          alt: 'album picture Mannheim 02',
        },
        {
          src: '../../assets/images/gallery/project/mannheim/mannheim03.jpg',
          alt: 'album picture Mannheim 03',
        },
        {
          src: '../../assets/images/gallery/project/mannheim/mannheim04.jpg',
          alt: 'album picture Mannheim 04',
        },
        {
          src: '../../assets/images/gallery/project/mannheim/mannheim05.jpg',
          alt: 'album picture Mannheim 05',
        },
        {
          src: '../../assets/images/gallery/project/mannheim/mannheim06.jpg',
          alt: 'album picture Mannheim 06',
        },
        {
          src: '../../assets/images/gallery/project/mannheim/mannheim07.jpg',
          alt: 'album picture Mannheim 07',
        },
        {
          src: '../../assets/images/gallery/project/mannheim/mannheim08.jpg',
          alt: 'album picture Mannheim 08',
        },
      ],
    },
    {
      thumbnailSrc:
        '../../assets/images/gallery/thumbnails/heidelberg-thumbnail.webp',
      thumbnailDescription: 'Heidelberg | 2019',
      thumbnailAlt: 'Album - Heidelberg 2019',
      SliderImages: [
        {
          src: '../../assets/images/gallery/project/heidelberg/heidelberg01.jpg',
          alt: 'album picture Heidelberg 01',
        },
        {
          src: '../../assets/images/gallery/project/heidelberg/heidelberg02.jpg',
          alt: 'album picture Heidelberg 02',
        },
        {
          src: '../../assets/images/gallery/project/heidelberg/heidelberg03.jpg',
          alt: 'album picture Heidelberg 03',
        },
        {
          src: '../../assets/images/gallery/project/heidelberg/heidelberg04.jpg',
          alt: 'album picture Heidelberg 04',
        },
      ],
    },
    {
      thumbnailSrc:
        '../../assets/images/gallery/thumbnails/barcelona-thumbnail.webp',
      thumbnailDescription: 'Barcelona | 2019',
      thumbnailAlt: 'Album - Barcelona 2019',
      SliderImages: [
        {
          src: '../../assets/images/gallery/project/barcelona/barcelona01.jpg',
          alt: 'album picture Barcelona 01',
        },
        {
          src: '../../assets/images/gallery/project/barcelona/barcelona02.jpg',
          alt: 'album picture Barcelona 02',
        },
        {
          src: '../../assets/images/gallery/project/barcelona/barcelona03.jpg',
          alt: 'album picture Barcelona 03',
        },
        {
          src: '../../assets/images/gallery/project/barcelona/barcelona04.jpg',
          alt: 'album picture Barcelona 04',
        },
        {
          src: '../../assets/images/gallery/project/barcelona/barcelona05.jpg',
          alt: 'album picture Barcelona 05',
        },
        {
          src: '../../assets/images/gallery/project/barcelona/barcelona06.jpg',
          alt: 'album picture Barcelona 06',
        },
        {
          src: '../../assets/images/gallery/project/barcelona/barcelona07.jpg',
          alt: 'album picture Barcelona 07',
        },
        {
          src: '../../assets/images/gallery/project/barcelona/barcelona08.jpg',
          alt: 'album picture Barcelona 08',
        },
        {
          src: '../../assets/images/gallery/project/barcelona/barcelona09.jpg',
          alt: 'album picture Barcelona 09',
        },
        {
          src: '../../assets/images/gallery/project/barcelona/barcelona10.jpg',
          alt: 'album picture Barcelona 10',
        },
        {
          src: '../../assets/images/gallery/project/barcelona/barcelona11.jpg',
          alt: 'album picture Barcelona 11',
        },
        {
          src: '../../assets/images/gallery/project/barcelona/barcelona12.jpg',
          alt: 'album picture Barcelona 12',
        },
        {
          src: '../../assets/images/gallery/project/barcelona/barcelona13.jpg',
          alt: 'album picture Barcelona 13',
        },
        {
          src: '../../assets/images/gallery/project/barcelona/barcelona14.jpg',
          alt: 'album picture Barcelona 14',
        },
      ],
    },
    {
      thumbnailSrc:
        '../../assets/images/gallery/thumbnails/aalen-thumbnail.webp',
      thumbnailDescription: 'Aalen | 2018',
      thumbnailAlt: 'Album - Aalen 2018',
      SliderImages: [
        {
          src: '../../assets/images/gallery/project/aalen/aalen01.jpg',
          alt: 'album picture Aalen 01',
        },
        {
          src: '../../assets/images/gallery/project/aalen/aalen02.jpg',
          alt: 'album picture Aalen 02',
        },
        {
          src: '../../assets/images/gallery/project/aalen/aalen03.jpg',
          alt: 'album picture Aalen 03',
        },
      ],
    },
  ];
}
