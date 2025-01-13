import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Cart } from '../../models/types';

@Component({
  selector: 'app-carts',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-gray-100 p-8">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-3xl font-bold mb-6">Shopping Carts</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div *ngFor="let cart of carts" 
               class="bg-white rounded-lg shadow-md p-6 cursor-pointer"
               (click)="selectedCart = cart">
            <h2 class="text-xl font-semibold mb-2">
              {{cart?.user?.firstName}} {{cart?.user?.lastName}}
            </h2>
            <p class="text-gray-600">Date: {{cart?.date | date}}</p>
            <p class="text-gray-600">Status: {{cart?.status}}</p>
            <p class="text-gray-600">Items: {{cart?.products?.length || 0}}</p>
          </div>
        </div>

        <!-- Cart Detail Modal -->
        <div *ngIf="selectedCart" 
             class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div class="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div class="flex justify-between items-start mb-4">
              <h2 class="text-2xl font-bold">Cart Details</h2>
              <button (click)="selectedCart = null" 
                      class="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>

            <div class="space-y-6">
              <div class="border-b pb-4">
                <h3 class="text-xl font-semibold mb-2">Customer Information</h3>
                <p><strong>Name:</strong> {{selectedCart?.user?.firstName}} {{selectedCart?.user?.lastName}}</p>
                <p><strong>Email:</strong> {{selectedCart?.user?.email}}</p>
                <p><strong>Location:</strong> {{selectedCart?.user?.city}}, {{selectedCart?.user?.state}} {{selectedCart?.user?.zipcode}}</p>
                <p><strong>Phone:</strong> {{selectedCart?.user?.phone}}</p>
              </div>

              <div>
                <h3 class="text-xl font-semibold mb-2">Products</h3>
                <div class="space-y-4">
                  <div *ngFor="let item of selectedCart?.products" 
                       class="border-b pb-4 last:border-b-0">
                    <h4 class="font-semibold">{{item.product.name}}</h4>
                    <p class="text-gray-600">{{item.product.description}}</p>
                    <p class="text-gray-600">Quantity: {{item.quantity}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class CartsComponent implements OnInit {
  carts: Cart[] = [];
  selectedCart: Cart | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getCarts().subscribe({
      next: (carts) => {
        this.carts = carts;
      },
      error: (error) => {
        console.error('Error fetching carts:', error);
        this.carts = [];
      }
    });
  }
}