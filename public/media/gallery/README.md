# Media Gallery

## Adding Images

1. Upload images to this directory (`public/media/gallery/`)
2. Edit `/app/media/page.tsx`
3. Add the filename to the `galleryImages` array:

```typescript
const galleryImages = [
  'show-night-1.jpg',
  'show-night-2.jpg',
  'promo-poster.jpg',
  // add more here
]
```

## Recommended Image Specs

- **Format:** JPG or PNG
- **Size:** 1200-2000px width recommended
- **Optimize:** Compress before upload (aim for <1MB per image)

Images will display in a 3-column grid (responsive) with chrome borders and click-to-enlarge lightbox.
