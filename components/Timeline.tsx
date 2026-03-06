'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import timelineData from '@/data/timeline.json'

interface TimelineEntry {
  id: string
  year: number
  yPos: number
  title: string
  description: string
  image: string | null
  link: { label: string; url: string }
}

// String connections between nodes
const CONNECTIONS: [string, string][] = [
  // L0 chains
  ['operation-paperclip', 'project-artichoke'],
  ['fluoridation', 'operation-paperclip'],
  ['tavistock', 'operation-mockingbird'],
  ['tavistock', 'mkultra'],
  ['project-artichoke', 'mkultra'],
  ['nsa-founded', 'operation-chaos'],
  ['nsa-founded', 'prism'],
  ['mkultra', 'operation-midnight-climax'],
  ['mkultra', 'mksearch'],
  ['mkultra', 'church-committee'],
  ['operation-mockingbird', 'total-information-awareness'],
  ['cointelpro', 'operation-chaos'],
  ['cointelpro', 'church-committee'],
  ['operation-chaos', 'church-committee'],
  ['operation-gladio', 'operation-northwoods'],
  ['operation-northwoods', 'gulf-of-tonkin'],
  ['mksearch', 'total-information-awareness'],
  ['iran-contra', 'total-information-awareness'],
  ['total-information-awareness', 'prism'],
  // L1 bridge
  ['qualia-research-institute', 'vexillian-awakening'],
  ['haarp', 'miami-psychedelic-attack'],
  // L2 chains
  ['ial-founded', 'mega-harvard-founded'],
  ['mega-harvard-founded', 'too-late-show-debut'],
  ['mega-harvard-founded', 'school-of-reality-studies'],
  ['too-late-show-debut', 'vexillian-awakening'],
  ['vexillian-awakening', 'tln-launch'],
  ['tln-launch', 'belial-crow-arrives'],
  ['tln-launch', 'beef-supreme-revealed'],
  ['mega-harvard-llc', 'noospheric-munitions-act'],
  ['miami-psychedelic-attack', 'acid-cops'],
  ['acid-cops', 'president-jaguar-elected'],
  ['beef-supreme-revealed', 'crow-disappears'],
  ['president-jaguar-elected', 'noospheric-munitions-act'],
  ['noospheric-munitions-act', 'crow-disappears'],
  // L0 → L2 bridges (the trap)
  ['prism', 'president-jaguar-elected'],
  ['qualia-research-institute', 'miami-psychedelic-attack'],
  ['tln-launch', 'noospheric-munitions-act'],
  ['mega-harvard-llc', 'beef-supreme-revealed'],
]

const CANVAS_WIDTH = 3200
const CANVAS_HEIGHT = 640
const X_PAD = 160
const Y_MIN = 70
const Y_MAX = 560
const NODE_W = 148
const NODE_H = 54

const MIN_YEAR = 1945
const MAX_YEAR = 2042

function getX(year: number): number {
  return X_PAD + ((year - MIN_YEAR) / (MAX_YEAR - MIN_YEAR)) * (CANVAS_WIDTH - X_PAD * 2)
}

function getY(yPos: number): number {
  return Y_MIN + yPos * (Y_MAX - Y_MIN)
}

function isExternal(url: string): boolean {
  return url.startsWith('http')
}

const entries = timelineData as TimelineEntry[]

const posMap: Record<string, { cx: number; cy: number }> = {}
entries.forEach((e) => {
  posMap[e.id] = {
    cx: getX(e.year) + NODE_W / 2,
    cy: getY(e.yPos) + NODE_H / 2,
  }
})

