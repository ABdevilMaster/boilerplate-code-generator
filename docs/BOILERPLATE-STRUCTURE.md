# 🗂️ Boilerplate Structure — What Every File Does

> Every file explained. No guessing.

---

## Full Directory Tree

```
boilerplate-code-generator/
│
├── 📁 client/                    → React frontend
│   ├── 📄 Dockerfile             → Multi-stage production build
│   ├── 📄 index.html             → HTML entry point
│   ├── 📄 nginx.conf             → Production nginx config
│   ├── 📄 package.json           → Frontend dependencies
│   ├── 📄 tsconfig.json          → TypeScript config
│   ├── 📄 vite.config.ts         → Vite build config
│   └── 📁 src/
│       ├── 📄 main.tsx           → App entry point
│       ├── 📄 App.tsx            → Root component + routing
│       ├── 📁 components/
│       │   ├── 📁 auth/
│       │   │   ├── Login.tsx     → Login form
│       │   │   └── Register.tsx  → Registration form
│       │   ├── 📁 dashboard/
│       │   │   └── Dashboard.tsx → Main dashboard (authenticated users)
│       │   └── 📁 layout/
│       │       └── Layout.tsx    → Page wrapper (nav + content)
│       ├── 📁 hooks/
│       │   └── useAuth.tsx       → Auth state hook (login/logout/user)
│       ├── 📁 utils/
│       │   └── api.ts            → Axios instance with auto token refresh
│       └── 📁 styles/
│           ├── global.css        → Global styles + CSS variables
│           └── theme.config.ts   → Single source of truth for colors/fonts
│
├── 📁 server/                    → Node.js backend
│   ├── 📄 Dockerfile             → Multi-stage production build
│   ├── 📄 package.json           → Backend dependencies
│   ├── 📄 tsconfig.json          → TypeScript config
│   ├── 📄 .env.example           → All environment variables documented
│   └── 📁 src/
│       ├── 📄 index.ts           → Express app setup + routes registration
│       ├── 📁 auth/
│       │   ├── auth.service.ts   → Login, register, token logic
│       │   └── user.entity.ts    → User database model (TypeORM)
│       ├── 📁 db/
│       │   └── data-source.ts    → PostgreSQL connection + TypeORM config
│       ├── 📁 middleware/
│       │   ├── auth.middleware.ts  → JWT verification guard
│       │   └── error.middleware.ts → Centralized error handler
│       └── 📁 routes/
│           ├── auth.routes.ts    → /api/auth/* endpoints
│           └── user.routes.ts    → /api/users/* endpoints
│
├── 📁 prompts/                   → Claude app generation pipelines
│   ├── README.md                 → Usage guide
│   ├── CLAUDE.md                 → Universal pipeline
│   ├── CLAUDE-INDIA.md           → India-first pipeline
│   ├── CLAUDE-INTERNATIONAL.md   → Global pipeline
│   ├── smart-app-builder.md      → Interview → research → build
│   ├── universal-app-prompt.md   → Simple fill-in template
│   └── naturopathy-example.md    → Real-world example
│
├── 📁 docs/                      → Documentation
│   ├── GETTING-STARTED.md        → Step-by-step setup guide
│   ├── PIPELINE-GUIDE.md         → Claude pipeline detailed reference
│   └── BOILERPLATE-STRUCTURE.md  → This file
│
├── 📄 docker-compose.yml         → Dev environment (app + PostgreSQL)
├── 📄 MASTER_PROMPT.md           → Architecture decision master prompt
├── 📄 README.md                  → Project overview
├── 📄 package.json               → Root scripts (run both client + server)
└── 📄 setup.sh                   → Auto-setup script
```

---

## Key Files Explained

### `client/src/utils/api.ts` — The Most Important Frontend File

**Never use `fetch` or raw `axios` directly. Always use this.**

```typescript
// What it does:
// 1. Attaches JWT access token to every request automatically
// 2. If 401 → silently refreshes token → retries request
// 3. If refresh fails → logs user out automatically

// Usage:
import { api } from '../utils/api';

// GET
const response = await api.get('/users/me');

// POST
const response = await api.post('/products', { name: 'Item', price: 999 });

// PUT
const response = await api.put('/products/123', { price: 1299 });

// DELETE
const response = await api.delete('/products/123');
```

---

### `client/src/styles/theme.config.ts` — Single Color Source

**Never hardcode hex values in components. Change theme here.**

```typescript
export const theme = {
  colors: {
    primary: '#6366f1',    // ← Change this for your brand
    // All components use var(--color-primary) from CSS variables
  }
};

// Wrong ❌
<button style={{ backgroundColor: '#6366f1' }}>

// Right ✅
<button className="btn-primary">
// .btn-primary uses var(--color-primary) from global.css
```

