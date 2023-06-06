import React from 'react';
import bg from '../img/pp.png';
import { AboutMeText } from '../components/AboutMeText';
import { defaultSideBarStyling } from '../common/cssProperties';
import { useLanguageHook } from '../hooks/useLanguageHook';

 const AboutMe = () => {

  const { getAboutMeDesccription} = useLanguageHook();

  return (
    <div style={{...defaultSideBarStyling, backgroundImage: 'url('+bg+')', backgroundSize: 'cover'}} className="text_box">
    <div className="content" style={{marginTop: '150px'}}>
    <AboutMeText style={{marginTop: '75px'}} text={getAboutMeDesccription()} />
    </div>
  </div>
)
}

export default AboutMe;