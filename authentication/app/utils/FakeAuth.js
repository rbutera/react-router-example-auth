const FakeAuth = {
  isAuthenticated: false,
  authenticate(callback) {
    console.info("authenticating")
    this.isAuthenticated = true
    setTimeout(cb, 333)
  },
  signout(callback) {
    console.info("signing out")
    this.isAuthenticated = false
    setTimeout(cb, 333)
  }
}

export default FakeAuth
