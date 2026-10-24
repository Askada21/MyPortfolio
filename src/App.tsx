import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'

export default function App() {
  return <><a className="skip-link" href="#main-content">Skip to content</a><Header /><main id="main-content"><Hero /><About /><TechStack /><Projects /></main></>
}
