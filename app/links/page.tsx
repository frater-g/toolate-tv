export default function Links() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold text-white mb-8 text-shadow-glow">links</h1>
      
      <div className="border border-chrome p-8 bg-metal-gray/50">
        <h2 className="text-2xl text-silver mb-6">find us everywhere</h2>
        
        <div className="space-y-4">
          <div className="border-l-2 border-chrome pl-4">
            <p className="text-chrome-light text-sm mb-1">social media links</p>
            <div className="space-y-2">
              <a
                href="https://bsky.app/profile/frater-gorgias.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-silver hover:text-white transition-colors"
              >
                bluesky → @frater-gorgias.bsky.social
              </a>
              <a
                href="https://www.facebook.com/toolateshowofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-silver hover:text-white transition-colors"
              >
                facebook → @toolateshowofficial
              </a>
              <a
                href="https://www.instagram.com/toolateshowofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-silver hover:text-white transition-colors"
              >
                instagram → @toolateshowofficial
              </a>
            </div>
          </div>

          <div className="border-l-2 border-chrome pl-4">
            <p className="text-chrome-light text-sm mb-1">youtube</p>
            <a
              href="https://www.youtube.com/@thetoolateshow8196"
              target="_blank"
              rel="noopener noreferrer"
              className="text-silver hover:text-white transition-colors"
            >
              youtube → @thetoolateshow8196
            </a>
          </div>
          
          <div className="border-l-2 border-chrome pl-4">
            <p className="text-chrome-light text-sm mb-1">streaming platforms</p>
            <p className="text-steel">coming soon</p>
          </div>
          
          <div className="border-l-2 border-chrome pl-4">
            <p className="text-chrome-light text-sm mb-1">contact</p>
            <a
              href="mailto:thirdfloorthirdfloorthirdfloor@gmail.com"
              className="text-silver hover:text-white transition-colors"
            >
              email → thirdfloorthirdfloorthirdfloor@gmail.com
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center text-chrome-light text-sm">
        <p>you can run but the signal finds you</p>
      </div>
    </div>
  )
}
