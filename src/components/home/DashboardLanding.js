import React, { Component } from "react";
class DashboardLanding extends Component {
   constructor(props) {
	super(props);
	this.state={
		sessionInformation:''
	}
}
 
componentDidMount(){
  }
  scriptOnDate=(e)=>{
	  console.log("AK",e.target.name);
  }
  pastSession=(e)=>{
	  console.log(new Date().getTime())
	  this.setState({
		  sessionInformation:'-1'
	  },()=>console.log('this.state.pastSession',this.state.sessionInformation))
  }
  upcomingSession=(e)=>{
	console.log(new Date().getTime())
	this.setState({
		sessionInformation:'1'
	},()=>console.log('this.state.pastSession',this.state.sessionInformation))
}
onDemand=(e)=>{
	console.log(new Date().getTime())
	this.setState({
		sessionInformation:'0'
	},()=>console.log('this.state.pastSession',this.state.sessionInformation))
}
nextDate = (e)=>{
	console.log(e.target);
}
  render() {

    return (
    <div>
    <div id="root">
    <div className="App">
        <div className="container-fluid">
			<div className="row top-header px-4 py-3">
                <div className="col-lg-2 d-flex d-md-block justify-content-center p-2"><img src="/images/login-logo.png" class="logo" alt="logo" /></div>
                <div className="col-lg-4 d-flex d-md-block justify-content-center p-4">
                    <div className="user-info d-flex align-items-center"><img src="/images/attendee.png" class="user-avtar pic" alt="" />
                        <div className="pl-4">
                            <h3>Welcome Arjun</h3>
                            <p>No Session coming up this week</p>
                            {/* <p>Next Session, Wednesday, 24 July 2019</p> */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 ">
                    <div className="d-flex justify-content-between flex-wrap">
                        <div className="header-info-right">
                            <p>Weekly Attendance</p>
                            <h3>0%</h3></div><span className="border-right gray-border"></span>
                        <div className="header-info-right">
                            <p>Total Views</p>
                            <h3>0</h3></div><span class="border-right gray-border"></span>
                        <div className="header-info-right">
                            <p>Total Revenue</p>
                            <h3>$0</h3></div><span className="border-right gray-border"></span>
                              <div className="message-notification"><img src="/images/message.png" alt="" />
                          <span className="message-count">0</span></div>
                    </div>
                </div>
            </div>
			<div className="tab-sec px-3 pb-5">
				<div className="cont">
					<div className="row">
						<div className="col-lg-8">
							<ul className="nav nav-tabs" role="tablist">
							    <li className="nav-item">
							      <a className="nav-link active" data-toggle="tab" onClick={this.upcomingSession} href="#us">Upcoming Session</a>
							    </li>
							    <li className="nav-item">
							      <a className="nav-link" data-toggle="tab" onClick={this.pastSession} href="#ps">Past Session</a>
							    </li>
							    <li className="nav-item">
							      <a className="nav-link" data-toggle="tab" onClick={this.onDemand} href="#onde">On Demand</a>
							    </li>
						    </ul>
						</div>
						<div className="col-lg-4 datepick">
							<input type="text" name="" className="form-control" id="datepicker" />
							<div className="c_icon"><img src="/images/cal.png" className="translat" /><img src="/images/angle-down.png" className="translat" /></div>
						</div>
					</div>
				</div>
				<div class="cont1">
				
				    <div class="tab-content">
						<div id="us" class="tab-pane active">
						
						    <ul class="nav nav-tabs mx-0" role="tablist">
							    <li class="nav-item flex-fill">
							      <a class="nav-link active act" data-toggle="tab" name = "22/9/2018" onClick={this.scriptOnDate} href="#dt1">22<br /><span>MON</span></a>
							    </li>
							    <li class="nav-item flex-fill">
							      <a class="nav-link" data-toggle="tab" href="#dt2">23<br /><span>TUE</span></a>
							    </li>
							    <li class="nav-item flex-fill">
							      <a class="nav-link act" data-toggle="tab" href="#dt3">24<br /><span>WED</span></a>
							    </li>
							    <li class="nav-item flex-fill">
							      <a class="nav-link act" data-toggle="tab" href="#dt3">25<br /><span>THU</span></a>
							    </li>
							    <li class="nav-item flex-fill">
							      <a class="nav-link" data-toggle="tab" href="#dt3">26<br /><span>FRI</span></a>
							    </li>
							    <li class="nav-item flex-fill">
							      <a class="nav-link" data-toggle="tab" href="#dt3">27<br /><span>SAT</span></a>
							    </li>
							    <li class="nav-item flex-fill">
							      <a class="nav-link act" data-toggle="tab" href="#dt3">28<br /><span>SUN</span></a>
							    </li>
							    <li class="nav-item angle-img">
							      <a class="nav-link" data-toggle="tab"  href="#dt3"><img onClick={this.nextDate} src="/images/Triangle-right.png" alt="arrow" /></a>
							    </li>
						    </ul>
						    <div class="content-container mt-2">
						    	<div class="row mb-4">
						    		<div class="col-12 col-lg-4 col-sm-6 mt-4 px-2">
						    			<div class="inner_containr p-4">
						    				<h4 class="white mb-3">Napa Wine Testing</h4>
						    				<p><img src="/images/gray-icons/user.png" class="mr-3" />By Peter Parker</p>
						    				<p><img src="/images/gray-icons/clock.png" class="mr-3" />4:30 PM</p>
						    				<p><img src="/images/gray-icons/teamwork.png" class="mr-3" />Signid Up 2340 / 5000(max)</p>
						    				<p><img src="/images/gray-icons/dollar.png" class="mr-3" />$50.00 per session</p>
						    				<p class="mb-4"><img src="/images/gray-icons/date.png" class="mr-3" />Cut off date 09/12/2019</p>
						    				<div class="d-flex flex-wrap justify-content-between">
						    					<div class="mt-3 flex-grow-1"><button class="session_btn text-uppercase">session details</button></div>
						    					<div class="mt-3 mr-4"><img src="/images/invite.png" class="mt-2" /></div>
						    					<div class="mt-3"><img src="/images/edit.png" class="mt-2 ml-2" /></div>
						    				</div>
						    			</div>
						    		</div>
						    		<div class="col-12 col-lg-4 col-sm-6 mt-4 px-2">
						    			<div class="inner_containr p-4">
						    				<h4 class="white mb-3">Napa Wine Testing</h4>
						    				<p><img src="/images/gray-icons/user.png" class="mr-3" />By Peter Parker</p>
						    				<p><img src="/images/gray-icons/clock.png" class="mr-3" />4:30 PM</p>
						    				<p><img src="/images/gray-icons/teamwork.png" class="mr-3" />Signid Up 2340 / 5000(max)</p>
						    				<p><img src="/images/gray-icons/dollar.png" class="mr-3" />$50.00 per session</p>
						    				<p class="mb-4"><img src="/images/gray-icons/date.png" class="mr-3" />Cut off date 09/12/2019</p>
						    				<div class="d-flex flex-wrap justify-content-between">
						    					<div class="mt-3 flex-grow-1"><button class="session_btn text-uppercase">session details</button></div>
						    					<div class="mt-3 mr-4"><img src="/images/invite.png" class="mt-2" /></div>
						    					<div class="mt-3"><img src="/images/edit.png" class="mt-2 ml-2" /></div>
						    				</div>
						    			</div>
						    		</div>
						    		<div class="col-12 col-lg-4 col-sm-6 mt-4 px-2">
						    			<div class="inner_containr p-4">
						    				<h4 class="white mb-3">Napa Wine Testing</h4>
						    				<p><img src="/images/gray-icons/user.png" class="mr-3" />By Peter Parker</p>
						    				<p><img src="/images/gray-icons/clock.png" class="mr-3" />4:30 PM</p>
						    				<p><img src="/images/gray-icons/teamwork.png" class="mr-3" />Signid Up 2340 / 5000(max)</p>
						    				<p><img src="/images/gray-icons/dollar.png" class="mr-3" />$50.00 per session</p>
						    				<p class="mb-4"><img src="/images/gray-icons/date.png" class="mr-3" />Cut off date 09/12/2019</p>
						    				<div class="d-flex flex-wrap justify-content-between">
						    					<div class="mt-3 flex-grow-1"><button class="session_btn text-uppercase">session details</button></div>
						    					<div class="mt-3 mr-4"><img src="/images/invite.png" class="mt-2" /></div>
						    					<div class="mt-3"><img src="/images/edit.png" class="mt-2 ml-2" /></div>
						    				</div>
						    			</div>
						    		</div>
						    		<div class="col-12 col-lg-4 col-sm-6 mt-4 px-2">
						    			<div class="inner_containr p-4">
						    				<h4 class="white mb-3">Napa Wine Testing</h4>
						    				<p><img src="/images/gray-icons/user.png" class="mr-3" />By Peter Parker</p>
						    				<p><img src="/images/gray-icons/clock.png" class="mr-3" />4:30 PM</p>
						    				<p><img src="/images/gray-icons/teamwork.png" class="mr-3" />Signid Up 2340 / 5000(max)</p>
						    				<p><img src="/images/gray-icons/dollar.png" class="mr-3" />$50.00 per session</p>
						    				<p class="mb-4"><img src="/images/gray-icons/date.png" class="mr-3" />Cut off date 09/12/2019</p>
						    				<div class="d-flex flex-wrap justify-content-between">
						    					<div class="mt-3 flex-grow-1"><button class="session_btn text-uppercase">session details</button></div>
						    					<div class="mt-3 mr-4"><img src="/images/invite.png" class="mt-2" /></div>
						    					<div class="mt-3"><img src="/images/edit.png" class="mt-2 ml-2" /></div>
						    				</div>
						    			</div>
						    		</div>
						    		<div class="col-12 col-lg-4 col-sm-6 mt-4 px-2">
						    			<div class="inner_containr p-4">
						    				<h4 class="white mb-3">Napa Wine Testing</h4>
						    				<p><img src="/images/gray-icons/user.png" class="mr-3" />By Peter Parker</p>
						    				<p><img src="/images/gray-icons/clock.png" class="mr-3" />4:30 PM</p>
						    				<p><img src="/images/gray-icons/teamwork.png" class="mr-3" />Signid Up 2340 / 5000(max)</p>
						    				<p><img src="/images/gray-icons/dollar.png" class="mr-3" />$50.00 per session</p>
						    				<p class="mb-4"><img src="/images/gray-icons/date.png" class="mr-3" />Cut off date 09/12/2019</p>
						    				<div class="d-flex flex-wrap justify-content-between">
						    					<div class="mt-3 flex-grow-1"><button class="session_btn text-uppercase">session details</button></div>
						    					<div class="mt-3 mr-4"><img src="/images/invite.png" class="mt-2" /></div>
						    					<div class="mt-3"><img src="/images/edit.png" class="mt-2 ml-2" /></div>
						    				</div>
						    			</div>
						    		</div>
						    		<div class="col-12 col-lg-4 col-sm-6 mt-4 px-2">
						    			<div class="plus_icnn">+</div>
						    		</div>
						    	</div>
						    	
						    </div>
						    <div class="inner_containr px-4 py-4 mx--6 d-flex justify-content-between align-items-center">
						    	<h4 class="px-2 m-0 white">Create Channel</h4>
						    	<a href="#"><img src="/images/add.png" class="px-2" /></a>
						    </div>
						    <div class="row">
						    	<div class="col-lg-4 mt-3 px-2">
						    		<div class="inner_containr px-3 py-4">
						    			<div class="d-flex justify-content-between flex-wrap">
						    				<h4 class="hdng1 font-weight-bold">Boisset Wines</h4>
						    				<a href="#"><img src="/images/edit.png" /></a>
						    			</div>
						    			<img src="/images/wine1.jpg" class="d-block img-fluid inner_containr my-3" />
						    			<div class="d-flex justify-content-between flex-wrap">
						    				<div class="">
						    					<p class="checktxt mb-0 mt-2">Upcoming</p>
						    					<p class="pick text-center">3</p>
						    				</div>
						    				<div class="px-3">
						    					<p class="checktxt mb-0 mt-2">Past Sessions</p>
						    					<p class="pick text-center">23</p>
						    				</div>
						    				<div class="">
						    					<p class="checktxt mb-0 mt-2 text-right">Next Session by Damien Smith</p>
						    					<p class="pick text-center">25 JUL, 03:45 PM</p>
						    				</div>
						    			</div>
						    			<div class="d-flex justify-content-between flex-wrap align-items-center mt-3">
						    				<h4 class="white">Channel Host</h4>
						    				<a href="#"><img src="/images/add.png" /></a>
						    			</div>
						    			<div class="d-flex mt-3">
				                            <img src="/images/pic.jpg" class="mr-3 mt-1 w-70" alt="user-icon" />
				                            <div>
				                                <p class="checktxt_name pb-0 mb-2">Ritesh Shrivastva</p>
				                                <p class="checktxt mb-0">Next session on 22 JUL, 3:45 PM</p>
				                                <p class="checktxt mb-0">Past Revenue $34,000</p>
				                            </div>
						    			</div>
						    			<div class="d-flex mt-3">
				                            <img src="/images/pic.jpg" class="mr-3 mt-1 w-70" alt="user-icon" />
				                            <div>
				                                <p class="checktxt_name pb-0 mb-2">David Cornel</p>
				                                <p class="checktxt mb-0">Next session on 22 JUL, 3:45 PM</p>
				                                <p class="checktxt mb-0">Past Revenue $34,000</p>
				                            </div>
						    			</div>
						    			<div class="d-flex justify-content-between flex-wrap mt-4 align-items-center">
						    				<h4 class="white">Interests</h4>
						    				<a href="#"><img src="/images/add.png" /></a>
						    			</div>
						    			<div class="d-flex mt-3">
				                            <img src="/images/pic.jpg" class="mr-3 mt-1 w-70" alt="user-icon" />
				                            <div class="flex-grow-1">
				                                <p class="checktxt_name pb-0 mb-2">Napa Wines</p>
				                                <p class="checktxt mb-0">Next session on 22 JUL, 3:45 PM</p>
				                                <div class="overflow-hidden">
					                                <p class="checktxt mb-0 float-left">Upcoming Sessions 3</p>
					                                <p class="checktxt mb-0 float-right">Past Sessions 33</p>
				                            	</div>
				                            	<div class="clearfix"></div>
				                            </div>
						    			</div>
						    			<div class="d-flex mt-3">
				                            <img src="/images/pic.jpg" class="mr-3 mt-1 w-70" alt="user-icon" />
				                            <div class="flex-grow-1">
				                                <p class="checktxt_name pb-0 mb-2">Sonoma Wines</p>
				                                <p class="checktxt mb-0">Next session on 22 JUL, 3:45 PM</p>
				                                <div class="overflow-hidden">
					                                <p class="checktxt mb-0 float-left">Upcoming Sessions 2</p>
					                                <p class="checktxt mb-0 float-right">Past Sessions 22</p>
				                            	</div>
				                            	<div class="clearfix"></div>
				                            </div>
						    			</div>
						    		</div>
						    	</div>
						    	<div class="col-lg-4 mt-3 px-2">
						    		<div class="inner_containr px-3 py-4">
						    			<div class="d-flex justify-content-between flex-wrap">
						    				<h4 class="hdng1 font-weight-bold">Boisset Wines</h4>
						    				<a href="#"><img src="/images/edit.png" /></a>
						    			</div>
						    			<img src="/images/wine1.jpg" class="d-block img-fluid inner_containr my-3" />
						    			<div class="d-flex justify-content-between flex-wrap">
						    				<div class="">
						    					<p class="checktxt mb-0 mt-2">Upcoming</p>
						    					<p class="pick text-center">3</p>
						    				</div>
						    				<div class="px-3">
						    					<p class="checktxt mb-0 mt-2">Past Sessions</p>
						    					<p class="pick text-center">23</p>
						    				</div>
						    				<div class="">
						    					<p class="checktxt mb-0 mt-2 text-right">Next Session by Damien Smith</p>
						    					<p class="pick text-center">25 JUL, 03:45 PM</p>
						    				</div>
						    			</div>
						    			<div class="d-flex justify-content-between flex-wrap align-items-center mt-3">
						    				<h4 class="white">Channel Host</h4>
						    				<a href="#"><img src="/images/add.png" /></a>
						    			</div>
						    			<div class="d-flex mt-3">
				                            <img src="/images/pic.jpg" class="mr-3 mt-1 w-70" alt="user-icon" />
				                            <div>
				                                <p class="checktxt_name pb-0 mb-2">Ritesh Shrivastva</p>
				                                <p class="checktxt mb-0">Next session on 22 JUL, 3:45 PM</p>
				                                <p class="checktxt mb-0">Past Revenue $34,000</p>
				                            </div>
						    			</div>
						    			<div class="d-flex mt-3">
				                            <img src="/images/pic.jpg" class="mr-3 mt-1 w-70" alt="user-icon" />
				                            <div>
				                                <p class="checktxt_name pb-0 mb-2">David Cornel</p>
				                                <p class="checktxt mb-0">Next session on 22 JUL, 3:45 PM</p>
				                                <p class="checktxt mb-0">Past Revenue $34,000</p>
				                            </div>
						    			</div>
						    			<div class="d-flex justify-content-between flex-wrap mt-4">
						    				<h4 class="white">Interests</h4>
						    				<a href="#"><img src="/images/add.png" /></a>
						    			</div>
						    			<div class="d-flex mt-3">
				                            <img src="/images/pic.jpg" class="mr-3 mt-1 w-70" alt="user-icon" />
				                            <div class="flex-grow-1">
				                                <p class="checktxt_name pb-0 mb-2">Napa Wines</p>
				                                <p class="checktxt mb-0">Next session on 22 JUL, 3:45 PM</p>
				                                <div class="overflow-hidden">
					                                <p class="checktxt mb-0 float-left">Upcoming Sessions 3</p>
					                                <p class="checktxt mb-0 float-right">Past Sessions 33</p>
				                            	</div>
				                            	<div class="clearfix"></div>
				                            </div>
						    			</div>
						    		</div>
						    	</div>
						    </div>
						</div>
					    <div id="ps" class="container tab-pane fade"><br />
					      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. </p>
					    </div>
					    <div id="onde" class="container tab-pane fade"><br />
					      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. </p>
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

export default DashboardLanding;