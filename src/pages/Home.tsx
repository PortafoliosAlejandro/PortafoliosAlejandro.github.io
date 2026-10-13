import { About } from '../components/organisms/About'
import { Contact } from '../components/organisms/Contact'
import { Experience } from '../components/organisms/Experience'
import { Hero } from '../components/organisms/Hero'
import { Projects } from '../components/organisms/Projects'
import { Skills } from '../components/organisms/Skills'

/** Página única del portafolio: todas las secciones en orden. */
export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  )
}
