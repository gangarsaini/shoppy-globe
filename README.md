##  Project Overview

ShoppyGlobe is a basic e-commerce web application built using **React + Vite**.
It allows users to browse products, view details, add items to cart, and place orders.

## Features
## Core Features

* Product listing from API
* Product detail page
* Add to cart functionality
* Update quantity / remove items
* Checkout page with order summary
* Order placement with success message
* 404 Not Found page


## Tech Stack
* React (Vite)
* Redux (State Management)
* React Router (Routing)
* CSS (Styling)
* DummyJSON API


## API Used
* https://dummyjson.com/products

## Key Concepts Implemented
### ✔ Props

* Passing data from parent to child components

### useEffect & API Fetching

* Fetch product list
* Fetch product details dynamically

### Redux

* Add to cart
* Remove from cart
* Update quantity
* Search filter

### Routing

* Home
* Product Detail (dynamic route)
* Cart
* Checkout
* 404 Page

###  Performance Optimization

* React.lazy()
* Suspense
* Lazy loading images

##  Cart Features

* Add product
* Remove product
* Increase/decrease quantity


## 💳 Checkout

* User form (dummy)
* Order summary
* "Place Order" button
* Clears cart after order
* Redirects to Home

## 🎨 Styling

CSS Styling only








# 🛒 ShoppyGlobe Backend API

## Project Overview
ShoppyGlobe is an e-commerce backend application built using **Node.js, Express.js, and MongoDB**.  
It provides APIs for managing products, user authentication, and cart functionality.

---

## Features

- ✅ Product CRUD (Create, Read, Update, Delete)
- ✅ User Authentication (JWT-based)
- ✅ Protected Cart APIs
- ✅ MongoDB Integration
- ✅ Error Handling & Validation
- ✅ RESTful API Structure

---

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (Authentication)
- bcryptjs (Password Hashing)
- ThunderClient (API Testing)

---

## Folder Structure

backend/
│── models/
│ ├── product.model.js
│ ├── cart.model.js
│ └── user.model.js
│
│── routes/
│ ├── productRoutes.js
│ ├── cart.routes.js
│ └── auth.routes.js
│
│── controllers/
│ └── cart.controller.js
│
│── middleware/
│ └── auth.js
│
│── server.js
│── .env


### 2. Install Dependencies


### 3. Setup Environment Variables

Create `.env` file:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000


### 4. Run Server

Server will run on:5000



---

## 📦 API Endpoints

### 🔐 Authentication

| Method | Endpoint | Description |
|------|----------|------------|
| POST | /api/auth/register | Register user |
| POST | /api/auth/login | Login user |

---

### Products

| Method | Endpoint | Description |
|------|----------|------------|
| GET | /api/products | Get all products |
| GET | /api/products/:id | Get single product |
| POST | /api/products | Create product |
| PUT | /api/products/:id | Update product |
| DELETE | /api/products/:id | Delete product |

---

### Cart (Protected Routes)

 Requires JWT Token in Header:


Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDdmYWJmMWIzNWQwODQ5ZThhNDdiOCIsImlhdCI6MTc3NTc2MzI0Mn0.c153qBD6U35FnK16BVSbRfbxTv-1E5N-SdsjG-IdrK0

| Method | Endpoint | Description |
|------|----------|------------|
| POST | /api/cart | Add item to cart |
| GET | /api/cart | Get user cart |
| PUT | /api/cart/:id | Update quantity |
| DELETE | /api/cart/:id | Remove item |

---

## 🧪 API Testing

All APIs were tested using **ThunderClient**.

### Sample Request (Add to Cart)
POST /api/cart

Body:{
"productId": "product_id_here",
"quantity": 2
}


Header:Authorization: your_token

---

## ⚠️ Error Handling & Validation

- ✔ Required fields validation
- ✔ Product existence check
- ✔ Quantity validation
- ✔ Proper status codes (400, 404, 500)
- ✔ Try-catch error handling

---

## 📸 Screenshots 

- MongoDB Collections
- Product API Testing
- Auth API Testing
- Cart API Testing



## 🎯 Conclusion

This project demonstrates a complete backend system for an e-commerce application 
using modern technologies and best practices like authentication, validation, 
and RESTful APIs.

---




## 🔗 GitHub Repository

👉 # Clone repository
git clone https://github.com/gangarsaini/shoppy-globe







