import { Component, Renderer2, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduseService } from '../produse.service';

interface BlackBox {
  id:number;
  imageSrc: string;
  imgButtom1:string;
  imgButtom2:string;
  imgButtom3:string;
  productName: string;
  price: string;
  isFavorite: boolean;
  isVisible:boolean;
}

@Component({
  selector: 'app-product-page',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './product-page.component.html',
  standalone: true,
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  product: BlackBox | undefined;

  constructor(
    private route: ActivatedRoute,
    private renderer: Renderer2,
    private produseService: ProduseService
  ) {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.produseService.getBlackBoxById(productId);
  }

  toggleAnimation() {
    const images = document.querySelectorAll('.pictute_buttom img');
    images.forEach(img => {
      this.renderer.addClass(img, 'animated');
    });
  }

  changeColor(target: EventTarget | null) {
    if (target instanceof HTMLButtonElement) {
      const button = target as HTMLButtonElement; // Type assertion
      if (button.classList.contains('active')) {
        this.renderer.removeClass(button, 'active');
        button.style.backgroundColor = '#f0f0f0';
        button.style.color = '#333';
      } else {
        this.renderer.addClass(button, 'active');
        button.style.backgroundColor = '#7FBB29';
        button.style.color = '#fff';
      }
    }
  }
}
