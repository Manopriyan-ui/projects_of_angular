import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      name: 'Laptop',
      price: 800,
      description: 'A high-performance laptop for development.'
    },
    {
      name: 'Smartphone',
      price: 500,
      description: 'A powerful smartphone with good battery life.'
    },
    {
      name: 'Headphones',
      price: 120,
      description: 'Noise-cancelling wireless headphones.'
    }
  ];
}
