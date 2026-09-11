import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Works from './components/Works'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

import './style.css'

function App() {
  return (    
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Works />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  ) 
}

export default App
