import React from "react"
import { Route } from "react-router-dom"
import FakeAuth from "../utils/FakeAuth"

class PrivateRoute extends React.Component {
  render() {
    return <div>This is a private route</div>
  }
}

export default PrivateRoute
