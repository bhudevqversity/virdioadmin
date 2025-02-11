import React, { Component } from "react";
// import { Link } from "react-router-dom";
//import PropTypes from "prop-types";@ak
//import { connect } from "react-redux";@ak
//import { loginUser } from "../../actions/authActions";@ak
import classnames from "classnames";
import axios from "axios";
import $ from 'jquery';
import {  browserHistory,Link} from 'react-router'


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email:"",     
      password:"",
      type:"1",
      errors: {},
      rememberMe:false
    };
  }

  
  componentDidMount() {
    $('#email').on('focus', function() {
      //document.body.scrollTop = $(this).offset().top;
      document.body.scrollTop = 200;
  
  });
    // If logged in and user navigates to Login page, should redirect them to dashboard
    // if (this.props.auth.isAuthenticated) {@ak
      // this.props.history.push("/home");
      var localstoragedata=JSON.parse(localStorage.getItem('userData'));

      // if(localstoragedata.userType == 1 && localstoragedata.sessionData.id != undefined){
      //   this.props.history.push("/host");
      // }else if(localstoragedata.userType == 2 && localstoragedata.sessionData.id != undefined){
      //   this.props.history.push("/guest");
      // } else {
      //   this.props.history.push("/home");
      // }

      if(localstoragedata && localstoragedata.sessionData && localstoragedata.sessionData.id != undefined){
        // this.props.history.push("/pre-screen");@ak
      } else {
        // this.props.history.push("/home");@ak
      }
      
    // } else { @ak
      // if (localStorage.chkbx && localStorage.chkbx != '') {
      //     $('#remember_me').attr('checked', 'checked');
      //     // $('#email').val(localStorage.email);
      //     this.setState({email:localStorage.email})
      // } else {
      //     $('#remember_me').removeAttr('checked');
      //     // $('#email').val('');
      //     this.setState({email:''})
      // }//@ak
    // }@ak
    if(localStorage.getItem('chk') && localStorage.getItem('userData')){
      let ak =JSON.parse(localStorage.getItem('userData'));
      $('#remember_me').attr('checked', 'checked');
      this.setState({
        email:ak.data.responseData.email
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {

      var localstoragedata = JSON.parse(localStorage.getItem('userData'));

      // this.props.history.push("/home"); // push user to dashboard when they login
        
      // if(localstoragedata.userType == 1){
      //   this.props.history.push("/host");
      // }else if(localstoragedata.userType == 2){
      //   this.props.history.push("/guest");
      // } else {
      //   this.props.history.push("/home");
      // }

      if(localstoragedata && localstoragedata.sessionData && localstoragedata.sessionData.id != undefined){
        this.props.history.push("/pre-screen");
      } else {
        this.props.history.push("/home");
      }
    }


if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors.errorData
      });
    }
  }

 

onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleChange= e => {
    this.setState({type: e.target.value});
  };

onSubmit = e => {
    e.preventDefault();

      const userData = {
        email: this.state.email,
        password: this.state.password
      };
    axios.post(process.env.REACT_APP_NAME+"/api/v1/user/adminLogin", userData)
    .then(res => {
     if(res.data.responseMessage == "success"){
    // console.log('=============lallittiwari12345===================>',res.data.responseData.type);
    localStorage.setItem("userData", JSON.stringify(res));
    if ($('#remember_me').is(':checked')) {
      localStorage.setItem("chk", 'true');
    }
    if(res.data.responseData.type===1){
    browserHistory.push("/DashboardLanding");
    }
    if(res.data.responseData.type===3){
      browserHistory.push("/AdminDashboard");
      }
    if(res.data.responseData.type===2)
    browserHistory.push("/participent-dashboard");
    }else{
     console.log('=============There Is an Error===================>'); 
    }
    }).catch(err =>{
    console.log('----------there is problem------------',err);
    });
  };
  
