import Button from '../ui/Button'
import SectionLabel from '../ui/SectionLabel'

export default function Hero() {
  return (
    <section
      id="hero"
      className="border-b border-dark-border bg-gradient-to-b from-dark-subtle to-dark px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
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
        <div aria-hidden="true" className="mt-12 flex h-48 items-center justify-center rounded border border-dashed border-dark-border bg-dark-subtle md:h-64">
          <span className="text-xs tracking-widest text-gray-700">
            [ HERO BANNER IMAGE ]
          </span>
        </div>
      </div>
    </section>
  )
}
