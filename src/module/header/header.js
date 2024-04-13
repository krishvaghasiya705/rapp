import React from 'react'
import './home.css';
import eye from '../../assets/image/istockphoto-1322220448-612x612.jpg';
import bird from '../../assets/image/download.jpeg';
import logo from '../../assets/image/favicon.png'

export default function Home() {
  return (
    <div>

      <div className='home'>
        <a href="index.js">
          <img src={logo} alt="logo" />
        </a>

        <div className="header-link">
          <a href="abc">One</a>
          <a href="abc">Two</a>
          <a href="abc">Three</a>
          <a href="abc">Four</a>
        </div>

        <button className='button-main' type='button'><p>BUTTON</p></button>



      </div>

      <div className="herobaanner">
        <div className="first-hero-box">
          <div className="box-side-margin">
            
          </div>
        </div>
        <div className="second-hero-box"></div>
      </div>











    </div>



  )
}
