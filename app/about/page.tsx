export default function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-5xl font-bold text-white mb-8 text-shadow-glow">about the show</h1>
      
      <div className="border border-chrome p-8 bg-metal-gray/50 space-y-6">
        <section>
          <h2 className="text-2xl text-silver mb-4">the premise</h2>
          <p className="text-steel leading-relaxed">
            dr. belial crow is a cia plant, vat-grown to host a psyop talk show. 
            the tagline says it all: "no war but the psywar."
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-silver mb-4">the mission</h2>
          <p className="text-steel leading-relaxed">
            the too late show satirizes counterculture compromise and information warfare. 
            we examine dark technology, surveillance, conspiracy culture, governmental 
            dysfunction, and the ways systems manipulate perception and reality.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-silver mb-4">the host</h2>
          <p className="text-steel leading-relaxed">
            dr. belial crow. intelligence asset. talk show host. cultural 
            infiltrator. born from the program, serving the program, 
            revealing the program.
          </p>
        </section>
      </div>
      
      <div className="text-center text-chrome-light text-sm border-t border-chrome pt-8">
        <p>this is not entertainment. this is reconnaissance.</p>
      </div>
    </div>
  )
}
