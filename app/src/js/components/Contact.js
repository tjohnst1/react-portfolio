import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'
import basicInfo from '../../data/basicInfo'

export default class Contact extends Component {

  render(){
    const containerClasses = classNames({
      "fixed-container": true,
      "closed": this.props.navShowing
    })
    return (
      <div className={containerClasses}>
        <p>Do you have a project idea or just want to say hi? Feel free to reach out via e-mail or social media. I&#8217;ll try my best to get back to you promptly.</p>
        <ul>
          <li>{basicInfo.email}</li>
          <li>{basicInfo.linkedin}</li>
          <li>{basicInfo.github}</li>
        </ul>
      </div>
    )
  }

}
