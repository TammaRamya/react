
  
import React, { Component } from 'react';

export default class timer extends Component {

  constructor() {
    super()
this.state={time:new Date()}
  }

  currentTime()
  {
    this.setState({
      time: new Date()
    })
  }
  componentWillMount()
  {
setInterval(()=>this.currentTime(),1000)
  }


  render() {

    return (
      <h1>
        {this.state.time.toLocaleTimeString()}
      </h1>
    )
  }
}