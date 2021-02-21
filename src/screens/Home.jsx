import React from "react";
import "../styles/home.css";
import HunterImg from "../assets/HunterSLC.jpg";
import Layout from "../components/Layout";
import { Link } from "react-scroll";
import ContactUsForm from "../components/ContactUsForm";
import { GitHub, LinkedIn } from "@material-ui/icons";
import { Button } from "@material-ui/core";

const Home = () => {
  return (
    <div>
      <div className="hero-div">
        <header className="header" id="header">
          <h1 className="logo">HM</h1>
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            className="contact-link"
          >
            Contact Me
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={1000}
            className="project-link"
          >
            My Projects
          </Link>
          <Link to="about" smooth={true} duration={1000} className="about-link">
            About Me
          </Link>
        </header>
        <div className="hero-text">
          <h1>Software Engineer, Front-end Developer</h1>
          <p>I write clean and efficient code and love doing it!</p>
        </div>
        {/* <img className='hunter-hero' src={HunterImg} /> */}
      </div>
      <div className="about-me-div" id="about">
        <>
          <h1 className="intro-h1">Hi, I'm Hunter. Nice to meet you!</h1>
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
      <div className="project-header" id="projects">
        <h2>These are my recent projects!</h2>
        <p>
          To see more work send me a message from my{" "}
          <a href="/contact">contact</a> page!
        </p>
      </div>
      <div className="project-flex">
        <div className="project-div">
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
            <div className='project-buttons'>
              <Button
                href="https://geosmin.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Site
              </Button>
              <Button                href="https://github.com/jeri-dilts/geosmin"
                target="_blank"
                rel="noopener noreferrer">GitHub</Button>
            </div>
        </div>
        <div className="project-div">
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
            <div className='project-buttons'>
              <Button
                href="http://groupdeck.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Site
              </Button>
              <Button                href="https://github.com/HunterMott/GroupDeck"
                target="_blank"
                rel="noopener noreferrer">GitHub</Button>
            </div>
        </div>
        <div className="project-div">
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
            <div className='project-buttons'>
              <Button
                href="https://distracted-golick-7c5f77.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Site
              </Button>
              <Button                href="https://github.com/HunterMott/noteworthy"
                target="_blank"
                rel="noopener noreferrer">GitHub</Button>
            </div>
        </div>
        <div className="project-div">
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
            <div className='project-buttons'>
              <Button
                href="https:huntermott.github.io/BetterWeather/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Site
              </Button>
              <Button                href="https://github.com/HunterMott/BetterWeather"
                target="_blank"
                rel="noopener noreferrer">GitHub</Button>
            </div>
        </div>
      </div>
      <ContactUsForm />
      <div className="social-links">
        <a
          href="https://github.com/HunterMott"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </a>
        <a
          href="https://www.linkedin.com/in/huntermott/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </a>
      </div>
      <a
        href="https://drive.google.com/file/d/1PaMworqazqZXScpl3mw-xYM2phHTO6_M/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
      <div className="footer">
        <Link to="header" smooth={true} duration={1000}>
          To the top!
        </Link>
      </div>
    </div>
  );
};

export default Home;
