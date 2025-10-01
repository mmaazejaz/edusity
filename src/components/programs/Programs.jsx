import React from 'react'
import './Programs.css'
import program1 from '../../assets/program1.jpg'
import program2 from '../../assets/program2.jpg'
import program3 from '../../assets/program3.jpg'
import programicon1 from '../../assets/programicon1.png'
const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={program1} alt="" />
            <div className='caption'>
                <img src={programicon1} alt="" />
                <p>Graduation Degree</p>
            </div>
        </div>
         <div className="program">
            <img src={program2} alt="" />
            <div className='caption'>
                <img src={programicon1} alt="" />
                <p>Master Degree</p>
            </div>
        </div>
         <div className="program">
            <img src={program3} alt="" />
            <div className='caption'>
                <img src={programicon1} alt="" />
                <p>Post Degree</p>
            </div>
        </div>
      
    </div>
  )
}

export default Programs
