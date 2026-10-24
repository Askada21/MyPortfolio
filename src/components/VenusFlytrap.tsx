import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, PointerEvent } from 'react'

function Trap({ x, y, rotate = 0, scale = 1 }: { x: number; y: number; rotate?: number; scale?: number }) {
  return <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
    <path d="M0 106C-8 41-2-19 0-89" stroke="#b9bcb5" strokeWidth="1.1" />
    {[-1, 1].map(side => <g key={side} transform={`scale(${side} 1)`}>
      <g className="trap-lobe">
        <path d="M0 107C-57 94-90 40-81-19S-40-101 0-89Q-18-5 0 107Z" fill="url(#plant-stipple)" stroke="#c1c3ae" strokeWidth="1.1" />
        <path d="M-4 100C-49 82-77 35-70-20S-35-92-4-84" stroke="#788568" strokeWidth=".8" fill="none" />
        {Array.from({ length: 22 }, (_, i) => {
          const t = .13 + i / 21 * (Math.PI - .26)
          const px = -Math.sin(t) * 81
          const py = 8 + Math.cos(t) * 97
          const tooth = 19 + Math.sin(t * 4) * 7
          return <path key={i} d={`M${px} ${py}q${-Math.sin(t) * tooth * .8} ${Math.cos(t) * tooth * .55} ${-Math.sin(t) * tooth} ${Math.cos(t) * tooth}q${Math.sin(t) * 6} ${-Math.cos(t) * 6} ${Math.sin(t) * 5 + 2} ${-Math.cos(t) * 7}`} stroke="#bdc0aa" strokeWidth=".85" fill="none" />
        })}
        {Array.from({ length: 13 }, (_, i) => {
          const yy = -75 + i * 13
          const width = Math.sqrt(Math.max(0, 1 - ((yy - 8) / 98) ** 2)) * 72
          return <path key={i} d={`M-3 ${yy + 10}Q${-width * .65} ${yy + 22} ${-width} ${yy}m${width * .3} 8-12-5m15 7-9-17`} stroke="#8d987d" strokeWidth=".65" fill="none" />
        })}
        {Array.from({ length: 105 }, (_, i) => {
          const yy = -82 + (i * 37 % 180)
          const edge = Math.sqrt(Math.max(0, 1 - ((yy - 8) / 97) ** 2)) * 74
          return <circle key={i} cx={-5 - (i * 13 % Math.max(1, edge - 7))} cy={yy} r={i % 3 === 0 ? .8 : .45} fill="#a5ad91" opacity=".7" />
        })}
        <path d="m-30-31 5 17m-21 26 10 13m8 20 6 12" stroke="#c1c3ae" strokeWidth="1" />
      </g>
    </g>)}
  </g>
}

export default function VenusFlytrap() {
  const [closed, setClosed] = useState(false)
  const plant = useRef<HTMLButtonElement>(null)
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  useEffect(() => () => clearTimeout(timer.current), [])

  function reactToPointer(event: PointerEvent<HTMLButtonElement>) {
    if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const rect = event.currentTarget.getBoundingClientRect()
    plant.current?.style.setProperty('--plant-x', `${(event.clientX - rect.left - rect.width / 2) / 60}deg`)
    plant.current?.style.setProperty('--plant-y', `${(event.clientY - rect.top - rect.height / 2) / 90}deg`)
  }
  function closeTrap() {
    setClosed(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setClosed(false), 1700)
  }

  return <button ref={plant} className={`flytrap ${closed ? 'is-closed' : ''}`} onClick={closeTrap} onPointerMove={reactToPointer} onPointerLeave={() => { plant.current?.style.setProperty('--plant-x', '0deg'); plant.current?.style.setProperty('--plant-y', '0deg') }} aria-label="Close the Venus flytrap — interactive botanical illustration" style={{ '--plant-x': '0deg', '--plant-y': '0deg' } as CSSProperties}>
    <svg viewBox="0 0 540 650" fill="none" aria-hidden="true"><defs><pattern id="plant-stipple" width="7" height="9" patternUnits="userSpaceOnUse"><path d="M0 0h7v9H0Z" fill="#191e16"/><circle cx="1" cy="2" r=".6" fill="#929c7e"/><circle cx="5" cy="6" r=".45" fill="#b9bcb5"/></pattern></defs>
      <g className="plant-sway">
        <g stroke="#879176" strokeWidth="1.2"><path d="M291 648c12-136 67-203 57-359M300 649c15-114-67-125-101-206M287 649c-16-68-65-75-117-54M305 647c29-92 94-95 139-156"/><path d="M299 643c-5-114 3-218-45-281 57 30 83 120 45 281Z" fill="url(#plant-stipple)"/><path d="M301 620c-58-20-69-64-91-92 50 5 77 40 91 92Zm11-16c58-19 65-64 104-72-30 52-53 64-104 72Z" fill="url(#plant-stipple)"/><path d="M299 641c-2-93-11-160-41-201m-11 37 31 33m-20-6 28 35m-20-5 27 35m-25-105-8 34m17-6-7 45m27 11-11 19" strokeWidth=".6"/><path d="M348 391c4-40 16-71 8-112M199 446l-13-45" stroke="#c1c3ae"/></g>
        <Trap x={350} y={195} rotate={-31} scale={1.02} />
        <Trap x={182} y={371} rotate={25} scale={.92} />
        <Trap x={441} y={479} rotate={62} scale={.31} />
      </g>
      <g stroke="#7e886d" strokeWidth=".7"><path d="M104 55v41M86 76h36M423 329v15M416 336h15M478 96v18M469 105h18M114 545v12M108 551h12"/><circle cx="104" cy="76" r="4"/><path d="M49 113h77l21 20"/></g>
    </svg><span className="plant-instruction">{closed ? 'A moment of stillness.' : 'TOUCH TO CLOSE ↗'}</span>
  </button>
}
