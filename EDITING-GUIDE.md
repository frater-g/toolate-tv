# Website Editing Guide

**How to change text and content on toolate.tv**

## Quick Links to Edit Pages

Click these to edit directly on GitHub:

- [Homepage](https://github.com/frater-g/toolate-tv/blob/main/app/page.tsx) - `app/page.tsx`
- [About](https://github.com/frater-g/toolate-tv/blob/main/app/about/page.tsx) - `app/about/page.tsx`
- [Links](https://github.com/frater-g/toolate-tv/blob/main/app/links/page.tsx) - `app/links/page.tsx`
- [Media](https://github.com/frater-g/toolate-tv/blob/main/app/media/page.tsx) - `app/media/page.tsx`
- [Episodes](https://github.com/frater-g/toolate-tv/blob/main/app/episodes/page.tsx) - `app/episodes/page.tsx`
- [Blog](https://github.com/frater-g/toolate-tv/blob/main/app/blog/page.tsx) - `app/blog/page.tsx`

## How to Edit on GitHub

1. Click a link above
2. Click the **pencil icon** (top right, says "Edit this file")
3. Change the text you want
4. Scroll down to "Commit changes"
5. Add a short description like "Update homepage text"
6. Click "Commit changes"
7. Wait 1-2 minutes → changes are live at toolate.tv

---

## What's Safe to Edit vs What's Code

### ✅ SAFE TO EDIT (Content)

**Text inside quotes:**
```tsx
<p className="...">this text is safe to change</p>
<h1 className="...">this heading is safe to change</h1>
```

**Examples:**

**Homepage tagline:**
```tsx
// FIND THIS:
<p className="text-2xl text-steel mt-8 text-center tracking-wider">
  no war but the psywar
</p>

// CHANGE "no war but the psywar" to anything you want
// DON'T touch the <p className="..."> part
```

**About page sections:**
```tsx
// FIND THIS:
<p className="text-steel leading-relaxed">
  dr. belial crow is a cia plant, vat-grown to host a psyop talk show.
</p>

// CHANGE the text between > and </p>
// LEAVE the <p className="..."> part alone
```

**Section headings:**
```tsx
// FIND THIS:
<h2 className="text-2xl text-silver mb-4">the premise</h2>

// CHANGE "the premise" to anything
// LEAVE <h2 className="..."> alone
```

---

### ⚠️ DON'T TOUCH (Code)

**Anything with `className=`** - This is styling code
```tsx
className="text-2xl text-steel"  // ← LEAVE THIS ALONE
```

**Anything with brackets `{` `}`** - This is JavaScript
```tsx
{[1, 2, 3].map((i) => ...)}  // ← DON'T EDIT THIS
```

**Lines starting with `export`, `import`, `const`** - This is structure
```tsx
export default function Home() {  // ← LEAVE ALONE
import { getPosts } from '@/lib/content'  // ← LEAVE ALONE
```

**Self-closing tags like `<img />` or `<video />`** - Media code
```tsx
<img src="/logo-header.png" alt="..." />  // ← BE CAREFUL
// You can change the alt="..." text, but nothing else
```

---

## Real Examples: What to Change

### Example 1: Change Homepage Tagline

**File:** `app/page.tsx`

**BEFORE:**
```tsx
<p className="text-2xl text-steel mt-8 text-center tracking-wider">
  no war but the psywar
</p>
```

**AFTER:**
```tsx
<p className="text-2xl text-steel mt-8 text-center tracking-wider">
  tune in, drop out, wake up
</p>
```

**What you changed:** Just the text between `>` and `</p>`

---

### Example 2: Change About Page Description

**File:** `app/about/page.tsx`

**BEFORE:**
```tsx
<p className="text-steel leading-relaxed">
  dr. belial crow is a cia plant, vat-grown to host a psyop talk show. 
  the tagline says it all: "no war but the psywar."
</p>
```

**AFTER:**
```tsx
<p className="text-steel leading-relaxed">
  dr. belial crow hosts a show about psychological operations and media warfare. 
  nothing here is what it seems.
</p>
```

**What you changed:** Text between `>` and `</p>`. Left `className` alone.

---

### Example 3: Change Section Heading

**File:** `app/about/page.tsx`

**BEFORE:**
```tsx
<h2 className="text-2xl text-silver mb-4">the premise</h2>
```

**AFTER:**
```tsx
<h2 className="text-2xl text-silver mb-4">what is this show?</h2>
```

**What you changed:** Just the text between `>` and `</h2>`

---

### Example 4: Update Homepage Welcome Section

**File:** `app/page.tsx`

**BEFORE:**
```tsx
<h2 className="text-3xl mb-4 text-white">welcome to the psyop</h2>
<p className="text-steel leading-relaxed mb-4">
  hosted by dr. belial crow, a cia plant vat-grown to host a talk show about 
  counterculture compromise and information warfare.
</p>
```

**AFTER:**
```tsx
<h2 className="text-3xl mb-4 text-white">transmission received</h2>
<p className="text-steel leading-relaxed mb-4">
  dr. belial crow brings you weekly episodes exploring psychological warfare, 
  media manipulation, and the theater of modern politics.
</p>
```

**What you changed:** Both text blocks. Left all the `className` stuff alone.

---

## Structure Guide: Which File Controls What

| Page | File | What It Controls |
|------|------|------------------|
| Homepage | `app/page.tsx` | Main landing page, promo video, welcome section |
| About | `app/about/page.tsx` | Show description, mission, host bio |
| Episodes | `app/episodes/page.tsx` | Episode listing page (list comes from markdown files) |
| Blog | `app/blog/page.tsx` | Blog listing page (posts come from markdown files) |
| Links | `app/links/page.tsx` | Social/external links |
| Media | `app/media/page.tsx` | Media archive/press |

**Note:** Episode and blog *content* is in markdown files (`content/episodes/`, `content/posts/`), but the *listing page text* is in the `.tsx` files.

---

## Common Edits Cheat Sheet

### Change a Heading
```tsx
// FIND: <h1>old heading</h1>
// CHANGE TO: <h1>new heading</h1>
```

### Change a Paragraph
```tsx
// FIND: <p className="...">old text</p>
// CHANGE TO: <p className="...">new text</p>
```

### Change Image Alt Text (for accessibility)
```tsx
// FIND: <img src="..." alt="old description" />
// CHANGE TO: <img src="..." alt="new description" />
```

### Change a Link
```tsx
// FIND: <a href="/old-link">text</a>
// CHANGE TO: <a href="/new-link">text</a>
```

---

## What If I Break Something?

**Don't panic.** GitHub keeps history.

**To undo:**
1. Go to the file on GitHub
2. Click "History" (top right)
3. Find your commit
4. Click `<>` to view that version
5. Copy the old text
6. Edit the file again and paste it back

**Or ask me:** "I broke the homepage, please fix it"

---

## Tips

1. **Make small changes** - Edit one thing, commit, check the site. Don't change 10 things at once.

2. **Commit messages matter** - Write "Update about page text" not "asdfasdf"

3. **Wait for deploy** - After committing, Vercel takes 1-2 minutes to rebuild the site

4. **Test on the live site** - Visit toolate.tv after committing to verify

5. **Use example.md files** - For episodes/blog posts, copy the example files instead of editing code

---

## Advanced: Clone to Your Laptop

**If you want to edit locally in VS Code:**

```bash
# One-time setup
cd ~/Documents  # or wherever
git clone https://github.com/frater-g/toolate-tv.git
cd toolate-tv

# Edit files in VS Code
# When done:
git add .
git commit -m "Describe your changes"
git push
```

**Benefits:**
- Edit multiple files at once
- See your changes before pushing
- Use a real text editor

**Drawback:**
- Requires Git knowledge
- More steps than GitHub web interface

---

## Quick Reference: Where Is Everything?

```
toolate-tv/
├── app/                    # All page files
│   ├── page.tsx           # Homepage
│   ├── about/page.tsx     # About page
│   ├── blog/page.tsx      # Blog listing
│   ├── episodes/page.tsx  # Episodes listing
│   ├── links/page.tsx     # Links page
│   └── media/page.tsx     # Media page
│
├── content/               # Markdown content
│   ├── episodes/          # Episode markdown files
│   └── posts/             # Blog post markdown files
│
├── public/                # Images, videos, static files
│   ├── logo-header.png
│   └── promo.mp4
│
└── CONTENT.md            # Guide for adding episodes/posts
```

---

## Need Help?

**Ask me:**
- "Show me where to change [specific text]"
- "I want to update the [page name] page"
- "I broke something, please fix it"
- "How do I add a new section to [page]?"

I'll give you the exact code to change.
