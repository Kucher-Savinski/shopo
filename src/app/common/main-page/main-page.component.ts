import { ProductService } from './../shared/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnInit {

  constructor(
    private productService : ProductService
  ) { }

    product$;

  ngOnInit() {
    this.product$ = this.productService.getAll();
  }

}
