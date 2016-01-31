import React, { Component } from 'react'
import Header from '../components/Header'

export default class App extends Component {

  render(){
    return (
      <div className="main-container">
        <Header />
        <p>Hello World!</p>
      </div>
    )
  }

}
