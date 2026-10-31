import Header from './components/Header'
import { CanvaAssetFilters } from './components/CanvaArtwork'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <CanvaAssetFilters />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
