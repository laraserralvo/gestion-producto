import { Component, signal } from '@angular/core';
import { ProductService } from './services/product';
import { ProductsList } from './components/products-list/products-list';
import { ProductsFormComponent } from './components/products-form/products-form'; 


@Component({
  selector: 'app-root',
  imports: [ProductsList, ProductsFormComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  protected readonly title = signal('gestion-producto');

  constructor(private productService: ProductService) {
  }

  onProductoCreado(producto: any) {
    console.log('Producto recibido:', producto);
    this.productService.agregarProducto(producto); 
  }
}