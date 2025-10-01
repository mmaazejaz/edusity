import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

const App = () => {

   const [playState,setPlayState] = useState(false);
  return (
    <div>
    <Navbar/>
    <Hero/>
    <div className='container'>
         <Title subtitle='Our Program' title='What We Offer'/>
          <Programs/>
          <About setPlayState={setPlayState}/>
         <Title subtitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subtitle='TESTIMONALS' title='Why Student Says'/>
        <Testimonials/>
        <Title subtitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
        <div>
        <VideoPlayer playState={playState} setPlayState={setPlayState}/>
        </div>
    </div>

    </div>
  )
}

export default App
