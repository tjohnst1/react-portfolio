import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class Home extends Component {

  render(){
    const containerClasses = classNames({
      "fixed-container": true,
      "closed": this.props.navShowing
    })
    return (
      <div className={containerClasses}>
        <p>This is the home screen. Some splashy blurb about things and such.</p>
      </div>
    )
  }

}
