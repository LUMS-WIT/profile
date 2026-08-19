import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import ResearchDomains from './components/ResearchDomains'
import SensorNetwork from './components/SensorNetwork'
import ImpactStories from './components/ImpactStories'
import Projects from './components/Projects'
import Trainings from './components/Trainings'
import People from './components/People'
import PartnersFooter from './components/PartnersFooter'

function App() {
  return (
    <div className="bg-paper text-ink">
      <Nav />
      <Hero />
      <About />
      <ResearchDomains />
      <SensorNetwork />
      <ImpactStories />
      <Projects />
      <Trainings />
      <People />
      <PartnersFooter />
    </div>
  )
}

export default App
