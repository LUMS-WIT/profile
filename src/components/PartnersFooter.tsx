import { contact } from '../data/content'

export default function PartnersFooter() {
  return (
    <footer id="contact" className="bg-ink py-16 text-white">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Work with WIT</h2>
            <p className="mt-3 max-w-md text-white/70">
              Training, sensor deployment, or research partnership — reach
              out and we'll scope it together.
            </p>
          </div>
          <a
            href={`mailto:${contact.email}`}
            className="rounded bg-white px-6 py-3 text-[14px] font-medium text-ink transition-colors hover:bg-white/90"
          >
            {contact.email}
          </a>
        </div>

        <div className="mt-12 grid gap-6 border-t border-white/15 pt-8 text-[13px] text-white/60 sm:grid-cols-3">
          <p>{contact.address}</p>
          <p>{contact.phone}</p>
          <p>{contact.hours}</p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-[12px] text-white/40">
          <span>Centre for Water Informatics &amp; Technology, LUMS</span>
          <a href="https://wit.lums.edu.pk" target="_blank" rel="noreferrer" className="hover:text-white/70">
            wit.lums.edu.pk
          </a>
        </div>
      </div>
    </footer>
  )
}
