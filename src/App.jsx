import './App.css'
import Header from './components/sections/Header'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import About from './components/sections/About'
import Download from './components/sections/Download'
import Support from './components/sections/Support'
import Footer from './components/sections/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <About />
      <Download />
      <Support />
      <Footer />
    </div>
  )
}

export default App

