/** The original Canva exports have white paper. A shared SVG filter keys it out on dark surfaces. */
export function CanvaAssetFilters() {
  return (
    <svg className="asset-filters" aria-hidden="true" focusable="false">
      <defs>
        <filter
          id="canva-remove-paper"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  -1 -1 -1 0 3" />
          <feColorMatrix type="saturate" values="1.4" />
          <feComposite in2="SourceGraphic" operator="in" />
        </filter>
      </defs>
    </svg>
  )
}

const dimensions = {
  'PHOTO.png': [435, 352],
  'PHOTO-2.png': [370, 363],
  'PHOTO-3.png': [348, 300],
  'PHOTO-4.png': [405, 319],
  'PHOTO-5.png': [252, 237],
} as const

export default function CanvaArtwork({
  file,
  className = '',
  eager = false,
}: {
  file: keyof typeof dimensions
  className?: string
  eager?: boolean
}) {
  const [width, height] = dimensions[file]
  return (
    <img
      className={`canva-artwork ${className}`}
      src={`${import.meta.env.BASE_URL}assets/images/${file}`}
      width={width}
      height={height}
      alt=""
      aria-hidden="true"
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      draggable={false}
    />
  )
}
