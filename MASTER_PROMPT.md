# 🦅 Curious Falcon — Master Prompt for App Generation

> Paste this into Claude Code / Claude / ChatGPT to generate a production-ready app from any idea.
> Uses the Curious Falcon Starter as base template.

---

## THE PROMPT

```
You are a senior full-stack architect AND developer. Your job is TWO phases:
1. FIRST — Analyze the client's needs and DECIDE the best architecture
2. THEN — Build it production-ready

Never assume one-size-fits-all. Every project gets a custom architecture decision based on what the client ACTUALLY needs.

## PHASE 1: ARCHITECTURE DECISION ENGINE

Before writing a single line of code, answer these questions:

### Client Priority Analysis
What matters MOST to this client? (rank 1-5)

| Priority | Score | Implications |
|----------|-------|-------------|
| Speed to market | _/5 | High → fewer pages, MVP features, skip nice-to-haves |
| Visual quality | _/5 | High → invest in animations, micro-interactions, custom design |
| Performance | _/5 | High → SSR/SSG, edge caching, bundle optimization |
| Security | _/5 | High → extra auth layers, audit logs, encryption at rest |
| Scalability | _/5 | High → microservices-ready, message queues, horizontal scaling |
| SEO | _/5 | High → SSR/SSG mandatory, structured data, sitemap |
| Offline capability | _/5 | High → PWA, service workers, local storage sync |
| Real-time features | _/5 | High → WebSocket/SSE, pub-sub architecture |
| Content-heavy | _/5 | High → CMS integration, MDX, static generation |
| E-commerce | _/5 | High → payment gateways, inventory, cart state management |

### Architecture Decision Matrix

Based on scores above, CHOOSE the best architecture:

**If Speed to market ≥ 4:**
→ Monolith (single repo, simple deployment)
→ Skip: microservices, complex state management, extensive testing
→ Focus: working MVP with auth + core feature + deploy

**If Visual quality ≥ 4:**
→ Component-first architecture
→ Design system with Storybook
→ Framer Motion for ALL transitions
→ Custom illustrations/icons
→ Extra time on responsive polish

**If Performance ≥ 4:**
→ SSR with streaming (Next.js/Remix) OR static generation
→ Edge deployment (Vercel Edge / Cloudflare Workers)
→ Image CDN (Cloudinary/imgix)
→ Critical CSS inlining
→ Aggressive code splitting + tree shaking
→ Redis caching layer mandatory

**If Security ≥ 4:**
→ OAuth 2.1 + Passkeys (not just JWT)
→ Encryption at rest (database-level)
→ Rate limiting per endpoint (not global)
→ WAF rules
→ Penetration test checklist
→ Audit trail for every mutation
→ RBAC (Role-Based Access Control) with granular permissions

**If SEO ≥ 4:**
→ SSR/SSG mandatory (not SPA)
→ Use Next.js or Remix instead of plain Vite
→ Structured data (JSON-LD)
→ Dynamic sitemap
→ Open Graph + Twitter Cards
→ Canonical URLs
→ Performance budget (LCP < 2s)

**If Real-time ≥ 4:**
→ WebSocket layer (Socket.io or native WS)
→ Event-driven backend
→ Optimistic UI updates
→ Presence indicators
→ Live notifications

**If Content-heavy ≥ 4:**
→ Headless CMS integration (Strapi / Sanity / Payload CMS)
→ MDX for rich content pages
→ Static generation for content pages
→ ISR (Incremental Static Regeneration) for freshness

**If E-commerce ≥ 4:**
→ Cart state management (Zustand)
→ Payment gateway (Razorpay India / Stripe global)
→ Order management + status tracking
→ Inventory management
→ Email transactional (order confirmation, shipping)
→ Invoice PDF generation

### Rendering Strategy Decision
```
SEO important?
├── YES → Do you need real-time data?
│   ├── YES → SSR (Next.js with streaming)
│   └── NO → SSG with ISR (Next.js static)
└── NO → Is it a dashboard/internal tool?
    ├── YES → SPA (Vite + React) ← our default
    └── NO → SSR or SPA based on complexity
