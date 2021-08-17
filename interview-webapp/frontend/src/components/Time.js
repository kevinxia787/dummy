import React, { Component } from 'react';

class Time extends Component {
  constructor(props) {
    super(props)

    this.state = {time: ""}
  }
  componentDidMount() {
    console.log("test")
    fetch("http://localhost:5000/time", {method: 'GET', dataType: 'json'})
      .then(r => r.json())
      .then(r => {
        this.setState((state) => {
          return {time: r["Message"]}
        })
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div>
        <h1>Hello There</h1>
        <p>It is currently: {this.state.time}</p>
      </div>
    )
    
  }
}

export default Time;