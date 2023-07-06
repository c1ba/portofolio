import React, { Component } from 'react'
import { defaultSideBarStyling } from '../common/cssProperties'
import { LinkText } from '../components/LinkText'

const links = [
  {text: "Portofolio (this one)", link: "https://github.com/c1ba/portofolio"},
  {text: "Throw Trash Responsibly", link: "https://c1ba.github.io/throw_trash_responsibly/"},
  {text: "Color Scroller(Hex Code Based)(PC browser)", link: "https://friendly-wescoff-c440fd.netlify.app/"},
  {text: "Books To Read List", link: "https://c1ba.github.io/my_to_read/"},
  {text: "APEDYO (Computer Science Atestate)", link: "https://ciba.itch.io/apedyo"},
  {text: "What Philosphy Suits You Most Quiz", link: "https://c1ba.github.io/quizhub_philosophy/"},
  {text: "Rainbowfier", link: "https://github.com/c1ba/rainbowfier-react"}];

export default class Projects extends Component {
  render() {
    return (
        <div 
        style={{...defaultSideBarStyling, display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',}} 
        className="projects text_box">
        <div className="content">
          {links.map((l, index) => <LinkText key={`link_${index}`} style={{marginRight: '10px',
          marginLeft: '10px',}} textContent={l.text} link={l.link} />)}
        </div>
      </div>
    )
  }
}