const FakeAuth = {
  isAuthenticated: false,
  authenticate(callback) {
    console.info("authenticating")
    this.isAuthenticated = true
    setTimeout(callback, 333)
  },
  signout(callback) {
    console.info("signing out")
    this.isAuthenticated = false
    setTimeout(callback, 333)
  }
}

export default FakeAuth
