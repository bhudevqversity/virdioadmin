import React, { Component } from "react";
class HostSessionCreation extends Component {
  
  constructor(props) {
	super(props);
    
}
 
componentDidMount(){
	

  }

  

render() {
return(
<div>
<div id="root">
        <div className="App">
            <div className="container-fluid">
                <div className="row top-header px-4 pb-4">
                    <div className="col-lg-2 d-flex d-md-block justify-content-center p-2"><img src="images/login-logo.png" className="logo" /></div>
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
                <div className="gray-box-4">
                    <div className="hdng_text py-4 d-flex justify-content-between px-4 headerborder align-items-center">
                        <h3 className="p-0 m-0">Create Channel</h3>
                        <button type="button" className="close">×</button>
                    </div>
                    <div className="py-4 px-4 session_text">
                        <div className="row">
                            <div className="col-lg-4">
                               
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="form-group input-txt">
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                    </label>
                                    <span>Use account address?</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="form-group input-txt">
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                    </label>
                                    <span>Will you charge for session?*</span>
                                    <span className="c-span">*you can also enter this information later</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid register-frm pb-3 mt-md-4 px-4">
                        <div className="form">
                            <div className="form-content">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="form-group"><span className="cover-border"></span>
                                            <label className="label">Avenir Next Med, 20pts</label>
                                            <input type="text" className="input-field" />
                                        </div>                                        
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="form-group"><span className="cover-border"></span>
                                            <label className="label">Phone</label>
                                            <input type="text" className="input-field" placeholder="" />
                                        </div>                                   
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="form-group"><span className="cover-border"></span>
                                            <label className="label">SS#</label>
                                            <input type="text" className="input-field" placeholder="" />
                                        </div>   
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="form-group"><span className="cover-border"></span>
                                            <label className="label">Description</label>
                                            <textarea type="text" className="input-field"></textarea>
                                        </div>                                       
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="form-group"><span className="cover-border"></span>
                                            <label className="label">Street Address 1</label>
                                            <input type="text" className="input-field" placeholder="" />
                                        </div>
                                        <div className="form-group"><span className="cover-border"></span>
                                            <label className="label">Street Address 2</label>
                                            <input type="text" className="input-field" placeholder="" />
                                        </div>                                     
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                         <div className="form-group"><span className="cover-border"></span>
                                            <label className="label">Account Name</label>
                                            <input type="text" className="input-field" placeholder="" />
                                        </div>  
                                        <div className="form-group"><span className="cover-border"></span>
                                            <label className="label">Account Number</label>
                                            <input type="text" className="input-field" placeholder="" />
                                        </div>   
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="form-group"><span className="cover-border"></span>
                                            <label className="label">Description</label>
                                            <div className="custom-file mb-3">
                                              <input type="file" className="custom-file-input" id="customFile" name="filename" />
                                              <label className="custom-file-label input-field position-relative" htmlFor="customFile">
                                                  <img src="images/browse-img.png" className="browse_image" />
                                                  <p className="purple_text browse_text"><span className="white">IMAGE</span><br />Browse File</p>
                                              </label>
                                            </div>
                                            
                                        </div>                                       
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="form-group"><span className="cover-border"></span>
                                            <label className="label">City</label>
                                            <input type="text" className="input-field" placeholder="" />
                                        </div>
                                        <div className="row">
                                            <div className="col-md-5">
                                                <div className="form-group"><span className="cover-border"></span>
                                                    <label className="label">State Code</label>
                                                    <input type="text" className="input-field" placeholder="" />
                                                </div>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="form-group"><span className="cover-border"></span>
                                                    <label className="label">Zip Code</label>
                                                    <input type="text" className="input-field" placeholder="" />
                                                </div>
                                            </div>                                      
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                         <div className="form-group"><span className="cover-border"></span>
                                            <label className="label">Routing Number</label>
                                            <input type="text" className="input-field" placeholder="" />
                                        </div>  
                                        <div className="form-group">
                                            <span className="cover-border"></span>
                                            <label className="label">Account Type</label>
                                            <select className="input-field" id="exampleFormControlSelect1">
                                                <option>Checking</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                            <span className="dropdown-icon"></span>
                                        </div>  
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-sm-6 mt-4 mt-sm-3">
                                        <div className="form-group input-txt">
                                            <label className="switch">
                                                <input type="checkbox" />
                                                <span className="slider round"></span>
                                            </label>
                                            <span>Has Shopping List?</span>
                                        </div>
                                        <div className="add_text">
                                            <a href="#" className="bg-circle mr-4" data-toggle="modal" data-target="#shopping_lst_modal"><i className="fa fa-plus" aria-hidden="true"></i></a>
                                            <span className="gray-text">0 Items Added</span>
                                        </div>                                         
                                    </div>
                                    <div className="col-lg-4 col-sm-6 mt-4 mt-sm-3">
                                        <div className="form-group input-txt">
                                            <label className="switch">
                                                <input type="checkbox" />
                                                <span className="slider round"></span>
                                            </label>
                                            <span>Has Equipment List?</span>
                                        </div>
                                        <div className="add_text">
                                            <a href="#" className="bg-circle mr-4" data-toggle="modal" data-target="#equipment_lst_modal"><i className="fa fa-plus" aria-hidden="true"></i></a>
                                            <span className="gray-text">0 Equipments Added</span>
                                        </div>    
                                        
                                    </div>
                                    <div className="col-lg-4 col-sm-6 mt-4 mt-sm-3">
                                         <div className="form-group input-txt">
                                            <label className="switch">
                                                <input type="checkbox" />
                                                <span className="slider round"></span>
                                            </label>
                                            <span>Has Product List?</span>
                                        </div>
                                        <div className="add_text">
                                            <a href="#" className="bg-circle mr-4"><i className="fa fa-plus" aria-hidden="true"></i></a>
                                            <span className="gray-text">0 Product Added</span>
                                        </div>      
                                    </div>
                                </div>                          
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gray-box-4 mt-3">
                    <div className="hdng_text py-4 d-flex justify-content-between px-4 headerborder align-items-center">
                        <h3 className="p-0 m-0">Channel Host(s)</h3>
                        <div className="plusicon position-relative m-0"><i className="fa fa-plus" aria-hidden="true"></i></div>
                    </div>
                    <div className="container-fluid py-3 host-container">
                        <div className="row mt-4">
                            <div className="col-lg-4 col-md-6 pl-md-0">
                                <label className="custom-control custom-checkbox lebelheight d-flex">
                                    <input type="checkbox" className="form-radio" />
                                    <img src="images/pic.jpg" className="ml-2 mr-3" alt="user-icon" />
                                    <div>
                                        <p className="checktxt_name pb-1">Nathan Taylor</p>
                                        <p className="checktxt mb-0">Next session on 22 JUL, 3:45 PM</p>
                                        <p className="checktxt">Past Revenue $34,000</p>
                                    </div>
                                </label>
                                <label className="custom-control custom-checkbox lebelheight d-flex">
                                    <input type="checkbox" className="form-radio" />
                                    <img src="images/pic.jpg" className="ml-2 mr-3" alt="user-icon" />
                                    <div>
                                        <p className="checktxt_name pb-1">Nathan Taylor</p>
                                        <p className="checktxt mb-0">Next session on 22 JUL, 3:45 PM</p>
                                        <p className="checktxt">Past Revenue $45,000</p>
                                    </div>
                                </label>
                            </div>
                            <div className="col-lg-4 col-md-6 pl-md-0">
                                <label className="custom-control custom-checkbox lebelheight d-flex">
                                    <input type="checkbox" className="form-radio" />
                                    <img src="images/pic.jpg" className="ml-2 mr-3" alt="user-icon" />
                                    <div>
                                        <p className="checktxt_name pb-1">Nathan Taylor</p>
                                        <p className="checktxt mb-0">Next session on 22 JUL, 3:45 PM</p>
                                        <p className="checktxt">Past Revenue $34,000</p>
                                    </div>
                                </label>
                            </div>
                            <div className="col-lg-4 col-md-6 pl-md-0">
                                <label className="custom-control custom-checkbox lebelheight d-flex">
                                    <input type="checkbox" className="form-radio" />
                                    <img src="images/pic.jpg" className="ml-2 mr-3" alt="user-icon" />
                                    <div>
                                        <p className="checktxt_name pb-1">Nathan Taylor</p>
                                        <p className="checktxt mb-0">Next session on 22 JUL, 3:45 PM</p>
                                        <p className="checktxt">Past Revenue $12.345</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>   
                </div>
                <div className="gray-box-4 mt-3 mb-5">
                    <div className="hdng_text py-4 d-flex justify-content-between px-4 headerborder align-items-center">
                        <h3 className="p-0 m-0">Channel Interest(s)</h3>
                        <div className="plusicon position-relative m-0"><i className="fa fa-plus" aria-hidden="true"></i></div>
                    </div>
                    <div className="container-fluid py-3 host-container">
                        <div className="row mt-4">
                            <div className="col-lg-4 col-md-6 pl-md-0">
                                <label className="custom-control custom-checkbox lebelheight d-flex">
                                    <input type="checkbox" className="form-radio" />
                                    <img src="images/pic.jpg" className="ml-2 mr-3" alt="user-icon" />
                                    <div>
                                        <p className="checktxt_name pb-1">Nathan Taylor</p>
                                        <p className="checktxt mb-0">Next session on 22 JUL, 3:45 PM</p>
                                        <p className="checktxt">Past Revenue $34,000</p>
                                    </div>
                                </label>
                            </div>
                            <div className="col-lg-4 col-md-6 pl-md-0">
                                <label className="custom-control custom-checkbox lebelheight d-flex">
                                    <input type="checkbox" className="form-radio" />
                                    <img src="images/pic.jpg" className="ml-2 mr-3" alt="user-icon" />
                                    <div>
                                        <p className="checktxt_name pb-1">Nathan Taylor</p>
                                        <p className="checktxt mb-0">Next session on 22 JUL, 3:45 PM</p>
                                        <p className="checktxt">Past Revenue $45,000</p>
                                    </div>
                                </label>
                            </div>
                            <div className="col-lg-4 col-md-6 pl-md-0">
                                <label className="custom-control custom-checkbox lebelheight d-flex">
                                    <input type="checkbox" className="form-radio" />
                                    <img src="images/pic.jpg" className="ml-2 mr-3" alt="user-icon" />
                                    <div>
                                        <p className="checktxt_name pb-1">Nathan Taylor</p>
                                        <p className="checktxt mb-0">Next session on 22 JUL, 3:45 PM</p>
                                        <p className="checktxt">Past Revenue $12.345</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="border_line">
                        <div className="text_icn d-flex">
                            <h4 className="mr-4 white">Sessions</h4>
                            <div className="plusicon position-static mr-0"><i className="fa fa-plus" aria-hidden="true"></i>                           </div>

                        </div>
                    </div>  
                </div>
                <div className="text-center">
                <button type="button" className="done mb-5">Done</button>
            </div>
            </div>
        </div>
    </div>

    <div className="modal pr-0" id="shopping_lst_modal">
        {/*  <div className="modal-dialog small_width">
            <div className="modal-content modl_bg_color">
                <div className="modal-header border_none p-4">
                    <h4 className="modal-title white pt-3">Shopping List</h4>
                    <button type="button" className="close white closepopup" data-dismiss="modal">×</button>
                </div>
                <div className="modal-body px-4 pb-5"> 
                    <div className="form-group"><span className="cover-border"></span>
                        <label className="label">Item Name</label>
                        <input type="text" className="input-field" placeholder="" />
                        <a href="#" className="bg-circle position-absolute">
                            <i className="fa fa-minus pt-1" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div className="add_text text-center">
                        <a href="#" className="bg-circle mr-4 d-inline-block float-none"><i className="fa fa-plus" aria-hidden="true"></i></a>
                    </div> 
                </div>
            </div>
        </div> */}
        <div className="modal-dialog large_width">
            <div className="modal-content modl_bg_color">
                <div className="modal-header border_none p-4">
                    <h4 className="modal-title white pt-3">Shopping List</h4>
                    <button type="button" className="close white closepopup" data-dismiss="modal">×</button>
                </div>
                <div className="modal-body px-4 pb-5">
                    <div className="row"> 
                        <div className="col-md-4">
                            <div className="form-group"><span className="cover-border"></span>
                                <label className="label">Item Name</label>
                                <input type="text" className="input-field" placeholder="" />
                                <a href="#" className="bg-circle position-absolute">
                                    <i className="fa fa-minus pt-1" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group"><span className="cover-border"></span>
                                <label className="label">Item Name</label>
                                <input type="text" className="input-field" placeholder="" />
                                <a href="#" className="bg-circle position-absolute">
                                    <i className="fa fa-minus pt-1" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group"><span className="cover-border"></span>
                                <label className="label">Item Name</label>
                                <input type="text" className="input-field" placeholder="" />
                                <a href="#" className="bg-circle position-absolute">
                                    <i className="fa fa-minus pt-1" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="add_text text-center">
                                <a href="#" className="bg-circle mr-4 d-inline-block float-none"><i className="fa fa-plus" aria-hidden="true"></i></a>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
            <div className="donebg">
                <button type="button" className="done mt-2">save</button>
            </div>
    </div>


    <div className="modal pr-0" id="equipment_lst_modal">
        <div className="modal-dialog small_width">
            <div className="modal-content modl_bg_color">
                <div className="modal-header border_none p-4">
                    <h4 className="modal-title white pt-3">Equipment List</h4>
                    <button type="button" className="close white closepopup" data-dismiss="modal">×</button>
                </div>
                <div className="modal-body px-4 pb-5"> 
                    <div className="form-group"><span className="cover-border"></span>
                        <label className="label">Item Name</label>
                        <input type="text" className="input-field" placeholder="" />
                        <a href="#" className="bg-circle position-absolute">
                            <i className="fa fa-minus pt-1" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div className="add_text text-center">
                        <a href="#" className="bg-circle mr-4 d-inline-block float-none"><i className="fa fa-plus" aria-hidden="true"></i></a>
                    </div> 
                </div>
            </div>
        </div>
      {/*   <div className="modal-dialog large_width">
            <div className="modal-content modl_bg_color">
                <div className="modal-header border_none p-4">
                    <h4 className="modal-title white pt-3">Equipment List</h4>
                    <button type="button" className="close white closepopup" data-dismiss="modal">×</button>
                </div>
                <div className="modal-body px-4 pb-5">
                    <div className="row"> 
                        <div className="col-md-4">
                            <div className="form-group"><span className="cover-border"></span>
                                <label className="label">Item Name</label>
                                <input type="text" className="input-field" placeholder="">
                                <a href="#" className="bg-circle position-absolute">
                                    <i className="fa fa-minus pt-1" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group"><span className="cover-border"></span>
                                <label className="label">Item Name</label>
                                <input type="text" className="input-field" placeholder="">
                                <a href="#" className="bg-circle position-absolute">
                                    <i className="fa fa-minus pt-1" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group"><span className="cover-border"></span>
                                <label className="label">Item Name</label>
                                <input type="text" className="input-field" placeholder="">
                                <a href="#" className="bg-circle position-absolute">
                                    <i className="fa fa-minus pt-1" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="add_text text-center">
                                <a href="#" className="bg-circle mr-4 d-inline-block float-none"><i className="fa fa-plus" aria-hidden="true"></i></a>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div> */}
            <div className="donebg">
                <button type="button" className="done mt-2">save</button>
            </div>
    </div>
    </div>
)
  }
}

export default HostSessionCreation;