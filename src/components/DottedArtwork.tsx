import type { CSSProperties } from 'react'

interface DottedArtworkProps {
  file: string
  width: number
  height: number
  className?: string
  loading?: 'eager' | 'lazy'
  ink?: string
}

/** Keep the supplied dot pattern; optional solid ink provides an exact decorative colour. */
export default function DottedArtwork({
  file,
  width,
  height,
  className = '',
  loading = 'lazy',
  ink,
}: DottedArtworkProps) {
  const source = `${import.meta.env.BASE_URL}assets/images/${file}`
  const maskStyle = {
    '--artwork-source': `url("${source}")`,
    '--artwork-ink': ink,
  } as CSSProperties
  const image = (
    <img
      className={ink ? 'dotted-artwork-source' : `dotted-artwork ${className}`}
      src={source}
      style={ink ? undefined : maskStyle}
      width={width}
      height={height}
      alt=""
      aria-hidden="true"
      loading={loading}
      decoding="async"
      draggable={false}
    />
  )

  return ink ? (
    <span
      className={`dotted-artwork dotted-artwork-tinted ${className}`}
      style={maskStyle}
      aria-hidden="true"
    >
      {image}
    </span>
  ) : (
    image
  )
}
