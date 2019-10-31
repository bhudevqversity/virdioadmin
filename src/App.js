import React, {Component} from 'react';
import { Router, Route, browserHistory } from 'react-router'


import Header from './components/home/Header';
import Dashboard from "./components/home/Dashboard";
import PDashboard from "./components/home/PDashboard";

import SessionWineCreation from "./components/home/SessionWineCreation"
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
	   <Route exact path="/wine-creation" component={SessionWineCreation} />
      <Route exact path="/session_creation" component={Header} />
		 <Route exact path="/Participent_Dashboard" component={PDashboard} />
		</div>
     </Router>
   );
 }
}

export default App;
