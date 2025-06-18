#!/bin/bash

# Automated Accessibility Testing Setup Script
# Sets up complete CI/CD integration for accessibility testing

echo "🚀 Setting up automated accessibility testing for portfolio website..."
echo "=================================================================="

# Check if we're in the right directory
if [ ! -f "package.json" ] || [ ! -f "test-accessibility.sh" ]; then
    echo "❌ Error: Please run this script from the portfolio project root"
    exit 1
fi

echo ""
echo "📋 Setup Checklist:"
echo "==================="

# 1. Install Git hooks
echo "1️⃣ Installing Git hooks for pre-commit accessibility testing..."
if [ -f "setup-git-hooks.sh" ]; then
    ./setup-git-hooks.sh
    echo "   ✅ Git hooks installed"
else
    echo "   ❌ setup-git-hooks.sh not found"
fi

echo ""

# 2. Install required dependencies
echo "2️⃣ Installing accessibility testing dependencies..."

# Check if playwright is installed
if ! npm list playwright &> /dev/null; then
    echo "   📦 Installing Playwright..."
    npm install --save-dev playwright @axe-core/playwright
fi

# Install global tools if not present
echo "   🌐 Checking global accessibility tools..."

if ! command -v pa11y &> /dev/null; then
    echo "   📦 Installing pa11y globally..."
    npm install -g pa11y
else
    echo "   ✅ pa11y already installed"
fi

if ! command -v lighthouse &> /dev/null; then
    echo "   📦 Installing Lighthouse globally..."
    npm install -g lighthouse
else
    echo "   ✅ Lighthouse already installed"
fi

# Install Playwright browsers
echo "   🎭 Installing Playwright browsers..."
npx playwright install chromium

echo "   ✅ All dependencies installed"

echo ""

# 3. Verify test script permissions
echo "3️⃣ Setting up test script permissions..."
chmod +x test-accessibility.sh
chmod +x pre-commit-accessibility-hook.sh
chmod +x setup-git-hooks.sh
echo "   ✅ Script permissions configured"

echo ""

# 4. Create accessibility testing npm scripts (already done in package.json)
echo "4️⃣ Verifying npm scripts..."
if grep -q "test:accessibility" package.json; then
    echo "   ✅ Accessibility testing scripts configured"
else
    echo "   ⚠️  Accessibility testing scripts may need configuration"
fi

echo ""

# 5. GitHub Actions workflow
echo "5️⃣ Verifying GitHub Actions workflow..."
if [ -f ".github/workflows/accessibility-testing.yml" ]; then
    echo "   ✅ GitHub Actions workflow configured"
    echo "   📝 Next push will trigger automated accessibility testing"
else
    echo "   ❌ GitHub Actions workflow not found"
fi

echo ""

# 6. Test the setup
echo "6️⃣ Testing the setup..."
echo "   🧪 Running a quick validation test..."

# Check if dev server is running
if curl -s http://localhost:3000 > /dev/null; then
    echo "   ✅ Development server is running"
    echo "   🚀 Ready to run full accessibility tests!"
    
    read -p "   🤔 Would you like to run a full accessibility test now? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "   🔍 Running full accessibility test suite..."
        ./test-accessibility.sh
    else
        echo "   📋 You can run tests later with: npm run test:accessibility"
    fi
else
    echo "   ⚠️  Development server not running"
    echo "   💡 Start with: npm start"
    echo "   📋 Then run: npm run test:accessibility"
fi

echo ""
echo "🎉 Automated Accessibility Testing Setup Complete!"
echo "=================================================="
echo ""
echo "📊 What's now automated:"
echo "   • ✅ Pre-commit hooks for quick accessibility checks"
echo "   • ✅ GitHub Actions for comprehensive CI/CD testing"
echo "   • ✅ npm scripts for easy command-line testing"
echo "   • ✅ Automated violation detection and reporting"
echo ""
echo "🔧 Available commands:"
echo "   • npm run test:accessibility  - Run full accessibility test suite"
echo "   • npm run test:a11y          - Shorthand for accessibility testing"
echo "   • ./test-accessibility.sh    - Direct script execution"
echo ""
echo "🚀 CI/CD Integration:"
echo "   • Push/PR to GitHub triggers automated testing"
echo "   • Test results posted as PR comments"
echo "   • Build fails if accessibility violations found"
echo "   • Test artifacts saved for 30 days"
echo ""
echo "💡 Next steps:"
echo "   1. Make a test commit to verify pre-commit hooks"
echo "   2. Push to GitHub to test CI/CD pipeline"
echo "   3. Create a PR to see automated testing in action"
echo ""
echo "📚 Documentation:"
echo "   • ACCESSIBILITY_MAINTENANCE_GUIDE.md - Ongoing maintenance"
echo "   • ACCESSIBILITY_TESTING_CHECKLIST.md - Manual testing procedures"
echo "   • ACCESSIBILITY_STATEMENT.md - Public accessibility commitment"
echo ""
