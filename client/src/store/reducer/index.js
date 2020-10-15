import {combineReducers} from "redux";
import CanvasReducer from "./canvas.reducer";
import AuthReducer from "./auth.reducer"

export default combineReducers({
	canvas: CanvasReducer,
	auth: AuthReducer,
})