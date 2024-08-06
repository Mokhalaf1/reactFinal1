import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'



export default function Layout() {
  return (
    
    <div className='flex flex-col' >
<Navbar/>
<Outlet/>


<footer className=' flex flex-col bg-blue-800 w-screen '> 

<div className='footer-home flex flex-row justify-between ps-20 pe-20 '>

<div className='flex flex-col px-5  '>
<h2 className='text-white text-3xl font-bold py-2'>Location</h2>
<h5 className='text-white py-2'>2215 John Daniel Drive</h5>
<h5 className='text-white py-2'>Clark, MO 65243</h5>

</div>

<div className='flex flex-col  items-center px-5'>
<h2 className='text-white text-3xl font-bold py-2'>Around The Web</h2>
<div className='icons flex flex-row'>
<i class="fa-brands fa-facebook text-white px-2 text-2xl"></i>
<i class="fa-brands fa-twitter text-white px-2 text-2xl"></i>
<i class="fa-brands fa-linkedin  text-white px-2 text-2xl"></i>
<i class="fa-solid fa-earth-americas  text-white px-2 text-2xl"></i>
</div>
</div>


<div className='flex flex-col px-5  '>
<h2 className='text-white text-3xl font-bold py-2'>ABOUT FREELANCER</h2>
<h5 className='text-white py-2'>Freelance is a free to use, licensed Bootstrap theme</h5>
<h5 className='text-white py-2'>created by Route</h5>

</div>

</div>

<div className='footer-home1 flex flex-row  bg-blue-950 w-full h-full justify-center  '>

<h4 className='text-white pe-48'> Copyright © Your Website 2021</h4>

</div>

</footer>

</div>
  )
}
