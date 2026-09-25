import { Container } from '../components/ui/Surface'
import { Hero } from '../sections/Hero'
import { About } from '../sections/About'
import { Expertise } from '../sections/Expertise'
import { Experience } from '../sections/Experience'
import { FeaturedProjects } from '../sections/FeaturedProjects'
import { GitHub } from '../sections/GitHub'
import { Credentials } from '../sections/Credentials'
import { Contact } from '../sections/Contact'
export default function HomePage() {
  return (
    <Container className="home">
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <FeaturedProjects />
      <GitHub />
      <Credentials />
      <Contact />
    </Container>
  )
}
