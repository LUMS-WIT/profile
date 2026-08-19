import { useId } from 'react'

const NODES = [
  { key: 'water', label: 'Water', angle: -90, color: 'var(--color-sector-water)' },
  { key: 'energy', label: 'Energy', angle: 0, color: 'var(--color-sector-energy)' },
  { key: 'agriculture', label: 'Agriculture', angle: 90, color: 'var(--color-sector-agriculture)' },
  { key: 'climate', label: 'Climate', angle: 180, color: 'var(--color-sector-climate)' },
] as const

const CENTER = { x: 150, y: 150 }
const RADIUS = 108

function pointAt(angleDeg: number, r = RADIUS) {
  const rad = (angleDeg * Math.PI) / 180
  return { x: CENTER.x + r * Math.cos(rad), y: CENTER.y + r * Math.sin(rad) }
}

function labelOffset(angleDeg: number): { dx: number; dy: number; anchor: 'start' | 'middle' | 'end' } {
  // push labels further out along their own angle, anchored appropriately
  const rad = (angleDeg * Math.PI) / 180
  const dx = Math.cos(rad)
  const dy = Math.sin(rad)
  const anchor: 'start' | 'middle' | 'end' = dx > 0.4 ? 'start' : dx < -0.4 ? 'end' : 'middle'
  return { dx: dx * 26, dy: dy * 26 + 5, anchor }
}

/**
 * The site's signature graphic — a "nexus" network of water, energy,
 * agriculture, and climate arranged radially around a center, styled
 * after the radial figures common in systems-analysis literature
 * (concentric rings, gradient nodes, curved links) rather than a plain
 * node-and-line sketch. Not decorative: this is the one visual idea the
 * whole brand repeats.
 */
export default function SystemsDiagram({
  size = 260,
  showLabels = true,
  dark = false,
  className = '',
}: {
  size?: number
  showLabels?: boolean
  dark?: boolean
  className?: string
}) {
  const uid = useId()
  const ringColor = dark ? 'rgba(255,255,255,0.12)' : 'var(--color-border)'
  const linkColor = dark ? 'rgba(255,255,255,0.35)' : 'var(--color-river)'
  const centerFillA = dark ? '#3a4046' : '#2a2f34'
  const centerFillB = dark ? '#14171a' : '#0a0c0e'
  const labelFill = dark ? 'rgba(255,255,255,0.9)' : 'var(--color-ink)'

  const nodes = NODES.map((n) => ({ ...n, ...pointAt(n.angle) }))

  return (
    <svg
      viewBox="-40 -40 380 380"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Radial diagram showing water, energy, agriculture, and climate connected as one system"
    >
      <defs>
        {nodes.map((n) => (
          <radialGradient key={n.key} id={`${uid}-grad-${n.key}`} cx="35%" cy="30%" r="75%">
            <stop offset="0%" stopColor={n.color} stopOpacity="1" />
            <stop offset="100%" stopColor={n.color} stopOpacity="0.72" />
          </radialGradient>
        ))}
        <radialGradient id={`${uid}-grad-center`} cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor={centerFillA} />
          <stop offset="100%" stopColor={centerFillB} />
        </radialGradient>
        <filter id={`${uid}-glow`} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* radar backdrop */}
      <circle cx={CENTER.x} cy={CENTER.y} r={RADIUS} fill="none" stroke={ringColor} strokeWidth="1" />
      <circle cx={CENTER.x} cy={CENTER.y} r={RADIUS * 0.62} fill="none" stroke={ringColor} strokeWidth="1" />
      <circle
        cx={CENTER.x}
        cy={CENTER.y}
        r={RADIUS + 22}
        fill="none"
        stroke={ringColor}
        strokeWidth="1"
        strokeDasharray="1 7"
        strokeLinecap="round"
      />

      {/* curved links: center -> node, and node -> next node along the ring */}
      <g fill="none">
        {nodes.map((n) => (
          <path
            key={`spoke-${n.key}`}
            d={`M ${CENTER.x} ${CENTER.y} L ${n.x} ${n.y}`}
            stroke={linkColor}
            strokeWidth="1.5"
            opacity="0.55"
          />
        ))}
        {nodes.map((n, i) => {
          const next = nodes[(i + 1) % nodes.length]
          const mid = pointAt((n.angle + next.angle) / 2 + (i === nodes.length - 1 ? 180 : 0), RADIUS * 1.28)
          return (
            <path
              key={`arc-${n.key}`}
              d={`M ${n.x} ${n.y} Q ${mid.x} ${mid.y} ${next.x} ${next.y}`}
              stroke={ringColor}
              strokeWidth="1.5"
            />
          )
        })}
      </g>

      <circle cx={CENTER.x} cy={CENTER.y} r="17" fill={`url(#${uid}-grad-center)`} filter={`url(#${uid}-glow)`} />

      {nodes.map((n) => {
        const { dx, dy, anchor } = labelOffset(n.angle)
        return (
          <g key={n.key}>
            <circle cx={n.x} cy={n.y} r="15" fill={n.color} opacity="0.18" />
            <circle cx={n.x} cy={n.y} r="9.5" fill={`url(#${uid}-grad-${n.key})`} filter={`url(#${uid}-glow)`} />
            {showLabels && (
              <text
                x={n.x + dx}
                y={n.y + dy}
                textAnchor={anchor}
                fontSize="12.5"
                fontWeight="600"
                letterSpacing="0.02em"
                fill={labelFill}
                className="font-sans"
              >
                {n.label}
              </text>
            )}
          </g>
        )
      })}
    </svg>
  )
}
