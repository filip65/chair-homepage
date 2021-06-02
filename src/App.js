import { useState, useEffect, useRef } from "react";
import "./App.css";
import heroes from "./data";

import imageAboutDark from "./images/image-about-dark.jpg";
import imageAboutLight from "./images/image-about-light.jpg";
import logo from "./images/logo.svg";
import arrowIcon from "./images/icon-arrow.svg";
import leftIcon from "./images/icon-angle-left.svg";
import rightIcon from "./images/icon-angle-right.svg";
import hamburgerIcon from "./images/icon-hamburger.svg";
import closeIcon from "./images/icon-close.svg";

function App() {
  const navbar = useRef(null);

  const [index, setIndex] = useState(1);

  const openNavbar = () => {
    navbar.current.classList.add("navbar-wraper-open");
    navbar.current.classList.remove("navbar-wraper-close");
  };

  const closeNavbar = () => {
    navbar.current.classList.remove("navbar-wraper-open");
    navbar.current.classList.add("navbar-wraper-close");
  };

  const nextImage = () => {
    setIndex((oldIndex) => {
      if (oldIndex === 2) {
        return 0;
      } else {
        return oldIndex + 1;
      }
    });
  };

  const previousImage = () => {
    setIndex((oldIndex) => {
      if (oldIndex === 0) {
        return 2;
      } else {
        return oldIndex - 1;
      }
    });
  };

  useEffect(() => {
    const id = setTimeout(() => {
      nextImage();
    }, [3000]);

    return () => {
      clearTimeout(id);
    };
  }, [index]);

  return (
    <div className="App">
      <div className="navbar-wraper navbar-wraper-close" ref={navbar}>
        <div className="container">
          <img src={closeIcon} alt="close icon" onClick={closeNavbar} />
          <nav>
            <ul>
              <li>
                <a href="/#">home</a>
              </li>
              <li>
                <a href="/#">shop</a>
              </li>
              <li>
                <a href="/#">about</a>
              </li>
              <li>
                <a href="/#">contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <nav className="navbar">
        <img
          src={hamburgerIcon}
          alt="hamburger icon"
          className="mobile"
          onClick={openNavbar}
        />
        <img src={logo} alt="logo" id="logo" />
        <ul className="desktop">
          <li>
            <a href="/#">home</a>
          </li>
          <li>
            <a href="/#">shop</a>
          </li>
          <li>
            <a href="/#">about</a>
          </li>
          <li>
            <a href="/#">contact</a>
          </li>
        </ul>
      </nav>

      <div className="slider">
        <div className="hero">
          <img
            src={heroes[index].image_desktop}
            alt="something with chair"
            className="desktop first"
          />
          <img
            src={heroes[index].image_mobile}
            alt="chair"
            className="mobile"
          />
          <div className="buttons mobile">
            <button onClick={previousImage}>
              <img src={leftIcon} alt="arrow left" />
            </button>
            <button onClick={nextImage}>
              <img src={rightIcon} alt="arrow right" />
            </button>
          </div>
        </div>

        <div className="slider-text">
          <div className="text-wraper">
            <h1>{heroes[index].title}</h1>
            <p>{heroes[index].text}</p>
            <a href="/#">
              Shop now <img src={arrowIcon} alt="arrow icon" />
            </a>
          </div>

          <div className="buttons desktop">
            <button onClick={previousImage}>
              <img src={leftIcon} alt="arrow left" />
            </button>
            <button onClick={nextImage}>
              <img src={rightIcon} alt="arrow right" />
            </button>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="image">
          <img src={imageAboutDark} alt="about dark" />
        </div>
        <div className="about-text">
          <div className="container">
            <h2>About our furniture</h2>
            <p>
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </div>
        </div>
        <div className="image">
          <img src={imageAboutLight} alt="about dark" />
        </div>
      </div>
    </div>
  );
}

export default App;
