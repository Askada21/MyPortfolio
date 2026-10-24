import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return <><a className="skip-link" href="#main-content">Skip to content</a><Header /><main id="main-content"><Hero /><About /><TechStack /><Projects /><Experience /><Certificates /><Contact /></main><Footer /></>
}
