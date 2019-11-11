import React, { Component } from "react";
class HostSessionCreation extends Component {
  
  constructor(props) {
	super(props);
    this.state = {
        accountAddress:false,
        sessionCharge:false,
        address:'',
        phoneNumber:'',
        ss:'',
        description:'',
        streetAddress1 :'',
        streetAddress2 :'',
        accountName:'',
        accountNumber:'',
        city:'',
        routingNumber:'',
        stateCode:'',
        zipCode:'',
        accountType:'',
        shoppingStatus:false,
        equipmentStatus:false,
        productStatus:false,
        exampleFormControlSelect2:'account Type',
        hostList:[{userId:'100',image :'images/pic.jpg', userName:'Nathakljsdfkljksldfn Taylor',type:false},{userId:'101',image :'images/pic.jpg',userName:'Nathan Taylor',type:false},{userId:'100',image :'images/pic.jpg', userName:'Nathan Taylor',type:false},{userId:'100',image :'images/pic.jpg', userName:'Nathan Taylor',type:false}],
        hostList1:[],
        InterestHost:[{userId:'100',image :'images/pic.jpg', userName:'Nathakljsdfkljksldfn Taylor',type:false},{userId:'101',image :'images/pic.jpg',userName:'Nathan Taylor',type:false},{userId:'100',image :'images/pic.jpg', userName:'Nathan Taylor',type:false},{userId:'100',image :'images/pic.jpg', userName:'Nathan Taylor',type:false}],
        InterestHost1:[],
        selectedFile: '',
        addEquipmentList:[],
        equipmentCount:0,
        addShoppingList:[],
        selectedShoppingList:'',
        ShoppingCount:0
            
    }

}
 
componentDidMount(){
	

  }
 addEquipment = e =>{
   let arr = this.state.addEquipmentList;
   arr.push(this.state.selectedFile);
   let count=this.state.equipmentCount;
   console.log(count);
   count = count+1;
   console.log('*****',count);
   this.setState({
       addEquipmentList:arr,
       equipmentCount:count,
       selectedFile:''
   },()=>console.log(this.state.equipmentCount,'**********************',this.state.addEquipmentList))

 } 
 removeEquipment = e =>{
     let arr = this.state.addEquipmentList;
     let count=this.state.equipmentCount;
     console.log(count);
     count = count-1;
     console.log('*****',count);
     arr.splice(e.target.id,1);
     this.setState({
        addEquipmentList:arr,
        equipmentCount:count,
        },()=>console.log('**********************',this.state.addEquipmentList))
     
 }

 addShoppingListMethod = (e) => {
    let arr = this.state.addShoppingList;
    arr.push(this.state.selectedShoppingList);
    let count=this.state.ShoppingCount;
    console.log(count);
    count = count+1;
    console.log('*****',count);
    this.setState({
        addShoppingList:arr,
        ShoppingCount:count,
        selectedShoppingList:''
    })
   
 }
 removeShoppingList = e =>{
    let arr = this.state.addShoppingList;
    let count=this.state.ShoppingCount;
    console.log(count);
    count = count-1;
    console.log('*****',count);
    arr.splice(e.target.id,1);
    this.setState({
       addShoppingList:arr,
       ShoppingCount:count,
       })
    
}

  sessionInfo = e =>{
    this.setState({
        [e.target.id] : e.target.value
    },()=>console.log('==========>',this.state))
  }

onChangeHandler=event=>{
  console.log(event.target.files[0]);
  const data = new FormData() 
    data.append('file', event.target.files[0]);
    console.log('----------------------',data);
}

selectHost = (e) => {
    let arrayCheck = [];
    let hostContainer = this.state.hostList;
    hostContainer[e.target.id].type = !hostContainer[e.target.id].type;
    if(hostContainer[e.target.id].type) {
    arrayCheck = this.state.hostList1;
    arrayCheck.push(hostContainer[e.target.id].userId);    
      } 
    else {
      
       if(this.state.hostList1.length>0){
        for(let i=0;i<this.state.hostList1.length;i++){
           if(this.state.hostList1[i]=== hostContainer[e.target.id].userId){
            arrayCheck = this.state.hostList1;
            arrayCheck.splice(i,1);
            this.setState({
              hostList1 : arrayCheck 
            },()=> console.log('check or uncheck equipmentList', this.state.hostList1))
          }
        }
      }
    }
    this.setState({
      hostList : hostContainer,
      hostList1:arrayCheck
      },()=>
      { console.log(this.state.hostList1,'setEuipmentContainer==>',this.state.hostList);
        });
   
  }
  
