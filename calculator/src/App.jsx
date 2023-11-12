import {  } from 'react'
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom'
import './styles/global.css'
import Footer from './routers/Footer'

function App() {


  return (
    <>
    <Nav/>
    <Outlet/>
    <Footer/>
    </>
  
    
  )
}

export default App