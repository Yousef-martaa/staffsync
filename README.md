# StaffSync

StaffSync is a fullstack employee management system designed to help companies manage employees, work hours, tasks, salaries, and leave requests through a modern web application.

## Tech Stack

### Frontend
- React
- TypeScript
- Vite

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

## Features Planned
- Employee management
- Work hours tracking
- Leave requests
- Task management
- Salary management

## Current Features
- Secure user signup with password hashing
- Duplicate email validation
- REST API structure
- MongoDB integration
- Role field support
- Full User CRUD operations
- PATCH and PUT user update support
- User login authentication
- Password verification using bcrypt
- Secure login response without password exposure
- Secure JWT authentication
- Protected API routes using middleware
- JWT token verification
- Unauthorized access handling
- Environment-based secret key management
- Role-based authorization system
- Manager and HR route protection
- Forbidden access handling for unauthorized users
- Current logged-in user profile route
- Protected /api/users/me endpoint
- Automatic user identification using JWT token
- Secure current user data retrieval without password exposure
- Frontend login page
- Login form connected to backend authentication API
- JWT token storage in browser localStorage
- Login validation and user-friendly error handling
- Dynamic Navbar based on login status
- Reusable Navbar component
- Frontend signup page
- Signup form connected to backend user creation API
- Signup validation for full name, company email, and password
- Duplicate email error handling in signup form
- Signup success redirect to login page
- Default employee role assignment from backend user model

## Project Structure

```bash
staffsync/
├── client/
│   └── src/
│       ├── assets/
│       ├── components/
│       │   └── Navbar/
│       ├── pages/
│       │   ├── Home/
│       │   ├── Login/
│       │   ├── Signup/
│       │   └── POS/
│       ├── routes/
│       ├── App.css
│       ├── App.tsx
│       └── main.tsx
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── services/
├── package.json
└── README.md
```

## Installation

Clone the repository:

```bash
git clone https://github.com/Yousef-martaa/staffsync.git
```

Install dependencies:

```bash
npm install
cd client && npm install
cd ../server && npm install
```

## Environment Variables

Create a `.env` file inside the `server` folder:

```env
MONGO_URI=your_mongodb_connection_string
```

## Run The Project

From the root folder:

```bash
npm run dev
```

Frontend:

```text
http://localhost:5173
```

Backend:

```text
http://localhost:5000
```