import React from 'react'
import isEmpty from 'is-empty'
import isEmail from "validator/lib/isEmail";
import styled from "styled-components"
import {CardHeader, CardForm, CardBody, Label, Input, WarningSpan, CreateBtn} from './styles'
import ClipLoader from "react-spinners/ClipLoader";
import {loginUser, setCurrentUser} from "../../store/action"
import {SERVER_PORT} from "../../config"
import setAuthToken from "../../utils/setAuthToken"
import jwt_decode from "jwt-decode";
import {useSelector, useDispatch} from "react-redux"
import { useHistory } from "react-router-dom";
import Notifications, {notify} from 'react-notify-toast';

const Signin = () => {

	const [btnFlag, setBtnFlag] = React.useState(false)
	const [loginErrors, setLoginErrors] = React.useState({})
	const [loginParam, setLoginParam] = React.useState({})
	const dispatch = useDispatch()
	const history = useHistory();
	const auth = useSelector(state=>state.auth)
	React.useEffect(()=>{
		const token = localStorage.getItem("jwtToken")
		if (auth.isAuthenticated) {
			history.push("/dashboard")
		} else if (token) {
			setAuthToken(token);
			const decoded = jwt_decode(token);
			dispatch(setCurrentUser(decoded))
			history.push("/dashboard")
		}
	},[])

	React.useEffect(()=>{
		if (auth.isAuthenticated) {
			history.push("dashboard")
		}
	}, [auth.isAuthenticated])
	React.useEffect(()=>{
		notify.show(auth.loginmsg)
	}, [auth.loginmsg])

	const handleChange = e => { 
	    setLoginParam({
	      ...loginParam,
	      [e.target.id]: e.target.value
	    })
	  }

	const handleClick = async e => {
	    if (!loginParam.username || isEmpty(loginParam.username)) {
	      setLoginErrors({
	        email: "The field is required"
	      })
	    }else if (!loginParam.password || isEmpty(loginParam.password)) {
	      setLoginErrors({
	        password: "The field is required"
	      })
	    } else if (loginParam.username && !isEmail(loginParam.username)) {
	      setLoginErrors({
	        email: "No Validate E-mail"
	      })
	    } else {
	    	setBtnFlag(true)
	    	dispatch(loginUser(loginParam, setBtnFlag))
	    }
	    
	}
	return (
		<SignInWrapper>
		<Notifications />
                  <CardForm>
                  <CardHeader className="card-header">
                    Login
                  </CardHeader>
                  <CardBody>
                    <Label>E-mail {loginErrors.email && (<WarningSpan>{loginErrors.email}</WarningSpan>)}</Label>
                    <Input type='text' id="username" className="form-control" onChange={handleChange}/>
                    <Label>Password {loginErrors.password && (<WarningSpan>{loginErrors.password}</WarningSpan>)}</Label>
                    <Input type='password' id="password" className="form-control" onChange={handleChange} />
                    <p><a href="/signup">Click here</a> to Sign Up</p>
                    <center><CreateBtn type="button" className="btn btn-outline-dark btn-block mb-2" onClick={handleClick}>{
                    btnFlag
                    ? <ClipLoader />
                    : "Login"
                  }
                    </CreateBtn></center>
                    <a type="button" href={`${SERVER_PORT}/auth/google/sign`} className="btn btn-outline-dark btn-block">Continue With Google</a>
                  </CardBody>
                </CardForm>

        </SignInWrapper>
		)
} 
const SignInWrapper = styled.div`
	max-width: 400px;
	margin: 3rem auto;
`

export default Signin
