import { getEpisode } from '@/lib/content'
import ReactMarkdown from 'react-markdown'

export default async function EpisodePage({ params }: { params: { slug: string } }) {
  const episode = await params.slug ? getEpisode(params.slug) : null

  if (!episode) {
    return (
      <div className="border border-chrome p-8 bg-metal-gray/30">
        <h1 className="text-3xl text-white mb-4">episode not found</h1>
        <a href="/episodes" className="text-chrome hover:text-chrome-light">← back to episodes</a>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <a href="/episodes" className="text-chrome hover:text-chrome-light text-sm">← back to episodes</a>
      
      <div className="border border-chrome p-8 bg-metal-gray/30">
        <h1 className="text-4xl text-white mb-4">{episode.title}</h1>
        
        {episode.date && (
          <p className="text-steel mb-6">
            {new Date(episode.date).toLocaleDateString()}
          </p>
        )}

        {episode.videoUrl && (
          <div className="border-2 border-chrome bg-metal-gray/50 p-2 mb-6">
            <video 
              controls 
              className="w-full"
            >
              <source src={episode.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {episode.description && (
          <p className="text-chrome-light mb-6">{episode.description}</p>
        )}

        {episode.content && (
          <div className="prose prose-invert prose-chrome max-w-none text-chrome-light">
            <ReactMarkdown>{episode.content}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  )
}
