
import React, { Component } from "react";
import axios from "axios";
import uniqueId from 'lodash/uniqueId';
import Sortable from 'react-sortablejs';
import ReactLightCalendar from '@lls/react-light-calendar'
import '@lls/react-light-calendar/dist/index.css'
import SimpleReactValidator from 'simple-react-validator';
import { Link } from 'react-router'

import $ from 'jquery';
//import DateTimeField from "react-bootstrap-datetimepicker";

class Header extends Component {
  
  constructor(props) {
    super(props);
    const date = new Date();
    const startDate = date.getTime();
    this.state = {
        sessions: [],
        session_details:'',
        send_input:'',
        msg:'',
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
        ///////////session info state ////////////////
        sessionName:'',
        when:'',
        phoneNumber:'',
        description:'',
        minimumParticipants:'',
        maximumParticipants:'',
        min_participants : '',
        max_participants :'',
        sessionAmount:'',
        exampleFormControlSelect1:'Pick a Duration',
        exampleFormControlSelect2 : 'Pick a Difficulty level',
        heartRateMonitor:true,
        zoneTracking : true,
        searchParticipant: false,
        sessionCharge:false,
        disableParticipant:false,
        allowParticipant:false,
        showParticipant:false,
        amountCharge: '',
        hostSessionStart:'',
        participantSessionStart:'',
        minimumNotMet: '',
        signUpDateTime:'',
        /////////////Group Location//////////
        allowLocation:false,
        ////////////Script////////////
        scriptHeartRateMonitor : false,
        scriptZoneTracking:false,
        ////////////////Activity table row//////////////////////////
        ActivityName: '',
        ActivityType:2,
        DurationType:'',
        Count:'',
        Video:'',
        TargetBPM:'',
        TargetZone:'',
        tablerows:[
          // {
          //   "name": "Jumping",
          //   "attributes" : [
          //     {
          //      "attrKey": "Activity Type",
          //      "attrValue": "Warm Up",
          //      "orderNo": 1
          //     },
          //     {
          //      "attrKey": "Duration Type",
          //      "attrValue": "Time",
          //      "orderNo": 4
          //     },
          //     {
          //      "attrKey": "Count",
          //      "attrValue": 30,
          //      "orderNo": 5
          //     },
          //     {
          //      "attrKey": "Video",
          //      "attrValue": "NA",
          //      "orderNo": 2
          //     },
          //     {
          //      "attrKey": "Target BPM",
          //      "attrValue": "88 bpm",
          //      "orderNo": 6
          //     },
          //     {
          //      "attrKey": "Target Zone",
          //      "attrValue": "67%",
          //      "orderNo": 3
          //     }
          //   ]
          // } 
        ],
        ///////////////Equipment List
        selectedOption: null,
        selected: {},
        equipmentName : '',
        equipmentQunatity:'',
        equipmentArray : [],
        quantityValue:{},
        equipmentList : [{ name: "Tom",type:false,Quantity:0,Link:'X' },{ name: "Tommy",type:false,Quantity:0,Link:'X' }],
        hostList : [{ name: "Arjun",type:false,hostId:"A1001" },{name: "Lalit",type:false,hostId:"A1002"}],
        equipmentList1 : [],
        duplicateList:[],
        addToequipmentList1 : [],
        searchEquipment: "",
        shoppingList : [{ itemName: "Tom",type:false,Quantity:0,itemNote:"X" ,Link :"addLink"},{ itemName: "Tommy",type:false,Quantity:0,itemNote:"X" ,Link :"addLink"}],
        shoppingList1:[],
        duplicateShoppingList: [],
        shoppingListValue: "",
        validateList:'',
       // shareholders: [{ name: "" },{ name: "" },{ name: "" },{ name: "" }],
       shareholders: [{ name: "",type:false,Quantity:"1" },{ name: "",type:false,Quantity:"1" }],
        euipmentCheckBox : [false,false]
        //////////////////////////
    }
    this.setHeaderValue();
    this.validator = new SimpleReactValidator();    
}
 
componentDidMount(){
  this.fetchPrevSessionList();
  }

  fetchPrevSessionList() {
    
      let  channelId=1;   
      console.log(channelId);              
        axios      
        .get("/api/v1/session/"+channelId+"/channel")        
        .then(res => {
          console.log('---------forgotpasswd--------------',res.data.responseData)

          this.setState({
              sessions: res.data.responseData,
              });
              console.log('---------forgotsessions--------------',this.state.sessions)
        })
        .catch(err =>{
            console.log('there is problem');
            // dispatch({

            //   type: GET_ERRORS,
            //   payload: err.response.data
            // })
        });
  
    }

