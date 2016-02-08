import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'
import basicInfo from '../../data/basicInfo'
import Isvg from 'react-inlinesvg'

export default class Contact extends Component {
  render(){
    const containerClasses = classNames({
      "fixed-container": true,
      "offset": true,
      "closed": this.props.navShowing
    })
    return (
      <div className={containerClasses}>
        <p>Do you have a project idea or just want to say hi? Feel free to reach out via e-mail or social media. I&#8217;ll try my best to get back to you promptly.</p>
        <ul>
          <li><a href={basicInfo.email}><Isvg src="/images/email.svg">E-mail: </Isvg>{basicInfo.email}</a></li>
          <li><a href={basicInfo.linkedin}><Isvg src="/images/linkedin.svg">LinkedIn: </Isvg>{basicInfo.linkedin}</a></li>
          <li><a href={basicInfo.github}><Isvg src="/images/github.svg">Github: </Isvg>{basicInfo.github}</a></li>
        </ul>
      </div>
    )
  }

}
