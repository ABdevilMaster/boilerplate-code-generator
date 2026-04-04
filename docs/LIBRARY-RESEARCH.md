# 📦 Library Intelligence Guide
> How Claude researches, verifies, and selects the best libraries before building.
> Updated: 2026-04-05

---

## Why This Matters

Bad library choices cause:
- 🐛 Breaking changes mid-project
- 🔒 Security vulnerabilities
- 💀 Abandoned packages (no updates = no fixes)
- ⚡ Performance bottlenecks
- 🔄 Incompatible peer dependencies

Claude checks all of this BEFORE writing a single line of code.

---

## What Claude Researches (Per Library)

For every library considered, Claude verifies:

| Check | What it looks for |
|-------|------------------|
| 📅 **Last update** | Updated within 6 months? (red flag if older) |
| ⭐ **GitHub stars** | Community trust signal |
| 🐛 **Open issues** | Are critical bugs unresolved? |
| 📦 **Weekly downloads** | npm download trend (growing or dying?) |
| 🔒 **Known CVEs** | Any unpatched security vulnerabilities? |
| 🤝 **Peer deps** | Compatible with your Node/React version? |
| 🏢 **Maintainer** | Solo dev risk vs company/foundation backed |
| 📖 **Docs quality** | Good docs = easier to build with |
| 🔄 **Migration risk** | v1→v2 breaking changes? |
| 🇮🇳 **India-specific** | Razorpay SDK version? MSG91 latest API? |

---

## Library Selection Rules

### ✅ GREEN — Use these
- Updated in last 3 months
- >10K weekly downloads (or dominant in niche)
- No critical unpatched CVEs
- Active maintainers responding to issues
- Stable major version (v2+)

### ⚠️ YELLOW — Use with caution
- Updated 3-6 months ago
- 1K-10K weekly downloads
- Minor open issues
- Single maintainer but active
- Beta/RC version

### 🔴 RED — Avoid these
- Not updated in 6+ months
- Declining download trend
- Critical CVEs unpatched
- Maintainer inactive/burned out
- Breaking changes in recent versions
- Better alternative exists

---

## Verified Library Stack (April 2026)

### Frontend

| Purpose | Library | Version | Status | Notes |
|---------|---------|---------|--------|-------|
| Framework | Next.js | 14.x | ✅ Green | App Router stable |
| UI Components | shadcn/ui | latest | ✅ Green | Copy-paste, no dep risk |
| Styling | Tailwind CSS | 3.x | ✅ Green | v4 in beta — use v3 |
| State | Zustand | 4.x | ✅ Green | Lightweight, well-maintained |
| Forms | React Hook Form | 7.x | ✅ Green | + Zod resolver |
| Validation | Zod | 3.x | ✅ Green | Best-in-class |
| HTTP | Axios | 1.x | ✅ Green | Auto retry, interceptors |
| Dates | date-fns | 3.x | ✅ Green | Tree-shakable |
| Animation | Framer Motion | 11.x | ✅ Green | v11 = perf improvements |
| Icons | Lucide React | latest | ✅ Green | Active, lightweight |
| Charts | Recharts | 2.x | ✅ Green | React-native charts |
| Tables | TanStack Table | 8.x | ✅ Green | Headless, powerful |
| Auth | NextAuth.js | 4.x | ✅ Green | v5 beta — use v4 |

### Backend

| Purpose | Library | Version | Status | Notes |
|---------|---------|---------|--------|-------|
| Framework | Express | 4.x | ✅ Green | v5 RC — use v4 |
| ORM | Prisma | 5.x | ✅ Green | Better than TypeORM now |
| ORM (alt) | TypeORM | 0.3.x | ⚠️ Yellow | Slower updates |
| Validation | Zod | 3.x | ✅ Green | Use on both sides |
| Auth | jose | 5.x | ✅ Green | JWT library, actively maintained |
| Security | Helmet | 7.x | ✅ Green | Use latest |
| Rate limit | express-rate-limit | 7.x | ✅ Green | Updated Feb 2026 |
| Logging | Pino | 9.x | ✅ Green | Fastest Node logger |
| Email | Resend | 3.x | ✅ Green | Better than SendGrid now |
| File upload | Multer | 1.x | ⚠️ Yellow | Consider Formidable v3 |
| Queue | BullMQ | 5.x | ✅ Green | Redis-based, fast |

### India-Specific

| Purpose | Library | Version | Status | Notes |
|---------|---------|---------|--------|-------|
| Payments | razorpay | 2.x | ✅ Green | Official SDK, updated |
| OTP/SMS | msg91 | 5.x | ✅ Green | Or use REST API directly |
| Maps | @googlemaps/js-api-loader | 1.x | ✅ Green | Official loader |
| i18n | next-intl | 3.x | ✅ Green | Best for Next.js |

### International

| Purpose | Library | Version | Status | Notes |
|---------|---------|---------|--------|-------|
| Payments | stripe | 14.x | ✅ Green | Official SDK |
| Analytics | posthog-js | 1.x | ✅ Green | Privacy-friendly |
| Errors | @sentry/nextjs | 8.x | ✅ Green | Updated regularly |
| Email | resend | 3.x | ✅ Green | Modern API |
| Auth | next-auth | 4.x | ✅ Green | v5 beta — skip for now |

### Avoid These (2026)

| Library | Why to avoid | Use instead |
|---------|-------------|-------------|
| moment.js | Deprecated, huge bundle | date-fns or dayjs |
| request | Deprecated | axios or node-fetch |
| passport.js | Complex, maintenance issues | jose + custom middleware |
| mongoose | Slower updates | Prisma |
| material-ui v4 | Old — use MUI v5+ or shadcn | shadcn/ui |
| create-react-app | Abandoned | Vite |
| redux | Overkill for most apps | Zustand |
| jquery | 2026... | Vanilla JS |

---

## How Claude Applies This in Pipelines

When generating an app, Claude:

1. **Phase 5 (BUILD) starts with a Library Audit:**
```
🔍 LIBRARY AUDIT — checking latest versions...

Framework: Next.js 14.2.3 ✅ (latest stable)
DB ORM: Prisma 5.11.0 ✅ (updated 2 weeks ago)
Auth: NextAuth 4.24.7 ✅
Payments: razorpay 2.9.2 ✅ (official SDK)
Validation: Zod 3.22.4 ✅

⚠️ SWITCHING: TypeORM → Prisma
Reason: TypeORM last updated 4 months ago, Prisma has better type safety
Impact: Better DX, easier migrations, no change to API

All libraries verified. Proceeding with build...
```

2. **Pins exact versions in package.json:**
```json
{
  "dependencies": {
    "next": "14.2.3",        ← exact, not ^14.x.x
    "prisma": "5.11.0",      ← exact
    "zod": "3.22.4"          ← exact
  }
}
```

3. **Explains any non-obvious choices:**
```
// Why Pino over Winston?
// - 5x faster (benchmarked)
// - Better structured JSON logs
// - Native async support
// - 2x more npm downloads
```

---

## Quick Version Check Command

Before starting any project:
```bash
# Check if your boilerplate dependencies are current
cd server && npx npm-check-updates

# Update all to latest
npx npm-check-updates -u && npm install

# Check for vulnerabilities
npm audit

# Fix automatically
npm audit fix
```

---

*Verified stack updated monthly by Curious Falcon 🦅*
*Last reviewed: April 2026*
