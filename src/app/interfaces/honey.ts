export interface IHoney {
  id:number;
  name: string;
  description: string;
  prices: { [key: number]: number };
  discounts: { [key: number]: number };
  stock: number | null;
  type: string;
  weight: number;
  image: string;
  state: string;
  category: string;
  city: string;
  quantity: number;
  selectedPrice?: number;  // Propiedad opcional para el precio seleccionado
  selectedDto?: number;    // Propiedad opcional para el descuento seleccionado
  otherField?: string;     // Campo opcional utilizado en el formulario
}
