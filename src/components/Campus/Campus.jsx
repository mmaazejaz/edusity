import React from 'react'
import './Campus.css'
import gallery_1 from "../../assets/campus-1.png"
import gallery_2 from "../../assets/campus-2.png"
import gallery_3 from "../../assets/campus-3.png"
import gallery_4 from "../../assets/campus-4.png"
import darkarow from '../../assets/arow2.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className='gallery'>
        <img src={gallery_1} alt="Campus 1" />
        <img src={gallery_2} alt="Campus 2" />
        <img src={gallery_3} alt="Campus 3" />
        <img src={gallery_4} alt="Campus 4" />
      </div>
        <button className='btn dark-btn'>See More Here <img src={darkarow} alt="" /></button>
    </div>
  )
}

export default Campus
