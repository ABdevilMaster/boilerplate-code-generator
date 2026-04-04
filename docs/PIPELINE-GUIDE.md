# 🧠 Claude Pipeline Guide — Detailed Reference

> How to use each pipeline with real examples and expected outputs.

---

## Which Pipeline for Which Situation?

```
You have an idea → use smart-app-builder.md (Claude interviews you)
You know what you want → use CLAUDE.md or CLAUDE-INDIA.md
You're building for India → use CLAUDE-INDIA.md
You're building for global → use CLAUDE-INTERNATIONAL.md
You want a quick template → use universal-app-prompt.md
You want to see an example → read naturopathy-example.md
```

---

## Pipeline 1: CLAUDE.md (Universal)

**Best for:** Any app when you're not sure which pipeline to use.

**What it does:**
- 6-phase interview → research → build process
- Auto-detects India vs international requirements from your answers
- Applies production standards automatically

**Example usage:**
```
# Drop in project
cp prompts/CLAUDE.md my-app/CLAUDE.md

# In Claude Code → say:
start

# Claude asks:
"Ready to build. Answer these fast..."
```

**Time to working app:** ~30 min

---

## Pipeline 2: CLAUDE-INDIA.md 🇮🇳

**Best for:** Apps targeting Indian users.

**What's different from universal:**
- Default auth: SMS OTP via MSG91 (not email/password)
- Default payments: Razorpay with UPI as first option
- Mobile-first at 375px
- Optimized for 2G/3G connectivity
- Hindi/English bilingual support
- Deployment defaults to Hetzner/DigitalOcean (cheapest ₹ for India)

**Built-in code patterns:**
```typescript
// ₹ currency — always formatted this way
const price = formatINR(99900); // → ₹99,900

// Indian phone validation
const phone = '9876543210'; // 10 digits, starts 6-9

// IST timezone
const now = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
```

**Example — Food delivery app:**
```
start

App: QuickBite
Problem: No reliable food ordering app for Tier 2 cities
Users: 18-35, Tier 2 cities, Android phones, patchy 3G
Must-haves: Browse restaurants, order food, track delivery
Platform: Android PWA
Monetization: 5% commission per order
Language: Hindi + English
Payments: Razorpay (UPI + card)
```

**What Claude generates:**
- Next.js PWA with offline support
- MSG91 OTP authentication
- Razorpay with UPI first
- Google Maps for delivery tracking
- Hindi strings in i18n files
- Works offline (service worker caches menu)

---

## Pipeline 3: CLAUDE-INTERNATIONAL.md 🌍

**Best for:** SaaS products targeting US/EU/Global market.

**What's different:**
- Stripe subscriptions with webhooks
- GDPR compliance (cookie consent, data export, deletion)
- WCAG 2.1 AA accessibility
- Sentry error tracking + PostHog analytics
- Multi-currency support
- Product Hunt launch checklist

**Built-in compliance:**
```typescript
// GDPR — always included
GET /api/user/export     → Download all user data as JSON
DELETE /api/user/account → Hard delete + confirmation email

// Cookie consent
<CookieBanner />  → Required for EU users

// Privacy policy
/legal/privacy-policy.md → Template included
```

**Example — Project management SaaS:**
```
start

App: TaskFlow
Market opportunity: Asana is too complex, Todoist too simple — gap in middle
Primary market: US freelancers + small teams
Users: 25-45, knowledge workers, Mac/Windows
Must-haves: Tasks, projects, team collaboration
Platform: Web app
Monetization: Freemium — $12/month for Pro
Compliance: GDPR (EU customers)
Scale: Growth (1K-100K users)
```

**What Claude generates:**
- Next.js 14 + Stripe subscriptions
- NextAuth with Google + GitHub
- GDPR data export/deletion endpoints
- PostHog analytics
- Sentry error tracking
- Product Hunt launch checklist

---

## Pipeline 4: smart-app-builder.md (Most Powerful)

**Best for:** When you want the most competitive, research-backed app possible.

**What makes it different:**
- Claude INTERVIEWS you first (10 focused questions)
- Then researches top 5 competitors LIVE
- Mines real customer pain points from Reddit/reviews
- Finds your biggest market gap
- Only THEN generates the app — built specifically to beat competitors

**Example session:**

```
[You paste smart-app-builder.md into Claude]
[Say "start"]

Claude: "Ready to build something great. Let's go."

Round 1:
Claude: "App name / working title?"
You: "Second Brain Pro"

Claude: "One sentence — what problem does it solve?"
You: "People build note systems but never use them"

Claude: "Who are the primary users?"
You: "Knowledge workers, 25-40, procrastinators, India + US"

[After Round 1...]

Claude: "Running competitor analysis now..."
[Researches Notion, Obsidian, Mem, Capacities, Logseq]

🏆 COMPETITOR RANKING
#1 Notion — flexible but requires too much setup
   Weakness: Mobile is terrible, abandonment in 1 week
#2 Obsidian — powerful but plugin rabbit hole
   Weakness: No mobile, steep learning curve
...

💔 CUSTOMER PAIN POINTS
| # | Pain | Source | Severity |
| 1 | "I build the system, never use it" | Reddit r/PKMS | 🔴 High |
| 2 | "Mobile apps are broken" | Play Store | 🔴 High |
| 3 | "Abandons in a week" | Medium | 🔴 High |

🏆 BIGGEST UNMET NEED:
"An app that learns YOU — doesn't need you to learn IT"

🎯 OUR USP:
"The first second brain that fills itself"

[Phase 4 gap questions...]
[Phase 5 — BUILD]
```

**Time:** ~45-60 min (longer due to research phases)
**Output quality:** Significantly higher — built to beat specific competitors

---

## Pipeline 5: universal-app-prompt.md (Quick Template)

**Best for:** When you already know exactly what you want and just need clean code fast.

**How to use:**
1. Open `prompts/universal-app-prompt.md`
2. Fill in the `[PLACEHOLDERS]`
3. Paste into Claude

**Example filled-in:**
```
App Name: InsuranceHub
Description: Insurance agency portfolio + lead capture website
Target Users: People looking for insurance (30-55, India, desktop)
Brand Color: #1e40af (blue — trust)

Tech Stack:
- Frontend: Next.js 14 + TypeScript + Tailwind
- Backend: Next.js API routes
- Database: PostgreSQL + Prisma
- Auth: None (public site)

Pages:
- Landing page (hero, services, trust signals)
- About Us
- Insurance Types (health, car, life, home)
- Get Quote (lead capture form)
- Contact

Special Features:
- WhatsApp button (floating)
- Premium calculator
- Google Reviews embed
```

**Time to app:** ~15-20 min

---

## Tips for Best Results

### Do this ✅
- Answer questions specifically — "React developer, 5 years, India" not just "developer"
- Mention your budget constraints upfront
- Say which competitors you want to beat
- Specify if you need offline support, dark mode, etc.

### Don't do this ❌
- Don't say "make it like Uber" without specifics
- Don't skip questions — every answer improves output quality
- Don't ask for everything at once — phases exist for a reason

### Power move 🔥
Combine pipelines: Use `smart-app-builder.md` to research + get requirements, then pass the output to `CLAUDE-INDIA.md` or `CLAUDE-INTERNATIONAL.md` for the actual build. Best of both worlds.

---

*Curious Falcon 🦅 — [github.com/ABdevilMaster](https://github.com/ABdevilMaster)*
