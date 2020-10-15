var LocalStrategy = require('passport-local').Strategy;
var User = require('../models').User;

const strategy = new LocalStrategy(
  function(username, password, done) {
    User.findOne( {where: { useremail: username}})
    .then(user=>{
      if (!user) {
        console.log("user", user)
        return done(null, false, { message: 'Incorrect Email.' });
      }
      if (user.confirm) {
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      } else  {
        return done(null, false, { message: 'Email is not confirmed.' });
      }
    })
    .catch(err=>{
      return done(err)
    });
  }
)
module.exports = strategy