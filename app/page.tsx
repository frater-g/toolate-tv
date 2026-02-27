export default function Home() {
  return (
    <div className="space-y-16">
      {/* Logo Header */}
      <section className="w-full -mt-8">
        <img 
          src="/logo-header.png" 
          alt="the too late show" 
          className="w-full h-auto"
        />
        <p className="text-2xl text-steel mt-8 text-center tracking-wider">
          no war but the psywar
        </p>
      </section>

      {/* Promo Video */}
      <section className="max-w-4xl mx-auto">
        <div className="border-2 border-chrome bg-metal-gray/50 p-2">
          <video 
            controls 
            autoPlay 
            muted 
            loop
            className="w-full cursor-pointer"
            poster="/promo-poster.jpg"
          >
            <source src="/promo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Upcoming Show */}
      <section className="border-2 border-chrome p-6 bg-metal-gray/50">
        <h2 className="text-3xl mb-6 text-chrome text-center">next transmission</h2>
        <div className="max-w-2xl mx-auto">
          <img 
            src="/saint-patty-poster.jpg" 
            alt="Too Late Show - Saint Patrick's Day Special - March 14, 2026" 
            className="w-full h-auto border border-chrome"
          />
          <p className="text-chrome-light text-center mt-4 text-lg">
            march 14, 2026
          </p>
        </div>
      </section>

      {/* About Preview */}
      <section className="border border-chrome p-8 bg-metal-gray/50">
        <h2 className="text-3xl mb-4 text-white">it's already too late</h2>
        <p className="text-steel leading-relaxed mb-4">
          A live semi-scripted improv show with interviews, social analysis, and a grim comedic outlook on living in the heart of babylon 
        </p>
        <p className="text-chrome-light text-sm">
          your mind is the battlefield. our show is smokeable SIGINT
        </p>
      </section>

      {/* Newsletter Signup */}
      <section className="border-2 border-chrome p-8 bg-metal-gray/50">
        <h2 className="text-3xl mb-4 text-chrome">join the psywar briefing</h2>
        <p className="text-steel mb-6">
          get episodes, analysis, and transmissions delivered directly to your inbox.
        </p>
        <form 
          action="https://buttondown.com/api/emails/embed-subscribe/DrCrow" 
          method="post" 
          className="embeddable-buttondown-form space-y-4"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              name="email" 
              id="bd-email"
              placeholder="your.email@example.com"
              required
              className="flex-1 bg-black border border-chrome px-4 py-3 text-chrome placeholder-steel focus:outline-none focus:border-chrome-light font-mono"
            />
            <button 
              type="submit"
              className="bg-chrome text-black px-8 py-3 font-bold hover:bg-chrome-light transition-colors border border-chrome"
            >
              SUBSCRIBE
            </button>
          </div>
          <p className="text-steel text-xs">
            powered by{' '}
            <a 
              href="https://buttondown.com/refer/DrCrow" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-chrome hover:text-chrome-light"
            >
              buttondown
            </a>
          </p>
        </form>
      </section>

      {/* Latest Content Placeholder */}
      <section>
        <h2 className="text-3xl mb-8 text-white border-b border-chrome pb-2">
          latest transmissions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border border-chrome p-6 bg-metal-gray/30 hover:bg-metal-gray/50 transition-colors">
              <div className="text-chrome-light text-sm mb-2">coming soon</div>
              <h3 className="text-xl text-silver mb-2">content placeholder {i}</h3>
              <p className="text-chrome-light text-sm">
                episodes, blog posts, and media will appear here
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
