import React from "react"
import { withRouter, Redirect, Link } from "react-router-dom"
import FakeAuth from "../utils/FakeAuth"

const AuthButton = withRouter(
  ({ history }) =>
    FakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            FakeAuth.signout(() => history.push("/"))
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>
        You are not logged in. You <Link to="/login">can Log In here</Link>
      </p>
    )
)

export default AuthButton
