import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { StockService } from '../../services/stock.service';
import { IHoney } from '../../interfaces/honey';
import { UploadImgComponent } from '../../functionalities/upload-img/upload-img.component';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  productForms: FormGroup[] = [];

  showAddProductForm: boolean = false;
  http: any;


  constructor(
    private stockService: StockService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.getProducts();
  }

  // Inicializa el FormGroup
  initializeForm(): void {
    this.productForm = this.fb.group({
      name: ['tstForm', Validators.required],
      description: ['tstForm', Validators.required],
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
      stock: [0, Validators.required],
      type: ['HN', Validators.required],
      weight: ['1000', Validators.required],
      image: ['honey-5043708_1280.jpg'],
      state: ['SI', Validators.required],
      category: ['HH', Validators.required],
      city: ['Rabat', Validators.required],
      quantity: [2],
    });
  }

  createProductForm(product: IHoney): FormGroup {
    return this.fb.group({
      name: [product.name, Validators.required],
      description: [product.description, Validators.required],
      prices: this.fb.group({
        '1000': [product.prices['1000'], Validators.required],
        '500': [product.prices['500'], Validators.required],
        '250': [product.prices['250'], Validators.required],
      }),
      discounts: this.fb.group({
        '1000': [product.discounts['1000']],
        '500': [product.discounts['500']],
        '250': [product.discounts['250']],
      }),
      stock: [product.stock, Validators.required],
      type: [product.type, Validators.required],
      weight: [product.weight, Validators.required],
      image: [product.image],
      state: [product.state, Validators.required],
      category: [product.category, Validators.required],
      city: [product.city, Validators.required],
      quantity: [product.quantity],
    });
  }

  getProducts(): void {
    this.stockService.getProducts().subscribe(
      (products: IHoney[]) => {
        this.products = products;
        this.productForms = products.map(product => this.createProductForm(product));
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );
  }


  addProduct(): void {
    this.showAddProductForm = true;
    this.initializeForm();
  }

  saveNewProduct(): void {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }

    if (this.productForm.valid) {
      const newProduct: IHoney = this.productForm.value;
      this.stockService.saveProduct(newProduct).subscribe(
        (response: IHoney) => {
          this.products.push(response);
          this.showAddProductForm = false;
          console.log('Los datos del nuevo Formulario', response);
          this.productForm.reset();  // Resetear el formulario después de guardar
          
          this.snackBar.open('Producto añadido correctamente', 'Cerrar', {
            duration: 3000,
          });
          this.getProducts();
          //this.initializeForm();
        },
        (error) => {
          console.error('Error saving product', error);
          this.snackBar.open('Error al añadir el producto', 'Cerrar', {
            duration: 3000,
          });
        }
      );
    }
  }

  saveChanges(index: number): void {
    console.log('Product Forms:', this.productForms);
    console.log('Index:', index);
    console.log('Product Forms length:', this.productForms.length);
    const updatedProduct = this.productForms[index]?.value;  // Obtén los valores del formulario

    if (index < 0 || index >= this.productForms.length) {
      console.error(`Index ${index} is out of bounds`);
      return;
    }
    if (!this.productForms[index]) {
      console.error(`Form at index ${index} is undefined`);
      return;
    }
    if (this.productForms[index].invalid) {
      this.productForms[index].markAllAsTouched();
      return;
    }

    this.stockService.updateProduct(updatedProduct,index).subscribe(
      (response) => {
        console.log('Product updated', response);
        this.snackBar.open('Producto actualizado correctamente', 'Cerrar', { duration: 3000 });
      },
      (error) => {
        console.error('Error updating product', error);
        this.snackBar.open('Error al actualizar el producto', 'Cerrar', { duration: 3000 });
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




  removeProduct(index: number): void {
    // Verifica que el índice esté dentro de los límites del array
    console.log('Estoy en el removeProduct :', index);
    console.log('el numero de registros :', this.productForms.length);
    if (index >= 0 && index <= this.productForms.length) {
      // Eliminar producto
      this.products.splice(index, 1);
  
      // Eliminar el formulario correspondiente
      this.productForms.splice(index, 1);

      console.log('Estoy en el removeProduct ante de llamar al  metodo deleteProduct :', index);
      this.stockService.deleteProduct(index).subscribe(
        (response) => {
          console.log('Product updated', response);
          this.snackBar.open('Producto eliminado correctamente', 'Cerrar', { duration: 3000 });
        },
        (error) => {
          console.error('Error updating product', error);
          this.snackBar.open('Error al eliminar el producto', 'Cerrar', { duration: 3000 });
        }
      );
      this.snackBar.open('Producto eliminado correctamente', 'Cerrar', { duration: 3000 });
      // Opcional: reindexar si es necesario
      this.reindexForms();
    } else {
      console.error(`Index ${index} is out of bounds`);
      this.snackBar.open('Error al eliminar', 'Cerrar', { duration: 3000 });
    }
  }

  
  reindexForms(): void {
    this.productForms.forEach((form, i) => {
      form.get('id')?.setValue(i); // Actualiza el índice o ID si lo estás manejando en los formularios
    });
  }
}


