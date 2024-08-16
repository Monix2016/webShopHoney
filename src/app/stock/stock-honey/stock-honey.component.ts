import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { StockService } from '../../services/stock.service';
import { IHoney } from '../../interfaces/honey';
import { UploadImgComponent } from '../../functionalities/upload-img/upload-img.component';

@Component({
  selector: 'app-stock-honey',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    TranslateModule,
    UploadImgComponent
  ],
  templateUrl: './stock-honey.component.html',
  styleUrl: './stock-honey.component.css'
})
export class StockHoneyComponent implements OnInit {
  
   products: IHoney[] = [];  
  // Definir `newProduct` utilizando la interfaz IHoney
  newProduct: IHoney = {
    name: '',
    description: '',
    prices: { '1000': 0, '500': 0, '250': 0 },
    discounts: { '1000': 0, '500': 0, '250': 0 },
    stock: null,
    type: '',
    weight: '1000',
    image: 'honey-5043708_1280.jpg',
    state: '',
    category: '',
    city: '',
    quantity: 2,
    id: 0
  };
  showAddProductForm: boolean = false;
  http: any;


  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    this.getProducts();
  }


  getProducts(): void {
    this.stockService.getProducts().subscribe(
	  
      (products: IHoney[]) => {
        this.products = products;
        console.log('ese el prod:', products);
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );
  }



  saveChanges(product: IHoney): void {
    console.log('Saving changes for product:', product); // Debugging
    this.stockService.updateProduct(product).subscribe(
      (response) => {
        console.log('Product updated', response);
      },
      (error) => {
        console.error('Error updating product', error);
      }
    );
  }

  addProduct(): void {
    this.showAddProductForm = true;
  }

  saveNewProduct(): void {
    this.stockService.saveProduct(this.newProduct).subscribe(
      (response: IHoney) => {
        this.products.push(response); // El ID se incluye aquí desde la respuesta del servidor
        this.showAddProductForm = false;
        this.newProduct = {} as IHoney; // Resetear el formulario
      },
      (error) => {
        console.error('Error saving product', error);
      }
    );
  }

    // Método para guardar el producto
    saveProduct() {
      const productData: IHoney  = {
        ...this.newProduct,
        prices: this.newProduct.prices,
        discounts: this.newProduct.discounts,
        
      };
  
      this.stockService.saveProduct(productData).subscribe(
        (response) => {
          console.log('Producto guardado', response);
        },
        (error) => {
          console.error('Error al guardar el producto', error);
        }
      );
    }

    onImageUploaded(imageName: string): void {
      this.newProduct.image = imageName; // Guardar el nombre de la imagen en el producto
      console.log("El nombre de la imagen desde TS",imageName)
    }



  onWeightChange(product: any): void {
    const selectedWeight = product.weight;
    const price = this.stockService.getPrice(product, selectedWeight);
    const discount = this.stockService.getDto(product, selectedWeight);
    if (price !== null) {
      product.selectedPrice = price;
    } else {
      console.error('Price not found for the selected weight.');
    }
  
    if (discount !== null) {
      product.selectedDto = discount;
    } else {
      console.error('Discount not found for the selected weight.');
    }
  }

}
