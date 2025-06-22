import { Component, OnInit } from '@angular/core';
import { CurrencyPipe, NgIf } from '@angular/common';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-products',
  imports: [CurrencyPipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
})

export class Products implements OnInit {


  products!: Array<any>;

  constructor(private productService : ProductService ) {}

  ngOnInit(): void {
     this.getAllProducts()
  }

  getAllProducts() {
    this.products = this.productService.getProducts();
  }
  
  handleDelete(p: any) {
      let confirmation = confirm(`Are you sure you want to delete ${p.name}?`);
      if (confirmation) {
        this.productService.deleteProduct(p.id);
         this.getAllProducts()
      }
  }

}
