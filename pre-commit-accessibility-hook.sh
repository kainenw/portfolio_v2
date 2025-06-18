#!/bin/bash

# Pre-commit hook for accessibility testing
# This script runs accessibility tests before allowing commits

echo "🔍 Running pre-commit accessibility checks..."

# Check if the development server is running
if ! curl -s http://localhost:3000 > /dev/null; then
    echo "⚠️  Development server not running on port 3000"
    echo "💡 Tip: Run 'npm start' in another terminal before committing"
    echo "🚀 For now, skipping accessibility tests (will run in CI/CD)"
    echo "✅ Pre-commit check passed (accessibility tests will run in CI/CD)"
    exit 0
fi

# Run a quick accessibility test on the homepage only
echo "🧪 Running quick accessibility test on homepage..."

# Create a temporary directory for quick tests
mkdir -p .git-hooks-temp
cd .git-hooks-temp

# Run a quick pa11y test on homepage
if command -v pa11y &> /dev/null; then
    pa11y http://localhost:3000 --standard WCAG2AA --reporter cli > pa11y-quick.txt 2>&1
    
    if [ $? -eq 0 ]; then
        echo "✅ Quick accessibility test passed"
        cd ..
        rm -rf .git-hooks-temp
        exit 0
    else
        echo "❌ Accessibility issues found in homepage:"
        cat pa11y-quick.txt
        echo ""
        echo "💡 Fix accessibility issues before committing"
        echo "🔧 Run './test-accessibility.sh' for detailed results"
        cd ..
        rm -rf .git-hooks-temp
        exit 1
    fi
else
    echo "⚠️  pa11y not installed globally"
    echo "💡 Install with: npm install -g pa11y"
    echo "🚀 For now, skipping accessibility tests (will run in CI/CD)"
    echo "✅ Pre-commit check passed (accessibility tests will run in CI/CD)"
    cd ..
    rm -rf .git-hooks-temp
    exit 0
fi
