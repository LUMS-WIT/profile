const STEPS = [
  { key: 'sense', label: 'Sense', x: 60, y: 60 },
  { key: 'transmit', label: 'Transmit', x: 240, y: 60 },
  { key: 'model', label: 'Model', x: 240, y: 200 },
  { key: 'decide', label: 'Decide', x: 60, y: 200 },
] as const

/**
 * Signature graphic for WIT's field-instrumentation work — a closed
 * loop (sense → transmit → model → decide → back to sense), in
 * contrast to the multi-color sector nexus diagram: this one is
 * monochrome river-teal because it represents WIT's own method, not
 * an external sector. Used on the Telematics & IoT theme page and the
 * Technology portfolio.
 */
export default function SensingLoopDiagram({
  size = 260,
  className = '',
}: {
  size?: number
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 300 260"
      width={size}
      height={(size * 260) / 300}
      className={className}
      role="img"
      aria-label="Diagram showing a closed loop: sense, transmit, model, decide, back to sense"
    >
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-river)" />
        </marker>
      </defs>

      <g fill="none" stroke="var(--color-river)" strokeWidth="1.75" markerEnd="url(#arrow)" opacity="0.75">
        <path d="M 92 60 L 208 60" />
        <path d="M 240 92 L 240 168" />
        <path d="M 208 200 L 92 200" />
        <path d="M 60 168 L 60 92" />
      </g>

      {STEPS.map((step, i) => (
        <g key={step.key}>
          <circle cx={step.x} cy={step.y} r="26" fill="var(--color-river-tint)" stroke="var(--color-river)" strokeWidth="1.5" />
          <text x={step.x} y={step.y + 5} textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--color-river-dark)">
            {step.label}
          </text>
          <text x={step.x} y={step.y - 34} textAnchor="middle" fontSize="10" fill="var(--color-body)">
            {i === 0 ? '01' : i === 1 ? '02' : i === 2 ? '03' : '04'}
          </text>
        </g>
      ))}
    </svg>
  )
}
