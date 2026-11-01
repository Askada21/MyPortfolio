import HomePage from './pages/HomePage'
import PageNotice from './components/PageNotice'
import { pageRoutes } from './data/navigation'
import { usePageRoute } from './hooks/usePageRoute'

export default function App() {
  const route = usePageRoute()
  const futurePage = pageRoutes.find(({ path }) => path === route)

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <HomePage />
      {futurePage && <PageNotice key={route} title={futurePage.title} />}
    </>
  )
}
