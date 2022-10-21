import { Component } from '@angular/core';
import { Product } from './models/product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  imgParent = '';
  showImage = true;
  products: Product[] = [
    {
      id: 1,
      name: 'producto 1',
      image:
        'https://i.pinimg.com/550x/72/4d/80/724d80d10df742487b28d934c48ed8d6.jpg',
      price: 11,
    },
  ];

  onLoaded(img: string) {
    console.log('log padre', img);
  }
  toggleImg() {
    this.showImage = !this.showImage;
  }
}
