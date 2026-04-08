import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
      </main>
    </div>
  )
}
