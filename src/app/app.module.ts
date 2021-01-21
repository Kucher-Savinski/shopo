import { AuthInterceptor } from './common/shared/auth.interseptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './common/shared/main-layout/main-layout.component';
import { MainPageComponent } from './common/main-page/main-page.component';
import { ProductPageComponent } from './common/product-page/product-page.component';
import { CartPageComponent } from './common/cart-page/cart-page.component';
import { ProductComponent } from './common/product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainPageComponent,
    ProductPageComponent,
    CartPageComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
