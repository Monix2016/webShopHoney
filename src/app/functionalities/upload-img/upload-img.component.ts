import { HttpClient } from '@angular/common/http';
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
  //http://127.0.0.1:8000/api/v1/upload-image
  private apiUrl = 'http://127.0.0.1:8000/api/v1/upload-image';
 

  @Output() imageUploaded = new EventEmitter<string>();


  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  constructor(private http: HttpClient) {}

  uploadImage(): void {
    if (this.http) {
      const formData = new FormData();
      formData.append('image', this.selectedFile!);
  
      this.http.post(this.apiUrl, formData).subscribe(
        (response) => {
          console.log('Image uploaded successfully', response);
        },
        (error) => {
          console.error('Error uploading image', error);
        }
      );
    } else {
      console.error('HTTP client not initialized');
    }
  }
}
