import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import $ from 'jquery';

class DashboardLanding extends Component {
   constructor(props) {
	super(props);
	this.state={
		startDate:new Date(),
		daysOfMonth:[],
		upcomingSession:[],
		sessionInformation:'',
		// dash_land_prop:true,
		channelPopup:0,
		sessionData :[{oTitle:"Napa Wine Testing",
		oName:"By Peter Parker",
		oTime:"4:30 PM",
		oId:"2340 / 5000",
		oPrice:"50.00",
		timestamp:1574553600000,
		oCutDate:"09/12/2019"},
		{oTitle:"Napa Wine Testing",
		oName:"By Peter Parker",
		oTime:"4:30 PM",
		oId:"2340 / 5000",
		timestamp:1574553600000,
		oPrice:"50.00",
		oCutDate:"09/12/2019"},
		{oTitle:"Napa Wine Testing",
		oName:"By Peter Parker",
		oTime:"4:30 PM",
		timestamp:1574553600001,
		oId:"2340 / 5000",
		oPrice:"50.00",
		oCutDate:"09/12/2019"},
		{oTitle:"Napa Wine Testing",
		oName:"By Peter Parker",
		oTime:"4:30 PM",
		oId:"2340 / 5000",
		timestamp:1574553600002,
		oPrice:"50.00",
		oCutDate:"09/12/2019"},
		{oTitle:"Napa Wine Testing",
		oName:"By Peter Parker",
		oTime:"4:30 PM",
		oId:"2340 / 5000",
		oPrice:"50.00",
		timestamp:1574553600003,
		oCutDate:"09/12/2019"}],


		boissetWine :[ {
		channelHost :[{path:"images/pic.jpg",hostName:"nikhi",next_session:"22 JUL, 3:45 PM",p_revenue:"$34,000"},{path:"images/pic.jpg",hostName:"nikhi",next_session:"22 JUL, 3:45 PM",p_revenue:"$34,000"}],
		winesInterest :[{path:"images/pic.jpg",hostName:"nikhi"},{path:"images/pic.jpg"}],
		upComing:2,
		pastSession:23,
		nextSession:"03:45",
		path:"images/banner1.jpg"
		

			},
			{
				channelHost :[{path:"images/pic.jpg",hostName:"nikhi",next_session:"22 JUL, 3:45 PM",p_revenue:"$34,000"},{path:"images/pic.jpg",hostName:"nikhi",next_session:"22 JUL, 3:45 PM",p_revenue:"$34,000"}],
				winesInterest :[{path:"images/pic.jpg",hostName:"nikhi"},{path:"images/pic.jpg"}],
				upComing:2,
				pastSession:23,
				nextSession:"03:45",
				path:"images/banner1.jpg"
			}
		],
		checkHost:'',
		customRadio2:false,
		customRadio1:true,
		customRollRadio1:true,
		customRollRadio2:false,
			

	}
}

checkHost1=(e)=>{
	console.log(e.target)
	this.setState({
		[e.target.id]:!this.state.customRadio1,
		customRadio2:!this.state.customRadio2
		},()=>console.log(this.state.customRadio1))
}
checkHost2=(e)=>{
	console.log(e.target)
	this.setState({
		[e.target.id]:!this.state.customRadio2,
		customRadio1:!this.state.customRadio1
		},()=>console.log(this.state.customRadio2))
}

checkRoll1=(e)=>{
	console.log(e.target)
	this.setState({
		[e.target.id]:!this.state.customRollRadio1,
		customRollRadio2:!this.state.customRollRadio2
		},()=>console.log(this.state.customRollRadio1))
}
checkRoll2=(e)=>{
	console.log(e.target)
	this.setState({
		[e.target.id]:!this.state.customRollRadio2,
		customRollRadio1:!this.state.customRollRadio1
		},()=>console.log(this.state.customRollRadio2))
}

forEmailer() {
	var arr = [];
	//   for (let i = 0; i <= 23; i++) {
	// 	  arr.push(<option key={i} value="{i}">{i}</option>)
	//   }
	return arr; 
  }

componentDidMount(){
	// $("#dash_land_block :input").attr("disabled", true);
  }


