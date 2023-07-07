// Write your code here
import './index.css'

import {Component} from 'react'

class Welcome extends Component {
  state = {status: false}

  Click = () => {
    this.setState(prevState => {
      console.log(`previous value ${prevState.status}`)
      return {status: true}
    })
  }

  Click2 = () => {
    this.setState(prevState => {
      console.log(`previous value ${prevState.status}`)
      return {status: false}
    })
  }

  render() {
    const {status} = this.state
    let auth

    if (status === false) {
      auth = (
        <button className="btn" onClick={this.Click}>
          Subscribe
        </button>
      )
    } else {
      auth = (
        <button className="btn" onClick={this.Click2}>
          Subscribed
        </button>
      )
    }
    return (
      <div className="bg">
        <h1 className="main">Welcome</h1>
        <p className="des">Thank you! Happy Learning</p>

        {auth}
      </div>
    )
  }
}

export default Welcome
