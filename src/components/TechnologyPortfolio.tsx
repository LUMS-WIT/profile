import { techProducts } from '../data/content'
import { techPhoto } from '../lib/photos'

export default function TechnologyPortfolio() {
  return (
    <section id="technology" className="border-b border-border py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-[13px] font-medium tracking-wide text-river uppercase">Technology</p>
        <h2 className="mt-2 max-w-2xl text-2xl font-semibold text-ink sm:text-3xl">
          Sensors and field technology
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] text-body">
          Instruments WIT designs, deploys, and maintains in the field —
          each shown with the project it was built for.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techProducts.map((product) => {
            const photo = techPhoto(product.id)
            return (
              <article key={product.id} className="overflow-hidden rounded-md border border-border">
                <div className="h-40 bg-river-tint">
                  {photo && <img src={photo} alt="" className="h-full w-full object-cover" />}
                </div>
                <div className="p-6">
                  <h3 className="text-[16px] font-semibold text-ink">{product.name}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-body">{product.description}</p>
                  <div className="mt-4 border-t border-border pt-4">
                    <p className="text-[13px] text-body">{product.project}</p>
                    <p className="mt-1 text-[13px] text-body/70">
                      {product.funder} · {product.years}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
