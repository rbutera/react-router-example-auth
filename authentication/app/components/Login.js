import React from "react"
import { Redirect } from "react-router-dom"
import FakeAuth from "../utils/FakeAuth"

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }
  login = () => {
    FakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }
  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      console.info("Login: redirecting to referrer")
      return <Redirect to={from} />
    } else {
      console.info("Login: displaying login button")
      return (
        <div>
          <p>
            Please login before trying to access{" "}
            <span className="path">/Protected</span>:
          </p>
          <button onClick={this.login}>Log In</button>
        </div>
      )
    }
  }
}

export default Login
