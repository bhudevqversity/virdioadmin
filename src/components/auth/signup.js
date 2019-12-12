import React, { Component } from "react";
import { Link } from 'react-router';
import {  browserHistory} from 'react-router'

class signUp extends Component {
  constructor(props) {
    super(props);
    this.state={
        checkHost:false,
        checkParticipent:false
    }
}
 
componentDidMount(){
}
signUpPage=(e)=>{

}
render() {
    return (
        <div id="root">
        <div className="App d-flex justify-content-center align-items-center">
			<div className="w-75">
			    <div className="">
                    <h4 className="pick text-center">Sign up for</h4>
                    <div className="text-center my-4"><img src="/images/login-logo.png" className="width-200" alt="#"/></div>
                    <div className="d-flex justify-content-center align-items-center flex-wrap">
                        <div className="parti_box">
                            <div className="b-image position-relative align-self-end">
                                <img src="/images/participate.png" alt="participate" />
                                <label className="custom-control custom-checkbox">
                                    <input type="checkbox" 
                                    id="checkParticipent"
                                    checked={this.state.checkParticipent}
                                    onChange={(e)=>this.setState({[e.target.id]:!this.state.checkParticipent},()=>browserHistory.push("/participentSignup"))}
                                    className="form-radio" />                                   
                                </label>
                            </div>
                           <Link to = '/participentSignup'><p className="white mt-3">I want to participate in a session</p></Link>
                        </div>
                        <div className="parti_box">
                            <div className="b-image position-relative align-self-start">
                                <img src="images/host.png" alt="host" />
                                <label className="custom-control custom-checkbox">
                                    <input type="checkbox"
                                    id="checkHost"
                                    checked={this.state.checkHost}
                                    onChange={(e)=>this.setState({[e.target.id]:!this.state.checkHost},()=>browserHistory.push("/hostSignUp"))}
                                    className="form-radio" />                                   
                                </label>
                            </div>
                            <Link to = '/hostSignUp'><p className="white mt-3">I want to host a session</p></Link>
                        </div>
                    </div>
                </div>
			</div>
		</div>
	</div>
    )
  }
}

export default signUp;