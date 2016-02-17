import React, { Component } from 'react'
import basicInfo from '../../data/basicInfo'
import Isvg from 'react-inlinesvg'

export default class Footer extends Component {
  render(){
    return (
      <footer>
        <ul>
          <li className="footer-links"><a href={`mailto:${basicInfo.email}?Subject=Hello!`}><Isvg src="/images/email.svg">E-mail: </Isvg>{basicInfo.email}</a></li>
          <li className="footer-links"><a href={basicInfo.linkedin}><Isvg src="/images/linkedin.svg">LinkedIn: </Isvg>{basicInfo.linkedinShort}</a></li>
          <li className="footer-links"><a href={basicInfo.github}><Isvg src="/images/github.svg">Github: </Isvg>{basicInfo.githubShort}</a></li>
        </ul>
        <p className="footer-copyright">© Travis Johnston and TravisJohnston.info, 2016</p>
      </footer>
    )
  }
}
