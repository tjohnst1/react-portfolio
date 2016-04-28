import React, {Component, PropTypes} from 'react'
import basicInfo from '../../data/basicInfo'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class About extends Component {
  render(){
    return (
      <div className="about-background">
        <div className="about-container" id="about">
          <h3 className="about-header">About</h3>
          <p className="about-summary">I am web developer and designer with previous experience in the fields of video and design. My interests include, among others, design, technology, and about how to express ideas creatively in the digital space.</p>
          <div className="about-skills-container">
            <h3 className="about-skill-headline main">Skills</h3>
              <h4 className="about-skill-headline">Programming Languages</h4>
              <p className="about-skill-set">CSS, HTML, JavaScript (including some ES2015), PHP, Ruby, SASS</p>
              <h4 className="about-skill-headline">Frameworks/Applications/Libraries</h4>
              <p className="about-skill-set">Angular, Craft, ExpressionEngine, Gulp, Grunt, jQuery, Mocha, React, Ruby on Rails, rSpec, Wordpress</p>
              <h4 className="about-skill-headline">Software</h4>
              <p className="about-skill-set">Illustrator, InDesign, Photoshop</p>
          </div>
        </div>
      </div>
    )
  }

}
