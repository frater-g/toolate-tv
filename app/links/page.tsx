export default function Links() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold text-white mb-8 text-shadow-glow">links</h1>
      
      <div className="border border-chrome p-8 bg-metal-gray/50">
        <h2 className="text-2xl text-silver mb-6">find us everywhere</h2>
        
        <div className="space-y-4">
          <div className="border-l-2 border-chrome pl-4">
            <p className="text-chrome-light text-sm mb-1">social media links</p>
            <a
              href="https://bsky.app/profile/frater-gorgias.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
              className="text-silver hover:text-white transition-colors"
            >
              bluesky → @frater-gorgias.bsky.social
            </a>
          </div>
          
          <div className="border-l-2 border-chrome pl-4">
            <p className="text-chrome-light text-sm mb-1">streaming platforms</p>
            <p className="text-steel">coming soon</p>
          </div>
          
          <div className="border-l-2 border-chrome pl-4">
            <p className="text-chrome-light text-sm mb-1">contact</p>
            <p className="text-steel">coming soon</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center text-chrome-light text-sm">
        <p>you can run but the signal finds you</p>
      </div>
    </div>
  )
}
