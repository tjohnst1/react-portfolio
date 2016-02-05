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
        <ul>
          <li>{basicInfo.email}</li>
          <li>{basicInfo.linkedin}</li>
          <li>{basicInfo.github}</li>
        </ul>
      </div>
    )
  }

}
