import { render, screen, fireEvent } from '@testing-library/react'
import Media from '../page'

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />
  },
}))

describe('Media Page', () => {
  it('renders the media heading', () => {
    render(<Media />)
    expect(screen.getByText('media')).toBeInTheDocument()
  })

  it('renders gallery images', () => {
    render(<Media />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThan(0)
  })

  it('opens lightbox when image is clicked', () => {
    render(<Media />)
    const images = screen.getAllByRole('img')
    
    // Click first gallery image
    fireEvent.click(images[0])
    
    // Lightbox should be visible (check for close button)
    const closeButton = screen.getByText('×')
    expect(closeButton).toBeInTheDocument()
  })

  it('closes lightbox when clicked', () => {
    render(<Media />)
    const images = screen.getAllByRole('img')
    
    // Open lightbox
    fireEvent.click(images[0])
    
    // Find and click the lightbox overlay
    const lightbox = screen.getByText('×').closest('div')
    if (lightbox?.parentElement) {
      fireEvent.click(lightbox.parentElement)
    }
    
    // Close button should no longer be visible
    expect(screen.queryByText('×')).not.toBeInTheDocument()
  })
})
