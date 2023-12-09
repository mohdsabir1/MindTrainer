import React from "react"
import {Routes, Route} from 'react-router-dom'
import { Navbar } from "./Component/Navbar"
import { Footer } from "./Component/Footer"
import { Home } from "./Pages/Home/Home"
import { ExpertNetwork } from "./Pages/ExpertNetwork/ExpertNetwork"
import { IntegralLearning } from "./Pages//IntegralLearning/IntegralLearning"
import { Impact } from "./Pages/Impact/Impact"
import { Blog } from "./Pages/Blog/Blog"
import { Contact } from "./Pages/Contact/Contact"
import Buildable from "./Pages/Buildable/Buildable"
import VideoLesson from "./Pages/VideoLesson/VideoLesson"




function App() {


  return (
    <>
     <Navbar />
     <Routes >
     <Route path="/" element={<Home />} />
    <Route path="/buildableapproach" element={<Buildable />} />
     <Route path="/expertnetwork" element={<ExpertNetwork />} />
      <Route path="/videolessonmaker" element={<VideoLesson />} />
     <Route path="/integrallearning" element={<IntegralLearning />} />
     <Route path="/impact" element={<Impact />} />
     <Route path="/blog" element={<Blog />} />
     <Route path="/contact" element={<Contact />} />
     </Routes>
   
     <Footer />
    </>
  )
}

export default App
