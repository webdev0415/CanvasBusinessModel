require('dotenv').config()

const origin = () => {
		switch (process.env.NODE_ENV) {
		case "production":
			return "https://onlinebusinessboard.herokuapp.com"
		case "development":
		 	return "http://localhost:8080"
		default:
			return "http://localhost:3000"
		}
	}
const googleInfo = () => {
	switch (process.env.NODE_ENV) {
		case "production":
			return {
				clientID: "206246194497-jp1ie9kklvtmm4rp3liumguif2oal84t.apps.googleusercontent.com",
				clientSecret: "Ai_cnDLoQIiuIB0ueztUdSML",
				callbackURL: "/auth/google/callback"
				}
		case "development":
		 	return {
				clientID: "206246194497-jp1ie9kklvtmm4rp3liumguif2oal84t.apps.googleusercontent.com",
				clientSecret: "Ai_cnDLoQIiuIB0ueztUdSML",
				callbackURL: "http://localhost:8080/auth/google/callback"
				}
		default:
			return {
				clientID: "206246194497-jp1ie9kklvtmm4rp3liumguif2oal84t.apps.googleusercontent.com",
				clientSecret: "Ai_cnDLoQIiuIB0ueztUdSML",
				callbackURL: "/auth/google/callback"
				}
		}
}
const CLIENT_ORIGIN = origin();
const GOOGLE_INFO = googleInfo();

module.exports = {
	GOOGLE_INFO: GOOGLE_INFO,
    CLIENT_ORIGIN: CLIENT_ORIGIN
}