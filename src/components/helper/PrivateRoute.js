import React from "react";
 import { Route, Redirect ,browserHistory} from "react-router-dom";
//import { Route, browserHistory } from 'react-router'
const PrivateRoute = ({ component: Component,...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("userData") ? (
         <Component {...props} />
      ) : (
         <Redirect to="/login" />
        //browserHistory.push("/DashboardLanding")
      )
    }
  />
);
 export default PrivateRoute;