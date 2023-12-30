import React from "react"
import Aboutme from "./components/Aboutme"
import Header from "./components/Header"
import Herosection from "./components/Herosection"
import Project from "./components/Project"
import Contactme from "./components/Contactme"

const App:React.FC = () => {
  return (
   <div>
    <Header />
    <Herosection />
    <Aboutme />
    <Project/>
    <Contactme />
  </div>
  )
}

export default App
