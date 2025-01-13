export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: number;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
  imageUrl: string;
  sku: string;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  state: string;
  zipcode: string;
  phone: string;
}

export interface CartItem {
  productId: number;
  quantity: number;
  product: Product;
}

export interface Cart {
  id: number;
  userId: number;
  date: string;
  status: string;
  products: CartItem[];
  user: User;
}