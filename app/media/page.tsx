'use client'

import { useState } from 'react'
import Image from 'next/image'

// Gallery images from public/media/gallery/
const galleryImages = [
  'img1.jpg',
  'img2.jpg',
  'img3.jpg',
  'img4.jpg',
  'img5.jpg',
  'img6.jpg',
  'img7.jpg',
  'img8.jpg',
  'img9.jpg',
  'img10.jpg',
  'img11.jpg',
  'img12.jpg',
  'img13.jpg',
  'img14.jpg',
  'img15.jpg',
  'img16.jpg',
  'img17.jpg',
  'img18.jpg',
  'img19.jpg',
  'img20.jpg',
  'img21.jpg',
  'img22.jpg',
  'img23.jpg',
  'img24.jpg',
]

export default function Media() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState('')

  const openLightbox = (imagePath: string) => {
    setCurrentImage(imagePath)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setCurrentImage('')
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-5xl font-bold text-white mb-8 text-shadow-glow">media</h1>
      
      {galleryImages.length === 0 ? (
        <div className="border border-chrome p-12 bg-metal-gray/50 text-center">
          <p className="text-steel text-xl mb-4">gallery coming soon</p>
          <p className="text-chrome-light">
            images, clips, promotional materials, and visual artifacts
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(`/media/gallery/${image}`)}
              className="border-2 border-chrome bg-metal-gray/30 p-2 cursor-pointer hover:border-chrome-light hover:bg-metal-gray/50 transition-all"
            >
              <div className="relative aspect-square">
                <Image
                  src={`/media/gallery/${image}`}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
            <div className="absolute top-4 right-4 text-chrome text-4xl font-bold hover:text-white transition-colors">
              ×
            </div>
            <Image
              src={currentImage}
              alt="Gallery image"
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </div>
  )
}
