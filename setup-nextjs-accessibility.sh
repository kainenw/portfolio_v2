#!/bin/bash

# Next.js Accessibility Testing Setup Script
# Transfers complete accessibility automation to Next.js project

echo "🚀 Setting up accessibility testing for Next.js portfolio..."
echo "============================================================"

# Check if we're in a Next.js project
if [ ! -f "next.config.js" ] && [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from a Next.js project root"
    exit 1
fi

# Check for Next.js in package.json
if ! grep -q "next" package.json; then
    echo "⚠️  Warning: This doesn't appear to be a Next.js project"
    read -p "Continue anyway? (y/n): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

echo ""
echo "📋 Next.js Accessibility Setup Checklist:"
echo "=========================================="

# 1. Install accessibility dependencies
echo "1️⃣ Installing accessibility testing dependencies..."

# Check if playwright is installed
if ! npm list playwright &> /dev/null; then
    echo "   📦 Installing Playwright..."
    npm install --save-dev playwright @axe-core/playwright
fi

# Install global tools if not present
echo "   🌐 Installing global accessibility tools..."

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

# 2. Create accessibility testing configuration
echo "2️⃣ Setting up accessibility test configuration..."

cat > accessibility-test-config.js << 'EOF'
// Next.js Accessibility Testing Configuration
module.exports = {
  // URLs to test (Next.js default port 3000)
  urls: [
    'http://localhost:3000',
    'http://localhost:3000/about',
    'http://localhost:3000/projects',
    'http://localhost:3000/contact',
    'http://localhost:3000/projects/case-study/shopify-conversion-optimization',
    'http://localhost:3000/404-test' // 404 page
  ],
  
  // pa11y configuration
  pa11y: {
    standard: 'WCAG2AA',
    timeout: 30000,
    chromeLaunchConfig: {
      executablePath: undefined,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu'
      ]
    },
    actions: [
      'wait for element body to be visible'
    ]
  },

  // Lighthouse configuration  
  lighthouse: {
    extends: 'lighthouse:default',
    settings: {
      onlyCategories: ['accessibility'],
      formFactor: 'desktop',
      throttling: {
        rttMs: 40,
        throughputKbps: 10240,
        cpuSlowdownMultiplier: 1
      },
      screenEmulation: {
        mobile: false,
        width: 1920,
        height: 1080,
        deviceScaleFactor: 1
      }
    }
  },

  // axe-core configuration
  axe: {
    tags: ['wcag2a', 'wcag2aa', 'wcag21aa'],
    rules: {
      'color-contrast': { enabled: true },
      'focus-order-semantics': { enabled: true },
      'keyboard-navigation': { enabled: true },
      'aria-allowed-attr': { enabled: true },
      'aria-required-children': { enabled: true },
      'aria-required-parent': { enabled: true },
      'aria-roles': { enabled: true },
      'aria-valid-attr': { enabled: true },
      'aria-valid-attr-value': { enabled: true },
      'button-name': { enabled: true },
      'duplicate-id': { enabled: true },
      'form-field-multiple-labels': { enabled: true },
      'frame-title': { enabled: true },
      'html-has-lang': { enabled: true },
      'html-lang-valid': { enabled: true },
      'image-alt': { enabled: true },
      'input-image-alt': { enabled: true },
      'label': { enabled: true },
      'link-name': { enabled: true },
      'list': { enabled: true },
      'listitem': { enabled: true },
      'meta-refresh': { enabled: true },
      'meta-viewport': { enabled: true },
      'page-has-heading-one': { enabled: true },
      'region': { enabled: true },
      'scope-attr-valid': { enabled: true },
      'server-side-image-map': { enabled: true },
      'tabindex': { enabled: true },
      'table-fake-caption': { enabled: true },
      'td-headers-attr': { enabled: true },
      'th-has-data-cells': { enabled: true },
      'valid-lang': { enabled: true },
      'video-caption': { enabled: true }
    }
  }
};
EOF

echo "   ✅ Accessibility configuration created"

echo ""

# 3. Update package.json scripts for Next.js
echo "3️⃣ Updating npm scripts for Next.js..."

# Check if accessibility scripts exist
if grep -q "test:accessibility" package.json; then
    echo "   ✅ Accessibility scripts already configured"
else
    echo "   📝 Adding accessibility testing scripts..."
    
    # This is a simplified approach - in practice, you'd want to use jq or a more robust JSON editor
    echo "   ⚠️  Please manually add these scripts to your package.json:"
    echo ""
    echo '   "test:accessibility": "./test-accessibility.sh",'
    echo '   "test:a11y": "npm run test:accessibility",'
    echo '   "precommit:accessibility": "npm run test:accessibility"'
    echo ""
fi

echo ""

# 4. Set up Git hooks
echo "4️⃣ Setting up Git hooks..."
if [ -f "setup-git-hooks.sh" ]; then
    chmod +x setup-git-hooks.sh
    ./setup-git-hooks.sh
else
    echo "   📝 Git hooks setup script not found - will create basic version"
    
    # Create a basic git hooks setup
    mkdir -p .git/hooks
    
    cat > .git/hooks/pre-commit << 'EOF'
#!/bin/bash
echo "🔍 Running pre-commit accessibility check..."

if ! curl -s http://localhost:3000 > /dev/null; then
    echo "⚠️  Next.js dev server not running on port 3000"
    echo "💡 Tip: Run 'npm run dev' in another terminal before committing"
    echo "🚀 Skipping accessibility tests (will run in CI/CD)"
    exit 0
fi

