import SectionLabel from '../ui/SectionLabel'
import { services } from '../../data/services'

export default function Services() {
  return (
    <section id="services" className="border-b border-dark-border px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>What We Do</SectionLabel>
        <h2 className="mt-1 text-2xl font-bold text-white">Our Services</h2>
        <div className="mt-8 flex flex-col gap-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded bg-dark-card p-5 border-l-2 border-dark-border hover:border-brand transition-colors"
            >
              <h3 className="text-sm font-bold text-white">{service.title}</h3>
              <p className="mt-1 text-xs text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
