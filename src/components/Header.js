import React, {Component} from 'react';

class Header extends Component {
    render(){
        return(

            <div className="container-fluid">
                <div className="row top-header p-4">
                    <div className="col-lg-2 d-flex d-md-block justify-content-center p-2">
                        <img src="/images/login-logo.png" className="logo" />
                    </div>
                    <div className="col-lg-4 d-flex d-md-block justify-content-center p-4">
                        <div className="user-info d-flex align-items-center">
                            <img src="images/attendee.png" className="user-avtar"  />
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
                                <input type="text" className="input-field" placeholder="Session Name"/>
                            </div>
                            <div className="form-group">
                            <span className="cover-border"></span>
                           
                                <input type="text" className="input-field" placeholder="Phone Number *" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <input type="text" className="input-field" placeholder="When" />
                            </div>
                            <div className="form-group">
                                <select className="input-field" id="exampleFormControlSelect1">
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                              </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group input-txt">
                                Show Participants Signed Up Count on Searches?
                            </div>
                            <div className="form-group input-txt">
                                Show Participants Signed Up Count on Searches?
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <input type="text" className="input-field" placeholder="Session Name" />
                            </div>
                            <div className="form-group">
                                <select className="input-field" >
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                              </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <input type="text" className="input-field signedup_2" placeholder="Minimum Participants" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="input-field" placeholder="Confirm Password" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <input type="text" className="input-field" placeholder="When"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="input-field" placeholder="Confirm Password" />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

                </div>

              
              <div className="container">
  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
    Open modal
  </button>

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
  
</div>







<div className="container">
  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal2">
    Open modal
  </button>

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
  
</div>








<div className="container">
  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal3">
    Open modal
  </button>

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
  
</div>











            </div>

        )
    }
}

export default Header;