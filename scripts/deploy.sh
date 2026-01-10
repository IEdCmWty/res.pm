#!/usr/bin/env bash

set -e

echo "🚀 Starting deployment for 2-be-fe..."

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
  echo "❌ Not in a git repository"
  exit 1
fi

# Check for uncommitted changes
if ! git diff-index --quiet HEAD --; then
  echo "⚠️  You have uncommitted changes. Please commit them first."
  echo ""
  echo "Uncommitted files:"
  git status --porcelain
  echo ""
  read -p "Do you want to commit all changes with message 'Update build'? (y/N): " -n 1 -r
  echo
  if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "📝 Adding all changes..."
    git add .
    echo "💾 Committing changes..."
    git commit -m "Update build"
  else
    echo "❌ Deployment cancelled. Please commit your changes first."
    exit 1
  fi
fi

# Get current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "📍 Current branch: $CURRENT_BRANCH"

# Push to remote
echo "⬆️  Pushing to remote..."
git push origin "$CURRENT_BRANCH"

echo ""
echo "✅ Deployment initiated!"
echo "🔄 GitHub Actions workflow should start automatically"
echo "📊 Check the deployment status at: https://github.com/your-repo/actions"
echo ""
echo "💡 The deployment workflow is configured in:"
echo "   apps/2-be-fe/.github/workflows/deploy.yml"