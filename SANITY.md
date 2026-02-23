# Sanity CMS Setup

Your site is connected to Sanity project `te0hkjdm` (dataset: `production`).

## Set Up Schemas

1. Go to https://sanity.io/manage
2. Select "The Too Late Show" project
3. Deploy Sanity Studio (creates a web editor at https://te0hkjdm.sanity.studio)
4. Define your schemas in the Studio

## Schema Examples

Create these document types in Sanity Studio:

**Episode**: title, slug, date, description, videoUrl, thumbnail, content, featured (boolean)
**Post**: title, slug, date, excerpt, coverImage, content, featured (boolean)
**Page**: title, slug, content

## Add Content

Once schemas are defined, create content in Studio.
Your site will automatically fetch and display it at `/episodes`.

Sanity docs: https://www.sanity.io/docs
