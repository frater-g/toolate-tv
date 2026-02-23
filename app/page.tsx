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

      {/* About Preview */}
      <section className="border border-chrome p-8 bg-metal-gray/50">
        <h2 className="text-3xl mb-4 text-white">welcome to the psyop</h2>
        <p className="text-steel leading-relaxed mb-4">
          hosted by dr. belial crow, a cia plant vat-grown to host a talk show about 
          counterculture compromise and information warfare.
        </p>
        <p className="text-chrome-light text-sm">
          this is not entertainment. this is reconnaissance.
        </p>
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
