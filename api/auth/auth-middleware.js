module.exports = function(req, res, next) {
    // server maintains a "sessions" list/array
    // with objects that represent stored sessions
    // (clients that authed successfully)
    // console.log('session', req.session.loggedIn)
    
    if (req.session && req.session.user) {
      next()
    } else {
      res.status(401).json('you shall not pass')
    }
  }