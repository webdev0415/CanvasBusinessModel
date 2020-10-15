import React, {useState, useEffect} from "react";

import AddIcon from '@material-ui/icons/Add';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SimpleModal from "./modal";
import {AddBtn, WelcomeMsg, CanvasItem, LogoutBtn} from "./styles"
import {logoutUser, readCanvas, setCurCanvas} from "../../store/action"
import {useHistory} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"


const Dashboard = () => {
	const [open, setOpen] = useState(false);

	const history = useHistory()
	const dispatch = useDispatch()

	const auth = useSelector(state=>state.auth)
	const canvas = useSelector(state=>state.canvas)
	const socket = useSelector(state=>state.canvas.socket)

	useEffect(()=>{
		// console.log('canvas = ', canvas);
		// var socket = io(`${SERVER_PORT}`);
		socket.emit('sendMessage', 'Message');
		socket.on('refresh', (data)=>{
			dispatch(readCanvas());
		})
		console.log('socket emit');
	}, []);

	const handleClick = e => {
		setOpen(true)
	}
	const handleLogout = e => {
		e.preventDefault()
		dispatch(logoutUser())
	}
	return (
		<>
			<WelcomeMsg>Welcome {auth.user.username}!</WelcomeMsg>
			
			<AddBtn onClick={handleClick}><AddIcon /> Add new</AddBtn>
			<LogoutBtn onClick={handleLogout}><ExitToAppIcon /> Log out</LogoutBtn>
			<SimpleModal open={open} setOpen={setOpen} />
			{
				// console.log('canvas = ', canvas)
				canvas.canvas.map((item, index) => {
					return (<CanvasItem key={index} onClick={()=>{
							console.log('clicked = ', item);
							dispatch(setCurCanvas(item.id));
							history.push(`/canvas${item.type}/${item.name}`);
						}}><p>

							{item.name}

					</p></CanvasItem>);
				})
			}
		</>
		)
}


export default Dashboard