render() {
    const { errors } = this.state;

    
return (
      <div className="container">
        <div className="row">
          <div className="login-bg">
            <div className="login-box">
              <div className="col-md-7 col-lg-5 col-sm-6 text-light mx-auto">
              
              <div className="col-12">
                <img src="/images/login-logo.png" className="login-logo" />
                <p className="login-tagline">Login and Join a Virtual Studio</p>
              </div>
              <form className = "form-horizontal pt-1" role = "form"  noValidate onSubmit={this.onSubmit} autoComplete="off">
              
                <div className="login-inner">
                <div className = "form-group pb-3 mb-0 mt-4">
                    <span className="text-danger">{errors.email}{errors.emailincorrect}</span>
                    <label>Enter your email address</label>
                    <input autoFocus type="email"  id="email" onChange={this.onChange} value={this.state.email}  error={errors.email}  className={classnames("", { invalid: errors.email || errors.emailincorrect })} className = "form-control"  />
                  <img src="/images/login-user.png" className="user-login" />
                </div>

                <div className = "form-group mt-4 mb-0">
                    <span className="text-danger">{errors.password}{errors.passwordincorrect}</span>
                  
                    <label>Password</label>
                    <input type="password"  id="password" onChange={this.onChange} value={this.state.password} error={errors.password} className={classnames("", { invalid: errors.password || errors.passwordincorrect })} className = "form-control"  />
                    <img src="/images/password1.png" className="user-login" />
                </div>
                {/* <div class="form-group"><span class="cover-border bg_gray_clr">
                  </span><label class="label">Enter First Name</label>
                <input type="text" id="" class="input-field" value=""><span class="signedup_2" />
                </span></div> */}
                
                <div className = "form-group mt-4 mb-0 pl-0">
                <div className="custom-control custom-checkbox">
                  <input type="checkbox"  className="custom-control-input" value="remember-me" id="remember_me" name="example1" />
                  {/* <input type="checkbox" id = "rememberMe"  checked={this.state.rememberMe} onChange = {(e)=>{this.setState({[e.target.id]:!this.state.rememberMe},()=>console.log('rememberMe',this.state.rememberMe))}}/> */}
                    <label className="custom-control-label" htmlFor="remember_me">Remember me</label>
                  </div>
                </div>
                {/*<div className = "form-group">
                  <div class = "form-check-inline radio">
                      <label>
                          <input type = "radio" name = "type" id = "host" onChange={this.handleChange} value = '1' checked /> Host
                      </label>
                    </div>
                    <div class="form-check-inline radio">
                      <label>
                          <input type = "radio" name = "type" id = "client" onChange={this.handleChange} value = '2'  checked={this.state.type === "2"}  /> Client
                      </label>
                    </div>
                  </div>*/}
      
                <div className = "form-group pt-3 mb-4">
                    <div className = "d-flex flex-wrap justify-content-between align-items-center">
                    

                      <button type = "button" onClick={(e)=>this.setState({email:'',password:''})} className="btn-cancel btn btn-large btn-outline-secondary waves-effect waves-light hoverable blue accent-3 rounded p-3 px-4">Cancel</button>
                      <button type = "submit" className="btn-login btn btn-large btn-primary waves-effect waves-light hoverable blue accent-3 p-3 px-4 rounded">Log in</button>
                      <Link to="/forgotpassword"  className="open-list" className="forgot-password mt-sm-0 mt-3">Forgot password?</Link>
                    </div>
                </div>
                
              </div>
              
              
            </form> 

            </div>
            </div>
            <Link to="https://virdiocom-my.sharepoint.com/:w:/g/personal/brent_platt_virdio_com/ERsXhJYzFupOqAF_FvriYioBNW4LaLdolU-smHNPaKvOrw?e=gvOamt" target="_blank" className="privacy-link">Click to view the virdio privacy policy</Link>
          </div>
          
        </div>

        {/* <div className="modal attendy-list" id="attendy-list">
        <div className="modal-dialog">
          <div className="modal-content">
           
           
            <div className="modal-header">
              <h4 className="modal-title">Enter Your Email ID</h4>
              <button type="button" className="close" data-dismiss="modal">×</button>
            </div>
           
            <div className="modal-body">
            <table className="table">
              <thead>
             
              </thead>
              <tbody>
              <form className = "form-horizontal pt-1" role = "form"  noValidate onSubmit={this.sendEmail} autocomplete="off">
               <tr>                 
                 <td>
                 <input type="email"  id="emailID"  value={this.state.emailID} onChange={this.handleChange(emailID)}  error={errors.email}  className={classnames("", { invalid: errors.email || errors.emailincorrect })} className = "form-control"  />
                   </td>
                 </tr> 
                 <tr>
                   <td>
                   <button type = "button" className="btn-login btn btn-large btn-primary waves-effect waves-light hoverable blue accent-3 p-3 px-4 rounded" id="forgot-password" onClick={this.sendMail.bind(this)}>Submit</button>
                   </td>
                  </tr> 
                  </form>         
              </tbody>
            </table>
            </div>
            
          </div>
        </div>
      </div> */}
      </div>
    );
  }
}

// Login.propTypes = {
//   loginUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired
// };@ak

// const mapStateToProps = state => ({
//   auth: state.auth,
//   errors: state.user
// });@ak

// export default connect(
//   mapStateToProps,
//   { loginUser }
// )(Login);@ak

export default Login;