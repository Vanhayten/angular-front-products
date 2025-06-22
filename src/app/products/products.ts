import { Component, OnInit } from '@angular/core';
import { CurrencyPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CurrencyPipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
})

export class Products implements OnInit {

  products: Array<any>;

  constructor() { }
  ngOnInit(): void {
      this.products = [
    { id: 1, name: 'Computer', price: 100 },
    { id: 2, name: 'Printer', price: 200 },
    { id: 3, name: 'Smart watch', price: 300 }
  ]
  }


}
