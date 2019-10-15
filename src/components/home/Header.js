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
        <div className="session"><h3 className="info">Privacy during Session</h3></div>
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
          <div className="session"><h3 className="info">Groups</h3></div>
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
          <div className="session"><h3 className="info">Select Host(s)</h3></div>
          <div className="row">
            <div className="col-md-4">
                <a href="#" className="pick"><img src="images/picking.png" className="mr-2" /> Pick from existing hosts</a>
            </div>
            <div className="col-md-4">
                <a href="#" className="pick"><img src="images/add.png" className="mr-2" /> Add a new Host</a>
            </div>
          </div>
        </div>
        <div className="gray-box2">
          <div className="session"><h3 className="info">Script</h3></div>
          <div className="row">
            <div className="col-md-5">
              <span className="white-text">Start next activity?</span>
              <a href="#" className="btn btn-primary text-uppercase mr-2">automatic</a>
              <a href="#" className="btn btn-outline-secondary text-uppercase">manual</a>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                  <span className="cover-border"></span>
                  <label className="label">Pick Emojis</label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Pick a date and time"
                  />
                  <span className="when-icon"></span>
                </div>
            </div>
            <div className="col-md-4">
              <div className="form-group input-txt">
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <span>Use Heart Rate Monitor</span>
              </div>
              <div className="form-group input-txt">
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <span>Use Zone Tracking</span>
              </div>
            </div>
          </div>
          <div className="p-3">
            <h3 className="main-heading">Activities</h3>
            <table className="table text-gray activity-table">
              <thead>
                <tr>
                  <th>Activity name</th>
                  <th>Activity Type</th>
                  <th>Duration Type</th>
                  <th>Count</th>
                  <th>Video</th>
                  <th>Target BPM</th>
                  <th>Target Zone</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Jumping</td>
                  <td>Warm Up</td>
                  <td>Time</td>
                  <td>30 sec</td>
                  <td>NA</td>
                  <td>88 bpm</td>
                  <td>67%</td>
                  <td className="d-flex justify-content-center">
                    <a href="#" className="mr-2 bg-circle"><i className="fa fa-bars" aria-hidden="true"></i></a>
                    <a href="#" className="bg-circle"><i className="fa fa-minus" aria-hidden="true"></i></a>
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>
          <div className="p-3 activity-form mt-2">
            <div className="border-bottom">
              <div className="row">

              
              <div className="col-md-2">
                <div className="form-group mt-3">
                    <span className="cover-border"></span>
                    <label className="label">Activity name</label>
                    <input type="text" className="input-field" />
                  </div>
                  
              </div>
              <div className="col-md-2">
                <div className="form-group mt-3">
                    <span className="cover-border"></span>
                    <label className="label">Activity type</label>
                    <select
                        className="input-field"
                        id="exampleFormControlSelect1"
                      >
                        <option></option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                      <span className="dropdown-icon"></span>
                  </div>
              </div>
              <div className="col-md-2">
                <div className="form-group mt-3">
                    <span className="cover-border"></span>
                    <label className="label">Duration type</label>
                    <select
                        className="input-field"
                        id="exampleFormControlSelect1"
                      >
                        <option></option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                      <span className="dropdown-icon"></span>
                  </div>
              </div>
              <div className="col-md-1">
                <div className="form-group mt-3">
                    <span className="cover-border"></span>
                    <label className="label">Count</label>
                    <input type="text" className="input-field" />
                  </div>
                  
              </div>
              <div className="col-md-1">
                <div className="form-group mt-3">
                    <span className="cover-border"></span>
                    <label className="label">Video</label>
                    <input type="text" placeholder="browse" className="input-field" />
                  </div>
                  
              </div>
              <div className="col-md-2">
                <div className="form-group mt-3">
                    <span className="cover-border"></span>
                    <label className="label">Target BPM</label>
                    <input type="text" className="input-field" />
                  </div>
                  
              </div>
              <div className="col-md-2">
                <div className="form-group mt-3">
                    <span className="cover-border"></span>
                    <label className="label">Target Zone</label>
                    <input type="text" className="input-field" />
                  </div>
                  
              </div>
            </div>
            </div>
          </div>
          <a href="#" className="activity-link pl-3"><span>+</span> Activity</a>
        </div>
        <div className="p-3 gray-box no-border-radius">
          <div className="session"><h3 className="info">Shopping List</h3></div>
          <div className="row">
            <div className="col-md-4">
                <a href="#" className="pick" data-toggle="modal" data-target="#myModal3"><img src="images/picking.png" className="mr-2" /> Pick from existing list</a>
            </div>
            <div className="col-md-4">
                <a href="#" className="pick"><img src="images/add.png" className="mr-2" /> Add a new Product</a>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
            <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">item Name</label>
                      <input type="text" className="input-field" />
                    </div>
            </div>
            <div className="col-md-3">
            <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">Quantity</label>
                      <input type="text" className="input-field" />
                    </div>
            </div>
            <div className="col-md-4">
            <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">Item  notes</label>
                      <input type="text" className="input-field" />
                    </div>
            </div>
            <div className="col-md-1">
              <a href="#" className="bg-circle mt-3"><i className="fa fa-minus" aria-hidden="true"></i></a>
            </div>
          </div>
          
        </div>
        <div className="p-3 gray-box2 no-border-radius">
          <div className="session"><h3 className="info">Equipment List</h3></div>
          <div className="row">
            <div className="col-md-4">
                <a href="#" className="pick" data-toggle="modal" data-target="#myModal2"><img src="images/picking.png" className="mr-2" /> Pick from existing list</a>
            </div>
            <div className="col-md-4">
                <a href="#" className="pick"><img src="images/add.png" className="mr-2" /> Add a new item</a>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
            <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">item Name</label>
                      <input type="text" className="input-field" />
                    </div>
            </div>
            <div className="col-md-3">
            <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">Quantity</label>
                      <input type="text" className="input-field" />
                    </div>
            </div>
            
            <div className="col-md-1">
              <a href="#" className="bg-circle mt-3"><i className="fa fa-minus" aria-hidden="true"></i></a>
            </div>
          </div>
          
        </div>
        <a href="#" className="save-btn btn btn-primary my-5 mx-auto">Save</a>
        <div className="modal" id="myModal">
    <div className="modal-dialog dialogwidth">
      <div className="modal-content modalbg">
      
        <div className="modal-header headerborder">
          <h4 className="modal-title white">Pick a Product</h4>
          <button type="button" class="close white" data-dismiss="modal">&times;</button>
        </div>
        
        <div className="modal-body ">
         <div className="card cardbg">
  <article className="card-group-item">
    <div className="filter-content">
      <div className="card-body ">
      <form>
        <label className="form-check labelborder">
         <input className="form-radio" type="radio" name="audio-type" id="lbl-communications" value="communications"/>
          <span className="form-check-label">
            Mersedes Benz
          </span>
        </label> 
        <label className="form-check labelborder">
          <input className="form-radio" type="radio" name="audio-type" id="lbl-communications" value="communications"/>
          <span className="form-check-label">
            Nissan Altima
          </span>
        </label>  
        <label className="form-check labelborder">
         <input className="form-radio" type="radio" name="audio-type" id="lbl-communications" value="communications"/>
          <span className="form-check-label">
            Another Brand
          </span>
        </label>  
      </form>

      </div> 
    </div>
  </article> 
  
  
