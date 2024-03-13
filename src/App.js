import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import SideMenu from './components/SideMenu/SideMenu'
import Pages from './components/Pages/Pages'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className='app'>
      <Header></Header>
      <div className='SideMenuandPage'>
      <SideMenu></SideMenu>
      <Pages></Pages>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App