  getInitialState=()=>{
    return {
      selectedOption: 'option1'
    };
  }

  setStartDate =(date)=>{
	let date1=date;
	let upcomingSession=[];
	console.log('----------------',new Date(date).getMonth(),new Date(date).getDate());
	let dateofMonth = new Date(date).getDate();
	 let timeSelection =  (new Date (date).getMonth()) ;
	 console.log(timeSelection);
	  date = new Date(Date.UTC(2019, timeSelection, 1));
	 var days = [];
	 var dayofWeek=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
	console.log('date.getMonth()',date.getMonth());
	 while (date.getMonth() === timeSelection) {
		//days.push(new Date(date).getDate());
		 let n ={date:new Date(date).getDate(),
			day:dayofWeek[new Date(date).getDay()],
			timestamp:new Date(date).getTime(),
		}
		 days.push(n);
		 //days.push(new Date(date).getDay());
		 date.setDate(date.getDate() + 1);
	  }
	console.log(days)
	  for (let i=dateofMonth-1 ;i<days.length;i++){
		  console.log(days[i])
		  upcomingSession.push(days[i]);
	  } 
	
	this.setState({
		startDate:date1,
		daysOfMonth:days,
		upcomingSession:upcomingSession,
	},()=>console.log('this.state.daysOfMonth',this.state.upcomingSession));
	
	}


