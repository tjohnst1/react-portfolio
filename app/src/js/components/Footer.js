import React, { Component } from 'react'

export default class Footer extends Component {
  render(){
    return {
      <footer>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>Travis Johnston</li>
            <li><a className="contact-links" href={`mailto:${basicInfo.email}?Subject=Hello!`}><Isvg src="/images/email.svg">E-mail: </Isvg>{basicInfo.email}</a></li>
          <ul>
        </div>
        <div>
          <h3>Connect</h3>
          <ul>
            <li><a className="contact-links" href={basicInfo.linkedin}><Isvg src="/images/linkedin.svg">LinkedIn: </Isvg>{basicInfo.linkedinShort}</a></li>
            <li><a className="contact-links" href={basicInfo.github}><Isvg src="/images/github.svg">Github: </Isvg>{basicInfo.githubShort}</a></li>
          </ul>
        </div>
      </footer>
    }
  }
}
