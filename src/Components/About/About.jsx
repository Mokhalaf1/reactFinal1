import React from 'react'

export default function About() {
  return (
    <div className=' flex flex-col justify-center   h-screen  mx-0 px-0 w-screen   bg-emerald-500 items-center mt-40  '>

     <h2 className='text-white  text-5xl font-bold font-sans py-10'>About Component</h2>

     <div className='flex flex-row '>
     <div class="w-32 border-t-2 border-white-500 mx-4 mt-2"> </div>
     <i class="fa-solid fa-star text-white"></i>
     <div class="w-32 border-t-2 border-white-500 mx-4 mt-2"> </div>
     </div>

     <div className='flex flex-row  w-full px-20'>
     
     <div className='text-white  text-lg  font-sans py-10'>
<p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>

     </div>

     <div className='text-white  text-lg  font-sans py-10'>
<p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>

     </div>

     </div>

    </div>

    
  )
}
