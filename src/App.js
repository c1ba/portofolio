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
        <h1 style={openingText} className="opening_div">COSTACHE IOANA BRANDUSA ALEXANDRA</h1>
      </div>
        <ul className="nav">
          <li>
            <Link style={randomPos1} to="/portofolio/projects">Projects</Link>
          </li>
          <li>
            <Link style={randomPos2} to="/portofolio/e_b">Educational Background</Link>
          </li>
          <li>
            <Link style={randomPos3} to="/portofolio/about_me">About Me</Link>
          </li>
        </ul>

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

const openingText={
  textAlign: 'center', 
  fontWeight: '400'
}

if(window.innerWidth >= 933){
randomPos1={
  position: 'absolute',
  left: 500 + Math.floor(Math.random() * Math.floor(window.innerWidth - 650)),
  top: Math.floor(Math.random() * Math.floor(window.innerHeight-100)),
  textDecoration: 'none',
  animation: 'trans 1s forwards'
}

randomPos2={
  position: 'absolute',
  left: 500 + Math.floor(Math.random() * Math.floor(window.innerWidth - 700)),
  top: Math.floor(Math.random() * Math.floor(window.innerHeight-100)),
  textDecoration: 'none',
  animation: 'trans 1s forwards'
}

randomPos3={
  position: 'absolute',
  left: 500 + Math.floor(Math.random() * Math.floor(window.innerWidth - 700)),
  top: Math.floor(Math.random() * Math.floor(window.innerHeight-100)),
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

