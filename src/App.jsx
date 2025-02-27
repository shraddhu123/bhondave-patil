import {Route, Routes} from "react-router"
import Admission from "./pages/Admission.jsx"
import About from "./pages/About.jsx"
import Home from "./pages/Home.jsx"
import Header from   "./components/Header.jsx"

import Mandatory from "./pages/Mandatory.jsx"
import Academic from "./pages/Academic.jsx"

import Gallery from "./pages/Gallery.jsx"

import Footer from "./components/Footer.jsx"
import ContactUs from "./pages/Contactus.jsx"
import Infrastructure from "./pages/Infrastructure.jsx"
import Achivement from "./pages/Achivement.jsx"

function App() {
 
  return (
    <>
      <Header/>
       <Routes>
  <Route index element={<Home />} />
  <Route path="/About" element={<About />} />
  <Route path="/Admission" element={<Admission/>}/>
  <Route path="/mandatory" element={<Mandatory/>}/>
  <Route path="/academic" element={<Academic/>}/>
  <Route path="/achievemet" element={<Achivement />} />

  <Route path="/infrastructure" element={<Infrastructure/>}/>
  <Route path="/gallery" element={<Gallery/>}/>
  <Route path="/contactus" element={<ContactUs/>}/>



  </Routes>

    <Footer/>
  
    </>
  )
}

export default App
