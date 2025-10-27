# 🎟️ Vue Ticket App  

A responsive and feature-rich ticket management system built with **Vue.js**.  
It includes authentication, dashboard analytics, and full CRUD operations for managing support tickets.  

---

## 🚀 Features  

### 🏠 Landing Page  
- Hero section with a wavy SVG background  
- Decorative circles and feature boxes with shadows  
- Centered layout (max width 1440px)  
- Fully responsive for mobile, tablet, and desktop  
- Footer displayed across all pages  

### 🔐 Authentication  
- Login and Signup pages with form validation  
- Inline error messages and toast/snackbar notifications  
- Authentication simulated using **localStorage** (`ticketapp_session` token)  
- Protected routes (Dashboard and Ticket Management only accessible when logged in)  

### 📊 Dashboard  
- Displays total tickets, open tickets, and resolved tickets  
- Navigation link to Ticket Management screen  
- Logout clears session and redirects to login  

### 🎫 Ticket Management (CRUD)  
- Create, Read, Update, and Delete tickets  
- Form validation and live feedback (inline + toasts)  
- Status color codes:  
  - `open` → 🟢 Green  
  - `in_progress` → 🟠 Amber  
  - `closed` → ⚫ Gray  

---

## ⚙️ Tech Stack  
- **Vue 3** (Composition API)  
- **Vite** (for fast build and hot reload)  
- **Pinia** (for state management)  
- **Vue Router** (for navigation and protected routes)  
- **Tailwind CSS** (for styling and responsiveness)  

---

## 🧠 Folder Structure  

---

## 🧩 Setup Instructions  

### Clone the repository
```bash
git clone https://github.com/moses-Dera/vue-ticket-app.git
cd vue-ticket-app
