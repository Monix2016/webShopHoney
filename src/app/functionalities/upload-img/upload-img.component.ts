import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-upload-img',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './upload-img.component.html',
  styleUrl: './upload-img.component.css'
})
export class UploadImgComponent {

//TODO: Se puede eliminar este componente

  selectedFile: File | null = null;
  //http://127.0.0.1:8000/api/v1/upload-image
  private apiUrl = 'http://127.0.0.1:8000/api/v1/upload-image';
 




  





  @Output() imageUploaded = new EventEmitter<string>();

  constructor(private stockService: StockService,
    private http: HttpClient
  ) {}

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      console.log('el file selecionado',this.selectedFile)
    }
  }

  uploadImage(): void {
    if (this.selectedFile) {
      this.stockService.uploadImage(this.selectedFile).subscribe(
        (imageName: string) => {
          console.log('Nombre de imagen recibida en UploadImgComponent:', imageName);
          this.imageUploaded.emit(imageName); // Emitir el nombre de la imagen
        },
        (error) => {
          console.error('Error al subir la imagen', error);
        }
      );
    } else {
      console.error('No se ha seleccionado un archivo');
    }
  }
}
