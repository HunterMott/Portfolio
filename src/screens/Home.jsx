import React from "react";
import "../styles/home.css";
import HunterImg from "../assets/HunterSLC.jpg";
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
        <div className="hero-text">
          <h1>Software Engineer, Front-end Developer</h1>
          <p>I write clean and efficient code and love doing it!</p>
        </div>
        {/* <img className='hunter-hero' src={HunterImg} /> */}
      </div>
      <div className="about-me-div">
        <>
          <h1 className="intro-h1">Hi, i'm Hunter. Nice to meet you!</h1>
          <p className="intro-h1">
            For as long as I can remember I have loved to learn. Growing up I
            was thrilled to learn about absolutely anything, determined to know
            how things worked and how they were built. This determination has
            been the driving force behind becoming a software engineer. I am a
            results-oriented professional with a proven knowledge of full stack
            web design and problem solving. These things combined with my drive
            to learn something new everyday has been a gratifying experience as
            I take on new challenges.
          </p>
        </>
      </div>
      <div className="tech-skills">
        <h1>Front-end Developer</h1>
        <p>
          I like to code things from scratch, and enjoy bringing ideas to life
          in the browser.
        </p>
        <h3>Languages:</h3>
        <p>
          HTML, CSS, JavaScript, React.js, Node, Express, MongoDB, Ruby, Ruby on
          rails
        </p>
        <h3>Dev Tools:</h3>
        <p>VSCode</p>
        <p>Git</p>
        <p>Github</p>
        <p>Terminal</p>
        <p>Material-UI</p>
        <p>NPM</p>
      </div>
      <div className="project-header">
        <h2>These are my recent projects!</h2>
        <p>
          To see more work send me a message from my{" "}
          <a href="/contact">contact</a> page!
        </p>
      </div>
      <div className="project-flex">
        <div className="project-div">
          <a
            className="project-link"
            href="http://https://geosmin.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Geosmin</h3>
            <img
              className="project-img"
              src="https://moorlandseater.com/wp-content/uploads/2019/05/red-cabbage-microgreens-moorlands-eater-DSC02617.jpg"
            />
            <p>
              Geosmin is a gourmet mushroom and microgreen urban farm store.
              This vending React App, collectively built by three team members,
              exhibits authentication and full CRUD using Express, Mongoose, and
              MongoDB. In a git flow style we've adhered to strict React
              architecture for a clean and easy working environment.
            </p>
          </a>
        </div>
        <div className="project-div">
          <a
            className="project-link"
            href="http://groupdeck.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>GroupDeck</h3>
            <img
              className="project-img"
              src="https://images.unsplash.com/photo-1559223607-b4d0555ae227?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1"
            />
            <p>
              GroupDeck is a web application built to help people find other
              people with similar interests! Once you make an account you can
              create your own event for people to see and come check out or
              check out others events to see if you would be interested in going
              to their event!
            </p>
          </a>
        </div>
        <div className="project-div">
          <a
            className="project-link"
            href="https://distracted-golick-7c5f77.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>NoteWorthy</h3>
            <img
              className="project-img"
              src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1"
            />
            <p>
              This is a simple productivity app built with react to help
              increase efficiency and decrease time waste by allowing you to
              create a to do list or even take notes!
            </p>
          </a>
        </div>
        <div className="project-div">
          <a
            className="project-link"
            href="https:huntermott.github.io/BetterWeather/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>BetterWeather</h3>
            <img
              className="project-img"
              src="https://images.unsplash.com/photo-1592210454359-9043f067919b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1"
            />
            <p>
              This web application will take your zip code and return current
              detailed weather information and weather updates every 3 hours for
              up to 5 days in advanced! (Weather Condition, High and low, Feels
              like, Wind speeds)
            </p>
          </a>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default Home;
