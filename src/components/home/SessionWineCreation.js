import React, { Component } from "react";
import axios from "axios";
import $ from 'jquery';

//import $ from 'jquery';
//import DateTimeField from "react-bootstrap-datetimepicker";

class SessionWineCreation extends Component {
  
  constructor(props) {
	super(props);
    
}

 render() {

    return (
	<div>
	    <div id="root">
        <div className="App">
            <div className="container-fluid">
                <div className="row top-header p-4">
                    <div className="col-lg-2 d-flex d-md-block justify-content-center p-2"><img src="/images/login-logo.png" className="logo" /></div>
                    <div className="col-lg-4 d-flex d-md-block justify-content-center p-4">
                        <div className="user-info d-flex align-items-center"><img src="images/pic.jpg" className="user-avtar pic" />
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
                                <h3>66%</h3></div><span className="border-right gray-border"></span>
                            <div className="header-info-right">
                                <p>Total Views</p>
                                <h3>45.6K</h3></div><span className="border-right gray-border"></span>
                            <div className="header-info-right">
                                <p>Total Revenue</p>
                                <h3>$44,000</h3></div><span className="border-right gray-border"></span>
                                  <div className="message-notification"><img src="images/message.png" />
                              <span className="message-count">2</span></div>
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden pt-3">
                    <h4 className="text-white float-left">CREATE SESSION</h4>
                    <div className="d-flex flex-wrap float-right">
                        <p className="float-right purple_text mr-5 bordr-right">Copy Form...</p>
                        <p className="float-right purple_text mr-5 ml-4"><a href="#" className="purple_text">x</a></p>
                    </div>
                    
                </div>
                <div className="gray-box">
                    <div className="session">
                        <h3 className="info"><img src="images/information.png" className="mr-3 mb-2 text_lft_icon" alt="information" />Session Info</h3></div>
                    <div className="container-fluid register-form">
                        <div className="form">
                            <div className="form-content">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group"><span className="cover-border"></span>
                                            <label className="label">Session Name</label>
                                            <input type="text" className="input-field" />
                                        </div>
                                        <div className="form-group"><span className="cover-border"></span>
                                            <label className="label">Description</label>
                                            <textarea type="text" className="input-field"></textarea>
                                        </div>
                                        <div className="form-group"><span className="cover-border"></span>
                                            <label className="label">Level</label>
                                            <select className="input-field" id="exampleFormControlSelect1">
                                                <option>Pick a Difficulty level</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select><span className="dropdown-icon"></span></div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group"><span className="cover-border"></span>
                                            <label className="label">When?</label>
                                            <input type="text" className="input-field" placeholder="Pick a date and time" /><span className="when-icon"></span></div>
                                        <div className="form-group"><span className="cover-border"></span>
                                            <label className="label">How long?</label>
                                            <select className="input-field" id="exampleFormControlSelect1">
                                                <option>Pick a Duration</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select><span className="dropdown-icon"></span></div>
                                        <div className="form-group"><span className="cover-border"></span>
                                            <label className="label">Minimum Participants</label>
                                            <div className="">
                                                <input type="text" className="input-field" placeholder="min 1" /><span className="signedup_2"></span></div>
                                        </div>
                                        <div className="form-group"><span className="cover-border"></span>
                                            <label className="label">Maximum Participants</label>
                                            <input type="text" className="input-field" placeholder="max 50" /><span className="signedup_2"></span></div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="form-group input-txt">
                                            <label className="switch">
                                                <input type="checkbox" />
                                                <span className="slider round"></span>
                                            </label>
                                            <span>Show Participants Signed Up Count on Searches?</span><img src="images/bulb.png" className="ml-3 mb-2" />

                                        </div>

                                        <div className="form-group input-txt mt-2 mt-md-4 mt-lg-5">
                                            <label className="switch">
                                                <input type="checkbox" /><span className="slider round"></span></label><span>Charging for Session?</span>
                                            <p className="gray-text ml-5 mt-3 mb-4">You have enabled it in the Channel</p>
                                        </div>
                                        <div className="form-group w-50 ml-5"><span className="cover-border"></span>
                                            <label className="label">Charge amount</label>
                                            <div className="">
                                                <input type="text" className="input-field" placeholder="Enter amount" /><span className="dollar"></span></div>
                                        </div>
                                        <div className="form-group input-txt">
                                            <label className="switch">
                                                <input type="checkbox" />
                                                <span className="slider round"></span>
                                            </label>
                                            <span>Allow Participants To Order wine at end of session</span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gray-box2">
                    <div className="session">
                        <h3 className="info"><img src="images/reminder.png" className="mr-3 mb-2" />Reminders</h3></div>
                    <div className="container-fluid register-form">
                        <div className="form">
                            <div className="form-content">
                                <div className="row">
                                    <div className="col-md-4">
                                        <p className="text1 mb-4">for Hosts prior to start of Session</p>
                                        <div className="form-group mt-2"><span className="cover-border"></span>
                                            <label className="label">Enter a value in Minutes</label>
                                            <input type="text" className="input-field" /><span className="clock-icon"></span></div>
                                        <p className="text1 mb-4">Sign up Cut off Date/Time</p>
                                        <div className="form-group mt-2"><span className="cover-border"></span>
                                            <label className="label">Pick Date/Time</label>
                                            <input type="text" className="input-field" placeholder="" /><span className="when-icon"></span></div>
                                    </div>
                                    <div className="col-md-4">
                                        <p className="text1 mb-4">for Participants prior to start of Session</p>
                                        <div className="form-group mt-2"><span className="cover-border"></span>
                                            <label className="label">Enter a value in Minutes</label>
                                            <input type="text" className="input-field" /><span className="clock-icon"></span></div>
                                        <p className="text1 mb-4">for 'minimum not met'</p>
                                        <div className="form-group mt-2"><span className="cover-border"></span>
                                            <label className="label">Enter a value in days</label>
                                            <input type="text" className="input-field" /><span className="clock-icon"></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-3 gray-box no-border-radius">
                    <div className="row">
                        <div className="session">
                            <h3 className="info"><img src="images/privacy.png" className="mr-3 mb-2" />Privacy during Session</h3></div>
                        <div className="col-md-6">
                            <div className="form-group input-txt">
                                <label className="switch">
                                    <input type="checkbox" /><span className="slider round"></span></label><span>Participants allowed to disable DM with others</span><img src="images/bulb.png" className="ml-3 mb-2" /></div>
                            <div className="form-group input-txt">
                                <label className="switch">
                                    <input type="checkbox" /><span className="slider round"></span></label><span>Show Participants picture to other Participants?</span></div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group input-txt">
                                <label className="switch">
                                    <input type="checkbox" /><span className="slider round"></span></label><span>Allow Participants to pick their own playlist?</span></div>
                        </div>
                    </div>
                </div>
                <div className="gray-box2">
                    <div className="session">
                        <h3 className="info"><img src="images/teamwork.png" className="mr-3 mb-2" />Groups</h3></div>
                    <div className="col-md-6 pb-4">
                        <div className="form-group input-txt">
                            <label className="switch">
                                <input type="checkbox" /><span className="slider round"></span></label><span>Allow Groups at a Location?</span> <img src="images/bulb.png" className="ml-3 mb-2" /></div>
                    </div>
                </div>
                <div className="p-3">
                    <div className="session">
                        <h3 className="info"><img src="images/user.png" className="mr-3 mb-2" />Select Host(s)</h3></div>
                    <div className="row pb-4">
                        <div className="col-md-4">
                            <a href="#" className="pick" data-toggle="modal" data-target="#pick_host_modal"><img src="images/picking.png" className="mr-2" /> Pick from existing hosts</a>
                        </div>
                        <div className="col-md-4">
                            <a href="#" className="pick"><img src="images/add.png" className="mr-2" /> Add a new Host</a>
                        </div>
                    </div>
                </div>
                <div className="gray-box2 pb-4">
                    <div className="session px-3">
                        <h3 className="info myheading"><img src="images/testing.png" className="mr-3 text_lft_icon" alt="script-icon" />Testing Script</h3>
                    </div>
                    <div className="px-3 pb-0 mt-2 add_wine_expand">
                        <div className="row mt-5">                        
                            <div className="col-lg-3 col-md-6 mt-3 mt-md-0">
                                <div className="form-group mb-0" data-toggle="modal" data-target="#myModal"><span className="cover-border"></span>
                                    <label className="label">Pick a Wine</label>
                                    <input type="text" className="input-field" /><span className="emojis-icon"></span>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6 mt-3 mt-md-0 pr-lg-4">
                              <div className="form-group mb-0" data-toggle="modal" data-target="#pick_emojis_modal"><span className="cover-border"></span>
                                    <label className="label">Pick Emojis (opotional)</label>
                                    <input type="text" className="input-field" /><span className="emojis-icon"></span>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 mt-3 mt-md-0 pl-lg-0">
                                <div className="d-flex">
                                   <div className="form-group mb-0 input-txt">
                                      <label className="switch mr-2">
                                          <input type="checkbox" />
                                          <span className="slider round"></span>
                                      </label>
                                    </div>
                                    <div><span className="hdng p-0">Allow Testers to score? (opotional)</span></div>
                              </div>
                            </div>                                              
                        </div>
                        <div className="border-bottom mt-3"></div>                    
                    </div>
                    <div className="px-3 pb-0 mt-2">
                      <div className="row mt-5">
                          <div className="col-lg-3 col-md-4 mt-3 mt-md-0">
                            <p className="hdng">Wine</p>
                            <p className="hdng1 mr-0 pl-3"><img src="images/eye.png" className="mr-3" />Lacrima Lui Ovidiu 2001</p>
                          </div>
                          <div className="col-lg-2 col-md-4 mt-3 mt-md-0">
                              <p className="hdng">Appearance</p>
                              <div className="color-icons pl-3">
                                <img src="images/cherry.png" className="mr-2" />
                                <img src="images/burgundy.png" className="mr-2" />
                                <img src="images/auburn.png" className="mr-2" />
                                <span>...</span>
                              </div>
                          </div>
                          <div className="col-lg-2 col-md-4 mt-3 mt-md-0">
                              <p className="hdng">Aroma</p>
                              <div className="color-icons pl-3">
                                <img src="images/apple.png" className="mr-2" />
                                <img src="images/grapes.png" className="mr-2" />
                                <img src="images/cheese.png" className="mr-2" />
                                <span>...</span>
                              </div>
                          </div>
                          <div className="col-lg-2 col-md-4 mt-3 mt-md-0">
                              <p className="hdng">Palate</p>
                              <div className="color-icons pl-3">
                                <img src="images/smily.png" className="mr-2" />
                                <img src="images/smily.png" className="mr-2" />
                                <img src="images/smily.png" className="mr-2" />
                                <span>...</span>
                              </div>
                          </div>
                          <div className="col-lg-3 col-md-4 mt-3 mt-md-0">
                            <div className="d-flex">
                               <div className="form-group input-txt">
                                  <label className="switch mr-2">
                                      <input type="checkbox" />
                                      <span className="slider round"></span>
                                  </label>
                                </div>
                                <div><span className="hdng p-0">Allow Testers to score</span></div>
                                <div className="mt-2">
                                  <a href="#" className="mr-2 bg-circle"><i className="fa fa-bars" aria-hidden="true"></i></a>
                                </div>
                                  <div className="pr-3 mt-2">
                                    <a href="#" className="bg-circle"><i className="fa fa-minus" aria-hidden="true"></i>
                                    </a>
                                </div>
                          </div>
                      </div>
                  </div>
                  <div className="border-bottom mt-3"></div>  
                </div>
                <div className="p-3 pb-0 mt-2">                    
                      <div className="row mt-4">
                          <div className="col-lg-5 col-md-6 mt-3 mt-md-0">
                            <div className="form-group"><span className="cover-border"></span>
                                <label className="label">Description</label>
                                <input type="text" className="input-field" />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 mt-3 mt-md-0 px-lg-0">
                              <div className="form-group"><span className="cover-border"></span>
                                    <label className="label">Add Media</label>
                                    <input type="text" className="input-field" /><span className="browse">Browse</span>
                                </div>
                          </div>
                          <div className="col-lg-3 col-md-6 mt-3 mt-md-0">
                                <div className="form-group"><span className="cover-border"></span>
                                    <label className="label">Pick Emojis</label>
                                    <input type="text" className="input-field" /><span className="emojis-icon"></span>
                                </div>
                            </div>
                      </div>
                      <div className="border-bottom"></div>
                    </div>
                    <div className="p-3 pb-0">
                        <div className="row mt-4">
                          <div className="col-lg-6 col-md-6 mt-3 mt-md-0">
                            <p className="hdng">Description</p>
                            <p className="hdng1 font-18 mr-0 pl-3">In Hac Habitasse platea dictumst. Vivamus adipiscing ferm ...</p>
                          </div>
                          <div className="col-lg-3 col-md-6 mt-3 mt-md-0 px-lg-0">
                              <p className="hdng mb-2">Media Added</p>
                              <p><a href="#" className="purple_link">www.somelink.com/product</a></p>
                          </div>
                          <div className="col-lg-3 col-md-3 mt-3 mt-md-0">
                              <p className="hdng mb-2">Emogis</p>
                              <div className="overflow-hidden">
                                  <div className="color-icons pl-3 float-left">
                                    <img src="images/apple.png" className="mr-2" />
                                    <img src="images/grapes.png" className="mr-2" />
                                    <img src="images/cheese.png" className="mr-2" />
                                    <span>...</span>
                                  </div>
                                  <div className="float-right pr-3">
                                      <a href="#" className="mr-2 bg-circle"><i className="fa fa-bars" aria-hidden="true"></i></a>
                                      <a href="#" className="bg-circle"><i className="fa fa-minus" aria-hidden="true"></i></a>
                                    </div>
                              </div>
                          </div>
                      </div>
                      <div className="border-bottom mt-3">
                  </div>
                    <div className="px-3 pt-3">                    
                        <a href="#" className="activity-link add_wine"><span>+</span> Wine</a>
                        <a href="#" className="activity-link ml-5"><span>+</span> Info</a><img src="images/bulb.png" className="ml-3 mb-2" />
                    </div>
                </div>
                <div className="p-3 gray-box no-border-radius">
                    <div className="session">
                        <h3 className="info"><img src="images/shopping-icon.png" className="mr-3 mb-2" />Shopping List</h3></div>
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <a href="#" className="pick" data-toggle="modal" data-target="#myModal3"><img src="images/picking.png" className="mr-2" /> Pick from existing list</a>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <a href="#" className="pick"><img src="images/add.png" className="mr-2" /> Add all Product from Script</a>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <a href="#" className="pick" data-toggle="modal" data-target="#add_product_modal"><img src="images/add.png" className="mr-2" /> Add a new Product</a>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div className="form-group"><span className="cover-border"></span>
                                <label className="label">item Name</label>
                                <input type="text" className="input-field" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group"><span className="cover-border"></span>
                                <label className="label">Quantity</label>
                                <input type="text" className="input-field" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group"><span className="cover-border"></span>
                                <label className="label">Item notes</label>
                                <input type="text" className="input-field" />
                            </div>
                        </div>
                        <div className="col-md-1"><a href="#" className="bg-circle mt-3"><i className="fa fa-minus" aria-hidden="true"></i></a></div>
                    </div>
                </div>
                <div className="p-3 gray-box2 no-border-radius">
                    <div className="session">
                        <h3 className="info"><img src="images/shopping icon.png" className="mr-3 mb-2" />Equipment List</h3></div>
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
                            <div className="form-group"><span className="cover-border"></span>
                                <label className="label">item Name</label>
                                <input type="text" className="input-field" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group"><span className="cover-border"></span>
                                <label className="label">Quantity</label>
                                <input type="text" className="input-field" />
                            </div>
                        </div>
                        <div className="col-md-1"><a href="#" className="bg-circle mt-3"><i className="fa fa-minus" aria-hidden="true"></i></a></div>
                    </div>
                </div><a href="#" className="save-btn btn btn-primary my-5 mx-auto">Save</a>
                <div className="modal" id="myModal">
                    <div className="modal-dialog dialogwidth">
                        <div className="modal-content modalbg">
                            <div className="modal-header headerborder">
                                <h4 className="modal-title white">Pick a Product</h4>
                                <button type="button" className="close white" data-dismiss="modal">×</button>
                            </div>
                            <div className="modal-body ">
                                <div className="card cardbg">
                                    <article className="card-group-item">
                                        <div className="filter-content">
                                            <div className="card-body ">
                                                <form>
                                                    <label className="form-check labelborder">
                                                        <input className="form-radio" type="radio" name="audio-type" id="" value="" /><span className="form-check-label">Mersedes Benz</span></label>
                                                    <label className="form-check labelborder">
                                                        <input className="form-radio" type="radio" name="audio-type" id="" value="" /><span className="form-check-label">Nissan Altima</span></label>
                                                    <label className="form-check labelborder">
                                                        <input className="form-radio" type="radio" name="audio-type" id="" value="" /><span className="form-check-label">Another Brand</span></label>
                                                </form>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <div className="modal-footer footerborder"></div>
                        </div>
                    </div>
                </div>
                <div className="modal" id="myModal2">
                    <div className="">
                        <div className="modal-content equipmodalbg">
                            <div className="modal-header headerborder">
                                <div className="plusicon"><i className="fa fa-plus" aria-hidden="true"></i></div>
                                <h4 className="modal-title white">Pick from existing Equipments list</h4>
                                <button type="button" className="close white closepopup" data-dismiss="modal">×</button>
                            </div>
                            <div className="modal-body ">
                                <div className="card cardbg">
                                    <div className="searchbar">
                                        <input type="text" className="searchbarinput" placeholder="Search for Equipment" />
                                        <button className="inputbtn" type="button"></button>
                                    </div>
                                    <div className="checkboxdiv">
                                        <div className="mt-4"></div>
                                        <label className="custom-control custom-checkbox lebelheight">
                                            <input type="checkbox" className="form-radio" /><span className="checktxt">Vestibulum rutrum qu.</span></label>
                                        <label className="custom-control custom-checkbox lebelheight">
                                            <input type="checkbox" className="form-radio" /><span className="checktxt">Nam dapibus nisl vit.</span></label>
                                        <label className="custom-control custom-checkbox lebelheight">
                                            <input type="checkbox" className="form-radio" /><span className="checktxt">Donec facilisis tort.</span></label>
                                    </div>
                                    <div className="row checkboxdiv_3">
                                        <div className="col-md-4">
                                            <label className="custom-control cust /om-checkbox lebelheight">
                                                <input type="checkbox" className="form-radio" /><span className="checktxt">Curabitue lobortis.</span></label>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group"><span className="cover-border"></span>
                                                <input type="text" className="input-field-2" placeholder="Quantity" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="checkboxdiv_2">
                                        <label className="custom-control custom-checkbox lebelheight">
                                            <input type="checkbox" className="form-radio" /><span className="checktxt">Donec facilisis to.</span></label>
                                        <label className="custom-control custom-checkbox lebelheight">
                                            <input type="checkbox" className="form-radio" /><span className="checktxt">Vestibulum rutrum.</span></label>
                                        <label className="custom-control custom-checkbox lebelheight">
                                            <input type="checkbox" className="form-radio" /><span className="checktxt">Nam dapibus nisl vit.</span></label>
                                        <label className="custom-control custom-checkbox lebelheight">
                                            <input type="checkbox" className="form-radio" /><span className="checktxt">Fusce vehicula dolor.</span></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="donebg">
                            <button type="button" className="done">Done</button>
                        </div>
                    </div>
                </div>
                <div className="modal" id="myModal3">
                    <div className="">
                        <div className="modal-content equipmodalbg">
                            <div className="modal-header headerborder">
                                <div className="plusicon"><i className="fa fa-plus" aria-hidden="true"></i></div>
                                <h4 className="modal-title white">Pick from existing Shopping list</h4>
                                <button type="button" className="close white closepopup" data-dismiss="modal">×</button>
                            </div>
                            <div className="modal-body ">
                                <div className="card cardbg">
                                    <div className="searchbar">
                                        <input type="text" className="searchbarinput" placeholder="Search for Equipment" />
                                        <button className="inputbtn" type="button"></button>
                                    </div>
                                    <div className="checkboxdiv">
                                        <div className="mt-4"></div>
                                        <label className="custom-control custom-checkbox lebelheight">
                                            <input type="checkbox" className="form-radio" /><span className="checktxt">Nam dapibus nisl vit.</span></label>
                                        <label className="custom-control custom-checkbox lebelheight">
                                            <input type="checkbox" className="form-radio" /><span className="checktxt">Donec facilisis tort.</span></label>
                                        <label className="custom-control custom-checkbox lebelheight">
                                            <input type="checkbox" className="form-radio" /><span className="checktxt">In hac habitasse pla.</span></label>
                                    </div>
                                    <div className="row checkboxdiv_3">
                                        <div className="col-md-4">
                                            <label className="custom-control custom-checkbox lebelheight">
                                                <input type="checkbox" className="form-radio" /><span className="checktxt">In hac habitasse pla.</span></label>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group"><span className="cover-border"></span>
                                                <input type="text" className="input-field-2" placeholder="Quantity" />
                                            </div>
                                        </div> /
                                        <div className="col-md-5">
                                            <div className="form-group"><span className="cover-border"></span>
                                                <input type="text" className="input-field-2" placeholder="Item Notes" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="checkboxdiv_2">
                                        <label className="custom-control custom-checkbox lebelheight">
                                            <input type="checkbox" className="form-radio" /><span className="checktxt">Mauris non tempor qu.</span></label>
                                        <label className="custom-control custom-checkbox lebelheight">
                                            <input type="checkbox" className="form-radio" /><span className="checktxt">Curabitur lobortis.</span></label>
                                        <label className="custom-control custom-checkbox lebelheight">
                                            <input type="checkbox" className="form-radio" /><span className="checktxt">Curabitur lobortis.</span></label>
                                        <label className="custom-control custom-checkbox lebelheight">
                                            <input type="checkbox" className="form-radio" /><span className="checktxt">Curabitur lobortis.</span></label>
                                        <div className="row checkboxdiv_3">
                                            <div className="col-md-4">
                                                <label className="custom-control custom-checkbox lebelheight">
                                                    <input type="checkbox" className="form-radio" /><span className="checktxt">Donec facilisis tort.</span></label>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="form-group"><span className="cover-border"></span>
                                                    <input type="text" className="input-field-2" placeholder="Quantity" />
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="form-group"><span className="cover-border"></span>
                                                    <input type="text" className="input-field-2" placeholder="Item UOM" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="donebg">
                            <button type="button" className="done">Done</button>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">Pick a product</button>
            </div>
        </div>
    </div>
</div>
   
    <div className="modal show" id="pick_emojis_modal">
        <div className="modal-dialog emojis-dialogwidth">
            <div className="modal-content">
                <div className="modal-header modalbg">
                    <h4 className="modal-title white">Assign Emogis</h4>
                    <button type="button" className="close" data-dismiss="modal">×</button>
                </div>
                <form>
                <div className="modal-body modalbg">
                    
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card cardbg"> 
                                    <label className="form-check mb-4">
                                        <input className="form-radio" type="radio" name="" id="" value="" /><span className="form-check-label ml-3">APPEARANCE</span></label>                             
                                    <label className="form-check mb-4">
                                        <input className="form-radio" type="radio" name="" id="" value="" /><span className="form-check-label"><img src="images/cherry.png" className="mx-3" />Cherry</span></label>
                                    <label className="form-check mb-4">
                                        <input className="form-radio" type="radio" name="" id="" value="" /><span className="form-check-label"><img src="images/burgundy.png" className="mx-3" />Burgundy</span></label>
                                    <label className="form-check mb-4">
                                        <input className="form-radio" type="radio" name="" id="" value="" /><span className="form-check-label"><img src="images/auburn.png" className="mx-3" />Auburn</span></label>                                        
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card cardbg"> 
                                    <label className="form-check mb-4">
                                        <input className="form-radio" type="checkbox" name="audio-type" id="" value="" /><span className="form-check-label ml-3">AROMA</span></label>                             
                                    <label className="form-check mb-4">
                                        <input className="form-radio" type="checkbox" name="" id="" value="" /><span className="form-check-label"><img src="images/apple.png" className="mx-3" />Apple</span></label>
                                    <label className="form-check mb-4">
                                        <input className="form-radio" type="checkbox" name="" id="" value="" /><span className="form-check-label"><img src="images/grapes.png" className="mx-3" />Grapes</span></label>
                                    <label className="form-check mb-4">
                                        <input className="form-radio" type="checkbox" name="" id="" value="" /><span className="form-check-label"><img src="images/cheese.png" className="mx-3" />Cheese</span></label> 
                                        <label className="form-check mb-4">
                                        <input className="form-radio" type="checkbox" name="" id="" value="" /><span className="form-check-label"><img src="images/cheese.png" className="mx-3" />Parmezan</span></label> 
                                        <label className="form-check mb-4">
                                        <input className="form-radio" type="checkbox" name="" id="" value="" /><span className="form-check-label"><img src="images/apple.png" className="mx-3" />Tomatapple</span></label>                                        
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card cardbg"> 
                                    <label className="form-check mb-4">
                                        <input className="form-radio" type="checkbox" name="" id="" value="" /><span className="form-check-label ml-3">PALATE</span></label>                             
                                    <label className="form-check mb-4">
                                        <input className="form-radio" type="checkbox" name="" id="" value="" /><span className="form-check-label"><img src="images/apple.png" className="mx-3" />Example</span></label>
                                    <label className="form-check mb-4">
                                        <input className="form-radio" type="checkbox" name="" id="" value="" /><span className="form-check-label"><img src="images/grapes.png" className="mx-3" />Another</span></label>
                                    <label className="form-check mb-4">
                                        <input className="form-radio" type="checkbox" name="" id="" value="" /><span className="form-check-label"><img src="images/cheese.png" className="mx-3" />Few Example</span></label> 
                                        <label className="form-check mb-4">
                                        <input className="form-radio" type="checkbox" name="" id="" value="" /><span className="form-check-label"><img src="images/cheese.png" className="mx-3" />Non Selected</span></label>                                     
                                </div>
                            </div>
                        </div>
                    
                </div>
                <div className="footerborder text-center mt-4"><button className="btn-primary" data-dismiss="modal">SELECT</button></div>
                </form>
            </div>
        </div>
    </div>

    <div className="modal" id="pick_host_modal">
        <div className="">
            <div className="modal-content equipmodalbg">
                <div className="modal-header">
                    <div className="plusicon"><i className="fa fa-plus" aria-hidden="true"></i></div>
                    <h4 className="modal-title white">Pick from existing Equipments list</h4>
                    <button type="button" className="close white closepopup" data-dismiss="modal">×</button>
                </div>
                <div className="modal-body ">
                    <div className="card cardbg headerborder pb-4">
                        <div className="searchbar">
                            <input type="text" className="searchbarinput" placeholder="Search for Host" />
                            <button className="inputbtn" type="button"></button>
                        </div>
                    </div>
                    <div className="card cardbg">
                        <div className="row mt-4">
                            <div className="col-md-6 pl-md-0">
                                <label className="custom-control custom-checkbox lebelheight">
                                    <input type="checkbox" className="form-radio" />
                                    <img src="images/pic.jpg" className="ml-2 mr-3" alt="user-icon" />
                                    <div>
                                        <p className="checktxt_name pb-1">Nathan Taylor</p>
                                        <p className="checktxt">Next session on 22 JUL, 3:45 PM</p>
                                    </div>

                                </label>
                                <label className="custom-control custom-checkbox lebelheight">
                                    <input type="checkbox" className="form-radio" />
                                    <img src="images/pic.jpg" className="ml-2 mr-3" alt="user-icon" />
                                    <div>
                                        <p className="checktxt_name pb-1">Nathan Taylor</p>
                                        <p className="checktxt">Next session on 22 JUL, 3:45 PM</p>
                                    </div>

                                </label>
                                <label className="custom-control custom-checkbox lebelheight">
                                    <input type="checkbox" className="form-radio" />
                                    <img src="images/pic.jpg" className="ml-2 mr-3" alt="user-icon" />
                                    <div>
                                        <p className="checktxt_name pb-1">Nathan Taylor</p>
                                        <p className="checktxt">Next session on 22 JUL, 3:45 PM</p>
                                    </div>

                                </label>
                                <label className="custom-control custom-checkbox lebelheight">
                                    <input type="checkbox" className="form-radio" />
                                    <img src="images/pic.jpg" className="ml-2 mr-3" alt="user-icon" />
                                    <div>
                                        <p className="checktxt_name pb-1">Nathan Taylor</p>
                                        <p className="checktxt">Next session on 22 JUL, 3:45 PM</p>
                                    </div>

                                </label>
                                <label className="custom-control custom-checkbox lebelheight">
                                    <input type="checkbox" className="form-radio" />
                                    <img src="images/pic.jpg" className="ml-2 mr-3" alt="user-icon" />
                                    <div>
                                        <p className="checktxt_name pb-1">Nathan Taylor</p>
                                        <p className="checktxt">Next session on 22 JUL, 3:45 PM</p>
                                    </div>

                                </label>
                            </div>
                            <div className="col-md-6">
                                <label className="custom-control custom-checkbox lebelheight">
                                    <input type="checkbox" className="form-radio" />
                                    <img src="images/pic.jpg" className="ml-2 mr-3" alt="user-icon" />
                                    <div>
                                        <p className="checktxt_name pb-1">Nathan Taylor</p>
                                        <p className="checktxt">Next session on 22 JUL, 3:45 PM</p>
                                    </div>

                                </label>
                                <label className="custom-control custom-checkbox lebelheight">
                                    <input type="checkbox" className="form-radio" />
                                    <img src="images/pic.jpg" className="ml-2 mr-3" alt="user-icon" />
                                    <div>
                                        <p className="checktxt_name pb-1">Nathan Taylor</p>
                                        <p className="checktxt">Next session on 22 JUL, 3:45 PM</p>
                                    </div>

                                </label>
                                <label className="custom-control custom-checkbox lebelheight">
                                    <input type="checkbox" className="form-radio" />
                                    <img src="images/pic.jpg" className="ml-2 mr-3" alt="user-icon" />
                                    <div>
                                        <p className="checktxt_name pb-1">Nathan Taylor</p>
                                        <p className="checktxt">Next session on 22 JUL, 3:45 PM</p>
                                    </div>

                                </label>
                                <label className="custom-control custom-checkbox lebelheight">
                                    <input type="checkbox" className="form-radio" />
                                    <img src="images/pic.jpg" className="ml-2 mr-3" alt="user-icon" />
                                    <div>
                                        <p className="checktxt_name pb-1">Nathan Taylor</p>
                                        <p className="checktxt">Next session on 22 JUL, 3:45 PM</p>
                                    </div>

                                </label>
                                <label className="custom-control custom-checkbox lebelheight">
                                    <input type="checkbox" className="form-radio" />
                                    <img src="images/pic.jpg" className="ml-2 mr-3" alt="user-icon" />
                                    <div>
                                        <p className="checktxt_name pb-1">Nathan Taylor</p>
                                        <p className="checktxt">Next session on 22 JUL, 3:45 PM</p>
                                    </div>

                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="donebg">
                <button type="button" className="done mt-4">Done</button>
            </div>
        </div>
    </div>

     <div className="modal" id="add_product_modal">
        <div className="">
            <div className="modal-content equipmodalbg">
                <div className="modal-header">
                    <h4 className="modal-title white">Add a new Product<span>Tap on an attribute to make it active in the Product list</span></h4>
                    
                    <button type="button" className="close white closepopup" data-dismiss="modal">×</button>
                </div>
                <div className="modal-body ">
                    <div className="card cardbg mt-4">
                        <div className="form-group mb-0"><span className="cover-border"></span>
                            <label className="label">Name of the Product</label>
                            <input type="text" className="input-field" />
                        </div>
                    </div>
                    <div className="card cardbg">
                        <h4 className="white mt-4 mb-3">Add Attribute</h4>
                        <div className="d-flex flex-wrap">
                            <a href="#" className="btn btn-primary text-uppercase mr-2 mt-2">varietal</a>
                            <a href="#" className="btn btn-outline-secondary text-uppercase mr-2 mt-2">year</a>
                            <a href="#" className="btn btn-outline-secondary text-uppercase mr-2 mt-2">country</a>
                            <a href="#" className="btn btn-outline-secondary text-uppercase mr-2 mt-2">applellation</a>
                            <a href="#" className="btn btn-outline-secondary text-uppercase mr-2 mt-2">harvest date</a>
                            <a href="#" className="btn btn-outline-secondary text-uppercase mr-2 mt-2">alcohol acidity</a>
                            <a href="#" className="btn btn-outline-secondary text-uppercase mr-2 mt-2">bottle date</a>
                            <a href="#" className="btn btn-outline-secondary text-uppercase mr-2 mt-2">acidity</a>
                            <a href="#" className="btn btn-outline-secondary text-uppercase mr-2 mt-2">aging</a>
                            <a href="#" className="btn btn-primary text-uppercase mr-2 mt-2">price</a>
                            <a href="#" className="btn btn-outline-secondary text-uppercase mr-2 mt-2">score</a>
                            <a href="#" className="btn btn-outline-secondary text-uppercase mr-2 mt-2">case production</a>
                            <a href="#" className="btn btn-outline-secondary text-uppercase mr-2 mt-2">storage temperature</a>
                            <a href="#" className="btn btn-primary mr-2 mt-2">pH</a>
                            <a href="#" className="btn btn-primary text-uppercase mr-2 mt-2">appearance</a>
                            <a href="#" className="btn btn-outline-secondary text-uppercase mr-2 mt-2">varietal composition</a>
                            <a href="#" className="btn btn-primary text-uppercase mr-2 mt-2">aroma</a>
                            <a href="#" className="btn btn-primary text-uppercase mr-2 mt-2">palate</a>
                            <a href="#" className="btn btn-primary text-uppercase mr-2 mt-2">winemaking notes</a>
                            <a href="#" className="btn btn-primary text-uppercase mr-2 mt-2">testing notes</a>
                            <a href="#" className="btn btn-primary text-uppercase mr-2 mt-2">pairs with</a>
                        </div>
                    </div>
                    <div className="card cardbg mt-5">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group mb-0"><span className="cover-border"></span>
                                    <label className="label">Varietal</label>
                                    <input type="text" className="input-field" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group mb-0"><span className="cover-border"></span>
                                    <label className="label">Price</label>
                                    <input type="text" className="input-field" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group mb-0">
                                    <label className="label">pH</label>
                                    <input type="text" className="input-field footerborder" />
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-4">
                                <div className="form-group mb-0"><span className="cover-border"></span>
                                    <label className="label">Appearance</label>
                                    <input type="text" className="input-field" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group mb-0"><span className="cover-border"></span>
                                    <label className="label">Aroma</label>
                                    <input type="text" className="input-field" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group mb-0">
                                    <label className="label">Palate</label>
                                    <input type="text" className="input-field footerborder" />
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-4">
                                <div className="form-group mb-0"><span className="cover-border"></span>
                                    <label className="label">Testing Notes</label>
                                    <textarea rows="5" className="input-field"></textarea>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group mb-0"><span className="cover-border"></span>
                                    <label className="label">Winemaking Notes</label>
                                    <textarea rows="5" className="input-field"></textarea>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group mb-0">
                                    <label className="label">Pairs With</label>
                                    <textarea rows="5" className="input-field"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="donebg">
                <button type="button" className="done mt-4">Done</button>
            </div>
        </div>
    </div>

	</div>
)
}
}

export default SessionWineCreation;