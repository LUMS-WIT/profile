import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Research from './pages/Research'
import ResearchTheme from './pages/ResearchTheme'
import Technology from './pages/Technology'
import Impact from './pages/Impact'
import ProjectsPage from './pages/ProjectsPage'
import TrainingPage from './pages/TrainingPage'
import PeoplePage from './pages/PeoplePage'
import News from './pages/News'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="research" element={<Research />} />
          <Route path="research/:id" element={<ResearchTheme />} />
          <Route path="technology" element={<Technology />} />
          <Route path="impact" element={<Impact />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="training" element={<TrainingPage />} />
          <Route path="people" element={<PeoplePage />} />
          <Route path="news" element={<News />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
