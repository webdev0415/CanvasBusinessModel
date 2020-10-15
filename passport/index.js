const passport = require("passport")
const LocalStrategy = require("./LocalStrategy")
const GoogleStrategy = require("./GoogleStrategy")

passport.serializeUser((user, done) => {
	console.log("=== serialize ... called ===")
	console.log(user) // the whole raw user object!
	console.log("---------")
	done(null, { id: user.id })
	// done(null, user)
})
// passport.deserializeUser(function(user, done) {
//  done(null, user);
// });
passport.deserializeUser((id, done) => {
	console.log("DEserialize ... called")
	User.findOne(
		{ id: id },
		(err, user) => {
			console.log("======= DESERILAIZE USER CALLED ======")
			console.log(user)
			console.log("--------------")
			done(null, user)
		}
	)
})

passport.use(LocalStrategy)
passport.use(GoogleStrategy)

module.exports = passport