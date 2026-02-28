# Contributing to The Too Late Show Website

Thanks for contributing! This guide will help you get started.

## Quick Start

```bash
# Clone the repo
git clone https://github.com/frater-g/toolate-tv.git
cd toolate-tv

# Install dependencies
npm install

# Run development server
npm run dev

# Run tests
npm test

# Run all checks (what CI runs)
npm run ci
```

## Git Workflow TL;DR

**We use rebase + squash merge to keep history clean:**

1. Create feature branch from `main`
2. Make commits (as many as you want)
3. **Rebase onto `main`** before pushing: `git rebase origin/main`
4. Push with `--force-with-lease` if rebased
5. Open PR
6. CI must pass
7. **Squash and merge** (combines all commits into one)

**Key commands:**
```bash
# Before opening/updating PR
git fetch origin
git rebase origin/main
git push --force-with-lease origin your-branch-name
```

## Development Workflow

### 1. Create an Issue

Before starting work, create a GitHub Issue describing:
- What you're adding/fixing
- Why it's needed
- How you plan to implement it (for features)

**Examples:**
- Bug: "Newsletter button doesn't submit on mobile"
- Feature: "Add dark mode toggle"
- Content: "Add new blog post about XYZ"

### 2. Create a Branch

```bash
# For features
git checkout -b feature/dark-mode-15

# For bugs
git checkout -b fix/newsletter-mobile-12

# For content (optional)
git checkout -b content/new-blog-post-20
```

Branch naming: `type/short-description-issue-number`

### 3. Make Your Changes

**Code changes:**
- Write clean, readable code
- Follow existing patterns and style
- Add/update tests for your changes

**Content changes:**
- Blog posts: Add markdown to `content/posts/`
- Episodes: Add markdown to `content/episodes/`
- Images: Add to `public/media/gallery/` (optimize first!)

### 4. Write Tests

**For code changes, add:**
- **Unit tests** — Test individual functions
- **Integration tests** — Test components/pages render correctly
- **Coverage** — Aim for meaningful coverage (not 100%, but cover critical paths)

**Example test:**
```typescript
// app/about/__tests__/page.test.tsx
import { render, screen } from '@testing-library/react'
import About from '../page'

describe('About Page', () => {
  it('renders the about heading', () => {
    render(<About />)
    expect(screen.getByText(/about/i)).toBeInTheDocument()
  })
})
```

**Content changes:** No tests required.

### 5. Run Tests Locally

Before pushing:

```bash
# Type check
npm run type-check

# Lint
npm run lint

# Test
npm test

# Build check
npm run build

# Or run everything at once (what CI runs)
npm run ci
```

Fix any errors before proceeding.

### 6. Commit Your Changes

Use clear, descriptive commit messages:

```bash
# Good
git commit -m "Add dark mode toggle component"
git commit -m "Fix newsletter button mobile tap target"
git commit -m "Add blog post: QAnon and Public Screens"

# Bad
git commit -m "stuff"
git commit -m "fixed it"
git commit -m "updates"
```

**Multiple commits are fine!** They'll be squashed when merging.

### 7. Rebase Before Pushing

**Always rebase onto latest `main` before opening/updating your PR.**

This keeps history linear and avoids merge commits.

```bash
# Fetch latest main
git fetch origin

# Rebase your branch onto main
git rebase origin/main

# If there are conflicts:
# 1. Fix conflicts in your editor
# 2. git add <fixed-files>
# 3. git rebase --continue

# If you need to abort:
# git rebase --abort
```

### 8. Push and Open a Pull Request

```bash
# First time pushing this branch
git push origin feature/dark-mode-15

# If you've rebased (after initial push)
git push --force-with-lease origin feature/dark-mode-15
```

**⚠️ Use `--force-with-lease` after rebasing** — safer than `--force`, prevents overwriting others' work.

**Open PR on GitHub:**
- Title: "Add dark mode toggle (closes #15)"
- Fill out the PR template

**PR Description Template:**
```markdown
## What
Brief description of what this PR does.

## Why
Why this change is needed.

## Testing
- [ ] Tests added/updated
- [ ] All tests pass locally
- [ ] Tested manually in browser

## Screenshots (if UI change)
[Add screenshots here]

Closes #15
```

