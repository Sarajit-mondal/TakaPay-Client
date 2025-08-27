
# 💳 Digital Wallet Frontend (bKash/Nagad Clone) 
# Name : TakaPay
Live Link : https://taka-pay-client.vercel.app

A **secure, role-based, and user-friendly frontend application** for a Digital Wallet System (similar to bKash or Nagad) built using **React.js, Redux Toolkit, RTK Query, and TypeScript**.  
This project consumes a backend API (provided separately or mocked) to enable **Users, Agents, and Admins** to perform financial operations and manage wallets seamlessly.

---

## 🚀 Tech Stack

**Frontend:**
- React, React Router
- Redux Toolkit & RTK Query
- TypeScript
- Tailwind CSS

**Backend (for API integration):**
- Node.js / Express
- MongoDB / Mongoose
- JWT + bcrypt

---

## 📌 Minimum Functional Requirements

### 1️⃣ Public Landing Section
Accessible without login, including:
- **Home Page** — Polished landing page with theme-colored navigation bar (sticky), hero banner with tagline & call-to-action, responsive design, footer, skeleton loading, and smooth transitions.
- **About Page** — Service story, mission, and team details.
- **Features Page** — List of features with visuals/icons.
- **Pricing Page (optional)** — Service fees & subscription tiers.
- **Contact Page** — Inquiry form (simulated submission).
- **FAQ Page** — Common questions & answers.

### 2️⃣ Authentication
- Registration with role selection (User / Agent).
- Login form with JWT authentication.
- Persisted authentication state (remains logged in after refresh).
- Role-based redirection after login.
- Logout functionality.

### 3️⃣ User Dashboard
- Wallet balance overview, quick actions & recent transactions.
- Deposit (via agent simulation).
- Withdraw money.
- Send money to another user (search by phone/email).
- Transaction history (pagination, filters by type/date).
- Profile management (update name, phone, password).

### 4️⃣ Agent Dashboard
- Overview with cash-in/out summary & activity logs.
- Add money to a user’s wallet.
- Withdraw money from a user’s wallet.
- View agent transactions & commission history (optional).
- Profile management.

### 5️⃣ Admin Dashboard
- System overview (total users, agents, transactions, volume).
- Manage users (view, block/unblock).
- Manage agents (approve, suspend).
- View all transactions (advanced filters, pagination).
- Adjust system fees/limits (optional).
- Profile management.

### 6️⃣ General Features
- Role-based navigation menu (User, Agent, Admin).
- Global loading indicators & error handling.
- Form validations (numeric, required, positive amounts).
- Pagination for long lists.
- Data visualization (cards, bar/pie charts, tables).
- **Toast Notifications** for success/error feedback.
- **Guided Tour** (react-joyride / driver.js / shepherd.js):
  - 5+ steps explaining key features (nav, dashboard cards, charts, filters, theme toggle).
  - Runs once for new users (localStorage).
  - Restart option in Settings.

---

## 🎨 UI/UX Considerations
- Fully responsive across devices.
- Consistent margins & spacing.
- Professional color themes & typography.
- Dark/Light mode support.
- Lazy-loading, skeleton loaders, accessibility standards.

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js >= 16.x
- npm or yarn

### Steps
```bash
# Clone repo
git clone https://github.com/Sarajit-mondal/TakaPay-Client.git

# Install dependencies
npm install

# Start development server
npm run dev
```

Backend API setup is required separately (Node.js/Express + MongoDB).  

---

## 📂 Project Structure
```
src/
 ├── components/     # Reusable components (Navbar, Footer, etc.)
 ├── features/       # Redux slices & RTK Query API logic
 ├── layouts/        # Layouts (CommonLayout, DashboardLayout)
 ├── pages/          # Pages (Home, About, Features, etc.)
 ├── routes/         # React Router configs
 ├── store/          # Redux store setup
 └── utils/          # Helper functions
```

---



## 🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change.

---

## 📜 License
Sarajit Mandal

