import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    products = [
        { id: 1, name: 'Computer', price: 100, selected: true },
        { id: 2, name: 'Printer', price: 200, selected: true },
        { id: 3, name: 'Smart watch', price: 300, selected: false}
      ];

  constructor() { }
  
  getProducts() {
    return this.products;
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(product => product.id !== id);
  }
  
  addProduct(product: any) {
    this.products.push(product);
  }
  
}