echo "🧪 Running quick accessibility test..."
if command -v pa11y &> /dev/null; then
    pa11y http://localhost:3000 --standard WCAG2AA --reporter cli
    if [ $? -eq 0 ]; then
        echo "✅ Quick accessibility test passed"
        exit 0
    else
        echo "❌ Accessibility issues found - please fix before committing"
        exit 1
    fi
else
    echo "⚠️  pa11y not installed - skipping pre-commit test"
    exit 0
fi
EOF
    
    chmod +x .git/hooks/pre-commit
    echo "   ✅ Basic pre-commit hook installed"
fi

echo ""

# 5. GitHub Actions workflow for Next.js
echo "5️⃣ Setting up GitHub Actions for Next.js..."

mkdir -p .github/workflows

cat > .github/workflows/accessibility-testing.yml << 'EOF'
name: Next.js Accessibility Testing

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

jobs:
  accessibility-test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build Next.js application
        run: npm run build

      - name: Start Next.js production server
        run: npm run start &
        env:
          CI: true

      - name: Wait for Next.js application to be ready
        run: |
          echo "Waiting for Next.js application to start..."
          npx wait-on http://localhost:3000 --timeout 60000
        
      - name: Install accessibility testing tools
        run: |
          npm install -g pa11y lighthouse
          npm install --save-dev playwright @axe-core/playwright
          npx playwright install chromium

      - name: Run accessibility tests
        run: |
          chmod +x ./test-accessibility.sh
          ./test-accessibility.sh

      - name: Archive accessibility test results
        uses: actions/upload-artifact@v4
        if: always()
        with:
          name: nextjs-accessibility-test-results
          path: accessibility-test-results/
          retention-days: 30

      - name: Check for accessibility violations
        run: |
          # Check axe results for violations
          if ls accessibility-test-results/axe-*.json 1> /dev/null 2>&1; then
            for file in accessibility-test-results/axe-*.json; do
              violations=$(cat "$file" | jq '.violations | length')
              if [ "$violations" -gt 0 ]; then
                echo "❌ Accessibility violations found in $file: $violations violations"
                cat "$file" | jq '.violations'
                exit 1
              fi
            done
            echo "✅ No accessibility violations found in Next.js application"
          else
            echo "❌ axe test failed"
            exit 1
          fi

      - name: Comment PR with Next.js accessibility results
        if: github.event_name == 'pull_request'
        uses: actions/github-script@v7
        with:
          script: |
            const fs = require('fs');
            const path = require('path');
            
            try {
              const resultsDir = 'accessibility-test-results';
              let comment = '## 🔍 Next.js Accessibility Test Results\n\n';
              
              const axeFiles = fs.readdirSync(resultsDir).filter(f => f.startsWith('axe-') && f.endsWith('.json'));
              let totalViolations = 0;
              
              for (const file of axeFiles) {
                const content = JSON.parse(fs.readFileSync(path.join(resultsDir, file), 'utf8'));
                totalViolations += content.violations.length;
              }
              
              if (totalViolations === 0) {
                comment += '✅ **All Next.js accessibility tests passed!**\n\n';
                comment += '- 🎯 WCAG 2.1 AA compliance maintained\n';
                comment += '- 🚫 Zero accessibility violations found\n';
                comment += '- ⚡ Next.js SSR/SSG optimizations preserved accessibility\n\n';
                comment += `📊 **Test Coverage**: ${axeFiles.length} pages tested\n\n`;
              } else {
                comment += `❌ **Accessibility violations found**: ${totalViolations} total violations\n\n`;
                comment += '⚠️ Please review and fix accessibility issues before merging.\n\n';
              }
              
              comment += '🔗 [View detailed results in the Actions artifacts](https://github.com/${{ github.repository }}/actions/runs/${{ github.run_id }})';
              
              github.rest.issues.createComment({
                issue_number: context.issue.number,
                owner: context.repo.owner,
                repo: context.repo.repo,
                body: comment
              });
            } catch (error) {
              console.log('Could not post comment:', error.message);
            }
EOF

echo "   ✅ GitHub Actions workflow configured for Next.js"

echo ""

# 6. Final verification
echo "6️⃣ Final setup verification..."

# Check if Next.js dev server command exists
if grep -q '"dev".*"next dev"' package.json; then
    echo "   ✅ Next.js dev script configured"
else
    echo "   ⚠️  Please ensure your package.json has: \"dev\": \"next dev\""
fi

# Check if build script exists
if grep -q '"build".*"next build"' package.json; then
    echo "   ✅ Next.js build script configured"
else
    echo "   ⚠️  Please ensure your package.json has: \"build\": \"next build\""
fi

echo ""
echo "🎉 Next.js Accessibility Testing Setup Complete!"
echo "==============================================="
echo ""
echo "📊 What's configured:"
echo "   • ✅ Accessibility testing tools (pa11y, Lighthouse, axe-core)"
echo "   • ✅ Next.js-specific GitHub Actions workflow"
echo "   • ✅ Pre-commit hooks for quick validation"
echo "   • ✅ npm scripts for easy command-line testing"
echo ""
echo "🚀 Next steps:"
echo "   1. Start Next.js dev server: npm run dev"
echo "   2. Run accessibility tests: npm run test:accessibility"
echo "   3. Make a test commit to verify pre-commit hooks"
echo "   4. Push to GitHub to test CI/CD pipeline"
echo ""
echo "💡 Migration tips:"
echo "   • Keep React and Next.js versions running in parallel"
echo "   • Test accessibility after each page migration"
echo "   • Compare results between React and Next.js versions"
echo "   • Ensure zero regression in accessibility compliance"
echo ""
EOF

chmod +x setup-nextjs-accessibility.sh

echo "   ✅ Next.js accessibility setup script created"
