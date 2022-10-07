import React from 'react'
import Sidebar from '../../sidecomponent/sidebar';
import Login from '../loginPage/login';
import './homeStyle.scss'

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Login />
      </div>
    </div>
  )
}

export default Home