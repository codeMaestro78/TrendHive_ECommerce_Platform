# Fashion E-Commerce Website

## Overview

This is a fully functional **MERN stack** fashion e-commerce website built using **Vite + React.js** for the frontend. The website integrates **Stripe** and **Razorpay** for payment processing and includes an **admin panel** for managing products, orders, and users.

## Features

- **User Authentication** (JWT-based login & signup)
- **Product Management** (CRUD operations)
- **Shopping Cart** (Add, remove, update items)
- **Checkout Process** (Shipping, payment, and order summary)
- **Payment Integration** (Stripe & Razorpay)
- **Order Management** (Track order history)
- **Admin Panel** (Dashboard for managing users, products, and orders)
- **Responsive UI** (Optimized for mobile and desktop)

## Tech Stack

- **Frontend**: Vite + React.js, Redux Toolkit, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB
- **Database**: MongoDB Atlas
- **Authentication**: JWT (JSON Web Token)
- **Payments**: Stripe & Razorpay API
- **State Management**: Redux Toolkit
## Installation

### Prerequisites

- Node.js (v16+)
- MongoDB (Local or Atlas)
- Stripe & Razorpay accounts for API keys

### Clone the Repository

```sh
git clone https://github.com/codeMaestro78/TrendHive_ECommerce_Platform.git
cd trendhive
```

### Backend Setup

1. Navigate to the backend directory:

```sh
cd backend_trendhive
```

2. Install dependencies:

```sh
npm install
```

3. Create a `.env` file and add the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

4. Start the backend server:

```sh
npm run start
```

### Frontend Setup

1. Navigate to the frontend directory:

```sh
cd trendhive
```

2. Install dependencies:

```sh
npm install
```

3. Create a `.env` file and add:

```env
VITE_BACKEND_URL=http://localhost:5000
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
VITE_RAZORPAY_KEY=your_razorpay_key
```

4. Start the frontend server:

```sh
npm run dev
```


## API Routes

### Authentication

- `POST /api/user/register` - User Registration
- `POST /api/user/login` - User Login
- `POST /api/user/admin` - Admin Login

### Products

- `GET /api/product/list` - Get all products
- `POST /api/product/remove` - Remove a product (Admin)
- `POST /api/product/single` - Get single product details

### Cart

- `POST /api/cart/get` - Get user cart
- `POST /api/cart/add` - Add item to cart
- `POST /api/cart/update` - Update cart item

### Orders

- `POST /api/order/stripe` - Place an order with Stripe
- `POST /api/order/razorpay` - Place an order with Razorpay
- `POST /api/order/userorders` - Get user orders

### Payments

- `POST /api/order/verifyStripe` - Verify Stripe payment
- `POST /api/order/verifyRazorpay` - Verify Razorpay payment

## Contributors

- **Your Name** ([GitHub](https://github.com/codeMaestro78))
