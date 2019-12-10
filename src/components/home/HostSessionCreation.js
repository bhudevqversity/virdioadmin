import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router';
import $ from 'jquery'
import {  browserHistory} from 'react-router'
class HostSessionCreation extends Component {
  
  constructor(props) {
	super(props);
    this.state = {
        accountAddress:false,
        sessionCharge:false,
        msg:'',
        address:'',
        test1:'required',
        test2:'string',
        name:'',
        phoneNumber:'',
        ss:'',
        imageName:'',
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
        hostList:[],
        hostList1:[],
        InterestHost:[],
        InterestHost1:[],
        selectedFile: '',
        equipmentCount:0,
        addShoppingList:[],
        selectedShoppingList:'',
        ShoppingCount:0,
        productCount:0,
        ///////////Add a new Product/////////////////////////
        shoppingProductName:'',
        shoppingVarietal:'',
        shoppingPrice:'',
        addEquipmentList:[],
        shoppingPh:'',
        shoppingAppearance:'',
        shoppingAroma:'',
        shoppingPalate:'',
        shoppingTestingNote:'',
        shoppingWineMakingNote:'',
        shoppingPair:'',
        addAttribute:[],
        something:[false,false,false,false,false,false],
        addProduct:[],
        productInformation:[],
        videoFile:'',
        imageFile:'',    
    }


}
 
componentDidMount(){
	
this.setChannelInterest();
this.setChannelHost();
//this.addToProductList();
this.fetchAttributesList();
}


fetchAttributesList() {
    let attributes = [];
    let productList= this.state.addProduct;  
<<<<<<< HEAD
    let arr = [
        // {
        //     name: "thunderbird",
        //     attributes: [{
        //         attrLabel: "Varietal",
        //             attrValue:'80% Pinot Noir',
                    
        //         },
        //         {
        //             attrLabel: "Price",
        //             attrValue: "80",
                    
        //         },
        //         {
        //             attrLabel: "pH",
        //             attrValue: 3.69,
                    
        //         },
        //         {
        //             attrLabel: "Tasting Notes",
        //             attrValue: "NA",
                    
        //         },
        //         {
        //             attrLabel: "Winemaking",
        //             attrValue: "The 2014 vintage in Napa Valley was one of the earliest harvested vintages in years. A warm spring led to early bud break and created the perfect environment for flowering and fruit set. ",
                    
        //         },
        //         {
        //             attrLabel: "Pairs Well With",
        //             attrValue: "Meats and Fish: Seared Filet Mignon, Pan Roasted Veal Chops",
        //          }
        //     ]
        // }
        ];
        
        // for(let i=0;i<arr.length;i++){
        //  attributes=[];
        //  for(let l =0;l<arr[i].attributes.length;l++){
        //  let n = {attrKey:arr[i].attributes[l].attrKey,attrValue:arr[i].attributes[l].attrValue,status:false,id:l};
        //  attributes.push(n);   
        //    }
        
        // let n = {name : arr[i].name,
        //     attributes
        // }
        // productList.push(n);
        // }
        // this.setState({
        // addProduct:productList
        // },()=>console.log('-------------------------------------------addProduct',this.state.addProduct))

=======
>>>>>>> 710eb1936b5e82faa88031d9d148d8dd2fe15683
    let  interestId=1;
    
    console.log('-----asdfghjkl----------',interestId);  

      axios      
      
      .get("http://192.168.1.177:8001/api/v1/session/"+interestId+"/attributeList")          
      .then(res => {
        console.log('---------interestIdproduct--------------',res.data.responseData);

          let eqarray=res.data.responseData;        
     
          let attributes = [];
          let productList= this.state.addProduct;
          for(let i =0;i<eqarray.length;i++){
           let n = {attrKey:eqarray[i].attrLabel,attrValue:'',status:false,id:i};
           attributes.push(n);
           console.log('attributes-----',attributes);   
             }
          
          let n = {name : 'ChannelCreation',
              attributes
            }
            productList.push(n);       
          this.setState({
          addProduct:productList
          },()=>console.log('-------------------------------------------addProduct',this.state.addProduct))
      })
      .catch(err =>{
          console.log('----------there is problem------------');

      });

  }
  

setChannelInterest=(e)=>{

    let  channelId=1;
    axios      
    
    .get("/api/v1/session/"+channelId+"/allInterest")
   // .get("/api/v1/session/interest")           
    .then(res => {
      console.log('---------channelInterest--------------',res.data.responseData);
      let channelArray= this.state.InterestHost;
       let eqarray=res.data.responseData;        
      for(let i=0;i<eqarray.length;i++){
        let n = {id: eqarray[i].id, title: eqarray[i].title,image :'images/pic.jpg',type:false};
        channelArray.push(n); 
      }
      this.setState({
        InterestHost: channelArray
          });
    })
    .catch(err =>{
        console.log('----------there is problem------------');

    });
    
}

setChannelHost=(e)=>{

    let  channelId=1;
    axios      

    //.get("/api/v1/session/"+channelId+"/hosts-list1")    
    .get("/api/v1/session/"+channelId+"/hosts-user-list")      
    .then(res => {
      console.log('---------channelHost--------------',res.data.responseData);
      let channelArray= this.state.hostList;
       let eqarray=res.data.responseData; 

       let n = {userId: eqarray.id, username: eqarray.firstName,image :'images/pic.jpg',type:false};
    channelArray.push(n); 

    //   for(let i=0;i<eqarray.length;i++){
    //    // let n = {userId: eqarray[i].userId, username: eqarray[i].username,image :'images/pic.jpg',type:false};
    //     let n = {userId: eqarray.id, username: eqarray.firstName,image :'images/pic.jpg',type:false};
    //     channelArray.push(n); 
    //   }
     // console.log('---------channelHost1111--------------',eqarray.id);   
      this.setState({
        hostList: channelArray
          });
    })
    .catch(err =>{
        console.log('----------there is problem------------');

    });

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
    this.setState({
        imageName:event.target.files[0]
    },()=>console.log('=========================',this.state.imageName))
}
saveVideoFile = event=>{
    console.log(event.target.files[0]);
    const data = new FormData() 
      data.append('file', event.target.files[0]);
      console.log('----------------------',data);
      this.setState({
          [event.target.id]:data
    },()=>console.log(this.state.videoFile,'Preview---------',this.state.imageFile))
}
saveProductList=(e)=>{
   // alert('hi');
    //e.preventDefault();
    //console.log('$("#description").val()',$("#description").val());
    console.log('Product List',this.state.productInformation);
    const saveProduct = {
        name:this.state.shoppingProductName,
        productName:this.state.addProduct[0].name,
        attributes:this.state.productInformation,
        videoFile:this.state.videoFile,
        imageFile:this.state.imageFile
    }
    console.log('saveProduct',saveProduct)
    // if (this.validator.allValid()) {
    // console.log('saveProduct',saveProduct);
    // }else{
    //     console.log('error');
    //     this.validator.showMessages();
    // }

    // $("#product_lst_modal").attr({'style':'display:none'});
    // $("#audio_video_mdl").attr({'style':'display:none'});
    axios.post("/api/v1/session/addProduct", {saveProduct})
    .then(res => {

      //console.log(res);
      if(res.data.responseMessage == "success")
      {
      console.log('=============lallittiwari12345===================>',res.data);
      }else{
        console.log('=============There Is an Error===================>'); 
      }
    })   

}

handleProductList = idx => evt => {
    const newShareholders = this.state.productInformation.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, attrValue: evt.target.value };
    });
  
    this.setState({ productInformation: newShareholders },()=> {
      console.log('Product List',this.state.productInformation[idx].attrValue)
    }
    );
  }
