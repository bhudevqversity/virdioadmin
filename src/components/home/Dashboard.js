import React, { Component } from "react";
import { Link } from 'react-router';
import Slider from "react-slick";
import DatePicker from "react-datepicker";
import $ from 'jquery';
import {browserHistory} from 'react-router'

class Dashboard extends Component {
constructor(props) {
	super(props);
	this.state = {
	carouselData :[{path:"/images/banner1.jpg"},{path:"/images/banner2.jpg"},{path:"/images/banner3.jpg"}],
	fitnessData:[{path:"/images/wine.jpg"},{path:"/images/wine.jpg"},{path:"/images/wine.jpg"},{path:"/images/wine.jpg"},{path:"/images/wine.jpg"},{path:"/images/wine.jpg"}],
	wineData:[{path:"/images/wine.jpg"},{path:"/images/wine.jpg"},{path:"/images/wine.jpg"},{path:"/images/wine.jpg"},{path:"/images/wine.jpg"},{path:"/images/wine.jpg"}],
    cookingData:[{path:"/images/wine.jpg"},{path:"/images/wine.jpg"},{path:"/images/wine.jpg"},{path:"/images/wine.jpg"},{path:"/images/wine.jpg"},{path:"/images/wine.jpg"}]
	}
	
}
 
componentDidMount(){
//   console.log('Ak');
//   console.log('new Date().getTime()',new Date().getTime());
//   let ka= new Date();
//   ka.setDate(ka.getDate() - 1);
//   console.log(ka.getTime(),'ka.setDate(ka.getDate() - 1)',ka);
//   let date = new Date();
//   console.log(date);
//   let timeSelection =  new Date (date.getTime()).getMonth() ;
//   console.log(timeSelection);
//   date = new Date(Date.UTC(2019, timeSelection, 1));
//   var days = [];
//   var dayofWeek=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
//   console.log('date.getMonth()',date.getMonth());
//   while (date.getMonth() === 10) {

	 //days.push(new Date(date).getDate());

	//  let n ={date:new Date(date).getDate(),day:dayofWeek[new Date(date).getDay()]}
	//  days.push(n);

	 //days.push(new Date(date).getDay());

// 	 date.setDate(date.getDate() + 1);
//   }
//   for (let i=18 ;i<days.length-1;i++){
// 	  console.log(days[i])
//   } 
  
//   console.log(days[29],days.length,'DAYS**************************************',days);

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

	setStartDate1 =(date)=>{
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
			startDate1:date1,
			daysOfMonth:days,
			upcomingSession:upcomingSession,
		},()=>console.log('this.state.daysOfMonth',this.state.upcomingSession));
		
		}
	

 customChecked=(e)=>{
	console.log(e.target.id)
	this.setState({
		[e.target.id]:!this.state.customCheck1,
		},()=>{
			if(this.state.customCheck1){
				$(".parent-row").show();
			}else{
				$(".parent-row").hide();
			}
		})
}

  

  render() {

	var settings = {
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 3000,
		arrows:false,
  		pauseOnHover:true,
		cssEase: "linear",
		responsive: [
			{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows:false
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows:false
		  }
		}
		]
	  };

	
	  

    return (
	<div>
	<div className="outer-container">
	<div className="container-fluid px-3 px-md-5">
	
		<div className="slider-header pt-4">
			<div className="row">
				<div className="col-md-5">
					<h1 className="logo-text text-center text-md-left"><img src="/images/login-logo.png" className="logo" alt="logo" /></h1>
				</div>
				<div className="col-md-7">
					<div className="d-flex justify-content-md-end justify-content-center align-items-center flex-wrap">
						<p>Sign Up, It's Free</p>
						<button className="btn btn-primary text-uppercase mr-3 font-weight-bold radius-8" onClick={e=>browserHistory.push("/signUp")}>Sign Up</button>
						<button className="btn btn-outline-secondary font-weight-bold radius-8">LOG IN</button>
					</div>
				</div>
			</div>	
		</div>
	
		<div className="slider_sec mt-4 mb-5">
			<div id="demo" className="carousel slide">
			  <ul className="carousel-indicators">
			    <li data-target="#demo" data-slide-to="0" className="active"></li>
			    <li data-target="#demo" data-slide-to="1"></li>
			    <li data-target="#demo" data-slide-to="2"></li>
			  </ul>
			  <div className="carousel-inner">
				{this.state.carouselData.map((row,i)=>
				<div className={(i===0?"carousel-item active":"carousel-item")} key ={i}>
				      <img src={row.path} alt="" />
				      <div className="carousel-caption">
				      	<div className="inner_text d-flex flex-wrap align-items-center ">
				      		<div className="upper_inner_text">
						        <h3>Next generation of virtual studio</h3>
						        <p className="mb-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when</p>
						    </div>
						    <div className="lower_inner_text">
						    	<div className="learn_more d-flex justify-content-between">
						    		<p className="mb-0">Learn more about hosting sessions on virdio</p>
						    		<div className="bordr"><Link to ="/"><i className="fa fa-angle-right"></i></Link></div>
						    	</div>
						    </div>
				      </div>   
				    </div>
			    </div>
				)}
			    {/* <div className="carousel-item">
			      <img src="images/banner2.jpg" alt="" />
			      <div className="carousel-caption">
			        <div className="inner_text d-flex flex-wrap align-items-center ">
			      		<div className="upper_inner_text">
					        <h3>Next generation of virtual studio</h3>
					        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when</p>
					    </div>
					    <div className="lower_inner_text">
					    	<div className="learn_more d-flex justify-content-between">
					    		<p className="mb-0">Learn more about hosting sessions on virdio</p>
					    		<div className="bordr"><i className="fa fa-angle-right"></i></div>
					    	</div>
					    </div>
				      </div>  
			      </div>   
			    </div> */}
			    {/* <div className="carousel-item">
			      <img src="images/banner3.jpg" alt="" />
			      <div className="carousel-caption">
			        <div className="inner_text d-flex flex-wrap align-items-center ">
			      		<div className="upper_inner_text">
					        <h3>Next generation of virtual studio</h3>
					        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when</p>
					    </div>
					    <div className="lower_inner_text">
					    	<div className="learn_more d-flex justify-content-between">
					    		<p className="mb-0">Learn more about hosting sessions on virdio</p>
					    		<div className="bordr"><i className="fa fa-angle-right"></i></div>
					    	</div>
					    </div>
				      </div>  
			      </div>   
			    </div> */}
			  </div>
			</div>
		</div>
		
	</div>
	
	<div className="container-fluid px-3 px-md-5 slides_sec py-4">
	
			<div className="d-flex flex-wrap">
			<h2>Interest</h2>
				<div className="flex-grow-1 input_field_container py-0 radius-8">
					<div className="row mx-0 frst-input-row shadow-1 py-3 align-items-center radius-8">
						<div className="flex-grow-1">
							<input type="text" className="form-control" placeholder="Search for interest channels, hosts or keywords" name="" />
						</div>
						<div className="">
							<div className="">
								<div className="px-4 d-flex justify-content-end align-items-center">				
									<div class="custom-control custom-checkbox mb-0">
										<input type="checkbox" class="custom-control-input" id="customCheck1" value="false" checked={this.state.customCheck1} onChange={this.customChecked} name="example1" />
										<label class="custom-control-label" for="customCheck1"><p className="pl-2 p-top-3 mb-0">ADVANCED</p></label>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <div className="parent-row my-3">
						<div className="row mx-0 row1 d-flex">
							<div className="col-lg-4 col-md-6">								
								<p>On a specific date</p>			    					
								<DatePicker className="form-control dt_input" placeholderText="mm/dd/yy" id="datepicker" selected={this.state.startDate} onChange={date => this.setStartDate(date)} />
							</div>
							<div className="col-lg-4 col-md-6 text-md-center mt-3 mt-md-0">
								<p>On Demand</p>
								<div className="custom-control custom-checkbox mb-3">
									<input type="checkbox" className="custom-control-input" id="customCheck" name="" />
									<label className="custom-control-label" htmlFor="customCheck"></label>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<p>Length of session</p>
								<div className="custom-select1">
									<select name="">
										<option value="30">30 min</option>
										<option value="40">40 min</option>
										<option value="30">30 min</option>
										<option value="30">30 min</option>
									</select>
								</div>
							</div>
						</div>
						
					</div>	    			 */}
					<div className="parent-row my-3">				
						<div className="row mx-0 row1 d-flex">
							<div className="col-xl-6 col-lg-8 col-md-12 d-flex d-flex align-items-center">								
								<p className="mr-3 mb-0 w-143">On a specific date</p>		    					
								<DatePicker className="form-control dt_input flex-grow-1" placeholderText="mm/dd/yy" id="datepicker" selected={this.state.startDate} onChange={date => this.setStartDate(date)} />
								<p className="mx-2 mb-0">To</p>
								<DatePicker className="form-control dt_input flex-grow-1" placeholderText="mm/dd/yy" id="datepicker" selected={this.state.startDate1} onChange={date => this.setStartDate1(date)} />
							</div>
							<div className="col-xl-2 col-lg-4 col-sm-6 mt-4 mt-lg-0 d-flex justify-content-center align-items-center">
								<p className="mr-3 mb-0">On Demand</p>
								<div className="custom-control custom-checkbox mb-0">
									<input type="checkbox" className="custom-control-input" id="customCheck" name="" />
									<label className="custom-control-label" htmlFor="customCheck"></label>
								</div>
							</div>
							<div className="col-xl-4 col-lg-6 col-sm-6 mt-4 mt-xl-0 d-flex pr-lg-4 align-items-center">
								<p className="mr-3 mb-0">Length of session</p>
								<div className="custom-select1 flex-grow-1">
									<select name="">
										<option value="30">30 min</option>
										<option value="40">40 min</option>
										<option value="30">30 min</option>
										<option value="30">30 min</option>
									</select>
								</div>
							</div>
						</div>
						
					</div>

					<div className="right-small-box">
						<img src="/images/search.png" alt="search" />
					</div>
				</div>
			</div>
		<div className="small_img_part mt-4">
			<h3 className="my-3">FITNESS<sup className="ml-2">(24)</sup></h3>
			{/* <div className="slides_inner_part"> */}
			<Slider {...settings}>
				{this.state.fitnessData.map((row,i)=>
				<div className="item slide-ele" key ={i}>
					<img src={row.path} alt="#" />
					<p className="mt-3">Strength Training 1</p>
				</div>
				)}
				</Slider>
				{/* <div className="item">
					<img src="images/wine.jpg" />
					<p className="mt-3">Strength Training 2</p>
				</div>
				<div className="item">
					<img src="images/wine.jpg" />
					<p className="mt-3">Strength Training 3</p>
				</div>
				<div className="item">
					<img src="images/wine.jpg" />
					<p className="mt-3">Strength Training 4</p>
				</div>
				<div className="item">
					<img src="images/wine.jpg" />
					<p className="mt-3">Strength Training 5</p>
				</div>
				<div className="item">
					<img src="images/wine.jpg" />
					<p className="mt-3">Strength Training 6</p>
				</div> */}
			{/* </div> */}
		</div>
		<div className="small_img_part">
			<h3 className="my-3">WINE<sup className="ml-2">(24)</sup></h3>
			{/* <div className="slides_inner_part"> */}
			<Slider {...settings}>
				{this.state.wineData.map((row,i)=>
				<div className="item slide-ele" key={i} >
					<img src={row.path}  alt="#"/>
					<p className="mt-3">Strength Training</p>
				</div>
				)}
				</Slider>
				{/* <div className="item">
					<img src="images/wine.jpg" />
					<p className="mt-3">Strength Training</p>
				</div>
				<div className="item">
					<img src="images/wine.jpg" />
					<p className="mt-3">Strength Training</p>
				</div>
				<div className="item">
					<img src="images/wine.jpg" />
					<p className="mt-3">Strength Training</p>
				</div>
				<div className="item">
					<img src="images/wine.jpg" />
					<p className="mt-3">Strength Training</p>
				</div>
				<div className="item">
					<img src="images/wine.jpg" />
					<p className="mt-3">Strength Training</p>
				</div> */}
			{/* </div> */}
		</div>
		<div className="small_img_part">
			<h3 className="my-3">COOKING<sup className="ml-2">(24)</sup></h3>
			{/* <div className="slides_inner_part"> */}
			<Slider {...settings}>
				{this.state.cookingData.map((row,i)=>
				<div className="item slide-ele" key = {i}>
					<img src={row.path} alt="#"/>
					<p className="mt-3">Strength Training</p>
				</div>
				)}
				</Slider>
				{/* <div className="item">
					<img src="images/wine.jpg" />
					<p className="mt-3">Strength Training</p>
				</div>
				<div className="item">
					<img src="images/wine.jpg" />
					<p className="mt-3">Strength Training</p>
				</div>
				<div className="item">
					<img src="images/wine.jpg" />
					<p className="mt-3">Strength Training</p>
				</div>
				<div className="item">
					<img src="images/wine.jpg" />
					<p className="mt-3">Strength Training</p>
				</div>
				<div className="item">
					<img src="images/wine.jpg" />
					<p className="mt-3">Strength Training</p>
				</div> */}
			{/* </div> */}
		</div>
	</div>
	
