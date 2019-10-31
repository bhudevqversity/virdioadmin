import React, { Component } from "react";
import axios from "axios";
import $ from 'jquery';
import uniqueId from 'lodash/uniqueId';
import Sortable from 'react-sortablejs';
import ReactLightCalendar from '@lls/react-light-calendar'
import '@lls/react-light-calendar/dist/index.css'
import SimpleReactValidator from 'simple-react-validator';
import { Link } from 'react-router'


//import $ from 'jquery';
//import DateTimeField from "react-bootstrap-datetimepicker";

class SessionWineCreation extends Component {
  
  constructor(props) {
    super(props);
    const date = new Date();
    const startDate = date.getTime();
    this.state={
         //////////Calender /////////////
        startDate, // Today
        endDate: '', // Today + 6 days
        dateFormat : '',
        cutoffStartDate:date.getTime(),
        cutoffEndDate:'',
        cutoffDateTime:'',
        localTimeZone:Intl.DateTimeFormat().resolvedOptions().timeZone,
         //////////header state////////
         totalViews : '',
         weeklyAttendance:'',
         totalRevenue:'',
         messageCount:'',
        ///////////////Session Info ////////////////////////////////
        sessionName:'',
        session_details:'',
        when:'',
        phoneNumber:'',
        description:'',
        minimumParticipants:'',
        maximumParticipants:'',
        sessionAmount:'',
        exampleFormControlSelect1:'Pick a Difficulty level',
        exampleFormControlSelect2 : 'Pick a Duration',
        searchParticipant: false,
        sessionCharge:false,
        amountCharge: '',
        orderWine:false,
        ///////////////Reminder//////////////////////////
        hostSessionStart:'',
        participantSessionStart:'',
        minimumNotMet: '',
        signUpDateTime:'',
        /////////////////////Privacy//////////////////////////
        disableParticipant:false,
        allowParticipant:false,
        showParticipant:false,
        /////////////Group Location//////////
        allowLocation:false,
        ////List Equipement and Shopping List
         ///////////////Equipment List
         selectedOption: null,
         selected: {},
         equipmentName : '',
         equipmentQunatity:'',
         equipmentArray : [],
         quantityValue:{},
         equipmentList : [{ name: "Tom",type:false,Quantity:0 },{ name: "Tommy",type:false,Quantity:0 }],
         equipmentList1 : [],
         duplicateList:[],
         addToequipmentList1 : [],
         searchEquipment: "",
         shoppingList : [{ itemName: "Tom",type:false,Quantity:0,itemNote:"X" },{ itemName: "Tommy",type:false,Quantity:0,itemNote:"X" }],
         shoppingList1:[],
         duplicateShoppingList: [],
         shoppingListValue: "",
         validateList:'',
         //////////Wine Creation /////////////////
         listAppearance:[{image:"images/cherry.png"},{image:"images/burgundy.png"},{image:"images/auburn.png"}],
         listAroma :[{image:"images/apple.png"},{image:"images/grapes.png"},{image:"images/cheese.png"}],
         listPalate:[{image:"images/smily.png"},{image:"images/smily.png"},{image:"images/smily.png"}]
        }
    this.setHeaderValue();
    this.validator = new SimpleReactValidator();
}
////////set header
setHeaderValue=() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        // const persons = res.data;
        console.log('=================',res.data);
        this.setState({
            weeklyAttendance : res.data[4].id,
            totalViews:res.data[6].id,
            totalRevenue:res.data[7].id,
            messageCount:res.data[8].id
        })
      })
  }
sessionInfo = e =>{
    this.setState({
        [e.target.id] : e.target.value
        },()=>console.log('==========>',this.state))
    }
//////////Calender
signUpCutOff = (cutoffStartDate, cutoffEndDate) => {
    const cutoffDateTime = cutoffStartDate;
    let dt2 = new Date(cutoffStartDate);
  //  cutoffStartDate=cutoffEndDate;
    this.setState({ 
      cutoffStartDate, 
      cutoffEndDate,
      cutoffDateTime 
    })
    dt2 = new Date (dt2.getTime()).getDate()+ '/' +(new Date (dt2.getTime()).getMonth()+1)+'/'+new Date (dt2.getTime()).getFullYear() + " " + new Date (dt2.getTime()).getHours() + ':' +new Date (dt2.getTime()).getMinutes();
    this.setState({
    signUpDateTime : dt2
    },()=>console.log('Duration ===================================>',this.state.when))
  console.log('*****************',this.state.dateFormat);
  }
  onChange = (startDate, endDate) => {
    const dateFormat = startDate;
    // let dt = new Date(startDate).toUTCString();
    let dt2 = new Date(startDate);
    // dt = dt.split('GMT')
  //  endDate = startDate;
    this.setState({ startDate, endDate,dateFormat },
    ()=>console.log('sds',this.state.startDate,this.state.endDate))
  
    dt2 = new Date (dt2.getTime()).getDate()+ '/' +new Date (dt2.getTime()).getMonth()+'/'+new Date (dt2.getTime()).getFullYear() + " " + new Date (dt2.getTime()).getHours() + ':' +new Date (dt2.getTime()).getMinutes();
    this.setState({
    when : dt2
    },()=>console.log('Duration ===================================>',this.state.when))
  console.log('*****************',this.state.dateFormat);
  }    
