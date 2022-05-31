import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../service/product/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('',[Validators.required]),
    price: new FormControl(),
    description: new FormControl()
  });
  constructor(private productService: ProductService,
              private activatedRouter: ActivatedRoute,
              private router: Router) {
    this.activatedRouter.paramMap.subscribe((paramMap)=>{
      const id = paramMap.get('id');
      this.getProductById(id);
    });
  }

  ngOnInit() {
  }

  get idControl() {
    return this.productForm.get('id');
  }

  get nameControl() {
    return this.productForm.get('name');
  }

  getProductById(id) {
    this.productService.findById(id).subscribe((product)=>{
  this.productForm = new FormGroup({
    id: new FormControl(product.id),
    name: new FormControl(product.name,[Validators.required]),
    price: new FormControl(product.price),
    description: new FormControl(product.description)
  });
  });
  }

  update() {
    this.productService.update(this.idControl.value, this.productForm.value).subscribe(() => {
    });
    this.router.navigateByUrl('/');
  }
}
