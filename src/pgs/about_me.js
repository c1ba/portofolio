import React from 'react';
import bg from '../img/pp.png';
import { AboutMeText } from '../components/AboutMeText';
import { defaultSideBarStyling } from '../common/cssProperties';

 const AboutMe = () => {

  return (
    <div style={{...defaultSideBarStyling, backgroundImage: 'url('+bg+')', backgroundSize: 'cover'}} className="text_box">
    <div className="content" style={{marginTop: '150px'}}>
    <AboutMeText style={{marginTop: '75px'}} text={"Hello, my name is Alex, I am a student in my terminal year and I crave to make possible whatever seems... well... impossible. Since I've started my journey in web development, I've been experimenting with whatever programming languages my path has crossed into in order to find what fits me best. Recently, I've been working for one year at a global tech firm with ReactJS as core skill."} />
    </div>
  </div>
)
}

export default AboutMe;