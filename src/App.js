import React, {Component} from 'react';
import { Router, Route, browserHistory } from 'react-router'


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
   
    <Router history = {browserHistory}>
     <div className="App">
     <Route exact path="/" component={Dashboard} />
     <Route exact path="/header" component={Header} />
		 </div>
     </Router>
   );
 }
}

export default App;
