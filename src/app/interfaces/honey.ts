export interface IHoney {
  id:number;
  name: string;
  description: string;
  prices: { [key: string]: number };
  discounts: { [key: string]: number };
  stock: number | null;
  type: string;
  weight: string;
  image: string;
  state: string;
  category: string;
  city: string;
  quantity: number;
  selectedPrice?: number;  // Propiedad opcional para el precio seleccionado
  selectedDto?: number;    // Propiedad opcional para el descuento seleccionado
  otherField?: string;     // Campo opcional utilizado en el formulario
}
