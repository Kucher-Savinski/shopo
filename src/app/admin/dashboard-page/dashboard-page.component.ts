import { ProductService } from './../../common/shared/product.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  products = [];
  psub: Subscription;
  pusub: Subscription;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.psub = this.productService.getAll().subscribe( products => {
      this.products = products;
    }
    );
  }

  ngOnDestroy() {
    if (this.psub) {
      this.psub.unsubscribe();
    }

    if (this.pusub) {
      this.pusub.unsubscribe();
    }
  }

  remove(id) {
    this.pusub = this.productService.remove(id).subscribe( () => {
      this.products = this.products.filter( product => product.id != id );
    });
  }
}
