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

- User authentication
- Role-based access control
- Employee management
- Work hours tracking
- Leave requests
- Task management
- Salary management

## Project Structure

```bash
staffsync/
├── client/
├── server/
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