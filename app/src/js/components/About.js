import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'
import basicInfo from '../../data/basicInfo'
import * as _ from 'lodash'

export default class About extends Component {
  render(){
    const containerClasses = classNames({
      "fixed-container": true,
      "offset": true,
      "about-container": true
    })
    return (
      <div className={containerClasses}>
        <p className="about-summary">I am front end web developer with previous experience in graphic design and video post production. My interests, among others, include design, technology, and about how to express ideas creatively in the digital space.</p>
        <div className="about-skills-container">
          <h3 className="about-skill-headline main">Skills</h3>
          <h4 className="about-skill-headline">Programming Languages/Frameworks/Libraries</h4>
          <p className="about-skill-set">Ember.js, Gulp, Grunt, JavaScript, jQuery, React, Ruby, Ruby on Rails</p>
          <h4 className="about-skill-headline">Applications</h4>
          <p className="about-skill-set">After Effects, Atom, Compressor, Excel, Final Cut Pro, Illustrator, InDesign, Photoshop, PowerPoint, Premiere</p>
        </div>
      </div>
    )
  }

}
