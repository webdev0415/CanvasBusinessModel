import React from "react"
import queryString from "query-string"
import setAuthToken from "../utils/setAuthToken"
import jwt_decode from "jwt-decode";
import store from "../store"
import {setCurrentUser} from "../store/action";

const LandingPage = props => {
	React.useEffect(()=> {
	    const token = localStorage.getItem("jwtToken")
	    console.log("token", token)
	      if (props.location.search !== undefined && !token) {
	        const query = queryString.parse(props.location.search);
	        if (query.token) {
	          window.localStorage.setItem("jwtToken", query.token);
	          setAuthToken(query.token);
	          let payload = query.token;
	          const decoded = jwt_decode(payload);
	          console.log("decoded", decoded)
	          store.dispatch(setCurrentUser(decoded))
	          props.history.push(`dashboard`);
	        }
	      } else if (token) {
	      	setAuthToken(token);
			const decoded = jwt_decode(token);
			console.log("decoded", decoded)
			store.dispatch(setCurrentUser(decoded))
	        props.history.push(`dashboard`);
	      } 
	      props.history.push("login")

		}, [])
	return(
		<div>
		ahahha
		</div>
		)
}
export default LandingPage