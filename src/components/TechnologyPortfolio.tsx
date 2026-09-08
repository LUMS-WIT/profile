import { motion } from 'framer-motion'
import { techProducts } from '../data/content'
import { techPhoto } from '../lib/photos'
import SensingLoopDiagram from './SensingLoopDiagram'

export default function TechnologyPortfolio() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-10">
          <div className="max-w-2xl">
            <p className="text-[13px] font-medium tracking-wide text-river uppercase lg:text-sm">Technology</p>
            <h1 className="mt-2 text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
              Sensors and field technology
            </h1>
            <p className="mt-4 text-[16px] leading-relaxed text-body lg:text-lg">
              Instruments WIT designs, deploys, and maintains in the field
              — each shown with the project it was built for. Every
              instrument here feeds the same loop: sense, transmit,
              model, decide.
            </p>
          </div>
          <SensingLoopDiagram size={190} className="hidden shrink-0 lg:block" />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techProducts.map((product, i) => {
            const photo = techPhoto(product.id)
            return (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
                className="overflow-hidden rounded-lg border border-border transition-colors hover:border-river"
              >
                <div className="h-40 bg-river-tint lg:h-48">
                  {photo && <img src={photo} alt="" className="h-full w-full object-cover" />}
                </div>
                <div className="p-6 lg:p-7">
                  <h3 className="text-base font-semibold text-ink lg:text-lg">{product.name}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-body lg:text-[15px]">{product.description}</p>
                  <div className="mt-5 border-t border-border pt-4">
                    <p className="text-[13px] text-body lg:text-sm">{product.project}</p>
                    <p className="mt-1 text-[13px] text-body/70 lg:text-sm">
                      {product.funder} · {product.years}
                    </p>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
