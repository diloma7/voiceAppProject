import React from 'react'
import './sideStyle.scss'


function Sidebar() {
  return (
    <div className="sidePicture">
      <img src={require("../components/loginPage/images/unsplash.jpg"
      )} alt="()" />
    </div>
  )
}

export default Sidebar