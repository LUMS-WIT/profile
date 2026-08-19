export default function About() {
  return (
    <section className="border-b border-ink/10 bg-paper py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1fr_2fr] md:gap-16">
        <p className="font-mono text-[13px] uppercase tracking-[0.15em] text-river">
          What WIT is
        </p>
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl leading-snug font-medium text-ink md:text-4xl">
            A research lab that builds its own instruments, then answers
            questions with the data they send back.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">
            The Water Informatics and Technology (WIT) Lab at LUMS sits at
            the intersection of hydrology, environmental sensing, and data
            science. We design, deploy, and maintain field sensor networks
            across Pakistan — on glaciers, along rivers, in forests, and on
            farms — and turn that telemetry into models, early-warning
            systems, and advisory tools that government and communities
            actually use.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink/70">
            We work across six research domains, partner with government
            agencies and development donors, and train the next generation
            of people who will run this kind of infrastructure after us.
          </p>
        </div>
      </div>
    </section>
  )
}
