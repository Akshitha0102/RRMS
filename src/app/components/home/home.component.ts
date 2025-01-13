import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="min-h-screen bg-gray-100 p-8">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-8 text-center">Welcome to Our Store</h1>
        <div class="flex gap-4 justify-center">
          <a routerLink="/products" 
             class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
            View Products
          </a>
          <a routerLink="/carts" 
             class="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
            View Carts
          </a>
        </div>
      </div>
    </div>
  `
})
export class HomeComponent {}