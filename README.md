# 🦅 Curious Falcon — App Builder

> Production-ready boilerplate + Claude AI pipelines.
> Go from idea to working app in 30 minutes.

---

## What's Inside

```
├── client/          → React + Vite + TypeScript frontend
├── server/          → Node.js + Express + TypeScript backend
├── prompts/         → Claude app generation pipelines
└── docker-compose.yml
```

---

## 🚀 Quick Start — Boilerplate

```bash
git clone https://github.com/ABdevilMaster/boilerplate-code-generator.git my-app
cd my-app
cp server/.env.example server/.env   # Fill in your values
docker-compose up -d
```

- **App:** http://localhost:5173
- **API:** http://localhost:5000/api/health

---

## 🧠 Quick Start — Claude Pipelines

Pick the right pipeline and drop it in your project:

| Pipeline | Use when |
|----------|---------|
| [`prompts/CLAUDE.md`](./prompts/CLAUDE.md) | Any app — general purpose |
| [`prompts/CLAUDE-INDIA.md`](./prompts/CLAUDE-INDIA.md) | 🇮🇳 India — UPI, OTP, Hindi, Android |
| [`prompts/CLAUDE-INTERNATIONAL.md`](./prompts/CLAUDE-INTERNATIONAL.md) | 🌍 Global — Stripe, GDPR, WCAG |

```bash
# Copy to your project root
cp prompts/CLAUDE-INDIA.md your-project/CLAUDE.md

# Open Claude Code → say "start"
# Answer 10 questions → app generates automatically
```

---

## What the Pipelines Do

```
Phase 1 → Interview you (2 min)
Phase 2 → Research top 5 competitors (auto)
Phase 3 → Mine customer pain points (auto)
Phase 4 → Finalize requirements (2 min)
Phase 5 → BUILD — complete production code
Phase 6 → Apply production standards (auto)
```

Every generated app includes:
- ✅ Playwright tests (UI + API + E2E)
- ✅ Resend for email
- ✅ Exact library versions (no ^ risks)
- ✅ Library audit before build (CVEs, outdated packages)
- ✅ Docker + .env.example + README

---

## Boilerplate Stack

| Layer | Tech |
|-------|------|
| Frontend | React 18 + Vite + TypeScript |
| Backend | Node.js + Express + TypeScript |
| Database | PostgreSQL + TypeORM |
| Auth | JWT (access + refresh tokens) + bcrypt |
| Validation | Zod |
| Security | Helmet + CORS + Rate Limiting |
| DevOps | Docker + Docker Compose |

---

## API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | /api/auth/register | ❌ | Register |
| POST | /api/auth/login | ❌ | Login |
| POST | /api/auth/refresh | ❌ | Refresh token |
| POST | /api/auth/logout | ✅ | Logout |
| GET | /api/users/me | ✅ | My profile |
| GET | /api/health | ❌ | Health check |

---

## Environment Variables

```env
DATABASE_URL=postgresql://postgres:password@localhost:5432/myapp
JWT_ACCESS_SECRET=your_random_32_char_secret
JWT_REFRESH_SECRET=another_random_32_char_secret
JWT_ACCESS_EXPIRY=15m
JWT_REFRESH_EXPIRY=7d
PORT=5000
CLIENT_URL=http://localhost:5173

# Email (get free API key at resend.com)
RESEND_API_KEY=re_xxxxxxxxxxxx
EMAIL_FROM=noreply@yourdomain.com
```

---

## License

MIT — [Curious Falcon 🦅](https://github.com/ABdevilMaster)
