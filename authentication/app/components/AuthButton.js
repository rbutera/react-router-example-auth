import React from "react"
import { withRouter, Redirect } from "react-router-dom"
import FakeAuth from "../utils/FakeAuth"

const AuthButton = withRouter(({ history }) => {
  return FakeAuth.isAuthenticated ? (
    <div>
      <h2>Welcome, User</h2>
    </div>
  ) : (
    <p>
      You must login in order to visit <span className="path">/Protected</span>
    </p>
  )
})
export default AuthButton
