# Deployment Guide for toolate.tv

## Quick Deploy (15 minutes)

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `toolate-tv`
3. Make it **Private** (or Public if you want open source)
4. **Do NOT initialize** with README, .gitignore, or license
5. Click "Create repository"

### Step 2: Push Code to GitHub

GitHub will show you commands. Use these instead:

```bash
cd ~/.openclaw/workspace/projects/toolate-tv
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/toolate-tv.git
git push -u origin main
```

(Replace YOUR-USERNAME with your actual GitHub username)

### Step 3: Deploy to Vercel

1. Go to https://vercel.com/signup (sign up with GitHub)
2. Click "Import Project"
3. Select your `toolate-tv` repository
4. Framework Preset: **Next.js** (auto-detected)
5. Click "Deploy"
6. Wait 2-3 minutes for build

Your site will be live at: `toolate-tv.vercel.app`

### Step 4: Connect Custom Domain (toolate.tv)

1. In Vercel dashboard, go to Project Settings → Domains
2. Add domain: `toolate.tv`
3. Vercel will give you DNS records to add

### Step 5: Configure DNS at Your Domain Registrar

Add these records (Vercel will show exact values):

**A Record:**
- Name: `@`
- Value: `76.76.21.21` (Vercel's IP)

**CNAME Record:**
- Name: `www`
- Value: `cname.vercel-dns.com`

DNS propagates in 1-24 hours (usually 1-2 hours).

---

## Alternative: I Can Deploy It

If you want me to handle deployment:
1. Create a GitHub Personal Access Token with repo permissions
2. Share your Vercel account email or create a new one
3. I'll push code and deploy everything
4. You just add the DNS records

Let me know which approach you prefer.
