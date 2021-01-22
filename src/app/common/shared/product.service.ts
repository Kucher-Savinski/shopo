import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Product, ServerResponse } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private  http: HttpClient) { }

  create(product) {
    return this.http.post(`${environment.DBurl}/products.json`, product)
    .pipe(map( (res: ServerResponse) => {
      return {
        ...product,
        id: res.name,
        date: new Date(product.date)
      };
    }));
  }

  getAll() {
    return this.http.get(`${environment.DBurl}/products.json`)
    .pipe( map ( res => {
      return Object.keys(res)
      .map( key => ({
        ...res[key],
        id: key,
        date: new Date(res[key].date)
      }));
    }));
  }

  getbyId( id ) {
    return this.http.get(`${environment.DBurl}/products/${id}.json`)
    .pipe( map ( (res:Product) => {
      return {
        ...res,
        id,
        date: new Date(res.date)
      };
    }
    ));
  }

  remove(id) {
    return this.http.delete(`${environment.DBurl}/products/${id}.json`)
  }
}
