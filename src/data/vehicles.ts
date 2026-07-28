export interface Vehicle {
  id: number;
  name: string;
  slogan: string;
  priceLabel: string;
  priceValue: string;
  image: string;
}

export const vehicles: Vehicle[] = [
  {
    id: 1,
    name: 'JAECOO J7',
    slogan: 'Beyond Classic',
    priceLabel: 'Mulai',
    priceValue: 'Rp 600 Juta',
    image: '/images/catalog/jaecoo-catalog.png',
  },
  {
    id: 2,
    name: 'JAECOO J5',
    slogan: 'Born to Be Wild',
    priceLabel: 'Mulai',
    priceValue: 'Rp 500 Juta',
    image: '/images/catalog/jaecoo-catalog.png',
  },
  {
    id: 3,
    name: 'JAECOO J8',
    slogan: 'Luxury Off-Road',
    priceLabel: 'Mulai',
    priceValue: 'Rp 800 Juta',
    image: '/images/catalog/jaecoo-catalog.png',
  },
  {
    id: 4,
    name: 'JAECOO J7 PHEV',
    slogan: 'Super Hybrid',
    priceLabel: 'Mulai',
    priceValue: 'Rp 700 Juta',
    image: '/images/catalog/jaecoo-catalog.png',
  },
];
