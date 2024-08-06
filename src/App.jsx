import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Portofolio from './Components/Gallery/Portofolio'
import Layout from './Components/Layout/Layout'
import {createBrowserRouter }  from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Notfound from './Components/Not found/Notfound'
import Contact from './Components/Contact/Contact'


function App() {

 let routes= createBrowserRouter([
    {path:'/', element:<Layout></Layout>, children: [
    {path:'/', element:<Home></Home>},
    {path:'/about', element:<About></About>},
    {path:'/portofolio', element:<Portofolio></Portofolio>},
    {path:'/contact', element:<Contact></Contact>},
    {path:'*', element:<Notfound></Notfound>}]
  
}])

  return (
   
     <RouterProvider router= {routes} ></RouterProvider>
   
  )
}

export default App
