import SectionLabel from '../ui/SectionLabel'
import { portfolioItems } from '../../data/portfolio'

export default function Portfolio() {
  return (
    <section id="portfolio" className="border-b border-dark-border px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Our Work</SectionLabel>
        <h2 className="mt-1 text-2xl font-bold text-white">Portfolio</h2>
        <p className="mt-1 text-xs text-gray-500">
          Client projects & our own apps on the App Store
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
          {portfolioItems.map((item) => {
            const cardContent = (
              <>
                <div className="flex h-32 items-center justify-center bg-dark-subtle">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-[9px] tracking-widest text-gray-700">
                      [ IMG ]
                    </span>
                  )}
                </div>
                <div className="p-3">
                  <p className="text-xs font-bold text-white">{item.name}</p>
                  <p className="mt-0.5 text-[10px] text-gray-500">
                    {item.category} ·{' '}
                    <span className={item.type === 'appstore' ? 'text-brand' : 'text-gray-600'}>
                      {item.type === 'appstore' ? 'App Store' : 'Client'}
                    </span>
                  </p>
                </div>
              </>
            )
            return item.url ? (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded bg-dark-card transition-opacity hover:opacity-80"
              >
                {cardContent}
              </a>
            ) : (
              <div
                key={item.id}
                className="group overflow-hidden rounded bg-dark-card transition-opacity hover:opacity-80"
              >
                {cardContent}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