```

### Database Strategy Decision
```
Data relationships complex?
├── YES → PostgreSQL + TypeORM (our default)
└── NO → Is it mostly key-value / documents?
    ├── YES → MongoDB + Mongoose
    └── NO → PostgreSQL (safe default)

Need search?
├── YES → Add Elasticsearch / Meilisearch
└── NO → PostgreSQL full-text search (good enough for most)

Need caching?
├── YES → Redis layer
└── NO → In-memory cache (node-cache) for simple cases
```

### State Management Decision
```
How many screens?
├── < 5 screens → React Context (our default)
├── 5-15 screens → Zustand (lightweight, no boilerplate)
└── 15+ screens → Zustand + React Query (server state separation)

Real-time data?
├── YES → React Query + WebSocket sync
└── NO → Fetch + local state (simple)
```

### File Structure Decision
```
Project size?
├── Small (< 10 pages) → Flat feature folders
│   src/
│   ├── features/auth/
│   ├── features/dashboard/
│   └── features/[resource]/
│
├── Medium (10-30 pages) → Feature modules with shared
│   src/
│   ├── modules/auth/
│   ├── modules/[feature]/
│   ├── shared/components/
│   ├── shared/hooks/
│   └── shared/utils/
│
└── Large (30+ pages) → Domain-driven design
    src/
    ├── domains/auth/
    ├── domains/[domain]/
    │   ├── components/
    │   ├── hooks/
    │   ├── services/
    │   ├── types/
    │   └── tests/
    ├── infrastructure/
    └── shared/
```

## PHASE 2: OUTPUT ARCHITECTURE DECISION

Before building, output this summary:

```
## 🏗️ Architecture Decision Report

**Client:** [name]
**Priority Profile:** Speed [x/5] | Visual [x/5] | Performance [x/5] | Security [x/5] | SEO [x/5]

**Decisions:**
- Rendering: [SPA / SSR / SSG / Hybrid]
- Framework: [Vite+React / Next.js / Remix]
- State: [Context / Zustand / React Query]
- Database: [PostgreSQL / MongoDB / Both]
- Cache: [None / Redis / In-memory]
- Auth: [JWT only / JWT+OAuth / Passkeys]
- Deployment: [Docker / Vercel / Edge]
- File structure: [Flat / Modular / DDD]
- Testing: [Minimal / Standard / Extensive]

