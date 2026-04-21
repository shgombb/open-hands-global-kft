import Button from '../ui/Button'
import SectionLabel from '../ui/SectionLabel'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-dark-border px-6 py-20"
    >
      {/* Two-column layout: text left, image right */}
      <div className="mx-auto flex max-w-6xl items-center gap-12">

        {/* Left: content */}
        <div className="relative z-10 flex-1">
          <SectionLabel>Software Development Studio</SectionLabel>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
            We build software<br />that scales with you.
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-gray-500">
            Web apps, mobile, and infrastructure — full cycle development
            for startups and growing businesses.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="#contact">Get in Touch</Button>
            <a
              href="#portfolio"
              className="text-[10px] font-bold tracking-widest text-gray-600 uppercase transition-colors hover:text-white"
            >
              ↓ See Our Work
            </a>
          </div>
        </div>

        {/* Right: image — dimmed and fading into background */}
        <div className="relative hidden flex-shrink-0 md:block" style={{ width: '48%' }}>
          {/* Gradient fade on left edge to blend with page */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-dark to-transparent" />
          {/* Gradient fade on right edge */}
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-dark to-transparent" />
          {/* Gradient fade on bottom */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-dark to-transparent" />
          <img
            src="/hero-banner.png"
            alt=""
            aria-hidden="true"
            className="w-full rounded-lg object-cover opacity-40"
            style={{ maxHeight: '340px' }}
          />
        </div>

      </div>
    </section>
  )
}
