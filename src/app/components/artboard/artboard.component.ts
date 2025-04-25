import { Component } from '@angular/core';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-artboard',
  templateUrl: './artboard.component.html',
  styleUrl: './artboard.component.css'
})
export class ArtboardComponent {

  imageChangedEvent: any = '';
  croppedImage: SafeUrl | null = null;
  
  constructor(
    private sanitizer: DomSanitizer
  ) {
  }

  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    if (event.objectUrl) {
      this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(event.objectUrl);
    } else if (event.blob) {
      // Alternativa caso objectUrl não esteja disponível
      const url = URL.createObjectURL(event.blob);
      this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(url);
    }
  }
  imageLoaded(image: LoadedImage) {
      // show cropper
  }
  cropperReady() {
      // cropper ready
  }
  loadImageFailed() {
      // show message
  }
}