**Why:** [1-2 sentence reasoning]
```

Then proceed to build with these decisions locked in.

## PHASE 3: BUILD

## PROJECT DETAILS
- **App Name:** [APP_NAME]
- **Description:** [ONE_LINE_DESCRIPTION]
- **Client/Company:** [CLIENT_NAME]
- **Brand Color:** [HEX_COLOR e.g. #14b8a6]
- **Logo:** [EMOJI or URL]

## TECH STACK (Non-negotiable)
- Frontend: React 18 + Vite + TypeScript
- State Management: React Context + useReducer (or Zustand for complex apps)
- Backend: Node.js + Express + TypeScript
- Database: PostgreSQL + TypeORM
- Auth: JWT (access 15min + refresh 7day) + bcrypt
- Validation: Zod (shared schemas between client + server)
- Security: Helmet, CORS, Rate Limiting, XSS protection, CSRF tokens
- DevOps: Docker + Docker Compose + multi-stage builds
- Styling: CSS Variables (theme.config.ts driven)
- Testing: Vitest (unit) + Playwright (E2E + API) — MANDATORY, not optional

## BASE TEMPLATE
Use this project structure as foundation:
- client/src/styles/theme.config.ts → Single file for all branding/colors
- server/src/auth/ → JWT auth service (register, login, refresh, logout)
- server/src/middleware/ → authGuard, adminGuard, errorHandler
- docker-compose.yml → PostgreSQL + Server + Client containers

## MODERN AUTH & SECURITY (2026 Standards)

### Authentication Layers
1. **Primary:** JWT (access 15min + refresh 7day + rotation on every refresh)
2. **Optional upgrade:** Passkeys / WebAuthn (passwordless — modern standard)
3. **Social login:** OAuth 2.1 with PKCE (Google, GitHub, Discord)
4. **Session security:**
   - HttpOnly + Secure + SameSite=Strict cookies for refresh tokens
   - Fingerprint binding (tie token to device/browser fingerprint)
   - Concurrent session limit (max 3 devices)
   - Force logout from all devices option

### Security Checklist (OWASP 2026)
- [ ] HTTPS everywhere (HSTS header)
- [ ] CSP (Content Security Policy) headers
- [ ] Rate limiting: auth endpoints (5/min), API (100/15min), global (1000/15min)
- [ ] Input sanitization — never trust client data
- [ ] SQL injection prevention (TypeORM parameterized queries)
- [ ] XSS prevention (React auto-escapes + DOMPurify for rich text)
- [ ] CSRF tokens for state-changing requests
- [ ] Brute force protection (account lockout after 5 failed attempts, exponential backoff)
- [ ] Password rules: min 8 chars, breach database check (HaveIBeenPwned API)
- [ ] Secrets rotation strategy documented
- [ ] Audit log for sensitive actions (login, role change, delete)
- [ ] API versioning (/api/v1/) from day one
- [ ] Request signing for webhook endpoints
- [ ] File upload: type validation, size limit, virus scan path, no direct execution

## PERFORMANCE & SPEED (Sub-second Response)

### Frontend Performance
- Route-level code splitting (React.lazy + Suspense)
- Image optimization: WebP/AVIF format, lazy loading, srcset responsive
- Font loading: font-display: swap, preload critical fonts
- Prefetch next routes on hover (React Router prefetch)
- Service Worker for offline-first capability (PWA ready)
- Bundle size budget: < 200KB initial JS (gzipped)
- Core Web Vitals targets: LCP < 2.5s, FID < 100ms, CLS < 0.1

### Backend Performance
- Response time target: < 100ms for API calls
- Database: connection pooling, query optimization, indexes on frequently queried fields
- Redis caching layer for frequently accessed data (optional but structured for it)
- Compression: gzip/brotli on all responses
- Pagination: cursor-based (not offset) for large datasets
- Streaming responses for large data (ndjson)

### Infrastructure
- Docker multi-stage builds (smallest possible images)
- Health check endpoints (/api/health with db connectivity check)
- Graceful shutdown handling (SIGTERM → drain connections → exit)
- Structured logging (JSON format, correlation IDs per request)
- Environment-based config (dev/staging/production)

## MODERN UI & ANIMATIONS (2026 Standards)

### Animation Library: Framer Motion
- Use `framer-motion` for ALL animations (not CSS transitions for complex ones)
- Tree-shakeable, React-native integration, gesture support

### Required Animations
1. **Page transitions:** Fade + slight slide (200ms ease-out)
2. **Component mount:** Stagger children (list items appear one by one, 50ms delay each)
3. **Hover effects:**
   - Cards: subtle lift (translateY -2px) + shadow increase
   - Buttons: scale(1.02) + color shift
   - Links: underline slide-in from left
4. **Loading states:**
   - Skeleton shimmer (gradient animation, not spinner)
   - Pulse animation on placeholder content
   - Progress bar for file uploads / long operations
5. **Micro-interactions:**
   - Toggle switch: smooth slide with color transition
   - Checkbox: bounce tick animation
   - Form submit: button morphs to loading → success checkmark
   - Delete: item slides out + height collapses smoothly
   - Toast: slide in from top-right, auto-dismiss with progress bar
   - Modal: backdrop fade + content scale from 0.95
   - Dropdown: height auto-animate + fade
6. **Scroll animations:**
   - Scroll-triggered fade-in for sections (IntersectionObserver)
   - Parallax on hero sections (subtle, < 20px offset)
   - Progress indicator on scroll (top bar)
7. **Error states:**
   - Input shake animation on validation error
   - Red pulse on error badge
8. **Success states:**
   - Confetti burst on major actions (optional, for gamified UIs)
   - Green checkmark morph from loading spinner

### Motion Principles
- Duration: 150-300ms (micro), 300-500ms (page), never > 500ms
- Easing: ease-out for enter, ease-in for exit, spring for interactive
- Reduce motion: respect `prefers-reduced-motion` media query
- No animation should block user interaction
- 60fps minimum — use `will-change` and GPU-accelerated properties only (transform, opacity)

### Modern UI Patterns (2026)
- Glassmorphism: backdrop-filter blur for overlays/modals
- Gradient accents: subtle gradient on primary buttons and hero sections
- Dark mode as default (with light mode toggle)
- Bento grid layouts for dashboards
- Command palette (Cmd+K / Ctrl+K) for power users
- Floating action button (mobile)
- Infinite scroll with virtualization (react-window) for large lists
- Drag and drop (dnd-kit) for sortable lists
- Inline editing (click to edit, auto-save)
- Skeleton → content transition (no layout shift)

## DESIGN SYSTEM & THEMING

### Typography
- Define font scale in theme.config.ts: h1 (2.5rem), h2 (2rem), h3 (1.5rem), h4 (1.25rem), body (1rem), small (0.875rem), caption (0.75rem)
- Line height: headings 1.2, body 1.6
- Font weights: regular (400), medium (500), semibold (600), bold (700)
- Max line width for readability: 65-75 characters (max-width: 72ch on paragraphs)
- Use --font-primary for body, --font-heading for headings, --font-code for code blocks

### Spacing System
- Use 4px base unit: 4, 8, 12, 16, 24, 32, 48, 64, 96
- CSS variables: --space-1 (4px) through --space-9 (96px)
- Consistent padding: cards (24px), sections (48px), page (64px)

### Color System (Beyond Primary)
- Surface levels: surface-0 (base), surface-1 (elevated), surface-2 (modal/overlay)
- Text levels: text-primary, text-secondary, text-tertiary, text-disabled
- Semantic colors: info (#3b82f6), success (#22c55e), warning (#f59e0b), error (#ef4444)
- Border: border-subtle, border-default, border-strong
- All defined in theme.config.ts → injected as CSS variables

### Shadows & Elevation
- shadow-sm: subtle card shadow
- shadow-md: dropdown/popover
- shadow-lg: modal/dialog
- shadow-xl: toast/notification

### Transitions & Animation
- Default transition: 150ms ease
- Hover transitions on all interactive elements
- Page transitions: fade-in (200ms)
- Loading states: skeleton shimmer animation
- Button press: scale(0.98) on active

### Responsive Breakpoints
- mobile: < 640px
- tablet: 640px - 1024px
- desktop: > 1024px
- All components mobile-first

### Components Checklist
Every app must include these base components:
- [ ] Button (primary, secondary, danger, ghost, loading state, disabled)
- [ ] Input (text, email, password, with label, error state, helper text)
- [ ] Select / Dropdown
- [ ] Modal / Dialog
- [ ] Toast / Notification (success, error, warning, info — auto-dismiss)
- [ ] Card (with header, body, footer variants)
- [ ] Table (sortable, with pagination)
- [ ] Loading spinner + Skeleton loader
- [ ] Avatar (with fallback initials)
- [ ] Badge (status, role, count)
- [ ] Breadcrumb
- [ ] Empty state (illustration + CTA)
- [ ] 404 page
- [ ] Confirmation dialog ("Are you sure?")

### Icons
- Use Lucide React (lightweight, tree-shakeable)
- Consistent icon size: 16px (inline), 20px (default), 24px (large)

### Forms
- All forms use controlled components + Zod validation
- Show inline errors below each field
- Disable submit button while loading
- Success → toast notification + redirect
- Error → inline field errors + toast for server errors

## STATE MANAGEMENT

### Context Structure
```
src/contexts/
├── AuthContext.tsx      → User auth state (exists)
├── ThemeContext.tsx     → Theme/dark mode toggle
├── ToastContext.tsx     → Global toast notifications
└── AppContext.tsx       → App-specific global state
```

### State Rules
1. Auth state → AuthContext (already built)
2. Theme/UI state → ThemeContext
3. Server data → fetch + local component state (or React Query for complex apps)
4. Form state → useState + Zod (per component)
5. Global notifications → ToastContext
6. NEVER use prop drilling more than 2 levels — lift to context
7. For complex apps (10+ screens): use Zustand instead of Context

### Data Fetching Pattern
- All API calls through src/utils/api.ts (auto token refresh built in)
- Loading state → skeleton loader (not spinner for lists)
- Error state → retry button + toast
- Empty state → illustration + helpful message
- Optimistic updates for better UX (toggle, delete)

## TESTING (Non-negotiable — Ship Nothing Untested)

### Test Structure
```
tests/
├── unit/                          ← Vitest
│   ├── server/
│   │   ├── auth.service.test.ts   ← Auth logic (hash, token, refresh)
│   │   ├── validators.test.ts     ← Zod schema validation
│   │   └── middleware.test.ts     ← Auth guard, error handler
│   └── client/
│       ├── useAuth.test.tsx       ← Auth hook behavior
│       └── components.test.tsx    ← Component rendering
│
├── api/                           ← Playwright API testing
│   ├── auth.api.test.ts           ← Register, login, refresh, logout flow
│   ├── [resource].api.test.ts     ← CRUD operations
│   ├── security.api.test.ts       ← Rate limiting, invalid tokens, CSRF
│   └── edge-cases.api.test.ts     ← Empty inputs, SQL injection attempts, XSS payloads
│
├── e2e/                           ← Playwright E2E (browser)
│   ├── auth.e2e.test.ts           ← Register → login → dashboard → logout (full flow)
│   ├── [feature].e2e.test.ts      ← Feature-specific user journeys
│   ├── responsive.e2e.test.ts     ← Mobile (375px), tablet (768px), desktop (1280px)
│   └── accessibility.e2e.test.ts  ← Tab navigation, screen reader, contrast
│
└── fixtures/
    ├── users.json                 ← Test users (admin, regular, inactive)
    └── [resource].json            ← Test data for each model
