import {  } from 'react'
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom'
import './styles/global.css'

function App() {


  return (
    <>
    <Nav/>
    <Outlet/>
    </>
  
    
  )
}

export default App