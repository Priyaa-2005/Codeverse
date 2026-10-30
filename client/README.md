# 🚀 CodeVerse

> A unified coding platform that helps developers track, analyze, and improve their coding journey from a single dashboard.

CodeVerse is a full-stack web application designed to bring coding activity from different platforms into one place. It provides a centralized dashboard where users can track solved problems, monitor streaks, set coding goals, analyze performance, and follow a DSA roadmap.

---

## 📌 Features

### 🔐 Authentication
- User Registration
- User Login
- Secure password hashing using bcrypt
- JWT-based authentication
- Protected routes

### 📊 Dashboard
- Total problems solved
- Current coding streak
- Platform-wise problem count
- Weekly coding goals
- Coding activity overview
- Quick navigation to different sections

### 💻 Problem Tracker
- Add coding problems
- Select coding platform
- Set difficulty level
- Add topic/category
- View solved problems
- Store solved problems in PostgreSQL

### 📈 Analytics
- Total problems solved
- Easy / Medium / Hard problem distribution
- Platform-wise analysis
- Topic-wise analysis
- Daily coding activity
- Interactive charts using Recharts

### 🎯 Goals
- Create coding goals
- Set target number of problems
- Track current progress
- Calculate goal completion percentage
- Mark goals as completed

### 🧠 DSA Roadmap
- Structured DSA learning roadmap
- Topic-wise progression
- Helps users systematically prepare for coding interviews

### 👤 Profile
- User profile information
- Basic account details

### ⚙️ Settings
- User settings
- Dark mode interface
- Account-related options

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- React Router
- Axios
- Recharts
- Lucide React

### Backend

- Node.js
- Express.js
- JWT
- bcryptjs
- CORS
- dotenv

### Database

- PostgreSQL
- Prisma ORM

### Development Tools

- VS Code
- Git
- GitHub
- Git Bash

---

## 🏗️ System Architecture

```text
                    ┌─────────────────────┐
                    │      CodeVerse      │
                    │     Frontend        │
                    │   React + Vite      │
                    └──────────┬──────────┘
                               │
                               │ Axios / REST API
                               ▼
                    ┌─────────────────────┐
                    │      Backend        │
                    │ Node.js + Express   │
                    └──────────┬──────────┘
                               │
                               │ Prisma ORM
                               ▼
                    ┌─────────────────────┐
                    │     PostgreSQL      │
                    │      Database       │
                    └─────────────────────┘