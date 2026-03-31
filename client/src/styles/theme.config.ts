/**
 * 🦅 Curious Falcon Theme Config
 * 
 * CHANGE THIS FILE ONLY — entire app theme updates automatically.
 * Colors, fonts, branding, layout — all in one place.
 */

export const themeConfig = {
  // === COMPANY BRANDING ===
  company: {
    name: 'Curious Falcon',
    tagline: 'Build something great',
    logo: '🦅', // Replace with URL: '/logo.png' or 'https://...'
    favicon: '/favicon.ico',
  },

  // === COLOR SCHEME ===
  // Change these 6 values → entire app updates
  colors: {
    primary: '#6366f1',       // Main brand color (buttons, links, accents)
    primaryHover: '#4f46e5',  // Hover state
    background: '#0f172a',    // Page background
    surface: '#1e293b',       // Cards, navbar, panels
    surfaceHover: '#334155',  // Hover on cards/borders
    text: '#f1f5f9',          // Primary text
    textMuted: '#94a3b8',     // Secondary text
    error: '#ef4444',         // Error states
    success: '#22c55e',       // Success states
    warning: '#f59e0b',       // Warning states
  },

  // === PRESET COLOR SCHEMES ===
  // Uncomment one to use, or create your own above
  presets: {
    // Blue Professional
    // primary: '#3b82f6', primaryHover: '#2563eb', background: '#0f172a', surface: '#1e293b'

    // Green Nature
    // primary: '#22c55e', primaryHover: '#16a34a', background: '#052e16', surface: '#14532d'

    // Purple Creative
    // primary: '#a855f7', primaryHover: '#9333ea', background: '#1a0533', surface: '#2e1065'

    // Orange Energy
    // primary: '#f97316', primaryHover: '#ea580c', background: '#1c1917', surface: '#292524'

    // Red Bold
    // primary: '#ef4444', primaryHover: '#dc2626', background: '#1c1917', surface: '#292524'

    // Teal Medical
    // primary: '#14b8a6', primaryHover: '#0d9488', background: '#042f2e', surface: '#134e4a'

    // Light Mode
    // primary: '#6366f1', primaryHover: '#4f46e5', background: '#f8fafc', surface: '#ffffff', text: '#0f172a', textMuted: '#64748b'
  },

  // === TYPOGRAPHY ===
  fonts: {
    primary: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    code: "'Fira Code', 'JetBrains Mono', monospace",
    heading: "inherit", // Set different font for headings if needed
  },

  // === LAYOUT ===
  layout: {
    maxWidth: '1200px',
    borderRadius: '12px',
    navbarHeight: '64px',
    sidebarWidth: '260px',
  },

  // === FEATURES (toggle on/off) ===
  features: {
    darkMode: true,
    showLogo: true,
    showTagline: true,
    adminPanel: true,
    socialLogin: false,   // Coming soon
    twoFactor: false,     // Coming soon
  },
};

// === AUTO-GENERATE CSS VARIABLES ===
export function injectTheme() {
  const root = document.documentElement;
  const { colors, fonts, layout } = themeConfig;

  root.style.setProperty('--primary', colors.primary);
  root.style.setProperty('--primary-hover', colors.primaryHover);
  root.style.setProperty('--bg', colors.background);
  root.style.setProperty('--surface', colors.surface);
  root.style.setProperty('--surface-hover', colors.surfaceHover);
  root.style.setProperty('--text', colors.text);
  root.style.setProperty('--text-muted', colors.textMuted);
  root.style.setProperty('--error', colors.error);
  root.style.setProperty('--success', colors.success);
  root.style.setProperty('--warning', colors.warning);
  root.style.setProperty('--font-primary', fonts.primary);
  root.style.setProperty('--font-code', fonts.code);
  root.style.setProperty('--max-width', layout.maxWidth);
  root.style.setProperty('--radius', layout.borderRadius);
  root.style.setProperty('--navbar-height', layout.navbarHeight);
  root.style.setProperty('--sidebar-width', layout.sidebarWidth);
}
