import { partners } from '../data/content'

export default function PartnersFooter() {
  return (
    <>
      <section className="border-b border-ink/10 bg-paper py-14">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-mono text-[11px] tracking-wide text-ink/45 uppercase">
            Partners &amp; donors
          </p>
          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
            {partners.map((p) => (
              <span key={p} className="font-display text-ink/50 text-lg">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-ink py-16 text-paper">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <h2 className="font-display text-3xl font-medium">
                Want to work with WIT on this?
              </h2>
              <p className="mt-3 max-w-md text-paper/65">
                Hydrology tool training, sensor deployment, or research
                partnership — reach out and we'll scope it together.
              </p>
            </div>
            <a
              href="mailto:wit@lums.edu.pk"
              className="rounded-full bg-glacier px-6 py-3 font-mono text-[13px] uppercase tracking-wide text-ink transition-opacity hover:opacity-90"
            >
              wit@lums.edu.pk
            </a>
          </div>
          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-paper/15 pt-6 font-mono text-[12px] text-paper/40">
            <span>Water Informatics &amp; Technology Lab, LUMS</span>
            <span>Prototype portfolio — content pending final review</span>
          </div>
        </div>
      </footer>
    </>
  )
}
