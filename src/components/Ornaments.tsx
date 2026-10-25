import DottedArtwork from './DottedArtwork'

export function Star({ className = '', size }: { className?: string; size?: number }) {
  return (
    <span
      className={`star ${className}`}
      style={size === undefined ? undefined : { width: size, height: size }}
      aria-hidden="true"
    >
      <DottedArtwork file="dotted-star.jpg" width={736} height={736} loading="eager" />
    </span>
  )
}

/** Original line ornament, retained for circular contact emblems. */
export function LineStar() {
  return (
    <svg className="line-star" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 0v48M0 24h48M7 7l34 34M7 41 41 7" stroke="currentColor" strokeWidth=".7" />
      <path d="m24 9 3 12 12 3-12 3-3 12-3-12-12-3 12-3Z" fill="currentColor" />
    </svg>
  )
}

export function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span>[ {number} ]</span>
      <h2>{children}</h2>
    </div>
  )
}

export function Arrow() {
  return (
    <span aria-hidden="true" className="arrow">
      ↗
    </span>
  )
}

export function Branch({ className = '' }: { className?: string }) {
  return (
    <svg className={`branch ${className}`} viewBox="0 0 240 360" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth=".8">
        <path d="M209 355C158 277 185 226 111 162S78 67 39 12M175 285c-62-16-82-58-90-90M148 222c37-33 17-85 34-108M111 162C58 153 29 116 25 83M94 125c31-21 21-60 33-80M166 257c-36-2-54-8-71-23" />
        {Array.from({ length: 25 }, (_, i) => {
          const x = 35 + ((i * 47) % 150)
          const y = 24 + i * 11
          return (
            <g key={i} transform={`translate(${x} ${y}) rotate(${i * 37})`}>
              <path d="M0 0c-17-23-18-32-7-27S5-14 0 0Zm0 0c20-14 28-13 22-3S9 4 0 0Z" />
              <circle r="2" />
            </g>
          )
        })}
      </g>
    </svg>
  )
}
