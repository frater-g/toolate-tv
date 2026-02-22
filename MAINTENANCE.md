# The Too Late Show Website - Maintenance Guide

## Quick Reference

**Live Site:** https://toolate.tv  
**GitHub:** https://github.com/frater-g/toolate-tv  
**Hosting:** Vercel (auto-deploys from GitHub)

---

## Making Changes

### File Structure

**Pages (what visitors see):**
```
app/page.tsx           → Homepage
app/about/page.tsx     → About page
app/episodes/page.tsx  → Episodes
app/blog/page.tsx      → Blog
app/media/page.tsx     → Media gallery
app/links/page.tsx     → Social links
```

**Styling:**
```
app/globals.css        → Global styles, custom classes
tailwind.config.js     → Color palette, fonts
```

**Layout:**
```
app/layout.tsx         → Site wrapper (header, footer, metadata)
components/Navigation.tsx → Nav bar
```

---

## Deployment Workflow

1. **Edit files** (locally or on VPS at `~/.openclaw/workspace/projects/toolate-tv/`)
2. **Commit changes:** `git add . && git commit -m "Description"`
3. **Push to GitHub:** `git push origin main`
4. **Wait 2-3 minutes** - Vercel automatically builds and deploys
5. **Verify:** Check https://toolate.tv

---

## Common Issues

### Changes Not Appearing
- **Cause:** Browser cache or Vercel CDN cache
- **Fix:** Hard refresh (Ctrl+Shift+R / Cmd+Shift+R) or wait 5 minutes

### Git Push Rejected
- **Cause:** GitHub has changes you don't have locally
- **Fix:** `git pull origin main` then `git push origin main`

### Merge Conflicts
- **Cause:** Same file edited in two places
- **Fix:** Manually resolve conflicts in the file, then commit

### Authentication Failed
- **Cause:** GitHub token expired or deleted
- **Fix:** Generate new token at https://github.com/settings/tokens (needs `repo` scope)

---

## Token Management

**GitHub tokens expire/get deleted.** When authentication fails:

1. Go to https://github.com/settings/tokens
2. "Generate new token (classic)"
3. Check `repo` scope
4. Copy token
5. Update git remote: `git remote set-url origin https://TOKEN@github.com/frater-g/toolate-tv.git`

**Security:** Delete tokens after they appear in chat logs.

---

## Vercel Settings

**Project:** https://vercel.com/frater-gs-projects/toolate-tv

**Auto-deploy settings:**
- Production branch: `main`
- Automatic deployments: Enabled
- Framework: Next.js (auto-detected)

To manually trigger deployment:
1. Go to Deployments tab
2. Click "..." menu on latest deployment
3. Select "Redeploy"

---

## Branding Notes

- **Official name:** The Too Late Show (with "The", capitalized)
- **Tagline:** "No War but the Psywar"
- **Color scheme:** Black, dark gray, chrome, silver (no rust/red)
- **Typography:** Courier New lowercase primary
- **Aesthetic:** Dark metallic industrial (H.R. Giger / Warhammer 40k inspired, sanitized)