    onSessionChanged = (e) => {

      let sessionId=e.currentTarget.value;
      console.log('-------hi-----',sessionId)

      axios      
      .get("/api/v1/session/"+sessionId+"/sess")        
      .then(res => {
        console.log('---------SessionId--------------',res.data)

        this.setState({
          session_details: res.data.responseData.name,
          description: res.data.responseData.description,
          exampleFormControlSelect1: res.data.responseData.duration,
          minimumParticipants: res.data.responseData.minAttendee,
          amountCharge: res.data.responseData.chargeForSession,
          sessionCharge: res.data.responseData.sessionChargeAllowed == 1 ? true : false,
          exampleFormControlSelect1: res.data.responseData.level,
          maximumParticipants: res.data.responseData.maxAttendee,
          sessionParticipantDisableDM: res.data.responseData.participantDisableDM,
          hostSessionStart: res.data.responseData.hostReminder,
          participantSessionStart: res.data.responseData.participantReminder,
          minimumNotMet: res.data.responseData.minNotMetNoticeTime,
          scriptZoneTracking: res.data.responseData.zoneTracking == 1 ? true : false,
          scriptHeartRateMonitor: res.data.responseData.heartRateMonitor == 1 ? true : false,
          next_activity: "automatic",
         // signUpDateTime: res.data.responseData.cutOffTime,
        // req.body.session.session_charge == true ? 1 : 0,

        // next_activity : "automatic",
        // heart_rate_monitor:this.state.scriptHeartRateMonitor,
        // zone_tracking:this.state.scriptZoneTracking

          });
      })
      .catch(err =>{
          console.log('there is problem');
          // dispatch({

          //   type: GET_ERRORS,
          //   payload: err.response.data
          // })
      });

    }
//////////////////////////////Integration Api///////////////////////////////////
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
  dt2 = new Date (dt2.getTime()).getFullYear() +"-"+(new Date (dt2.getTime()).getMonth()+1)+"-"+new Date (dt2.getTime()).getDate()+" "+ new Date (dt2.getTime()).getHours() + ':' +new Date (dt2.getTime()).getMinutes()+ ':' +new Date (dt2.getTime()).getSeconds();
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
  dt2 = new Date (dt2.getTime()).getFullYear() +"-"+(new Date (dt2.getTime()).getMonth()+1)+"-"+new Date (dt2.getTime()).getDate()+" "+ new Date (dt2.getTime()).getHours() + ':' +new Date (dt2.getTime()).getMinutes()+ ':' +new Date (dt2.getTime()).getSeconds();
  this.setState({
  when : dt2
  },()=>console.log('Duration ===================================>',this.state.when))
console.log('*****************',this.state.dateFormat);

//   let dt = new Date(startDate).toUTCString();

//   console.log(typeof(startDate),'dt==',dt.split('GMT'));
//   dt = dt.split('GMT')
//   this.setState({ startDate, endDate },
// ()=>console.log('sds',this.state.startDate,this.state.endDate))


// this.setState({
//   when : dt[0]
// },()=>console.log('Duration ===================================>',this.state.when))
// console.log('*****************',dt);
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
////////////set data
sessionInfo = e =>{
  this.setState({
      [e.target.id] : e.target.value
  },()=>console.log('==========>',this.state))
}
///////////////Add row Activity table
addRow = () =>{
  // add new data from here    
  var newdata = {ActivityName:this.state.ActivityName,ActivityType:this.state.ActivityType,DurationType:this.state.DurationType,Count:this.state.Count,Video:this.state.Video,TargetBPM:this.state.TargetBPM,TargetZone:this.state.TargetZone}    
  //take the existing state and concat the new data and set the state again    
this.setState({ tablerows: this.state.tablerows.concat(newdata) });    
}
//////////////remove Activity
removeActivity = (e) => {
  console.log('=====================================',e.target);
  var dataArray = this.state.tablerows;
  dataArray.splice(e.target.id, 1);
  this.setState({
    tablerows:dataArray
  })
}
////////////////// shopping List
selectShoppingList =(e)=> {
  let shoppingContainer = this.state.shoppingList;
  shoppingContainer[e.target.id].type = !shoppingContainer[e.target.id].type;
  if(shoppingContainer[e.target.id].type) {
  } 
  else {
    shoppingContainer[e.target.id].Quantity = 0;
    shoppingContainer[e.target.id].itemNote = "X";
    shoppingContainer[e.target.id].Link = "addLink";
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
handleShoppingLink = idx => evt => {
  const newShareholders = this.state.shoppingList.map((shareholder, sidx) => {
    if (idx !== sidx) return shareholder;
    return { ...shareholder, Link: evt.target.value };
  });

  this.setState({ shoppingList: newShareholders },()=> {
    console.log('item Note',this.state.shoppingList[idx].Link)
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
      addToShoppingListArray[i].Link=this.state.shoppingList[0].Link;
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
    addToShoppingListArray[n].Link=this.state.shoppingList[0].Link;
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
findListIndex =(listItem) =>{
  console.log(listItem,this.state.searchEquipment)
  if (listItem.name === this.state.searchEquipment) {
    console.log(listItem.type);
    return listItem};
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
      dataArray1[i].Link = "addLink";
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
    equipmentContainer[e.target.id].Link='X';
    if(this.state.equipmentList1.length>0){
      this.state.equipmentList1.map((row,i)=>{
        if(row.name === equipmentContainer[e.target.id].name){
          arrayCheck = this.state.equipmentList1;
          arrayCheck[i].Quantity = 0;
          arrayCheck[i].Link = 'X';
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
selectHost = (e) => {
  
  let hostContainer = this.state.hostList;
  hostContainer[e.target.id].type = !hostContainer[e.target.id].type;
  if(hostContainer[e.target.id].type) {
     // equipmentContainer[e.target.id].name = e.target.name;
      //if(e.target.value===''){equipmentContainer[e.target.id].Quantity = 0}
    } 
  else {
   }
  this.setState({
    hostList : hostContainer,
    },()=>
    { console.log('setEuipmentContainer==>',this.state.hostList);
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
      addToEquipmentListArray[i].Link=this.state.equipmentList[0].Link;
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
    addToEquipmentListArray[n].Quantity=this.state.equipmentList[0].Quantity; // update
    addToEquipmentListArray[n].Link=this.state.equipmentList[0].Link;
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
        addToEquipmentListArray[n].Link = this.state.equipmentList[i].Link;
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
removeEquipmentList = (e) => {
console.log('=====================================',e.target);
  var dataArray1 =  this.state.equipmentList;
  this.state.equipmentList.map((row,i) => {
    if(row.name === this.state.equipmentList1[e.target.id].name){
    dataArray1[i].type=!dataArray1[i].type;
    dataArray1[i].Quantity = 0;
    dataArray1[i].Link = 'X';  
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

handleShareholderLink = idx => evt => {
  const newShareholders = this.state.equipmentList.map((shareholder, sidx) => {
    if (idx !== sidx) return shareholder;
    return { ...shareholder, Link: evt.target.value };
  });

  this.setState({ equipmentList: newShareholders },()=> {
    console.log('equipmentList',this.state.equipmentList)
  }
  );
};
////////////////Submit data
submitForm = (event) => {
  event.preventDefault();
  var activity_info = [];
  var activities = [];
  let input_result=[];
  let min_participants='';
  let max_participants='';
    const session ={
      channelId: 1006,
      name:this.state.session_details,
     // when:this.state.when,
     //start_date:"2019-10-20 15:06:01",
     start_date:this.state.when,
     description:this.state.description,
     duration:this.state.exampleFormControlSelect1,
      level:this.setState.exampleFormControlSelect2,
      min_participants:this.state.minimumParticipants,
      max_participants:this.state.maximumParticipants,
      searchParticipant:this.state.searchParticipant,
      session_charge:this.state.sessionCharge,
      currency:"USD",
      show_particpants_count:"false",
      amountCharge:this.state.amountCharge
      }
      const reminder = {
        host_reminder:this.state.hostSessionStart,
        participants_reminder:this.state.participantSessionStart,
         cutoff_date_time:this.state.signUpDateTime,
        //cutoff_date_time:"2019-11-2 15:06:01",
        min_participants_not_met:this.state.minimumNotMet
      }
      const privacy ={
        allow_participants_disable_dm:this.state.disableParticipant,
        show_part_pic_to_other_part:this.state.showParticipant,
        allow_participants_pick_playlist:this.state.allowParticipant
      }
      const groups = {
        allow_group_location : this.state.allowLocation
        }
      // const fitnessActivity = {
      //   fitnessActivity : this.state.tablerows
      // } 
      for(let v =0 ; v<this.state.tablerows.length;v++){
        console.log(this.state.tablerows[v]);
        let activity_data ={
          "name": this.state.tablerows[v].ActivityName,
          "attributes" : [
            {
             "attrKey": "Activity Type",
             "attrValue": this.state.tablerows[v].ActivityType,
             "orderNo": 1
            },
            {
             "attrKey": "Duration Type",
             "attrValue": this.state.tablerows[v].DurationType,
             "orderNo": 4
            },
            {
             "attrKey": "Count",
             "attrValue": this.state.tablerows[v].Count,
             "orderNo": 5
            },
            {
             "attrKey": "Video",
             "attrValue": this.state.tablerows[v].Video,
             "orderNo": 2
            },
            {
             "attrKey": "Target BPM",
             "attrValue": this.state.tablerows[v].TargetBPM,
             "orderNo": 6
            },
            {
             "attrKey": "Target Zone",
             "attrValue": this.state.tablerows[v].TargetZone,
             "orderNo": 3
            }
          ]
         } 
         activities.push(activity_data);
         console.log("activities",activities,'activity_data=======lalit222222===========',activity_data);   
      }
      const script ={
        next_activity : "automatic",
        heart_rate_monitor:this.state.scriptHeartRateMonitor,
        zone_tracking:this.state.scriptZoneTracking

      }
      const shopping_list ={
        shoppingList:this.state.shoppingList
      }
      const equipment_list = {
        equipmentList:this.state.equipmentList
      }
      const host_list = {
        hostList : this.state.hostList
      }

      console.log("========sessioncreation==================>",{host_list,shopping_list,equipment_list, activities,reminder,privacy,session,groups,script});
     
      if (this.validator.allValid()) {

        console.log("========sessioncreation111==================>",{shopping_list,equipment_list, activities,reminder,privacy,session,groups,script});

        

        if(this.state.minimumParticipants >= 1 && this.state.maximumParticipants <= 50 ){  


      let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTU3MTg0NTI0MiwiZXhwIjoxNTcxOTMxNjQyfQ.bt7j269i43_73TiyzrFOFWM6sTizdcaHn6i4Sjdwb3w";
      axios.post("/api/v1/session/create", { shopping_list,equipment_list, activities,reminder,privacy,session,groups,script})
      .then(res => {

        //console.log(res);

        this.setState({
          send_input: res.data,
          });
        input_result=this.state.send_input;
        console.log('=============lallittiwari===================>',input_result);


        let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTU3MTg0NTI0MiwiZXhwIjoxNTcxOTMxNjQyfQ.bt7j269i43_73TiyzrFOFWM6sTizdcaHn6i4Sjdwb3w";
      
        // axios.post("/api/v1/session/create",input_result,{headers : {'Authorization': token}})
         axios.post("/api/v1/session/create",this.state.send_input)
         .then(res => {
   
           console.log('=============lallittiwari12345===================>',res.data);

           if(res.data.responseMessage == "success")
           {
           this.setState({
            msg: "Session hasbeen created Successfully!!!!!!!",
          });
        }else{

          this.setState({
            msg: "There Is a error in session creation",
          });

        }

         })

      })
    }
    else {
      console.log('Wrong');
    }
    }else{

      console.log('----------------This is a error--------------------')
      this.validator.showMessages();
    // rerender to show messages for the first time
    // you can use the autoForceUpdate option to do this automatically`
    this.forceUpdate();
    }
    
    }


////////////////////////////////////////////////////////////////////////////////

  render() {
    let  arr =[];
    let allSessions = '';
    const { startDate, endDate } = this.state;

    allSessions = this.state.sessions.map((session, idx) => {
       
          const { id, Name, channelId, hostId, interestId } = session;
          return (
            <tr data-position="100000000000000" id={"online-user-row-"+id} key={idx}>
            <td>{idx+1}</td>
            <td>{session.name}</td>
           <td>{session.channelId}</td>
           <td>{session.hostId}</td>
             <td>{session.interestId}</td>
             <td><input type="radio" name="id" 
                            value={id}   
                            onChange={this.onSessionChanged} /></td>
            </tr>
          );
       
      })

      //console.log('----------lalitsession------------------',this.state.sessionCharge);

    return (
	
	
      <div className="container-fluid">
        <div className="row top-header p-4">
          <div className="col-lg-2 d-flex d-md-block justify-content-center p-2">
            <img src="/images/login-logo.png" className="logo"  alt = '#'/>
          </div>
          <div className="col-lg-4 d-flex d-md-block justify-content-center p-4">
            <div className="user-info d-flex align-items-center">
              <img src="images/attendee.png" className="user-avtar" alt = '#'/>
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
                <h3>{this.state.weeklyAttendance}%</h3>
              </div>
              <span className="border-right gray-border"></span>
              <div className="header-info-right">
                <p>Total Views</p>
                <h3>{this.state.totalViews}K</h3>
              </div>
              <span className="border-right gray-border"></span>
              <div className="header-info-right">
                <p>Total Revenue</p>
                <h3>${this.state.totalRevenue}</h3>
              </div>
              <span className="border-right gray-border"></span>
              <div className="message-notification">
                <img src="/images/message.png" alt = '#'/>
                <span className="message-count">{this.state.messageCount}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
        <h4 className="text-white mb-0 mt-3 float-left">CREATE SESSION</h4>

        <a href="#" className="btn btn-primary mb-3 float-right" data-toggle="modal" data-target="#allprevsession"> copy from ....</a>
        </div>
      <div class="clearfix"></div>
        <div className="gray-box">
          <div className="row session">
            <h3 className="col-md-6 info">Session Info</h3>   
            <div className="col-md-6" id="msg" style={{color:'green'}}>{this.state.msg}</div>                    
          </div>
          
         
          <div className="container-fluid register-form">
            <div className="form">
              <div className="form-content">
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">Session Name</label>
                      <input type="text" className="input-field" id = "session_details" value= {this.state.session_details} onChange = {this.sessionInfo} placeholder="Session Name" />
                      {this.validator.message('session_details', this.state.session_details, 'required')}
                    </div>
                    <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">Description</label>
                      <textarea type="text" id="description" value = {this.state.description} onChange = {this.sessionInfo} className="input-field"></textarea>
                      {this.validator.message('description', this.state.description, 'required')}
                    </div>									 
                    <div className="form-group">													
                      <span className="cover-border"></span>
                      <label className="label">Level</label>														
                      <select
                        className="input-field"
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
                      <span className="dropdown-icon"></span>
                  </div>
                  </div>
                  <div className="col-md-3">																 
                    <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">When?</label>
                      <input
                        type="text"
                        id = "when" 
                        value = {this.state.when}
                        onChange = {this.sessionInfo}
                        className="input-field"
                        placeholder="Pick a date and time"
                        disabled
                      />
                      {this.validator.message('when', this.state.when, 'required')}
                      {/* <span  className="when-icon"></span> */}
                      <a href="#" className="when-icon" data-toggle="modal" data-target="#calenderModel"></a>
                    </div>
                    <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">How long?</label>
                      <select
                        className="input-field"
                        id="exampleFormControlSelect2"
                        value = {this.state.exampleFormControlSelect2}
                        onChange = {this.sessionInfo}
                      >
                        <option>Pick a Duration</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                      {this.validator.message('exampleFormControlSelect2', this.state.exampleFormControlSelect2, 'required|integer')}
                      <span className="dropdown-icon"></span>
                    </div>
                    <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">Minimum Participants</label>
                      <div className="">
                        <input
                          type="number"
                          className="input-field"
                          id = "minimumParticipants"
                          value = {this.state.minimumParticipants}
                          onChange = {this.sessionInfo}
                          placeholder="min 1"
                          />
                        {this.validator.message('minimumParticipants', this.state.minimumParticipants, 'required|integer')}
                        <span className="signedup_2"></span>
                      </div>
                    </div>
                    <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">Maximum Participants</label>
                      <input type="number" id = "maximumParticipants" value = {this.state.maximumParticipants} onChange = {this.sessionInfo} className="input-field" placeholder="max 50"/>
                      {this.validator.message('maximumParticipants', this.state.maximumParticipants, 'required|integer')}
                      <span className="signedup_2"></span>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="form-group input-txt">
                    <label className="switch">
                        <input type="checkbox" id = "searchParticipant"  checked={this.state.searchParticipant} onChange = {(e)=>{this.setState({[e.target.id]:!this.state.searchParticipant},()=>console.log('searchparticipant',this.state.searchParticipant))}}/>
                        <span className="slider round"></span>
                    </label>
                      <span>Show Participants Signed Up Count on Searches?</span>
                    </div>
                    <div className="form-group input-txt">
                      <label className="switch">
                          <input type="checkbox" id = "sessionCharge" defaultChecked = {this.state.sessionCharge} onChange = {(e)=>this.setState({[e.target.id]:!this.state.sessionCharge},()=>console.log("sessionCharge",this.state.sessionCharge))} />
                          <span className="slider round"></span>
                      </label>
                      <span>Charging for Session?</span>
                      {this.state.sessionCharge?<p className="gray-text ml-5 mt-3 mb-4">You have enabled it in the Channel</p>:''}
                    </div>

                    {this.state.sessionCharge?
                    <div className="form-group w-50 ml-5">
                      <span className="cover-border"></span>
                      <label className="label">Charge amount</label>
                      <div className="">
                        <input
                          type="text"
                          className="input-field"
                          id = "amountCharge"
                          value = {this.state.amountCharge}
                          onChange = {this.sessionInfo}
                          placeholder="Enter amount"
                        />
                        {this.validator.message('amountCharge', this.state.amountCharge, 'required|integer')}
                        <span className="dollar"></span>
                      </div>
                    </div>:''}

                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gray-box2">
          <div className="session">
            <h3 className="info">Reminders</h3>
          </div>

          <div className="container-fluid register-form">
            <div className="form">
              <div className="form-content">
                <div className="row">
                  <div className="col-md-4">
                    <p className="text1 mb-4">for Hosts prior to start of Session</p>
                    <div className="form-group mt-2">
                      <span className="cover-border"></span>
                      <label className="label">Enter a value in Minutes</label>
                      <input type="number"  id ="hostSessionStart" value = {this.state.hostSessionStart} onChange = {this.sessionInfo} className="input-field" min = {1} max = {60}/>
                      <span className="clock-icon"></span>
                    </div>
                    <p className="text1 mb-4">Sign up Cut off Date/Time</p>
                    <div className="form-group mt-2">
                      <span className="cover-border"></span>
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
                      <a href ="#" className="when-icon" data-toggle="modal" data-target="#signUpCalenderModel"></a>
                    </div>
                    
                  </div>
                  <div className="col-md-4">
                    <p className="text1 mb-4">for Participants prior to start of Session</p>
                    <div className="form-group mt-2">
                      <span className="cover-border"></span>
                      <label className="label">Enter a value in Minutes</label>
                      <input type="number" id ="participantSessionStart" value = {this.state.participantSessionStart} onChange = {this.sessionInfo} className="input-field" min = {1} max = {60}/>
                      <span className="clock-icon"></span>
                    </div>
                    <p className="text1 mb-4">for 'minimum not met'</p>
                    <div className="form-group mt-2">
                      <span className="cover-border"></span>
                      <label className="label">Enter a value in days</label>
                      <input type="number" id ="minimumNotMet" value = {this.state.minimumNotMet} onChange ={this.sessionInfo} className="input-field" min = {1}/>
                      <span className="clock-icon"></span>
                    </div>
                    
                  </div>
                  

                  

                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 gray-box no-border-radius">
        <div className="row">
        <div className="session"><h3 className="info">Privacy during Session</h3></div>
        <div className="col-md-6">
              <div className="form-group input-txt">
              <label className="switch">
                  <input type="checkbox" 
                   defaultChecked = {this.state.disableParticipant} 
                   id = "disableParticipant" 
                   onChange = {(e)=>this.setState({[e.target.id]:!this.state.disableParticipant},()=>console.log("disableParticipant",this.state.disableParticipant))}
                  />
                  <span className="slider round"></span>
              </label>
                <span>Participants allowed to disable DM with others</span>
              </div>
              <div className="form-group input-txt">
                <label className="switch">
                    <input type="checkbox" 
                    defaultChecked = {this.state.showParticipant}
                    id = "showParticipant"
                    onChange = {(e)=>this.setState({[e.target.id]:!this.state.showParticipant},()=>console.log("showParticipant",this.state.showParticipant))}
                    />
                    <span className="slider round"></span>
                </label>
                <span>Show Participants picture to other Participants?</span>
                
              </div>
              
            </div>
            <div className="col-md-6">
            <div className="form-group input-txt">
                <label className="switch">
                    <input type="checkbox" 
                    defaultChecked = {this.state.allowParticipant}
                    id = "allowParticipant"
                    onChange = {(e)=> this.setState({[e.target.id]:!this.state.allowParticipant},()=>console.log("allowParticipant",this.state.allowParticipant))}
                    />
                    <span className="slider round"></span>
                </label>
                <span>Allow Participants to pick their own playlist?</span>
                
              </div>
            </div>
        </div>
        </div>
        <div className="gray-box2 pb-4">
          <div className="session"><h3 className="info">Groups</h3></div>
          <div className="col-md-6">
              <div className="form-group input-txt">
              <label className="switch">
                  <input type="checkbox" 
                  id = "allowLocation"
                  defaultChecked = {this.state.allowLocation}
                  onChange = {(e)=>this.setState({[e.target.id]:!this.state.allowLocation},()=>console.log("allowLocation",this.state.allowLocation))}
                  />
                  <span className="slider round"></span>
              </label>
                <span>Allow Groups at a Location?</span>
              </div>
              
              
            </div>
        </div>
        <div className="pb-4">
          <div className="session"><h3 className="info">Select Host(s)</h3></div>
          <div className="p-3">
          <div className="row">
            <div className="col-md-4">
                {/* <Link to="header" className="pick" data-target="#myHost"><img src="images/picking.png" className="mr-2" alt = '#' /> Pick from existing hosts</Link> */}
                <Link to ="header" className="pick" data-toggle="modal" data-target="#myHost"><img src="images/picking.png" className="mr-2" alt = '#'/> Pick from existing hosts</Link>
            </div>
            <div className="col-md-4">
                <Link to ="header" className="pick"><img src="images/add.png" className="mr-2" alt = '#'/> Add a new Host</Link>
            </div>
          </div>
          </div>
          
        </div>
        {/* Script Start */}
        <div className="gray-box2 pb-4">
          <div className="session"><h3 className="info">Script</h3></div>
          <div className="row">
            <div className="col-md-5">
              <span className="white-text">Start next activity?</span>
              <Link to="header" className="btn btn-primary text-uppercase mr-2">automatic</Link>
              <Link to="header" className="btn btn-outline-secondary text-uppercase">manual</Link>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                  <span className="cover-border"></span>
                  <label className="label">Pick Emojis</label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder=""
                  />
                  <span className="emojis-icon"></span>
                </div>
            </div>
            <div className="col-md-4">
              <div className="form-group input-txt">
                <label className="switch">
                    <input type="checkbox" 
                    id ="scriptHeartRateMonitor"
                    defaultChecked={this.state.scriptHeartRateMonitor}
                    onChange={(e)=>this.setState({[e.target.id]:!this.state.scriptHeartRateMonitor},()=>console.log("this.state.scriptHeartRateMonitor",this.state.scriptHeartRateMonitor))}
                    />
                    <span className="slider round"></span>
                </label>
                <span>Use Heart Rate Monitor</span>
              </div>
              <div className="form-group input-txt">
                <label className="switch">
                    <input type="checkbox" 
                    id ="scriptZoneTracking"
                    defaultChecked={this.state.scriptZoneTracking}
                    onChange={(e)=>this.setState({[e.target.id]:!this.state.scriptZoneTracking},()=>console.log("this.state.scriptZoneTracking",this.state.scriptZoneTracking))}
                    />
                    <span className="slider round"></span>
                </label>
                <span>Use Zone Tracking</span>
              </div>
            </div>
          </div>
          <div className="p-3">
            <h3 className="main-heading">Activities</h3>
            <table className="table text-gray activity-table">
              <thead>
                <tr>
                  <th>Activity name</th>
                  <th>Activity Type</th>
                  <th>Duration Type</th>
                  <th>Count</th>
                  <th>Video</th>
                  <th>Target BPM</th>
                  <th>Target Zone</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <Sortable
                  tag = "tbody"   // Defaults to "div"
                  onChange={(order, sortable, evt) => {
                    console.log('====================',order);
                    for(var i=0 ;i<order.length;i++){
                      console.log(order[i].split(','));
                      var splitData = order[i].split(',');
                      console.log(splitData[0]);
                      var appendData = {ActivityName:splitData[0],ActivityType:splitData[1],DurationType:splitData[2],Count:splitData[3],Video:splitData[4],TargetBPM:splitData[5],TargetZone:splitData[6]}
                      arr.push(appendData);
                      console.log('==============================arr',arr);
                    }
                    // console.log(order)
                    this.setState({ tablerows: arr },()=>console.log('*******',this.state.tablerows));
                }}
                >
                {this.state.tablerows.map((row,i) => (
                // <tbody key = {i}>
                //row.attributes.map(p =>(Object.values(p)))
                //row.attributes.map(p =>(Object.values(p)))
                <tr className = "item" key={uniqueId()} data-id={Object.values(row)} >
                  <td>{row.ActivityName}</td>
                  <td>{row.ActivityType}</td>
                  <td>{row.DurationType}</td>
                  <td>{row.Count}</td>
                  <td>{row.Video}</td>
                  <td>{row.TargetBPM}</td>
                  <td>{row.TargetZone}</td>
                  <td className="d-flex justify-content-center">
                    <Link to="header" className="mr-2 bg-circle"><i className="fa fa-bars"  onClick = {this.dragDrop} aria-hidden="true"></i></Link>
                    <Link to="header" className="bg-circle"><i className="fa fa-minus" id ={i} onClick = {this.removeActivity} aria-hidden="true"></i></Link>
                  </td>
                  {/* <td>{row.name}</td>
                  <td>{row.attributes[0].attrValue}</td>
                  <td>{row.attributes[1].attrValue}</td>
                  <td>{row.attributes[2].attrValue}</td>
                  <td>{row.attributes[3].attrValue}</td>
                  <td>{row.attributes[4].attrValue}</td>
                  <td>{row.attributes[5].attrValue}</td>
                  <td className="d-flex justify-content-center">
                    <a href="#" className="mr-2 bg-circle"><i className="fa fa-bars"  onClick = {this.dragDrop} aria-hidden="true"></i></a>
                    <a href="#" className="bg-circle"><i className="fa fa-minus" aria-hidden="true"></i></a>
                  </td> */}
                </tr>
                
                ))}
  
                </Sortable>
              {/* <tbody>
                <tr>
                  <td>Jumping</td>
                  <td>Warm Up</td>
                  <td>Time</td>
                  <td>30 sec</td>
                  <td>NA</td>
                  <td>88 bpm</td>
                  <td>67%</td>
                  <td className="d-flex justify-content-center">
                    <a href="#" className="mr-2 bg-circle"><i className="fa fa-bars" aria-hidden="true"></i></a>
                    <a href="#" className="bg-circle"><i className="fa fa-minus" aria-hidden="true"></i></a>
                  </td>
                </tr>
                
              </tbody> */}
            </table>
          </div>
          <div className="p-3 activity-form mt-2">
            <div className="border-bottom">
              <div className="row">

              
              <div className="col-md-2">
                <div className="form-group mt-3">
                    <span className="cover-border"></span>
                    <label className="label">Activity name</label>
                    <input type="text"
                    id = "ActivityName" 
                    value= {this.state.ActivityName} 
                    onChange = {(e)=> this.setState({[e.target.id]:e.target.value},()=> console.log('ActivityName',this.state.ActivityName))} 
                    className="input-field" />
                  </div>
                  
              </div>
              <div className="col-md-2">
                <div className="form-group mt-3">
                    <span className="cover-border"></span>
                    <label className="label">Activity type</label>
                    <select
                        className="input-field"
                        id="ActivityType"
                        value = {this.state.ActivityType}
                        onChange = {(e)=>this.setState({[e.target.id]:e.target.value},()=>console.log('Activity Type',this.state.ActivityType))}
                      >
                        <option></option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                      <span className="dropdown-icon"></span>
                  </div>
              </div>
              <div className="col-md-2">
                <div className="form-group mt-3">
                    <span className="cover-border"></span>
                    <label className="label">Duration type</label>
                    <select
                        className="input-field"
                        id="DurationType"
                        value = {this.state.DurationType}
                        onChange = {(e)=> this.setState({[e.target.id]:e.target.value},()=>console.log('Duration Type',this.state.DurationType))}
                      >
                        <option></option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                      <span className="dropdown-icon"></span>
                  </div>
              </div>
              <div className="col-md-1">
                <div className="form-group mt-3">
                    <span className="cover-border"></span>
                    <label className="label">Count</label>
                    <input type="text" 
                    id = "Count"
                    value = {this.state.Count}
                    onChange = {(e)=> this.setState({[e.target.id]:e.target.value},()=>console.log("Count",this.state.Count))}
                    className="input-field" />
                  </div>
                  
              </div>
              <div className="col-md-1">
                <div className="form-group mt-3">
                    <span className="cover-border"></span>
                    <label className="label">Video</label>
                    <input type="text" placeholder="browse" 
                    id = "Video"
                    value = {this.state.Video}
                    onChange = {(e)=> this.setState({[e.target.id]:e.target.value},()=>console.log("Video",this.state.Video))}
                    className="input-field" />
                  </div>
                  
              </div>
              <div className="col-md-2">
                <div className="form-group mt-3">
                    <span className="cover-border"></span>
                    <label className="label">Target BPM</label>
                    <input type="text" 
                    id = "TargetBPM"
                    value = {this.state.TargetBPM}
                    onChange = {(e)=> this.setState({[e.target.id]:e.target.value},()=>console.log("TargetBPM",this.state.TargetBPM))}
                    className="input-field" />
                  </div>
                  
              </div>
              <div className="col-md-2">
                <div className="form-group mt-3">
                    <span className="cover-border"></span>
                    <label className="label">Target Zone</label>
                    <input type="text" 
                    id = "TargetZone"
                    value = {this.state.TargetZone}
                    onChange = {(e)=> this.setState({[e.target.id]:e.target.value},()=>console.log("TargetZone",this.state.TargetZone))}
                    className="input-field" />
                  </div>
                  
              </div>
            </div>
            </div>
          </div>
          <Link to="header" className="activity-link pl-3"><span onClick = {this.addRow}>+</span> Activity</Link>
        </div>

        {/* Script End */}
        
        <div className="gray-box no-border-radius pb-2">
          <div className="session"><h3 className="info">Shopping List</h3></div>
          <div className="px-3 pb-5">
            <div className="row">
              <div className="col-md-4">
                  <Link to ="header" className="pick" data-toggle="modal" data-target="#myModal3"><img src="images/picking.png" className="mr-2" alt = '#'/> Pick from existing list</Link>
              </div>
              <div className="col-md-4">
                  <Link to="header" className="pick"><img src="images/add.png" className="mr-2" alt = '#'/> Add a new Product</Link>
              </div>
            </div>
          </div>
          {this.state.shoppingList1.map((listInsertion,i) => (
            (listInsertion.type && (listInsertion.Quantity!==0) && (listInsertion.itemNote!=="X")?
          <div className="row mt-5" key = {i}>
            <div className="col-md-2">
            <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">item Name</label>
                      <input type="text" value  = {listInsertion.itemName} onChange = {(e)=>console.log(e.target.value)} className="input-field" disabled/>
                    </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <span className="cover-border"></span>
                <label className="label">Quantity</label>
                <input type="text" value  = {listInsertion.Quantity} onChange = {(e)=>console.log(e.target.value)} className="input-field" disabled/>
              </div>
            </div>
            <div className="col-md-3">
            <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">Item  notes</label>
                      <input type="text" value  = {listInsertion.itemNote} onChange = {(e)=>console.log(e.target.value)} className="input-field" disabled/>
                    </div>
            </div>
            <div className="col-md-3">
            <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">Link</label>
                      <input type="text" value  = {listInsertion.Link} onChange = {(e)=>console.log(e.target.value)} className="input-field" disabled/>
                    </div>
            </div>
            <div className="col-md-1">
              <Link to="header" className="bg-circle mt-3"><i id = {i} value = {listInsertion.itemName} onClick = {this.removeShoppingList} className="fa fa-minus" aria-hidden="true"></i></Link>
            </div>
          </div>
          : '')
          ))}
          
        </div>
        <div className="gray-box2 no-border-radius">
          <div className="session"><h3 className="info">Equipment List</h3></div>
          <div className="px-3 pb-5">
            <div className="row">
              <div className="col-md-4">
                  <Link to="header" className="pick" data-toggle="modal" data-target="#myModal2"><img src="images/picking.png" className="mr-2" alt = '#' /> Pick from existing list</Link>
              </div>
              <div className="col-md-4">
                  <Link to ="header" className="pick"><img src="images/add.png" className="mr-2" alt = '#'/> Add a new item</Link>
              </div>
            </div>
          </div>
          {this.state.equipmentList1.map((listInsertion,i) => (
            (listInsertion.type && (listInsertion.Quantity!==0)?
          <div className="p-3" key = {i}>
          <div className="row mt-5 pb-4">
            
            <div className="col-md-4">
            {/* {this.state.equipmentList1.map((listInsertion) => (
             (listInsertion.type && (listInsertion.Quantity!=0)? */}
            <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">Item Name</label>
                      <input type="text" value  = {listInsertion.name} onChange = {(e)=>console.log(e.target.value)} className="input-field" disabled/>
                    </div>
              {/* :''
              )
             ))}       */}
            </div>
            <div className="col-md-3">
            {/* {this.state.equipmentList1.map((listInsertion,i) => (
            (listInsertion.type && (listInsertion.Quantity!=0)? */}
            <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">Quantity</label>
                      <input type="text" value = {listInsertion.Quantity} onChange = {(e)=>console.log(e.target.value)} className="input-field" disabled />
                      
                      {/* <a href="#" className="bg-circle mt-3"></a><i id = {i} onClick = {this.removeEquipmentList} className="fa fa-minus" aria-hidden="true"></i></a> */}
                    </div>
              {/* :''
              )
            ))}       */}
            
            
            </div>
            {/* Equipment Link Added Start*/}
            <div className="col-md-3">
              <div className="form-group">
                <span className="cover-border"></span>
                <label className="label">Link</label>
                <input type="text" value = {listInsertion.Link} onChange = {(e)=>console.log(e.target.value)} className="input-field" disabled />
                </div>
            </div>
            {/* Equipment Link  Added End */}
            <div className="col-md-1">
            {/* {this.state.equipmentList1.map((listInsertion,i) => (
            (listInsertion.type && (listInsertion.Quantity!=0)? */}
            <div className="form-group">
              <Link to="session-creation" className="bg-circle mt-3"><i id = {i} onClick = {this.removeEquipmentList} className="fa fa-minus" aria-hidden="true"></i></Link>
              </div>
              {/* :''
              )
            ))} */}
            </div>
          </div>
          </div>
          :'')
          ))} 
        </div>

        <Link to ="header" className="save-btn btn btn-primary my-5 mx-auto" onClick={this.submitForm}>Save</Link>
        <div className="modal" id="myModal">
    <div className="modal-dialog dialogwidth modal-dialog-centered">
      <div className="modal-content modalbg">
      
        <div className="modal-header headerborder">
          <h4 className="modal-title white">Pick a Product</h4>
          <button type="button" className="close white" data-dismiss="modal">&times;</button>
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
  

  <div className="modal" id="myModal2">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
      
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
                  {this.state.equipmentList[i].type ?
                  <div className="col-md-4">
                    <div className="form-group"><span className="cover-border"></span>
                    <input type="text" 
                    id ={i}
                    value={row.Link}
                    onChange={this.handleShareholderLink(i)}
                    className="input-field-2" 
                    placeholder="Add Link"/></div>
                  </div>
                         
                  : ''
                  }
                </div>
              ))}
         
        </div>
        
       </div>
      </div>
       {/* <div className="donebg"><button type="button" className="done">Done</button></div> */}

    </div>
  </div>

{/* Host Selection Start*/}
 <div className="modal" id="myHost">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
      
        <div className="modal-header headerborder">
          {/* <div className="plusicon"><i className="fa fa-plus"  aria-hidden="true"></i></div> */}
          <h4 className="modal-title white">Pick from existing host list</h4>
          <button type="button" className="close white closepopup" data-dismiss="modal">&times;</button>
        </div>
        
        <div className="modal-body ">
         <div className="card cardbg">
          {/* Pick from existing Shopp */}
              {this.state.hostList.map((row,i) => (  
                <div className="row checkboxdiv_3" key = {i}>
                  <div className="col-md-4">
                    <label className="custom-control custom-checkbox lebelheight">
                      <input type="checkbox" 
                       name={row.name}
                       id ={i} 
                       checked={row.type} 
                       onChange={this.selectHost}
                       className="form-radio"/>
                      <span className="checktxt">{row.name}</span>
                    </label>
                  </div>
                 </div>
              ))}
         
        </div>
        
       </div>
      </div>
       {/* <div className="donebg"><button type="button" className="done">Done</button></div> */}

    </div>
  </div>
{/* Host Selection End */}

  <div className="modal" id="calenderModal">
    <div className="">
     AK
      
      
    </div>
  </div>


  <div className="modal" id="myModal3">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
      
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

                {this.state.shoppingList.map((row,i) => (
                <div className="row checkboxdiv_3 mt-4" key = {i}>
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
                    <div  className="col-md-5" className="form-group"><span className="cover-border"></span>
                    <input type="text" 
                    id ={i}
                    value={row.Link}
                    onChange={this.handleShoppingLink(i)}
                    className="input-field-2" 
                    placeholder="Add Link"/></div>
                  </div>
                  
                  : ''
                  }
                </div>
                ))}
                
                {this.state.shoppingList.map((row,i) => (
                <div className="checkboxdiv_2" key = {i}>
               
        </div>
        ))}
        </div>
        
       </div>
      </div>
       <div className="donebg"><button type="button" className="done">Done</button></div>

    </div>
  </div>
  
  
  {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
    Pick a product
  </button> */}

  <div className="modal" id="allprevsession">
  <div className="modal-dialog">
    <div className="modal-content equipmodalbg">

      <div className="modal-header headerborder">
        <h4 className="modal-title white">Session List</h4>
        <button type="button" className="close white closepopup" data-dismiss="modal">&times;</button>
      </div>


      <div className="modal-body">


             <table className="table">
              <thead>
                <tr>
                  <th scope="col">&nbsp;</th>
                  <th scope="col" className="text-left">Name</th>
                  <th scope="col">ChannelId</th>
                  <th scope="col">HostId</th>
                  <th scope="col">interestId</th>
                </tr>
              </thead>
              <tbody id="online-user-list">
              {allSessions}                
              </tbody>
            </table>
      </div>


      {/* <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div> */}

    </div>
  </div>
</div>  

{/* <div className="modal" id="calenderModel">
  <div className="modal-dialog">
    <div className="modal-content">

      <div className="modal-header">
        <h4 className="modal-title">Select Duration</h4>
        <button type="button" className="close" data-dismiss="modal">&times;</button>
      </div>


      <div className="modal-body">
      <h3>Calender</h3>
      <ReactLightCalendar startDate={startDate} endDate={endDate} onChange={this.onChange} range displayTime />
    </div>

       </div>
  </div>
</div>   */}
<div className="modal" id="calenderModel">
  <div className="modal-dialog">
    <div className="modal-content modalbg">
      <div className="modal-header">
        <h4 className="white modal-title">Select Duration</h4>
        <button type="button" className="close white closepopup" data-dismiss="modal">&times;</button>
      </div>
      <div className="modal-body">
      <h3>Calender</h3>
      {/* <ReactLightCalendar startDate={startDate} endDate={endDate} onChange={this.onChange} range displayTime /> */}
      <ReactLightCalendar timezone = {this.state.localTimeZone}
      disableDates={date => date <= (new Date().getTime())}
      startDate={startDate} endDate={endDate} onChange={this.onChange} range = {true} displayTime ={true} />
      <div className="botm_container">
        <div className="row mt-4">
          <div className="col-md-5 mt-2">
            <div class="form-group"><span class="cover-border"></span>
                <label class="label">Enter Time</label>
                <input type="text" class="input-field" placeholder="max 50" />
                <span class="clock-icon"></span>
            </div>
          </div>
          <div className="col-md-7">
          <p className="mb-2 input-txt">On 22nd August 2019, at 12:00PM</p>
          <div class="form-group input-txt">
              <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
              </label>
              <span>This is a repeated session</span>
            </div>
          </div>
        </div>
      </div>
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
      
      {/* <ReactLightCalendar startDate={startDate} endDate={endDate} onChange={this.onChange} range displayTime /> */}
      <ReactLightCalendar timezone = {this.state.localTimeZone}
      disableDates={date => date < (new Date().getTime())}
      startDate={this.state.cutoffStartDate} endDate={this.state.cutoffEndDate} onChange={this.signUpCutOff} range = {true} displayTime ={true} />
      <div className="row">
      <div className="col-md-6">
      <div class="form-group"><span class="cover-border"></span>
        <label class="label">Enter Time</label>
        <input type="text" class="input-field" />
      </div>
      </div>
      </div>
      </div>
      </div>calenderModel
  </div>
</div>
      </div>
    );
  }
}

export default Header;
