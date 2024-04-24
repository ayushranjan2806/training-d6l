
import React, { Component } from 'react'

class Welcome extends Component {
  

  render() {
  const name=this.props.name;
  const greet =this.props.greet;
  const last =this.props.last;
    return (
      <div>
        <h1>
            hello, {name},{last},{greet}
        </h1>
      </div>
    )
  }
}

export default Welcome