---

### `server/src/middleware/auth.middleware.ts` — Route Protection

```typescript
import { authGuard } from '../middleware/auth.middleware';

// Unprotected (anyone can access)
router.get('/products', getProducts);

// Protected (must be logged in)
router.post('/products', authGuard, createProduct);

// Admin only
router.delete('/products/:id', authGuard, adminGuard, deleteProduct);
```

---

### `server/src/middleware/error.middleware.ts` — Never throw raw errors

```typescript
// Wrong ❌ — leaks internal info
app.get('/users', async (req, res) => {
  const user = await db.query('SELECT * FROM users');
  res.json(user);
  // If this throws, unhandled error crashes server
});

// Right ✅ — errors handled centrally
app.get('/users', async (req, res, next) => {
  try {
    const user = await db.query('SELECT * FROM users');
    res.json({ data: user });
  } catch (err) {
    next(err);  // Passes to error middleware → clean JSON response
  }
});

// Error middleware returns:
// { "error": "Something went wrong", "details": "..." }
```

---

### `server/.env.example` — Environment Variables

```env
# Copy to .env and fill values
# NEVER commit .env to git

DATABASE_URL=          # Your PostgreSQL connection string
JWT_ACCESS_SECRET=     # Random 32+ char string
JWT_REFRESH_SECRET=    # Different random 32+ char string
JWT_ACCESS_EXPIRY=15m  # How long access tokens last
JWT_REFRESH_EXPIRY=7d  # How long refresh tokens last
PORT=5000              # Backend port
NODE_ENV=development   # development | production
CLIENT_URL=http://localhost:5173  # Frontend URL for CORS
```

---

### `docker-compose.yml` — Dev Environment

```yaml
# What it starts:
# 1. PostgreSQL database (port 5432)
# 2. Node.js server (port 5000) with hot reload
# 3. React client (port 5173) with hot reload

# Start everything:
docker-compose up -d

# Stop everything:
docker-compose down

# Restart with fresh build:
docker-compose down && docker-compose up --build

# View logs:
docker-compose logs -f server
docker-compose logs -f client
```

---

## API Response Format

**Every API response follows this format. Never deviate.**

```typescript
// Success
{
  "data": { ... }        // Your payload
}

// Success (list)
{
  "data": {
    "items": [...],
    "total": 42,
    "page": 1
  }
}

// Error
{
  "error": "Human readable message",
  "details": "Technical details (dev only)"
}
```

**Frontend consumption:**
```typescript
const response = await api.get('/products');
const products = response.data.data.items;  // data → response.data → payload
```

---

## Adding a New Feature (Complete Example)

**Goal:** Add a "Products" feature with CRUD.

### 1. Database model
```typescript
// server/src/products/product.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;
}
```

### 2. Service
```typescript
// server/src/products/product.service.ts
import { AppDataSource } from '../db/data-source';
import { Product } from './product.entity';

const repo = AppDataSource.getRepository(Product);

export const getProducts = async () => repo.find({ where: { isActive: true } });

export const createProduct = async (data: Partial<Product>) => {
  const product = repo.create(data);
  return repo.save(product);
};
```

### 3. Routes
```typescript
// server/src/routes/product.routes.ts
import { Router } from 'express';
import { authGuard } from '../middleware/auth.middleware';
import * as ProductService from '../products/product.service';
import { z } from 'zod';

const router = Router();

// Validation schema
const createSchema = z.object({
  name: z.string().min(1).max(100),
  price: z.number().positive(),
});

router.get('/', async (req, res, next) => {
  try {
    const products = await ProductService.getProducts();
    res.json({ data: { products } });
  } catch (err) { next(err); }
});

router.post('/', authGuard, async (req, res, next) => {
  try {
    const body = createSchema.parse(req.body);  // Validates + throws if invalid
    const product = await ProductService.createProduct(body);
    res.status(201).json({ data: { product } });
  } catch (err) { next(err); }
});

export default router;
```

### 4. Register route
```typescript
// server/src/index.ts — add this line
import productRoutes from './routes/product.routes';
app.use('/api/products', productRoutes);
```

### 5. Frontend component
```typescript
// client/src/components/products/ProductList.tsx
import { useEffect, useState } from 'react';
import { api } from '../../utils/api';

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    api.get('/products')
      .then(res => setProducts(res.data.data.products))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="skeleton-list" />;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <ul className="product-list">
      {products.map((p: any) => (
        <li key={p.id} className="product-item">
          <span>{p.name}</span>
          <span>₹{p.price}</span>
        </li>
      ))}
    </ul>
  );
};
```

---

*Curious Falcon 🦅 — [github.com/ABdevilMaster](https://github.com/ABdevilMaster)*
