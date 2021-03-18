import React, { Component } from 'react'

export default class EducationalBackground extends Component {
  render() {
    return (
<div style={box} className="text_box">
    <div className="content">
    <div className="rubrica" style={{marginTop: '75px'}}>
          <h2>DIPLOMAS</h2>
          <h3>Cambridge CAE nivel C1 (2019)</h3>
          <h4>Reading: 180</h4>
          <h4>Use of English: 208</h4>
          <h4>Writing: 173</h4>
           <h4>Listening: 205</h4>
           <h4>Speaking: 189</h4>
          <h3>ECDL PROFIL BAC (2018)</h3>
       </div>
          <div className="rubrica">
          <h2>EDUCATION</h2>
          <h3>"I. L. Caragiale" National College, Bucharest</h3>
          <h4>IT Technician</h4>
          <h5>Professional Certificate: "APEDYO", made in Unity Editor C#</h5>
          <h5>English and Literature Certificate: "The White Album"</h5>
          <h3>"Titu Maiorescu" University, Bucharest</h3>
          <h4>IT Licence(Oct. 2020 - Prezent)</h4>
          <h5>Anticipated graduation: 2023</h5>
       </div>
       <div className="rubrica">
        <h2>WORKING IN</h2>
        <h4>HTML/CSS</h4>
        <h4>JAVASCRIPT/JQUERY</h4>
        <h4>C/C#/C++</h4>
        <h4>PHP</h4>
        <h4>MYSQL</h4>
        <h4>PHOTOSHOP</h4>
        <h4>ILLUSTRATOR</h4>
     </div>
    </div>
  </div>
    )
  }
}

let box={
    backgroundColor: '#161c32',
    width: '500px',
    height: '100%',
    marginTop: '-18px',
    position: 'absolute',
    zIndex: '2',
    animation: 'trans 1s forwards'
}

if(window.innerWidth <= 933){
   box={
    backgroundColor: '#161c32',
    width: '500px',
    height: '100%',
    marginTop: '-18px',
    position: 'absolute',
    zIndex: '2',
    animation: 'trans 1s forwards',
    height: 'auto'
   }
}