	scriptOnDate=(e)=>{
		let a = [];
		a=[this.state.sessionData[e.target.id]]
		console.log("AK",e.target.name,a);
		// for(let i=0;i<this.state.sessionData.length;i++){
		// 	if(this.state.sessionData[i].timestamp==e.target.name){
		// 	a.push(this.state.sessionData[i]);}
		// 	else{
		// 		console.log(this.state.sessionData[i].timestamp,"---------------------",e.target.name)
		// 	}
		// }
		this.setState({
			sessionData:a
		})
		
	
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
	  console.log(e.target,	  this.state.upcomingSession[this.state.upcomingSession.length-1].timestamp);
  let date = 1574726400000 ;
	  let date1=date;
	let upcomingSession=[];
	console.log('----------------',new Date(date).getMonth(),new Date(date).getDate());
	let dateofMonth = new Date(date).getDate();
	 let timeSelection =  (new Date (date).getMonth()) ;
	 console.log(timeSelection);
	  date = new Date(Date.UTC(2019, timeSelection, 1));
	 var days = [];
	 var dayofWeek=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
	console.log('date.getMonth()',date.getMonth());
	 while (date.getMonth() === timeSelection) {
		//days.push(new Date(date).getDate());
		 let n ={date:new Date(date).getDate(),
			day:dayofWeek[new Date(date).getDay()],
			timestamp:new Date(date).getTime(),
		}
		 days.push(n);
		 //days.push(new Date(date).getDay());
		 date.setDate(date.getDate() + 1);
	  }
	console.log(days)
	  for (let i=dateofMonth-1 ;i<days.length;i++){
		  console.log(days[i])
		  upcomingSession.push(days[i]);
	  } 
	
	this.setState({
		startDate:date1,
		daysOfMonth:days,
		upcomingSession:upcomingSession,
	},()=>console.log('this.state.daysOfMonth',this.state.upcomingSession));

 }
 
 
 render() {

	

    return (
    <div>
    <div id="root">
    <div className="App">
        <div className="container-fluid">
			<div className="row top-header px-4 py-3">
                <div className="col-lg-2 d-flex d-md-block justify-content-center p-2"><img src="images/login-logo.png" className="logo" alt="logo" /></div>
                <div className="col-lg-4 d-flex d-md-block justify-content-center p-4">
                    <div className="user-info d-flex align-items-center"><img src="images/attendee.png" className="user-avtar pic" alt="" />
                        <div className="pl-4">
                            <h3>Welcome Cersei!</h3>
                            <p>You have 3 sessions this week</p>
                            <p>Next Session, Wednesday, 24 July 2019</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 ">
                    <div className="d-flex justify-content-between flex-wrap">
                        <div className="header-info-right">
                            <p>Weekly Attendance</p>
                            <h3>66%</h3></div><span className="border-right gray-border"></span>
                        <div className="header-info-right">
                            <p>Total Views</p>
                            <h3>45.6K</h3></div><span className="border-right gray-border"></span>
                        <div className="header-info-right">
                            <p>Total Revenue</p>
                            <h3>$44,000</h3></div><span className="border-right gray-border"></span>
                              <div className="message-notification"><img src="images/message.png" alt="" />
                          <span className="message-count">2</span></div>
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
							{/* <input type="text" name="" class="form-control" id="datepicker" /> */}
							<DatePicker className="form-control" id="datepicker" selected={this.state.startDate} onChange={date => this.setStartDate(date)} />
							<div className="c_icon"><img src="images/cal.png" className="translat"  alt="" /><img src="images/angle-down.png" className="translat"  alt="" /></div>
						</div>
					</div>
				</div>
				<div className="cont1">
				
				    <div className="tab-content">
						<div id="us" className="tab-pane active">
						
						    <ul className="nav nav-tabs mx-0" role="tablist">
							{this.state.upcomingSession.length>0?
							(this.state.upcomingSession.map((row,i)=>
							    <li className="nav-item flex-fill">
							      <a className="nav-link active act" data-toggle="tab" id = {i} name={row.timestamp} onClick={this.scriptOnDate} href="#dt1">{row.date}<br /><span>{row.day}</span></a>
							    </li>
								)):''}
							    {/* <li class="nav-item flex-fill">
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
							    </li> */}
							    <li className="nav-item angle-img">
							      <a className="nav-link" data-toggle="tab" href="#dt3"><img src="images/Triangle-right.png" onClick={this.nextDate} alt="arrow" /></a>
							    </li>
						    </ul>
						    <div className="content-container mt-2">
						    	<div className="row mb-4">
						    	{this.state.sessionData.map((row,i)=>
									<div className="col-12 col-lg-4 col-sm-6 mt-4 px-2" key={i}>
						    			<div className="inner_containr p-4">
										{/* {oTime:"4:30 PM"},{oId:"Signid Up 2340 / 5000(max)"},{oPrice:"$50.00 per session"},{oCutDate:"Cut off date 09/12/2019"} */}
											<h4 className="white mb-3">{row.oTitle}</h4>
						    				<p><img src="images/gray-icons/user.png" className="mr-3"  alt="" />{row.oName}</p>
						    				<p><img src="images/gray-icons/clock.png" className="mr-3"  alt="" />{row.oTime}</p>
						    				<p><img src="images/gray-icons/teamwork.png" className="mr-3"  alt="" />Signid Up {row.oId} (max)</p>
						    				<p><img src="images/gray-icons/dollar.png" className="mr-3"  alt="" />${row.oPrice} per session</p>
						    				<p className="mb-4"><img src="images/gray-icons/date.png" className="mr-3"  alt="" />Cut off date {row.oCutDate}</p>
						    				<div className="d-flex flex-wrap justify-content-between">
						    					<div className="mt-3 flex-grow-1"><button className="session_btn text-uppercase">session details</button></div>
						    					<div className="mt-3 mr-4"><img src="images/invite.png" className="mt-2"  alt="" /></div>
						    					<div className="mt-3"><img src="images/edit.png" className="mt-2 ml-2"  alt="" /></div>
						    				</div>
										</div>
										
						    		</div>
								)}
						    		{/* <div class="col-12 col-lg-4 col-sm-6 mt-4 px-2">
						    			<div class="inner_containr p-4">
						    				<h4 class="white mb-3">Napa Wine Testing</h4>
						    				<p><img src="images/gray-icons/user.png" class="mr-3" />By Peter Parker</p>
						    				<p><img src="images/gray-icons/clock.png" class="mr-3" />4:30 PM</p>
						    				<p><img src="images/gray-icons/teamwork.png" class="mr-3" />Signid Up 2340 / 5000(max)</p>
						    				<p><img src="images/gray-icons/dollar.png" class="mr-3" />$50.00 per session</p>
						    				<p class="mb-4"><img src="images/gray-icons/date.png" class="mr-3" />Cut off date 09/12/2019</p>
						    				<div class="d-flex flex-wrap justify-content-between">
						    					<div class="mt-3 flex-grow-1"><button class="session_btn text-uppercase">session details</button></div>
						    					<div class="mt-3 mr-4"><img src="images/invite.png" class="mt-2" /></div>
						    					<div class="mt-3"><img src="images/edit.png" class="mt-2 ml-2" /></div>
						    				</div>
						    			</div>
						    		</div>
						    		<div class="col-12 col-lg-4 col-sm-6 mt-4 px-2">
						    			<div class="inner_containr p-4">
						    				<h4 class="white mb-3">Napa Wine Testing</h4>
						    				<p><img src="images/gray-icons/user.png" class="mr-3" />By Peter Parker</p>
						    				<p><img src="images/gray-icons/clock.png" class="mr-3" />4:30 PM</p>
						    				<p><img src="images/gray-icons/teamwork.png" class="mr-3" />Signid Up 2340 / 5000(max)</p>
						    				<p><img src="images/gray-icons/dollar.png" class="mr-3" />$50.00 per session</p>
						    				<p class="mb-4"><img src="images/gray-icons/date.png" class="mr-3" />Cut off date 09/12/2019</p>
						    				<div class="d-flex flex-wrap justify-content-between">
						    					<div class="mt-3 flex-grow-1"><button class="session_btn text-uppercase">session details</button></div>
						    					<div class="mt-3 mr-4"><img src="images/invite.png" class="mt-2" /></div>
						    					<div class="mt-3"><img src="images/edit.png" class="mt-2 ml-2" /></div>
						    				</div>
						    			</div>
						    		</div>
						    		<div class="col-12 col-lg-4 col-sm-6 mt-4 px-2">
						    			<div class="inner_containr p-4">
						    				<h4 class="white mb-3">Napa Wine Testing</h4>
						    				<p><img src="images/gray-icons/user.png" class="mr-3" />By Peter Parker</p>
						    				<p><img src="images/gray-icons/clock.png" class="mr-3" />4:30 PM</p>
						    				<p><img src="images/gray-icons/teamwork.png" class="mr-3" />Signid Up 2340 / 5000(max)</p>
						    				<p><img src="images/gray-icons/dollar.png" class="mr-3" />$50.00 per session</p>
						    				<p class="mb-4"><img src="images/gray-icons/date.png" class="mr-3" />Cut off date 09/12/2019</p>
						    				<div class="d-flex flex-wrap justify-content-between">
						    					<div class="mt-3 flex-grow-1"><button class="session_btn text-uppercase">session details</button></div>
						    					<div class="mt-3 mr-4"><img src="images/invite.png" class="mt-2" /></div>
						    					<div class="mt-3"><img src="images/edit.png" class="mt-2 ml-2" /></div>
						    				</div>
						    			</div>
						    		</div>
						    		<div class="col-12 col-lg-4 col-sm-6 mt-4 px-2">
						    			<div class="inner_containr p-4">
						    				<h4 class="white mb-3">Napa Wine Testing</h4>
						    				<p><img src="images/gray-icons/user.png" class="mr-3" />By Peter Parker</p>
						    				<p><img src="images/gray-icons/clock.png" class="mr-3" />4:30 PM</p>
						    				<p><img src="images/gray-icons/teamwork.png" class="mr-3" />Signid Up 2340 / 5000(max)</p>
						    				<p><img src="images/gray-icons/dollar.png" class="mr-3" />$50.00 per session</p>
						    				<p class="mb-4"><img src="images/gray-icons/date.png" class="mr-3" />Cut off date 09/12/2019</p>
						    				<div class="d-flex flex-wrap justify-content-between">
						    					<div class="mt-3 flex-grow-1"><button class="session_btn text-uppercase">session details</button></div>
						    					<div class="mt-3 mr-4"><img src="images/invite.png" class="mt-2" /></div>
						    					<div class="mt-3"><img src="images/edit.png" class="mt-2 ml-2" /></div>
						    				</div>
						    			</div>
						    		</div> */}
						    		<div className="col-12 col-lg-4 col-sm-6 mt-4 px-2">
						    			<div className="plus_icnn">+</div>
						    		</div>
						    	</div>
						    	
						    </div>
						    <div className="inner_containr px-4 py-4 mx--6 d-flex justify-content-between align-items-center">
						    	<h4 className="px-2 m-0 white">Create Channel</h4>
						    	<a href="#"><img src="images/add.png" className="px-2"  alt="" /></a>
						    </div>
						    <div className="row">
							{this.state.boissetWine.map((row,i)=>
						    	<div className="col-lg-4 mt-3 px-2" key={i}>
								
						    		<div className="inner_containr px-3 py-4">
						    			<div className="d-flex justify-content-between flex-wrap">
						    				<h4 className="hdng1 font-weight-bold">Boisset Wines</h4>
						    				<a href="#"><img src="images/edit.png" alt="" /></a>
						    			</div>
						    			<img src={row.path} alt="" className="d-block img-fluid inner_containr my-3" />
						    			<div className="d-flex justify-content-between flex-wrap">
						    				<div className="">
						    					<p className="checktxt mb-0 mt-2">Upcoming</p>
						    					<p className="pick text-center">{row.upComing}</p>
						    				</div>
						    				<div className="px-3">
						    					<p className="checktxt mb-0 mt-2">Past Session</p>
						    					<p className="pick text-center">{row.pastSession}</p>
						    				</div>
						    				<div className="">
						    					<p className="checktxt mb-0 mt-2 text-right">Next Session by Damien Smith</p>
						    					<p className="pick text-center">25 JUL, {row.nextSession} Pm</p>
						    				</div>
						    			</div>

						    			<div className="d-flex justify-content-between flex-wrap align-items-center mt-3">
						    				<h4 className="white">Channel Host</h4>
						    				{/* <a href="#"><img src="images/add.png" /></a> */}
											<a className="pick" data-toggle="modal" data-target="#dasboard_myModal2"><img src="images/add.png" id={i}
											 onClick={e=>this.setState({
												channelPopup:i
											 },()=>console.log(this.state.channelPopup))} alt="" /></a>
											
						    			</div>
										{row.channelHost.map((channl_array,l)=>
						    			<div className="d-flex mt-3" key={l}>
				                            <img src={channl_array.path} className="mr-3 mt-1 w-70" alt="user-icon" />
				                            <div>
				                                <p className="checktxt_name pb-0 mb-2">{channl_array.hostName}</p>
				                                <p className="checktxt mb-0">Next session on {channl_array.next_session}</p>
				                                <p className="checktxt mb-0">Past Revenue {channl_array.p_revenue}</p>
				                            </div>
						    			</div>
										)}
						    			{/* <div class="d-flex mt-3">
				                            <img src="images/pic.jpg" class="mr-3 mt-1 w-70" alt="user-icon" />
				                            <div>
				                                <p class="checktxt_name pb-0 mb-2">David Cornel</p>
				                                <p class="checktxt mb-0">Next session on 22 JUL, 3:45 PM</p>
				                                <p class="checktxt mb-0">Past Revenue $34,000</p>
				                            </div>
						    			</div> */}
						    			<div className="d-flex justify-content-between flex-wrap mt-4 align-items-center">
						    				<h4 className="white">Interests</h4>
						    				<a href="#"><img src="images/add.png"  alt="" /></a>
						    			</div>
										{row.winesInterest.map((inter_array,l)=>
						    			<div className="d-flex mt-3" key={l}>
				                            <img src={inter_array.path} className="mr-3 mt-1 w-70" alt="user-icon" />
				                            <div className="flex-grow-1">
				                                <p className="checktxt_name pb-0 mb-2">Napa Wines</p>
				                                <p className="checktxt mb-0">Next session on 22 JUL, 3:45 PM</p>
				                                <div className="overflow-hidden">
					                                <p className="checktxt mb-0 float-left">Upcoming Sessions 3</p>
					                                <p className="checktxt mb-0 float-right">Past Sessions 33</p>
				                            	</div>
				                            	<div className="clearfix"></div>
				                            </div>
						    			</div>
										)}
						    			{/* <div class="d-flex mt-3">
				                            <img src="images/pic.jpg" class="mr-3 mt-1 w-70" alt="user-icon" />
				                            <div class="flex-grow-1">
				                                <p class="checktxt_name pb-0 mb-2">Sonoma Wines</p>
				                                <p class="checktxt mb-0">Next session on 22 JUL, 3:45 PM</p>
				                                <div class="overflow-hidden">
					                                <p class="checktxt mb-0 float-left">Upcoming Sessions 2</p>
					                                <p class="checktxt mb-0 float-right">Past Sessions 22</p>
				                            	</div>
				                            	<div class="clearfix"></div>
				                            </div>
						    			</div> */}
						    		</div>
								
								</div>
								)}

						    	{/* <div class="col-lg-4 mt-3 px-2">
						    		<div class="inner_containr px-3 py-4">
						    			<div class="d-flex justify-content-between flex-wrap">
						    				<h4 class="hdng1 font-weight-bold">Boisset Wines</h4>
						    				<a href="#"><img src="images/edit.png" /></a>
						    			</div>
						    			<img src="images/wine1.jpg" class="d-block img-fluid inner_containr my-3" />
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
						    				<a href="#"><img src="images/add.png" /></a>
						    			</div>
						    			<div class="d-flex mt-3">
				                            <img src="images/pic.jpg" class="mr-3 mt-1 w-70" alt="user-icon" />
				                            <div>
				                                <p class="checktxt_name pb-0 mb-2">Ritesh Shrivastva</p>
				                                <p class="checktxt mb-0">Next session on 22 JUL, 3:45 PM</p>
				                                <p class="checktxt mb-0">Past Revenue $34,000</p>
				                            </div>
						    			</div>
						    			<div class="d-flex mt-3">
				                            <img src="images/pic.jpg" class="mr-3 mt-1 w-70" alt="user-icon" />
				                            <div>
				                                <p class="checktxt_name pb-0 mb-2">David Cornel</p>
				                                <p class="checktxt mb-0">Next session on 22 JUL, 3:45 PM</p>
				                                <p class="checktxt mb-0">Past Revenue $34,000</p>
				                            </div>
						    			</div>
						    			<div class="d-flex justify-content-between flex-wrap mt-4">
						    				<h4 class="white">Interests</h4>
						    				<a href="#"><img src="images/add.png" /></a>
						    			</div>
						    			<div class="d-flex mt-3">
				                            <img src="images/pic.jpg" class="mr-3 mt-1 w-70" alt="user-icon" />
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
						    	</div> */}
						    </div>

						{/* Select add  channel host Start */}
							<div className="modal" id="dasboard_myModal2">
								<div className="modal-dialog modal-dialog-centered">
								<div className="modal-content">
									<div className="">
									<div className="text-center">
										<img src="/images/host.png" alt="" />
										<p className="white">Invite Someone to be a Host</p>
									</div>
									</div>
									<div className="modal-body ">
										<div className="card cardbg">
										<div className="form-group ">
											<div className="row">
												<div className="col-md-6 pr-md-2">
													<div className="custom-control custom-radio">
														<input type="radio" className="custom-control-input" id="customRadio1" value="true"   name="example1" checked={this.state.customRadio1} onChange={this.checkHost1} />
														<label className="custom-control-label" htmlFor="customRadio1"> Existing Host</label>
													</div>    
												</div>
												<div className="col-md-6 pr-md-2">
													<div className="custom-control custom-radio mb-20">
														<input type="radio" className="custom-control-input" id="customRadio2" value="false" name="example1" checked={this.state.customRadio2} onChange={this.checkHost2}  />
														<label className="custom-control-label" htmlFor="customRadio2">New Host</label>
													</div>  
												</div>
												<div className="clearfix"></div>
												
													{this.state.customRadio2 ?
													<div className="col-md-6 pr-md-2" id="dash_land_block">
														<span className="cover-border "></span>
														<label className="label">Enter First Name</label>
														<div className="">
															<input type="text" className="input-field" value={this.state.boissetWine[this.state.channelPopup].upComing} onChange={e=>console.log()} placeholder="First name" />
															<span className="signedup_2"></span>
														</div>
													</div>
													:''}	
													{this.state.customRadio2 ?
													<div className="col-md-6 pr-md-2" id="dash_land_block">
														<span className="cover-border "></span>
														<label className="label">Enter Last Name</label>
														<div className="">
															<input type="text" className="input-field" placeholder="Last name" />
															<span className="signedup_2"></span>
														</div>
													</div>
													:''}
												
												{this.state.customRadio2 ?
												<div className="col-md-12 pr-md-2">
													<span className="cover-border "></span>
													<label className="label">Email Address</label>
													<div className="">
														<input type="email" className="input-field" value={this.state.email} placeholder="Email Address" />
														<span className="dashboard_land"></span>
													</div>
												</div>
												:''}
												{/* XYZ */}
												{/* new user*/}
												{this.state.customRadio1 ?
													<div className="col-md-6 pr-md-2">
														<span className="cover-border "></span>
														<label className="label">Enter First Name</label>
														<div className="">
															<input type="text" className="input-field"  placeholder="First name" disabled/>
															<span className="signedup_2"></span>
														</div>
													</div>
													:''}
													{this.state.customRadio1 ?
													<div className="col-md-6 pr-md-2">
														<span className="cover-border "></span>
														<label className="label">Enter Last Name</label>
														<div className="">
															<input type="text" className="input-field" placeholder="Last name" disabled/>
															<span className="signedup_2"></span>
														</div>
													</div>
													:''}
												{this.state.customRadio1 ?
												<div className="col-md-12 pr-md-2">
													<span className="cover-border "></span>
													<label className="label">Email Address</label>
													<div className="">
														{/* <input type="email" className="input-field" placeholder="Last name" />
														<span className="dashboard_land"></span> */}
														<select className="input-field">                     
															{this.forEmailer()}
														</select>
													</div>
												</div>
												:''}

												{/* new user end */}
												<div className="col-md-4 pr-md-2">
													<h3 className="info">
														<img src="images/testing.png" className="mr-3 text_lft_icon" alt="script-icon" />Role
													</h3>
												</div>
													<div className="col-md-4 px-4">
														<div className="custom-control custom-radio">
															<input type="radio" className="custom-control-input" id="customRollRadio1" value="true"   name="example2" checked={this.state.customRollRadio1} onChange={this.checkRoll1} />
															<label className="custom-control-label" htmlFor="customRollRadio1">  Adminstration & host</label>
														</div> <br/>
														<div className="custom-control custom-radio">
															<input type="radio" className="custom-control-input" id="customRollRadio2" value="false"  name="example2" checked={this.state.customRollRadio2} onChange={this.checkRoll2} />
															<label className="custom-control-label" htmlFor="customRollRadio2">  Host</label>
														</div>  
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="donebg"><button type="button" data-toggle="modal" data-dismiss="modal"  className="done" id="checkHost" >Invite</button></div>
								</div>
								
								</div>
								
							</div>
							{/* Select add  channel host End */}

						</div>
					    {/* <div id="ps" class="container tab-pane fade"><br />
					      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. </p>
					    </div>
					    <div id="onde" class="container tab-pane fade"><br />
					      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. </p>
					    </div> */}
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