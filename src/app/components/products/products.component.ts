import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Product } from '../../models/types';
import { ProductFormComponent } from './product-form.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductFormComponent],
  template: `
    <div class="min-h-screen bg-gray-100 p-8">
      <div class="max-w-6xl mx-auto">
        <div class="flex justify-between items-center mb-6">
          <h1 class="text-3xl font-bold">Products</h1>
          <button (click)="showAddForm = true" 
                  class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Add Product
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div *ngFor="let product of products" 
               class="bg-white rounded-lg shadow-md p-6 cursor-pointer"
               (click)="selectedProduct = product">
            <h2 class="text-xl font-semibold mb-2">{{product.name}}</h2>
            <p class="text-gray-600">Price: {{product.price}}</p>
            <p class="text-gray-600">Category: {{product.category}}</p>
            <p class="text-gray-600">In Stock: {{product.inStock}}</p>
          </div>
        </div>

        <!-- Product Detail Modal -->
        <div *ngIf="selectedProduct" 
             class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div class="bg-white rounded-lg p-6 max-w-2xl w-full">
            <div class="flex justify-between items-start mb-4">
              <h2 class="text-2xl font-bold">{{selectedProduct.name}}</h2>
              <button (click)="selectedProduct = null" 
                      class="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>
            <div class="space-y-3">
              <p><strong>Price:</strong> {{selectedProduct.price}}</p>
              <p><strong>Category:</strong> {{selectedProduct.category}}</p>
              <p><strong>Description:</strong> {{selectedProduct.description}}</p>
              <p><strong>In Stock:</strong> {{selectedProduct.inStock}}</p>
              <p><strong>Rating:</strong> {{selectedProduct.rating.rate}} ({{selectedProduct.rating.count}} reviews)</p>
              <p><strong>SKU:</strong> {{selectedProduct.sku}}</p>
              <p><strong>Image URL:</strong> {{selectedProduct.imageUrl}}</p>
            </div>
          </div>
        </div>

        <!-- Add Product Form -->
        <app-product-form *ngIf="showAddForm" 
                         (close)="showAddForm = false"
                         (save)="onProductSave($event)">
        </app-product-form>
      </div>
    </div>
  `
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product | null = null;
  showAddForm: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  onProductSave(product: Partial<Product>) {
    // In a real application, this would call an API
    alert('Product saved successfully!');
    this.showAddForm = false;
  }
}