import React, { Component } from "react";
class hostSignUp extends Component {
  constructor(props) {
	super(props);
}
 
componentDidMount(){
}
render() {
    return (
      <div id="root">
      <div class="App">
        <div class="container-fluid pb-5">
          <div class="w-50 mx-auto py-5">
            <div class="text-center"><img src="images/host.png" alt="host" /></div>
            <h4 class="white text-center py-4">Signing up as a host</h4>
            <div class="gray-box-4 px-4 pt-5 pb-4 input_bx-cont">
              <div class="form-group">
                <label class="label">Enter First Name<span class="inp_cover-border"></span></label>
                <input type="text" class="input-field" />
                <span class="signedup_2"></span>
              </div>
              <div class="form-group">
                <label class="label">Enter Last Name<span class="inp_cover-border"></span></label>
                <input type="text" class="input-field" />
                <span class="signedup_2"></span>
              </div>
              <div class="form-group">
                <label class="label">Enter Address<span class="inp_cover-border"></span></label>
                <input type="text" class="input-field myinput" />
                <span class="form_email"></span>
              </div>
              <div class="form-group">
                <label class="label">Mobile Number<span class="inp_cover-border"></span></label>
                <input type="text" class="input-field" />
                <span class="mobile_phone1"></span>
              </div>
              <div class="form-group">
                <label class="label">Create a Password<span class="inp_cover-border"></span></label>
                <input type="text" class="input-field" />
                <span class="pass_word"></span>
              </div>
              <div class="form-group">
                <label class="label">Retype Password<span class="inp_cover-border"></span></label>
                <input type="text" class="input-field" />
                <span class="pass_word"></span>
              </div>
            </div>
            <div class="text-center"><button type="button" class="done mt-5">verify</button></div>
          </div>
          <div class="py-5 w-80 mx-auto mb-5">
            <div class="text-center"><img src="images/host.png" alt="host" /></div>
            <h4 class="white text-center py-4">Signing up as a host</h4>
            <div class="row">
              <div class="col-lg-6">
                <div class="left_innr_cont h-100">
                  <div class="mb-30">
                    <p class="checktxt">Enter First Name</p>
                    <p class="checktxt_name border border-0 mb-0"><img src="images/signedup.png" class="mr-3" alt="user-icon" />Arjun</p>
                  </div>
                  <div class="mb-30">
                    <p class="checktxt">Enter Last Name</p>
                    <p class="checktxt_name border border-0 mb-0"><img src="images/signedup.png" class="mr-3" alt="user-icon" />Rishi</p>
                  </div>
                  <div class="mb-30">
                    <p class="checktxt">Email Address</p>
                    <p class="checktxt_name border border-0 mb-0"><img src="images/form-email.png" class="mr-3" alt="user-icon" />arjun.rishi@gmail.com</p>
                  </div>
                  <div class="mb-30">
                    <p class="checktxt">Mobile Number</p>
                    <p class="checktxt_name border border-0 mb-0"><img src="images/phone.png" class="mr-3" alt="user-icon" />666777888</p>
                  </div>
                  <div class="mb-30">
                    <p class="checktxt">Create A Password</p>
                    <p class="checktxt_name border border-0 mb-0"><img src="images/passwrd.png" class="mr-3" alt="user-icon" />*******</p>
                  </div>
                  <div class="mb-30">
                    <p class="checktxt">Retype Password</p>
                    <p class="checktxt_name border border-0 mb-0"><img src="images/passwrd.png" class="mr-3" alt="user-icon" />*******</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 mt-3 mt-lg-0">
                <div class="left_innr_cont h-100 pb-4 position-relative">
                  <p class="pick pb-2">Verify Your Account</p>
                  <p class="checktxt font-18 my-4">Where should we send you the verification code?</p>
                  <div class="d-flex justify-content-center align-items-center flex-wrap pb-2">
                    <div class="sms_email_box mr-3">
                        <div class="b-image text-center">
                            <img src="images/sms.png" />
                        </div>
                        <p class="hdng1 font-16 text-center mt-3">
                          <label class="custom-control pl-0 custom-checkbox">
                              <input type="checkbox" class="form-radio" />
                              <span>By SMS</span>                                   
                          </label>
                        </p>
                    </div>
                    <div class="sms_email_box ml-3">
                        <div class="b-image text-center gray-box-5">
                            <img src="images/email.png" />
                        </div>
                        <p class="hdng1 font-18 text-center color_gray mt-3">
                          <label class="custom-control pl-0 custom-checkbox">
                              <input type="checkbox" class="form-radio" />
                              <span>By Email</span>                                   
                          </label>
                        </p>
                    </div>
                  </div>
                  <p class="pick mt-4 mb-4 font-18">ENTER THE CODE</p>
                  <div class="o-hidden">
                    <div class="float-left">
                      <p class="sml_input_box d-inline">
                        <input type="text" />
                      </p>
                      <p class="sml_input_box d-inline">
                        <input type="text" />
                      </p>
                      <p class="sml_input_box d-inline">
                        <input type="text" />
                      </p>
                      <p class="sml_input_box d-inline">
                        <input type="text" />
                      </p>
                    </div>
                    <div class="float-left ml-4">
                      <p class="checktxt font-18 mt-2 mb-0">Didnt receive?</p>
                      <h4 class="font-16 px-0 font-weight-bold mt-0 purple_text"><a href="#" class="purple_text text-decoration-none">RESEND</a></h4>
                    </div>
                  </div>
                  <button type="button" class="position-absolute custom_btn">done</button>
                </div>
              </div>           
            </div>
          </div>
        </div>          
      </div>
    </div>
    )
  }
}

export default hostSignUp;