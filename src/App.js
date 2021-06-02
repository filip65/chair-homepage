import {useState, useRef} from 'react'
import './App.css';
import image1 from './images/desktop-image-hero-1.jpg'
import image1Mobile from './images/mobile-image-hero-1.jpg'

import imageAboutDark from './images/image-about-dark.jpg'
import imageAboutLight from './images/image-about-light.jpg'

import logo from './images/logo.svg'

import arrowIcon from './images/icon-arrow.svg'
import leftIcon from './images/icon-angle-left.svg'
import rightIcon from './images/icon-angle-right.svg'
import hamburgerIcon from './images/icon-hamburger.svg'
import closeIcon from './images/icon-close.svg'

function App() {

  const navbar = useRef(null);

  const openNavbar = () => {
    navbar.current.classList.add('navbar-wraper-open');
    navbar.current.classList.remove('navbar-wraper-close');
  }

  const closeNavbar = () => {
    navbar.current.classList.remove('navbar-wraper-open');
    navbar.current.classList.add('navbar-wraper-close');
  }

  return (
    <div className="App">
      <div className="navbar-wraper navbar-wraper-close" ref={navbar}>
          <div className="container">
            <img src={closeIcon} alt="close icon" onClick={closeNavbar}/>
            <nav>
              <ul>
                <li>
                  <a href="#">home</a>
                </li>
                <li>
                  <a href="#">shop</a>
                </li>
                <li>
                  <a href="#">about</a>
                </li>
                <li>
                  <a href="#">contact</a>
                </li>
              </ul>
            </nav>
          </div>
      </div>
      <nav className="navbar">
        <img src={hamburgerIcon} alt="hamburger icon" onClick={openNavbar}/>
        <img src={logo} alt="logo" id="logo"/>
      </nav>

      <div className="slider">
        <div className="hero">
          <img src={image1} alt="image" className='desktop'/>
          <img src={image1Mobile} alt="" className='mobile'/>
          <div className="buttons">
            <button>
              <img src={leftIcon} alt="arrow left" />
            </button>
            <button>
              <img src={rightIcon} alt="arrow right" />
            </button>
          </div>
        </div>

        <div className="slider-text">
            <div className="text-wraper">
              <h1>Discover innovative ways to decorate</h1>
              <p>We provide unmatched quality, comfort, and style for property owners across the country. 
  Our experts combine form and function in bringing your vision to life. Create a room in your 
  own style with our collection and make your property a reflection of you and what you love.</p>
            <a href="#">Shop now <img src={arrowIcon} alt="arrow icon" /></a>
            </div>
          </div>
      </div>

      <div className="about">
        <div className="image">
          <img src={imageAboutDark} alt="about dark image" />
        </div>
        <div className="about-text">
          <div className="container">
              <h2>About our furniture</h2>
              <p>Our multifunctional collection blends design and function to suit your individual taste.
  Make each room unique, or pick a cohesive theme that best express your interests and what
  inspires you. Find the furniture pieces you need, from traditional to contemporary styles
  or anything in between. Product specialists are available to help you create your dream space.</p>
          </div>
        </div>
        <div className="image">
          <img src={imageAboutLight} alt="about dark image" />
        </div>
      </div>

    </div>
  );
}

export default App;
