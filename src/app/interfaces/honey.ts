export interface IHoney {
  id: number;
  type:string;
  name: string;
  description: string;
  weight:number;
  image: string;
  city: string;
  state: string;
  photo: string;
  category:string;
  prices: { [weight: number]: number };// Prices based on weight
  quantity:number;
  availableUnits: number;
  wifi: boolean;
  discount: number;
}
