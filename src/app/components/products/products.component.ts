import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  myShoppingCart: Product[] = [];
  total: number = 0;
  products: Product[] = [
    {
      id: 1,
      name: 'producto 1',
      image:
        'https://i.pinimg.com/550x/72/4d/80/724d80d10df742487b28d934c48ed8d6.jpg',
      price: 11,
    },
    {
      id: 1,
      name: 'producto 1',
      image: 'https://www.anipedia.net/imagenes/lobos-blancos.jpg',
      price: 11,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  onAddToShoppingCart(product: Product) {
    //console.log(product);
    this.myShoppingCart.push(product);
    this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }
}
