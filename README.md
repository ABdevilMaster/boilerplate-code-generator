# 🦅 Curious Falcon Starter

Production-ready **React + Node.js + TypeScript** starter with authentication, Docker, and PostgreSQL.

## What's Included

### Backend (Node.js + Express + TypeScript)
- ✅ JWT authentication (access + refresh tokens)
- ✅ User registration, login, logout
- ✅ Role-based access (user/admin)
- ✅ TypeORM + PostgreSQL
- ✅ Zod validation
- ✅ Rate limiting + Helmet security
- ✅ Error handling middleware
- ✅ Multi-stage Docker build

### Frontend (React + Vite + TypeScript)
- ✅ Login & Register pages
- ✅ Protected routes
- ✅ Auto token refresh
- ✅ Admin dashboard layout
- 🔜 Coming soon...

### DevOps
- ✅ Docker Compose (one command setup)
- ✅ PostgreSQL container
- ✅ Environment config (.env.example)
- ✅ Multi-stage Dockerfile (optimized build)

## Quick Start

### With Docker (recommended)
```bash
docker-compose up -d
```
App: http://localhost:5173 | API: http://localhost:5000/api/health

### Without Docker
```bash
# Terminal 1: Start PostgreSQL (or use your own)
# Terminal 2: Server
cd server && cp .env.example .env && npm install && npm run dev
# Terminal 3: Client
cd client && npm install && npm run dev
```

## API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | /api/auth/register | ❌ | Register new user |
| POST | /api/auth/login | ❌ | Login |
| POST | /api/auth/refresh | ❌ | Refresh tokens |
| POST | /api/auth/logout | ✅ | Logout |
| GET | /api/users/me | ✅ | Current user profile |
| GET | /api/users | ✅ Admin | List all users |
| GET | /api/health | ❌ | Health check |

## Tech Stack

- **Frontend:** React 18, Vite, TypeScript
- **Backend:** Node.js, Express, TypeScript, TypeORM
- **Database:** PostgreSQL 16
- **Auth:** JWT (access + refresh tokens), bcrypt
- **Validation:** Zod
- **Security:** Helmet, CORS, Rate Limiting
- **DevOps:** Docker, Docker Compose

## License

MIT — Built by [Curious Falcon 🦅](https://github.com/ABdevilMaster)
