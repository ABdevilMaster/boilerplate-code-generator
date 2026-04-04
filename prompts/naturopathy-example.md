# 🌿 Naturopathy Website — Claude Code Prompt
> Ready to paste into Claude Code / Claude / ChatGPT
> Fill [PLACEHOLDERS] before use
> Generated: 2026-04-01

---

You are a senior full-stack architect AND developer. Your job is TWO phases:
1. FIRST — Analyze the client's needs and DECIDE the best architecture
2. THEN — Build it production-ready

## PHASE 1: ARCHITECTURE DECISION

Client Priority Analysis:
- Speed to market: 4/5 (need it working fast)
- Visual quality: 5/5 (health/wellness = trust through design)
- Performance: 3/5
- Security: 3/5
- SEO: 4/5 (local clinic must rank on Google)

## PHASE 2: OUTPUT DECISION

Architecture Decision Report:
- Rendering: SSG with ISR (Next.js) — SEO is critical for local clinic
- State: React Context (simple app)
- Database: PostgreSQL + TypeORM
- Auth: JWT (admin only for booking management)
- Deployment: Docker
- File structure: Flat (small app)
- Testing: Standard

## PHASE 3: BUILD

## PROJECT DETAILS
- **App Name:** [NATUROPATHY CLINIC NAME]
- **Description:** Naturopathy clinic website with appointment booking
- **Client/Company:** [CLIENT NAME]
- **Brand Color:** #22c55e (Green Nature — change if client prefers)
- **Logo:** 🌿 (replace with actual logo URL)

## TECH STACK
- Frontend: React 18 + Vite + TypeScript
- Backend: Node.js + Express + TypeScript
- Database: PostgreSQL + TypeORM
- Auth: JWT (admin dashboard only)
- Validation: Zod
- Security: Helmet, CORS, Rate Limiting
- Animation: Framer Motion
- Testing: Vitest + Playwright
- DevOps: Docker + Docker Compose
- Styling: CSS Variables (theme.config.ts)

## BASE TEMPLATE
Use: github.com/ABdevilMaster/boilerplate-code-generator
- theme.config.ts → set green color scheme
- Run setup.sh → enter clinic name + green theme

## WHAT TO BUILD

### Pages:
- Landing page (hero: "Heal Naturally" + CTA to book)
- About Us (clinic story + practitioners)
- Treatments (list with descriptions, duration, price)
- Book Appointment (calendar picker + form)
- Testimonials (grid with ratings)
- Blog (optional — static MDX posts)
- Contact (map embed + WhatsApp button)

### API Endpoints:
- POST /api/bookings → create appointment
- GET /api/bookings (admin) → view all bookings
- PUT /api/bookings/:id/status → confirm/cancel
- GET /api/treatments → list all treatments
- POST /api/contact → contact form submission

### Database Models:
- User (admin only)
- Treatment (name, desc, duration, price, category)
- Booking (date, time, patient name, phone, treatment, status: pending/confirmed/cancelled)
- Testimonial (name, rating, text, approved)

### Special Features:
- WhatsApp button (floating, bottom right)
- Google Maps embed on contact page
- Email confirmation on booking (Nodemailer)
- Admin dashboard: view + confirm/cancel bookings
- SEO: structured data for local business (JSON-LD)
- Mobile-first (most users on phone)

## CODING RULES
1. TypeScript strict mode — no `any` types
2. All inputs validated with Zod schemas
3. All routes protected with authGuard (except public ones)
4. Error handling via centralized errorHandler middleware
5. Environment variables for ALL secrets (.env.example provided)
6. Database relations properly defined with TypeORM decorators
7. API responses follow format: { data } or { error, details? }
8. Frontend uses the useAuth() hook for all auth operations
9. All API calls go through client/src/utils/api.ts (auto token refresh)
10. Theme changes happen ONLY in theme.config.ts — never hardcode colors
11. All colors via CSS variables — ZERO hardcoded hex values in components
12. Spacing via spacing system — no magic numbers
13. Every interactive element has hover, focus, active, disabled states
14. Loading states for every async operation
15. Toast notifications for all user actions
16. Mobile-first responsive — test at 375px, 768px, 1280px
17. Folder structure: group by feature
18. No inline styles
19. No console.log in production
20. Git commits: conventional format

## OUTPUT FORMAT
- Complete, working code — not snippets
- File path as header for each file
- Include docker-compose.yml
- Include .env.example
- Update README.md

## QUALITY CHECKLIST
- [ ] docker-compose up starts everything
- [ ] Booking form submits and sends email
- [ ] Admin can view and manage bookings
- [ ] WhatsApp button works
- [ ] Green theme applied throughout
- [ ] Mobile responsive at 375px
- [ ] SEO meta tags on all pages
- [ ] Page load < 2s
- [ ] Lighthouse score ≥ 90
- [ ] No hardcoded colors or secrets
