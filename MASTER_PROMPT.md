# 🦅 Curious Falcon — Master Prompt for App Generation

> Paste this into Claude Code / Claude / ChatGPT to generate a production-ready app from any idea.
> Uses the Curious Falcon Starter as base template.

---

## THE PROMPT

```
You are a senior full-stack developer building a production-ready web application.

## PROJECT DETAILS
- **App Name:** [APP_NAME]
- **Description:** [ONE_LINE_DESCRIPTION]
- **Client/Company:** [CLIENT_NAME]
- **Brand Color:** [HEX_COLOR e.g. #14b8a6]
- **Logo:** [EMOJI or URL]

## TECH STACK (Non-negotiable)
- Frontend: React 18 + Vite + TypeScript
- Backend: Node.js + Express + TypeScript
- Database: PostgreSQL + TypeORM
- Auth: JWT (access 15min + refresh 7day) + bcrypt
- Validation: Zod
- Security: Helmet, CORS, Rate Limiting
- DevOps: Docker + Docker Compose
- Styling: CSS Variables (theme.config.ts driven)

## BASE TEMPLATE
Use this project structure as foundation:
- client/src/styles/theme.config.ts → Single file for all branding/colors
- server/src/auth/ → JWT auth service (register, login, refresh, logout)
- server/src/middleware/ → authGuard, adminGuard, errorHandler
- docker-compose.yml → PostgreSQL + Server + Client containers

## WHAT TO BUILD

### Pages Required:
[LIST_PAGES]
Example:
- Landing page with hero section
- Dashboard with stats cards
- [Feature] management (CRUD)
- Profile/settings page
- Admin panel (user management)

### API Endpoints Required:
[LIST_ENDPOINTS]
Example:
- CRUD for [RESOURCE] (/api/[resource])
- File upload (/api/upload)
- Search/filter (/api/[resource]?search=&filter=)

### Database Models:
[LIST_MODELS]
Example:
- User (already exists in template)
- [Model1]: fields...
- [Model2]: fields...

### Special Features:
[LIST_FEATURES]
Example:
- Email notifications (SendGrid/Nodemailer)
- Payment integration (Razorpay/Stripe)
- File upload (S3/local)
- Real-time updates (WebSocket)
- PDF generation
- Calendar/booking system

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

## OUTPUT FORMAT
- Complete, working code — not snippets
- File path as header for each file
- Include docker-compose.yml updates if new services needed
- Include .env.example updates for new variables
- Update README.md with new endpoints and setup steps

## QUALITY CHECKLIST
Before finishing, verify:
- [ ] docker-compose up starts everything
- [ ] Auth flow works (register → login → access protected → refresh → logout)
- [ ] All CRUD operations work
- [ ] Admin-only routes return 403 for regular users
- [ ] Zod catches invalid inputs with clear error messages
- [ ] No hardcoded secrets in code
- [ ] Mobile responsive
- [ ] Theme colors match client's brand
```

---

## EXAMPLE USAGE

### For Sovan Portfolio (Doctor Site):
```
App Name: Sovan Clinic
Description: Doctor portfolio + appointment booking
Client: Dr. Sovan
Brand Color: #14b8a6 (Teal Medical)
Logo: 🏥

Pages: Landing, About, Services, Book Appointment, Dashboard (doctor view)
API: /api/appointments (CRUD), /api/services (CRUD), /api/contact (POST)
Models: Appointment (date, time, patient, status), Service (name, desc, price)
Features: Razorpay payment, email confirmation, calendar view
```

### For Insurance Website (Dad):
```
App Name: Mandal Insurance
Description: Insurance agency portal with policy comparison
Client: Dad's Agency
Brand Color: #3b82f6 (Blue Professional)
Logo: 🛡️

Pages: Landing, Policy Types, Get Quote, Contact, Admin Dashboard
API: /api/policies (CRUD), /api/quotes (POST), /api/leads (CRUD)
Models: Policy (type, provider, premium, coverage), Lead (name, phone, interest)
Features: WhatsApp integration, PDF quote generation, Google Business link
```

### For Naturopathy Website:
```
App Name: Nature Heal
Description: Naturopathy clinic website with booking
Client: [Naturopathy Client]
Brand Color: #22c55e (Green Nature)
Logo: 🌿

Pages: Landing, Treatments, Practitioners, Book Session, Blog, Testimonials
API: /api/treatments (CRUD), /api/bookings (CRUD), /api/testimonials (CRUD)
Models: Treatment (name, desc, duration, price), Booking (date, treatment, patient)
Features: Calendar booking, email reminders, testimonial moderation
```

---

## HOW TO USE

1. Copy the prompt above
2. Fill in the `[PLACEHOLDERS]` for your specific app
3. Paste into Claude Code / Claude / ChatGPT
4. Get complete working code
5. Drop into your boilerplate-code-generator repo
6. `docker-compose up` → deployed

**Time per app: ~30 minutes instead of 3 days**

---

*Built by Curious Falcon 🦅 — Because starting from scratch is for people who have time to waste.*
