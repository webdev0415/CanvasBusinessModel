import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Notifications, {notify} from 'react-notify-toast'; 
import {useParams} from "react-router-dom"
import {ConfirmDiv} from "./styles"
import {useSelector, useDispatch} from "react-redux"
import {confirmEmail} from "../../store/action"

const EmailConfirm = () => {
  const [confirming, setConfirming] = React.useState(true)
  const {id} = useParams();
  const dispatch = useDispatch()
  const auth = useSelector(state=>state.auth)

  React.useEffect(()=>{
    console.log("effect call")
    dispatch(confirmEmail(id, setConfirming))
  }, [])

  React.useEffect(()=>{
    notify.show(auth.confirmmsg)
  }, [auth.confirmmsg])
  return (
    <>
          <Notifications />
          <ConfirmDiv>
            {confirming
              ? <span className="spinner-border spinner-border-sm"></span>

              : <div>
                <p>{auth.confirmmsg}</p>
                <p>Go to <Link to= "/login">Log in.</Link></p>
                </div>
            }
          </ConfirmDiv>
    </>
    )
}

export default EmailConfirm;

