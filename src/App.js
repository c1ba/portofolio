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
            <h2>E-mail: costachealexandra28@gmail.com</h2>
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
  bottom: '0'
}

const contact={
  display: 'flex',
  justifyContent: 'space-around',
  width: '100%',
  height: 'auto',
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
  left: 500 + Math.floor(Math.random() * Math.floor(window.innerWidth - 650)),
  top: Math.floor(Math.random() * Math.floor(window.innerHeight-200)),
  textDecoration: 'none',
  animation: 'trans 1s forwards'
}

randomPos2={
  position: 'absolute',
  left: 500 + Math.floor(Math.random() * Math.floor(window.innerWidth - 700)),
  top: Math.floor(Math.random() * Math.floor(window.innerHeight-200)),
  textDecoration: 'none',
  animation: 'trans 1s forwards'
}

randomPos3={
  position: 'absolute',
  left: 500 + Math.floor(Math.random() * Math.floor(window.innerWidth - 700)),
  top: Math.floor(Math.random() * Math.floor(window.innerHeight-200)),
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

console.log(randomPos1.top);


