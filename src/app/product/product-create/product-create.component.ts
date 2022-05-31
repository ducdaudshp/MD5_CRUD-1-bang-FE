import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../service/product/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = {};

  productForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl(),
    description: new FormControl()
  });
  constructor(private  productService: ProductService,
              private router: Router) { }

  ngOnInit() {
  }

  get idControl(){
    return this.productForm.get('id');
  }

  get nameControl(){
    return this.productForm.get('name');
  }

  createProductUsingReactiveForm(){
      this.productService.create(this.productForm.value).subscribe(() => {
        alert('Tao thanh cong');
        this.productForm.reset();
      });
  }

}
