import React, {Component} from 'react';
import { Router, Route, browserHistory } from 'react-router'


import Header from './components/home/Header';
import Dashboard from "./components/home/Dashboard";
import PDashboard from "./components/home/PDashboard";

import SessionWineCreation from "./components/home/SessionWineCreation"
import DemoSessionWine from "./components/home/DemoSessionWine"
import HostSessionCreation from './components/home/HostSessionCreation'
import verifyuser from "./components/auth/VerifyUser";
import DashboardLanding from './components/home/DashboardLanding'
import hostSignUp from './components/home/hostsignup'
import signUp from './components/home/signup'
import participentSignup from './components/home/participateSignUp'
import SessionDetailOnId from './components/home/sessionDetailOnId'
import AdminDashboard from './components/home/AdminDashboard'
import WineSessionOnId from './components/home/wineSessionOnId'
import NoAdmin from './components/home/NoAdmin'
import Login from './components/auth/Login'

/*function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;*/


class App extends Component {
 render() {
   return (
   
    <Router history = {browserHistory}>
     <div className="App">
     
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/WineSessionCreation" component={DemoSessionWine} />
	    {/* <Route exact path="/wine-creation" component={SessionWineCreation} /> */}
      <Route exact path="/FitnessSessionCreation" component={Header} />
		  <Route exact path="/participent-dashboard" component={PDashboard} />
      <Route exact path="/ChannelCreation" component={HostSessionCreation} />
      <Route path="/verify-user/:sessionId" component={verifyuser} />
      {/* <Route exact path="/HostSessionCreation" component={HostSessionCreation} /> */}
      <Route exact path="/DashboardLanding" component={DashboardLanding} />
      <Route exact path="/hostSignUp" component={hostSignUp} />
      <Route exact path="/participentSignup" component={participentSignup} />
      <Route exact path="/signUp" component={signUp} />
      <Route  path="/fitnessdetail" component={SessionDetailOnId} />
      <Route  path="/sessionEditable/:id" component={Header} />
      <Route  path="/AdminDashboard" component={AdminDashboard} />
      <Route  path="/winedetail" component={WineSessionOnId} />
      <Route  path="/noAdmin" component={NoAdmin} />
      <Route  path="/wineSessionEditable/:id" component={DemoSessionWine} />
      <Route  path="/login" component={Login} />

		</div>
     </Router>
   );
 }
}

export default App;
