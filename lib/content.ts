import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content')

export interface Episode {
  slug: string
  title: string
  date: string
  description: string
  videoUrl: string
  featured: boolean
  content: string
}

export interface Post {
  slug: string
  title: string
  date: string
  description: string
  author: string
  tags: string[]
  featured: boolean
  content: string
}

export function getEpisodes() {
  const episodesDirectory = path.join(contentDirectory, 'episodes')
  
  if (!fs.existsSync(episodesDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(episodesDirectory)
  const episodes = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(episodesDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        videoUrl: data.videoUrl,
        featured: data.featured || false,
        content
      }
    })
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()))

  return episodes
}

export function getEpisode(slug: string) {
  const fullPath = path.join(contentDirectory, 'episodes', `${slug}.md`)
  
  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description,
    videoUrl: data.videoUrl,
    content
  }
}

export function getPosts() {
  const postsDirectory = path.join(contentDirectory, 'posts')
  
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        author: data.author,
        tags: data.tags || [],
        featured: data.featured || false,
        content
      }
    })
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()))

  return posts
}

export function getPost(slug: string) {
  const fullPath = path.join(contentDirectory, 'posts', `${slug}.md`)
  
  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description,
    author: data.author,
    tags: data.tags || [],
    content
  }
}

export function getLatestContent(limit = 3) {
  const posts = getPosts().map(post => ({
    ...post,
    type: 'blog' as const,
    url: `/blog/${post.slug}`
  }))

  const episodes = getEpisodes().map(episode => ({
    ...episode,
    type: 'episode' as const,
    url: `/episodes/${episode.slug}`
  }))

  // Combine all content
  const allContent = [...posts, ...episodes]

  // Sort by date (newest first) and take top N
  return allContent
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)
}
