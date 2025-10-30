import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <CaseStudies />
      <Blog />
      <Contact />
      <Footer />
    </main>
  )
}
