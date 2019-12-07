import React, { Component } from "react";
//import uniqueId from 'lodash/uniqueId';
//import { Link } from 'react-router'
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { hashHistory } from 'react-router';
import axios from "axios";
import {  browserHistory} from 'react-router'
import  { Redirect } from 'react-router-dom'

import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING
} from "../../actions/types";

//import $ from 'jquery';

class VerifyUser extends Component {
            constructor() {
            super();
           // let email;
            this.state = {
                data:"",
                showError:false,
                messageFromServer:'',
                type:"1",
                errors: {}
              };
        
            }

        componentDidMount() {

          this.verifySessionId();
        }

        componentWillMount(){
          
        }

          
        verifySessionId = e => {
    
         console.log('-----------verifyuser-------------------')

         let path=window.location.pathname;

         console.log('------path----------',path)

         let path_arr = path.split("/");

         console.log('------path_arr----------',path_arr[2])

         //let path_arrr = path_arr[2].split("#");

         //console.log('------path_arrlalit----------',path_arrr[0])

         const userData = {
          sessId: path_arr[2]
        };

         axios
         .post("http://192.168.1.177:8001/api/v1/session/verifyuser",userData)                
         .then(res => {

          console.log('---------verifyuser123333--------------',res.data)

          if(res.data.responseMessage == 'success')
          {
          //   this.props.hashHistory.push({
          //     pathname: '/participent-dashboard',
          //     state: {data: res.data.responseData.sessionDta}  
          // })

         // this.props.history.push("/participent-dashboard");

        //  this.props.history.push('/participent-dashboard/');
        browserHistory.push("/signUp");

          // return (<Redirect to='/participent-dashboard'  />)
          }

        })
      
                        
          };

        render() {

        return (

            <div className="container">
            <div className="row">
              <div className="login-bg">

                ----------This is Verify link------------
             
              </div>              
            </div>
          </div>

         );

         }

}

const container = {
    "padding": "0px 15px",
    "max-width": "1140px"
  
  };

  export default VerifyUser;

