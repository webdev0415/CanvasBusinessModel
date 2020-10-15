import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./reducer"

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk,logger)));

export default store;