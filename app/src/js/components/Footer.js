import React, { Component } from 'react'
import basicInfo from '../../data/basicInfo'
import Isvg from 'react-inlinesvg'

export default class Footer extends Component {
  render(){
    return (
      <footer>
        <div className="footer-subsection">
          <h3 className="footer-heading">Contact</h3>
          <ul>
            <li>Travis Johnston</li>
            <li><a href={`mailto:${basicInfo.email}?Subject=Hello!`}>Tjohnst1@gmail.com</a></li>
          </ul>
        </div>
        <div className="footer-subsection">
          <h3 className="footer-heading">Connect</h3>
          <ul>
            <li><a className="contact-links" href={basicInfo.linkedin}>LinkedIn</a></li>
            <li><a className="contact-links" href={basicInfo.github}>Github</a></li>
          </ul>
        </div>
      </footer>
    )
  }
}
