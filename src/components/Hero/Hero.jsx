import React from 'react'
import './Hero.css'
import darkarow from '../../assets/aroow.png'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-text'>
            <h1>We Ensure better education for better world</h1>
            <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
            <button className='btn'>Explore More <img src={darkarow} alt="" /></button>
        </div>
        
      
    </div>
  )
}

export default Hero
