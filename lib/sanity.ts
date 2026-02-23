import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
})

export async function getEpisodes() {
  return client.fetch(`
    *[_type == "episode"] | order(date desc) {
      _id, title, slug, date, description, videoUrl,
      "thumbnailUrl": thumbnail.asset->url, featured
    }
  `)
}

export async function getPosts() {
  return client.fetch(`
    *[_type == "post"] | order(date desc) {
      _id, title, slug, date, excerpt,
      "coverImageUrl": coverImage.asset->url, featured
    }
  `)
}
