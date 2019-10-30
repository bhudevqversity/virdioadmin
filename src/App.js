import React, {Component} from 'react';
import {BrowserRouter as Router,Switch,Route,Link}from "react-router-dom";


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
   
       <Router>
     <div className="App">
     
       <Route exact path="/" component={Dashboard} />
	   <Route exact path="/wine-creation" component={SessionWineCreation} />
         <Route exact path="/header" component={Header} />
		 <Route exact path="/Participent_Dashboard" component={PDashboard} />
		</div>
     </Router>
   );
 }
}

export default App;
