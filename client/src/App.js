import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from "./utils/PrivateRoute"
import DashboardPage from "./pages/Dashboard";
import CanvasBusinessModel from "./pages/CanvasBusinessModel";
import SignIn from "./pages/AuthenticationPage/Signin";
import SignUp from "./pages/AuthenticationPage/Signup";
import EmailConfirm from "./pages/AuthenticationPage/EmailConfirm";
import LandingPage from "./pages/LandingPage"

function App() {
  return (
    <>
    
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      	<Route path="/login" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/canvastype1/:name" component={CanvasBusinessModel} />
        <Route exact path = "/register/confirm/:id" component={EmailConfirm} />
      </Switch>
    </Router>
    
    </>
  );
}

export default App;
