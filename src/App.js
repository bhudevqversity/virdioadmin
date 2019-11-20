import React, {Component} from 'react';
import { Router, Route, browserHistory } from 'react-router'


import Header from './components/home/Header';
import Dashboard from "./components/home/Dashboard";
import PDashboard from "./components/home/PDashboard";

import SessionWineCreation from "./components/home/SessionWineCreation"
import DemoSessionWine from "./components/home/DemoSessionWine"
import HostSessionCreation from './components/home/HostSessionCreation'
import verifyuser from "./components/auth/VerifyUser";
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
		</div>
     </Router>
   );
 }
}

export default App;
