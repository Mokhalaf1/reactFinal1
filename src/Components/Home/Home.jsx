import React from 'react'
import Logo from '../../assets/pic1.webp'

export default function Home() {
  return (
    
 
    <div className=' flex flex-col justify-center   h-screen  mx-0 px-0 w-screen   bg-emerald-500 items-center p-2  '>
    <img src={Logo}  alt=""  className='h-48 w-48  rounded-full justify-center ' />
     <h2 className='text-white py-3 text-5xl font-bold font-sans '>START FRAMEWORK</h2>

     <div className='flex flex-row'>
     <div class="w-32 border-t-2 border-white-500 mx-4 mt-2"> </div>
     <i class="fa-solid fa-star text-white"></i>
     <div class="w-32 border-t-2 border-white-500 mx-4 mt-2"> </div>
     </div>

     <div className='flex flex-row '>
     <h2 className='text-white mt-3'> Graphic Artist - Web Designer - Illustrator </h2>
     </div>

    </div>
   
 
  )
}



