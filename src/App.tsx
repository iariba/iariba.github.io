import './index.css'
import Hero from './sections/hero'
import TechStack from './sections/tech'
import ProjectsSection from './sections/projects'
import Education from './sections/education'
import Contact from './sections/contact'
import { Toaster } from 'react-hot-toast'
function App() {


  return (
    <>
    <Toaster position="top-center" />
      <Hero/>
      <TechStack/>
      <ProjectsSection/>
      <Education/>
      <Contact/>
    </>
  )
}

export default App
