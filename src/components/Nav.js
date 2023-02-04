import React from 'react'
import './Nav.css'
import { useEffect, useState } from 'react'

function Nav() {
    const [show,handleShow]=useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            window.scrollY>450?handleShow(true):handleShow(false)
        })
    },[])
  return (
    <div className={`nav ${show && "nav_black"}` }>
        <img className='logo' src="https://cdn.geekwire.com/wp-content/uploads/2014/07/Netflix_Logo_Print_FourColorCMYK.png" alt='netflix logo'></img>
    </div>
  )
}

export default Nav