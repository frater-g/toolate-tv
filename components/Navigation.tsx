'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
  { href: '/episodes', label: 'episodes' },
  { href: '/blog', label: 'blog' },
  { href: '/newsletter', label: 'newsletter' },
  { href: '/media', label: 'media' },
  { href: '/links', label: 'links' },
]

export default function Navigation() {
  const pathname = usePathname()
  
  return (
    <nav className="border-b border-chrome sticky top-0 z-50 backdrop-blur-sm bg-metal-dark/90">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="text-2xl font-bold text-silver hover:text-white transition-colors text-shadow-glow"
          >
            the too late show
          </Link>
          
          <ul className="flex space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`hover:text-white transition-colors ${
                      isActive ? 'text-white border-b-2 border-silver' : 'text-chrome-light'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}
