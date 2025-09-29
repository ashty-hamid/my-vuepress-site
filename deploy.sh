#!/bin/bash

# Build the site
npm run docs:build

# Navigate to the dist folder
cd docs/.vuepress/dist

# Initialize git if not already done
if [ ! -d ".git" ]; then
  git init
  git add -A
  git commit -m "Initial commit"
fi

# Add the remote repository (replace with your GitHub username)
# git remote add origin https://github.com/YOUR_USERNAME/my-vuepress-site.git

# Push to gh-pages branch
git add -A
git commit -m "Deploy to GitHub Pages"
git push -f origin HEAD:gh-pages

echo "Deployment complete!"
