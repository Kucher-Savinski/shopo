import { ProductService } from './../../common/shared/product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent implements OnInit {

  constructor(
    public router: Router,
    private productService: ProductService
  ) {}

  myform: FormGroup;


  submit = () => {
    if (this.myform.invalid) {
      return;
    }

    const product = {
      type: this.myform.value.type,
      title: this.myform.value.title,
      photo: this.myform.value.photo,
      info: this.myform.value.info,
      price: this.myform.value.price,
      date: new Date()
    };

    this.router.navigate(['/admin', 'orders']);
    this.productService.create(product).subscribe( r => console.log(r));

  }

  ngOnInit() {
    this.myform = new FormGroup({
      type: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      photo: new FormControl(null, Validators.required),
      info: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required)
    });

  }

}
