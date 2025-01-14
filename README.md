# RRMS - Angular Application

## Overview

This project is an Angular-based solution demonstrating the ability to consume and present data from a public web API. It includes functionalities to view, manage, and interact with product and cart information.

---

## Features

- **Home Page**:
  - Two buttons to navigate to:
    - Products Page
    - Carts Page

- **Products Page**:
  - Displays a list of products in a table/card view.
  - View detailed information for a product including:
    - Name, Price, Category, Description, Stock, Rating, SKU.
  - Collapse/dismiss detailed product view.
  - Form to add a new product with validation for all mandatory fields.
  - Success message displayed upon product creation.

- **Carts Page**:
  - Displays a list of carts in a table/card view.
  - View detailed information for a cart including:
    - User details (Name, Email, Address, Phone).
    - Cart items and their quantities.
  - Collapse/dismiss detailed cart view.

---

## API Reference

The project utilizes the following public API:
- [JSONing Public API](https://api.jsoning.com/mock/public)

Endpoints used:
- `/products`
- `/product/{id}`
- `/carts`
- `/users`

---

## Technology Stack

- **Frontend Framework**: Angular
- **Styling**: TailwindCSS
- **Libraries Used**: 
  - Angular Router
  - FormsModule and ReactiveFormsModule

---

## Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js (>= 16.x)
- Angular CLI (>= 15.x)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Akshitha0102/RRMS.git
   cd RRMS

2. Installing the dependencies:
   ```bash
   npm install

3. Running the application:
   ```bash
   ng serve --open

4. Open your browser and navigate to:
   ```bash
   http://localhost:4200

---

## Usage

1. **Navigate** to the home page to select between "Products" and "Carts."
2. **View Details**: Click on a product or cart to view detailed information.
3. **Add Product**: Use the form on the Products page to add new products with mandatory validation.
4. **Style Customization**: TailwindCSS can be customized for themes and layouts in tailwind.config.js.

---

## Hosting

This application is hosted on GitHub Pages. Access it at: 
  - https://akshitha0102.github.io/RRMS/ 