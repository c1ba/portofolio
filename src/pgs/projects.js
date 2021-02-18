import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
        <div style={box} className="projects text_box">
        <div className="content">
        <h2 style={linkText} className="link" onClick={()=>window.open("https://c1ba.github.io/throw_trash_responsibly/", "_blank")}>Throw Trash Responsibly</h2>
       <h2 style={linkText} className="link" onClick={()=>window.open("https://friendly-wescoff-c440fd.netlify.app/", "_blank")}>Color Scroller(Hex Code Based)</h2>
       <h2 style={linkText} className="link" onClick={()=>window.open("https://www.maskohomedesign.com", "_blank")}>Masko Home Design(Business Cancelled)</h2>
       <h2 style={linkText} className="link" onClick={()=>window.open("https://ciba.itch.io/apedyo", "_blank")}>APEDYO</h2>
       <h2 style={linkText} className="link" onClick={()=>window.open("https://www.facebook.com/MiaKaraBucharest/photos/2562669244003454", "_blank")}>Mia Kara Poster</h2>
        </div>
      </div>
    )
  }
}

const linkText={
    textAlign: 'center',
    fontSize: '2vw',
    textDecoration: 'none',
    cursor: 'pointer',
    marginRight: '10px',
    marginLeft: '10px',
}

const box={
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '500px',
    height: '100%',
    marginTop: '-18px',
    zIndex: '2',
    position: 'absolute',
    backgroundColor: '#161c32',
    animation: 'trans 1s forwards'
}