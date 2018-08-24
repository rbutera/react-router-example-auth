import React from "react"

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }
  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }
  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return <Redirect to={from} />
    } else {
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
