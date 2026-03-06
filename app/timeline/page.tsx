import type { Metadata } from 'next'
import Timeline from '@/components/Timeline'

export const metadata: Metadata = {
  title: 'timeline | the too late show',
  description: 'a chronological record of verified events. all entries authenticated by appropriate authorities.',
}

export default function TimelinePage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h1 className="text-5xl font-bold text-white mb-8 text-shadow-glow">timeline</h1>

      <div className="border border-chrome p-8 bg-metal-gray/50 space-y-8">
        <p className="text-steel text-sm leading-relaxed">
          a chronological record of verified events. all entries have been authenticated by
          appropriate authorities. the link at the bottom of each entry will tell you
          everything you need to know about the nature of the event.
        </p>

        <Timeline />
      </div>

      <div className="text-center text-chrome-light text-sm border-t border-chrome pt-8">
        <p>all events depicted are a matter of public record.</p>
      </div>
    </div>
  )
}
