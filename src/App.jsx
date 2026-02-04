import { useState } from 'react'
import './App.css'
import Header from './header/header'
import Me from './main/me'
import Footer from './footer/footer'


function App() {
  // const [view, setView] = useState("Home");

  return (
    <>
    <Header />
    <div className="container">
      <Me />
      {/* <About />
      <TechStack />
      <Projects />
      <ContactMe /> */}
    </div>
    <Footer />
    </>
  )
}

export default App
