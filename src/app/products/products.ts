import { Component, OnInit } from '@angular/core';
import { CurrencyPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CurrencyPipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
})

export class Products implements OnInit {


  products!: Array<any>;

  constructor() { }

  ngOnInit(): void {
      this.products = [
        { id: 1, name: 'Computer', price: 100, selected: true },
        { id: 2, name: 'Printer', price: 200, selected: true },
        { id: 3, name: 'Smart watch', price: 300, selected: false}
      ];
  }

  handleDelete(p: any) {
      let confirmation = confirm(`Are you sure you want to delete ${p.name}?`);
      if (confirmation) {
        this.products = this.products.filter(product => product.id !== p.id);
      }
  }

}
