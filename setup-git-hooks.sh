#!/bin/bash

# Setup Git Hooks for Accessibility Testing
# Run this script to install pre-commit hooks for accessibility testing

echo "🔧 Setting up Git hooks for accessibility testing..."

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Error: Not in a Git repository"
    echo "💡 Please run this script from the root of your project"
    exit 1
fi

# Create hooks directory if it doesn't exist
mkdir -p .git/hooks

# Install the pre-commit hook
if [ -f "pre-commit-accessibility-hook.sh" ]; then
    cp pre-commit-accessibility-hook.sh .git/hooks/pre-commit
    chmod +x .git/hooks/pre-commit
    echo "✅ Pre-commit accessibility hook installed"
else
    echo "❌ Error: pre-commit-accessibility-hook.sh not found"
    exit 1
fi

# Create a simple post-merge hook to remind about testing
cat > .git/hooks/post-merge << 'EOF'
#!/bin/bash
echo ""
echo "🔍 Post-merge reminder: Consider running accessibility tests"
echo "💡 Run: npm run test:accessibility"
echo ""
EOF

chmod +x .git/hooks/post-merge
echo "✅ Post-merge reminder hook installed"

echo ""
echo "🎉 Git hooks setup complete!"
echo ""
echo "📋 What was installed:"
echo "   • Pre-commit hook: Quick accessibility testing before commits"
echo "   • Post-merge hook: Reminder to run accessibility tests"
echo ""
echo "🚀 Next steps:"
echo "   1. Test the hooks: Make a small change and commit"
echo "   2. Full testing: Run 'npm run test:accessibility'"
echo "   3. CI/CD: Push to GitHub to trigger automated testing"
echo ""
echo "💡 Tips:"
echo "   • Keep development server running (npm start) for pre-commit testing"
echo "   • Pre-commit tests are quick; full CI/CD tests are comprehensive"
echo "   • To skip pre-commit hook: git commit --no-verify"
