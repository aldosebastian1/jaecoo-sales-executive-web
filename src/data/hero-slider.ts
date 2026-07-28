export interface HeroSlide {
  id: string;
  title: string;
  modelCode: string;
  description: string;
  imagePath: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 'slide-1',
    title: 'JAECOO J5 EV',
    modelCode: 'J5 EV',
    description: 'Electric Vehicle · Masa Depan Mobilitas',
    imagePath: '/images/hero/hero-slider1.png'
  },
  {
    id: 'slide-2',
    title: 'JAECOO J8 SHS ARDIS',
    modelCode: 'J8 SHS ARDIS',
    description: 'Flagship SUV · Mewah & Canggih',
    imagePath: '/images/hero/hero-slider2.png'
  },
  {
    id: 'slide-3',
    title: 'JAECOO J8 ARDIS',
    modelCode: 'J8 ARDIS',
    description: 'Premium SUV · Tangguh di Segala Medan',
    imagePath: '/images/hero/hero-slider1.png'
  },
  {
    id: 'slide-4',
    title: 'JAECOO J7 SHS',
    modelCode: 'J7 SHS',
    description: 'Smart Hybrid SUV · Efisien & Bertenaga',
    imagePath: '/images/hero/hero-slider1.png'
  }
];
