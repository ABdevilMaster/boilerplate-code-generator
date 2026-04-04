# 🚀 Getting Started — Step by Step

> Complete guide to using the Curious Falcon Boilerplate + Claude Pipelines.
> From zero to production-ready app — with real examples at every step.

---

## 📦 Prerequisites

```bash
# Make sure you have these installed
node --version    # v18+ required
docker --version  # For Docker setup
git --version     # For cloning
gh --version      # GitHub CLI (optional but recommended)
```

---

## STEP 1 — Clone the Repo

```bash
git clone https://github.com/ABdevilMaster/boilerplate-code-generator.git my-app
cd my-app
```

---

## STEP 2 — Choose Your Path

### Path A: Use the Boilerplate (build on existing code)
Skip to [Step 3 — Run the Boilerplate](#step-3--run-the-boilerplate)

### Path B: Use a Claude Pipeline (generate a new app from scratch)
Skip to [Step 6 — Use Claude Pipelines](#step-6--use-claude-pipelines)

### Path C: Both (generate app using boilerplate as base)
Follow all steps in order.

---

## STEP 3 — Run the Boilerplate

### Option A: Docker (recommended — one command)

```bash
# Copy environment file
cp server/.env.example server/.env

# Start everything
docker-compose up -d

# Check it's running
curl http://localhost:5000/api/health
# → { "status": "ok", "version": "1.0.0", "uptime": 12.3 }
```

Open browser:
- **Frontend:** http://localhost:5173
- **API:** http://localhost:5000/api

### Option B: Manual (no Docker)

```bash
# Terminal 1 — Start server
cd server
cp .env.example .env
# Edit .env → add your PostgreSQL connection string
npm install
npm run dev
# → Server running on http://localhost:5000

# Terminal 2 — Start client
cd client
npm install
npm run dev
# → App running on http://localhost:5173
```

---

## STEP 4 — Environment Variables

Edit `server/.env`:

```env
# Database
DATABASE_URL=postgresql://postgres:password@localhost:5432/myapp

# JWT Secrets (generate random strings)
JWT_ACCESS_SECRET=your_random_secret_here_min_32_chars
JWT_REFRESH_SECRET=another_random_secret_here_min_32_chars

# Token expiry
JWT_ACCESS_EXPIRY=15m
JWT_REFRESH_EXPIRY=7d

# Server
PORT=5000
NODE_ENV=development

# Frontend URL (for CORS)
CLIENT_URL=http://localhost:5173
```

**Generate secure secrets:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

## STEP 5 — Customize for Your App

### Change the theme

Edit `client/src/styles/theme.config.ts`:

```typescript
// ❌ Never hardcode colors in components
// ✅ Always change here → reflects everywhere

export const theme = {
  colors: {
    primary: '#6366f1',      // Change this → your brand color
    primaryHover: '#4f46e5',
    secondary: '#f1f5f9',
    background: '#ffffff',
    text: '#1e293b',
    error: '#ef4444',
    success: '#22c55e',
  },
  fonts: {
    body: 'Inter, system-ui, sans-serif',
    heading: 'Inter, system-ui, sans-serif',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  }
};
```

**Example — Change to green brand:**
```typescript
primary: '#16a34a',      // Green
primaryHover: '#15803d',
```

### Add a new API route

```typescript
// server/src/routes/product.routes.ts
import { Router } from 'express';
import { authGuard } from '../middleware/auth.middleware';

const router = Router();

// Public route
router.get('/', async (req, res) => {
  res.json({ data: { products: [] } });
});

// Protected route
router.post('/', authGuard, async (req, res) => {
  // Only authenticated users reach here
  res.json({ data: { message: 'Product created' } });
});

export default router;
```

Register in `server/src/index.ts`:
```typescript
import productRoutes from './routes/product.routes';
app.use('/api/products', productRoutes);
```

### Add a new page (React)

```typescript
// client/src/components/products/ProductList.tsx
import { useEffect, useState } from 'react';
import { api } from '../../utils/api';  // Always use this, never fetch directly

interface Product {
  id: string;
  name: string;
  price: number;
}

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/products')
      .then(res => setProducts(res.data.products))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="skeleton" />;  // Always show skeleton

  return (
    <ul>
      {products.map(p => (
        <li key={p.id}>{p.name} — ₹{p.price}</li>
      ))}
    </ul>
  );
};
```

---

## STEP 6 — Use Claude Pipelines

### Which pipeline should I use?

| Your app is for... | Use this pipeline |
|-------------------|------------------|
| Indian users (UPI, Hindi, mobile) | `CLAUDE-INDIA.md` |
| Global users (US/EU, Stripe, GDPR) | `CLAUDE-INTERNATIONAL.md` |
| Any app, figure out later | `CLAUDE.md` |
| Already know what you want | `universal-app-prompt.md` |
| Want Claude to interview you | `smart-app-builder.md` |

### Method 1: Drop in project root (Claude Code)

```bash
# Copy your chosen pipeline
cp prompts/CLAUDE-INDIA.md your-project/CLAUDE.md

# Open Claude Code in that project
# Claude automatically reads CLAUDE.md

# In Claude Code, just say:
# "start"
```

### Method 2: Paste into Claude.ai

1. Open [claude.ai](https://claude.ai) or Claude Code
2. Open `prompts/CLAUDE-INDIA.md` (or your chosen file)
3. Copy the entire contents
4. Paste into Claude
5. Say **"start"** — Claude begins Phase 1

---

## STEP 7 — Complete Example Walkthrough

**Goal:** Build a clinic appointment booking app for India.

### 7.1 — Open Claude, paste CLAUDE-INDIA.md, say "start"

Claude responds:
> "Ready to build for India. Answer these fast..."

### 7.2 — Answer Phase 1 questions

```
App name: DocBook
Problem: Patients waste hours calling clinics. Need easy online booking.
Users: Tier 1-2 city patients, 25-50 age, moderate tech level
Must-haves: Search clinics, book appointment, get SMS confirmation
Platform: Web app + mobile PWA
Monetization: Free for patients, ₹999/month per clinic
Language: English + Hindi
Payments: Razorpay (clinics pay subscription)
```

### 7.3 — Claude runs Phase 2 (competitor research)

Claude automatically researches:
- Practo, Apollo247, Justdial, NirogStreet, MFine
- Finds gaps: no offline booking, poor SMS, bad mobile UX

### 7.4 — Claude runs Phase 3 (pain points)

Real complaints found:
- "App crashes on 3G" (Play Store 1-star reviews)
- "No Hindi support" (Reddit r/india)
- "SMS confirmation never arrives" (Practo reviews)

### 7.5 — Claude asks Phase 4 gap-fill questions

```
✅ SMS via MSG91 (cheapest for India)
✅ Admin panel for clinics
✅ No HIPAA needed (not US)
✅ Deploy on DigitalOcean (₹ friendly)
```

### 7.6 — Claude generates complete app

Outputs:
```
Architecture Decision: Next.js SSR (SEO critical for local search)
State: Zustand (clinic dashboard has complex state)
DB: PostgreSQL + Prisma
Auth: OTP via MSG91

📁 Folder structure (full tree)
📄 All files — complete code
🐳 docker-compose.yml
🔐 .env.example
📖 README.md
```

### 7.7 — Run it

```bash
docker-compose up -d
# App live at http://localhost:3000
```

**Total time from "start" to running app: ~30-45 minutes** 🚀

---

## STEP 8 — Deploy to Production

### Option A: Vercel (fastest for Next.js)

```bash
npm install -g vercel
vercel

# Follow prompts
# Your app is live in ~2 minutes
```

### Option B: DigitalOcean / Hetzner VPS (recommended for India)

```bash
# On your VPS
git clone your-repo
docker-compose -f docker-compose.prod.yml up -d

# Point your domain DNS → VPS IP
# SSL via Certbot (free)
certbot --nginx -d yourdomain.com
```

### Option C: Railway (easiest full-stack)

```bash
npm install -g @railway/cli
railway login
railway up
```

---

## 🛑 Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| `Cannot connect to database` | Check `DATABASE_URL` in `.env` — make sure PostgreSQL is running |
| `JWT_ACCESS_SECRET is not defined` | Copy `.env.example` to `.env` and fill all values |
| `CORS error` | Check `CLIENT_URL` in `.env` matches your frontend URL exactly |
| `Port 5173 already in use` | `kill -9 $(lsof -ti:5173)` |
| `Docker containers not starting` | `docker-compose down && docker-compose up --build` |
| `TypeScript errors` | Run `npm run typecheck` — fix all errors before building |

---

## 📚 What to Read Next

- [`prompts/README.md`](../prompts/README.md) — Full guide to all Claude pipelines
- [`prompts/CLAUDE-INDIA.md`](../prompts/CLAUDE-INDIA.md) — India pipeline deep dive
- [`prompts/smart-app-builder.md`](../prompts/smart-app-builder.md) — Most powerful pipeline
- [`MASTER_PROMPT.md`](../MASTER_PROMPT.md) — Architecture decision master prompt

---

*Built by [Curious Falcon 🦅](https://github.com/ABdevilMaster)*

---

## STEP 9 — Run Tests

All generated apps include Playwright for UI + API + E2E testing:

```bash
# Install browsers (first time only)
npx playwright install

# Run all tests
npm test

# Run only API tests
npm run test:api

# Run only E2E tests
npm run test:e2e

# Open interactive UI
npm run test:ui

# Generate tests by recording browser actions
npm run test:codegen
```

**API test example (no extra tool needed):**
```typescript
// tests/api/products.spec.ts
test('GET /api/products returns list', async ({ request }) => {
  const res = await request.get('/api/products');
  expect(res.status()).toBe(200);
  const body = await res.json();
  expect(body.data.products).toBeInstanceOf(Array);
});
```
