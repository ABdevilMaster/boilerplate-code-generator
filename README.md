# 🦅 Curious Falcon — Boilerplate & Prompt Pipeline

> Production-ready **React + Node.js + TypeScript** starter + AI-powered app generation prompts.
> Build full-stack apps in minutes, not days.

---

## 📁 What's Inside

```
boilerplate-code-generator/
├── client/          → React + Vite + TypeScript frontend
├── server/          → Node.js + Express + TypeScript backend
├── prompts/         → Claude app generation pipelines 🆕
├── docker-compose.yml
├── setup.sh
└── MASTER_PROMPT.md
```

---

## 🧠 Prompts — App Generation Pipelines

Drop any of these in your project root as `CLAUDE.md` and Claude Code picks it up automatically.

| File | Description |
|------|-------------|
| [`prompts/CLAUDE.md`](./prompts/CLAUDE.md) | Universal 6-phase pipeline — works for any app |
| [`prompts/CLAUDE-INDIA.md`](./prompts/CLAUDE-INDIA.md) | 🇮🇳 India-first (Razorpay, OTP, Hindi, 2G optimized) |
| [`prompts/CLAUDE-INTERNATIONAL.md`](./prompts/CLAUDE-INTERNATIONAL.md) | 🌍 Global (Stripe, GDPR, WCAG, i18n, Sentry) |
| [`prompts/smart-app-builder.md`](./prompts/smart-app-builder.md) | Full interview → research → build pipeline |
| [`prompts/universal-app-prompt.md`](./prompts/universal-app-prompt.md) | Simple fill-in-the-blanks template |
| [`prompts/naturopathy-example.md`](./prompts/naturopathy-example.md) | Real-world example: clinic website |

### ⚡ How to use

```bash
# Option 1: Drop in project root
cp prompts/CLAUDE-INDIA.md your-project/CLAUDE.md
# Open Claude Code → say "start"

# Option 2: Paste into Claude
# Copy any prompt → paste → follow the phases
```

### Pipeline flow
```
Phase 1 → Intake (2 min)
Phase 2 → Competitor Research (auto)
Phase 3 → Customer Pain Points (auto)
Phase 4 → Requirements Finalization (2 min)
Phase 5 → BUILD (complete production code)
Phase 6 → Production standards (auto-applied)
          ↓
    Working app: ~30 min
    Production-ready: ~2-4 hours
```

---

## 🚀 Boilerplate — Quick Start

### With Docker (recommended)
```bash
git clone https://github.com/ABdevilMaster/boilerplate-code-generator.git
cd boilerplate-code-generator
docker-compose up -d
```
- App: http://localhost:5173
- API: http://localhost:5000/api/health

### Without Docker
```bash
# Server
cd server && cp .env.example .env && npm install && npm run dev

# Client (new terminal)
cd client && npm install && npm run dev
```

---

## 🔧 What's Included

### Backend (Node.js + Express + TypeScript)
- ✅ JWT authentication (access + refresh tokens)
- ✅ User registration, login, logout
- ✅ Role-based access (user/admin)
- ✅ TypeORM + PostgreSQL
- ✅ Zod validation
- ✅ Rate limiting + Helmet security
- ✅ Centralized error handling middleware
- ✅ Multi-stage Docker build

### Frontend (React + Vite + TypeScript)
- ✅ Login & Register pages
- ✅ Protected routes with auto token refresh
- ✅ Admin dashboard layout
- ✅ Global theme config (theme.config.ts)
- ✅ Centralized API utility (utils/api.ts)

### DevOps
- ✅ Docker Compose (one command setup)
- ✅ PostgreSQL container
- ✅ .env.example with all variables documented
- ✅ Health check endpoint

---

## 📡 API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | /api/auth/register | ❌ | Register new user |
| POST | /api/auth/login | ❌ | Login |
| POST | /api/auth/refresh | ❌ | Refresh tokens |
| POST | /api/auth/logout | ✅ | Logout |
| GET | /api/users/me | ✅ | Current user profile |
| GET | /api/users | ✅ Admin | List all users |
| GET | /api/health | ❌ | Health check |

---

## 🛠 Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | React 18 + Vite + TypeScript |
| Backend | Node.js + Express + TypeScript |
| Database | PostgreSQL 16 + TypeORM |
| Auth | JWT (access + refresh) + bcrypt |
| Validation | Zod |
| Security | Helmet + CORS + Rate Limiting |
| DevOps | Docker + Docker Compose |

---

## 🇮🇳 vs 🌍 Which Claude Pipeline?

| Use India pipeline | Use International pipeline |
|-------------------|--------------------------|
| Target: India | Target: US / EU / Global |
| Payments: Razorpay + UPI | Payments: Stripe |
| Auth: SMS OTP | Auth: Email + Google + GitHub |
| Network: 2G/3G optimized | Network: LTE/WiFi |
| Language: Hindi + English | Language: i18n ready |
| Hosting: Hetzner / DigitalOcean | Hosting: Vercel + Railway |

---

## 📄 License

MIT — Built by [Curious Falcon 🦅](https://github.com/ABdevilMaster)
