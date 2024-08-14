import { Component, OnInit } from '@angular/core';
import { BaseHoneyComponent } from '../../functionalities/base-honey/base-honey.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-stock-honey',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    TranslateModule,
  ],
  templateUrl: './stock-honey.component.html',
  styleUrl: './stock-honey.component.css'
})
export class StockHoneyComponent implements OnInit {
  
  
  selectedFile: File | null = null;
  products: any[] = [];
  
  newProduct: any = {
    name: '',
    description: '',
    price: '',
    stock: '',
    image: `./assets/img/honey-5043708_1280.jpg`
  };
  showAddProductForm: boolean = false;
  http: any;


  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    this.getProducts();
  }


  getProducts(): void {
    this.stockService.getProducts().subscribe(
      
      (products: any[]) => {
        this.products = products;
        console.log('ese el prod:',products);
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );
  }



  saveChanges(product: any): void {
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
      (response) => {
        console.log('New product added', response);
        this.products.push(response); // Añadir el nuevo producto a la lista
        this.showAddProductForm = false;
        this.newProduct = {}; // Resetear el formulario
      },
      (error) => {
        console.error('Error saving product', error);
      }
    );
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
    formData.append('image', this.selectedFile!); // Añadir la imagen al FormData
    formData.append('otherField', this.newProduct.otherField);
  
    this.http.post('api/v1/products', formData).subscribe((response: any) => {
      console.log('Producto guardado', response);
    });
  }
}
