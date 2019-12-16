import React, { Component } from "react";
import $ from 'jquery';
import { Link } from 'react-router';
import axios from "axios";
import {  browserHistory} from 'react-router'


class AdminDashboard extends Component {
  
  constructor(props) {
	super(props);
	this.state={
		startDate:new Date(),
		daysOfMonth:[],
    upcomingSession:[],
    InterestArray:[],
    interestName:'',
    groupName:'',
    attendees:'',
    virtualRoom:'',
    shoppingArray:[],
    productArray:['A','B'],
    EquipmentArray:[],
    production:false,
    hasShopping:false,
    hasEquipment:false,
    hasProductList:false,
    shoppingProductName:'',
    equipmentProductName:'',
    groupIndex:0,
   // interestArray:['weight Lifting','Cardio','Yoga','Squats','Rock Climbing'], groupIndex:0, groupArray:[],

	}
	
    
}
 
componentDidMount(){
  if(localStorage.getItem('userData')){
    
  }else{
    browserHistory.push("/login");

  }
//   var interestArray1=[{
//     groupName:'Fitness',
//   interestName:['weight Lifting','Cardio','Yoga','Squats','Rock Climbing'],
//   attendees:['A','B','C','D','E'],
//   virtualRoom:['A1','B1','C1','D1','E1'],
//   shoppingArray:[],
//   productArray:['A3','B3','C3','D3','E3'],
//   EquipmentArray:['A4','B4','C4','D4','E4'],
//   production:[true,false,true,false,false],
//   hasShopping:[false,false,true,false,false],
//   hasEquipment:[false,false,true,false,true],
//   hasProductList:[true,false,true,false,false],
//   interestArray:[]
//   },
//   {
//      groupName:'Cooking',
//   interestName:['weight Lifting2','Cardio2','Yoga2','Squats','Rock Climbing'] ,
//   attendees:['A','B','C','D','E'], 
//   virtualRoom:['A1','B1','C1','D1','E1'],
//   shoppingArray:[],
//   productArray:['A3','B3','C3','D3','E3'],
//   EquipmentArray:['A4','B4','C4','D4','E4'],
//   production:[true,false,true,false,false],
//   hasShopping:[false,false,true,false,false],
//   hasEquipment:[false,false,true,false,true],
//   hasProductList:[true,false,true,false,false],
//   interestArray:[]
  
  
//   }
// ]
  // this.setState({
  //   InterestArray:interestArray1
  // },()=>console.log(this.state.interestArray))
}
submitHost=(e)=>{
  $("#bigg_cont").attr({'style':'display:block'});
  
  }
  addInterest=(e)=>{
    this.setState({
      groupIndex:e.target.id
    },()=>{
     $("#interestDashboard").attr({'style':'display:block'});
    })
    
  }

  closeGroup=(e)=>{
      
      // this.setState({
      //   [e.target.id]:e.target.value
      // },()=>{
      //   console.log('this.state.interestName',this.state.interestName);
        
      // })
    if(!this.state.groupName)
    {
      $("#bigg_cont").attr({'style':'display:none'});
    }else{
     //--------------------------------------------------------
     axios.post('https://api.virdio.com/api/v1/user/createGroup ',  {group_name: this.state.groupName})
    .then(res => {
      console.log('----------------------->',res);
     if(res.data.responseMessage === "success"){
      let  arr ;
    arr={
    groupName:this.state.groupName,
    interestName:[],
    attendees:[],
    virtualRoom:[],
    shoppingArray:[],
    productArray:[],
    EquipmentArray:[],
    production:[],
    hasShopping:[],
    hasEquipment:[],
    hasProductList:[],
    interestArray:[]
    }
    let groupArray=[];
    groupArray=this.state.InterestArray
    groupArray.push(arr);
     this.setState({
          InterestArray:groupArray,
      },()=>{
        $("#bigg_cont").attr({'style':'display:none'});
      })
    }else{
     console.log('=============There Is an Error===================>'); 
    }
    }).catch(err =>{

    console.log('----------there is problem------------',err);

    });

     //--------------------------------------------------------------------- 
    // let  arr ;
    // arr={
    // groupName:this.state.groupName,
    // interestName:[],
    // attendees:[],
    // virtualRoom:[],
    // shoppingArray:[],
    // productArray:[],
    // EquipmentArray:[],
    // production:[],
    // hasShopping:[],
    // hasEquipment:[],
    // hasProductList:[],
    // interestArray:[]
    // }
    // let groupArray=[];
    // groupArray=this.state.InterestArray
    // groupArray.push(arr);
    //  this.setState({
    //       InterestArray:groupArray,
    //   },()=>{
    //     $("#bigg_cont").attr({'style':'display:none'});
    //   })
    } 
  }

