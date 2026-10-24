export function Star({ className = '' }: { className?: string }) {
  return (
    <svg className={`star ${className}`} viewBox="0 0 48 48" fill="none" aria-hidden="true">
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

export function Landscape({ moon = false }: { moon?: boolean }) {
  return (
    <svg
      className={`landscape ${moon ? 'landscape-moon' : ''}`}
      viewBox="0 0 620 350"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={moon ? 'moon-grain' : 'hill-grain'}
          width="5"
          height="5"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r=".6" fill="currentColor" />
        </pattern>
      </defs>
      {moon && (
        <>
          <circle cx="330" cy="113" r="77" fill="currentColor" opacity=".6" />
          <circle cx="330" cy="113" r="76" fill="url(#moon-grain)" />
        </>
      )}
      <g stroke="currentColor" strokeWidth=".8" strokeDasharray="1 3" strokeLinecap="round">
        <path d="m32 270 81-54 33 17 90-125 30-51 38 57 68 101 42-30 106 85M148 241l90-106 29-62 32 62 71 103M212 164l34-19 18 8 18-12 29 31M32 283c103-10 139-5 232 2s168-9 301-1M20 299c136-5 181 13 296 0s190 1 278 7M64 319c104-9 190 5 297-1M107 334h243" />
        {Array.from({ length: 30 }, (_, i) => (
          <path key={i} d={`M${224 - i * 5} ${173 + i * 3}q48 ${-22 + (i % 6)} ${93 + i * 4} 3`} />
        ))}
      </g>
      <g stroke="currentColor" strokeWidth="1">
        <path d="M434 327c41-55 50-87 30-134s-1-75 31-97M447 299c-4-54-43-68-69-79M473 227c27-18 51-23 88-20M468 190c-20-26-45-32-73-27M480 115c31 3 52-8 64-27" />
        {Array.from({ length: 36 }, (_, i) => {
          const x = 378 + ((i * 43) % 180)
          const y = 83 + ((i * 29) % 150)
          return (
            <g key={i} transform={`translate(${x} ${y})`}>
              <path d="M0 0c-10-11-10-17-4-15s7 8 4 15Zm0 0c12-10 18-7 14-1S5 4 0 0Z" />
              <circle cx="0" cy="0" r="2" />
            </g>
          )
        })}
      </g>
    </svg>
  )
}