  selectChannelInterest = (e) => {
    let arrayCheck = [];
    let channelContainer = this.state.InterestHost;
    channelContainer[e.target.id].type = !channelContainer[e.target.id].type;
    if(channelContainer[e.target.id].type) {
    arrayCheck = this.state.InterestHost1;
    arrayCheck.push(channelContainer[e.target.id].userId);    
      } 
    else {
      
       if(this.state.InterestHost1.length>0){
        for(let i=0;i<this.state.InterestHost1.length;i++){
           if(this.state.InterestHost1[i]=== channelContainer[e.target.id].userId){
            arrayCheck = this.state.InterestHost1;
            arrayCheck.splice(i,1);
            this.setState({
              InterestHost1 : arrayCheck 
            },()=> console.log('check or uncheck equipmentList', this.state.hostList1))
          }
        }
      }
    }
    this.setState({
      InterestHost : channelContainer,
      InterestHost1:arrayCheck
      },()=>
      { console.log(this.state.InterestHost1,'setEuipmentContainer==>',this.state.InterestHost);
        });
   
  }
  submitForm = (event) => {
  console.log(this.state.hostList1,'---------------------',this.state.hostList);
  event.preventDefault();
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
                                <h3>Welcome Arjun!</h3>
                                <p>No session this week</p>
                                {/* <p>Next Session, Wednesday, 24 July 2019</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 ">
                        <div className="d-flex justify-content-between ">
                            <div className="header-info-right">
                                <p>Average Attendance</p>
                                <h3>0%</h3></div><span className="border-right gray-border"></span>
                            <div className="header-info-right">
                                <p>Total Views</p>
                                <h3>0</h3></div><span className="border-right gray-border"></span>
                            <div className="header-info-right">
                                <p>Total Revenue</p>
                                <h3>$0</h3></div><span className="border-right gray-border"></span>
                                  <div className="message-notification"><img src="images/message.png" />
                              <span className="message-count">0</span></div>
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
                                        <input type="checkbox"
                                        id = "accountAddress"
                                        checked={this.state.accountAddress}
                                        onChange={(e)=>{this.setState({[e.target.id]:!this.state.accountAddress},()=>console.log(this.state.accountAddress))}}
                                        />
                                        <span className="slider round"></span>
                                    </label>
                                    <span>Use account address?</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="form-group input-txt">
                                    <label className="switch">
                                        <input type="checkbox" 
                                        id = "sessionCharge"
                                        checked={this.state.sessionCharge}
                                        onChange={(e)=>{this.setState({[e.target.id]:!this.state.sessionCharge},()=>console.log(this.state.sessionCharge))}}
                                        />
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
                                            <input type="text" 
                                            id ="address"
                                            value = {this.state.address}
                                            onChange={(e)=>this.setState({[e.target.id]:e.target.value},()=>console.log(this.state.address))}
                                            className="input-field" />
                                        </div>                                        
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="form-group"><span className="cover-border"></span>
                                            <label className="label">Phone</label>
                                            <input type="text" 
                                            id ="phoneNumber"
                                            value = {this.state.phoneNumber}
                                            onChange={(e)=>this.setState({[e.target.id]:e.target.value},()=>console.log(this.state.phoneNumber))}
                                            className="input-field" placeholder="" />
                                        </div>                                   
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="form-group"><span className="cover-border"></span>
                                            <label className="label">SS#</label>
                                            <input type="text" 
                                            id ="ss"
                                            value = {this.state.ss}
                                            onChange={(e)=>this.setState({[e.target.id]:e.target.value},()=>console.log(this.state.ss))}
                                            className="input-field" placeholder="" />
                                        </div>   
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="form-group"><span className="cover-border"></span>
                                            <label className="label">Description</label>
                                            <textarea type="text" 
                                            id ="description"
                                            value = {this.state.description}
                                            onChange={(e)=>this.setState({[e.target.id]:e.target.value},()=>console.log(this.state.description))}
                                            className="input-field"></textarea>
                                        </div>                                       
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="form-group"><span className="cover-border"></span>
                                            <label className="label">Street Address 1</label>
                                            <input type="text" 
                                            id ="streetAddress1"
                                            value = {this.state.streetAddress1}
                                            onChange={(e)=>this.setState({[e.target.id]:e.target.value},()=>console.log(this.state.streetAddress1))}
                                            className="input-field" placeholder="" />
                                        </div>
                                        <div className="form-group"><span className="cover-border"></span>
                                            <label className="label">Street Address 2</label>
                                            <input type="text" 
                                            id ="streetAddress2"
                                            value = {this.state.streetAddress2}
                                            onChange={(e)=>this.setState({[e.target.id]:e.target.value},()=>console.log(this.state.streetAddress2))}
                                            className="input-field" placeholder="" />
                                        </div>                                     
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                         <div className="form-group"><span className="cover-border"></span>
                                            <label className="label">Account Name</label>
                                            <input type="text" 
                                            id ="accountName"
                                            value = {this.state.accountName}
                                            onChange={(e)=>this.setState({[e.target.id]:e.target.value},()=>console.log(this.state.accountName))}
                                            className="input-field" placeholder="" />
                                        </div>  
                                        <div className="form-group"><span className="cover-border"></span>
                                            <label className="label">Account Number</label>
                                            <input type="text" 
                                            id ="accountNumber"
                                            value = {this.state.accountNumber}
                                            onChange={(e)=>this.setState({[e.target.id]:e.target.value},()=>console.log(this.state.accountNumber))}
                                            className="input-field" placeholder="" />
                                        </div>   
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="form-group"><span className="cover-border"></span>
                                            <label className="label">Description</label>
                                            <div className="custom-file mb-3">
                                              <input type="file" className="custom-file-input" id="customFile" name="file" onChange = {this.onChangeHandler} />
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
                                            <input type="text" 
                                            id ="city"
                                            value = {this.state.city}
                                            onChange={(e)=>this.setState({[e.target.id]:e.target.value},()=>console.log(this.state.city))}
                                            className="input-field" placeholder="" />
                                        </div>
                                        <div className="row">
                                            <div className="col-md-5">
                                                <div className="form-group"><span className="cover-border"></span>
                                                    <label className="label">State Code</label>
                                                    <input type="text" 
                                                    id ="stateCode"
                                                    value = {this.state.stateCode}
                                                    onChange={(e)=>this.setState({[e.target.id]:e.target.value},()=>console.log(this.state.stateCode))}
                                                    className="input-field" placeholder="" />
                                                </div>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="form-group"><span className="cover-border"></span>
                                                    <label className="label">Zip Code</label>
                                                    <input type="text"
                                                    id ="zipCode"
                                                    value = {this.state.zipCode}
                                                    onChange={(e)=>this.setState({[e.target.id]:e.target.value},()=>console.log(this.state.zipCode))}
                                                    className="input-field" placeholder="" />
                                                </div>
                                            </div>                                      
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                         <div className="form-group"><span className="cover-border"></span>
                                            <label className="label">Routing Number</label>
                                            <input type="text" 
                                             id ="routingNumber"
                                             value = {this.state.routingNumber}
                                             onChange={(e)=>this.setState({[e.target.id]:e.target.value},()=>console.log(this.state.routingNumber))}
                                            className="input-field" placeholder="" />
                                        </div>  
                                        <div className="form-group">
                                            <span className="cover-border"></span>
                                            <label className="label">Account Type</label>
                                            <select className="input-field" 
                                            id="exampleFormControlSelect2"
                                            value = {this.state.exampleFormControlSelect2}
                                            onChange = {this.sessionInfo}
                                            >
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
                                                <input type="checkbox" 
                                                id='shoppingStatus'
                                                value = {this.state.shoppingStatus}
                                                onChange={(e)=>{this.setState({[e.target.id]:!this.state.shoppingStatus},()=>console.log(this.state.shoppingStatus))}}
                                                />
                                                <span className="slider round"></span>
                                            </label>
                                            <span>Has Shopping List?</span>
                                        </div>
                                        {this.state.shoppingStatus?
                                        <div className="add_text">
                                            <a href="#" className="bg-circle mr-4" data-toggle="modal" data-target="#shopping_lst_modal"><i className="fa fa-plus" aria-hidden="true"></i></a>
                                            <span className="gray-text">{this.state.ShoppingCount} Items Added</span>
                                        </div> 
                                        :''
                                        }                                        
                                    </div>
                                    <div className="col-lg-4 col-sm-6 mt-4 mt-sm-3">
                                        <div className="form-group input-txt">
                                            <label className="switch">
                                                <input type="checkbox" 
                                                id='equipmentStatus'
                                                value = {this.state.equipmentStatus}
                                                onChange={(e)=>{this.setState({[e.target.id]:!this.state.equipmentStatus},()=>console.log(this.state.equipmentStatus))}}
                                                />
                                                <span className="slider round"></span>
                                            </label>
                                            <span>Has Equipment List?</span>
                                        </div>
                                        {this.state.equipmentStatus ?
                                        <div className="add_text">
                                            <a href="#" className="bg-circle mr-4" data-toggle="modal" data-target="#equipment_lst_modal"><i className="fa fa-plus" aria-hidden="true"></i></a>
                                            <span className="gray-text">{this.state.equipmentCount} Equipments Added</span>
                                        </div>    
                                        :''
                                        }
                                    </div>
                                    <div className="col-lg-4 col-sm-6 mt-4 mt-sm-3">
                                         <div className="form-group input-txt">
                                            <label className="switch">
                                                <input type="checkbox" 
                                                id='productStatus'
                                                value = {this.state.productStatus}
                                                onChange={(e)=>{this.setState({[e.target.id]:!this.state.productStatus},()=>console.log(this.state.productStatus))}}
                                                />
                                                <span className="slider round"></span>
                                            </label>
                                            <span>Has Product List?</span>
                                        </div>
                                        {this.state.productStatus?
                                        <div className="add_text">
                                            <a href="#" className="bg-circle mr-4"><i className="fa fa-plus" aria-hidden="true"></i></a>
                                            <span className="gray-text">0 Product Added</span>
                                        </div>
                                        :''
                                        }      
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
                        {this.state.hostList.map((row,i) => (
                            <div className="col-lg-4 col-md-6 pl-md-0" key = {i}>
                                <label className="custom-control custom-checkbox lebelheight d-flex">
                                    <input type="checkbox" 
                                    id={i}
                                    checked = {row.type}
                                    onChange= {this.selectHost}
                                    className="form-radio" />
                                    <img src={row.image} className="ml-2 mr-3" alt="user-icon" />
                                    <div>
                                        <p className="checktxt_name pb-1">{row.userName}</p>
                                        <p className="checktxt mb-0">Next session on 22 JUL, 3:45 PM</p>
                                        <p className="checktxt">Past Revenue $34,000</p>
                                    </div>
                                </label>
                                {/* <label className="custom-control custom-checkbox lebelheight d-flex">
                                    <input type="checkbox" className="form-radio" />
                                    <img src="images/pic.jpg" className="ml-2 mr-3" alt="user-icon" />
                                    <div>
                                        <p className="checktxt_name pb-1">Nathan Taylor</p>
                                        <p className="checktxt mb-0">Next session on 22 JUL, 3:45 PM</p>
                                        <p className="checktxt">Past Revenue $45,000</p>
                                    </div>
                                </label> */}
                            </div>
                        ))}
                            {/* <div className="col-lg-4 col-md-6 pl-md-0">
                                <label className="custom-control custom-checkbox lebelheight d-flex">
                                    <input type="checkbox" className="form-radio" />
                                    <img src="images/pic.jpg" className="ml-2 mr-3" alt="user-icon" />
                                    <div>
                                        <p className="checktxt_name pb-1">Nathan Taylor</p>
                                        <p className="checktxt mb-0">Next session on 22 JUL, 3:45 PM</p>
                                        <p className="checktxt">Past Revenue $34,000</p>
                                    </div>
                                </label>
                            </div> */}
                            {/* <div className="col-lg-4 col-md-6 pl-md-0">
                                <label className="custom-control custom-checkbox lebelheight d-flex">
                                    <input type="checkbox" className="form-radio" />
                                    <img src="images/pic.jpg" className="ml-2 mr-3" alt="user-icon" />
                                    <div>
                                        <p className="checktxt_name pb-1">Nathan Taylor</p>
                                        <p className="checktxt mb-0">Next session on 22 JUL, 3:45 PM</p>
                                        <p className="checktxt">Past Revenue $12.345</p>
                                    </div>
                                </label>
                            </div> */}
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
                           {this.state.InterestHost.map((row,i) => ( 
                            <div className="col-lg-4 col-md-6 pl-md-0" key = {i}>
                                <label className="custom-control custom-checkbox lebelheight d-flex">
                                    <input type="checkbox"
                                    id={i}
                                    checked = {row.type}
                                    onChange= {this.selectChannelInterest}
                                    className="form-radio" />
                                    <img src={row.image} className="ml-2 mr-3" alt="user-icon" />
                                    <div>
                                        <p className="checktxt_name pb-1">{row.userName}</p>
                                        <p className="checktxt mb-0">Next session on 22 JUL, 3:45 PM</p>
                                        <p className="checktxt">Past Revenue $34,000</p>
                                    </div>
                                </label>
                            </div>
                            ))}
                            {/* <div className="col-lg-4 col-md-6 pl-md-0">
                                <label className="custom-control custom-checkbox lebelheight d-flex">
                                    <input type="checkbox" className="form-radio" />
                                    <img src="images/pic.jpg" className="ml-2 mr-3" alt="user-icon" />
                                    <div>
                                        <p className="checktxt_name pb-1">Nathan Taylor</p>
                                        <p className="checktxt mb-0">Next session on 22 JUL, 3:45 PM</p>
                                        <p className="checktxt">Past Revenue $45,000</p>
                                    </div>
                                </label>
                            </div> */}
                            {/* <div className="col-lg-4 col-md-6 pl-md-0">
                                <label className="custom-control custom-checkbox lebelheight d-flex">
                                    <input type="checkbox" className="form-radio" />
                                    <img src="images/pic.jpg" className="ml-2 mr-3" alt="user-icon" />
                                    <div>
                                        <p className="checktxt_name pb-1">Nathan Taylor</p>
                                        <p className="checktxt mb-0">Next session on 22 JUL, 3:45 PM</p>
                                        <p className="checktxt">Past Revenue $12.345</p>
                                    </div>
                                </label>
                            </div> */}
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
                <button type="button" className="done mb-5" onClick={this.submitForm} >Done</button>
            </div>
            </div>
        </div>
    </div>

    <div className="modal pr-0 list-modal" id="shopping_lst_modal">
        {/* >2 Start*/}
       
        <div className={(this.state.ShoppingCount<3?"modal-dialog small_width":"modal-dialog large_width")}>
            <div className="modal-content modl_bg_color">
                <div className="modal-header border_none p-4">
                    <h4 className="modal-title white pt-3">Shopping List</h4>
                    <button type="button" className="close white closepopup" data-dismiss="modal">×</button>
                </div>
                {/* add Equipment List */}
                {/* -------------------------------- */}
                
                <div className="modal-body px-4 pb-5"> 
                    <div className="d-flex justify-content-between flex-wrap"> 
                    {this.state.addShoppingList.map((row,i)=>
                        <div className="form-group"><span className="cover-border"></span>
                            <label className="label">Item Name</label>
                            <input type="text" 
                            id ='selectedFile'
                            value = {row}
                            onChange ={(e)=>console.log(this.state.selectedShoppingList)}
                            className="input-field"
                            placeholder="" disabled />
                            <a href="#" className="bg-circle position-absolute">
                                <i className="fa fa-minus pt-1" id={i} onClick={this.removeShoppingList} aria-hidden="true"></i>
                            </a>
                        </div>
                        )}
                        {/*  */}
                    </div>
                    {/* modal copy */}
                    <div className="form-group m-auto"><span className="cover-border"></span>
                        <label className="label">Shopping List Item Name</label>
                        <input type="text" 
                        id ='selectedShoppingList'
                        value = {this.state.selectedShoppingList}
                        onChange ={(e)=>this.setState({[e.target.id]:e.target.value},()=>console.log(this.state.selectedShoppingList))}
                        className="input-field"
                         placeholder="" />
                       
                    </div>
                    <div className="add_text text-center">
                        <a href="#" className="bg-circle mr-4 d-inline-block float-none"><i className="fa fa-plus" onClick= {this.addShoppingListMethod} aria-hidden="true"></i></a>
                    </div> 
                    {/*  */}
                </div>

                
                {/* --------------------------------- */}
                {/* <div className="modal-body px-4 pb-5"> 
                    <div className="form-group"><span className="cover-border"></span>
                        <label className="label">Equipment Item Name</label>
                        <input type="text" 
                        id ='selectedFile'
                        value = {this.state.selectedFile}
                        onChange ={(e)=>this.setState({[e.target.id]:e.target.value},()=>console.log(this.state.selectedFile))}
                        className="input-field"
                         placeholder="" />
                       
                    </div>
                    <div className="add_text text-center">
                        <a href="#" className="bg-circle mr-4 d-inline-block float-none"><i className="fa fa-plus" onClick= {this.addEquipment} aria-hidden="true"></i></a>
                    </div> 
                </div> */}
            </div>
        </div>

        {/* >2 End */}
        
        {/* <=3 Start */}
        {/* <div className="modal-dialog large_width">
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
        </div> */}

        {/* <=3 End */}
            <div className="donebg">
                <button type="button" className="done mt-2">save</button>
            </div>
    </div>


    <div className="modal pr-0 list-modal" id="equipment_lst_modal">
        {/* "modal-dialog small_width" Single >3 start {(this.state.something[0]?"btn btn-primary":"")+" btn btn-outline-secondary text-uppercase mr-2 mt-2"} */}
        <div className={(this.state.equipmentCount<3?"modal-dialog small_width":"modal-dialog large_width")}>
            <div className="modal-content modl_bg_color">
                <div className="modal-header border_none p-4">
                    <h4 className="modal-title white pt-3">Equipment List</h4>
                    <button type="button" className="close white closepopup" data-dismiss="modal">×</button>
                </div>
                {/* add Equipment List */}
                {/* -------------------------------- */}
                
                <div className="modal-body px-4 pb-5"> 
                    <div className="d-flex justify-content-between flex-wrap"> 
                    {this.state.addEquipmentList.map((row,i)=>
                        <div className="form-group"><span className="cover-border"></span>
                            <label className="label">Item Name</label>
                            <input type="text" 
                            id ='selectedFile'
                            value = {row}
                            onChange ={(e)=>console.log(this.state.selectedFile)}
                            className="input-field"
                            placeholder="" 
                            disabled/>
                            <a href="#" className="bg-circle position-absolute">
                                <i className="fa fa-minus pt-1" id={i} onClick={this.removeEquipment} aria-hidden="true"></i>
                            </a>
                        </div>
                        )}
                        {/*  */}
                    </div>
                    {/* modal copy */}
                    <div className="form-group m-auto"><span className="cover-border"></span>
                        <label className="label">Equipment Item Name</label>
                        <input type="text" 
                        id ='selectedFile'
                        value = {this.state.selectedFile}
                        onChange ={(e)=>this.setState({[e.target.id]:e.target.value},()=>console.log(this.state.selectedFile))}
                        className="input-field"
                         placeholder="" />
                       
                    </div>
                    <div className="add_text text-center">
                        <a href="#" className="bg-circle mr-4 d-inline-block float-none"><i className="fa fa-plus" onClick= {this.addEquipment} aria-hidden="true"></i></a>
                    </div> 
                    {/*  */}
                </div>

                
                {/* --------------------------------- */}
                {/* <div className="modal-body px-4 pb-5"> 
                    <div className="form-group"><span className="cover-border"></span>
                        <label className="label">Equipment Item Name</label>
                        <input type="text" 
                        id ='selectedFile'
                        value = {this.state.selectedFile}
                        onChange ={(e)=>this.setState({[e.target.id]:e.target.value},()=>console.log(this.state.selectedFile))}
                        className="input-field"
                         placeholder="" />
                       
                    </div>
                    <div className="add_text text-center">
                        <a href="#" className="bg-circle mr-4 d-inline-block float-none"><i className="fa fa-plus" onClick= {this.addEquipment} aria-hidden="true"></i></a>
                    </div> 
                </div> */}
            </div>
        </div>
        {/* Single >3 End */}

       {/* Single <=3 Start  */}
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


        {/* <=3 start */}
            <div className="donebg">
                <button type="button" className="done mt-2">save</button>
            </div>
    </div>
    </div>
)
  }
}

export default HostSessionCreation;