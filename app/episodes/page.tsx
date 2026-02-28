import { getEpisodes, Episode } from '@/lib/content'

export default function EpisodesPage() {
  const episodes = getEpisodes()

  return (
    <div className="space-y-8">
      <h1 className="text-4xl text-white border-b border-chrome pb-4">episodes</h1>
      
      {episodes.length === 0 ? (
        <div className="border border-chrome p-8 bg-metal-gray/30">
          <p className="text-chrome-light mb-4">no episodes yet.</p>
          <p className="text-steel text-sm">
            add markdown files to <span className="text-chrome">content/episodes/</span>
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {episodes.map((episode: Episode) => (
            <a
              key={episode.slug}
              href={`/episodes/${episode.slug}`}
              className="border border-chrome p-6 bg-metal-gray/30 hover:bg-metal-gray/50 transition-colors"
            >
              <h2 className="text-2xl text-chrome mb-2">{episode.title}</h2>
              {episode.date && (
                <p className="text-steel text-sm mb-2">
                  {new Date(episode.date).toLocaleDateString()}
                </p>
              )}
              {episode.description && (
                <p className="text-chrome-light text-sm">{episode.description}</p>
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