addAttribute = (e) => {
    e.preventDefault();
    console.log(e.target.id,'-------------',e.target.name);
    console.log('e.target.id',e.target.id);
    let attributeArray=this.state.addProduct;
    let arr = this.state.productInformation;
    let productCount = this.state.productCount;
    attributeArray[0].attributes[e.target.id].status = !attributeArray[0].attributes[e.target.id].status;
    if(attributeArray[0].attributes[e.target.id].status){
        arr.push(attributeArray[0].attributes[e.target.id]);
        productCount =  productCount+1;

    }else{
    for(let i=0;i<arr.length;i++){
        if(e.target.name === arr[i].attrKey){
            arr.splice(i,1);
            productCount =  productCount-1;
        }
    }
    }

    this.setState({
        addProduct:attributeArray,
        productInformation:arr,
        productCount:productCount
    },()=>console.log('----------------',this.state.productInformation))
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
    arrayCheck.push(channelContainer[e.target.id].id);    
      } 
    else {
      
       if(this.state.InterestHost1.length>0){
        for(let i=0;i<this.state.InterestHost1.length;i++){
           if(this.state.InterestHost1[i]=== channelContainer[e.target.id].id){
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
    event.preventDefault();
    const channel = {
    "name": this.state.name,
    "description": this.state.description,
    "image": this.state.imageName,
    "phone": this.state.phoneNumber,
    "street_address1": this.state.streetAddress1,
    "street_address2": this.state.streetAddress2,
    "city": this.state.city,
    "state_code": this.state.stateCode,
    "zip_code": this.state.zipCode,
    "account_name":this.state.accountName,
    "account_number":this.state.accountNumber,
    "account_type":this.state.accountType,
    "routing_number":this.state.routingNumber,
    "ss":this.state.ss,
    "ein":"7654",
    "chargeForSessiones":this.state.sessionCharge,
    "charge_amount":"30",
    "has_shopping_list":this.state.shoppingStatus,
    "has_equipment_list":this.state.equipmentStatus,
    "has_product_list":this.state.productStatus
  }
  
  const channelHost = {
      channel_Host:this.state.hostList1
  }
  const InterestHost = {
      Interest_Host:this.state.InterestHost1
  }
  console.log('*******lalitChannel*********',channel,channelHost,InterestHost);

  //if (this.validator.allValid()) {

    axios.post("/api/v1/session/createchannel", {channel,channelHost,InterestHost})
    .then(res => {

      console.log('=============lallittiwari12345===================>',res.data);;

          if(res.data.responseMessage == "success")
          {
          this.setState({
          msg: "Channel hasbeen created Successfully!!!!!!!",
        });
        }else{

        this.setState({
          msg: "There Is a error in channel creation",
        });

      }
    
    })

//   }else{

//     console.log('----------------This is a error--------------------')
//     this.validator.showMessages();
//   // rerender to show messages for the first time
//   // you can use the autoForceUpdate option to do this automatically`
//   this.forceUpdate();
//   }
}
 goToSession=e=>{
    browserHistory.push("/FitnessSessionCreation");
 }
render() {
return(
<div>
<div id="root">
        <div className="App">
            <div className="container-fluid">
                <div className="row top-header px-4 pb-4">
                    <div className="col-lg-2 d-flex d-md-block justify-content-center p-2"><img src="images/login-logo.png" className="logo" alt = '' /></div>
                    <div className="col-lg-4 d-flex d-md-block justify-content-center p-4">
                        <div className="user-info d-flex align-items-center"><img src="images/pic.jpg" className="user-avtar pic" alt = '' />
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
                                  <div className="message-notification"><img src="images/message.png" alt=''/>
                              <span className="message-count">0</span></div>
                        </div>
                    </div>
                </div>
                <div className="gray-box-4">
                    <div className="hdng_text py-4 d-flex justify-content-between px-4 headerborder align-items-center">
                        <h3 className="p-0 m-0">Create Channel</h3>
                        <div  id="msg" style={{color:'green'}}>{this.state.msg}</div>
                        <button type="button" className="close" onClick={e=>browserHistory.push("/DashboardLanding")}>×</button>
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
                                            <label className="label">Channel Name</label>
                                            <input type="text" 
                                            id ="name"
                                            value = {this.state.name}
                                            onChange={(e)=>this.setState({[e.target.id]:e.target.value},()=>console.log(this.state.name))}
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
                                                  <img src="images/browse-img.png" className="browse_image" alt= ''/>
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
                                            {/* <span className="dropdown-icon"></span> */}
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
                                            <Link to="ChannelCreation" className="bg-circle mr-4" data-toggle="modal" data-target="#shopping_lst_modal"><i className="fa fa-plus" aria-hidden="true"></i></Link>
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
                                            <Link tp ="HostSessionCreation" className="bg-circle mr-4" data-toggle="modal" data-target="#equipment_lst_modal"><i className="fa fa-plus" aria-hidden="true"></i></Link>
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
                                            <Link to="ChannelCreation" className="bg-circle mr-4" data-toggle="modal" data-target="#product_lst_modal"><i className="fa fa-plus" aria-hidden="true"></i></Link>
                                            <span className="gray-text">{this.state.productCount} Product Added</span>
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
                                    <img src={row.image} className="ml-2 mr-3" alt="user-icon"/>
                                    <div>
                                        <p className="checktxt_name pb-1">{row.username}</p>
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
                                        <p className="checktxt_name pb-1">{row.title}</p>
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
                            <div className="plusicon position-static mr-0" onClick={this.goToSession}><i className="fa fa-plus" aria-hidden="true"></i>                           </div>

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
                            <Link to="ChannelCreation" className="bg-circle position-absolute">
                                <i className="fa fa-minus pt-1" id={i} onClick={this.removeShoppingList} aria-hidden="true"></i>
                            </Link>
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
                        <Link to="ChannelCreation" className="bg-circle mr-4 d-inline-block float-none"><i className="fa fa-plus" onClick= {this.addShoppingListMethod} aria-hidden="true"></i></Link>
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
                        <div className="form-group mr-2"><span className="cover-border"></span>
                            <label className="label">Item Name</label>
                            <input type="text" 
                            id ='selectedFile'
                            value = {row}
                            onChange ={(e)=>console.log(this.state.selectedFile)}
                            className="input-field"
                            placeholder="" 
                            disabled/>
                            <Link to="ChannelCreation" className="bg-circle position-absolute">
                                <i className="fa fa-minus pt-1" id={i} onClick={this.removeEquipment} aria-hidden="true"></i>
                            </Link>
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
                        <Link to="ChannelCreation" className="bg-circle mr-4 d-inline-block float-none"><i className="fa fa-plus" onClick= {this.addEquipment} aria-hidden="true"></i></Link>
                    </div> 
                </div>                
            </div>
        </div>
        </div>
        <div className="modal pr-0 show" id="product_lst_modal">
           <div className="modal-dialog large_width">
            <div className="modal-content modl_bg_color">
                <div className="modal-header px-4">
                    <h4 className="modal-title white">Product List<span>Tap on an attribute to make it active in the Product list</span></h4>
                    <button type="button" className="close white closepopup" data-dismiss="modal">×</button>
                </div>
                <div className="modal-body px-4 pb-5">
                    <div className="card cardbg mt-4">
                        <div className="form-group mb-0"><span className="cover-border"></span>
                            <label className="label">Name of the Product</label>
                            <input type="text" id='shoppingProductName' value={this.state.shoppingProductName} onChange={(e)=>this.setState({[e.target.id]:e.target.value},()=>console.log('*****',this.state.shoppingProductName))} className="input-field" />
                        </div>
                    </div>
                    <div className="card cardbg">
                        <h4 className="white mt-4 mb-3">Add Attribute</h4>
                        <div className="d-flex flex-wrap">
                        {this.state.addProduct.length>0?
                        (this.state.addProduct[0].attributes.map((row,i)=>
                        // {row.attributes.map((rows,l)=>
                        <Link to="HostSessionCreation" key={i} id ={i} name={row.attrKey} onClick = {this.addAttribute} className={(row.status?"btn btn-primary":"")+" btn btn-outline-secondary text-uppercase mr-2 mt-2"} >{row.attrKey}</Link>
                        // )}
                        )):''}
                        </div>
                        <div className="border_bottom_dotted mt-4"></div>
                    </div>
                    <div className="card cardbg mt-5">
                        <div className="row">
                            {this.state.productInformation.length>0?
                            (this.state.productInformation.map((row,i)=>
                            <div className="col-md-4" key={i}>
                                <div className="form-group mb-0"><span className="cover-border"></span>
                                    <label className="label">{row.attrKey}</label>
                                    <input type="text" 
                                    id ={i}
                                    value={row.attrValue}
                                    onChange={this.handleProductList(i)}
                                    className="input-field" />
                                </div>
                                {/* {this.validator.message(row.attrKey, row.attrValue, this.state.test1+'|'+this.state.test2)} */}
                            </div>
                            )):''}
                        </div>
                        </div>
                </div>
            </div>
        </div> 
        <div className="text-center">
            <button type="button" className="done mb-5 mt-2 mr-3">Preview</button>
            {/* <button type="button" data-toggle="modal" data-target="#audio_video_mdl" onClick= {this.state.saveProductList} className="done mt-4 mt-2">save</button> */}
            <button type="button" data-toggle="modal" data-target="#audio_video_mdl"  className="done mt-4 mt-2">save</button>
            {/* <input type="submit" name="submit" value={this.saveProductList}/>                     */}
        </div>
       </div>

    <div className="modal pr-0 show" id="audio_video_mdl">
         <div className="modal-dialog large_width">
            <div className="modal-content modl_bg_color">
                {/* <div className="modal-header px-4">
                    <h4 className="modal-title white">Product List<span>Tap on an attribute to make it active in the Product list</span></h4>
                    <button type="button" className="close white closepopup" data-dismiss="modal">×</button>
                </div> */}
                <div className="modal-body px-4 pb-5">
                    <div className="card cardbg mt-4">
                    <div className="gray-box-5 mt-5">
      <div className="container-fluid register-frm pb-3 mt-md-4 px-4">                
        <div className="video_img position-relative">
          <span className="cover-border"></span>
          <label className="label">Description</label>
          <div className="input-field position-relative d-lg-flex flex-wrap d-block px-3">
            
            <div className="one flex-fill mr-4 position-relative">
            
              <div className="custom-file mb-3">
                <input type="file" className="custom-file-input" id="videoFile" name="file" onChange = {this.saveVideoFile} />
                <label className="custom-file-label px-1"  htmlFor="videoFile">
                    <img src="images/video2.png" className="browse_image1" alt=''/>
                    <p className="purple_text browse_text"><span className="white">VIDEO</span><br />Browse File</p>
                    <Link to="/ChannelCreation" className="bg-circle position-absolute"><i className="fa fa-minus pt-1" id="0" aria-hidden="true"></i></Link>
                </label>
              </div>
            </div>
            <div className="one flex-fill position-relative">
              <div className="custom-file mb-3">
                <input type="file" className="custom-file-input" id="imageFile" name="file" onChange = {this.saveVideoFile} />
                <label className="custom-file-label px-1" htmlFor="imageFile">
                    <img src="/images/image1.png" className="browse_image1" alt="#"/>
                    <p className="purple_text browse_text"><span className="white">IMAGE</span><br />Browse File</p>
                    <Link to="/ChannelCreation" className="bg-circle position-absolute"><i className="fa fa-minus pt-1" id="0" aria-hidden="true"></i></Link>
                </label>
              </div>
            </div>
          </div>
          <div className="text-center">
          <button type="button" data-toggle="modal" data-target="#audio_video_mdl" onClick= {this.saveProductList} className="done m-auto" >save</button>
            </div>
        </div>                          
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

export default HostSessionCreation;