#!/bin/bash
# 🦅 Curious Falcon Starter — Quick Setup
# Run: ./setup.sh
# Changes theme.config.ts with your company details

echo "🦅 Curious Falcon Starter — Setup"
echo "=================================="
echo ""

read -p "Company name: " COMPANY_NAME
read -p "Tagline: " TAGLINE
read -p "Logo (emoji or URL): " LOGO

echo ""
echo "Pick a color scheme:"
echo "  1) 💜 Purple (default)"
echo "  2) 💙 Blue Professional"
echo "  3) 💚 Green Nature"
echo "  4) 🧡 Orange Energy"
echo "  5) ❤️ Red Bold"
echo "  6) 🩵 Teal Medical"
echo "  7) ⚪ Light Mode"
echo ""
read -p "Choice (1-7): " COLOR_CHOICE

case $COLOR_CHOICE in
  2) PRIMARY="#3b82f6"; HOVER="#2563eb"; BG="#0f172a"; SURFACE="#1e293b";;
  3) PRIMARY="#22c55e"; HOVER="#16a34a"; BG="#052e16"; SURFACE="#14532d";;
  4) PRIMARY="#f97316"; HOVER="#ea580c"; BG="#1c1917"; SURFACE="#292524";;
  5) PRIMARY="#ef4444"; HOVER="#dc2626"; BG="#1c1917"; SURFACE="#292524";;
  6) PRIMARY="#14b8a6"; HOVER="#0d9488"; BG="#042f2e"; SURFACE="#134e4a";;
  7) PRIMARY="#6366f1"; HOVER="#4f46e5"; BG="#f8fafc"; SURFACE="#ffffff";;
  *) PRIMARY="#6366f1"; HOVER="#4f46e5"; BG="#0f172a"; SURFACE="#1e293b";;
esac

# Update theme.config.ts
THEME_FILE="client/src/styles/theme.config.ts"

sed -i "s/name: '.*'/name: '${COMPANY_NAME}'/" $THEME_FILE
sed -i "s/tagline: '.*'/tagline: '${TAGLINE}'/" $THEME_FILE
sed -i "s/logo: '.*'/logo: '${LOGO}'/" $THEME_FILE
sed -i "s/primary: '.*',\s*\/\/ Main/primary: '${PRIMARY}',       \/\/ Main/" $THEME_FILE
sed -i "s/primaryHover: '.*',\s*\/\/ Hover/primaryHover: '${HOVER}',  \/\/ Hover/" $THEME_FILE
sed -i "s/background: '.*',\s*\/\/ Page/background: '${BG}',    \/\/ Page/" $THEME_FILE
sed -i "s/surface: '.*',\s*\/\/ Cards/surface: '${SURFACE}',       \/\/ Cards/" $THEME_FILE

echo ""
echo "✅ Setup complete!"
echo "   Company: $COMPANY_NAME"
echo "   Colors: $PRIMARY"
echo ""
echo "Next: docker-compose up -d"
echo "🦅 Happy building!"
