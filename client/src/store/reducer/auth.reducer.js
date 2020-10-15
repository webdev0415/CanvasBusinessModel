import * as actionTypes from "../action/actiontypes";
const isEmpty = require("is-empty");

const initState = {
	user: [],
	isAuthenticated: false,
	message: '',
	loginmsg: '',
	confirmmsg: '',
	confirmmsgerr: ''
}



export default function authReducer(state=initState, action) {
	switch (action.type) {
		case actionTypes.CONFIRM_EMAIL_ERR:
			return {
				...state,
				confirmmsgerr: action.payload.msg
			}
		case actionTypes.CONFIRM_EMAIL_SUCCESS:
			return {
				...state,
				confirmmsg: action.payload.msg
			}
		case actionTypes.LOGIN_ERR:
			return {
				...state,
				loginmsg: action.payload.message
			}
		case actionTypes.SIGNUP_SUCCESS:
			return {
				...state,
				message: action.payload.msg
			}
		case actionTypes.SET_CURRENT_USER:

			return {
				...state,
				isAuthenticated: !isEmpty(action.payload),
				user: action.payload
			}
		default:
			return state;
	}
}