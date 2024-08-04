import { Component } from '@angular/core';
import { BaseMaterialComponent } from '../../functionalities/base-material/base-material.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-stock-material',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    TranslateModule,
  ],
  templateUrl: './stock-material.component.html',
  styleUrl: './stock-material.component.css'
})
export class StockMaterialComponent extends BaseMaterialComponent {

    // TODO: eso se repite ver mas tarde como ponerlo en el servicio
    onFileSelected(event: Event): void {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files[0]) {
        const file = input.files[0];
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.materialHoney.photo = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    }

}