### 9. Wait for CI

GitHub Actions will automatically:
- Run type checking
- Run linting
- Run all tests
- Build the site

**You must fix any failures before merging.**

### 10. Review & Merge

**Before merging:**
- All CI checks must pass (type-check, lint, tests, build)
- Rebase again if `main` has moved ahead while your PR was open
- For significant changes, request a review from another contributor

**Merging:**
- Once approved and CI is green, click **"Squash and merge"**
- This combines all your commits into one clean commit on `main`
- Edit the commit message if needed (default is PR title + body)
- Delete your branch after merging (GitHub will prompt)

**Why squash merge?**
- Keeps `main` history clean (one commit per feature/fix)
- Easy to revert entire features if needed
- Clear timeline of what changed when

**Example:**
```
Your PR branch (5 commits):
- "WIP dark mode"
- "add toggle component"  
- "fix styling"
- "add tests"
- "address review comments"

After squash merge on main (1 commit):
- "Add dark mode toggle (#15)"
```

## Code Style

- **TypeScript** — Use types, avoid `any`
- **React** — Functional components, hooks
- **Tailwind** — Use utility classes, follow existing patterns
- **Format** — Prettier/ESLint will enforce this

## Testing Guidelines

### What to test:
✅ Critical user paths (homepage renders, gallery works)
✅ New features you add
✅ Bug fixes (test that the bug is fixed)

### What NOT to test:
❌ Third-party libraries (Next.js, React)
❌ Trivial changes (typo fixes, copy updates)
❌ Content files (markdown)

### Test structure:
```typescript
describe('Component Name', () => {
  it('does something specific', () => {
    // Arrange
    const props = { ... }
    
    // Act
    render(<Component {...props} />)
    
    // Assert
    expect(screen.getByText('Expected')).toBeInTheDocument()
  })
})
```

## Content Guidelines

### Blog Posts

Create `content/posts/YYYY-MM-DD-title.md`:

```markdown
---
title: "Your Post Title"
date: "2026-02-28"
description: "Brief summary for preview"
author: "Your Name"
tags: ["tag1", "tag2"]
---

Your content here...
```

### Episodes

Create `content/episodes/YYYY-MM-DD-title.md`:

```markdown
---
title: "Episode Title"
date: "2026-02-28"
description: "Brief summary"
videoUrl: "https://youtube.com/..."
featured: false
---

Episode description...
```

### Images

**Optimize before adding:**
```bash
# Resize to max 1600px width, 85% quality
convert image.jpg -resize '1600x1600>' -quality 85 optimized.jpg
```

Add to `public/media/gallery/` and update the `galleryImages` array in `app/media/page.tsx`.

## Troubleshooting

### Rebase Conflicts

If you get conflicts during rebase:

```bash
# 1. Git will pause and show conflicted files
# 2. Open each file and resolve conflicts (look for <<<< ==== >>>>)
# 3. After fixing:
git add <fixed-file>
git rebase --continue

# If you want to abort the rebase:
git rebase --abort
```

### "Force push rejected"

If `git push --force-with-lease` is rejected, someone else pushed to your branch:

```bash
# Pull their changes first
git pull origin your-branch-name

# Then rebase again
git rebase origin/main

# Then push
git push --force-with-lease origin your-branch-name
```

### "Main has moved ahead"

If `main` updated while your PR was open:

```bash
# In your feature branch
git fetch origin
git rebase origin/main

# Fix any conflicts, then:
git push --force-with-lease origin your-branch-name

# CI will re-run automatically
```

### Accidentally committed to `main`

If you made changes on `main` instead of a branch:

```bash
# Create a branch with your changes
git checkout -b feature/my-fix-123

# Go back to main
git checkout main

# Reset main to match origin
git reset --hard origin/main

# Your changes are safe in feature/my-fix-123
# Now push that branch and open a PR
```

## Getting Help

- **Issues:** Check existing issues or create a new one
- **Questions:** Open a discussion on GitHub
- **Bugs:** Open an issue with reproduction steps

## Thank You!

Your contributions make this project better. 🙏
