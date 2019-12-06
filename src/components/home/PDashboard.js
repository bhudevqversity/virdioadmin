import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import Slider from "react-slick";


//import $ from 'jquery';
//import DateTimeField from "react-bootstrap-datetimepicker";

class PDashboard extends Component {
  
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
     let n ={date:new Date(date).getDate(),day:dayofWeek[new Date(date).getDay()]}
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
	upcomingSession:upcomingSession
},()=>console.log('this.state.daysOfMonth',this.state.upcomingSession));

}


// next date
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
// end next date


  render() {
	var settings = {
		dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 4,
      initialSlide: 0,
		// responsive: [
		// 	{
		//   breakpoint: 1024,
		//   settings: {
		// 	slidesToShow: 3,
		// 	slidesToScroll: 1,
		//   }
		// },
		// {
		//   breakpoint: 600,
		//   settings: {
		// 	slidesToShow: 2,
		// 	slidesToScroll: 1,
		// 	arrows:false
		//   }
		// },
		// {
		//   breakpoint: 480,
		//   settings: {
		// 	slidesToShow: 1,
		// 	slidesToScroll: 1,
		// 	arrows:false
		//   }
		// }
		// ]
	  };


    return (
	<div>
	
	<div className="container-fluid px-3 px-md-5 pb-2">
	<div className="hdr pt-4 pb-3">
		<div className="row">
			<div className="col-lg-1 pt-2 px-lg-0">
				<h1 className="text-center">Virdio</h1>
			</div>
			<div className="col-lg-4 d-flex d-md-block justify-content-center">
				<div className="user-info d-flex align-items-center">
					<img src="/images/pic.jpg" className="user-avtar pic" alt=''/>
					<div className="pl-4">
						<h2 className="mb-0">Welcome Cersei!</h2>
						<p className="mb-0">You have 3 sessions this week</p>
						<p>Next Session, Wednesday, 24 July 2019</p>
					</div>
				</div>
			</div>
			<div className="col-lg-7 mt-3 mt-md-0">
			<div className="row">
					<div className="col-sm-10 col-xl-10 input-box">
						<div className="input_field_container p-0">
							<div className="row mx-0">
								<div className="col-xl-8 pr-lg-0">
						    		<input type="text" className="form-control" placeholder="Search for interest channels, hosts or keywords" name="" />
								</div>
								<div className="col-xl-4 pl-4 pos-relative">
									<div className="custom-control custom-checkbox mb-3">
								     <input type="checkbox" className="custom-control-input" id="customCheck" name="" />
								      <label className="custom-control-label mt-3" htmlFor="customCheck">Advance</label>
								    </div>
								</div>
								<div className="right-small-box">
									<i className="fa fa-search"></i>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-2 col-xl-2">
						<div className="text-sm-center pt-sm-2">
							<p className="mb-2 icons"><i className="fa fa-commenting"></i>
								<span className="badge">2</span>
							</p>
						</div>
					</div>
					
				</div>
			</div>
		</div>	
	</div>
</div>

<div className="tab-sec px-5">
	<div className="cont">
		<div className="row">
			<div className="col-lg-8">
				<ul className="nav nav-tabs" role="tablist">
				    <li className="nav-item">
				      <a className="nav-link active" data-toggle="tab" href="#us">Upcoming Session</a>
				    </li>
				    <li className="nav-item">
				      <a className="nav-link" data-toggle="tab" href="#ps">Past Session</a>
				    </li>
				    <li className="nav-item">
				      <a className="nav-link" data-toggle="tab" href="#onde">On Demand</a>
				    </li>
			    </ul>
			</div>
			<div className="col-lg-4 datepick">
				{/* <input type="text" name="" className="form-control" id="datepicker" /> */}
				<DatePicker className="form-control" id="datepicker" selected={this.state.startDate} onChange={date => this.setStartDate(date)} />
				<div className="c_icon">
					<i className="fa fa-calendar"></i>
					<i className="fa fa-angle-down ml-3"></i>
				</div>
			</div>
		</div>
	</div>
	<div className="cont1">
	
	    <div className="tab-content">
			<div id="us" className="tab-pane active">
			
			    <div className="nav nav-tabs" role="tablist">
					{this.state.upcomingSession.length>0?
				
					(this.state.upcomingSession.map((row,i)=>
				    <div className="nav-item flex-fill" key={i}>
				      <a className="nav-link active act" data-toggle="tab" href="#dt1">{row.date}<br /><span>{row.day}</span></a>
				    </div>
					)):''}
					
				    {/* <li className="nav-item flex-fill">
				      <a className="nav-link" data-toggle="tab" href="#dt2">23<br /><span>TUE</span></a>
				    </li>
				    <li className="nav-item flex-fill">
				      <a className="nav-link act" data-toggle="tab" href="#dt3">24<br /><span>WED</span></a>
				    </li>
				    <li className="nav-item flex-fill">
				      <a className="nav-link act" data-toggle="tab" href="#dt3">25<br /><span>THU</span></a>
				    </li>
				    <li className="nav-item flex-fill">
				      <a className="nav-link" data-toggle="tab" href="#dt3">26<br /><span>FRI</span></a>
				    </li>
				    <li className="nav-item flex-fill">
				      <a className="nav-link" data-toggle="tab" href="#dt3">27<br /><span>SAT</span></a>
				    </li>
				    <li className="nav-item flex-fill">
				      <a className="nav-link act" data-toggle="tab" href="#dt3">28<br /><span>SUN</span></a>
				    </li> */}
				    <div className="nav-item angle-img">
				      <a className="nav-link" data-toggle="tab" href="#dt3"><img src="/images/Triangle-right.png" onClick={this.nextDate} alt="arrow" /></a>
				    </div>
			    </div>
			    <div className="content-container mt-5">
			    	<div className="row mb-5">
			    		<div className="col-xl-8 col-lg-7 pr-xl-5">
			    			<div className="image"><img src="/images/wine.jpg" className="img-fluid" alt=''/></div>
			    		</div>
			    		<div className="col-xl-4 col-lg-5">
			    			<h2 className="mt-0 mt-lg-0">A Crash Course in Wine Testing</h2>
			    			<h3 className="display-3 mt-4 mb-3">By Peter Parker, at 4:30 PM</h3>
			    			<p className="text-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. </p>
			    			<div className="d-flex mt-4">
			    				<div className="first-col flex-grow-1"><h3><span className="num1" data-text="hh">00</span>:<span className="num2">12</span>:<span className="num3">36</span></h3></div>
			    				<div className="second-col"><i className="fa fa-commenting"></i></div>
			    				<div className="third-col pl-1 pl-md-4"><i className="fa fa-commenting"></i></div>
			    			</div>
			    		</div>
			    	</div>
			    	<div className="row mb-5">
			    		<div className="col-xl-8 col-lg-7 pr-xl-5">
			    			<div className="image"><img src="/images/wine.jpg" className="img-fluid" alt=''/></div>
			    		</div>
			    		<div className="col-xl-4 col-lg-5">
			    			<h2 className="mt-0 mt-lg-0">A Crash Course in Wine Testing</h2>
			    			<h3 className="display-3 mt-4 mb-3">By Peter Parker, at 4:30 PM</h3>
			    			<p className="text-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. </p>
			    			<div className="d-flex mt-4">
			    				<div className="first-col flex-grow-1"><h3>00:12:36</h3></div>
			    				<div className="second-col"><i className="fa fa-commenting"></i></div>
			    				<div className="third-col pl-4"><i className="fa fa-commenting"></i></div>
			    			</div>
			    		</div>
			    	</div>
			    </div>
			</div>
		    <div id="ps" className="container tab-pane fade"><br />
		      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. </p>
		    </div>
		    <div id="onde" className="container tab-pane fade"><br />
		      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. </p>
		    </div>
		</div>
	
	</div>

</div>

	</div>	
    );
  }
}

export default PDashboard;