</div>

<footer>
	<div className="footer_sec px-3 px-md-5 py-4">
		<div className="row">
			<div className="col-lg-3 col-sm-6">
				<h1 className="logo-text text-center mt-5"><img src="/images/login-logo.png" className="logo" alt="logo" /></h1>
				<div className="social_icons text-center mt-4">
					<Link to="/"><i className="fa fa-facebook"></i></Link>
					<Link to="/"><i className="fa fa-twitter"></i></Link>
					<Link to="/"><i className="fa fa-instagram"></i></Link>
					<Link to="/"><i className="fa fa-envelope-o"></i></Link>
				</div>
			</div>
			<div className="col-lg-3 col-sm-6">
				<p>GET STARTED</p>
				<ul className="list">
					<li><Link to="/">Sign In</Link></li>
					<li><Link to="/signUp">Sign Up</Link></li>
					<li><Link to="/">Learn More</Link></li>
					<li><Link to="/">Session Guidelines</Link></li>
				</ul>
			</div>
			<div className="col-lg-3 col-sm-6">
				<p>VIRDIO</p>
				<ul className="list">
					<li><Link to="/">About</Link></li>
					<li><Link to="/">News</Link></li>
					<li><Link to="/">Contact</Link></li>
					<li><Link to="/">Privacy</Link></li>
					<li><Link to="/">Terms of service</Link></li>
				</ul>
			</div>
			<div className="col-lg-3 col-sm-6 px-lg-0">
				<p>SUBSCRIBE TO OUR NEWSLETTER FOR UPDATES</p>
				<p className="foot_txt">By giving us your email you agree to our <Link to ="/">Terms of service</Link> and <Link to ="/">Terms of privacy</Link></p>
				<div className="input-group mb-3 mt-4">
				    <input type="text" className="form-control" placeholder="Email Address" name="" />
				    <div className="input-group-append">
				    	<span className="input-group-text"><Link to ="/"><i className="fa fa-angle-right"></i></Link></span>
				    </div>
			    </div>
			</div>
		</div>
	</div>
</footer>

	</div>	
    );
  }
}

export default Dashboard;
