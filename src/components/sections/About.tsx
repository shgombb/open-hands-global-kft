import SectionLabel from '../ui/SectionLabel'

export default function About() {
  return (
    <section id="about" className="border-b border-dark-border px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Who We Are</SectionLabel>
        <h2 className="mt-1 text-2xl font-bold text-white">About</h2>
        <div className="mt-8 flex gap-6">
          <div className="h-16 w-16 flex-shrink-0 rounded-full border border-dashed border-dark-border bg-dark-subtle" />
          <div>
            <p className="text-sm leading-relaxed text-gray-400">
              Open Hands Global is a Budapest-based software studio specialising in
              full-cycle web and mobile development, and on-demand DevOps contracting.
              We work with startups and SMBs to ship reliable, scalable software.
            </p>
            <div className="mt-4 flex gap-2">
              <span className="rounded bg-dark-subtle px-2 py-1 text-[10px] text-gray-500">
                Budapest, HU
              </span>
              <span className="rounded bg-dark-subtle px-2 py-1 text-[10px] text-gray-500">
                Software & Recruitment
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
