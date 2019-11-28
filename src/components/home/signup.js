import React, { Component } from "react";
class signUp extends Component {
  constructor(props) {
	super(props);
}
 
componentDidMount(){
}
render() {
    return (
        <div id="root">
        <div className="App d-flex justify-content-center align-items-center">
			<div className="w-75">
			    <div className="">
                    <h4 className="pick text-center">Sign up for</h4>
                    <div className="text-center my-4"><img src="images/login-logo.png" className="width-200" /></div>
                    <div className="d-flex justify-content-center align-items-center flex-wrap">
                        <div className="parti_box">
                            <div className="b-image position-relative align-self-end">
                                <img src="images/participate.png" alt="participate" />
                                <label className="custom-control custom-checkbox">
                                    <input type="checkbox" className="form-radio" />                                   
                                </label>
                            </div>
                            <p className="white mt-3">I want to participate in a session</p>
                        </div>
                        <div className="parti_box">
                            <div className="b-image position-relative align-self-start">
                                <img src="images/host.png" alt="host" />
                                <label className="custom-control custom-checkbox">
                                    <input type="checkbox" className="form-radio" />                                   
                                </label>
                            </div>
                            <p className="white mt-3">I want to host in a session</p>
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