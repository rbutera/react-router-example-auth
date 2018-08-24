import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import PrivateRoute from "./PrivateRoute"
import Public from "./Public"
import Protected from "./Protected"
import Login from "./Login"
import AuthButton from "./AuthButton"

class AuthExample extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="auth-example">
          <h1>Authentication Example</h1>
          <p>
            This is an example of redirects and simple authentication in{" "}
            <em>React Router.</em>
          </p>

          <AuthButton />

          <p>Choose a page to visit:</p>

          <ul>
            <li>
              <Link to="/public">Public</Link>
            </li>
            <li>
              <Link to="/protected">Protected</Link>
            </li>
          </ul>
          <Route path="/public" component={Public} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/protected" component={Protected} />
        </div>
      </BrowserRouter>
    )
  }
}

export default AuthExample
