import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../../services/product';
import { ProductsCard } from '../products-card/products-card';

@Component({
  selector: 'app-products-list',
  imports: [ProductsCard],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css'
})
export class ProductsList implements OnInit {

  productos: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.productos$.subscribe(productos => {
      this.productos = productos;
      console.log('Productos recibidos:', productos);
    });
  }
}
