# 🚀 Universal App Generator Prompt
> Ready to paste into Claude / Claude Code / ChatGPT / Cursor / Copilot
> Fill [PLACEHOLDERS] before use
> Created: 2026-04-04 | Based on Naturopathy Website template

---

You are a senior full-stack architect AND developer. Your job is THREE phases:
1. FIRST — Analyze the client's needs and DECIDE the best architecture
2. THEN — Plan the full structure
3. FINALLY — Build it production-ready, complete, no placeholders

---

## PHASE 1: ARCHITECTURE DECISION

Client Priority Analysis:
- Speed to market: [1-5] → [reason]
- Visual quality: [1-5] → [reason]
- Performance: [1-5] → [reason]
- Security: [1-5] → [reason]
- SEO: [1-5] → [reason]

Based on above, decide and state:
- Rendering strategy: [SSG / SSR / CSR / ISR]
- State management: [Context / Zustand / Redux / none]
- Database: [PostgreSQL / MongoDB / SQLite / localStorage / none]
- Auth: [JWT / OAuth / session / none]
- Deployment target: [Docker / Vercel / Netlify / bare Node]
- File structure: [flat / feature-grouped / domain-driven]

---

## PHASE 2: PROJECT DETAILS

- **App Name:** [YOUR APP NAME]
- **Description:** [What it does in 1-2 lines]
- **Target Users:** [Who will use it]
- **Brand Color:** [primary hex color]
- **Logo:** [emoji or URL — placeholder ok]
- **Key Goal:** [The ONE thing this app must do perfectly]

---

## PHASE 3: TECH STACK

- **Frontend:** [React + Vite / Next.js / Vue / plain HTML] + TypeScript
- **Backend:** [Node.js + Express / Next.js API routes / none]
- **Database:** [PostgreSQL + TypeORM / MongoDB + Mongoose / localStorage / none]
- **Auth:** [JWT / OAuth / none]
- **Validation:** Zod
- **Styling:** [Tailwind CSS / CSS Variables / MUI / shadcn]
- **Animation:** [Framer Motion / CSS / none]
- **Testing:** [Vitest + Playwright / Jest / none]
- **DevOps:** [Docker + Docker Compose / none]
- **Extra libs:** [any specific libraries needed]

---

## PHASE 4: WHAT TO BUILD

### Pages / Screens:
- [Page 1] — [what it shows/does]
- [Page 2] — [what it shows/does]
- [Page 3] — [what it shows/does]
- [Add more as needed]

### API Endpoints:
- [METHOD] /api/[route] → [what it does]
- [METHOD] /api/[route] → [what it does]
- [Add more as needed]

### Database Models:
- [Model 1] ([field: type, field: type, ...])
- [Model 2] ([field: type, field: type, ...])
- [Add more as needed]

### Special Features:
- [Feature 1 — e.g. WhatsApp button, payment gateway, real-time updates]
- [Feature 2]
- [Feature 3]

---

## CODING RULES (Non-negotiable)

1. TypeScript strict mode — no `any` types
2. All inputs validated with Zod schemas
3. All routes protected with authGuard (except public ones)
4. Centralized error handling middleware
5. Environment variables for ALL secrets (.env.example provided)
6. Database relations properly defined with ORM decorators
7. API responses follow format: `{ data }` or `{ error, details? }`
8. Frontend: all API calls through a single `utils/api.ts` (auto token refresh)
9. Theme changes ONLY in `theme.config.ts` — never hardcode colors
10. All colors via CSS variables — ZERO hardcoded hex values in components
11. Spacing via spacing system — no magic numbers
12. Every interactive element has hover, focus, active, disabled states
13. Loading states for every async operation
14. Toast notifications for all user actions
15. Mobile-first responsive — test at 375px, 768px, 1280px
16. Folder structure: group by feature
17. No inline styles
18. No console.log in production
19. Git commits: conventional format (feat:, fix:, chore:)
20. Complete, working code — no "TODO" or "implement this later"

---

## OUTPUT FORMAT

Deliver in this exact order:
1. **Architecture Decision Report** — which choices you made and why
2. **Folder structure** — full tree
3. **All files** — complete code, file path as header for each
4. **docker-compose.yml** (if applicable)
5. **.env.example** — all required variables
6. **README.md** — setup + run instructions
7. **How to extend** — how to add features later

---

## QUALITY CHECKLIST

Before finishing, verify:
- [ ] `docker-compose up` (or `npm run dev`) starts everything
- [ ] All core features work end-to-end
- [ ] Forms validate and show errors properly
- [ ] Auth works (login, logout, protected routes)
- [ ] Mobile responsive at 375px
- [ ] No hardcoded colors or secrets
- [ ] All env vars documented in .env.example
- [ ] Page load < 2s
- [ ] Lighthouse score ≥ 85
- [ ] No TypeScript errors

---

## QUICK FILL GUIDE

| Placeholder | Example values |
|-------------|---------------|
| App Name | Travel Planner, Task Manager, Portfolio |
| Stack | React+Vite, Next.js, plain HTML |
| DB | PostgreSQL, MongoDB, none |
| Auth | JWT, Google OAuth, none |
| Brand Color | #3b82f6 (blue), #22c55e (green), #f97316 (orange) |
| Speed priority | 5 = ship fast, 1 = take your time |
| Visual priority | 5 = design matters most, 1 = functional only |

---

*Universal template by Falcon 🦅 | Adapt for any app — web, mobile, dashboard, API, tool*
