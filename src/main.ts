import { bootstrapApplication } from '@angular/platform-browser';
import { Routes, provideRouter, RouterOutlet } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HomeComponent } from './app/components/home/home.component';
import { ProductsComponent } from './app/components/products/products.component';
import { CartsComponent } from './app/components/carts/carts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'carts', component: CartsComponent }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
});