////////////////Equipment List
handleSelect = (e) => {
  
    let equipmentContainer = this.state.equipmentList;
    equipmentContainer[e.target.id].type = !equipmentContainer[e.target.id].type;
    if(equipmentContainer[e.target.id].type) {
       // equipmentContainer[e.target.id].name = e.target.name;
        //if(e.target.value===''){equipmentContainer[e.target.id].Quantity = 0}
      } 
    else {
      let arrayCheck = [];
      equipmentContainer[e.target.id].Quantity = 0;
      if(this.state.equipmentList1.length>0){
        this.state.equipmentList1.map((row,i)=>{
          if(row.name === equipmentContainer[e.target.id].name){
            arrayCheck = this.state.equipmentList1;
            arrayCheck[i].Quantity = 0;
            arrayCheck[i].type = equipmentContainer[e.target.id].type;
            this.setState({
              equipmentList1 : arrayCheck 
            },()=> console.log('check or uncheck equipmentList', this.state.equipmentList1))
          }
        })
      }
    }
    this.setState({
      equipmentList : equipmentContainer,
      },()=>
      { console.log('setEuipmentContainer==>',this.state.equipmentList);
        });
   
  }

  addToEquipmentList = () => {
    console.log(this.state.searchEquipment,'****************************************************',this.state.duplicateList);
    let addToEquipmentListArray = [];
    let ka = [];
    if((this.state.duplicateList.length > 0 && this.state.equipmentList.length>0) && this.state.searchEquipment !== "" ){
    console.log('Search part');
    let x =0 ,n=0;
    this.state.duplicateList.map((row,i) => {
      if(row.name === this.state.equipmentList[0].name){
        //this.state.duplicateList[i].Quantity=this.state.equipmentList[0].Quantity  ;
        addToEquipmentListArray = this.state.duplicateList;
        addToEquipmentListArray[i].Quantity=this.state.equipmentList[0].Quantity  ;
        this.setState({
          duplicateList : addToEquipmentListArray
        })
      console.log(this.state.duplicateList,'matched*********************',this.state.equipmentList);  
      }
    })
    // checking for new insertion or update
    for(let i =0;i<this.state.equipmentList1.length;i++){
      if(this.state.equipmentList1[i].name === this.state.equipmentList[0].name){
        x=1;n=i;
        console.log('Search ---------------Update');
      
     }
    }
    if(x===1){
      //this.state.equipmentList1[n].Quantity=this.state.equipmentList[0].Quantity // update
      addToEquipmentListArray = this.state.equipmentList1; 
      addToEquipmentListArray[n].Quantity=this.state.equipmentList[0].Quantity // update
      this.setState({
        equipmentList1:addToEquipmentListArray
      })
    } 
    else { // new insertion
          console.log('Search ---------------new insertion');
          if((this.state.equipmentList[0].type===true) && (this.state.equipmentList[0].Quantity>0)){
          this.setState({
            equipmentList1:this.state.equipmentList1.concat(this.state.equipmentList)
            });
        }
    }
  
  } else {
    this.setState({
      duplicateList : []
    })
    let x,n ;
    // checking for new insertion or update
    for (let i=0;i<this.state.equipmentList.length;i++) {
      x=0;n=0;
      for(let l=0;l<this.state.equipmentList1.length;l++){
        if((this.state.equipmentList[i].name===this.state.equipmentList1[l].name)){
          x=1;n=l;
          //this.state.equipmentList1[n].Quantity=this.state.equipmentList[i].Quantity ;// default 0 qunatity will not populate list
          //this.state.equipmentList1[n].type = this.state.equipmentList[i].type;
          addToEquipmentListArray = this.state.equipmentList1;
          addToEquipmentListArray[n].Quantity=this.state.equipmentList[i].Quantity ;// default 0 qunatity will not populate list
          addToEquipmentListArray[n].type = this.state.equipmentList[i].type;
          this.setState({
            equipmentList1 : addToEquipmentListArray
          }, ()=> console.log('!!!!!!!!!!!!!!!!!!!!!!!! update euipment List',this.state.equipmentList1 ))  
        }
      }
      if(x===1){ // update
        console.log('Search ****************************Update');
        // this.state.equipmentList1[n].Quantity=this.state.equipmentList[i].Quantity ;// default 0 qunatity will not populate list
        // this.state.equipmentList1[n].type = this.state.equipmentList[i].type;
      } else { // new insertion
        console.log('Search ******************************new insertion');
        if((this.state.equipmentList[i].type===true) && (this.state.equipmentList[i].Quantity>0)){
       // n = this.state.equipmentList[n];
       ka = [];
       ka = this.state.equipmentList1;
       ka.push(this.state.equipmentList[i]);
        this.setState({
          equipmentList1:ka
          },()=> console.log(this.state.equipmentList1,'>>>>>>>>>>>>>>>>@index',i,'*****',this.state.equipmentList[i]));
        }
      }
    }
  }
    
  }  

  removeEquipmentList = (e) => {
    console.log('=====================================',e.target);
      var dataArray1 =  this.state.equipmentList;
      this.state.equipmentList.map((row,i) => {
        if(row.name === this.state.equipmentList1[e.target.id].name){
        dataArray1[i].type=!dataArray1[i].type;
        dataArray1[i].Quantity = 0;  
        console.log('matched*********************',dataArray1);  
        }
      })
      var dataArray = this.state.equipmentList1;
      dataArray.splice(e.target.id, 1);
     
      this.setState({
        equipmentList1:dataArray,
        equipmentList:dataArray1
      },()=>console.log('****************',this.state.equipmentList))
    }  
    handleShareholderNameChange = idx => evt => {
        const newShareholders = this.state.equipmentList.map((shareholder, sidx) => {
          if (idx !== sidx) return shareholder;
          return { ...shareholder, Quantity: evt.target.value };
        });
      
        this.setState({ equipmentList: newShareholders },()=> {
          console.log('equipmentList',this.state.equipmentList)
        }
        );
      };
    searchEquipmentMethod =(e)=>{
    if(this.state.duplicateList.length>0){
         this.setState({
          equipmentList:[]
         }, function() { // called by React after the state is updated
           this.setState({
             equipmentList:this.state.addToequipmentList1.concat(this.state.duplicateList.filter(this.findListIndex)),
             addToequipmentList1 : this.state.equipmentList
            },()=> console.log('addToequipmentList',this.state.addToequipmentList1,'duplicateList',this.state.duplicateList,'----------Check-----------',this.state.equipmentList));
         });
       } else {
         this.setState({
          duplicateList: this.state.equipmentList,
          equipmentList:[]
        }, function() { // called by React after the state is updated
           this.setState({
             equipmentList:this.state.addToequipmentList1.concat(this.state.duplicateList.filter(this.findListIndex)),
             addToequipmentList1 : this.state.equipmentList
           },()=> console.log('addToequipmentList',this.state.addToequipmentList1,'duplicateList',this.state.duplicateList,'----------Check-----------',this.state.equipmentList));
         });
         
       }
    }       
    findListIndex =(listItem) =>{
        console.log(listItem,this.state.searchEquipment)
        if (listItem.name === this.state.searchEquipment) {
          console.log(listItem.type);
          return listItem};
    }

    selectShoppingList =(e)=> {
        let shoppingContainer = this.state.shoppingList;
        shoppingContainer[e.target.id].type = !shoppingContainer[e.target.id].type;
        if(shoppingContainer[e.target.id].type) {
        } 
        else {
          shoppingContainer[e.target.id].Quantity = 0;
          shoppingContainer[e.target.id].itemNote = "X";
          let arrayCheck = [];
          if(this.state.shoppingList1.length>0){
           for(let i=0;i<this.state.shoppingList1.length;i++){
              if(this.state.shoppingList1[i].itemName === shoppingContainer[e.target.id].itemName){
                arrayCheck = this.state.shoppingList1;
                arrayCheck[i] = shoppingContainer[e.target.id];
                this.setState({
                  shoppingList1 : arrayCheck 
                },()=> console.log('check or uncheck shoppingList', this.state.shoppingList1))
              }
            }
          }
        }
        this.setState({
          shoppingList : shoppingContainer,
          },()=>
          { console.log('setEuipmentContainer==>',this.state.shoppingList);
            });
      }
      handleShoppingQuantity = idx => evt => {
        const newShareholders = this.state.shoppingList.map((shareholder, sidx) => {
          if (idx !== sidx) return shareholder;
          return { ...shareholder, Quantity: evt.target.value };
        });
      
        this.setState({ shoppingList: newShareholders },()=> {
          console.log('equipmentList',this.state.shoppingList[idx].Quantity)
        }
        );
      }
      handleShoppingitemNote= idx => evt => {
        const newShareholders = this.state.shoppingList.map((shareholder, sidx) => {
          if (idx !== sidx) return shareholder;
          return { ...shareholder, itemNote: evt.target.value };
        });
      
        this.setState({ shoppingList: newShareholders },()=> {
          console.log('item Note',this.state.shoppingList[idx].itemNote)
        }
        );
      }
      
    setShoppingList = (e) =>{
        if (this.state.duplicateShoppingList.length>0) { 
           this.setState({shoppingListValue:'',
           shoppingList:this.state.duplicateShoppingList,
           duplicateShoppingList : []
           },()=>console.log('setShoppingList',this.state.shoppingList))
         }
    }

    addToShoppingList = () => {
        console.log(this.state.shoppingListValue,'****************************************************',this.state.duplicateShoppingList);
        let addToShoppingListArray = [];
        let ka = [];
        if((this.state.duplicateShoppingList.length > 0 && this.state.shoppingList.length>0) && this.state.shoppingListValue !== "" ){
        console.log('Search part');
        let x =0 ,n=0;
        for(let i =0 ;i<this.state.duplicateShoppingList.length;i++){
          if(this.state.duplicateShoppingList[i].itemName === this.state.shoppingList[0].itemName){
            //this.state.duplicateList[i].Quantity=this.state.equipmentList[0].Quantity  ;
            addToShoppingListArray = this.state.duplicateShoppingList;
            addToShoppingListArray[i].Quantity=this.state.shoppingList[0].Quantity;
            addToShoppingListArray[i].itemNote=this.state.shoppingList[0].itemNote;
            this.setState({
              duplicateShoppingList : addToShoppingListArray
            })
          console.log(this.state.duplicateShoppingList,'matched*********************',this.state.shoppingList);  
          }
        }
        // checking for new insertion or update
        for(let i =0;i<this.state.shoppingList1.length;i++){
          if(this.state.shoppingList1[i].itemName === this.state.shoppingList[0].itemName){
            x=1;n=i;
            console.log('Search ---------------Update');
          
         }
        }
        if(x===1){
          //this.state.equipmentList1[n].Quantity=this.state.equipmentList[0].Quantity // update
          addToShoppingListArray = this.state.shoppingList1; 
          addToShoppingListArray[n].Quantity=this.state.shoppingList[0].Quantity; // update
          addToShoppingListArray[n].ItemNote=this.state.shoppingList[0].ItemNote;
          this.setState({
            shoppingList1:addToShoppingListArray
          })
        } 
        else { // new insertion
              console.log('Search ---------------new insertion');
              if((this.state.shoppingList[0].type===true) && (this.state.shoppingList[0].Quantity>0)){
              this.setState({
                shoppingList1:this.state.shoppingList1.concat(this.state.shoppingList)
                });
            }
        }
      
      } else {
        this.setState({
          duplicateShoppingList : []
        })
        let x,n ;
        // checking for new insertion or update
        for (let i=0;i<this.state.shoppingList.length;i++) {
          x=0;n=0;
          for(let l=0;l<this.state.shoppingList1.length;l++){
            if((this.state.shoppingList[i].itemName===this.state.shoppingList1[l].itemName)){
              x=1;n=l;
              addToShoppingListArray = this.state.shoppingList1;
              console.log(this.state.shoppingList1,'++++++++++++++++++++++',addToShoppingListArray);
              // addToShoppingListArray[n].Quantity=this.state.shoppingList[i].Quantity ;// default 0 qunatity will not populate list
              // addToShoppingListArray[n].type = this.state.shoppingList[i].type;
              // addToShoppingListArray[n].ItemNote = this.state.shoppingList[i].itemNote;
              addToShoppingListArray[n] =this.state.shoppingList[i];
              this.setState({
                shoppingList1 : addToShoppingListArray
              }, ()=> console.log('!!!!!!!!!!!!!!!!!!!!!!!! update euipment List',this.state.shoppingList1 ))  
            }
          }
          if(x===1){ // update
            console.log('Search ****************************Update');
          } else { // new insertion
            console.log('Search ******************************new insertion');
            if((this.state.shoppingList[i].type===true) && (this.state.shoppingList[i].Quantity>0)){
           // n = this.state.equipmentList[n];
           ka = [];
           ka = this.state.shoppingList1;
           ka.push(this.state.shoppingList[i]);
            this.setState({
              shoppingList1:ka
              },()=> console.log(this.state.shoppingList1,'>>>>>>>>>>>>>>>>@index',i,'*****',this.state.shoppingList[i]));
            }
          }
        }
      }
    }
    searchShoppingList = (e) => {
        if(this.state.duplicateShoppingList.length>0){
          this.setState({
           shoppingList:[]
          }, function() { // called by React after the state is updated
            this.setState({
              shoppingList:this.state.addToequipmentList1.concat(this.state.duplicateShoppingList.filter(this.findShoppingList)),
              addToequipmentList1 : this.state.shoppingList
             },()=> console.log('SearchShopiingList','duplicateList',this.state.duplicateShoppingList,'----------Check-----------',this.state.shoppingList));
          });
        } else {
          this.setState({
           duplicateShoppingList: this.state.shoppingList,
           shoppingList:[]
         }, function() { // called by React after the state is updated
            this.setState({
              shoppingList:this.state.addToequipmentList1.concat(this.state.duplicateShoppingList.filter(this.findShoppingList)),
              addToequipmentList1 : this.state.shoppingList
            },()=> console.log('SearchduplicateList',this.state.duplicateShoppingList,'----------Check-----------',this.state.shoppingList));
          });
          
        }
      }  

      findShoppingList = (listItem) => {
        console.log(listItem,this.state.shoppingListValue)
        if (listItem.itemName === this.state.shoppingListValue) {
          console.log(listItem.type);
          return listItem};
      }
      removeShoppingList = (e) => {
        console.log('=====================================',e.target.id);
        console.log(e.target.value);
        var dataArray1 =  this.state.shoppingList;
        for(let i=0;i<this.state.shoppingList.length;i++) {
            if(this.state.shoppingList[i].itemName === this.state.shoppingList1[e.target.id].itemName){
            dataArray1[i].type=!dataArray1[i].type  ;
            dataArray1[i].itemNote= "X";
            dataArray1[i].Quantity = 0;
            console.log('matched*********************',dataArray1[i]);  
            }
          }
          var dataArray = this.state.shoppingList1;
          dataArray.splice(e.target.id, 1);
          this.setState({
            shoppingList1:dataArray,
            shoppingList:dataArray1
          },()=>console.log('******Remove**********',this.state.shoppingList1))
        }
      

 render() {

    return (
	<div>
	    <div id="root">
        <div className="App">
            <div className="container-fluid">
                <div className="row top-header p-4">
                    <div className="col-lg-2 d-flex d-md-block justify-content-center p-2"><img src="/images/login-logo.png" className="logo" /></div>
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
                                <h3>{this.state.weeklyAttendance}%</h3></div><span className="border-right gray-border"></span>
                            <div className="header-info-right">
                                <p>Total Views</p>
                                <h3>{this.state.totalViews}K</h3></div><span className="border-right gray-border"></span>
                            <div className="header-info-right">
                                <p>Total Revenue</p>
                                <h3>${this.state.totalRevenue}</h3></div><span className="border-right gray-border"></span>
                                  <div className="message-notification"><img src="images/message.png" alt="message-icon" />
                              <span className="message-count">{this.state.messageCount}</span></div>
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden pt-3">
                    <h4 className="text-white float-left">CREATE SESSION</h4>
                    <div className="d-flex flex-wrap float-right">
                        <p className="float-right purple_text mr-5 bordr-right">Copy Form...</p>
                        <p className="float-right purple_text mr-5 ml-4"><a href="#" className="purple_text">x</a></p>
                    </div>
                    
                </div>
                <div className="gray-box">
                    <div className="session">
                        <h3 className="info"><img src="images/information.png" className="mr-3 mb-2 text_lft_icon" alt="information" />Session Info</h3></div>
                    <div className="container-fluid register-form">
                        <div className="form">
                            <div className="form-content">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group"><span className="cover-border"></span>
                                            <label className="label">Session Name</label>
                                            <input type="text" 
                                            id = "session_details" 
                                            value= {this.state.session_details} 
                                            onChange = {this.sessionInfo} 
                                            placeholder="Session Name"
                                            className="input-field" />
                                        {this.validator.message('session_details', this.state.session_details, 'required')}    
                                        </div>
                                        <div className="form-group"><span className="cover-border"></span>
                                            <label className="label">Description</label>
                                            <textarea type="text" 
                                            id="description" 
                                            value = {this.state.description} 
                                            onChange = {this.sessionInfo}
                                            className="input-field"></textarea>
                                            {this.validator.message('description', this.state.description, 'required')}
                                        </div>
                                        <div className="form-group"><span className="cover-border"></span>
                                            <label className="label">Level</label>
                                            <select className="input-field"
                                             id="exampleFormControlSelect1"
                                             value = {this.state.exampleFormControlSelect1}
                                             onChange = {this.sessionInfo}
                                             >
                                                <option>Pick a Difficulty level</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                            {this.validator.message('exampleFormControlSelect1', this.state.exampleFormControlSelect1, 'required|integer')}
                                            <span className="dropdown-icon"></span></div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group"><span className="cover-border"></span>
                                            <label className="label">When?</label>
                                            <input type="text" 
                                            id = "when" 
                                            value = {this.state.when}
                                            onChange = {this.sessionInfo}
                                            className="input-field"
                                            placeholder="Pick a date and time"
                                            disabled 
                                            />
                                             {this.validator.message('when', this.state.when, 'required')}
                                            {/* <span className="when-icon"></span> */}
                                            <Link to ="#" className="btn btn-primary when-icon" data-toggle="modal" data-target="#calenderModel"></Link>
                                            </div>
                                        <div className="form-group"><span className="cover-border"></span>
                                            <label className="label">How long?</label>
                                            <select className="input-field" 
                                            id="exampleFormControlSelect2"
                                            value = {this.state.exampleFormControlSelect2}
                                            onChange = {this.sessionInfo}>
                                                <option>Pick a Duration</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                            {this.validator.message('exampleFormControlSelect2', this.state.exampleFormControlSelect2, 'required|integer')}
                                            <span className="dropdown-icon"></span></div>
                                        <div className="form-group"><span className="cover-border"></span>
                                            <label className="label">Minimum Participants</label>
                                            <div className="">
                                                <input 
                                                type="number"
                                                className="input-field"
                                                id = "minimumParticipants"
                                                value = {this.state.minimumParticipants}
                                                onChange = {this.sessionInfo}
                                                placeholder="min 1" />
                                                {this.validator.message('minimumParticipants', this.state.minimumParticipants, 'required|integer|between:1,50')}
                                                <span className="signedup_2"></span></div>
                                        </div>
                                        <div className="form-group"><span className="cover-border"></span>
                                            <label className="label">Maximum Participants</label>
                                            <input 
                                            type = "number"
                                            className="input-field"
                                            id = "maximumParticipants" 
                                            value = {this.state.maximumParticipants} 
                                            onChange = {this.sessionInfo} />
                                            {this.validator.message('maximumParticipants', this.state.maximumParticipants, 'required|integer|between:1,50')}
                                            <span className="signedup_2"></span></div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="form-group input-txt">
                                            <label className="switch">
                                                <input type="checkbox" id = "searchParticipant"  checked={this.state.searchParticipant} onChange = {(e)=>{this.setState({[e.target.id]:!this.state.searchParticipant},()=>console.log('searchparticipant',this.state.searchParticipant))}} />
                                                <span className="slider round"></span>
                                            </label>
                                            <span>Show Participants Signed Up Count on Searches?</span><img src="images/bulb.png" className="ml-3 mb-2" alt="bulb-icon" />

                                        </div>

                                        <div className="form-group input-txt mt-2 mt-md-4 mt-lg-5">
                                            <label className="switch">
                                                <input type="checkbox" id = "sessionCharge" defaultChecked = {this.state.sessionCharge} onChange = {(e)=>this.setState({[e.target.id]:!this.state.sessionCharge},()=>console.log("sessionCharge",this.state.sessionCharge))} /><span className="slider round"></span></label><span>Charging for Session?</span>
                                                {this.state.sessionCharge?<p className="gray-text ml-5 mt-3 mb-4">You have enabled it in the Channel</p>:''}
                                        </div>
                                        
                                        {this.state.sessionCharge?
                                        <div className="form-group w-50 ml-5"><span className="cover-border"></span>
                                            <label className="label">Charge amount</label>
                                            <div className="">
                                                <input 
                                                type="text"
                                                className="input-field"
                                                id = "amountCharge"
                                                value = {this.state.amountCharge}
                                                onChange = {this.sessionInfo}
                                                placeholder="Enter amount" />
                                                {this.validator.message('amountCharge', this.state.amountCharge, 'required|integer')}
                                                <span className="dollar"></span></div>
                                             </div>:''}


                                        <div className="form-group input-txt">
                                            <label className="switch">
                                                <input type="checkbox" id = "orderWine" defaultChecked = {this.state.orderWine} onChange = {(e)=>this.setState({[e.target.id]:!this.state.orderWine},()=>console.log("orderWine",this.state.orderWine))} />
                                                <span className="slider round"></span>
                                            </label>
                                            <span>Allow Participants To Order wine at end of session</span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gray-box2">
                    <div className="session">
                        <h3 className="info"><img src="images/reminder.png" className="mr-3 mb-2" alt="reminder-icon" />Reminders</h3></div>
                    <div className="container-fluid register-form">
                        <div className="form">
                            <div className="form-content">
                                <div className="row">
                                    <div className="col-md-4">
                                        <p className="text1 mb-4">for Hosts prior to start of Session</p>
                                        <div className="form-group mt-2"><span className="cover-border"></span>
                                            <label className="label">Enter a value in Minutes</label>
                                            <input type="number"  id ="hostSessionStart" value = {this.state.hostSessionStart} onChange = {this.sessionInfo} className="input-field" min = {1} max = {60} /><span className="clock-icon"></span></div>
                                        <p className="text1 mb-4">Sign up Cut off Date/Time</p>
                                        <div className="form-group mt-2"><span className="cover-border"></span>
                                            <label className="label">Pick Date/Time</label>

                                            <input 
                                            type="text"
                                            className="input-field"
                                            id="signUpDateTime"
                                            value = {this.state.signUpDateTime}
                                            onChange = {this.sessionInfo}
                                            placeholder=""
                                            disabled
                                            />
                                    {/* <span className="when-icon"></span> */}
                                    <Link to ="#" className="btn btn-primary when-icon" data-toggle="modal" data-target="#signUpCalenderModel"></Link>
                                    </div>
                                    </div>
                                    <div className="col-md-4">
                                        <p className="text1 mb-4">for Participants prior to start of Session</p>
                                        <div className="form-group mt-2"><span className="cover-border"></span>
                                            <label className="label">Enter a value in Minutes</label>
                                            <input type="number" id ="participantSessionStart" value = {this.state.participantSessionStart} onChange = {this.sessionInfo} className="input-field" min = {1} max = {60}/><span className="clock-icon"></span></div>
                                        <p className="text1 mb-4">for 'minimum not met'</p>
                                        <div className="form-group mt-2"><span className="cover-border"></span>
                                            <label className="label">Enter a value in days</label>
                                            <input type="number" id ="minimumNotMet" value = {this.state.minimumNotMet} onChange ={this.sessionInfo} className="input-field" min = {1} /><span className="clock-icon"></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-3 gray-box no-border-radius">
                    <div className="row">
                        <div className="session">
                            <h3 className="info"><img src="images/privacy.png" className="mr-3 mb-2" alt="privacy" />Privacy during Session</h3></div>
                        <div className="col-md-6">
                            <div className="form-group input-txt">
                                <label className="switch">
                                    <input 
                                    type="checkbox" 
                                    defaultChecked = {this.state.disableParticipant} 
                                    id = "disableParticipant" 
                                    onChange = {(e)=>this.setState({[e.target.id]:!this.state.disableParticipant},()=>console.log("disableParticipant",this.state.disableParticipant))}
                                     />
                                    <span className="slider round">
                                    </span>
                                    </label>
                                    <span>Participants allowed to disable DM with others
                                </span><img src="images/bulb.png" className="ml-3 mb-2" alt="bulb-icon" /></div>
                            <div className="form-group input-txt">
                                <label className="switch">
                                    <input 
                                    type="checkbox" 
                                    defaultChecked = {this.state.showParticipant}
                                    id = "showParticipant"
                                    onChange = {(e)=>this.setState({[e.target.id]:!this.state.showParticipant},()=>console.log("showParticipant",this.state.showParticipant))}
                                     /><span className="slider round"></span></label><span>Show Participants picture to other Participants?</span></div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group input-txt">
                                <label className="switch">
                                    <input
                                     type="checkbox" 
                                     defaultChecked = {this.state.allowParticipant}
                                     id = "allowParticipant"
                                     onChange = {(e)=> this.setState({[e.target.id]:!this.state.allowParticipant},()=>console.log("allowParticipant",this.state.allowParticipant))}
                                    /><span className="slider round"></span></label><span>Allow Participants to pick their own playlist?</span></div>
                        </div>
                    </div>
                </div>
                <div className="gray-box2">
                    <div className="session">
                        <h3 className="info"><img src="images/teamwork.png" className="mr-3 mb-2" alt="team" />Groups</h3></div>
                    <div className="col-md-6 pb-4">
                        <div className="form-group input-txt">
                            <label className="switch">
                                <input 
                                type="checkbox" 
                                id = "allowLocation"
                                defaultChecked = {this.state.allowLocation}
                                onChange = {(e)=>this.setState({[e.target.id]:!this.state.allowLocation},()=>console.log("allowLocation",this.state.allowLocation))} 
                                /><span className="slider round"></span></label><span>Allow Groups at a Location?</span> <img src="images/bulb.png" className="ml-3 mb-2" alt="bulb-icon" /></div>
                    </div>
                </div>
                <div className="p-3">
                    <div className="session">
                        <h3 className="info"><img src="images/user.png" className="mr-3 mb-2" alt="user-icon" />Select Host(s)</h3></div>
                    <div className="row pb-4">
                        <div className="col-md-4">
                            <a href="#" className="pick"><img src="images/picking.png" className="mr-2" alt="pick" /> Pick from existing hosts</a>
                        </div>
                        <div className="col-md-4">
                            <a href="#" className="pick"><img src="images/add.png" className="mr-2" alt="add-icon" /> Add a new Host</a>
                        </div>
                    </div>
                </div>
                <div className="gray-box2 pb-4">
                    <div className="session px-3">
                        <h3 className="info myheading"><img src="images/msg.png" className="mr-3 text_lft_icon" alt="script-icon" />Testing Script</h3>
                    </div>
                    <div className="px-3 pb-0 mt-2 add_wine_expand">
                        <div className="row mt-5">                        
                            <div className="col-lg-3 col-md-6 mt-3 mt-md-0">
                                <div className="form-group mb-0" data-toggle="modal" data-target="#myModal"><span className="cover-border"></span>
                                    <label className="label">Pick a Wine</label>
                                    <input type="text" className="input-field" /><span className="emojis-icon"></span>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6 mt-3 mt-md-0 pr-lg-4">
                              <div className="form-group mb-0" data-toggle="modal" data-target="#pick_emojis_modal"><span className="cover-border"></span>
                                    <label className="label">Pick Emojis (opotional)</label>
                                    <input type="text" className="input-field" /><span className="emojis-icon"></span>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 mt-3 mt-md-0 pl-lg-0">
                                <div className="d-flex">
                                   <div className="form-group mb-0 input-txt">
                                      <label className="switch mr-2">
                                          <input type="checkbox" />
                                          <span className="slider round"></span>
                                      </label>
                                    </div>
                                    <div><span className="hdng p-0">Allow Testers to score? (opotional)</span></div>
                              </div>
                            </div>                                              
                        </div>
                        <div className="border-bottom mt-3"></div>                    
                    </div>
                    <div className="px-3 pb-0 mt-2">
                      <div className="row mt-5">
                          <div className="col-lg-3 col-md-4 mt-3 mt-md-0">
                            <p className="hdng">Wine</p>
                            <p className="hdng1 mr-0 pl-3"><img src="images/eye.png" className="mr-3" alt="eye" />Lacrima Lui Ovidiu 2001</p>
                          </div>
                          <div className="col-lg-2 col-md-4 mt-3 mt-md-0">
                              <p className="hdng">Appearance</p>
                               <div className="color-icons pl-3">
                               {this.state.listAppearance.map((row,i) => (
                                <img src={row.image} className="mr-2" alt="cherry" key = {i} />
                                ))}
                                <span>...</span>
                              </div>
                          </div>
                          <div className="col-lg-2 col-md-4 mt-3 mt-md-0">
                              <p className="hdng">Aroma</p>
                              <div className="color-icons pl-3">
                              {this.state.listAroma.map((row,i) => (    
                                <img src={row.image} className="mr-2" alt="apple" key = {i} />
                                ))}
                                <span>...</span>
                              </div>
                          </div>
                          <div className="col-lg-2 col-md-4 mt-3 mt-md-0">
                              <p className="hdng">Palate</p>
                              <div className="color-icons pl-3">
                              {this.state.listPalate.map((row,i) => ( 
                                <img src={row.image} className="mr-2" alt=""  key = {i}/>
                                ))}   
                                <span>...</span>
                              </div>
                          </div>
                          <div className="col-lg-3 col-md-4 mt-3 mt-md-0">
                            <div className="d-flex">
                               <div className="form-group input-txt">
                                  <label className="switch mr-2">
                                      <input type="checkbox" />
                                      <span className="slider round"></span>
                                  </label>
                                </div>
                                <div><span className="hdng p-0">Allow Testers to score</span></div>
                                <div className="mt-2">
                                  <a href="#" className="mr-2 bg-circle"><i className="fa fa-bars" aria-hidden="true"></i></a>
                                </div>
                                  <div className="pr-3 mt-2">
                                    <a href="#" className="bg-circle"><i className="fa fa-minus" aria-hidden="true"></i>
                                    </a>
                                </div>
                          </div>
                      </div>
                  </div>
                  <div className="border-bottom mt-3"></div>  
                </div>
                <div className="p-3 pb-0 mt-2">                    
                      <div className="row mt-4">
                          <div className="col-lg-5 col-md-6 mt-3 mt-md-0">
                            <div className="form-group"><span className="cover-border"></span>
                                <label className="label">Description</label>
                                <input type="text" className="input-field" />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 mt-3 mt-md-0 px-lg-0">
                              <div className="form-group"><span className="cover-border"></span>
                                    <label className="label">Add Media</label>
                                    <input type="text" className="input-field" /><span className="browse">Browse</span>
                                </div>
                          </div>
                          <div className="col-lg-3 col-md-6 mt-3 mt-md-0">
                                <div className="form-group"><span className="cover-border"></span>
                                    <label className="label">Pick Emojis</label>
                                    <input type="text" className="input-field" /><span className="emojis-icon"></span>
                                </div>
                            </div>
                      </div>
                      <div className="border-bottom"></div>
                    </div>
                    <div className="p-3 pb-0">
                        <div className="row mt-4">
                          <div className="col-lg-6 col-md-6 mt-3 mt-md-0">
                            <p className="hdng">Description</p>
                            <p className="hdng1 font-18 mr-0 pl-3">In Hac Habitasse platea dictumst. Vivamus adipiscing ferm ...</p>
                          </div>
                          <div className="col-lg-3 col-md-6 mt-3 mt-md-0 px-lg-0">
                              <p className="hdng mb-2">Media Added</p>
                              <p><a href="#" className="purple_link">www.somelink.com/product</a></p>
                          </div>
                          <div className="col-lg-3 col-md-3 mt-3 mt-md-0">
                              <p className="hdng mb-2">Emogis</p>
                              <div className="overflow-hidden">
                                  <div className="color-icons pl-3 float-left">
                                    <img src="images/apple.png" className="mr-2" alt="" />
                                    <img src="images/grapes.png" className="mr-2" alt="" />
                                    <img src="images/cheese.png" className="mr-2" alt="" />
                                    <span>...</span>
                                  </div>
                                  <div className="float-right pr-3">
                                      <a href="#" className="mr-2 bg-circle"><i className="fa fa-bars" aria-hidden="true"></i></a>
                                      <a href="#" className="bg-circle"><i className="fa fa-minus" aria-hidden="true"></i></a>
                                    </div>
                              </div>
                          </div>
                      </div>
                      <div className="border-bottom mt-3">
                  </div>
                    <div className="px-3 pt-3">                    
                        <a href="#" className="activity-link add_wine"><span>+</span> Wine</a>
                        <a href="#" className="activity-link ml-5"><span>+</span> Info</a><img src="images/bulb.png" className="ml-3 mb-2" />
                    </div>
                </div>
                
                <div className="p-3 gray-box no-border-radius">
                    <div className="session">
                        <h3 className="info"><img src="images/shopping-icon.png" className="mr-3 mb-2" alt="shopping" />Shopping List</h3></div>
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <a href="#" className="pick" data-toggle="modal" data-target="#myModal3"><img src="images/picking.png" className="mr-2" alt="pick" /> Pick from existing list</a>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <a href="#" className="pick"><img src="images/add.png" className="mr-2" alt="add-icon" /> Add all Product from Script</a>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <a href="#" className="pick"><img src="images/add.png" className="mr-2" alt="add-icon" /> Add a new Product</a>
                        </div>
                    </div>
                    {this.state.shoppingList1.map((listInsertion,i) => (
                    (listInsertion.type && (listInsertion.Quantity!==0) && (listInsertion.itemNote!=="X")?
                    <div className="row mt-5" key = {i}>
                        <div className="col-md-4">
                            <div className="form-group"><span className="cover-border"></span>
                                <label className="label">item Name</label>
                                <input type="text" value  = {listInsertion.itemName} onChange = {(e)=>console.log(e.target.value)} className="input-field" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group"><span className="cover-border"></span>
                                <label className="label">Quantity</label>
                                <input type="text" value  = {listInsertion.Quantity} onChange = {(e)=>console.log(e.target.value)} className="input-field" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group"><span className="cover-border"></span>
                                <label className="label">Item notes</label>
                                <input type="text" value  = {listInsertion.itemNote} onChange = {(e)=>console.log(e.target.value)} className="input-field" />
                            </div>
                        </div>
                        <div className="col-md-1">
                        <Link to="wine-creation" className="bg-circle mt-3"><i id = {i} value = {listInsertion.itemName} onClick = {this.removeShoppingList} className="fa fa-minus" aria-hidden="true"></i></Link>
                        </div>
                        </div>
                    : '')
                    ))}
                   </div>

                <div className="p-3 gray-box2 no-border-radius">
                    <div className="session">
                        <h3 className="info"><img src="images/shopping_icon.png" className="mr-3 mb-2" alt="shopping" />Equipment List</h3></div>
                    <div className="row">
                        <div className="col-md-4">
                            <a href="#" className="pick" data-toggle="modal" data-target="#myModal2"><img src="images/picking.png" className="mr-2" alt="pick" /> Pick from existing list</a>
                        </div>
                        <div className="col-md-4">
                            <a href="#" className="pick"><img src="images/add.png" className="mr-2" alt="add-icon" /> Add a new item</a>
                        </div>
                    </div>
                    {this.state.equipmentList1.map((listInsertion,i) => (
                    (listInsertion.type && (listInsertion.Quantity!==0)?
                    <div className="row mt-5" key = {i}>
                        <div className="col-md-4">
                            <div className="form-group"><span className="cover-border"></span>
                                <label className="label">item Name</label>
                                <input type="text" value  = {listInsertion.name} onChange = {(e)=>console.log(e.target.value)} className="input-field" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group"><span className="cover-border"></span>
                                <label className="label">Quantity</label>
                                <input type="text" value = {listInsertion.Quantity} onChange = {(e)=>console.log(e.target.value)} className="input-field" />
                            </div>
                        </div>
                        <div className="col-md-1">
                        <Link to="wine-creation" className="bg-circle mt-3"><i id = {i} onClick = {this.removeEquipmentList} className="fa fa-minus" aria-hidden="true"></i></Link>
                        </div>
                    </div>
                    :'')
                    ))} 
                </div>
                
                
                <a href="#" className="save-btn btn btn-primary my-5 mx-auto">Save</a>
                <div className="modal" id="myModal">
                    <div className="modal-dialog dialogwidth">
                        <div className="modal-content modalbg">
                            <div className="modal-header headerborder">
                                <h4 className="modal-title white">Pick a Product</h4>
                                <button type="button" className="close white" data-dismiss="modal">×</button>
                            </div>
                            <div className="modal-body ">
                                <div className="card cardbg">
                                    <article className="card-group-item">
                                        <div className="filter-content">
                                            <div className="card-body ">
                                                <form>
                                                    <label className="form-check labelborder">
                                                        <input className="form-radio" type="radio" name="audio-type" id="lbl-communications" value="communications" /><span className="form-check-label">Mersedes Benz</span></label>
                                                    <label className="form-check labelborder">
                                                        <input className="form-radio" type="radio" name="audio-type" id="lbl-communications" value="communications" /><span className="form-check-label">Nissan Altima</span></label>
                                                    <label className="form-check labelborder">
                                                        <input className="form-radio" type="radio" name="audio-type" id="lbl-communications" value="communications" /><span className="form-check-label">Another Brand</span></label>
                                                </form>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <div className="modal-footer footerborder"></div>
                        </div>
                    </div>
                </div>
                {/* <div className="modal" id="myModal2">
                    <div className="">
                        <div className="modal-content equipmodalbg">
                            <div className="modal-header headerborder">
                                <div className="plusicon"><i className="fa fa-plus" aria-hidden="true"></i></div>
                                <h4 className="modal-title white">Pick from existing Equipments list</h4>
                                <button type="button" className="close white closepopup" data-dismiss="modal">×</button>
                            </div>
                            <div className="modal-body ">
                                <div className="card cardbg">
                                    <div className="searchbar">
                                        <input type="text" className="searchbarinput" placeholder="Search for Equipment" />
                                        <button className="inputbtn" type="button"></button>
                                    </div>
                                    <div className="checkboxdiv">
                                        <div className="mt-4"></div>
                                        <label className="custom-control custom-checkbox lebelheight">
                                            <input type="checkbox" className="form-radio" /><span className="checktxt">Vestibulum rutrum qu.</span></label>
                                        <label className="custom-control custom-checkbox lebelheight">
                                            <input type="checkbox" className="form-radio" /><span className="checktxt">Nam dapibus nisl vit.</span></label>
                                        <label className="custom-control custom-checkbox lebelheight">
                                            <input type="checkbox" className="form-radio" /><span className="checktxt">Donec facilisis tort.</span></label>
                                    </div>
                                    <div className="row checkboxdiv_3">
                                        <div className="col-md-4">
                                            <label className="custom-control custom-checkbox lebelheight">
                                                <input type="checkbox" className="form-radio" /><span className="checktxt">Curabitue lobortis.</span></label>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group"><span className="cover-border"></span>
                                                <input type="text" className="input-field-2" placeholder="Quantity" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="checkboxdiv_2">
                                        <label className="custom-control custom-checkbox lebelheight">
                                            <input type="checkbox" className="form-radio" /><span className="checktxt">Donec facilisis to.</span></label>
                                        <label className="custom-control custom-checkbox lebelheight">
                                            <input type="checkbox" className="form-radio" /><span className="checktxt">Vestibulum rutrum.</span></label>
                                        <label className="custom-control custom-checkbox lebelheight">
                                            <input type="checkbox" className="form-radio" /><span className="checktxt">Nam dapibus nisl vit.</span></label>
                                        <label className="custom-control custom-checkbox lebelheight">
                                            <input type="checkbox" className="form-radio" /><span className="checktxt">Fusce vehicula dolor.</span></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="donebg">
                            <button type="button" className="done">Done</button>
                        </div>
                    </div>
                </div> */}

                <div className="modal" id="myModal2">
                    <div className="">
                    <div className="modal-content equipmodalbg">
                    
                        <div className="modal-header headerborder">
                        <div className="plusicon"><i className="fa fa-plus" onClick = {this.addToEquipmentList} aria-hidden="true"></i></div>
                        <h4 className="modal-title white">Pick from existing Equipments list</h4>
                        <button type="button" 
                        onClick ={(e)=> 
                        { this.state.duplicateList.length>0? 
                            this.setState({searchEquipment:'',addToequipmentList1:[],equipmentList:this.state.duplicateList, function() { 
                            this.setState({
                            duplicateList:[]
                            },()=> console.log('Checking Duplicate List Value',this.state.duplicateList));
                            }},()=>console.log(this.state.duplicateList,'updateEquipemntList',this.state.equipmentList))
                        :this.setState({searchEquipment:'',equipmentList:this.state.equipmentList}) }} 
                        className="close white closepopup" 
                        data-dismiss="modal">&times;</button>
                        </div>
                        
                        <div className="modal-body ">
                        <div className="card cardbg">
                                
                                
                                <div className="searchbar">
                                <input type="text" 
                                id = "searchEquipment" 
                                value ={this.state.searchEquipment} 
                                onChange = {(e)=> this.setState({[e.target.id]:e.target.value},()=> console.log(this.state.searchEquipment))}  
                                className="searchbarinput" 
                                placeholder="Search for Equipment"/>
                                <button onClick = {this.searchEquipmentMethod} className="inputbtn" type="button">
                                    
                                </button>
                                </div>

                {/* 
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
                                </div> */}
                                {/* Pick from existing Shopp */}
                            {this.state.equipmentList.map((row,i) => (  
                                <div className="row checkboxdiv_3" key = {i}>
                                <div className="col-md-4">
                                    <label className="custom-control custom-checkbox lebelheight">
                                    <input type="checkbox" 
                                    name={row.name}
                                    id ={i} 
                                    checked={row.type} 
                                    onChange={this.handleSelect}
                                    className="form-radio"/>
                                    <span className="checktxt">{row.name}</span>
                                    </label>
                                </div>
                                {this.state.equipmentList[i].type ?
                                <div className="col-md-4">
                                    <div className="form-group"><span className="cover-border"></span>
                                    <input type="text" 
                                    id ={i}
                                    value={row.Quantity}
                                    onChange={this.handleShareholderNameChange(i)}
                                    className="input-field-2" 
                                    placeholder="Quantity"/></div>
                                </div>
                                : ''
                                }
                                </div>
                            ))}

                                
                                {/* <div className="checkboxdiv_2">
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

                        </div> */}
                        
                        </div>
                        
                    </div>
                    </div>
                    <div className="donebg"><button type="button" className="done">Done</button></div>

                    </div>
                </div>
                {/* Shopping List Start Here  */}
                <div className="modal" id="myModal3">
                    <div className="">
                    <div className="modal-content equipmodalbg">
                    
                        <div className="modal-header headerborder">
                        <div className="plusicon"><i onClick = {this.addToShoppingList} className="fa fa-plus" aria-hidden="true"></i></div>
                        <h4 className="modal-title white">Pick from existing Shopping list</h4>
                        <button type="button" onClick= {this.setShoppingList} className="close white closepopup" data-dismiss="modal">&times;</button>
                        </div>
                        
                        <div className="modal-body ">
                        <div className="card cardbg">
                                
                                
                                <div className="searchbar">
                                <input type="text" 
                                id = "shoppingListValue" 
                                value ={this.state.shoppingListValue} 
                                onChange = {(e)=> this.setState({[e.target.id]:e.target.value},()=> console.log(this.state.shoppingListValue))}  
                        
                                className="searchbarinput" 
                                placeholder="Search for Equipment"/>
                                <button className="inputbtn" onClick = {this.searchShoppingList} type="button">
                                    
                                </button>
                                </div>


                                {/* <div className="checkboxdiv">
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
                                </div> */}
                                {this.state.shoppingList.map((row,i) => (
                                <div className="row checkboxdiv_3" key = {i}>
                                <div className="col-md-4">
                                    <label className="custom-control custom-checkbox lebelheight">
                                    <input type="checkbox" 
                                    name={row.itemName}
                                    id ={i} 
                                    checked={row.type} 
                                    onChange={this.selectShoppingList}
                                    value = '20'
                                    className="form-radio"/>
                                    <span className="checktxt">{row.itemName}</span>
                                    </label>
                                </div>
                                
                                {/* <div className="col-md-3">
                                    <div className="form-group"><span className="cover-border"></span><input type="text" className="input-field-2" placeholder="Quantity"/></div>
                                </div>
                                <div className="col-md-5">
                                    <div className="form-group"><span className="cover-border"></span><input type="text" className="input-field-2" placeholder="Item Notes"/></div>
                                </div> */}
                                {this.state.shoppingList[i].type ?
                                <div className="col-md-3">
                                    <div  className="form-group"><span className="cover-border"></span>
                                    <input type="text" 
                                    id ={i}
                                    value={row.Quantity}
                                    onChange={this.handleShoppingQuantity(i)}
                                    className="input-field-2" 
                                    placeholder="Quantity"/></div>
                                    <div  className="col-md-5" className="form-group"><span className="cover-border"></span>
                                    <input type="text" 
                                    id ={i}
                                    value={row.itemNote}
                                    onChange={this.handleShoppingitemNote(i)}
                                    className="input-field-2" 
                                    placeholder="item Note"/></div>
                                </div>
                                
                                : ''
                                }
                                </div>
                                ))}
                                
                                {this.state.shoppingList.map((row,i) => (
                                <div className="checkboxdiv_2" key = {i}>
                            

                                {/* 
                                <label className="custom-control custom-checkbox lebelheight">
                                <input type="checkbox" 
                                    name={row.itemName}
                                    id ={i} 
                                    checked={row.type} 
                                    onChange={this.selectShoppingList}
                                    value = '20'
                                className="form-radio"/>
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
                                </div> */}

                        </div>
                        ))}
                        </div>
                        
                    </div>
                    </div>
                    <div className="donebg"><button type="button" className="done">Done</button></div>

                    </div>
                </div>       

                {/* Shopping List End Here  */}
{/* 
                <div className="modal" id="myModal3">
                    <div className="">
                        <div className="modal-content equipmodalbg">
                            <div className="modal-header headerborder">
                                <div className="plusicon"><i className="fa fa-plus" aria-hidden="true"></i></div>
                                <h4 className="modal-title white">Pick from existing Shopping list</h4>
                                <button type="button" className="close white closepopup" data-dismiss="modal">×</button>
                            </div>
                            <div className="modal-body ">
                                <div className="card cardbg">
                                    <div className="searchbar">
                                        <input type="text" className="searchbarinput" placeholder="Search for Equipment" />
                                        <button className="inputbtn" type="button"></button>
                                    </div>
                                    <div className="checkboxdiv">
                                        <div className="mt-4"></div>
                                        <label className="custom-control custom-checkbox lebelheight">
                                            <input type="checkbox" className="form-radio" /><span className="checktxt">Nam dapibus nisl vit.</span></label>
                                        <label className="custom-control custom-checkbox lebelheight">
                                            <input type="checkbox" className="form-radio" /><span className="checktxt">Donec facilisis tort.</span></label>
                                        <label className="custom-control custom-checkbox lebelheight">
                                            <input type="checkbox" className="form-radio" /><span className="checktxt">In hac habitasse pla.</span></label>
                                    </div>
                                    <div className="row checkboxdiv_3">
                                        <div className="col-md-4">
                                            <label className="custom-control custom-checkbox lebelheight">
                                                <input type="checkbox" className="form-radio" /><span className="checktxt">In hac habitasse pla.</span></label>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group"><span className="cover-border"></span>
                                                <input type="text" className="input-field-2" placeholder="Quantity" />
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="form-group"><span className="cover-border"></span>
                                                <input type="text" className="input-field-2" placeholder="Item Notes" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="checkboxdiv_2">
                                        <label className="custom-control custom-checkbox lebelheight">
                                            <input type="checkbox" className="form-radio" /><span className="checktxt">Mauris non tempor qu.</span></label>
                                        <label className="custom-control custom-checkbox lebelheight">
                                            <input type="checkbox" className="form-radio" /><span className="checktxt">Curabitur lobortis.</span></label>
                                        <label className="custom-control custom-checkbox lebelheight">
                                            <input type="checkbox" className="form-radio" /><span className="checktxt">Curabitur lobortis.</span></label>
                                        <label className="custom-control custom-checkbox lebelheight">
                                            <input type="checkbox" className="form-radio" /><span className="checktxt">Curabitur lobortis.</span></label>
                                        <div className="row checkboxdiv_3">
                                            <div className="col-md-4">
                                                <label className="custom-control custom-checkbox lebelheight">
                                                    <input type="checkbox" className="form-radio" /><span className="checktxt">Donec facilisis tort.</span></label>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="form-group"><span className="cover-border"></span>
                                                    <input type="text" className="input-field-2" placeholder="Quantity" />
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="form-group"><span className="cover-border"></span>
                                                    <input type="text" className="input-field-2" placeholder="Item UOM" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="donebg">
                            <button type="button" className="done">Done</button>
                        </div>
                    </div>
                </div> */}



                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">Pick a product</button>
            </div>
        </div>
    </div>
    <div className="modal show" id="pick_emojis_modal">
        <div className="modal-dialog emojis-dialogwidth">
            <div className="modal-content">
                <div className="modal-header modalbg">
                    <h4 className="modal-title white">Assign Emogis</h4>
                    <button type="button" className="close" data-dismiss="modal">×</button>
                </div>
                <form>
                <div className="modal-body modalbg">
                    
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card cardbg"> 
                                    <label className="form-check mb-4">
                                        <input className="form-radio" type="radio" name="" id="" value="" /><span className="form-check-label ml-3">APPEARANCE</span></label>                             
                                    <label className="form-check mb-4">
                                        <input className="form-radio" type="radio" name="" id="" value="" /><span className="form-check-label"><img src="images/cherry.png" className="mx-3" alt="" />Cherry</span></label>
                                    <label className="form-check mb-4">
                                        <input className="form-radio" type="radio" name="" id="" value="" /><span className="form-check-label"><img src="images/burgundy.png" className="mx-3" alt="" />Burgundy</span></label>
                                    <label className="form-check mb-4">
                                        <input className="form-radio" type="radio" name="" id="" value="" /><span className="form-check-label"><img src="images/auburn.png" className="mx-3" alt="" />Auburn</span></label>                                        
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card cardbg"> 
                                    <label className="form-check mb-4">
                                        <input className="form-radio" type="checkbox" name="audio-type" id="" value="" /><span className="form-check-label ml-3">AROMA</span></label>                             
                                    <label className="form-check mb-4">
                                        <input className="form-radio" type="checkbox" name="" id=""  value="" /><span className="form-check-label"><img src="images/apple.png" className="mx-3" />Apple</span></label>
                                    <label className="form-check mb-4">
                                        <input className="form-radio" type="checkbox" name="" id="" value="" /><span className="form-check-label"><img src="images/grapes.png" className="mx-3" alt=""  />Grapes</span></label>
                                    <label className="form-check mb-4">
                                        <input className="form-radio" type="checkbox" name="" id="" value="" /><span className="form-check-label"><img src="images/cheese.png" className="mx-3" alt=""  />Cheese</span></label> 
                                        <label className="form-check mb-4">
                                        <input className="form-radio" type="checkbox" name="" id="" value="" /><span className="form-check-label"><img src="images/cheese.png" className="mx-3" alt=""  />Parmezan</span></label> 
                                        <label className="form-check mb-4">
                                        <input className="form-radio" type="checkbox" name="" id="" value="" /><span className="form-check-label"><img src="images/apple.png" className="mx-3" alt=""  />Tomatapple</span></label>                                        
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card cardbg"> 
                                    <label className="form-check mb-4">
                                        <input className="form-radio" type="checkbox" name="" id="" value="" /><span className="form-check-label ml-3">PALATE</span></label>                             
                                    <label className="form-check mb-4">
                                        <input className="form-radio" type="checkbox" name="" id="" value="" /><span className="form-check-label"><img src="images/apple.png" className="mx-3" alt="" />Example</span></label>
                                    <label className="form-check mb-4">
                                        <input className="form-radio" type="checkbox" name="" id="" value="" /><span className="form-check-label"><img src="images/grapes.png" className="mx-3" alt="" />Another</span></label>
                                    <label className="form-check mb-4">
                                        <input className="form-radio" type="checkbox" name="" id="" value="" /><span className="form-check-label"><img src="images/cheese.png" className="mx-3" alt="" />Few Example</span></label> 
                                        <label className="form-check mb-4">
                                        <input className="form-radio" type="checkbox" name="" id="" value="" /><span className="form-check-label"><img src="images/cheese.png" className="mx-3" alt="" />Non Selected</span></label>                                     
                                </div>
                            </div>
                        </div>
                    
                </div>
                <div className="ooterborder text-center mt-4"><button className="btn-primary" data-dismiss="modal">SELECT</button></div>
                </form>
            </div>
        </div>
    </div>
    </div>
  <div className="modal" id="calenderModel">
  <div className="modal-dialog">
    <div className="modal-content">

      <div className="modal-header">
        <h4 className="modal-title">Select Duration</h4>
        <button type="button" className="close" data-dismiss="modal">&times;</button>
      </div>


      <div className="modal-body">
      <h3>Calender</h3>
      {/* <ReactLightCalendar startDate={startDate} endDate={endDate} onChange={this.onChange} range displayTime /> */}
      <ReactLightCalendar timezone = {this.state.localTimeZone}  
      disableDates={date => date <= (new Date().getTime())}  
      startDate={this.state.startDate} endDate={this.state.endDate} onChange={this.onChange} range = {true} displayTime ={true} />
      </div>
      </div>
  </div>
</div>

<div className="modal" id="signUpCalenderModel">
  <div className="modal-dialog">
    <div className="modal-content">

      <div className="modal-header">
        <h4 className="modal-title">Select Duration</h4>
        <button type="button" className="close" data-dismiss="modal">&times;</button>
      </div>


      <div className="modal-body">
      <h3>Calender</h3>
      {/* <ReactLightCalendar startDate={startDate} endDate={endDate} onChange={this.onChange} range displayTime /> */}
      <ReactLightCalendar timezone = {this.state.localTimeZone}  
      disableDates={date => date <= (new Date().getTime())}  
      startDate={this.state.cutoffStartDate} endDate={this.state.cutoffEndDate} onChange={this.signUpCutOff} range = {true} displayTime ={true} />
      </div>
      </div>calenderModel
  </div>
</div>  
   
	</div>
)
}
}

export default SessionWineCreation;