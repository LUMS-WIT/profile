const NODES = [
  { key: 'water', label: 'Water', x: 150, y: 36, color: 'var(--color-sector-water)', labelDx: 0, labelDy: -20, anchor: 'middle' },
  { key: 'energy', label: 'Energy', x: 264, y: 150, color: 'var(--color-sector-energy)', labelDx: 16, labelDy: 5, anchor: 'start' },
  { key: 'agriculture', label: 'Agriculture', x: 150, y: 264, color: 'var(--color-sector-agriculture)', labelDx: 0, labelDy: 30, anchor: 'middle' },
  { key: 'climate', label: 'Climate', x: 36, y: 150, color: 'var(--color-sector-climate)', labelDx: -16, labelDy: 5, anchor: 'end' },
] as const

const CENTER = { x: 150, y: 150 }

/**
 * The site's signature graphic — a small "nexus" network showing water,
 * energy, agriculture, and climate as one connected system, tying
 * directly to the systems-thinking framing used in copy throughout.
 * Not decorative: this is the one visual idea the whole brand repeats.
 */
export default function SystemsDiagram({
  size = 260,
  showLabels = true,
  className = '',
}: {
  size?: number
  showLabels?: boolean
  className?: string
}) {
  return (
    <svg
      viewBox="-50 -20 400 340"
      width={size}
      height={(size * 340) / 400}
      className={className}
      role="img"
      aria-label="Diagram showing water, energy, agriculture, and climate connected as one system"
    >
      <g stroke="var(--color-border)" strokeWidth="1.5">
        {NODES.map((node) => (
          <line key={`spoke-${node.key}`} x1={CENTER.x} y1={CENTER.y} x2={node.x} y2={node.y} />
        ))}
        {NODES.map((node, i) => {
          const next = NODES[(i + 1) % NODES.length]
          return <line key={`ring-${node.key}`} x1={node.x} y1={node.y} x2={next.x} y2={next.y} />
        })}
      </g>

      <circle cx={CENTER.x} cy={CENTER.y} r="12" fill="var(--color-ink)" />

      {NODES.map((node) => (
        <g key={node.key}>
          <circle cx={node.x} cy={node.y} r="9" fill={node.color} />
          {showLabels && (
            <text
              x={node.x + node.labelDx}
              y={node.y + node.labelDy}
              textAnchor={node.anchor}
              fontSize="13"
              fontWeight="500"
              fill="var(--color-ink)"
              className="font-sans"
            >
              {node.label}
            </text>
          )}
        </g>
      ))}
    </svg>
  )
}
