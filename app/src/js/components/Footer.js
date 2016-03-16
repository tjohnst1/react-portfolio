import React, { Component } from 'react'
import basicInfo from '../../data/basicInfo'

export default class Footer extends Component {
  render(){
    return (
      <div className="footer-background">
        <footer>
          <ul>
            <li className="footer-links"><a href={basicInfo.linkedin}>LinkedIn</a></li>
            <li className="footer-links"><a href={`mailto:${basicInfo.email}?Subject=Hello!`}>E-mail</a></li>
            <li className="footer-links"><a href={basicInfo.github}>GitHub</a></li>
          </ul>
          <p className="footer-copyright">© Travis Johnston and TravisJohnston.info, 2016</p>
        </footer>
      </div>
    )
  }
}
