import { Component } from '@angular/core';
import { BaseHoneyComponent } from '../../functionalities/base-honey/base-honey.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

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
export class StockHoneyComponent extends BaseHoneyComponent {

  // TODO: eso se repite ver mas tarde como ponerlo en el servicio
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.housingLocation.photo = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
