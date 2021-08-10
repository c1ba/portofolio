import React from 'react';
import bg from '../img/pp.png';

export default class AboutMe extends React.Component {
  render() {
    return (
        <div style={box} className="text_box">
        <div className="content" style={content}>
        <h3 style={textStyleFirstP}>First of all, I'll be honest: I don't like fancy words, so don't expect some formal language out of this description.</h3>
         <h3 style={textStyle}>I'm currently a student at a Computer Science Faculty and looking to make money out of my passion and fill this portofolio. 
           I've always seen programming as not just a method for antepreneurs to expand their businesses, but also a way to send a message to people.
           It matters for what you make to attract the audience's eyes on the right spot.</h3>
         <h3 style={textStyle}>Over my 18 years and a few months of existence, I've learnt to use HTML/CSS, JavaScript(with JQuery aside), MySQL, PHP and I'm learning my way around React. 
           I've also played around with MsSQL and ASP for a client and made a little game in Unity so I also know my way around C#. 
           I've also learnt to use C++ in high school and been learning to use C at college.</h3>
           <h3 style={textStyle}>As for the design part, it's been a passion of mine since I was little. 
            I admired the artists and graphic designers that post their creation process on youtube and I tried it with the hope that I could do something of this career alone. 
            I've been using Photoshop for banners, and, recently, logos. 
            For UI concepts, I prefer to first draw the layout by hand and then, if I don't have an exact vision of the finished process, I use Figma to work the rest of the details.</h3>
         <h3 style={textStyle}>In my free time I play video games, learn a little bit of psychology, cardistry or how to play guitar, but when I get the occasion to go outside, I enjoy taking photographs of everything that gets my eye. We can find beauty in everything.</h3>
        </div>
      </div>
    )
  }
  
}
const textStyleFirstP={
  color: '#e9e9e9',
  marginLeft: '20px',
  marginRight: '20px',
  marginTop: '75px'
}

const textStyle={
    color: '#e9e9e9',
    marginLeft: '20px',
    marginRight: '20px'
}

let box={
    width: '500px',
    height: '100%',
    marginTop: '-18px',
    position: 'absolute',
    zIndex: '2',
    backgroundImage: 'url('+bg+')',
    backgroundSize: 'cover',
    animation: 'trans 1s forwards'
}

if(window.innerWidth <= 933){
  box={
    width: '500px',
    height: '100%',
    marginTop: '-18px',
    position: 'absolute',
    zIndex: '2',
    backgroundImage: 'url('+bg+')',
    backgroundSize: 'cover',
    animation: 'trans 1s forwards',
   height: 'auto'
  }
}

const content={
  marginTop: '150px'
}