import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content')

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
