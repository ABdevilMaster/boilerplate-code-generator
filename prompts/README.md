# 🧠 Curious Falcon — App Generation Prompts

> Production-ready prompt pipelines for building full-stack apps with Claude, Claude Code, Cursor, and Copilot.
> By [Curious Falcon](https://github.com/ABdevilMaster) 🦅

---

## 📁 Prompts

| File | Description |
|------|-------------|
| [`CLAUDE.md`](./CLAUDE.md) | Universal 6-phase app generation pipeline |
| [`CLAUDE-INDIA.md`](./CLAUDE-INDIA.md) | 🇮🇳 India-first pipeline (Razorpay, OTP, Hindi, 2G optimized) |
| [`CLAUDE-INTERNATIONAL.md`](./CLAUDE-INTERNATIONAL.md) | 🌍 Global pipeline (Stripe, GDPR, WCAG, i18n, Sentry) |
| [`smart-app-builder.md`](./smart-app-builder.md) | Interview → Research → Build pipeline (most powerful) |
| [`universal-app-prompt.md`](./universal-app-prompt.md) | Simple fill-in-the-blanks template |
| [`naturopathy-example.md`](./naturopathy-example.md) | Real-world example: Naturopathy clinic website |

---

## 🚀 How to Use

### Option 1 — Drop in project root
Copy `CLAUDE.md` (or `CLAUDE-INDIA.md` / `CLAUDE-INTERNATIONAL.md`) into your project root.
Claude Code picks it up automatically. Just say `start`.

### Option 2 — Paste into Claude
Copy any prompt → paste into [Claude](https://claude.ai) or Claude Code → follow the phases.

### Option 3 — Smart App Builder
Use `smart-app-builder.md` for the full experience:
1. Claude interviews you (Phase 1)
2. Researches competitors (Phase 2)
3. Mines customer pain points (Phase 3)
4. Finalizes requirements (Phase 4)
5. Generates complete production app (Phase 5)
6. Applies production standards automatically (Phase 6)

---

## ⚡ Pipeline Flow

```
Phase 1 → Intake (2 min)
Phase 2 → Competitor Research (3 min)
Phase 3 → Pain Points Analysis (2 min)
Phase 4 → Requirements Finalization (2 min)
Phase 5 → BUILD (complete production code)
Phase 6 → Auto-apply production standards
          ↓
    Working app in ~30 min
    Production-ready in ~2-4 hours
```

---

## 🇮🇳 vs 🌍 Which Pipeline?

| Use India pipeline when | Use International pipeline when |
|------------------------|--------------------------------|
| Target market is India | Target market is US/EU/Global |
| Need Razorpay + UPI | Need Stripe + multi-currency |
| SMS OTP auth | Email + Google + GitHub auth |
| Optimize for 2G/3G | LTE/WiFi standard |
| Hindi/regional languages | Multi-language i18n |
| Hetzner/DigitalOcean VPS | Vercel + Railway + AWS |

---

*Part of [boilerplate-code-generator](https://github.com/ABdevilMaster/boilerplate-code-generator) — Curious Falcon 🦅*