  onCreateGroup = e =>{
    let  arr = [];
    arr.push({
    groupName:this.state.groupName,
    interestName:[],
    attendees:[],
    virtualRoom:[],
    shoppingArray:[],
    productArray:[],
    EquipmentArray:[],
    production:[],
    hasShopping:[],
    hasEquipment:[],
    hasProductList:[],
    interestArray:[]
    })
    let groupArray= this.state.groupArray
    groupArray.push(this.state.groupName)
    this.setState({
          interestArray:arr,
      })
  }  
  onInterestSave = e =>{
    let interest= { interestCode: 202,
    title: this.state.interestName,
    groupId: 1, 
    description: "sdfasd", 
    image: "ccc", 
    video: "vid", 
    haveShoppingList: this.state.hasShopping,
    haveEquipment:this.state.hasEquipment,
    haveProductList:this.state.hasProductList,
    attendeesAreCalled:this.state.attendees,
    virtualRoomIsCalled:this.state.virtualRoom,
    inProduction:"1" }
    console.log('>>>>>>>>>>>>>>>',interest); 
    axios.post('https://api.virdio.com/api/v1/user/addInterest',  interest)
    .then(res => {
      console.log('----------------------->',res);
     if(res.data.responseMessage === "success"){
     
    }else{
     console.log('=============There Is an Error===================>'); 
    }
    }).catch(err =>{

    console.log('----------there is problem------------',err);

    });
     let addInterest =  this.state.InterestArray
     if(!this.state.interestName===false && !this.state.attendees===false && !this.state.virtualRoom===false){
     addInterest[this.state.groupIndex].interestName.push(this.state.interestName);
     addInterest[this.state.groupIndex].attendees.push(this.state.attendees);
     addInterest[this.state.groupIndex].virtualRoom.push(this.state.virtualRoom);
     addInterest[this.state.groupIndex].shoppingArray.push(this.state.shoppingArray);
     addInterest[this.state.groupIndex].productArray.push(this.state.productArray);
     addInterest[this.state.groupIndex].EquipmentArray.push(this.state.EquipmentArray);
     addInterest[this.state.groupIndex].production.push(this.state.production);
     addInterest[this.state.groupIndex].hasShopping.push(this.state.hasShopping);
     addInterest[this.state.groupIndex].hasEquipment.push(this.state.hasEquipment);
     addInterest[this.state.groupIndex].hasProductList.push(this.state.hasProductList);
   //  addInterest[this.state.groupIndex].interestArray:this.state.interestArray
     this.setState({
      InterestArray:addInterest,
      shoppingArray:[],
      EquipmentArray:[],
      interestName:'',
      attendees:'',
      virtualRoom:'',
      hasShopping:false,
      hasEquipment:false,
      hasProductList:false,
      shoppingProductName:'',
      equipmentProductName:''
     },()=>
     {
      $("#interestDashboard").attr({'style':'display:none'});
    
      })
    }
  }
        
