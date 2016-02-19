import React, { Component } from 'react'
import basicInfo from '../../data/basicInfo'
import Isvg from 'react-inlinesvg'

export default class Footer extends Component {
  render(){
    return (
      <footer>
        <ul>
          <li className="footer-links"><a href={basicInfo.linkedin}>LinkedIn</a></li>
          <li className="footer-links"><a href={`mailto:${basicInfo.email}?Subject=Hello!`}>E-mail</a></li>
          <li className="footer-links"><a href={basicInfo.github}>GitHub</a></li>
        </ul>
        <p className="footer-copyright">© Travis Johnston and TravisJohnston.info, 2016</p>
      </footer>
    )
  }
}
