const anthers = [
  [-91, -59],
  [-63, -93],
  [-21, -111],
  [31, -104],
  [81, -74],
  [106, -24],
  [77, 30],
  [29, 47],
  [-45, 31],
  [-101, -5],
]

function FlowerHead({
  x,
  y,
  scale = 1,
  angle = 0,
}: {
  x: number
  y: number
  scale?: number
  angle?: number
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${angle}) scale(${scale})`}>
      <g stroke="var(--ivory)" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
        {[0, 58, 121, 181, 237, 298].map((rotation, i) => (
          <g key={rotation} transform={`rotate(${rotation}) scale(${1 + (i % 3) * 0.045} 1)`}>
            <path d="M-3 7C-21-8-12-34-34-51S-68-69-66-51c1 9 12 11 15 3-9 8-15-1-9-7 9-8 21 1 26 15C-27-20-28-3 3 8" />
            <path
              d="M-4 5C-21-9-19-30-35-46c-7-7-15-12-22-12"
              stroke="var(--moss)"
              strokeWidth="0.55"
            />
            <path d="m-35-46-5 3m8 1-6 3m10 3-6 2m9 4-6 2" stroke="var(--moss)" strokeWidth="0.4" />
          </g>
        ))}
        {anthers.map(([endX, endY], i) => (
          <g key={i} opacity={i % 3 === 0 ? 0.55 : 0.85}>
            <path
              d={`M${(i % 3) - 1} 8C${endX * 0.3} ${-14 + endY * 0.15} ${endX * 0.69} ${endY - 15} ${endX} ${endY}`}
              strokeWidth="0.65"
            />
            <ellipse
              cx={endX}
              cy={endY}
              rx="3"
              ry="1.1"
              fill="var(--ivory)"
              stroke="none"
              transform={`rotate(${endX / 3} ${endX} ${endY})`}
            />
          </g>
        ))}
        <path d="M-9 9q9-8 18 0l-3 9H-5Z" fill="var(--bg)" stroke="var(--moss)" strokeWidth="0.9" />
        <path d="m-4 10 1 7m3-8v9m4-8-1 7" stroke="var(--moss)" strokeWidth="0.5" />
      </g>
    </g>
  )
}

/** Original, static Higanbana line art. Decorative; no effect on the hero flytrap. */
export default function SpiderLily() {
  return (
    <svg
      className="spider-lily"
      viewBox="0 0 440 600"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <g stroke="var(--moss)" strokeLinecap="round">
        <path d="M215 585C197 461 270 314 260 167" strokeWidth="1.5" />
        <path d="M218 584C203 462 275 309 264 168" strokeWidth="0.5" opacity="0.55" />
        <path d="M209 585c-11-103-99-161-84-270" strokeWidth="1.2" />
        <path d="M212 584c-8-106-99-162-83-269" strokeWidth="0.45" opacity="0.5" />
        <path d="M221 585c51-59 101-128 109-210" strokeWidth="1.1" />
        <path d="M224 585c52-62 103-130 109-210" strokeWidth="0.45" opacity="0.55" />
        <path
          d="M204 584c-30-45-66-67-103-74 48 26 73 49 92 74m29 0c20-27 48-41 77-42-34 13-54 25-68 42"
          strokeWidth="0.65"
          opacity="0.5"
        />
        <path d="M184 589q40-8 74 0M176 595h89" strokeWidth="0.5" opacity="0.35" />
      </g>
      <FlowerHead x={260} y={150} angle={-13} />
      <FlowerHead x={127} y={303} scale={0.72} angle={-31} />
      <FlowerHead x={331} y={365} scale={0.48} angle={19} />
    </svg>
  )
}
