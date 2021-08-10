import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import AboutMe from "./pgs/about_me.js";
import Projects from "./pgs/projects.js";
import EducationalBackground from "./pgs/educational_background.js";
import githubIcon from "./img/github_icon.png";
import codewarsIcon from "./img/codewars_icon.png";
import linkedInIcon from "./img/linkedin_icon.png";
import "./bg.js";

export default function BasicExample() {
  return (
    <Router>
      <div className="App">
      <div>
        <Link to="/portofolio/"><div className="opening_div"><h1 style={openingText}>COSTACHE IOANA BRANDUSA ALEXANDRA</h1></div></Link>
      </div>
        <ul className="nav">
          <li>
            <Link className="link_main" style={randomPos1} to="/portofolio/projects">Projects</Link>
          </li>
          <li>
            <Link className="link_main" style={randomPos2} to="/portofolio/e_b">Educational Background</Link>
          </li>
          <li>
            <Link className="link_main" style={randomPos3} to="/portofolio/about_me">About Me</Link>
          </li>
          <Link className="background" to="/portofolio/"></Link>
        </ul>

        <div style={contactCol}>
            <h2 style={{textAlign: 'center'}}>E-mail: costachealexandra28@gmail.com</h2>
            <div style={contactRow}>
              <img onClick={()=>window.open("https://www.codewars.com/users/Ciba", "_blank")} src={codewarsIcon} style={{width: '40px'},{height: '40px'}}></img>
              <img onClick={()=>window.open("https://github.com/c1ba", "_blank")} src={githubIcon} style={{width: '40px'},{height: '40px'}}></img>
              <img onClick={()=>window.open("https://www.linkedin.com/in/costache-i-b-alexandra/", "_blank")} src={linkedInIcon} style={{width: '40px'},{height: '40px'}}></img>
            </div>
        </div>

        <hr />

        <Switch>
          <Route path="/portofolio/projects">
            <Projects />
          </Route>
          <Route path="/portofolio/e_b">
            <EducationalBackground />
          </Route>
          <Route path="/portofolio/about_me">
            <AboutMe />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

let randomPos1, randomPos2, randomPos3;
const contactCol={
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'bottom',
  alignItems: 'center',
  width: '100%',
  height: 'auto',
  position: 'absolute',
  bottom: '0',
  zIndex: '1'
}

const contactRow={
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  width: '25%'
}

let openingText={
  textAlign: 'center', 
  fontWeight: '400'
}

if (window.innerWidth <= 388){
  openingText={
    textAlign: 'center', 
    fontWeight: '400',
    fontSize: '20px'
  }
}

if(window.innerWidth >= 933){
randomPos1={
  position: 'absolute',
  left: 500 + Math.floor(Math.random() * Math.floor(window.innerWidth -950)),
  top: 250 + Math.floor(Math.random() * Math.floor(window.innerHeight-400)),
  textDecoration: 'none',
  animation: 'trans 1s forwards'
}

randomPos2={
  position: 'absolute',
  left: 500 + Math.floor(Math.random() * Math.floor(window.innerWidth - 1000)),
  top: 300 + Math.floor(Math.random() * Math.floor(window.innerHeight-400)),
  textDecoration: 'none',
  animation: 'trans 1s forwards'
}

randomPos3={
  position: 'absolute',
  left: 500 + Math.floor(Math.random() * Math.floor(window.innerWidth - 1000)),
  top: 250 + Math.floor(Math.random() * Math.floor(window.innerHeight-400)),
  textDecoration: 'none',
  animation: 'trans 1s forwards'
}

}
else{
  randomPos1={
    textDecoration: 'none'
  }
  
  randomPos2={
    textDecoration: 'none'
  }
  
  randomPos3={
    textDecoration: 'none'
  }
}


