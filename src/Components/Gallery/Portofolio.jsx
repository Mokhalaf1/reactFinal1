import React, { useState } from 'react'
import Pic from '../../assets/House.webp'
import { Link } from 'react-router-dom'
import Pic1 from '../../assets/cake.webp'
import Pic2 from '../../assets/circus.webp'


export default function Gallery() {

  let [modal, setModal] =useState(false)

  let toggleModal = () => {

    setModal (!modal)

  }
 
  return (


    <div className='flex flex-col items-center w-screen  justify-center mt-96'>

<div className='flex flex-col items-center w-screen justify-center h-full  '>

       <h2 className='text-blue-950  text-5xl font-bold font-sans mt-10  ' >Portofolio</h2>

<div className='flex flex-row py-10 '>
<div className="w-32 border-t-2 border-blue-950  mt-2"> </div>
<i className="fa-solid fa-star text-blue-950"></i>
<div className="w-32 border-t-2 border-blue-950 mt-2"> </div>
</div>
</div>


<div className='  grid grid-cols-12 gap-10  bg-slate-500 w-screen h-full ps-20 pe-10 justify-center z-30 '>


<div className='flex  col-span-4  bg-pink-500 h-60 items-center justify-center relative overflow-hidden group '> 

<img src={Pic} alt="" className='h-48 w-48  rounded-full ' />
<div className='layer absolute w-full h-full bg-green-500/100 flex items-center justify-center  group-hover: opacity-0 group-hover:opacity-80 transition-all duration-300 '>

<Link onClick={toggleModal}><i class="fa-solid fa-plus text-white text-7xl"></i></Link>

</div>

{modal && (

<div className=' modal flex flex-col items-center w-screen  justify-center  z-50 ' onClick={toggleModal}>
  
  <div>
 <img src={Pic} alt="" className='h-48 w-48  rounded-full modal-content ' /> 
 </div>
 
 </div>
)}

</div>
<div className='flex  col-span-4  bg-pink-500 h-60 items-center justify-center relative overflow-hidden group'> 

<img src={Pic1} alt="" className='h-48 w-48  rounded-full ' />
<div className='layer absolute w-full h-full bg-green-500/85 flex items-center justify-center group-hover: opacity-0 group-hover:opacity-80 transition-all duration-300 '>

<Link onClick={toggleModal}><i class="fa-solid fa-plus text-white text-7xl"></i></Link>

</div>

</div>
<div className='flex  col-span-4  bg-pink-500 h-60 items-center justify-center relative overflow-hidden group'> 

<img src={Pic2} alt="" className='h-48 w-48  rounded-full ' />
<div className='layer absolute w-full h-full bg-green-500/85 flex items-center justify-center group-hover: opacity-0 group-hover:opacity-80 transition-all duration-300 '>

<Link onClick={toggleModal}><i class="fa-solid fa-plus text-white text-7xl"></i></Link>

</div>

</div>
<div className='flex  col-span-4  bg-pink-500 h-60 items-center justify-center relative overflow-hidden group'> 

<img src={Pic} alt="" className='h-48 w-48  rounded-full ' />
<div className='layer absolute w-full h-full bg-green-500/85 flex items-center justify-center group-hover: opacity-0 group-hover:opacity-80 transition-all duration-300 '>

<Link onClick={toggleModal}><i class="fa-solid fa-plus text-white text-7xl"></i></Link>

</div>

</div>
<div className='flex  col-span-4  bg-pink-500 h-60 items-center justify-center relative overflow-hidden group'> 

<img src={Pic1} alt="" className='h-48 w-48  rounded-full ' />
<div className='layer absolute w-full h-full bg-green-500/85 flex items-center justify-center group-hover: opacity-0 group-hover:opacity-80 transition-all duration-300 '>

<Link onClick={toggleModal}><i class="fa-solid fa-plus text-white text-7xl"></i></Link>

</div>

</div>
<div className='flex  col-span-4  bg-pink-500 h-60 items-center justify-center relative overflow-hidden group'> 

<img src={Pic2} alt="" className='h-48 w-48  rounded-full ' />
<div className='layer absolute w-full h-full bg-green-500/85 flex items-center justify-center group-hover: opacity-0 group-hover:opacity-80 transition-all duration-300 '>

<Link onClick={toggleModal}><i class="fa-solid fa-plus text-white text-7xl"></i></Link>

</div>

</div>





</div>
    </div>
    
  )
}
