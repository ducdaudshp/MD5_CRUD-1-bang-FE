import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(private producService: ProductService) { }

  ngOnInit() {
    this.getAllProduct();
  }

  getAllProduct() {
    this.producService.getAll().subscribe((data) => {
      this.products = data;
    }, (error) => {
    });
  }
}
