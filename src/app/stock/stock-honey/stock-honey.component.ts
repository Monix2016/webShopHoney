import { Component, OnInit } from '@angular/core';
import { FormsModule,FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
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
    ReactiveFormsModule,
    TranslateModule,
    UploadImgComponent
  ],
  templateUrl: './stock-honey.component.html',
  styleUrl: './stock-honey.component.css'
})
export class StockHoneyComponent implements OnInit {
  
   products: IHoney[] = [];  
   productForm!: FormGroup;

  showAddProductForm: boolean = false;
  http: any;


  constructor(
    private stockService: StockService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.getProducts();
  }

// Inicializa el FormGroup
initializeForm(): void {
  this.productForm = this.fb.group({
    name: ['tstForm', Validators.required],
    description: ['tstForm'],
    prices: this.fb.group({
      '1000': [0, Validators.required],
      '500': [0, Validators.required],
      '250': [0, Validators.required]
    }),
    discounts: this.fb.group({
      '1000': [0],
      '500': [0],
      '250': [0]
    }),
    stock: [null, Validators.required],
    type: ['HN', Validators.required],
    weight: ['1000'],
    image: ['honey-5043708_1280.jpg'],
    state: ['SI', Validators.required],
    category: ['HH', Validators.required],
    city: ['Rabat'],
    quantity: [2],
  });
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


  addProduct(): void {
    this.showAddProductForm = true;
  }

  saveNewProduct(): void {
    if (this.productForm.valid) {
      const newProduct: IHoney = this.productForm.value;
      this.stockService.saveProduct(newProduct).subscribe(
        (response: IHoney) => {
          this.products.push(response);
          this.showAddProductForm = false;
          console.log('Los datos del nuevo Formulario',response);
          this.productForm.reset();  // Resetear el formulario después de guardar
        },
        (error) => {
          console.error('Error saving product', error);
        }
      );
    }
  }

  saveChanges(product: IHoney): void {
    this.stockService.updateProduct(product).subscribe(
      (response) => {
        console.log('Product updated', response);
      },
      (error) => {
        console.error('Error updating product', error);
      }
    );
  }



  onImageUploaded(imageName: string): void {
    this.productForm.patchValue({ image: imageName });
  }


  onWeightChange(product: any): void {
    const selectedWeight = product.weight;
    const price = this.stockService.getPrice(product, selectedWeight);
    const discount = this.stockService.getDto(product, selectedWeight);

    if (price !== null) {
      product.selectedPrice = price;
    }

    if (discount !== null) {
      product.selectedDto = discount;
    }
  }
}