</div> 
        </div>
        
        <div className="modal-footer footerborder">
          
        </div>
        
      </div>
      
    </div>
  </div>
  

  <div className="modal" id="myModal2">
    <div className="">
      <div className="modal-content equipmodalbg">
      
        <div className="modal-header headerborder">
          <div className="plusicon"><i className="fa fa-plus" aria-hidden="true"></i></div>
          <h4 className="modal-title white">Pick from existing Equipments list</h4>
          <button type="button" className="close white closepopup" data-dismiss="modal">&times;</button>
        </div>
        
        <div className="modal-body ">
         <div className="card cardbg">
                
                
                <div className="searchbar">
                  <input type="text" className="searchbarinput" placeholder="Search for Equipment"/>
                  <button className="inputbtn" type="button">
                     
                  </button>
                </div>


                <div className="checkboxdiv">
                      <div className="mt-4"></div>
                      <label className="custom-control custom-checkbox lebelheight">
                        <input type="checkbox" className="form-radio"/>
                        <span className="checktxt">Vestibulum rutrum qu.</span>
                      </label>

                      <label className="custom-control custom-checkbox lebelheight">
                        <input type="checkbox" className="form-radio"/>
                        <span className="checktxt">Nam dapibus nisl vit.</span>
                      </label>

                     <label className="custom-control custom-checkbox lebelheight">
                        <input type="checkbox" className="form-radio"/>
                        <span className="checktxt">Donec facilisis tort.</span>
                      </label>
                </div>

                <div className="row checkboxdiv_3">
                  <div className="col-md-4">
                    <label className="custom-control custom-checkbox lebelheight">
                      <input type="checkbox" className="form-radio"/>
                      <span className="checktxt">Curabitue lobortis.</span>
                    </label>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group"><span className="cover-border"></span><input type="text" className="input-field-2" placeholder="Quantity"/></div>
                  </div>
                </div>

                
                <div className="checkboxdiv_2">
                <label className="custom-control custom-checkbox lebelheight">
                  <input type="checkbox" className="form-radio"/>
                  <span className="checktxt">Donec facilisis to.</span>
                </label>

                <label className="custom-control custom-checkbox lebelheight">
                  <input type="checkbox" className="form-radio"/>
                  <span className="checktxt">Vestibulum rutrum.</span>
                </label>

                <label className="custom-control custom-checkbox lebelheight">
                  <input type="checkbox" className="form-radio"/>
                  <span className="checktxt">Nam dapibus nisl vit.</span>
                </label>

                <label className="custom-control custom-checkbox lebelheight">
                  <input type="checkbox" className="form-radio"/>
                  <span className="checktxt">Fusce vehicula dolor.</span>
                </label>

        </div>
         
        </div>
        
       </div>
      </div>
       <div className="donebg"><button type="button" className="done">Done</button></div>

    </div>
  </div>
 

  <div className="modal" id="myModal3">
    <div className="">
      <div className="modal-content equipmodalbg">
      
        <div className="modal-header headerborder">
          <div className="plusicon"><i className="fa fa-plus" aria-hidden="true"></i></div>
          <h4 className="modal-title white">Pick from existing Shopping list</h4>
          <button type="button" className="close white closepopup" data-dismiss="modal">&times;</button>
        </div>
        
        <div className="modal-body ">
         <div className="card cardbg">
                
                
                <div className="searchbar">
                  <input type="text" className="searchbarinput" placeholder="Search for Equipment"/>
                  <button className="inputbtn" type="button">
                     
                  </button>
                </div>


                <div className="checkboxdiv">
                      <div className="mt-4"></div>
                      <label className="custom-control custom-checkbox lebelheight">
                        <input type="checkbox" className="form-radio"/>
                        <span className="checktxt">Nam dapibus nisl vit.</span>
                      </label>

                      <label className="custom-control custom-checkbox lebelheight">
                        <input type="checkbox" className="form-radio"/>
                        <span className="checktxt">Donec facilisis tort.</span>
                      </label>

                     <label className="custom-control custom-checkbox lebelheight">
                        <input type="checkbox" className="form-radio"/>
                        <span className="checktxt">In hac habitasse pla.</span>
                      </label>
                </div>

                <div className="row checkboxdiv_3">
                  <div className="col-md-4">
                    <label className="custom-control custom-checkbox lebelheight">
                      <input type="checkbox" className="form-radio"/>
                      <span className="checktxt">In hac habitasse pla.</span>
                    </label>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group"><span className="cover-border"></span><input type="text" className="input-field-2" placeholder="Quantity"/></div>
                  </div>
                  <div className="col-md-5">
                    <div className="form-group"><span className="cover-border"></span><input type="text" className="input-field-2" placeholder="Item Notes"/></div>
                  </div>
                </div>

                
                <div className="checkboxdiv_2">
                <label className="custom-control custom-checkbox lebelheight">
                  <input type="checkbox" className="form-radio"/>
                  <span className="checktxt">Mauris non tempor qu.</span>
                </label>

                <label className="custom-control custom-checkbox lebelheight">
                  <input type="checkbox" className="form-radio"/>
                  <span className="checktxt">Curabitur lobortis.</span>
                </label>

                <label className="custom-control custom-checkbox lebelheight">
                  <input type="checkbox" className="form-radio"/>
                  <span className="checktxt">Curabitur lobortis.</span>
                </label>

                <label className="custom-control custom-checkbox lebelheight">
                  <input type="checkbox" className="form-radio"/>
                  <span className="checktxt">Curabitur lobortis.</span>
                </label>

                <div className="row checkboxdiv_3">
                  <div className="col-md-4">
                    <label className="custom-control custom-checkbox lebelheight">
                      <input type="checkbox" className="form-radio"/>
                      <span className="checktxt">Donec facilisis tort.</span>
                    </label>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group"><span className="cover-border"></span><input type="text" className="input-field-2" placeholder="Quantity"/></div>
                  </div>
                  <div className="col-md-5">
                    <div className="form-group"><span className="cover-border"></span><input type="text" className="input-field-2" placeholder="Item UOM"/></div>
                  </div>
                </div>

        </div>
         
        </div>
        
       </div>
      </div>
       <div className="donebg"><button type="button" className="done">Done</button></div>

    </div>
  </div>
  
  
  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
    Pick a product
  </button>
      </div>
    );
  }
}

export default Header;
