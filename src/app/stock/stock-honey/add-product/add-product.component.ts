import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateModule } from '@ngx-translate/core';
import { IHoney } from '../../../interfaces/honey';
import { StockService } from '../../../services/stock.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,

],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {


  productForm!: FormGroup;
  showAddProductForm: boolean = false;
  products: IHoney[] = [];
  selectedFile: File | null = null;

  constructor(
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private stockService: StockService,
  ) { }

  // Inicializa el FormGroup
  initializeForm(): void {
    this.productForm = this.fb.group({
      name: ['tstForm', Validators.required],
      description: ['tstForm', Validators.required],
      prices: this.fb.group({
        1000: [0, Validators.required],
        500: [0, Validators.required],
        250: [0, Validators.required]
      }),
      discounts: this.fb.group({
        1000: [0],
        500: [0],
        250: [0]
      }),
      stock: [0, Validators.required],
      type: ['HN', Validators.required],
      weight: [1000, Validators.required],
      // image: ['honey-5043708_1280.jpg'],
      image: [''],
      state: ['SI', Validators.required],
      category: ['HD', Validators.required],
      city: ['Rabat', Validators.required],
      quantity: [2],
    });
  }

  ngOnInit(): void {
    this.initializeForm(); // Inicializa el formulario al cargar el componente
  }

  addProduct(): void {
    this.showAddProductForm = true;
    // this.initializeForm();
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0].name;
      console.log('el file selecionado',this.selectedFile)
          // Actualiza el campo 'image' en el formulario
    this.productForm.patchValue({ image: this.selectedFile });
    }
   
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
        this.products.push(response);  // El producto con el ID ya generado
        this.showAddProductForm = false;
        this.productForm.reset();  // Resetea el formulario
          console.log('Los datos del nuevo Formulario', response);
          this.snackBar.open('Producto añadido correctamente', 'Cerrar', {
            duration: 3000,
            horizontalPosition: "start",
            verticalPosition: "top",
          }
         
        );
          // this.getProducts();

        },
        (error) => {
          console.error('Error saving product', error);
          this.snackBar.open('Error al añadir el producto', 'Cerrar', {
            duration: 3000,
            horizontalPosition: "start",
            verticalPosition: "top",
           
          });
        }
      );
      // this.getProducts();
    }
  }

  onImageUploaded(imageName: string): void {
    console.log('Nombre de imagen recibido onImageUploaded:', imageName);
    this.productForm.patchValue({ image: imageName });
    console.log('Formulario actualizado con imagen:', this.productForm.value);
  }

}
