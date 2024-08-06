import React from 'react'

export default function Modal() {

  
  let [modal, setModal] =useState(false)

  let toggleModal = () => {

    setModal (!modal)


  return (
    <div>

<div className='modal flex flex-col items-center w-screen  justify-center  z-50 '>
 <img src={Pic} alt="" className='h-48 w-48  rounded-full modal-content ' /> 
 </div>

    </div>
  )
}
}
