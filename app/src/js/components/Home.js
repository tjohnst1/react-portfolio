import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class Home extends Component {

  render(){
    const containerClasses = classNames({
      "home-container": true,
      "fixed-container": true,
      "closed": this.props.navShowing
    })
    return (
      <div className={containerClasses}>
        <p className="home-intro-text"><span className="underline">Travis</span> is a <span className="underline">front end developer</span> currently based in beautiful Portland, Oregon.</p>
        <button className="home-btn">Check out my Porfolio</button>
      </div>
    )
  }

}
