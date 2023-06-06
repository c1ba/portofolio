import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import AboutMe from "./pgs/about_me.jsx";
import Projects from "./pgs/projects.jsx";
import EducationalBackground from "./pgs/educational_background.jsx";
import "./bg.js";
import { texts } from "./common/textsAndLinks";
import { useResponsivePropertiesHook } from "./hooks/useResponsivePropertiesHook";
import { BottomHeader } from "./components/BottomHeader";
import { useLanguageHook } from "./hooks/useLanguageHook";

let nameTextStyle={
  textAlign: 'center', 
  fontWeight: '400'
}

export default function App () {

  const {projectsCSSPosition, aboutMeCSSPosition, educationalBGCSSPosition} = useResponsivePropertiesHook();
  const { getEducationalBGHeader, getProjectsHeader, getAboutMeHeader } = useLanguageHook();

  return (
      <Router>
      <div className="App">
      <div>
        <Link to="/portofolio/"><div className="opening_div"><h1 style={nameTextStyle}>{texts.name.toUpperCase()}</h1></div></Link>
      </div>
        <ul className="nav">
          <li>
            <Link className="link_main" style={{...projectsCSSPosition}} to="./projects">{getProjectsHeader()}</Link>
          </li>
          <li>
            <Link className="link_main" style={{...educationalBGCSSPosition}} to="./e_b">{getEducationalBGHeader()}</Link>
          </li>
          <li>
            <Link className="link_main" style={{...aboutMeCSSPosition}} to="./about_me">{getAboutMeHeader()}</Link>
          </li>
          <Link className="background" to="/portofolio/"></Link>
        </ul>

        <BottomHeader />

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


