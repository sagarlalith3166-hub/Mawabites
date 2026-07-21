# 🎨 Mawabites - T-shirt Printing E-commerce Platform

A modern, responsive e-commerce website for Mawabites T-shirt printing business built with **Next.js**, **React**, and **Tailwind CSS**.

## Features ✨

✅ **T-shirt Design Gallery** - Browse and filter our collection  
✅ **Online Order System** - Purchase pre-designed t-shirts  
✅ **Custom Order Form** - Submit custom design requests  
✅ **Razorpay Integration** - Secure payment processing  
✅ **Contact Form** - Easy customer communication  
✅ **Admin Dashboard** - Manage orders and customer inquiries  
✅ **MongoDB Database** - Store products, orders, and user data  
✅ **Responsive Design** - Works on all devices  
✅ **Email Notifications** - Automated order and contact confirmations  

## Tech Stack 🛠️

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB
- **Payment**: Razorpay
- **Email**: Nodemailer

## Installation 📦

### Prerequisites
- Node.js 16+ installed
- MongoDB database
- Razorpay account
- Gmail account (for email notifications)

### Setup Steps

1. **Clone the repository**
```bash
git clone https://github.com/sagarlalith3166-hub/mawabites.git
cd mawabites
```

2. **Install dependencies**
```bash
npm install
```

3. **Create .env.local file**
```bash
cp .env.local.example .env.local
```

4. **Fill in your environment variables**
```
MONGODB_URI=your_mongodb_connection_string
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASSWORD=your_app_password
```

5. **Run development server**
```bash
npm run dev
```

6. **Open browser**
```
http://localhost:3000
```

## Project Structure 📁

```
mawabites/
├── app/
│   ├── api/              # API routes
│   ├── gallery/          # Gallery page
│   ├── custom/           # Custom order page
│   ├── contact/          # Contact page
│   ├── orders/           # Orders tracking
│   ├── layout.js         # Root layout
│   ├── page.js           # Home page
│   └── globals.css       # Global styles
├── components/           # React components
│   ├── Navbar.js
│   ├── Hero.js
│   ├── Gallery.js
│   ├── Features.js
│   └── Footer.js
├── lib/                  # Utilities & helpers
├── public/               # Static files
├── .env.local           # Environment variables
├── next.config.js       # Next.js config
├── tailwind.config.js   # Tailwind config
└── package.json         # Dependencies
```

## Pages 📄

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with hero and features |
| Gallery | `/gallery` | Browse and filter t-shirts |
| Custom Order | `/custom` | Submit custom design requests |
| Contact | `/contact` | Contact form and business info |
| Orders | `/orders` | Track customer orders |

## API Endpoints 🔌

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/custom-order` | POST | Submit custom order |
| `/api/contact` | POST | Send contact message |
| `/api/payment/verify` | POST | Verify Razorpay payment |
| `/api/orders` | GET | Get user orders |

## Contact 📞

**Phone**: 9441783250  
**Email**: contact@mawabites.com  
**Location**: Hyderabad, Telangana

## License 📝

© 2024 Mawabites. All rights reserved.
