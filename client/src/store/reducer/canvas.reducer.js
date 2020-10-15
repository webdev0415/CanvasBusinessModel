import * as actionTypes from "../action/actiontypes";

import io from 'socket.io-client';
import {SERVER_PORT} from "../../config";

const initState = {
	canvas: [],
	cur_canvas_id: 0,
	socket: io(`${SERVER_PORT}`)
}

export default function CanvasReducer(state=initState, action) {
	switch (action.type) {
		case actionTypes.CREATE_CANVAS:
			return state;
		case actionTypes.READ_CANVAS:
			return {...state, canvas: action.payload};
		case actionTypes.CUR_CANVAS_ID:
			return {...state, cur_canvas_id: action.payload};
		case actionTypes.READ_PLACEHOLDER:
			return {...state, canvas_data: action.payload};
		case actionTypes.CREATE_PLACEHOLDER:
			return {...state, canvas_data: [...state.canvas_data, action.payload]}
		case actionTypes.SET_PLACEHOLDERS:
			return {...state, canvas_data: [...action.payload]};
		default:
			return state;
	}
}