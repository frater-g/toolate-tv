import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'too late show',
  description: 'no war but the psywar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen metal-gradient">
        <Navigation />
        <main className="container mx-auto px-4 py-8 max-w-6xl">
          {children}
        </main>
        <footer className="border-t border-chrome mt-16 py-8">
          <div className="container mx-auto px-4 text-center text-chrome-light text-sm">
            <p>© {new Date().getFullYear()} too late show. no war but the psywar.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
