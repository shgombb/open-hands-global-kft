import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  )
}
