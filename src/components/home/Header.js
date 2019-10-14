import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row top-header p-4">
          <div className="col-lg-2 d-flex d-md-block justify-content-center p-2">
            <img src="/images/login-logo.png" className="logo" />
          </div>
          <div className="col-lg-4 d-flex d-md-block justify-content-center p-4">
            <div className="user-info d-flex align-items-center">
              <img src="images/attendee.png" className="user-avtar" />
              <div className="pl-4">
                <h3>Welcome Cersei!</h3>
                <p>You have 3 sessions this week</p>
                <p>Next Session, Wednesday, 24 July 2019</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ">
            <div className="d-flex justify-content-between ">
              <div className="header-info-right">
                <p>Weekly Attendance</p>
                <h3>66%</h3>
              </div>
              <span className="border-right gray-border"></span>
              <div className="header-info-right">
                <p>Total Views</p>
                <h3>45.6K</h3>
              </div>
              <span className="border-right gray-border"></span>
              <div className="header-info-right">
                <p>Total Revenue</p>
                <h3>$44,000</h3>
              </div>
              <span className="border-right gray-border"></span>
              <div className="message-notification">
                <img src="/images/message.png" />
                <span className="message-count">2</span>
              </div>
            </div>
          </div>
        </div>

        <h4 className="text-white pb-3">CREATE SESSION</h4>

        <div className="gray-box">
          <div className="session">
            <h3 className="info">Session Info</h3>
          </div>

          <div className="container-fluid register-form">
            <div className="form">
              <div className="form-content">
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">Session Name</label>
                      <input type="text" className="input-field" />
                    </div>
                    <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">Description</label>
                      <textarea type="text" className="input-field"></textarea>
                    </div>
                    <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">Level</label>
                      <select
                        className="input-field"
                        id="exampleFormControlSelect1"
                      >
                        <option>Pick a Difficulty level</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                      <span className="dropdown-icon"></span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">When?</label>
                      <input
                        type="text"
                        className="input-field"
                        placeholder="Pick a date and time"
                      />
                      <span className="when-icon"></span>
                    </div>
                    <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">How long?</label>
                      <select
                        className="input-field"
                        id="exampleFormControlSelect1"
                      >
                        <option>Pick a Duration</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                      <span className="dropdown-icon"></span>
                    </div>
                    <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">Minimum Participants</label>
                      <div className="">
                        <input
                          type="text"
                          className="input-field"
                          placeholder="min 1"
                        />
                        <span className="signedup_2"></span>
                      </div>
                    </div>
                    <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">Maximum Participants</label>
                      <input type="text" className="input-field" placeholder="max 50" />
                      <span className="signedup_2"></span>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="form-group input-txt">
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                      <span>Show Participants Signed Up Count on Searches?</span>
                    </div>
                    <div className="form-group input-txt">
                      <label className="switch">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                      </label>
                      <span>Charging for Session?</span>
                      <p className="gray-text ml-5 mt-3 mb-4">You have enabled it in the Channel</p>
                    </div>
                    <div className="form-group w-50 ml-5">
                      <span className="cover-border"></span>
                      <label className="label">Charge amount</label>
                      <div className="">
                        <input
                          type="text"
                          className="input-field"
                          placeholder="Enter amount"
                        />
                        <span className="dollar"></span>
                      </div>
                    </div>
                  </div>

                  

                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gray-box2">
          <div className="session">
            <h3 className="info">Reminders</h3>
          </div>

          <div className="container-fluid register-form">
            <div className="form">
              <div className="form-content">
                <div className="row">
                  <div className="col-md-4">
                    <p className="text1 mb-4">for Hosts prior to start of Session</p>
                    <div className="form-group mt-2">
                      <span className="cover-border"></span>
                      <label className="label">Enter a value in Minutes</label>
                      <input type="text" className="input-field" />
                      <span className="clock-icon"></span>
                    </div>
                    <p className="text1 mb-4">Sign up Cut off Date/Time</p>
                    <div className="form-group mt-2">
                      <span className="cover-border"></span>
                      <label className="label">Pick Date/Time</label>
                      <input
                        type="text"
                        className="input-field"
                        placeholder=""
                      />
                      <span className="when-icon"></span>
                    </div>
                    
                  </div>
                  <div className="col-md-4">
                    <p className="text1 mb-4">for Participants prior to start of Session</p>
                    <div className="form-group mt-2">
                      <span className="cover-border"></span>
                      <label className="label">Enter a value in Minutes</label>
                      <input type="text" className="input-field" />
                      <span className="clock-icon"></span>
                    </div>
                    <p className="text1 mb-4">for 'minimum not met'</p>
                    <div className="form-group mt-2">
                      <span className="cover-border"></span>
                      <label className="label">Enter a value in days</label>
                      <input type="text" className="input-field" />
                      <span className="clock-icon"></span>
                    </div>
                    
                  </div>
                  

                  

                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 gray-box no-border-radius">
        <div className="row">
        <div class="session"><h3 class="info">Privacy during Session</h3></div>
        <div className="col-md-6">
              <div className="form-group input-txt">
              <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
              </label>
                <span>Participants allowed to disable DM with others</span>
              </div>
              <div className="form-group input-txt">
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <span>Show Participants picture to other Participants?</span>
                
              </div>
              
            </div>
            <div className="col-md-6">
            <div className="form-group input-txt">
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <span>Allow Participants to pick their own playlist?</span>
                
              </div>
            </div>
        </div>
        </div>
        <div className="gray-box2">
          <div class="session"><h3 class="info">Groups</h3></div>
          <div className="col-md-6">
              <div className="form-group input-txt">
              <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
              </label>
                <span>Allow Groups at a Location?</span>
              </div>
              
              
            </div>
        </div>
        <div className="p-3">
          <div class="session"><h3 class="info">Select Host(s)</h3></div>
          <div className="col-md-4">
              <a href="#" className="pick"><img src="images/picking.png" className="mr-2" /> Pick from existing hosts</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
