export default function About() {
  return (
    <section className="border-b border-border py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-[220px_1fr] md:gap-14">
        <p className="text-[13px] font-medium tracking-wide text-river uppercase">About WIT</p>
        <div className="max-w-2xl">
          <h2 className="text-2xl leading-snug font-semibold text-ink sm:text-3xl">
            A hub for hydro-informatics and systems analysis
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-body">
            The Centre for Water Informatics &amp; Technology (WIT) was
            established at LUMS in 2016 with a disciplinary focus on
            hydro-informatics and systems analysis, touching
            multidisciplinary research themes in water. WIT's research and
            training programs work to cross the boundaries of traditional
            scientific disciplines to foster an interdisciplinary
            understanding of water.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-body">
            WIT helps bridge the gap between academia and practice —
            building cooperation between the academic community, industry,
            development agencies, NGOs, public administration, and local
            communities to build capacity in innovation and technology for
            water management.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-body">
            Water security is one of the biggest challenges to Pakistan's
            development: agriculture consumes roughly 93% of the country's
            available water resources, yields per unit of water are among
            the lowest in the world, and the population is projected to
            reach 263 million by 2050. WIT treats this as a systems
            problem — moving toward smart, ICT-powered water management
            rather than any single fix.
          </p>
        </div>
      </div>
    </section>
  )
}
