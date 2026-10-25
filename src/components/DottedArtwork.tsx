import type { CSSProperties } from 'react'

interface DottedArtworkProps {
  file: string
  width: number
  height: number
  className?: string
  loading?: 'eager' | 'lazy'
}

/** Display the original dotted artwork as decoration, without modifying its source pixels. */
export default function DottedArtwork({
  file,
  width,
  height,
  className = '',
  loading = 'lazy',
}: DottedArtworkProps) {
  const source = `${import.meta.env.BASE_URL}assets/images/${file}`
  return (
    <img
      className={`dotted-artwork ${className}`}
      src={source}
      style={{ '--artwork-source': `url("${source}")` } as CSSProperties}
      width={width}
      height={height}
      alt=""
      aria-hidden="true"
      loading={loading}
      decoding="async"
      draggable={false}
    />
  )
}
