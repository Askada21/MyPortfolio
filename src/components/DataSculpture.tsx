export default function DataSculpture() {
  return (
    <div
      className="data-sculpture"
      role="img"
      aria-label="A glowing coral, pink and violet organic sculpture, with SQL, Python and Pandas annotations"
    >
      <svg viewBox="0 0 1040 982" aria-hidden="true" focusable="false">
        <defs>
          {/* The supplied PNG has white paper. Key it out without modifying the asset. */}
          <filter id="sculpture-paper" colorInterpolationFilters="sRGB">
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  -1 -1 -1 0 3" />
            <feColorMatrix type="saturate" values="1.4" />
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        </defs>

        <image
          href={`${import.meta.env.BASE_URL}assets/images/PHOTO.png`}
          x="405"
          y="274"
          width="558"
          height="452"
          filter="url(#sculpture-paper)"
        />

        <g className="sculpture-leaders" fill="none" strokeWidth="5">
          <path d="M448 192 626 418" stroke="#ff978d" />
          <path d="M327 607 567 496" stroke="#ff978d" />
          <path d="M559 721 644 618" stroke="#ce52bb" />
        </g>

        <g className="sculpture-labels" fill="#fff">
          <text x="421" y="169">
            [SQL]
          </text>
          <text x="200" y="617">
            [Python]
          </text>
          <text x="488" y="766">
            [Pandas]
          </text>
        </g>
      </svg>
    </div>
  )
}
