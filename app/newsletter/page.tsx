export default function Newsletter() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <h1 className="text-5xl font-bold text-white mb-8 text-shadow-glow">
        the psywar briefing
      </h1>
      
      <div className="border-2 border-chrome p-8 bg-metal-gray/50 space-y-6">
        <section>
          <h2 className="text-2xl text-chrome mb-4">stay operational</h2>
          <p className="text-steel leading-relaxed mb-4">
            subscribe to receive new episodes, exclusive analysis, and intelligence 
            briefings on information warfare, psychological operations, and the theater 
            of modern media.
          </p>
          <p className="text-chrome-light text-sm">
            no spam. no bullshit. just signal.
          </p>
        </section>

        <form 
          action="https://buttondown.com/api/emails/embed-subscribe/DrCrow" 
          method="post" 
          className="embeddable-buttondown-form space-y-4 pt-6"
        >
          <div className="space-y-4">
            <div>
              <label 
                htmlFor="bd-email" 
                className="block text-chrome mb-2 font-mono text-sm"
              >
                EMAIL ADDRESS
              </label>
              <input 
                type="email" 
                name="email" 
                id="bd-email"
                placeholder="your.email@example.com"
                required
                className="w-full bg-black border border-chrome px-4 py-3 text-chrome placeholder-steel focus:outline-none focus:border-chrome-light font-mono"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-chrome text-black px-8 py-3 font-bold hover:bg-chrome-light transition-colors border border-chrome"
            >
              SUBSCRIBE TO THE BRIEFING
            </button>
          </div>
          <p className="text-steel text-xs text-center">
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
      </div>

      <div className="text-center text-chrome-light text-sm border-t border-chrome pt-8">
        <p>this is not entertainment. this is reconnaissance.</p>
      </div>
    </div>
  )
}
