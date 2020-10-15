const GoogleStrategy = require("passport-google-oauth20").Strategy
var User = require('../models').User;
const {GOOGLE_INFO} = require("../config")
// "google": {
// 		"clientID": "585604580890-dp9nlh79gjpc6d9cttu6cpn84hs2vkj9.apps.googleusercontent.com",
// 		"clientSecret": "APqKhLgQGpu54vJtT5vgGayg",
// 		"callbackURL": "/auth/twitter/callback",
// 		"profileFields": ["id", "displayName", "photos"]
// 	},
const strategy = new GoogleStrategy(
	GOOGLE_INFO,
	(token, tokenSecret, profile, done)=> {
		console.log("token", token, "tokenSecret", tokenSecret)
		// testing
		console.log("===== GOOGLE PROFILE =======")
		console.log(profile)
		console.log("======== END ===========")
		// code
		const { id } = profile
		const tokenname = profile.name.givenName
		User.findOne( {where: { googleId: id}})
		.then(userMatch=>{
			if (userMatch) {
				return done(null, userMatch)
			} else {
				console.log("====== PRE SAVE =======")
				console.log(id)
				console.log(profile)
				console.log("====== post save ....")
				const newGoogleUser = new User({
					"googleId": id,
					confirm: true,
					username: tokenname		
				})
				// save this user
				newGoogleUser.save()
				.then(savedUser=>{
					return done(null, savedUser)
				})
				.catch(err=>{
					console.log("Error!! saving the new google user")
					console.log(err)
					return done(null, false)
				})
			}
		})
		.catch(err=>{
			console.log("Error!! trying to find user with googleId")
				console.log(err)
				return done(null, false)
		})

			// if there is already someone with that googleId
			
		}) // closes User.findONe


module.exports = strategy