export default function Timeline() {
  const [selected, setSelected] = useState<TimelineEntry | null>(null)
  const [dragging, setDragging] = useState(false)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const dragOrigin = useRef({ x: 0, y: 0 })
  const didDrag = useRef(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('button, a')) return
    setDragging(true)
    didDrag.current = false
    dragOrigin.current = { x: e.clientX - offset.x, y: e.clientY - offset.y }
  }, [offset])

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragging) return
    const dx = Math.abs(e.clientX - (dragOrigin.current.x + offset.x))
    const dy = Math.abs(e.clientY - (dragOrigin.current.y + offset.y))
    if (dx > 4 || dy > 4) didDrag.current = true
    setOffset({
      x: e.clientX - dragOrigin.current.x,
      y: e.clientY - dragOrigin.current.y,
    })
  }, [dragging, offset])

  const onMouseUp = useCallback(() => {
    setDragging(false)
    // Reset didDrag after a short delay so the click handler fires first
    setTimeout(() => { didDrag.current = false }, 50)
  }, [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <>
      {/* ── Desktop: corkboard canvas ── */}
      <div className="hidden md:block">
        {/* Outer viewport — clips the canvas */}
        <div
          ref={containerRef}
          className="relative overflow-hidden"
          style={{
            width: '100%',
            height: '640px',
            cursor: dragging ? 'grabbing' : 'grab',
            // Dark aged-paper background
            backgroundColor: '#0c0b08',
            backgroundImage: `
              url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noise)' opacity='0.07'/%3E%3C/svg%3E")
            `,
            userSelect: 'none',
          }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          {/* Inner canvas, translated by drag offset */}
          <div
            style={{
              position: 'absolute',
              width: `${CANVAS_WIDTH}px`,
              height: `${CANVAS_HEIGHT}px`,
              transform: `translate(${offset.x}px, ${offset.y}px)`,
              willChange: 'transform',
            }}
          >
            {/* SVG layer — strings */}
            <svg
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
            >
              <defs>
                <filter id="string-blur">
                  <feGaussianBlur stdDeviation="0.4" />
                </filter>
              </defs>
              {CONNECTIONS.map(([fromId, toId]) => {
                const from = posMap[fromId]
                const to = posMap[toId]
                if (!from || !to) return null
                // slight sag curve
                const mx = (from.cx + to.cx) / 2
                const my = (from.cy + to.cy) / 2 + 18
                return (
                  <g key={`${fromId}-${toId}`}>
                    {/* shadow */}
                    <path
                      d={`M ${from.cx} ${from.cy} Q ${mx} ${my} ${to.cx} ${to.cy}`}
                      fill="none"
                      stroke="rgba(0,0,0,0.5)"
                      strokeWidth="2.5"
                      filter="url(#string-blur)"
                    />
                    {/* string */}
                    <path
                      d={`M ${from.cx} ${from.cy} Q ${mx} ${my} ${to.cx} ${to.cy}`}
                      fill="none"
                      stroke="#6b1a1a"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      opacity="0.75"
                    />
                  </g>
                )
              })}
            </svg>

            {/* Nodes */}
            {entries.map((entry) => {
              const x = getX(entry.year)
              const y = getY(entry.yPos)
              const isActive = selected?.id === entry.id

              return (
                <div
                  key={entry.id}
                  style={{
                    position: 'absolute',
                    left: `${x}px`,
                    top: `${y}px`,
                    width: `${NODE_W}px`,
                  }}
                >
                  {/* Pushpin */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '-10px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: isActive ? '#c0392b' : '#7a2020',
                      boxShadow: isActive
                        ? '0 0 0 2px rgba(192,57,43,0.3), 0 2px 4px rgba(0,0,0,0.6)'
                        : '0 2px 4px rgba(0,0,0,0.5)',
                      zIndex: 10,
                      transition: 'background-color 0.2s',
                    }}
                  />

                  {/* Card */}
                  <motion.button
                    whileHover={{ scale: 1.04, zIndex: 20 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    onClick={() => {
                      if (!didDrag.current) {
                        setSelected((prev) => prev?.id === entry.id ? null : entry)
                      }
                    }}
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '8px 10px',
                      textAlign: 'left',
                      backgroundColor: isActive ? '#1c1a12' : '#141210',
                      border: `1px solid ${isActive ? '#3a3020' : '#222018'}`,
                      boxShadow: isActive
                        ? '0 4px 20px rgba(0,0,0,0.7), 0 0 0 1px rgba(180,150,80,0.12), inset 0 1px 0 rgba(255,255,255,0.03)'
                        : '0 3px 10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.02)',
                      cursor: 'pointer',
                      position: 'relative',
                      transition: 'background-color 0.2s, border-color 0.2s, box-shadow 0.2s',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '9px',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: isActive ? '#8a7a50' : '#4a4030',
                        marginBottom: '3px',
                      }}
                    >
                      {entry.year}
                    </div>
                    <div
                      style={{
                        fontSize: '11px',
                        lineHeight: 1.3,
                        color: isActive ? '#d8c890' : '#7a6e50',
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {entry.title}
                    </div>
                  </motion.button>
                </div>
              )
            })}
          </div>

          {/* Edge fade vignette */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              background: 'radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.5) 100%)',
            }}
          />
        </div>

        <p
          className="text-center mt-3 text-xs tracking-widest"
          style={{ color: '#2a2418', letterSpacing: '0.2em' }}
        >
          drag to explore
        </p>
      </div>

      {/* ── Mobile: vertical list ── */}
      <div className="md:hidden relative pl-8 mt-4">
        <div
          className="absolute left-3 top-2 bottom-2"
          style={{
            width: '1px',
            background: 'linear-gradient(180deg, transparent, #3a2a1a 10%, #4a3a20 50%, #3a2a1a 90%, transparent)',
          }}
        />
        {entries.map((entry) => {
          const isActive = selected?.id === entry.id
          return (
            <div key={entry.id} className="relative mb-8 last:mb-0">
              <button
                onClick={() => setSelected((prev) => prev?.id === entry.id ? null : entry)}
                aria-label={`${entry.year}: ${entry.title}`}
                className="absolute -left-6 top-1 rounded-full cursor-pointer transition-all duration-200"
                style={{
                  width: '10px',
                  height: '10px',
                  backgroundColor: isActive ? '#c0392b' : '#4a3020',
                  border: `1px solid ${isActive ? '#c0392b' : '#3a2018'}`,
                  boxShadow: isActive ? '0 0 10px rgba(192,57,43,0.4)' : 'none',
                }}
              />
              <button onClick={() => setSelected((prev) => prev?.id === entry.id ? null : entry)} className="text-left w-full">
                <span className="text-xs tracking-widest uppercase block mb-1" style={{ color: isActive ? '#8a7a50' : '#3a3020' }}>
                  {entry.year}
                </span>
                <span className="text-sm" style={{ color: isActive ? '#d8c890' : '#6a5a38' }}>
                  {entry.title}
                </span>
              </button>
            </div>
          )
        })}
      </div>

      {/* ── Detail card modal ── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <div
              className="absolute inset-0"
              style={{ backgroundColor: 'rgba(0,0,0,0.82)', backdropFilter: 'blur(2px)' }}
            />

            <motion.div
              key="card"
              initial={{ opacity: 0, y: 14, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 340, damping: 26 }}
              className="relative z-10 max-w-lg w-full p-7 space-y-5"
              style={{
                backgroundColor: '#0f0d08',
                border: '1px solid #2a2418',
                boxShadow: '0 0 0 1px #1a1510, 0 10px 50px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,240,200,0.03)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top rule */}
              <div style={{
                position: 'absolute', top: 0, left: '10%', width: '80%', height: '1px',
                background: 'linear-gradient(90deg, transparent, #3a2e18 50%, transparent)',
              }} />

              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-5 text-xs tracking-widest transition-colors"
                style={{ color: '#3a3020' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#8a7a50')}
                onMouseLeave={e => (e.currentTarget.style.color = '#3a3020')}
                aria-label="close"
              >
                [esc]
              </button>

              <div className="text-xs tracking-widest uppercase" style={{ color: '#5a4a28', letterSpacing: '0.2em' }}>
                {selected.year}
              </div>

              <h2 className="text-xl leading-snug pr-10" style={{ color: '#d8c890' }}>
                {selected.title}
              </h2>

              <div style={{ height: '1px', background: '#1e1a10' }} />

              <p className="text-sm leading-relaxed" style={{ color: '#7a6a48' }}>
                {selected.description}
              </p>

              {selected.image && (
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full"
                  style={{ border: '1px solid #2a2010', filter: 'sepia(20%) grayscale(30%)' }}
                />
              )}

              {isExternal(selected.link.url) ? (
                <a
                  href={selected.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm tracking-wider"
                  style={{ color: '#5a4a28', border: '1px solid #2a2010', padding: '8px 16px', transition: 'color 0.2s, border-color 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#d8c890'; e.currentTarget.style.borderColor = '#5a4a28' }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#5a4a28'; e.currentTarget.style.borderColor = '#2a2010' }}
                >
                  {selected.link.label} →
                </a>
              ) : (
                <Link
                  href={selected.link.url}
                  className="inline-block text-sm tracking-wider"
                  style={{ color: '#5a4a28', border: '1px solid #2a2010', padding: '8px 16px' }}
                >
                  {selected.link.label} →
                </Link>
              )}

              <div style={{
                position: 'absolute', bottom: 0, left: '10%', width: '80%', height: '1px',
                background: 'linear-gradient(90deg, transparent, #1e1a10 50%, transparent)',
              }} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
