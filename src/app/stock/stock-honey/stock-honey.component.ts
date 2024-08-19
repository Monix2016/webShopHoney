import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { StockService } from '../../services/stock.service';
import { IHoney } from '../../interfaces/honey';
import { UploadImgComponent } from '../../functionalities/upload-img/upload-img.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddProductComponent } from './add-product/add-product.component';

@Component({
  selector: 'app-stock-honey',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    UploadImgComponent,
    AddProductComponent
  ],
  templateUrl: './stock-honey.component.html',
  styleUrl: './stock-honey.component.css'
})
export class StockHoneyComponent implements OnInit {

  products: IHoney[] = [];


  productForms: FormGroup[] = [];


  http: any;
  selectedFile: File | null = null;

  constructor(
    private stockService: StockService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

    this.getProducts();
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

  onFileChange(event: any,index: number) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0].name;
      console.log('el file selecionado',this.selectedFile)
          // Actualiza el campo 'image' en el formulario
    this.productForms[index].patchValue({ image: this.selectedFile });
    }
   
  }

  onImageUploaded(imageName: string, index: number): void {
    console.log('Imagen subida:', imageName);
    this.productForms[index].patchValue({ image: imageName });
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
    if (index >= 0 && index < this.products.length) {
      this.products.splice(index, 1);
      this.productForms.splice(index, 1);
      this.stockService.deleteProduct(index).subscribe(
        () => this.snackBar.open('Producto eliminado correctamente', 'Cerrar', { duration: 3000 }),
        (error) => console.error('Error eliminando producto', error)
      );
    } else {
      console.error(`Index ${index} is out of bounds`);
    }
  }

  
  reindexForms(): void {
    this.productForms.forEach((form, i) => {
      form.get('id')?.setValue(i); // Actualiza el índice o ID si lo estás manejando en los formularios
    });
  }
}