    addShoppingProduct=(e)=>{
      let ak=[];
      ak = this.state.shoppingArray;
      ak.push({shoppingProductName:this.state.shoppingProductName});
      this.setState({
        shoppingArray:ak
      },()=>console.log(this.state.shoppingArray))
    }
    removeShoppingProduct=(e)=>{
      let ak = [];
      ak = this.state.shoppingArray;
      ak.splice(e.target.id,1);
      this.setState({
        shoppingArray:ak
      },()=>console.log('remove shoppingArray item',this.state.shoppingArray))
    }
    addEquipmentProduct=(e)=>{
      let ak=[];
      ak = this.state.EquipmentArray;
      ak.push({equipmentProductName:this.state.equipmentProductName});
      this.setState({
        EquipmentArray:ak
      },()=>console.log(this.state.EquipmentArray))
    }
    removeEquipmentProduct=(e)=>{
      let ak = [];
      ak = this.state.EquipmentArray;
      ak.splice(e.target.id,1);
      this.setState({
        EquipmentArray:ak
      },()=>console.log('remove equipement item',this.state.EquipmentArray))
    }
    addProductList=(e)=>{
      let ak=[];
      ak = this.state.productArray;
      ak.push({productListName:this.state.productListName});
      this.setState({
        productArray:ak
      },()=>console.log(this.state.productArray))
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
                                <h3 className="activity-link px-4 position-relative">0</h3>
                                </div>
                                <div className="mt-5">
                                <h4 className="text_dark_gray px-4 font-weight-bold font-18">Participants</h4>
                                <h3 className="activity-link px-4 position-relative">0</h3>
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
              {this.state.InterestArray.length===0?
                <div className="modal-dialog w-50 first_dialog">
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
                            <button type="button" className="custom_btn11" id="create_grup" onClick={this.submitHost}>Create A Group</button>
                            </div>
                        </div>
                    </div>
                </div> 
                :
                <div className="modal-dialog w-95 second_dialog">
                    <div className="modal-content p-3">
                        <div className="modal-header pb-3 border_none">
                            <div><img src="/images/login-logo.png" alt="logo" className="logo" /></div>
                                <div><h4 className="modal-title white text-center">Manage Group(s)</h4></div>
                                <div><button type="button" className="close white closepopup" data-dismiss="modal">×</button></div>
                            </div>
                            <div className="modal-body px-0 pb-5 shadow-none round">
                                <div className="card-columns float_container">
                                {this.state.InterestArray.length>0 ? 
                                      (this.state.InterestArray.map((row,i)=>  
                                    <div className="card border_none bg-gray-shade radius-10" key ={i}>
                                     
                                        <div className="card-body position-relative">
                                            <img src="/images/edit_icon.png" alt="edit" className="edt_icon" />
                                            <h2 className="">{row.groupName}<sup className="ml-2 sup-white">( {row.interestName.length} )</sup></h2>
                                            {row.interestName.map((row1,l)=>
                                            <p key={l}>{row1}</p>
                                            )}
                                            {/* <p>Weight Lifting</p>
                                            <p>Weight Lifting</p>
                                            <p>Weight Lifting</p>
                                            <p>Weight Lifting</p>
                                            <p>Weight Lifting</p> */}
                                            <div className="add_intrst pt-3">
                                            <p className=" add_intrs text-uppercase mb-0 pb-0" ><Link to="/AdminDashboard" id={i} onClick={this.addInterest}><span className="mr-2 pr-1">+</span>add interest</Link></p>
                                            </div>
                                          </div>
                                      
                                       
                                    </div>
                                     )) :''}
                                    
                                      {/* <div className="card border_none bg-gray-shade radius-10" id="g1">    
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
                                    </div>                                  */}
                                </div>
                                <div className="text-center mt-4">
                                    <button type="button" className="custom_btn11" id="create_grup" onClick={this.submitHost}>Create A Group</button>
                                </div> 
                            </div>                            
                        </div>
                    </div>}
                    
                </div>
            </div>
            <div className="big_container h-100 w-100 position-fixed" id="bigg_cont">
                <div className="modal-inner_part h-100 w-100 d-flex justify-content-center align-items-center">
                    <div className="modal-content modl_bg_drk1 small_width">
                        <div className="modal-body px-4 pt-5 pb-4"> 
                            <div className="form-group mb-2 mt-3">
                              <label className="label">Enter Group Name<span className="inp_cover-border"></span></label>
                                <input type="text" className="input-field" id="groupName" value={this.state.groupName} onChange={e=>this.setState({[e.target.id]:e.target.value})} placeholder="Group Name" />
                                
                            </div>
                                <div className="text-center mb-3">
                                    <button type="button" className="custom_btn"  onClick={this.closeGroup}>save</button>
                                </div>   
                            </div>
                        </div>
                    </div>
                </div>
            <div className="container-fluid1 px-4 py-5" id="interestDashboard">
			        <div className="bg-gray-shade radius-10 p-4">
                    <div className="outer-container pb-4">
                    <div className="row">
                    <div className="col-md-4">
                        <p className="gray_text mb-1">Name of Interest</p>
                        <div className="form-group mb-2 mt-3">
                          <label className="label">Name of Interest<span className="inp_cover-border bg-gray-shade"></span></label>
                            <input type="text" className="input-field" id="interestName" value={this.state.interestName} onChange={(e)=>this.setState({[e.target.id]:e.target.value})} placeholder="Group Name" />              
                        </div>
                    </div>
                    <div className="col-md-4">
                        <p className="gray_text mb-1">Attendees are called</p>
                        <div className="form-group mb-2 mt-3">
                          <label className="label">Attendees are called<span className="inp_cover-border bg-gray-shade"></span></label>
                            <input type="text" className="input-field" id="attendees" value={this.state.attendees} onChange={(e)=>this.setState({[e.target.id]:e.target.value})}  placeholder="Group Name" />              
                        </div>
                    </div>
                    <div className="col-md-4">
                        <p className="gray_text mb-1">Virtual Room is Called</p>
                        <div className="form-group mb-2 mt-3">
                          <label className="label">Virtual Room is Called<span className="inp_cover-border bg-gray-shade"></span></label>
                            <input type="text" className="input-field" id="virtualRoom" value={this.state.virtualRoom} onChange={(e)=>this.setState({[e.target.id]:e.target.value})}  placeholder="Group Name" />              
                        </div>
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
                                <input type="checkbox"  id="hasShopping" checked={this.state.hasShopping} onChange = {(e)=>{this.setState({[e.target.id]:!this.state.hasShopping})}} /><span className="slider round"></span></label>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-4">
                            <div className="mr-3">
                              <p className="text-white ml-7 mb-0">Has Shopping List?</p>
                            </div>
                            <div className="form-group1 input-txt position-relative text-right">
                            <label className="switch mx-0">
                                <input type="checkbox"  id="hasShopping" checked={this.state.hasShopping} onChange = {(e)=>{this.setState({[e.target.id]:!this.state.hasShopping})}}/><span className="slider round"></span></label>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-4">
                            <div className="mr-3">
                            <p className="text-white ml-7 mb-0">Has Equipment List?</p>
                            </div>
                            <div className="form-group1 input-txt position-relative text-right">
                            <label className="switch mx-0">
                                <input type="checkbox" id="hasEquipment" checked={this.state.hasEquipment} onChange = {(e) => {this.setState({[e.target.id]:!this.state.hasEquipment})}} /><span className="slider round"></span></label>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-4">
                            <div className="mr-3">
                            <p className="text-white ml-7 mb-0">Has Product List?</p>
                            </div>
                            <div className="form-group1 input-txt position-relative text-right">
                            <label className="switch mx-0">
                                <input type="checkbox" id="hasProductList" checked={this.state.hasProductList} onChange ={(e) =>{this.setState({[e.target.id]:!this.state.hasProductList})}} /><span className="slider round"></span>
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
                                <input type="file" accept="video/*" className="custom-file-input" id="mycustomFile1" name="filename" />
                                <label className="custom-file-label px-1" for="mycustomFile1">
                                    <img src="/images/video.png" className="browse_image1" alt='#' />
                                    <p className="purple_text browse_text"><span className="white">VIDEO</span><br />Browse File</p>
                                    </label>
                                </div>
                            </div>
                            <div className="one flex-fill position-relative">
                                <div className="custom-file mb-3">
                                <input type="file" accept="image/*" className="custom-file-input" id="mycustomFile2" name="filename1" />
                                <label className="custom-file-label px-1" for="mycustomFile2">
                                    <img src="/images/browse-img.png" className="browse_image1" alt='#'/>
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
          {this.state.hasShopping?    
          <div className="bg-gray-shade radius-10 p-4 mt-4">
            <div className="outer-container px-4">
             <div className="row align-items-center justify-content-between">
                <h4 className="text_dark_gray1 font-weight-bold font-18 pr-3">Shopping List</h4>
                <div className="flex-grow-1 line_custom-purple"></div>
                <div className="pl-3"><img src="/images/shopping-icon1.png" alt="" /></div>
             </div>
            
             <div className="row">
             {this.state.shoppingArray.map((row,i)=>
               <div className="col-md-4" key ={i}>
                <div className="px-2 py-3">
                  <p className="gray_text mb-1">Item Name</p>
                  <div className="d-flex align-items-center justify-content-between">
                    <h4 className="white mb-0 font-book font-18 pr-3">{row.shoppingProductName}</h4>
                    <div className="flex-grow-1 line_custom-purple"></div>
                    <Link to="/AdminDashboard" className="bg-circle text-white" id ={i} onClick={this.removeShoppingProduct}><i className="fa fa-minus" aria-hidden="true"></i></Link>
                 </div>
                </div>
              </div>
                )}
             
             </div>
           </div>
           <div className="outer-container pl-4">
             <div className="row align-items-center input-fld-outer mt-2">
              <div className="form-group mb-2 mt-4">
                <label className="label">Item Name<span className="inp_cover-border bg-gray-shade"></span></label>
                <input type="text" id="shoppingProductName" value={this.state.shoppingProductName} onChange={(e)=>this.setState({[e.target.id]:e.target.value})} className="input-field mb-0" />
                <Link to="#" className="bg-circle text-white position-absolute minus"><i className="fa fa-minus" aria-hidden="true"></i></Link>
                <span className="span1">text</span>
              </div>
              <div className="mt-4 mb-2">
                <Link to="/AdminDashboard" className="bg-circle text-white" onClick={this.addShoppingProduct}><i className="fa fa-plus" aria-hidden="true"></i></Link>
              </div>
            </div>
          </div>      
        </div>
        :''}

        {this.state.hasEquipment?
        <div className="bg-gray-shade radius-10 p-4 mt-4">
            <div className="outer-container px-4">
             <div className="row align-items-center justify-content-between">
                <h4 className="text_dark_gray1 font-weight-bold font-18 pr-3">Equipment List</h4>
                <div className="flex-grow-1 line_custom-purple"></div>
                <div className="pl-3"><img src="/images/equipment-list.png" alt="" /></div>
             </div>
           
             <div className="row" >
             {this.state.EquipmentArray.map((row,i)=>
              <div className="col-md-4" key={i}>
                <div className="px-2 py-3">
                  <p className="gray_text mb-1">Equipment Name</p>
                  <div className="d-flex align-items-center justify-content-between">
                  <h4 className="white mb-0 font-book font-18 pr-3">{row.equipmentProductName}</h4>
                    <div className="flex-grow-1 line_custom-purple"></div>
                    <Link to="/AdminDashboard" className="bg-circle text-white" id={i} onClick={this.removeEquipmentProduct} ><i className="fa fa-minus" aria-hidden="true"></i></Link>
                 </div>
                </div>
              </div>
               )}

             </div>
           </div>
           <div className="outer-container pl-4">
             <div className="row align-items-center input-fld-outer mt-2">
              <div className="form-group mb-2 mt-4">
                <label className="label">Equipment Name<span className="inp_cover-border bg-gray-shade"></span></label>
                <input type="text" id="equipmentProductName" value={this.state.equipmentProductName} onChange={(e)=>this.setState({[e.target.id]:e.target.value})} className="input-field mb-0" />
                <Link to="/AdminDashboard" className="bg-circle text-white position-absolute minus"><i className="fa fa-minus" aria-hidden="true"></i></Link>
                <span className="span1">text</span>
              </div>
              <div className="mt-4 mb-2"><Link to="/AdminDashboard" className="bg-circle text-white" onClick={this.addEquipmentProduct}><i className="fa fa-plus" aria-hidden="true"></i></Link></div>
            </div>
          </div>      
        </div>
        :''}
        {this.state.hasProductList?
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
                      <Link to="/AdminDashboard" className="bg-circle text-white"><i className="fa fa-minus" aria-hidden="true"></i></Link>
                   </div>
                  </div>
                  <div className="px-3 py-3 w-300">
                    <p className="gray_text pl-4 ml-2 mb-1">Field#3 - varchar</p>
                    <div className="d-flex pl-4 ml-2 align-items-center justify-content-between">
                      <h4 className="white mb-0 font-book font-18 pr-3">Waist Belt</h4>
                      <div className="flex-grow-1 line_custom-purple"></div>
                      <Link to="/AdminDashboard" className="bg-circle text-white"><i className="fa fa-minus" aria-hidden="true"></i></Link>
                   </div>
                  </div>
                  <div className="px-3 py-3 w-300">
                    <p className="gray_text pl-4 ml-2 mb-1">Field#3 - varchar</p>
                    <div className="d-flex pl-4 ml-2 align-items-center justify-content-between">
                      <h4 className="white mb-0 font-book font-18 pr-3">Waist Belt</h4>
                      <div className="flex-grow-1 line_custom-purple"></div>
                      <Link to="/AdminDashboard" className="bg-circle text-white"><i className="fa fa-minus" aria-hidden="true"></i></Link>
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
                    <Link to="/AdminDashboard" className="bg-circle text-white"><i className="fa fa-minus" aria-hidden="true"></i></Link>
                 </div>
                </div>
                <div className="px-3 py-3 w-300">
                    <div className="form-group w-100 mb-2 mt-4">
                      <label className="label">Equipment Name<span className="inp_cover-border bg-gray-shade"></span></label>
                      <input type="text" className="input-field mb-0" />
                      <Link to="/AdminDashboard" className="bg-circle text-white position-absolute minus"><i className="fa fa-minus" aria-hidden="true"></i></Link>
                      <span className="span1">text</span>
                    </div>
                  </div>
                  <div className="px-3 py-3 w-300">
                    <div className="form-group w-100 mb-2 mt-4">
                      <label className="label">Equipment Name<span className="inp_cover-border bg-gray-shade"></span></label>
                      <input type="text" className="input-field mb-0" />
                      <Link to="/AdminDashboard" className="bg-circle text-white position-absolute minus"><i className="fa fa-minus" aria-hidden="true"></i></Link>
                      <span className="span1">text</span>
                    </div>
                  </div>
                  <div className="px-3 py-3 w-300">
                      <p className="gray_text pl-2 mb-1">Field#3 - varchar</p>
                      <div className="d-flex pl-2 align-items-center justify-content-between">
                        <h4 className="white mb-0 font-book font-18 pr-3">Waist Belt</h4>
                        <div className="flex-grow-1 line_custom-purple"></div>
                        <Link to="/AdminDashboard" className="bg-circle text-white"><i className="fa fa-minus" aria-hidden="true"></i></Link>
                     </div>
                  </div>
                  <div className="px-3 py-3 w-300">
                    <p className="gray_text pl-2 mb-1">Field#3 - varchar</p>
                    <div className="d-flex pl-2 align-items-center justify-content-between">
                      <h4 className="white mb-0 font-book font-18 pr-3">Waist Belt</h4>
                      <div className="flex-grow-1 line_custom-purple"></div>
                      <Link to="/AdminDashboard" className="bg-circle text-white"><i className="fa fa-minus" aria-hidden="true"></i></Link>
                   </div>
                  </div>
                  <div className="px-3 py-3 w-300">
                    <div className="form-group w-100 mb-2 mt-4">
                      <label className="label">Equipment Name<span className="inp_cover-border bg-gray-shade"></span></label>
                      <input type="text" className="input-field mb-0" />
                      <Link to="/AdminDashboard" className="bg-circle text-white position-absolute minus"><i className="fa fa-minus" aria-hidden="true"></i></Link>
                      <span className="span1">text</span>
                    </div>
                  </div>
                  <div className="pr-3 py-3 w-300">
                    <div className="form-group w-100 mb-2 mt-4">
                      <label className="label">Equipment Name<span className="inp_cover-border bg-gray-shade"></span></label>
                      <input type="text" className="input-field mb-0" />
                      <Link to="/AdminDashboard" className="bg-circle text-white position-absolute minus"><i className="fa fa-minus" aria-hidden="true"></i></Link>
                      <span className="span1">text</span>
                    </div>
                  </div>
                  <div className="px-3 py-3 w-300">
                    <div className="form-group w-100 mb-2 mt-4">
                      <label className="label">Equipment Name<span className="inp_cover-border bg-gray-shade"></span></label>
                      <input type="text" className="input-field mb-0" />
                      <Link to="/AdminDashboard" className="bg-circle text-white position-absolute minus"><i className="fa fa-minus" aria-hidden="true"></i></Link>
                      <span className="span1">text</span>
                    </div>
                  </div>
                  <div className="px-3 py-3 w-300">
                    <div className="form-group w-100 mb-2 mt-4">
                      <label className="label">Equipment Name<span className="inp_cover-border bg-gray-shade"></span></label>
                      <input type="text" className="input-field mb-0" />
                      <Link to="/AdminDashboard" className="bg-circle text-white position-absolute minus"><i className="fa fa-minus" aria-hidden="true"></i></Link>
                      <span className="span1">text</span>
                    </div>
                  </div>
                  <div className="pr-3 py-3 w-300">
                    <div className="form-group w-100 mb-2 mt-4">
                      <label className="label">Equipment Name<span className="inp_cover-border bg-gray-shade"></span></label>
                      <input type="text" className="input-field mb-0" />
                      <Link to="/AdminDashboard" className="bg-circle text-white position-absolute minus"><i className="fa fa-minus" aria-hidden="true"></i></Link>
                      <span className="span1">text</span>
                    </div>
                  </div>
                  <div className="px-3 py-3 w-300">
                    <div className="form-group w-100 mb-2 mt-4">
                      <label className="label">Equipment Name<span className="inp_cover-border bg-gray-shade"></span></label>
                      <input type="text" className="input-field mb-0" />
                      <Link to="/AdminDashboard" className="bg-circle text-white position-absolute minus"><i className="fa fa-minus" aria-hidden="true"></i></Link>
                      <span className="span1">text</span>
                    </div>
                  </div>
                  <div className="px-3 py-3 w-300">
                    <div className="form-group w-100 mb-2 mt-4">
                      <label className="label">Equipment Name<span className="inp_cover-border bg-gray-shade"></span></label>
                      <input type="text" className="input-field mb-0" />
                      <Link to="/AdminDashboard" className="bg-circle text-white position-absolute minus"><i className="fa fa-minus" aria-hidden="true"></i></Link>
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
                        <img src="/images/video2.png" className="browse_image1" alt='#'/>
                        <p className="purple_text browse_text"><span className="white">VIDEO</span><br />Browse File</p>
                        <Link to="/AdminDashboard" className="bg-circle position-absolute"><i className="fa fa-minus" id="0" aria-hidden="true"></i></Link>
                    </label>
                  </div>
                </div>
                <div className="one flex-fill position-relative">
                  <div className="custom-file mb-3">
                    <input type="file" className="custom-file-input" id="mycustomFile4" name="filename1" />
                    <label className="custom-file-label px-1" for="mycustomFile4">
                        <img src="/images/image1.png" className="browse_image1" alt='#' />
                        <p className="purple_text browse_text"><span className="white">IMAGE</span><br />Browse File</p>
                        <Link to="/AdminDashboard" className="bg-circle position-absolute"><i className="fa fa-minus" id="0" aria-hidden="true"></i></Link>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>      
        </div>
        :''}
        <div className="text-center">
          <button type="button" className="done mt-5" onClick={this.onInterestSave}>Done</button>
        </div>
      </div>
            </div>
        </div>
    )
}
}    

export default AdminDashboard;