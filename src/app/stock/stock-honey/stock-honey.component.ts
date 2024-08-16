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
  
  
  selectedFile: File | null = null;
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
    image: './assets/img/honey-5043708_1280.jpg',
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
    }

  // TODO: eso se repite ver mas tarde como ponerlo en el servicio
  // onFileSelected(event: Event): void {
  //   const input = event.target as HTMLInputElement;
  //   if (input.files && input.files[0]) {
  //     const file = input.files[0];
  //     const reader = new FileReader();
  //     reader.onload = (e: any) => {
  //       this.housingLocation.photo = e.target.result;
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }

 

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }
  
  onSubmit() {
    const formData = new FormData();
    
    // Verificar que la imagen no sea undefined
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }
    
    // Verificar que 'otherField' esté definido antes de agregarlo a formData
    if (this.newProduct.otherField) {
      formData.append('otherField', this.newProduct.otherField);
    }
  
    // Puedes hacer lo mismo con otros campos opcionales
    this.http.post('api/v1/products', formData).subscribe(
      (response: any) => {
        console.log('Producto guardado', response);
      },
      (error: any) => {
        console.error('Error al guardar el producto', error);
      }
    );
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

    // Método para resetear `newProduct` al añadir un nuevo producto
    // defaultProduct(): IHoney {
    //   return {
    //     name: '',
    //     description: '',
    //     prices: { '1000': 0, '500': 0, '250': 0 },
    //     discounts: { '1000': 0, '500': 0, '250': 0 },
    //     stock: null,
    //     type: '',
    //     weight: '',
    //     image: './assets/img/honey-5043708_1280.jpg',
    //     state: '',
    //     category: '',
    //     city: ''
    //   };
    // }
}
