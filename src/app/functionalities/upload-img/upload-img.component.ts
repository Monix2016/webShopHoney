import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

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

  selectedFile: File | null = null;

  http: any;

  @Output() imageUploaded = new EventEmitter<string>();

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  uploadImage(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile);

      // Aquí harás la llamada HTTP a tu backend
      // Puedes usar HttpClient para enviar la imagen al servidor
      // Ejemplo (suponiendo que ya tienes un servicio para esto):

      this.http.post('http://127.0.0.1:8000/api/v1/upload-image', formData).subscribe(
        (response: any) => {
          const uploadedImageName = response.imageName; // Nombre de la imagen guardada en el servidor
          this.imageUploaded.emit(uploadedImageName);  // Emitir el nombre al componente padre
        },
        (error: any) => {
          console.error('Error uploading image', error);
        }
      );
    }
  }
}
