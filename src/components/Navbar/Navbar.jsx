import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
const Navbar = () => {

  const [sticky,setsticky] = useState(false)
  useEffect(()=>{
window.addEventListener('scroll',()=>{
  window.scrollY > 500 ? setsticky(true) : setsticky(false)
})
  },[])
  return (
    <nav className={`container ${sticky ? `dark-nav` : ' '}`}> 
      <img src={logo} alt="logo" className='logo' />
      <ul>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonals' smooth={true} offset={-260} duration={500}>Testimonals</Link></li>
        <li> <Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>

      </ul>
    </nav>
  )
}

export default Navbar
