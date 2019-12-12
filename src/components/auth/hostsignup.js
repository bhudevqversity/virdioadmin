import React, { Component } from "react";
import SimpleReactValidator from 'simple-react-validator';
import { Link } from 'react-router'
import $ from 'jquery'
import axios from "axios";

class hostSignUp extends Component {
  constructor(props) {
  super(props);
  this.state={
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    password:'',
    rePassword:'',
    verify:false,
    signup:true,
    sms:false,
    byEmail:true,
    message:'',
    passwordText:'',
    otp:''

  }
  this.validator = new SimpleReactValidator({autoForceUpdate: this});
}
 
componentDidMount(){
}

sessionInfo=(e)=>{
 this.setState({
    [e.target.id]:e.target.value
  })
}
verify=(e)=>{
    if (this.validator.allValid()) {
      if(this.state.password===this.state.rePassword){
        //let ak='';
      //   for(let i=0;i<this.state.password.length;i++){
      //     ak = ak+'*';
      //   }
      // this.setState({
      //   verify:true,
      //   signup:false,
      //   passwordText:ak
      // })
      let ak='';
      const participentDetail = {
        firstName:this.state.firstName,
        lastName:this.state.lastName,
        email:this.state.email,
        password:this.state.password,
        address1:"sector3",
        address2:"noida",
        city:"noida",
        state:"UP",
        zip:"123456",
        image:"ASD",
        phone:this.state.phone
        
    }
    console.log('>>>>>>>>>>>>>>>>',participentDetail);
      axios.post("http://192.168.1.177:8001/api/v1/user/register", {participentDetail})
      .then(res => {
       if(res.data.responseMessage == "success")
      {
      console.log('=============lallittiwari12345===================>',res.data);
      for(let i=0;i<this.state.password.length;i++){
        ak = ak+'*';
      }
      this.setState({
      verify:true,
      signup:false,
      passwordText:ak,
      
    })
      }else{
       console.log('=============There Is an Error===================>'); 
      }
      }).catch(err =>{
      console.log('----------there is problem------------',err);
      });

    }
      } else {
      this.validator.showMessages();
      // rerender to show messages for the first time
      // you can use the autoForceUpdate option to do this automatically`
      this.forceUpdate();
    }
 }
 submitHost=(e)=>{
  if(this.state.sms || this.state.byEmail){
    // console.log('nextPage');
    // $("#registration_popup").attr({'style':'display:block'});
    // this.setState({
    //   message:'',
      
    // })
    let otpDetail={ 
      email : this.state.email,
      code:this.state.otp
      } 
      axios.get("http://192.168.1.177:8001/api/v1/user/verify-otp", {otpDetail})
        .then(res => {
         if(res.data.responseMessage == "success"){
        console.log('=============lallittiwari12345===================>',res.data);
  
        $("#registration_popup").attr({'style':'display:block'});
        this.setState({
        message:'',
        })
  
        }else{
         console.log('=============There Is an Error===================>'); 
        }
        }).catch(err =>{
        console.log('----------there is problem------------',err);
        });
  
      // $("#registration_popup").attr({'style':'display:block'});
      // this.setState({
      //   message:'',
        
      // })
  
  }else{
    this.setState({
      message:'Choose either sms or email'
    })
  }

} 
closePopUp=(e)=>{
  $("#registration_popup").attr({'style':'display:none'});
}
render() {
    return (
      <div id="root">
      <div className="App">
        <div className="container-fluid pb-5">
          {this.state.signup?
          <div className="w-50 mx-auto py-5">
            <div className="text-center"><img src="/images/host.png" alt="host" /></div>
            <h4 className="white text-center py-4">Signing up as a host</h4>
            <div className="gray-box-4 px-4 pt-5 pb-4 input_bx-cont">
              <div className="form-group">
                <label className="label">Enter First Name<sup>*</sup><span className="inp_cover-border"></span></label>
                <input type="text" className="input-field" value={this.state.firstName} id ='firstName' onChange={this.sessionInfo}  />
                {this.validator.message('firstName', this.state.firstName, 'required|alpha')}
                <span className="signedup_2"></span>
              </div>
              <div className="form-group">
                <label className="label">Enter Last Name<sup>*</sup><span className="inp_cover-border"></span></label>
                <input type="text" className="input-field" value={this.state.lastName} id ='lastName' onChange={this.sessionInfo}/>
                {this.validator.message('lastName', this.state.lastName, 'required|alpha')}
                <span className="signedup_2"></span>
              </div>
              <div className="form-group">
                <label className="label">Email Address<sup>*</sup><span className="inp_cover-border"></span></label>
                <input type="text" className="input-field myinput" value={this.state.email} id ='email' onChange={this.sessionInfo} />
                {this.validator.message('email', this.state.email, 'required|email')}

                <span className="form_email"></span>
              </div>
              <div className="form-group">
                <label className="label">Mobile Number<span className="inp_cover-border"></span></label>
                <input type="text" className="input-field"  value={this.state.phone} id ='phone' onChange={this.sessionInfo}/>
                {this.validator.message('phone', this.state.phone, 'phone|size:10')}
                <span className="mobile_phone1"></span>
              </div>
              <div className="form-group">
                <label className="label">Create a Password<sup>*</sup><span className="inp_cover-border"></span></label>
                <input type="password" className="input-field" value={this.state.password} id ='password' onChange={this.sessionInfo} />
                {this.validator.message('password', this.state.password, 'required')}

                <span className="pass_word"></span>
              </div>
              <div className="form-group">
                <label className="label">Retype Password<sup>*</sup><span className="inp_cover-border"></span></label>
                <input type="password" className="input-field" value={this.state.rePassword} id ='rePassword' onChange={this.sessionInfo} />
                {this.validator.message('rePassword', this.state.rePassword, 'required')}

                <span className="pass_word"></span>
              </div>
            </div>
            <div className="text-center">
              <button type="button" className="done mt-5" onClick={this.verify}>verify</button>
            </div>
          </div>
          :''}

          {this.state.verify?
          <div className="py-5 w-80 mx-auto mb-5">
            <div className="text-center"><img src="/images/host.png" alt="host" /></div>
            <h4 className="white text-center py-4">Signing up as a host</h4>
            <div className="row">
              <div className="col-lg-6">
                <div className="left_innr_cont h-100">
                  <div className="mb-30">
                    <p className="checktxt">Enter First Name</p>
                    <p className="checktxt_name border border-0 mb-0"><img src="/images/signedup.png" className="mr-3" alt="user-icon" />{this.state.firstName}</p>
                  </div>
                  <div className="mb-30">
                    <p className="checktxt">Enter Last Name</p>
                    <p className="checktxt_name border border-0 mb-0"><img src="/images/signedup.png" className="mr-3" alt="user-icon" />{this.state.lastName}</p>
                  </div>
                  <div className="mb-30">
                    <p className="checktxt">Email Address</p>
                    <p className="checktxt_name border border-0 mb-0"><img src="/images/form-email.png" className="mr-3" alt="user-icon" />{this.state.email}</p>
                  </div>
                  <div className="mb-30">
                    <p className="checktxt">Mobile Number</p>
                    <p className="checktxt_name border border-0 mb-0"><img src="/images/phone.png" className="mr-3" alt="user-icon" />{this.state.phone}</p>
                  </div>
                  <div className="mb-30">
                    <p className="checktxt">Create A Password</p>
                    <p className="checktxt_name border border-0 mb-0"><img src="/images/passwrd.png" className="mr-3" alt="user-icon" />{this.state.passwordText}</p>
                  </div>
                  <div className="mb-30">
                    <p className="checktxt">Retype Password</p>
                    <p className="checktxt_name border border-0 mb-0"><img src="/images/passwrd.png" className="mr-3" alt="user-icon" />{this.state.passwordText}</p>
                  </div>
                </div>
              </div>
              {/* To verify */}
              
              <div className="col-lg-6 mt-3 mt-lg-0">
                <div className="left_innr_cont h-100 pb-4 position-relative">
                  <p className="pick pb-2">Verify Your Account</p>
                  <p className="checktxt font-18 my-4">Where should we send you the verification code?</p>
                  <div className="d-flex justify-content-center align-items-center flex-wrap pb-2 err_msg">
                    <div className="sms_email_box mr-3">
                        <div className="b-image text-center">
                            <img src="/images/sms.png"  alt ="#"/>
                        </div>
                        <p className="hdng1 font-16 text-center mt-3">
                          <label className="custom-control pl-0 custom-checkbox">
                              <input type="checkbox" 
                              id = "sms" 
                              checked={this.state.sms} 
                              onChange = {(e)=>{this.setState({[e.target.id]:!this.state.sms},()=>console.log('sms',this.state.sms))}}
                              className="form-radio" />
                              <span>By SMS</span>                                   
                          </label>
                        </p>
                    </div>
                    <div className="sms_email_box ml-3">
                        <div className="b-image text-center gray-box-5">
                            <img src="/images/email.png" alt ="#" />
                        </div>
                        <p className="hdng1 font-18 text-center color_gray mt-3">
                          <label className="custom-control pl-0 custom-checkbox">
                              <input type="checkbox"
                              id = "byEmail" 
                              checked={this.state.byEmail} 
                              onChange = {(e)=>{this.setState({[e.target.id]:!this.state.byEmail},()=>console.log('byEmail',this.state.byEmail))}}
                              className="form-radio" />
                              <span>By Email</span>                                   
                          </label>
                        </p>
                    </div>
                    <span className="err_msg">{this.state.message}</span>
                  </div>
                  <p className="pick mt-4 mb-4 font-18">ENTER THE CODE</p>
                  <div className="o-hidden">
                    <div className="float-left">
                      <p className="sml_input_box_ak d-inline">
                        {/* <input type="text" maxLength="1"/> */}
                        <input type="text" maxLength="4" id ="otp" value={this.state.otp} onChange={(e)=>this.setState({[e.target.id]:e.target.value})}/>
                      </p>
                      {/* <p className="sml_input_box d-inline">
                        <input type="text" maxLength="1"/>
                      </p>
                      <p className="sml_input_box d-inline">
                        <input type="text" maxLength="1"/>
                      </p>
                      <p className="sml_input_box d-inline">
                        <input type="text" maxLength="1"/>
                      </p> */}
                    </div>
                    <div className="float-left ml-4">
                      <p className="checktxt font-18 mt-2 mb-0">Didnt receive?</p>
                      <h4 className="font-16 px-0 font-weight-bold mt-0 purple_text"><Link to="#" className="purple_text text-decoration-none">RESEND</Link></h4>
                    </div>
                  </div>
                  <Link to = "/hostSignUp" className="position-absolute custom_btn"   onClick={this.submitHost}>done</Link>
                </div>
              </div>
              
            </div>
          </div>
          :''}
          <div className="modal pr-0" id="registration_popup" aria-modal="true">
            <div className="modal-dialog small_width">
                <div className="modal-content modl_bg_drk">
                    <div className="modal-body px-4 pb-4">
                      <h4 className="modal-title font-weight-bold white pt-3 text-center">Welcome To Virdio</h4>
                        <p className="py-4 text-light text-center">Your registration was successful! As a host you can do many things on the plateform. Would you like to see a tutorial ? </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <button type="button" className="custom_btn1" onClick={this.closePopUp}>yes</button>
                          <p className="text-center mb-0 mt-2 small"><Link to="/DashboardLanding" className="main-heading font-12" data-dismiss="modal">skip<br /> for now</Link></p>                    	
                        </div>
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