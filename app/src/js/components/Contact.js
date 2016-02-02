import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class Contact extends Component {

  render(){
    const containerClasses = classNames({
      "fixed-container": true,
      "closed": this.props.navShowing
    })
    return (
      <div className={containerClasses}>
        <p>Contact me with the interwebz</p>
      </div>
    )
  }

}
