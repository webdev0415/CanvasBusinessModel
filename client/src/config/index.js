const funcS = () => {
	switch(process.env.NODE_ENV) {
		case 'production':
			return "https://onlinebusinessmodel.herokuapp.com"
		case 'development':
			return "http://localhost:8080"
		default:
			return "https://onlinebusinessmodel.herokuapp.com"
	}
}
// export SERVER_PORT;
export const SERVER_PORT = funcS();