import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import SystemPressures from '../components/SystemPressures'
import TeaserSection from '../components/TeaserSection'
import { researchDomains, techProducts, impactStories, newsItems } from '../data/content'
import { techPhoto, storyPhoto, heroPhoto } from '../lib/photos'

const cardHover =
  'transition-colors hover:border-river'

export default function Home() {
  return (
    <>
      <Hero />
      <SystemPressures />
      <About />

      <TeaserSection eyebrow="Research" title="Water as a system" viewAllHref="/research" viewAllLabel="All research themes" surface>
        <div className="grid gap-6 sm:grid-cols-3">
          {researchDomains.slice(0, 3).map((domain) => (
            <Link
              key={domain.id}
              to={`/research/${domain.id}`}
              className={`block rounded-lg border border-border bg-paper p-7 ${cardHover}`}
            >
              <h3 className="text-lg font-semibold text-ink">{domain.label}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-body">{domain.summary}</p>
            </Link>
          ))}
        </div>
      </TeaserSection>

      <TeaserSection eyebrow="Technology" title="Sensors and field technology" viewAllHref="/technology" viewAllLabel="Full technology portfolio">
        <div className="grid gap-6 sm:grid-cols-3">
          {techProducts.slice(0, 3).map((product) => {
            const photo = techPhoto(product.id)
            return (
              <div key={product.id} className={`overflow-hidden rounded-lg border border-border ${cardHover}`}>
                <div className="h-36 bg-river-tint lg:h-40">
                  {photo && <img src={photo} alt="" className="h-full w-full object-cover" />}
                </div>
                <div className="p-6">
                  <h3 className="text-base font-semibold text-ink lg:text-lg">{product.name}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-body">{product.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </TeaserSection>

      <TeaserSection eyebrow="Impact" title="Research stories" viewAllHref="/impact" viewAllLabel="All stories" surface>
        <div className="grid gap-6 sm:grid-cols-2">
          {impactStories.slice(0, 2).map((story) => {
            const photo = storyPhoto(story.id) ?? (story.id === 'intelliwarn' ? heroPhoto() : undefined)
            return (
              <div key={story.id} className={`overflow-hidden rounded-lg border border-border bg-paper ${cardHover}`}>
                <div className="h-52 bg-river-tint lg:h-56">
                  {photo && <img src={photo} alt="" className="h-full w-full object-cover" />}
                </div>
                <div className="p-7">
                  <p className="text-[13px] font-medium text-river lg:text-sm">{story.domain}</p>
                  <h3 className="mt-1.5 text-xl font-semibold text-ink">{story.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-body lg:text-base">{story.summary}</p>
                </div>
              </div>
            )
          })}
        </div>
      </TeaserSection>

      <TeaserSection eyebrow="News" title="Recent activity" viewAllHref="/news" viewAllLabel="All news">
        <ul className="divide-y divide-border rounded-lg border border-border">
          {newsItems.slice(0, 5).map((item) => (
            <li key={item.id} className="flex flex-wrap items-baseline gap-x-6 gap-y-1 px-6 py-5 transition-colors hover:bg-surface">
              <span className="w-32 shrink-0 text-[13px] text-body/70 lg:text-sm">{item.date}</span>
              <span className="text-[15px] text-ink lg:text-base">{item.title}</span>
            </li>
          ))}
        </ul>
      </TeaserSection>
    </>
  )
}
