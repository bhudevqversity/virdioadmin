import React, {Component} from 'react';
import {BrowserRouter as Router,Switch,Route,Link}from "react-router-dom";


import Header from './components/home/Header';
import Dashboard from "./components/home/Dashboard";

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
         <Route exact path="/header" component={Header} />
		 </div>
     </Router>
   );
 }
}

export default App;
