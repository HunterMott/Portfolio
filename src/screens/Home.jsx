import React from "react";
import "../styles/home.css";
import HunterImg from '../assets/HunterSLC.jpg'
import Layout from "../components/Layout";

const Home = () => {
  return (
    <div>
      <div className="hero-div">
        <header className="header">
          <h1 className="logo">HM</h1>
          <a href="/contact" className="contact-link">
            Contact Me
          </a>
        </header>
        <div className='hero-text'>
          <h1>Software Engineer, Front-end Developer</h1>
          <p>I write clean and efficient code and love doing it!</p>
        </div>
          {/* <img className='hunter-hero' src={HunterImg} /> */}
      </div>
      <div className='about-me-div'>
        <>
        <h1 className='intro-h1'>Hi, i'm Hunter. Nice to meet you!</h1>
          <p className='intro-h1'>For as long as I can remember I have loved to learn. Growing up I was thrilled to learn about absolutely anything, determined to know how things worked and how they were built. This determination has been the driving force behind becoming a software engineer. I am a results-oriented professional with a proven knowledge of full stack web design and problem solving. These things combined with my drive to learn something new everyday has been a gratifying experience as I take on new challenges.</p>
          </>
      </div>
      <div className='tech-skills'>
        <h1>Front-end Developer</h1>
        <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
        <h3>Languages:</h3>
        <p>HTML, CSS, JavaScript, React.js, Node, Express, MongoDB, Ruby, Ruby on rails</p>
        <h3>Dev Tools:</h3>
        <p>VSCode</p>
        <p>Git</p>
        <p>Github</p>
        <p>Terminal</p>
        <p>Material-UI</p>
        <p>NPM</p>
      </div>
    </div>
  );
};

export default Home;
