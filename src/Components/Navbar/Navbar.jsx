import React from 'react'
import { Link } from 'react-router-dom'



export default function Navbar() {
  return (

    <div>

    
      <nav className =' shadow w-full fixed top-0 right-0 left-0 py-4  bg-blue-950 z-20 grid-cols-12' >

<div className = 'container flex-row mt-0 '>

<ul className =' flex flex-row w-screen justify-evenly  '>

<li >  <Link to={'/'} className=' text-white' > START FRAMEWORK </Link> </li>
<li> <Link to={'/about'} className=' text-white'> ABOUT </Link> </li>
<li> <Link to={'/portofolio'} className=' text-white'> PORTOFOLIO  </Link> </li>
<li> <Link to={'/contact'} className=' text-white'> CONTACT </Link> </li>

</ul>
</div>
    </nav>
    </div>
  
  )
}
