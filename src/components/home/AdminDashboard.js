import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import $ from 'jquery';


class AdminDashboard extends Component {
  
  constructor(props) {
	super(props);
	this.state={
		startDate:new Date(),
		daysOfMonth:[],
		upcomingSession:[]

	}
	
    
}
 
componentDidMount(){
}
submitHost=(e)=>{
      console.log('ak');

      $("#bigg_cont").attr({'style':'display:block'});
  
  }
  closeGroup=(e)=>{
      console.log('ak');
    $("#bigg_cont").attr({'style':'display:none'});

  }

render() {
    return (
        <div>
            <div id="root">
                <div className="App">
                <div className="container-fluid px-4 py-5">
                    <div className="top_boxx pb-4">
                        <div className="row">
                            <div className="col-md-4">
                                <img src="/images/login-logo.png" alt="logo" className="logo" />
                            </div>
                            <div className="col-md-4">
                                <h3 className="white">Administrative Dashboard</h3>
                            </div>
                        </div>
                    </div>
                    <div className="bottm_boxx mt-4">
                        <div className="row">
                            <div className="col-md-8 col-lg-10 pr-md-4">
                                <div className="gray_bx1 py-4 px-2">
                                    <div className="d-flex px-3 align-items-center justify-content-between">
                                    <h4 className="text_dark_gray font-weight-bold font-18 pr-3">Manage Tablets</h4>
                                    <div className="flex-grow-1 line_custom"></div>
                                    <div className="pl-3"><img src="/images/1.png" alt="" /></div>
                                    </div>
                                    <div className="d-flex align-items-center flx pt-1 flex-wrap">
                                    <div className="flex-fill mt-3 mr-3 btn_link">
                                        <p className="cursor-pointer ml-2" data-toggle="modal" data-target="#manage_group_modal">Manage Groups</p>
                                        {/* <p className="cursor-pointer ml-2" onClick={this.submitHost} >Manage Groups</p> */}
                                    </div>
                                    <div className="flex-fill mt-3 ml-1 mr-3 pl-2">
                                        <p className="">Manage Users</p>
                                    </div>
                                    <div className="flex-fill mt-3 ml-1 mr-3 pl-2">
                                        <p className="">Manage State Codes</p>
                                    </div>
                                    <div className="flex-fill mt-3 ml-1 pl-2">
                                        <p className="">Manage Country Codes</p>
                                    </div>
                                    </div>
                                    <div className="d-flex align-items-center flx pt-3">
                                    <div className="ml-2 mt-3">
                                        <p className="cursor-pointer">Manage Channels</p>
                                    </div>                  
                                    </div>
                                </div>
                                <div className="gray_bx1 py-4 px-2 mt-4">
                                    <div className="d-flex px-3 align-items-center justify-content-between">
                                    <h4 className="text_dark_gray font-weight-bold font-18 pr-3">System Monitoring & Performance</h4>
                                    <div className="flex-grow-1 line_custom"></div>
                                    <div className="pl-3"><img src="/images/2.png" alt="" /></div>
                                    </div>
                                    <div className="d-flex align-items-center flx pt-1 flex-wrap">
                                    <div className="flex-fill mt-3 mr-3">
                                        <p className="cursor-pointer ml-2">Connection Issues</p>
                                    </div>
                                    <div className="flex-fill mt-3 ml-1 mr-3 pl-2">
                                        <p className="">Participant Ejections</p>
                                    </div>
                                    <div className="flex-fill mt-3 ml-1 mr-3 pl-2">
                                        <p className="">Key Stats</p>
                                    </div>
                                    <div className="flex-fill mt-3 ml-1 pl-2">
                                        <p className="">Session Monitoring & Performance</p>
                                    </div>
                                    </div>
                                    <div className="d-flex align-items-center flx pt-3">
                                    <div className="ml-2 mt-3">
                                        <p className="cursor-pointer">System Monitoring & Performance</p>
                                    </div>                  
                                    </div>
                                </div>
                                <div className="gray_bx1 py-4 px-2 mt-4">
                                    <div className="d-flex px-3 align-items-center justify-content-between">
                                    <h4 className="text_dark_gray font-weight-bold font-18 pr-3">Reports</h4>
                                    <div className="flex-grow-1 line_custom"></div>
                                    <div className="pl-3"><img src="/images/3.png" alt="" /></div>
                                    </div>
                                    <div className="d-flex align-items-center flx pt-1 flex-wrap">
                                    <div className="flex-fill mt-3 mr-3">
                                        <p className="cursor-pointer ml-2">Channel Report</p>
                                    </div>
                                    <div className="flex-fill mt-3 ml-1 mr-3 pl-2">
                                        <p className="">Session Report</p>
                                    </div>
                                    <div className="flex-fill mt-3 ml-1 mr-3 pl-2">
                                        <p className="">Host Report</p>
                                    </div>
                                    <div className="flex-fill mt-3 ml-1 pl-2">
                                        <p className="">Participant Report</p>
                                    </div>
                                    </div>
                                    <div className="d-flex align-items-center flx pt-3">
                                    <div className="ml-2 mt-3">
                                        <p className="cursor-pointer">System Monitoring & Performance</p>
                                    </div>                  
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-2 pl-md-0 mt-4 mt-md-0">
                            <div className="gray_bx1 innr_boxx h-100 py-4">
                                <div className="">
                                <h4 className="text_dark_gray px-4 font-weight-bold font-18">Active Sessions</h4>
                                <h3 className="activity-link px-4 position-relative">34</h3>
                                </div>
                                <div className="mt-5">
                                <h4 className="text_dark_gray px-4 font-weight-bold font-18">Participants</h4>
                                <h3 className="activity-link px-4 position-relative">1200</h3>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-sm-6 pr-md-2">
                                <div className="gray_bx1 py-4 px-2">
                                    <div className="d-flex px-3 align-items-center justify-content-between">
                                    <h4 className="text_dark_gray font-weight-bold font-18 pr-3">Subscriptions & Charges</h4>
                                    <div className="flex-grow-1 line_custom"></div>
                                    <div className="pl-3"><img src="/images/4.png" alt="" /></div>
                                    </div>
                                    <div className="d-flex align-items-center flx mt-3">
                                    <div className="ml-2">
                                        <p className="cursor-pointer">Denied Charges</p>
                                    </div>                  
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 mt-4 mt-sm-0">
                                <div className="gray_bx1 py-4 px-2">
                                    <div className="d-flex px-3 align-items-center justify-content-between">
                                    <h4 className="text_dark_gray font-weight-bold font-18 pr-3">Customer Support</h4>
                                    <div className="flex-grow-1 line_custom"></div>
                                    <div className="pl-3"><img src="/images/5.png" alt="" /></div>
                                    </div>
                                    <div className="d-flex align-items-center flx mt-3">
                                    <div className="ml-2">
                                        <p className="cursor-pointer">Pending Questions</p>
                                    </div>                  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="modal pr-0  show" id="manage_group_modal">
                {/* <div className="modal-dialog w-50 first_dialog">
                    <div className="modal-content">
                        <div className="py-2 mb-3 position-relative">
                            <h4 className="modal-title white text-center">Manage Group(s)</h4>
                            <button type="button" className="close white closepopup closee" data-dismiss="modal">×</button>
                        </div>
                        <div className="modal-body px-5 pb-5 modl_bg_drk shadow-none round"> 
                            <div className="py-5 my-5">
                            <h2 className="display-2 text-center">No Groups Found!</h2>
                            </div>
                            <div className="text-center">
                            <button type="button" className="custom_btn11" id="create_grup" onclick="showElem()">Create A Group</button>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="modal-dialog w-95 second_dialog">
                    <div className="modal-content p-3">
                        <div className="modal-header pb-3 border_none">
                            <div><img src="/images/login-logo.png" alt="logo" className="logo" /></div>
                                <div><h4 className="modal-title white text-center">Manage Group(s)</h4></div>
                                <div><button type="button" className="close white closepopup" data-dismiss="modal">×</button></div>
                            </div>
                            <div className="modal-body px-0 pb-5 shadow-none round">
                                <div className="card-columns float_container">
                                    <div className="card border_none bg-gray-shade radius-10">    
                                        <div className="card-body position-relative">
                                            <img src="/images/edit_icon.png" alt="edit" className="edt_icon" />
                                            <h2 className="">FITNESS<sup className="ml-2 sup-white">(24)</sup></h2>
                                            <p>Weight Lifting</p>
                                            <p>Weight Lifting</p>
                                            <p>Weight Lifting</p>
                                            <p>Weight Lifting</p>
                                            <p>Weight Lifting</p>
                                            <p>Weight Lifting</p>
                                            <p>Weight Lifting</p>
                                            <p>Weight Lifting</p>
                                            <p>Weight Lifting</p>
                                            <p>Weight Lifting</p>
                                            <p>Weight Lifting</p>
                                            <p>Weight Lifting</p>
                                            <div className="add_intrst pt-3">
                                            <p className=" add_intrs text-uppercase mb-0 pb-0"><a href="#"><span className="mr-2 pr-1">+</span>add interest</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card border_none bg-gray-shade radius-10">    
                                        <div className="card-body position-relative">
                                            <img src="/images/edit_icon.png" alt="edit" className="edt_icon" />
                                            <h2 className="">FITNESS<sup className="ml-2 sup-white">(24)</sup></h2>
                                            <p>Weight Lifting</p>
                                            <p>Weight Lifting</p>
                                            <p>Weight Lifting</p>
                                            <p>Weight Lifting</p>
                                            <div className="add_intrst pt-3">
                                                <p className=" add_intrs text-uppercase mb-0 pb-0"><a href="#"><span className="mr-2 pr-1">+</span>add interest</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card border_none bg-gray-shade radius-10">    
                                        <div className="card-body position-relative">
                                            <img src="/images/edit_icon.png" alt="edit" className="edt_icon" />
                                            <h2 className="">FITNESS<sup className="ml-2 sup-white">(24)</sup></h2>
                                            <p>Weight Lifting</p>
                                            <p>Weight Lifting</p>
                                            <p>Weight Lifting</p>
                                            <p>Weight Lifting</p>
                                            <div className="add_intrst pt-3">
                                                <p className=" add_intrs text-uppercase mb-0 pb-0"><a href="#"><span className="mr-2 pr-1">+</span>add interest</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card border_none bg-gray-shade radius-10">    
                                        <div className="card-body position-relative">
                                            <img src="/images/edit_icon.png" alt="edit" className="edt_icon" />
                                            <h2 className="">FITNESS<sup className="ml-2 sup-white">(24)</sup></h2>
                                            <p>Weight Lifting</p>
                                            <p>Weight Lifting</p>
                                            <p>Weight Lifting</p>
                                            <p>Weight Lifting</p>
                                            <div className="add_intrst pt-3">
                                                <p className=" add_intrs text-uppercase mb-0 pb-0"><a href="#"><span className="mr-2 pr-1">+</span>add interest</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card border_none bg-gray-shade radius-10">    
                                        <div className="card-body position-relative">
                                            <img src="/images/edit_icon.png" alt="edit" className="edt_icon" />
                                            <h2 className="">FITNESS<sup className="ml-2 sup-white">(24)</sup></h2>
                                            <p>Weight Lifting</p>
                                            <p>Weight Lifting</p>
                                            <p>Weight Lifting</p>
                                            <p>Weight Lifting</p>
                                            <div className="add_intrst pt-3">
                                                <p className=" add_intrs text-uppercase mb-0 pb-0"><a href="#"><span className="mr-2 pr-1">+</span>add interest</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card border_none bg-gray-shade radius-10">    
                                        <div className="card-body position-relative">
                                            <img src="/images/edit_icon.png" alt="edit" className="edt_icon" />
                                            <h2 className="">FITNESS<sup className="ml-2 sup-white">(24)</sup></h2>
                                            <p>Weight Lifting</p>
                                            <p>Weight Lifting</p>
                                            <p>Weight Lifting</p>
                                            <p>Weight Lifting</p>
                                            <div className="add_intrst pt-3">
                                                <p className=" add_intrs text-uppercase mb-0 pb-0"><a href="#"><span className="mr-2 pr-1">+</span>add interest</a></p>
                                            </div>
                                        </div>
                                    </div>                                 
                                </div>
                                <div className="text-center mt-4">
                                    <button type="button" className="custom_btn11" id="create_grup" onClick={this.submitHost}>Create A Group</button>
                                </div> 
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="big_container h-100 w-100 position-fixed" id="bigg_cont">
                <div className="modal-inner_part h-100 w-100 d-flex justify-content-center align-items-center">
                    <div className="modal-content modl_bg_drk1 small_width">
                        <div className="modal-body px-4 pt-5 pb-4"> 
                            <div className="form-group mb-2 mt-3"><label className="label">Mobile Number<span className="inp_cover-border"></span></label><input type="text" className="input-field" id="phone" value="" /></div>
                                <div className="text-center mb-3">
                                    <button type="button" className="custom_btn" onClick={this.closeGroup}>save</button>
                                </div>   
                            </div>
                        </div>
                    </div>
                </div>
            <div className="container-fluid1 px-4 py-5">
			        <div className="bg-gray-shade radius-10 p-4">
                    <div className="outer-container px-5 pb-4">
                    <div className="row">
                    <div className="col-md-4">
                        <p className="gray_text mb-1">Name of Interest</p>
                        <input type="text" name="" value="Weight Lifting" className="px-0 input-field-trans" />
                    </div>
                    <div className="col-md-4">
                        <p className="gray_text mb-1">Attendees are called</p>
                        <input type="text" name="" value="Trainees" className="px-0 input-field-trans" />
                    </div>
                    <div className="col-md-4">
                        <p className="gray_text mb-1">Virtual Room is Called</p>
                        <input type="text" name="" value="Weight Training 1 on 1" className="px-0 input-field-trans" />
                    </div>
                    </div>
                    </div>
                    <div className="outer-container mt-4">
                    <div className="row">
                    <div className="col-md-4 pl-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="mr-3">
                            <p className="text-white ml-7 mb-0">In Production?</p>
                            </div>
                            <div className="form-group1 input-txt position-relative text-right">
                            <label className="switch mx-0">
                                <input type="checkbox" checked="checked" /><span className="slider round"></span></label>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-4">
                            <div className="mr-3">
                            <p className="text-white ml-7 mb-0">Has Shopping List?</p>
                            </div>
                            <div className="form-group1 input-txt position-relative text-right">
                            <label className="switch mx-0">
                                <input type="checkbox" checked="checked" /><span className="slider round"></span></label>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-4">
                            <div className="mr-3">
                            <p className="text-white ml-7 mb-0">Has Equipment List?</p>
                            </div>
                            <div className="form-group1 input-txt position-relative text-right">
                            <label className="switch mx-0">
                                <input type="checkbox" checked="checked" /><span className="slider round"></span></label>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-4">
                            <div className="mr-3">
                            <p className="text-white ml-7 mb-0">Has Product List?</p>
                            </div>
                            <div className="form-group1 input-txt position-relative text-right">
                            <label className="switch mx-0">
                                <input type="checkbox" checked="checked" /><span className="slider round"></span>
                            </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 mt-4 mt-md-0">
                        <div className="video_img position-relative ml-3">
                            <label className="label text-white">Add Media Type 
                            <span className="inp_cover-border bg-gray-shade"></span>
                            </label>                    
                            <div className="input-field position-relative d-lg-flex d-block px-3">                      
                            <div className="one flex-fill mr-3 position-relative">                                  
                                <div className="custom-file mb-3">
                                <input type="file" className="custom-file-input" id="mycustomFile1" name="filename" />
                                <label className="custom-file-label px-1" for="mycustomFile1">
                                    <img src="/images/video.png" className="browse_image1" />
                                    <p className="purple_text browse_text"><span className="white">VIDEO</span><br />Browse File</p>
                                    </label>
                                </div>
                            </div>
                            <div className="one flex-fill position-relative">
                                <div className="custom-file mb-3">
                                <input type="file" className="custom-file-input" id="mycustomFile2" name="filename1" />
                                <label className="custom-file-label px-1" for="mycustomFile2">
                                    <img src="/images/browse-img.png" className="browse_image1" />
                                    <p className="purple_text browse_text"><span className="white">IMAGE</span><br />Browse File</p>
                                </label>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
              </div>
          <div className="bg-gray-shade radius-10 p-4 mt-4">
            <div className="outer-container px-4">
             <div className="row align-items-center justify-content-between">
                <h4 className="text_dark_gray1 font-weight-bold font-18 pr-3">Shopping List</h4>
                <div className="flex-grow-1 line_custom-purple"></div>
                <div className="pl-3"><img src="/images/shopping-icon1.png" alt="" /></div>
             </div>
             <div className="row">
              <div className="col-md-4">
                <div className="px-2 py-3">
                  <p className="gray_text mb-1">Item Name</p>
                  <div className="d-flex align-items-center justify-content-between">
                    <h4 className="white mb-0 font-book font-18 pr-3">Yoga Mat</h4>
                    <div className="flex-grow-1 line_custom-purple"></div>
                    <a href="#" className="bg-circle text-white"><i className="fa fa-minus" aria-hidden="true"></i></a>
                 </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="px-2 py-3">
                  <p className="gray_text mb-1">Item Name</p>
                  <div className="d-flex align-items-center justify-content-between">
                    <h4 className="white mb-0 font-book font-18 pr-3">2 Kg Dumbbell</h4>
                    <div className="flex-grow-1 line_custom-purple"></div>
                    <a href="#" className="bg-circle text-white"><i className="fa fa-minus" aria-hidden="true"></i></a>
                 </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="px-2 py-3">
                  <p className="gray_text mb-1">Item Name</p>
                  <div className="d-flex align-items-center justify-content-between">
                    <h4 className="white mb-0 font-book font-18 pr-3">Metal Rod 2 m</h4>
                    <div className="flex-grow-1 line_custom-purple"></div>
                    <a href="#" className="bg-circle text-white"><i className="fa fa-minus" aria-hidden="true"></i></a>
                 </div>
                </div>
              </div>
             </div>
           </div>
           <div className="outer-container pl-4">
             <div className="row align-items-center input-fld-outer mt-2">
              <div className="form-group mb-2 mt-4">
                <label className="label">Item Name<span className="inp_cover-border bg-gray-shade"></span></label>
                <input type="text" className="input-field mb-0" />
                <a href="#" className="bg-circle text-white position-absolute minus"><i className="fa fa-minus" aria-hidden="true"></i></a>
                <span className="span1">text</span>
              </div>
              <div className="mt-4 mb-2"><a href="#" className="bg-circle text-white"><i className="fa fa-plus" aria-hidden="true"></i></a></div>
            </div>
          </div>      
        </div>
        <div className="bg-gray-shade radius-10 p-4 mt-4">
            <div className="outer-container px-4">
             <div className="row align-items-center justify-content-between">
                <h4 className="text_dark_gray1 font-weight-bold font-18 pr-3">Equipment List</h4>
                <div className="flex-grow-1 line_custom-purple"></div>
                <div className="pl-3"><img src="/images/equipment-list.png" alt="" /></div>
             </div>
             <div className="row">
              <div className="col-md-4">
                <div className="px-2 py-3">
                  <p className="gray_text mb-1">Equipment Name</p>
                  <div className="d-flex align-items-center justify-content-between">
                    <h4 className="white mb-0 font-book font-18 pr-3">Sweat Bands</h4>
                    <div className="flex-grow-1 line_custom-purple"></div>
                    <a href="#" className="bg-circle text-white"><i className="fa fa-minus" aria-hidden="true"></i></a>
                 </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="px-2 py-3">
                  <p className="gray_text mb-1">Equipment Name</p>
                  <div className="d-flex align-items-center justify-content-between">
                    <h4 className="white mb-0 font-book font-18 pr-3">Calorie Meter</h4>
                    <div className="flex-grow-1 line_custom-purple"></div>
                    <a href="#" className="bg-circle text-white"><i className="fa fa-minus" aria-hidden="true"></i></a>
                 </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="px-2 py-3">
                  <p className="gray_text mb-1">Equipment Name</p>
                  <div className="d-flex align-items-center justify-content-between">
                    <h4 className="white mb-0 font-book font-18 pr-3">Waist Belt</h4>
                    <div className="flex-grow-1 line_custom-purple"></div>
                    <a href="#" className="bg-circle text-white"><i className="fa fa-minus" aria-hidden="true"></i></a>
                 </div>
                </div>
              </div>
             </div>
           </div>
           <div className="outer-container pl-4">
             <div className="row align-items-center input-fld-outer mt-2">
              <div className="form-group mb-2 mt-4">
                <label className="label">Equipment Name<span className="inp_cover-border bg-gray-shade"></span></label>
                <input type="text" className="input-field mb-0" />
                <a href="#" className="bg-circle text-white position-absolute minus"><i className="fa fa-minus" aria-hidden="true"></i></a>
                <span className="span1">text</span>
              </div>
              <div className="mt-4 mb-2"><a href="#" className="bg-circle text-white"><i className="fa fa-plus" aria-hidden="true"></i></a></div>
            </div>
          </div>      
        </div>
        <div className="bg-gray-shade radius-10 py-4 mt-4">
            <div className="outer-container px-4">
              <div className="px-4">
                 <div className="row align-items-center justify-content-between">
                    <h4 className="text_dark_gray1 font-weight-bold font-18 pr-3">Product List</h4>
                    <div className="flex-grow-1 line_custom-purple"></div>
                    <div className="pl-3"><img src="/images/product.png" alt="" /></div>
                 </div>
                 <div className="row align-items-center">
                  <div className="px-3 py-3 w-300">
                    <p className="gray_text pl-2 mb-1">Field#3 - varchar</p>
                    <div className="d-flex pl-2 align-items-center justify-content-between">
                      <h4 className="white mb-0 font-book font-18 pr-3">Waist Belt</h4>
                      <div className="flex-grow-1 line_custom-purple"></div>
                      <a href="#" className="bg-circle text-white"><i className="fa fa-minus" aria-hidden="true"></i></a>
                   </div>
                  </div>
                  <div className="px-3 py-3 w-300">
                    <p className="gray_text pl-4 ml-2 mb-1">Field#3 - varchar</p>
                    <div className="d-flex pl-4 ml-2 align-items-center justify-content-between">
                      <h4 className="white mb-0 font-book font-18 pr-3">Waist Belt</h4>
                      <div className="flex-grow-1 line_custom-purple"></div>
                      <a href="#" className="bg-circle text-white"><i className="fa fa-minus" aria-hidden="true"></i></a>
                   </div>
                  </div>
                  <div className="px-3 py-3 w-300">
                    <p className="gray_text pl-4 ml-2 mb-1">Field#3 - varchar</p>
                    <div className="d-flex pl-4 ml-2 align-items-center justify-content-between">
                      <h4 className="white mb-0 font-book font-18 pr-3">Waist Belt</h4>
                      <div className="flex-grow-1 line_custom-purple"></div>
                      <a href="#" className="bg-circle text-white"><i className="fa fa-minus" aria-hidden="true"></i></a>
                   </div>
                  </div>
                 </div>
              </div>
           </div>
           <div className="outer-container pl-4">
            <div className="px-4">
            <div className="row align-items-center input-fld-outer mt-2">
              <div className="px-3 py-3 w-300">
                  <p className="gray_text pl-2 mb-1">Field#3 - varchar</p>
                  <div className="d-flex pl-2 align-items-center justify-content-between">
                    <h4 className="white mb-0 font-book font-18 pr-3">Waist Belt</h4>
                    <div className="flex-grow-1 line_custom-purple"></div>
                    <a href="#" className="bg-circle text-white"><i className="fa fa-minus" aria-hidden="true"></i></a>
                 </div>
                </div>
                <div className="px-3 py-3 w-300">
                    <div className="form-group w-100 mb-2 mt-4">
                      <label className="label">Equipment Name<span className="inp_cover-border bg-gray-shade"></span></label>
                      <input type="text" className="input-field mb-0" />
                      <a href="#" className="bg-circle text-white position-absolute minus"><i className="fa fa-minus" aria-hidden="true"></i></a>
                      <span className="span1">text</span>
                    </div>
                  </div>
                  <div className="px-3 py-3 w-300">
                    <div className="form-group w-100 mb-2 mt-4">
                      <label className="label">Equipment Name<span className="inp_cover-border bg-gray-shade"></span></label>
                      <input type="text" className="input-field mb-0" />
                      <a href="#" className="bg-circle text-white position-absolute minus"><i className="fa fa-minus" aria-hidden="true"></i></a>
                      <span className="span1">text</span>
                    </div>
                  </div>
                  <div className="px-3 py-3 w-300">
                      <p className="gray_text pl-2 mb-1">Field#3 - varchar</p>
                      <div className="d-flex pl-2 align-items-center justify-content-between">
                        <h4 className="white mb-0 font-book font-18 pr-3">Waist Belt</h4>
                        <div className="flex-grow-1 line_custom-purple"></div>
                        <a href="#" className="bg-circle text-white"><i className="fa fa-minus" aria-hidden="true"></i></a>
                     </div>
                  </div>
                  <div className="px-3 py-3 w-300">
                    <p className="gray_text pl-2 mb-1">Field#3 - varchar</p>
                    <div className="d-flex pl-2 align-items-center justify-content-between">
                      <h4 className="white mb-0 font-book font-18 pr-3">Waist Belt</h4>
                      <div className="flex-grow-1 line_custom-purple"></div>
                      <a href="#" className="bg-circle text-white"><i className="fa fa-minus" aria-hidden="true"></i></a>
                   </div>
                  </div>
                  <div className="px-3 py-3 w-300">
                    <div className="form-group w-100 mb-2 mt-4">
                      <label className="label">Equipment Name<span className="inp_cover-border bg-gray-shade"></span></label>
                      <input type="text" className="input-field mb-0" />
                      <a href="#" className="bg-circle text-white position-absolute minus"><i className="fa fa-minus" aria-hidden="true"></i></a>
                      <span className="span1">text</span>
                    </div>
                  </div>
                  <div className="pr-3 py-3 w-300">
                    <div className="form-group w-100 mb-2 mt-4">
                      <label className="label">Equipment Name<span className="inp_cover-border bg-gray-shade"></span></label>
                      <input type="text" className="input-field mb-0" />
                      <a href="#" className="bg-circle text-white position-absolute minus"><i className="fa fa-minus" aria-hidden="true"></i></a>
                      <span className="span1">text</span>
                    </div>
                  </div>
                  <div className="px-3 py-3 w-300">
                    <div className="form-group w-100 mb-2 mt-4">
                      <label className="label">Equipment Name<span className="inp_cover-border bg-gray-shade"></span></label>
                      <input type="text" className="input-field mb-0" />
                      <a href="#" className="bg-circle text-white position-absolute minus"><i className="fa fa-minus" aria-hidden="true"></i></a>
                      <span className="span1">text</span>
                    </div>
                  </div>
                  <div className="px-3 py-3 w-300">
                    <div className="form-group w-100 mb-2 mt-4">
                      <label className="label">Equipment Name<span className="inp_cover-border bg-gray-shade"></span></label>
                      <input type="text" className="input-field mb-0" />
                      <a href="#" className="bg-circle text-white position-absolute minus"><i className="fa fa-minus" aria-hidden="true"></i></a>
                      <span className="span1">text</span>
                    </div>
                  </div>
                  <div className="pr-3 py-3 w-300">
                    <div className="form-group w-100 mb-2 mt-4">
                      <label className="label">Equipment Name<span className="inp_cover-border bg-gray-shade"></span></label>
                      <input type="text" className="input-field mb-0" />
                      <a href="#" className="bg-circle text-white position-absolute minus"><i className="fa fa-minus" aria-hidden="true"></i></a>
                      <span className="span1">text</span>
                    </div>
                  </div>
                  <div className="px-3 py-3 w-300">
                    <div className="form-group w-100 mb-2 mt-4">
                      <label className="label">Equipment Name<span className="inp_cover-border bg-gray-shade"></span></label>
                      <input type="text" className="input-field mb-0" />
                      <a href="#" className="bg-circle text-white position-absolute minus"><i className="fa fa-minus" aria-hidden="true"></i></a>
                      <span className="span1">text</span>
                    </div>
                  </div>
                  <div className="px-3 py-3 w-300">
                    <div className="form-group w-100 mb-2 mt-4">
                      <label className="label">Equipment Name<span className="inp_cover-border bg-gray-shade"></span></label>
                      <input type="text" className="input-field mb-0" />
                      <a href="#" className="bg-circle text-white position-absolute minus"><i className="fa fa-minus" aria-hidden="true"></i></a>
                      <span className="span1">text</span>
                    </div>
                  </div>
                </div>
            </div>
             {/* <div className="row align-items-center input-fld-outer mt-2">
                <div className="pl-4 py-3 mt-4 pr-4 w-300">
                  <p className="gray_text mb-1">Field#3 - varchar</p>
                  <div className="d-flex align-items-center justify-content-between">
                    <h4 className="white mb-0 font-book font-18 pr-3">Lorem lpsum</h4>
                    <div className="flex-grow-1 line_custom-purple"></div>
                    <a href="#" className="bg-circle text-white"><i className="fa fa-minus" aria-hidden="true"></i></a>
                  </div>
                </div>
                <div className="pl-4 py-3 pr-4 mt-4 w-300">
                  <p className="gray_text mb-1">Field#3 - varchar</p>
                  <div className="d-flex align-items-center justify-content-between">
                    <h4 className="white mb-0 font-book font-18 pr-3">Calorie Meter</h4>
                    <div className="flex-grow-1 line_custom-purple"></div>
                    <a href="#" className="bg-circle text-white"><i className="fa fa-minus" aria-hidden="true"></i></a>
                 </div>
                </div>
                <div className="pl-4 py-3 pr-4 mt-4 w-300">
                  <p className="gray_text mb-1">Field#3 - varchar</p>
                  <div className="d-flex align-items-center justify-content-between">
                    <h4 className="white mb-0 font-book font-18 pr-3">Waist Belt</h4>
                    <div className="flex-grow-1 line_custom-purple"></div>
                    <a href="#" className="bg-circle text-white"><i className="fa fa-minus" aria-hidden="true"></i></a>
                 </div>
                </div>
                <div className="pl-4 py-3 mt-4 pr-4 w-300">
                  <p className="gray_text mb-1">Field#3 - varchar</p>
                  <div className="d-flex align-items-center justify-content-between">
                    <h4 className="white mb-0 font-book font-18 pr-3">Lorem lpsum</h4>
                    <div className="flex-grow-1 line_custom-purple"></div>
                    <a href="#" className="bg-circle text-white"><i className="fa fa-minus" aria-hidden="true"></i></a>
                  </div>
                </div>
                <div className="form-group mb-2 mt-4">
                  <label className="label">Equipment Name<span className="inp_cover-border bg-gray-shade"></span></label>
                  <input type="text" className="input-field mb-0" />
                  <a href="#" className="bg-circle text-white position-absolute minus"><i className="fa fa-minus" aria-hidden="true"></i></a>
                  <span className="span1">text</span>
                </div>
              <div className="mt-4 mb-2"><a href="#" className="bg-circle text-white"><i className="fa fa-plus" aria-hidden="true"></i></a></div>
            </div> */}
          </div>
          <div className="outer-container1 mt-4 px-4">
            <div className="video_img position-relative px-2">
              <label className="label">Add Media Type<span className="inp_cover-border bg-gray-shade"></span></label>
              <div className="input-field position-relative d-lg-flex flex-wrap d-block px-3">
                
                <div className="one flex-fill mr-4 position-relative">
                
                  <div className="custom-file mb-3">
                    <input type="file" className="custom-file-input" id="mycustomFile3" name="filename" />
                    <label className="custom-file-label px-1" for="mycustomFile3">
                        <img src="/images/video2.png" className="browse_image1" />
                        <p className="purple_text browse_text"><span className="white">VIDEO</span><br />Browse File</p>
                        <a href="#" className="bg-circle position-absolute"><i className="fa fa-minus" id="0" aria-hidden="true"></i></a>
                    </label>
                  </div>
                </div>
                <div className="one flex-fill position-relative">
                  <div className="custom-file mb-3">
                    <input type="file" className="custom-file-input" id="mycustomFile4" name="filename1" />
                    <label className="custom-file-label px-1" for="mycustomFile4">
                        <img src="/images/image1.png" className="browse_image1" />
                        <p className="purple_text browse_text"><span className="white">IMAGE</span><br />Browse File</p>
                        <a href="#" className="bg-circle position-absolute"><i className="fa fa-minus" id="0" aria-hidden="true"></i></a>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>      
        </div>
        <div className="text-center">
          <button type="button" className="done mt-5">Done</button>
        </div>
      </div>
            </div>
        </div>
    )
}
}    

export default AdminDashboard;
