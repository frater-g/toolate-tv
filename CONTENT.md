# How to Add Content (Simple Version)

**Forget Sanity. Just edit markdown files.**

## Add a New Episode

1. Go to `content/episodes/` folder
2. Create a new file: `my-episode-name.md`
3. Copy this template:

```markdown
---
title: My Episode Title
date: 2024-02-23
description: Short description of the episode
videoUrl: https://example.com/video.mp4
featured: false
---

# Episode Content

Write your episode notes here.

## Show Notes

- Bullet points
- Multiple lines
- **Bold** and *italic* work

[Links work too](https://example.com)
```

4. Save the file
5. Commit and push to GitHub
6. Episode appears at toolate.tv/episodes

## File Naming

- Use lowercase
- Use hyphens instead of spaces
- Examples: `episode-1.md`, `special-guest.md`, `pilot-episode.md`
- The filename becomes the URL: `episode-1.md` → `/episodes/episode-1`

## Supported Fields (in the `---` section)

- **title**: Episode name (required)
- **date**: When it aired (format: YYYY-MM-DD) (required)
- **description**: Short summary
- **videoUrl**: Link to video file or YouTube embed
- **featured**: true/false (shows on homepage)

## Everything Below `---` is the Body

- Use markdown formatting
- Add headers with `#`, `##`, `###`
- Bold: `**text**`
- Italic: `*text*`
- Links: `[text](url)`
- Lists: `- item`

## Example Episode

See `content/episodes/example.md` for a working example.

## That's It

No database. No CMS. Just text files.

Edit in VS Code, GitHub web editor, or any text editor.

Commit → Push → Live.
