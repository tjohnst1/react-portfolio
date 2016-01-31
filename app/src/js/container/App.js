import React, { Component } from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'

export default class App extends Component {

  render(){
    const categories = ["About", "Contact", "Projects"]
    return (
      <div className="main-container">
        <Header />
        <Nav categories={categories}/>
        <p>Hello World!</p>
      </div>
    )
  }

}
