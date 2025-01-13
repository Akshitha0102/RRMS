import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../../models/types';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-lg p-6 max-w-2xl w-full">
        <div class="flex justify-between items-start mb-4">
          <h2 class="text-2xl font-bold">Add New Product</h2>
          <button (click)="close.emit()" class="text-gray-500 hover:text-gray-700">✕</button>
        </div>

        <form [formGroup]="productForm" (ngSubmit)="onSubmit()" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" formControlName="name"
                   class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2">
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Price</label>
            <input type="number" formControlName="price"
                   class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2">
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Category</label>
            <input type="text" formControlName="category"
                   class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2">
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Description</label>
            <textarea formControlName="description"
                      class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"></textarea>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">In Stock</label>
            <input type="number" formControlName="inStock"
                   class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2">
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">SKU</label>
            <input type="text" formControlName="sku"
                   class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2">
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Image URL</label>
            <input type="text" formControlName="imageUrl"
                   class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2">
          </div>

          <div class="flex justify-end gap-4">
            <button type="button" (click)="close.emit()"
                    class="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
              Cancel
            </button>
            <button type="submit" [disabled]="!productForm.valid"
                    class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300">
              Save Product
            </button>
          </div>
        </form>
      </div>
    </div>
  `
})
export class ProductFormComponent {
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<Partial<Product>>();

  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      description: ['', Validators.required],
      inStock: ['', [Validators.required, Validators.min(0)]],
      sku: ['', Validators.required],
      imageUrl: ['', Validators.required],
      rating: this.fb.group({
        rate: [0],
        count: [0]
      })
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.save.emit(this.productForm.value);
    }
  }
}