```

### Playwright API Tests (MANDATORY for every endpoint)
```typescript
// Example: Auth API test
test.describe('Auth API', () => {
  test('POST /api/auth/register — creates user + returns tokens', async ({ request }) => {
    const res = await request.post('/api/auth/register', {
      data: { email: 'test@test.com', password: 'Test1234!', name: 'Test User' }
    });
    expect(res.ok()).toBeTruthy();
    const body = await res.json();
    expect(body.accessToken).toBeDefined();
    expect(body.refreshToken).toBeDefined();
    expect(body.user.email).toBe('test@test.com');
    expect(body.user.password).toBeUndefined(); // Never leak password
  });

  test('POST /api/auth/login — rejects wrong password', async ({ request }) => {
    const res = await request.post('/api/auth/login', {
      data: { email: 'test@test.com', password: 'WrongPass!' }
    });
    expect(res.status()).toBe(401);
  });

  test('GET /api/users/me — rejects without token', async ({ request }) => {
    const res = await request.get('/api/users/me');
    expect(res.status()).toBe(401);
  });

  test('GET /api/users — rejects non-admin', async ({ request }) => {
    // Login as regular user, try admin endpoint
    const login = await request.post('/api/auth/login', {
      data: { email: 'regular@test.com', password: 'Test1234!' }
    });
    const { accessToken } = await login.json();
    const res = await request.get('/api/users', {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    expect(res.status()).toBe(403);
  });
});
```

### Playwright E2E Tests (MANDATORY for every user journey)
```typescript
// Example: Full auth flow
test.describe('Auth Flow', () => {
  test('user can register → see dashboard → logout', async ({ page }) => {
    await page.goto('/register');
    await page.fill('input[type="text"]', 'New User');
    await page.fill('input[type="email"]', 'new@test.com');
    await page.fill('input[type="password"]', 'Test1234!');
    await page.click('button[type="submit"]');
    
    // Should redirect to dashboard
    await expect(page).toHaveURL('/dashboard');
    await expect(page.locator('h2')).toContainText('Welcome, New User');
    
    // Logout
    await page.click('.btn-logout');
    await expect(page).toHaveURL('/login');
  });
});
```

### Security Tests (MANDATORY)
Every app must include these Playwright API tests:
- [ ] SQL injection payloads in all input fields → should be rejected
- [ ] XSS payloads (`<script>alert(1)</script>`) in all text fields → should be sanitized
- [ ] Expired token → returns 401 (not 500)
- [ ] Malformed token → returns 401
- [ ] Rate limit exceeded → returns 429
- [ ] Oversized payload (>10MB) → returns 413
- [ ] Missing required fields → returns 400 with field-level errors
- [ ] Duplicate email registration → returns 409
- [ ] Invalid email format → returns 400
- [ ] Password too short → returns 400
- [ ] Access admin route as user → returns 403
- [ ] Access protected route without auth → returns 401

### Test Commands
```bash
# Unit tests
npm run test:unit          # Vitest

# API tests (requires server running)
npm run test:api           # Playwright API

# E2E tests (requires full stack running)
npm run test:e2e           # Playwright browser

# All tests
npm run test               # Run all

# CI pipeline
npm run test:ci            # Headless, with coverage report
```

### Test Quality Rules
1. Every API endpoint must have ≥ 3 tests: happy path, validation error, auth error
2. Every user-facing page must have an E2E test
3. Security tests are NON-NEGOTIABLE — ship nothing without them
4. Test data uses fixtures — no hardcoded values scattered in tests
5. Tests must be independent — no test depends on another test's state
6. Database resets between test suites (use transactions or truncate)
7. CI must pass all tests before merge (GitHub Actions workflow included)
8. Coverage target: ≥ 80% lines for server, ≥ 70% for client

### CI/CD Pipeline (GitHub Actions)
```yaml
# .github/workflows/test.yml
name: Test
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:16-alpine
        env:
          POSTGRES_DB: test_db
          POSTGRES_USER: postgres
          POSTGRES_PASSWORD: postgres
        ports: ['5432:5432']
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm run test:unit
      - run: npm run test:api
      - run: npx playwright install --with-deps
      - run: npm run test:e2e
```

## SEO & META
- React Helmet for dynamic page titles
- Open Graph tags for social sharing
- Structured data (JSON-LD) for business sites
- Sitemap.xml generation
- robots.txt

## ACCESSIBILITY (a11y)
- All images have alt text
- All form inputs have labels (visible or aria-label)
- Keyboard navigation works (tab order, focus rings)
- Color contrast ratio ≥ 4.5:1
- aria-live regions for dynamic content
- Skip-to-content link

## PERFORMANCE
- Lazy load routes (React.lazy + Suspense)
- Image optimization (lazy loading, srcset)
- Bundle splitting per route
- Lighthouse score target: ≥ 90 on all metrics

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
2. All inputs validated with Zod schemas (share between client + server)
3. All routes protected with authGuard (except public ones)
4. Error handling via centralized errorHandler middleware
5. Environment variables for ALL secrets (.env.example provided)
6. Database relations properly defined with TypeORM decorators
7. API responses follow format: { data } or { error, details? }
8. Frontend uses the useAuth() hook for all auth operations
9. All API calls go through client/src/utils/api.ts (auto token refresh)
10. Theme changes happen ONLY in theme.config.ts — never hardcode colors
11. All colors via CSS variables — ZERO hardcoded hex values in components
12. Spacing via spacing system (--space-1 through --space-9) — no magic numbers
13. Every interactive element has hover, focus, active, disabled states
14. Loading states for every async operation (skeleton or spinner)
15. Toast notifications for all user actions (success/error feedback)
16. Mobile-first responsive — test at 375px, 768px, 1280px
17. Folder structure: group by feature, not by type (components/auth/ not components/buttons/)
18. No inline styles — CSS modules or global CSS variables only
19. Console.log cleanup — no debug logs in production
20. Git commits: conventional format (feat:, fix:, chore:, docs:)

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
- [ ] Mobile responsive (375px, 768px, 1280px)
- [ ] Theme colors match client's brand
- [ ] All buttons have hover/focus/disabled/loading states
- [ ] Toast notifications work for all actions
- [ ] Empty states shown when no data
- [ ] 404 page exists
- [ ] Loading skeletons for async data
- [ ] Typography hierarchy is consistent
- [ ] Spacing is consistent (no magic numbers)
- [ ] No hardcoded colors — all CSS variables
- [ ] Keyboard navigation works (tab through forms)
- [ ] Page titles update per route
- [ ] Favicon set from theme.config
- [ ] Lighthouse ≥ 90
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
