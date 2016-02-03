import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'
import * as _ from 'lodash'

export default class About extends Component {
  render(){
    const containerClasses = classNames({
      "fixed-container": true,
      "closed": this.props.navShowing
    })
    const key = _.uniqueId();
    console.log(this.props)
    return (
      <div className={containerClasses}>
        <p>I am web developer and designer with previous experience in the fields of graphic design and video post production. My interests, among others, include design, technology, and about how to express ideas creatively in the digital space.</p>
        <p>Web Frameworks/Applications: Ember.js, Gulp, JavaScript, jQuery, Ruby, Ruby on Rails</p>
        <p>Applications: After Effects, Atom, Compressor, Excel, Final Cut Pro, Illustrator, InDesign, Photoshop, PowerPoint, Premiere</p>
      </div>
    )
  }

}
