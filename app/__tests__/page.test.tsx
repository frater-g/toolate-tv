import { render, screen } from '@testing-library/react'
import Home from '../page'

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />
  },
}))

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />)
    const heading = screen.getByText(/no war but the psywar/i)
    expect(heading).toBeInTheDocument()
  })

  it('renders the promo video', () => {
    render(<Home />)
    const video = document.querySelector('video')
    expect(video).toBeInTheDocument()
  })

  it('renders the upcoming show section', () => {
    render(<Home />)
    expect(screen.getByText(/next transmission/i)).toBeInTheDocument()
    expect(screen.getByText(/march 14, 2026/i)).toBeInTheDocument()
  })

  it('renders the RSVP button with correct link', () => {
    render(<Home />)
    const rsvpButton = screen.getByRole('link', { name: /rsvp/i })
    expect(rsvpButton).toBeInTheDocument()
    expect(rsvpButton).toHaveAttribute('href', 'https://www.facebook.com/events/1395870818402529/')
  })

  it('renders the about section', () => {
    render(<Home />)
    expect(screen.getByText(/it's already too late/i)).toBeInTheDocument()
    expect(screen.getByText(/smokeable SIGINT/i)).toBeInTheDocument()
  })

  it('renders the newsletter signup', () => {
    render(<Home />)
    expect(screen.getByText(/join the psywar briefing/i)).toBeInTheDocument()
    const emailInput = screen.getByPlaceholderText(/your.email@example.com/i)
    expect(emailInput).toBeInTheDocument()
  })

  it('renders latest transmissions section', () => {
    render(<Home />)
    expect(screen.getByText(/latest transmissions/i)).toBeInTheDocument()
  })
})
