import { IHoney } from "../../app/interfaces/honey";

export const MOCKHONEYS:IHoney[]=[{
    id: 0,
    type:"HN",
    name: 'Miel de test 1',
    description: 'Miel de test 1',
    
    weight:1,
    image: `./assets/img/honey-5043708_1280.jpg`,
    city: 'Rabat',
    state: 'En Stock',
    category:'HH',
    prices: { 1000: 5, 500: 2, 250: 1 },
    quantity: 5,
    photo: `./assets/img/honey-823614_1280.jpg`,
    availableUnits: 4,
    wifi: true,
    discount: 60,


  },
  {
    id: 1,
    type:"HN",
    name: 'Miel de test 2',
    description: 'Miel de test 2',
    
    weight:2,
    image: `./assets/img/honey-5043708_1280.jpg`,
    city: 'Sale',
    state: 'No Disponible',
    category:'HH',
    prices: { 1000: 11, 500: 6, 250: 3.5 },
    quantity: 4,
    photo: `./assets/img/honey-507139_1280.jpg`,
    availableUnits: 0,
    wifi: false,
    discount: 60,

  },
  {
    id: 2,
    type:"HN",
    name: 'Miel de test 3',
    description: 'Miel de test 3',
    
    weight:5,
    image: `./assets/img/honey-5043708_1280.jpg`,
    city: 'Marrakech',
    state: 'En stock',
    category:'HH',
    prices: { 1000: 22, 500: 12, 250: 17 },
    quantity: 5,
    photo: `./assets/img/honey-507147_1280.jpg`,
    availableUnits: 1,
    wifi: false,
    discount: 20,

  },
  {
    id: 3,
    type:"HN",
    name: 'Miel de test 4',
    description: 'Miel de test 4',
    
    weight:3,
    image: `./assets/img/honey-5043708_1280.jpg`,
    city: 'Chicago',
    state: 'No disponible',
    category:'HC',
    prices: { 1000: 33, 500: 17, 250: 10 },
    quantity: 1,
    photo: `./assets/img/honey-4926890_1280.jpg`,
    availableUnits: 1,
    wifi: true,
    discount: 20,

  },
  {
    id: 4,
    type:"HN",
    name: 'Miel de test 5',
    description: 'Miel de test 5',
    
    weight:4,
    image: `./assets/img/honey-5043708_1280.jpg`,
    city: 'Gary',
    state: 'En stock',
    category:'HC',
    prices: { 1000: 44, 500: 23, 250: 15 },
    quantity: 3,
    photo: `./assets/img/honey-5043708_1280.jpg`,
    availableUnits: 1,
    wifi: true,
    discount: 20,

  },
  {
    id: 5,
    type:"HN",
    name: 'Miel de test 6',
    description: 'Miel de test 6',
    
    weight:5,
    image: `./assets/img/honey-5043708_1280.jpg`,
    city: 'Oakland',
    state: 'En stock',
    category:'HE',
    prices: { 1000: 88, 500: 45, 250: 25 },
    quantity: 2,
    photo: `./assets/img/honey-823614_1280.jpg`,
    availableUnits: 2,
    wifi: true,
    discount: 60,

}
]