import React, { Component } from "react";
import axios from "axios";
import $ from 'jquery';

//import $ from 'jquery';
//import DateTimeField from "react-bootstrap-datetimepicker";

class Dashboard extends Component {
  
  constructor(props) {
	super(props);
    
}
 
componentDidMount(){
	

  }

  

  render() {

    return (
	<div>
	<div className="outer-container">
	<div className="container-fluid px-3 px-md-5">
	
		<div className="slider-header pt-4">
			<div className="row">
				<div className="col-md-5">
					<h1 className="logo-text text-center text-md-left">Virdio</h1>
				</div>
				<div className="col-md-7">
					<div className="d-flex justify-content-md-end justify-content-center align-items-center flex-wrap">
						<p>Sign Up It's Free</p>
						<button className="btn btn-primary text-uppercase mr-3">Sign Up</button>
						<button className="btn btn-outline-secondary">Login</button>
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
			    <div className="carousel-item active">
				      <img src="images/banner1.jpg" alt="" />
				      <div className="carousel-caption">
				      	<div className="inner_text d-flex flex-wrap align-items-center ">
				      		<div className="upper_inner_text">
						        <h3>Next generation of virtual studio</h3>
						        <p className="mb-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when</p>
						    </div>
						    <div className="lower_inner_text">
						    	<div className="learn_more d-flex justify-content-between">
						    		<p className="mb-0">Learn more about hosting sessions on virdio</p>
						    		<div className="bordr"><a href="#"><i className="fa fa-angle-right"></i></a></div>
						    	</div>
						    </div>
				      </div>   
				    </div>
			    </div>
			    <div className="carousel-item">
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
			    </div>
			    <div className="carousel-item">
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
			    </div>
			  </div>
			</div>
		</div>
		
	</div>
	
	<div className="container-fluid px-3 px-md-5 slides_sec py-4">
		<div className="d-flex flex-wrap">
			<h2>Interest</h2>
			<div className="flex-grow-1 input-box">
				<div className="input-group mb-3">
			    	<input type="text" className="form-control" placeholder="Search for interest channels, hosts or keywords" name="" />
				    <div className="input-group-append">
				     	<span className="input-group-text"><i className="fa fa-search-minus"></i></span>
				    </div>
		    	</div>
				<div className="textt d-flex">
					<div className="sml">
					</div>
					<p>Advance</p>
				</div>
			</div>
		</div>
		<div className="small_img_part">
			<h3 className="my-3">FITNESS<sup className="ml-2">(24)</sup></h3>
			<div className="slides_inner_part">
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
				</div>
				<div className="item">
					<img src="images/wine.jpg" />
					<p className="mt-3">Strength Training</p>
				</div>
				<div className="item">
					<img src="images/wine.jpg" />
					<p className="mt-3">Strength Training</p>
				</div>
			</div>
		</div>
		<div className="small_img_part">
			<h3 className="my-3">WINE<sup className="ml-2">(24)</sup></h3>
			<div className="slides_inner_part">
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
				</div>
				<div className="item">
					<img src="images/wine.jpg" />
					<p className="mt-3">Strength Training</p>
				</div>
				<div className="item">
					<img src="images/wine.jpg" />
					<p className="mt-3">Strength Training</p>
				</div>
			</div>
		</div>
		<div className="small_img_part">
			<h3 className="my-3">COOKING<sup className="ml-2">(24)</sup></h3>
			<div className="slides_inner_part">
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
				</div>
				<div className="item">
					<img src="images/wine.jpg" />
					<p className="mt-3">Strength Training</p>
				</div>
				<div className="item">
					<img src="images/wine.jpg" />
					<p className="mt-3">Strength Training</p>
				</div>
			</div>
		</div>
	</div>
	
</div>

<footer>
	<div className="footer_sec px-3 px-md-5 py-4">
		<div className="row">
			<div className="col-lg-3 col-sm-6">
				<h1 className="logo-text text-center mt-5">Virdio</h1>
				<div className="social_icons text-center mt-4">
					<a href="#"><i className="fa fa-facebook"></i></a>
					<a href="#"><i className="fa fa-twitter"></i></a>
					<a href="#"><i className="fa fa-instagram"></i></a>
					<a href="#"><i className="fa fa-envelope-o"></i></a>
				</div>
			</div>
			<div className="col-lg-3 col-sm-6">
				<p>GET STARTED</p>
				<ul className="list">
					<li><a href="#">Sign In</a></li>
					<li><a href="#">Sign Up</a></li>
					<li><a href="#">Learn More</a></li>
					<li><a href="#">Session Guidelines</a></li>
				</ul>
			</div>
			<div className="col-lg-3 col-sm-6">
				<p>VIRDIO</p>
				<ul className="list">
					<li><a href="#">About</a></li>
					<li><a href="#">News</a></li>
					<li><a href="#">Contact</a></li>
					<li><a href="#">Privacy</a></li>
					<li><a href="#">Terms of service</a></li>
				</ul>
			</div>
			<div className="col-lg-3 col-sm-6 px-lg-0">
				<p>SUBSCRIBE TO OUR NEWSLETTER FOR UPDATES</p>
				<p className="foot_txt">By giving us your email you agree to our <a href="#">Terms of service</a> and <a href="#">Terms of privacy</a></p>
				<div className="input-group mb-3 mt-4">
				    <input type="text" className="form-control" placeholder="Email Address" name="" />
				    <div className="input-group-append">
				    	<span className="input-group-text"><a href="#"><i className="fa fa-angle-right"></i></a></span>
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
