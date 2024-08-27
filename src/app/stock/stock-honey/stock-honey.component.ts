import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  selectedWeight!: any;
  // selectedWeight: string = '1000'; // Valor inicial, puede cambiar

  constructor(
    private stockService: StockService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    this.getProducts();
    this.selectedWeight = '1000';
  }



  createProductForm(product: IHoney): FormGroup {
    return this.fb.group({
      weight: [product.weight, Validators.required],
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

      name: [product.name, Validators.required],
      description: [product.description, Validators.required],
      stock: [product.stock, Validators.required],
      type: [product.type, Validators.required],
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
    const productId = this.products[index].id;  // Obtener el verdadero ID del producto

    if (productId < 0 || productId >= this.productForms.length) {
      console.error(`Index ${index} is out of bounds`);
      return;
    }
    if (!this.productForms[productId]) {
      console.error(`Form at index ${productId} is undefined`);
      return;
    }
    if (this.productForms[productId].invalid) {
      this.productForms[productId].markAllAsTouched();
      return;
    }

    this.stockService.updateProduct(updatedProduct, productId).subscribe(
      (response) => {
        console.log('Product updated', response);
        this.snackBar.open('Producto actualizado correctamente', 'Cerrar', {
          duration: 3000,
          horizontalPosition: "start",
          verticalPosition: "top",
        });
      },
      (error) => {
        console.error('Error updating product', error);
        this.snackBar.open('Error al actualizar el producto', 'Cerrar', {
          duration: 3000,
          horizontalPosition: "start",
          verticalPosition: "top",
        });
      }
    );
  }

  onFileChange(event: any, index: number) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0].name;
      console.log('el file selecionado', this.selectedFile)
      // Actualiza el campo 'image' en el formulario
      this.productForms[index].patchValue({ image: this.selectedFile });
    }

  }

  onImageUploaded(imageName: string, index: number): void {
    console.log('Imagen subida:', imageName);
    this.productForms[index].patchValue({ image: imageName });
  }



  onWeightChange(event: any, product: any): void {
    this.selectedWeight = event.target.value;
    console.log('Soy el peso selelcionado',this.selectedWeight)
    const formGroup = this.productForms[product.id];
 
    if (formGroup) {
       const priceControl = formGroup.get('prices')?.get(this.selectedWeight);
       const discountControl = formGroup.get('discounts')?.get(this.selectedWeight);
 
       if (priceControl) {
          const price = this.stockService.getPrice(product, this.selectedWeight);
          console.log('estoy en onWeightChange y el peso es ', String(this.selectedWeight))
          console.log('estoy en onWeightChange y el precio es ', price)
          if (price !== null) {
             priceControl.setValue(price);
             
             
             // Forzar la actualización
             priceControl.markAsDirty();
             priceControl.markAsTouched();
          }
       }
 
       if (discountControl) {
          const discount = this.stockService.getDto(product,this.selectedWeight);
          console.log('estoy en onWeightChange y el peso es ', String(this.selectedWeight))
          console.log('estoy en onWeightChange y el descuento es ', discount)
          if (discount !== null) {
             discountControl.setValue(discount);
             // Forzar la actualización
             discountControl.markAsDirty();
             discountControl.markAsTouched();
          }
       }
 
       formGroup.get('weight')?.setValue(Number(this.selectedWeight));
       console.log('estoy en onWeightChange este es el formulario ', formGroup)
    }
 }


//  onWeightChange(event: any, product: IHoney): void {
//   const selectedWeight = parseInt(event.target.value, 10);  // Asegúrate de que es un número
//   const formGroup = this.productForms[product.id];

//   if (formGroup) {
//      const priceControl = formGroup.get('prices')?.get(String(selectedWeight)); // Convierte a string al obtener los valores
//      const discountControl = formGroup.get('discounts')?.get(String(selectedWeight));

//      if (formGroup.get('prices')?.get(this.selectedWeight)) {
//       const priceControl = formGroup.get('prices')?.get(this.selectedWeight);
                                          
//      } else {
//       console.error(`Control for prices -> ${this.selectedWeight} not found`);}
  

//       if (formGroup.get('discounts')?.get(this.selectedWeight)) {
//         const discountControl = formGroup.get('discounts')?.get(this.selectedWeight);
//        }else {
//         console.error(`Control for discounts -> ${this.selectedWeight} not found`);
//     }
//      }

//      formGroup.get('weight')?.setValue(this.selectedWeight);
//      console.log('estoy en onWeightChange este es el formulario ', formGroup)
  
// }


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


