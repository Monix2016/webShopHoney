import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollAnimationService {

  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  initializeScrollAnimation() {
    window.addEventListener('scroll', this.checkPosition.bind(this));
    this.checkPosition();
  }

  private checkPosition() {
    const photos = document.querySelectorAll('.listing-photo');
    const windowHeight = window.innerHeight;

    photos.forEach(photo => {
      const position = photo.getBoundingClientRect().top;

      if (position < windowHeight - 100) {
        this.renderer.addClass(photo, 'show');
      } else {
        this.renderer.removeClass(photo, 'show');
      }
    });
  }
}
