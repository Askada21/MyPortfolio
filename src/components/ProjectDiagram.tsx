/** Two distinct concept drawings share one frame and scale safely with their preview area. */
export default function ProjectDiagram({ artwork }: { artwork: 'workspace' | 'web' }) {
  return (
    <svg
      className="project-diagram"
      viewBox="0 0 260 220"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <g transform="rotate(-5 130 110)" stroke="var(--olive)" strokeWidth="0.8">
        <rect x="12" y="14" width="236" height="192" fill="#1c2219" />
        <path d="M12 43h236" />
        <text x="24" y="32" fill="var(--muted)" stroke="none" fontSize="7" letterSpacing="1.2">
          {artwork === 'workspace' ? 'WORKSPACE' : 'WEB / INTERFACE'}
        </text>
        {[218, 227, 236].map((x) => (
          <circle key={x} cx={x} cy="29" r="1.5" />
        ))}
        {artwork === 'workspace' ? (
          <>
            <rect x="24" y="56" width="99" height="124" />
            <rect x="136" y="56" width="99" height="124" />
            <path d="M24 81h99m13 0h99" />
            <g fill="var(--muted)" stroke="none" fontSize="7">
              <text x="34" y="72">
                Ideas
              </text>
              <text x="146" y="72">
                In progress
              </text>
              <text x="34" y="104">
                01 / Explore
              </text>
              <text x="34" y="124">
                02 / Build
              </text>
              <text x="146" y="104">
                03 / Connect
              </text>
              <text x="146" y="124">
                04 / Share
              </text>
            </g>
            <path d="M34 148h63m-63 8h40m72-8h63m-63 8h40" opacity="0.5" />
          </>
        ) : (
          <>
            <text x="24" y="66" fill="var(--moss)" stroke="none" fontSize="9">
              &lt;/&gt;
            </text>
            <path d="M171 62h15m8 0h15m8 0h15" />
            <path d="M24 88h139" stroke="var(--moss)" strokeWidth="3" opacity="0.7" />
            <path d="M24 99h93" opacity="0.7" />
            {[24, 97, 170].map((x) => (
              <g key={x}>
                <rect x={x} y="116" width="65" height="40" />
                <path d={`M${x + 9} 129h45m-45 8h29`} opacity="0.6" />
              </g>
            ))}
            <rect x="24" y="170" width="156" height="12" />
            <rect x="190" y="170" width="45" height="12" fill="var(--olive)" opacity="0.65" />
          </>
        )}
      </g>
    </svg>
  )
}
