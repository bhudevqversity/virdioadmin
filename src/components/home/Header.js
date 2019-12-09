
import React, { Component } from "react";
import axios from "axios";
import uniqueId from 'lodash/uniqueId';
import Sortable from 'react-sortablejs';
import ReactLightCalendar from '@lls/react-light-calendar'
import '@lls/react-light-calendar/dist/index.css'
import SimpleReactValidator from 'simple-react-validator';
import { Link } from 'react-router';
import TimePicker from 'react-time-picker';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
import Calendar from 'react-calendar';
import $ from 'jquery';


//import DateTimeField from "react-bootstrap-datetimepicker";

class Header extends Component {
  
  constructor(props) {
    super(props);
    const date = new Date();
    const startDate = date.getTime();
    this.state = {
        sessions: [],
        hostList:[],
        equipmentList:[],
        // equipmentList:[{id: 1, interestId: 2, name: "trademill", equipment_description: "This is running equipments", status: 1,type:false,Quantity:0,Link:'X'},
        // {id: 2, interestId: 2, name: "bench", equipment_description: "This is", status: 1,type:false,Quantity:0,Link:'X'},
        // {id: 3, interestId: 2, name: "weight-lift", equipment_description: "This is weight lift", status: 1,type:false,Quantity:0,Link:'X'},
        // {id: 4, interestId: 2, name: "ball", equipment_description: "This is using to fit body", status: 1,type:false,Quantity:0,Link:'X'}],
        shoppingList:[],
        activityType:[],
        session_details:'',
        send_input:'',
        // time: new Date (date.getTime()).getHours()+':'+new Date (date.getTime()).getMinutes(),
        // time2: new Date (date.getTime()).getHours()+':'+new Date (date.getTime()).getMinutes(),
        time: '00:00',
        time2: '00:00',
        msg:'',
        sessionCalender: new Date(),
        reminderCalender: new Date(),
        urlLink:'',
        sess_name:'',
        sess_time:'',
        uname:'',
        //////////Calender /////////////
        startDate, // Today
        endDate: '', // Today + 6 days
        dateFormat : '',
        singUpEndDate:'',
        cutoffStartDate:date.getTime(),
        repeatSession:false,
        cutoffEndDate:'',
        cutoffDateTime:'',
        whenTime:'',
        sessionMonth:'',
        sessionYear:'',
        sessionDay:'',
        sessionTime:'',
        sessionHour:0,
        sessionMinute:0,
        sessionAttribute:[],
        sessionClass:[false,false,false,false,false,false,false,false,false,false],
        signUpSessionStatus:false,
        signUpRepeatSession:[],
        signUpClass:[false,false,false,false,false,false,false,false,false,false],
        reminderSessionTime:'',
        reminderMonth:'',
        reminderYear:'',
        reminderDay:'',
        reminderTime:'',
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
        exampleFormControlSelect2:'Pick a Duration',
        exampleFormControlSelect1 : 'Pick a Difficulty level',
        heartRateMonitor:true,
        zoneTracking : true,
        searchParticipant: false,
        sessionProperty:false,
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
       // equipmentList : [{ name: "Tom",type:false,Quantity:0,Link:'X' },{ name: "Tommy",type:false,Quantity:0,Link:'X' }],
        //hostList : [{ name: "Arjun",type:false,hostId:"A1001" },{name: "Lalit",type:false,hostId:"A1002"}],
        hostList2:[],
        equipmentList1 : [],
        duplicateList:[],
        addToequipmentList1 : [],
        searchEquipment: "",
       // shoppingList : [{ itemName: "Tom",type:false,Quantity:0,itemNote:"X" ,Link :"addLink"},{ itemName: "Tommy",type:false,Quantity:0,itemNote:"X" ,Link :"addLink"}],
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



modalClose = e => {
  $("#successResult").attr({'style':'display:none'});
}
 
componentDidMount(){
  this.fetchPrevSessionList();
  this.fetchExistingHostList();
  this.fetchExistingEquipments();
  this.fetchExistingShopping();
  this.fetchActivityType();

  var newactivitytype=[{id: 1, interestId: 2, activity_type: "Warm-Up",  status: 1},{id: 2, interestId: 2, activity_type: "Heivy-Weight",  status: 1},{id: 3, interestId: 2, activity_type: "Low-weight",  status: 1}, {id: 4, interestId: 2, activity_type: "Run", status: 1}];

       this.setState({
         activityType: newactivitytype,
         });

  }

 
  fetchActivityType() {
    
    let  interestId=2;   
    console.log('-----c----------',interestId);              
      axios      
      .get("/api/v1/session/"+interestId+"/activityType")          
      .then(res => {
        console.log('---------Interestactivity--------------',res.data.responseData);

      

        // this.setState({
        //  // activityType: res.data.responseData,
        //     });
           
      })
      .catch(err =>{
          console.log('----------there is problem------------');

      });

  }

  fetchExistingHostList() {
    
    let  channelId=1;   
    console.log('-----asdfghjkl----------',channelId);              
      axios      
      //.get("/api/v1/session/"+channelId+"/host")      
      .get("/api/v1/session/"+channelId+"/hosts-list1")          
      .then(res => {
        console.log('---------channelHost--------------',res.data.responseData);

        this.setState({
          hostList: res.data.responseData,
            });
      })
      .catch(err =>{
          console.log('----------there is problem------------');

      });

  }


  fetchExistingEquipments() {
    
    let  interestId=2;  

    // let eqarray = [{id: 1, interestId: 2, name: "trademill", equipment_description: "This is running equipments", status: 1},
    // {id: 2, interestId: 2, name: "bench", equipment_description: "This is", status: 1},
    // {id: 3, interestId: 2, name: "weight-lift", equipment_description: "This is weight lift", status: 1},
    // {id: 4, interestId: 2, name: "ball", equipment_description: "This is using to fit body", status: 1}]
    // let ka = []; 
    // for(let i=0;i<eqarray.length;i++){
    //   let n = {id:eqarray[i].id, interestId: eqarray[i].interestId, name: eqarray[i].name, equipment_description: eqarray[i].equipment_description, status: eqarray[i].status,type:false,Quantity:0,Link:'X'};
    //   ka.push(n);

    // }
    // this.setState({
    //   equipmentList:ka
    // },()=>console.log('------------------------',this.state.equipmentList))


    console.log('-----a----------',interestId);              
      axios            
      .get("/api/v1/session/"+interestId+"/equipments")          
      .then(res => {
        console.log('---------channelEquipments--------------',res.data.responseData);

      let eqarray=res.data.responseData;

      let ka = []; 
      for(let i=0;i<eqarray.length;i++){
        let n = {id:eqarray[i].id, interestId: eqarray[i].interestId, name: eqarray[i].name, equipment_description: eqarray[i].equipment_description, status: eqarray[i].status,type:false,Quantity:0,Link:'X'};
        ka.push(n);  
      }

        this.setState({
          equipmentList:ka
            });
            
      })
      .catch(err =>{
          console.log('----------there is problem------------');

      });

  }

  fetchExistingShopping() {
    
    let  interestId=2;  

    // let eqarray=[{id: 1, interestId: 2, name: "trademill", createdAt: "2019-09-02T08:23:17.000Z", status: 1},
    //     {id: 2, interestId: 2, name: "ball", createdAt: "2019-09-02T08:23:17.000Z", status: 1},
    //     {id: 3, interestId: 2, name: "weight-machine", createdAt: "2019-09-02T08:23:17.000Z", status: 1}
    //     ]
    // let ka = [];
    // for(let i=0;i<eqarray.length;i++){
    //   let n ={id:eqarray[i].id, interestId:eqarray[i].interestId , name:eqarray[i].name, createdAt:eqarray[i].createdAt , status:eqarray[i].status ,type:false,Quantity:0,itemNote:"X",Link :"addLink"}
    //   ka.push(n);

    // }
    // this.setState({
    //   shoppingList:ka
    // },()=>console.log('------------------------',this.state.shoppingList))


    console.log('-----b----------',interestId);              
      axios      
      .get("/api/v1/session/"+interestId+"/shoppinglist")          
      .then(res => {
        console.log('---------channelShopping--------------',res.data.responseData);

          let eqarray=res.data.responseData;

          let ka = [];
          for(let i=0;i<eqarray.length;i++){
            let n ={id:eqarray[i].id, interestId:eqarray[i].interestId , name:eqarray[i].name, createdAt:eqarray[i].createdAt , status:eqarray[i].status ,type:false,Quantity:0,itemNote:"X",Link :"addLink"}
            ka.push(n);

          }
        this.setState({
          shoppingList:ka
            });
            
      })
      .catch(err =>{
          console.log('----------there is problem------------');

      });

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
          exampleFormControlSelect2: res.data.responseData.duration,
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

onChange1 = date =>
{
  //2019-10-20
  const month = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']
  let getFullYear=new Date(date).getFullYear();
  let getMonth=month[(new Date(date).getMonth())];
  let getDate=new Date(date).getDate();
  console.log(getFullYear+'-'+getMonth+'-'+getDate,'--------------',new Date(date).getFullYear(),new Date(date).getDate(),new Date(date).getMonth());
//let sessionDate =new Date(this.state.when).getDate()+'-'++''new Date(this.state.when).getDate() 
this.setState({
  sessionCalender: date,
  sessionDay:getDate,
  sessionMonth:getMonth,
  sessionYear:getFullYear
},()=>console.log(this.state.sessionCalender))

}



onChange2 = date =>
{
  //2019-10-20
  const month = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']
  let getFullYear=new Date(date).getFullYear();
  let getMonth=month[(new Date(date).getMonth())];
  let getDate=new Date(date).getDate();
  console.log(getFullYear+'-'+getMonth+'-'+getDate,'--------------',new Date(date).getFullYear(),new Date(date).getDate(),new Date(date).getMonth());
//let sessionDate =new Date(this.state.when).getDate()+'-'++''new Date(this.state.when).getDate() 
this.setState({
  reminderCalender: date,
  reminderDay:getDate,
  reminderYear:getFullYear,
  reminderMonth:getMonth
},()=>console.log(this.state.reminderCalender))

}

////for Reminder
timeset = time => {
  
  console.log(time.split(':')[0],time.split(':')[1]);
  
    let b = time.split(':')[1];
    let a = parseInt(time.split(':')[0]);
    b= parseInt(time.split(':')[1]);
    if(a==12 && b>0){
      a=a+ ' PM';
    }
    if(a>12 ){
      a=a-12+ ' PM';
    }
    if(a<12){
      a = a+' AM';
    }
    // if(b>59){
    //   b=0;
    //   time=parseInt(time.split(':')[0])+':'+b;
    // }else{
    //   time=parseInt(time.split(':')[0])+':'+parseInt(time.split(':')[1])
    // }
  // console.log(time1 ,'print')
this.setState(
  { time:time,
    reminderTime:a,
 },()=>console.log(this.state.time))}


// end
//For Session
timeset2 = time2 => {
  
  console.log(time2.split(':')[0],time2.split(':')[1]);
  
    let b = time2.split(':')[1];
    let a = parseInt(time2.split(':')[0]);
    b= parseInt(time2.split(':')[1]);
    if(a==12 && b>0){
      a=a+ ' PM';
    }
    if(a>12 ){
      a=a-12+' PM';
    }
    if(a<12){
      a = a+' AM';
    }
  // console.log(time1 ,'print')
this.setState(
  { time2:time2,
    sessionTime:a,
  //  when : this.state.when +' '+this.state.time2,
 },()=>console.log(this.state.time2))}
//end 

// hour value
forWineHour() {
  var arr = [];
    for (let i = 0; i <= 23; i++) {
        arr.push(<option key={i} value={i}>{i}</option>)
    }
  return arr; 
}

// minute value
forWineMinute() {
  var arr = [];
    for (let i = 0; i <= 59; i++) {
        arr.push(<option key={i} value={i}>{i}</option>)
    }
  return arr; 
}

// end time
sessionDate=(e)=>{
  let getFullYear=new Date(this.state.sessionCalender).getFullYear();
  let getMonth=(new Date(this.state.sessionCalender).getMonth())+1;
  let getDate=new Date(this.state.sessionCalender).getDate();
  this.setState({
    when:getFullYear+'-'+getMonth+'-'+getDate+' '+this.state.time2+':'+'00'
  })
  
}


reminderDate=(e)=>{
  let getFullYear=new Date(this.state.reminderCalender).getFullYear();
  let getMonth=(new Date(this.state.reminderCalender).getMonth())+1;
  let getDate=new Date(this.state.reminderCalender).getDate();
  this.setState({
    signUpDateTime:getFullYear+'-'+getMonth+'-'+getDate+' '+this.state.time+':'+'00'
  })
  
}


signUpCutOff = (cutoffStartDate, cutoffEndDate) => {
  const month = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']
  const cutoffDateTime = cutoffStartDate;
  let day;
  let year;
  let time;
  let t;
  const singUpEndDate = cutoffEndDate;
  if(this.state.singUpEndDate<cutoffEndDate){
    cutoffStartDate=cutoffEndDate
   console.log('next Date');
  }else
  { 
    console.log('previous date');
    cutoffEndDate=cutoffStartDate;
  }
  let dt2 = new Date(cutoffStartDate);
 cutoffStartDate=cutoffEndDate;
  this.setState({
    cutoffStartDate,
    cutoffEndDate,
    cutoffDateTime,
    singUpEndDate
  });
  let timeSelection =  new Date (dt2.getTime()).getHours() ;
  if(timeSelection>=13){
  timeSelection =  ((new Date (dt2.getTime()).getHours())-12) + ':' +new Date (dt2.getTime()).getMinutes()+ ':' +new Date (dt2.getTime()).getSeconds()+' PM';
  time = ((new Date (dt2.getTime()).getHours())-12)+' PM';
  }else {
  timeSelection =  new Date (dt2.getTime()).getHours() + ':' +new Date (dt2.getTime()).getMinutes()+ ':' +new Date (dt2.getTime()).getSeconds()+' AM';  
  time = new Date (dt2.getTime()).getHours()+' AM';
  }
  day = new Date (dt2.getTime()).getDate();
  year =new Date (dt2.getTime()).getFullYear();
  t= month[new Date (dt2.getTime()).getMonth()]; 
 
  dt2 = new Date (dt2.getTime()).getFullYear() +"-"+(new Date (dt2.getTime()).getMonth()+1)+"-"+new Date (dt2.getTime()).getDate()+" ";
  this.setState({
  signUpDateTime : dt2,
  reminderSessionTime :timeSelection,
  reminderMonth:t,
  reminderDay:day,
  reminderYear:year,
  reminderTime:time
  },()=>console.log('Duration ===================================>',this.state.when))
console.log('*****************',this.state.dateFormat);
}

signUpAttribute = (e) => {
  console.log(e.target.id);
  let x=2,n=0;
  console.log('e.target.id',e.target.id);
  let attributeArray = this.state.signUpRepeatSession;
  let classArray = this.state.signUpClass;
  for(let i =0 ;i<attributeArray.length;i++){
    if(e.target.id == attributeArray[i]){
     x=1;n=i;
    }
  }

  if(x==1){
    attributeArray.splice(n,1);
    classArray[e.target.name] = false;
    this.setState({
      signUpRepeatSession:attributeArray,
      signUpClass:classArray
      },()=>
      { console.log('add Attribute==>',this.state.signUpRepeatSession);
    });
  }
  else{
    attributeArray.push(e.target.id);
    classArray[e.target.name] = true;
    this.setState({
      signUpRepeatSession:attributeArray,
      signUpClass:classArray
      },()=>
      { console.log(this.state.signUpClass,'add Attribute==>',this.state.signUpRepeatSession);
    });
  }
  }
  sessionAttribute = (e) => {
    console.log(e.target.id);
    let x=2,n=0;
    console.log('e.target.id',e.target.id);
    let attributeArray = this.state.sessionAttribute;
    let classArray = this.state.sessionClass;
    for(let i =0 ;i<attributeArray.length;i++){
      if(e.target.id == attributeArray[i]){
       x=1;n=i;
      }
    }
  
    if(x==1){
      attributeArray.splice(n,1);
      classArray[e.target.name] = false;
      this.setState({
        sessionAttribute:attributeArray,
        sessionClass:classArray
        },()=>
        { console.log('add Attribute==>',this.state.sessionAttribute);
      });
    }
    else{
      attributeArray.push(e.target.id);
      classArray[e.target.name] = true;
      this.setState({
        sessionAttribute:attributeArray,
        sessionClass:classArray
        },()=>
        { console.log(this.state.sessionClass,'add Attribute==>',this.state.sessionAttribute);
      });
    }
  
    }
saveSessionCalenderDetail = (e) =>{
  console.log(this.state.sessionAttribute,this.state.sessionDuration,this.state.sessionFrequency);
}    
saveSignUpCalender = (e) => {
 console.log(this.state.signUpRepeatSession,this.state.signUpDuration,this.state.signUpFrequency);
}
onChange = (startDate, endDate) => {
  const month = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']
  let day;
  let year;
  let time;
  let t;
  const dateFormat = endDate;
 // let dt = new Date(startDate).toUTCString();
 console.log(new Date(startDate),'compare==========',new Date(endDate))
 if(this.state.dateFormat<endDate){
   startDate=endDate
  console.log('next Date');
 }else{console.log('previous date');
endDate=startDate
}
  //let dt2 = new Date(startDate);
  // dt = dt.split('GMT')
//  endDate = startDate;
 // startDate=endDate;
  let dt2 = new Date(startDate);
  this.setState({ startDate, endDate,dateFormat },
  ()=>console.log('sds',this.state.startDate,this.state.endDate));
 // let dt2 = new Date(endDate);
   let timeSelection =  new Date (dt2.getTime()).getHours() ;
  if(timeSelection>=13){
  timeSelection =  ((new Date (dt2.getTime()).getHours())-12) + ':' +new Date (dt2.getTime()).getMinutes()+ ':' +new Date (dt2.getTime()).getSeconds()+' PM';
  time = ((new Date (dt2.getTime()).getHours())-12)+' PM';
  }else {
  timeSelection =  new Date (dt2.getTime()).getHours() + ':' +new Date (dt2.getTime()).getMinutes()+ ':' +new Date (dt2.getTime()).getSeconds()+' AM';  
  time = new Date (dt2.getTime()).getHours()+' AM';
  }
  day = new Date (dt2.getTime()).getDate();
  year =new Date (dt2.getTime()).getFullYear();
  t= month[new Date (dt2.getTime()).getMonth()]; 
 
  dt2 = new Date (dt2.getTime()).getFullYear() +"-"+(new Date (dt2.getTime()).getMonth()+1)+"-"+new Date (dt2.getTime()).getDate()+" ";
  this.setState({
  when : dt2,
  whenTime :timeSelection,
  sessionMonth:t,
  sessionDay:day,
  sessionYear:year,
  sessionTime:time
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
        if(this.state.shoppingList1[i].name === shoppingContainer[e.target.id].name){
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
    if(this.state.duplicateShoppingList[i].name === this.state.shoppingList[0].name){
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
    if(this.state.shoppingList1[i].name === this.state.shoppingList[0].name){
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
      if((this.state.shoppingList[i].name===this.state.shoppingList1[l].name)){
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
  // return listItem.name.toLowerCase().search(
  //   this.state.searchEquipment.toLowerCase()) !== -1;
}
findShoppingList = (listItem) => {
  console.log(listItem,this.state.shoppingListValue)
  if (listItem.name === this.state.shoppingListValue) {
    console.log(listItem.type);
    return listItem};
  // return listItem.name.toLowerCase().search(
  //   this.state.shoppingListValue.toLowerCase()) !== -1;
}
removeShoppingList = (e) => {
  console.log('=====================================',e.target.id);
  console.log(e.target.value);
  var dataArray1 =  this.state.shoppingList;
  for(let i=0;i<this.state.shoppingList.length;i++) {
      if(this.state.shoppingList[i].name === this.state.shoppingList1[e.target.id].name){
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
  console.log('this.state.hostList',this.state.hostList);
  let hostarray = [];
  let x =2,n=0;
  hostarray = this.state.hostList2;

  console.log('*************lalit***********',hostContainer[e.target.id].userId);
  //hostContainer[e.target.id].type = !hostContainer[e.target.id].type;
  //if(hostContainer[e.target.id].type) {
    for(let i=0;i<hostContainer.length;i++){
      x=0;n=0;
     for(let l=0;l<hostarray.length;l++){
      if(hostarray[l] == hostContainer[e.target.id].userId ){
       x=1;n=l;
        console.log(false);
      //hostarray.splice(l,1);
     }
    }
    if(x===0){
      hostarray.push(hostContainer[e.target.id].userId);
    }
    if(x===1){
      hostarray.splice(n,1);
    }
    }
  //} 
  // else {
  //   console.log('else',hostarray);
  //   for(let i=0;i<hostContainer.length;i++){
  //    for(let l=0;l<hostarray.length;l++){
  //     if(hostarray[l] == hostContainer[e.target.id].hostId ){
  //      console.log(false);
  //     hostarray.splice(l,1);
  //    }
  //   }
  //   }
    
  //  }
  this.setState({
    hostList : hostContainer,
    hostList2:hostarray
    },()=>
    { console.log(this.state.hostList2,'setEuipmentContainer==>',this.state.hostList,);
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

handleShow=()=>{
  this.setState({
    onSave:false
  })
   console.log(this.state.onSave);
 }
 handleClose=(e)=>{
   this.textArea.select();
   document.execCommand('copy');
   e.target.focus();
   $("#link_generator").attr({'style':'display:none'});
   this.setState({
     onSave:false
   })
 }
////////////////Submit data
submitForm = (event) => {
 // alert('hi');
  event.preventDefault();
  //$("#link_generator").attr({'style':'display:block'});
  var activity_info = [];
  var activities = [];
  let input_result=[];
  let min_participants='';
  let max_participants='';
  this.state.onSave=true;
// console.log('-------munahostlist-----------',this.state.hostList)
//   var datavar=this.state.hostList;
//   datavar.forEach(ele => {
//     console.log('--------lalithostlist------------',ele.type)
//   if(ele.type == true)
//   {
//     console.log('--------lalithosttrue------------',ele.type)
//     this.setState({
//       hostList3: ele.userId
//     });
//   }

//   });
 // console.log('-------guduhostlist-----------',this.state.hostList3)

    const session ={
      channelId: 1006,
      name:this.state.session_details,
     // when:this.state.when,
     //start_date:"2019-10-20 15:06:01",
      start_date:this.state.when,
      description:this.state.description,
      //duration:this.state.exampleFormControlSelect2,
      duration:(parseInt(this.state.sessionHour)*60)+parseInt(this.state.sessionMinute),
      level:this.state.exampleFormControlSelect1,
      min_participants:this.state.minimumParticipants,
      max_participants:this.state.maximumParticipants,
      searchParticipant:this.state.searchParticipant,
      sessionProperty:this.state.sessionProperty,
      session_charge:this.state.sessionCharge,
      currency:"USD",
      hour:(parseInt(this.state.sessionHour)*60)+parseInt(this.state.sessionMinute),
      show_particpants_count:"false",
      amountCharge:this.state.amountCharge
      }
      const reminder = {
        host_reminder:this.state.hostSessionStart,
        participants_reminder:this.state.participantSessionStart,
         //cutoff_date_time:this.state.signUpDateTime,
        cutoff_date_time:"2019-11-2 15:06:01",
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
        shoppingList:this.state.shoppingList1
      }
      const equipment_list = {
        equipmentList:this.state.equipmentList1
      }
      const host_list = {
        hostList : this.state.hostList2
      }

      console.log("========sessioncreation222==================>",{shopping_list,equipment_list, activities,reminder,privacy,session,groups,script,host_list});
     
      if (this.validator.allValid()) {

        console.log("========sessioncreation111==================>",{shopping_list,equipment_list, activities,reminder,privacy,session,groups,script,host_list});

        

        if(this.state.minimumParticipants >= 1 && this.state.maximumParticipants <= 50 ){  


      let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTU3MTg0NTI0MiwiZXhwIjoxNTcxOTMxNjQyfQ.bt7j269i43_73TiyzrFOFWM6sTizdcaHn6i4Sjdwb3w";
      axios.post("/api/v1/session/create", {shopping_list,equipment_list, activities,reminder,privacy,session,groups,script,host_list})
      .then(res => {

        //console.log(res);

        console.log('=============lallittiwari12345===================>',res.data);

            if(res.data.responseMessage == "success")
            {
              // <div className="modal succ" id="successResult"></div>
             
            this.setState({
           // msg: "Session hasbeen created Successfully!!!!!!!",
            urlLink:res.data.responseData.urlcode,
            sess_name:res.data.responseData.sessionDt.name,
            sess_time:res.data.responseData.sessionDt.scheduleDate,
            uname:res.data.responseData.sessionDt.firstName,
          });

          $("#successResult").attr({'style':'display:block'});
           }else{

          this.setState({
            msg: "There Is a error in session creation",
          });

        }

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

    //const { activitytype } = this.state.activityType;

    console.log('----------activityType------------',this.state.activityType)
    let activitynewtype = '';
    activitynewtype =this.state.activityType.map((e, key) => {
      return (
      <option key={key} value={e.activity_type}>{e.activity_type}</option>
      );
  })


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

     // console.log('----------lalitsession------------------',this.state.hostList2);

    return (
	
      <div className="container-fluid">
        <div className="row top-header p-4">
          <div className="col-lg-2 d-flex d-md-block justify-content-center p-2">
            <img src="/images/login-logo.png" className="logo"  alt = '#'/>
          </div>
          <div className="col-lg-4 d-flex d-md-block justify-content-center p-4">
            <div className="user-info d-flex align-items-center">
              <img src="/images/attendee.png" className="user-avtar" alt = '#'/>
              <div className="pl-4">
                <h3>Welcome Arjun!</h3>
                <p>No Session coming up this week</p>
                {/* <p>Next Session, Wednesday, 24 July 2019</p> */}
              </div>
            </div>
          </div>
          <div className="col-lg-6 ">
            <div className="d-flex justify-content-between ">
              <div className="header-info-right">
                <p>Average Attendance</p>
                <h3>0%</h3>
              </div>
              <span className="border-right gray-border"></span>
              <div className="header-info-right">
                <p>Total Views</p>
                <h3>0</h3>
              </div>
              <span className="border-right gray-border"></span>
              <div className="header-info-right">
                <p>Total Revenue</p>
                <h3>$0</h3>
              </div>
              <span className="border-right gray-border"></span>
              <div className="message-notification">
                <img src="/images/message.png" alt = '#'/>
                <span className="message-count">0</span>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          <h4 className="text-white float-left pt-1 pl-2">CREATE SESSION</h4>
          <div className="d-flex flex-wrap float-right">
              <p className="float-right purple_text mr-4 bordr-right mb-0"><a href="#" className="purple_text" data-toggle="modal" data-target="#allprevsession">Copy Form...</a></p>
              <p className="float-right purple_text mr-4 ml-4 mb-0"><Link to="/DashboardLanding" className="purple_text">x</Link></p>
          </div>    
        </div>
        {/* <div className="overflow-hidden">
        <h4 className="text-white mb-0 mt-3 float-left">CREATE SESSION</h4>

        <a href="#" className="btn btn-primary mb-3 float-right" data-toggle="modal" data-target="#allprevsession"> copy from ....</a>
        </div> */}
      <div className="clearfix"></div>
        <div className="gray-box">
          <div className="row session mx-0">
            <h3 className="col-md-6 info"><img src="/images/information.png" className="mr-3 mb-2 text_lft_icon" alt="information" />Session Info</h3>   
            <div className="col-md-6" id="msg" style={{color:'green'}}>{this.state.msg}</div>                    
          </div>
          
         
          <div className="container-fluid register-form">
            <div className="form">
              <div className="form-content">
                <div className="row">
                  <div className="col-md-4 px-4">
                    <div className="form-group">
                      <span className="cover-border bg_gray_clr"></span>
                      <label className="label">Session Name</label>
                      <input type="text" className="input-field" id = "session_details" value= {this.state.session_details} onChange = {this.sessionInfo} placeholder="Session Name" />
                      {this.validator.message('session_details', this.state.session_details, 'required')}
                    </div>
                    <div className="form-group">
                      <span className="cover-border bg_gray_clr"></span>
                      <label className="label">Description</label>
                      <textarea type="text" id="description" value = {this.state.description} onChange = {this.sessionInfo} className="input-field"></textarea>
                      {this.validator.message('description', this.state.description, 'required')}
                    </div>									 
                    <div className="form-group">													
                      <span className="cover-border bg_gray_clr"></span>
                      <label className="label">Level</label>														
                      <select
                        className="input-field"
                        id="exampleFormControlSelect1"
                        value = {this.state.exampleFormControlSelect1}
                        onChange = {this.sessionInfo}
                      >
                        <option>Pick a Difficulty level</option>											
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advance</option>
                        {/* <option>5</option> */}
                      </select>
                      {/* {this.validator.message('exampleFormControlSelect1', this.state.exampleFormControlSelect1, 'required|integer')}						   */}
                  </div>
                  </div>
                  <div className="col-md-3 px-4">																 
                    <div className="form-group">
                      <span className="cover-border bg_gray_clr"></span>
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
                    {/* <div className="form-group">
                      <span className="cover-border bg_gray_clr"></span>
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
                      
                    </div> */}
                     <div className="row">
                      <div className="col-md-6 pr-md-2">
                        <div className="form-group"><span className="cover-border"></span>
                          <label className="label">Hours</label>
                          <select className="input-field" id="sessionHour" value={this.state.sessionHour} onChange={this.sessionInfo}>
                            {this.forWineHour()}
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6 pl-md-1">
                        <div className="form-group"><span className="cover-border"></span>
                          <label className="label">Minutes</label>
                            <select className="input-field" id="sessionMinute" value={this.state.sessionMinute} onChange={this.sessionInfo}>
                            {this.forWineMinute()}
                            </select>
                          </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <span className="cover-border bg_gray_clr"></span>
                      <label className="label">Minimum Participants</label>
                      <div className="">
                        <input
                          type="text"
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
                      <span className="cover-border bg_gray_clr"></span>
                      <label className="label">Maximum Participants</label>
                      <input type="text" id = "maximumParticipants" value = {this.state.maximumParticipants} onChange = {this.sessionInfo} className="input-field" placeholder="max 50"/>
                      {this.validator.message('maximumParticipants', this.state.maximumParticipants, 'required|integer')}
                      <span className="signedup_2"></span>
                    </div>
                  </div>
                  <div className="col-md-5 px-4">

                    <div className="form-group input-txt h-90">
                    <label className="switch">
                        <input type="checkbox" id = "sessionProperty"  checked={this.state.sessionProperty} onChange = {(e)=>{this.setState({[e.target.id]:!this.state.sessionProperty},()=>console.log('sessionProperty',this.state.sessionProperty))}}/>
                        <span className="slider round"></span>
                    </label>
                    
                    {this.state.sessionProperty?<span>Public Session</span>:<span>Private Session</span>}<img src="/images/bulb.png" className="ml-3 mb-2" />
                    </div>

                    <div className="form-group input-txt h-90">
                    <label className="switch">
                        <input type="checkbox" id = "searchParticipant"  checked={this.state.searchParticipant} onChange = {(e)=>{this.setState({[e.target.id]:!this.state.searchParticipant},()=>console.log('searchparticipant',this.state.searchParticipant))}}/>
                        <span className="slider round"></span>
                    </label>
                      <span>Show Participants Signed Up Count on Searches?</span><img src="/images/bulb.png" className="ml-3 mb-2" />
                    </div>
                    <div className="row">
                      <div className="col-lg-7 pr-0">
                          <div className="form-group input-txt h-90">
                              <label className="switch">
                                <input type="checkbox" id="sessionCharge" defaultChecked = {this.state.sessionCharge} onChange ={(e)=>this.setState({[e.target.id]:!this.state.sessionCharge})} />
                                <span className="slider round"></span>
                              </label>
                              <span>Charging for Session?</span>
                              {this.state.sessionCharge?<p className="gray-text ml-5 mt-2 mb-4">You have enabled it in the Channel</p>:''}
                          </div>
                      </div>
                      {this.state.sessionCharge?
                      <div className="col-lg-5">
                        <div className="form-group h-90"><span className="cover-border bg_gray_clr"></span>
                          <label className="label">Charge amount</label>
                          <div className=" mb-2 mt-2">
                            <input type="text" className="input-field" id="amountCharge" placeholder="Enter amount" value={this.state.amountCharge} onChange= {this.sessionInfo}/><span className="dollar"></span>
                          </div>
                        </div>
                      </div>
                      :''}
                    </div>

                    {/* <div className="form-group input-txt h-90">
                      <label className="switch">
                          <input type="checkbox" id = "sessionCharge" defaultChecked = {this.state.sessionCharge} onChange = {(e)=>this.setState({[e.target.id]:!this.state.sessionCharge},()=>console.log("sessionCharge",this.state.sessionCharge))} />
                          <span className="slider round"></span>
                      </label>
                      <span>Charging for Session?</span>
                      {this.state.sessionCharge?<p className="gray-text ml-5 mt-2 mb-4">You have enabled it in the Channel</p>:''}
                    </div>

                    {this.state.sessionCharge?
                    <div className="form-group w-50 ml-5 h-90 mt-2">
                      <span className="cover-border bg_gray_clr"></span>
                      <label className="label">Charge amount</label>
                      <div className="mt-4">
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
                    </div>:''} */}

                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gray-box2">
          <div className="session">
            <h3 className="info"><img src="/images/reminder.png" className="mr-3 mb-2" />Reminders</h3>
          </div>

          <div className="container-fluid register-form">
            <div className="form">
              <div className="form-content">
                <div className="row">
                  <div className="col-md-5 px-4">
                    <p className="text1 mb-38">for Hosts prior to start of Session</p>
                    <div className="form-group mt-2 w-75">
                      <span className="cover-border"></span>
                      <label className="label">Enter a value in Minutes</label>
                      <input type="text"  id ="hostSessionStart" value = {this.state.hostSessionStart} onChange = {this.sessionInfo} className="input-field" min = {1} max = {60}/>
                      {/* {this.validator.message('hostSessionStart', this.state.hostSessionStart, 'required|integer')} */}
                      <span className="clock-icon"></span>
                    </div>
                    <p className="text1 mb-38">Sign up Cut off Date/Time</p>
                    <div className="form-group mt-2 w-75">
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
                  <div className="col-md-5 px-4">
                    <p className="text1 mb-38">for Participants prior to start of Session</p>
                    <div className="form-group mt-2 w-75">
                      <span className="cover-border"></span>
                      <label className="label">Enter a value in Minutes</label>
                      <input type="text" id ="participantSessionStart" value = {this.state.participantSessionStart} onChange = {this.sessionInfo} className="input-field" min = {1} max = {60}/>
                      {/* {this.validator.message('participantSessionStart', this.state.participantSessionStart, 'required|integer')} */}
                      <span className="clock-icon"></span>
                    </div>
                    <p className="text1 mb-38">for 'minimum not met'</p>
                    <div className="form-group mt-2 w-75">
                      <span className="cover-border"></span>
                      <label className="label">Enter a value in days</label>
                      <input type="text" id ="minimumNotMet" value = {this.state.minimumNotMet} onChange ={this.sessionInfo} className="input-field" min = {1}/>
                      {/* {this.validator.message('minimumNotMet', this.state.minimumNotMet, 'required|integer')} */}
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
        <div className="session"><h3 className="info"><img src="/images/privacy.png" className="mr-3 mb-2" />Privacy during Session</h3></div>
        <div className="col-md-6 px-4">
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
                <img src="/images/bulb.png" className="ml-3 mb-2" />
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
            <div className="col-md-6 px-4">
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
          <div className="session"><h3 className="info"><img src="/images/teamwork.png" className="mr-3 mb-2" />Groups</h3></div>
          <div className="col-md-6 px-4">
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
          <div className="session"><h3 className="info"><img src="/images/user.png" className="mr-3 mb-2" />Select Host(s)</h3></div>
          <div className="px-3 pb-4">
          <div className="row">
            <div className="col-md-4">
                {/* <Link to="header" className="pick" data-target="#myHost"><img src="images/picking.png" className="mr-2" alt = '#' /> Pick from existing hosts</Link> */}
                <Link to ="FitnessSessionCreation" className="pick" data-toggle="modal" data-target="#myHost"><img src="/images/picking.png" className="mr-2" alt = '#'/> Pick from existing hosts</Link>
            </div>
            <div className="col-md-4 mt-3 mt-md-0 px-4">
                {/* <Link to ="FitnessSessionCreation" className="pick"><img src="/images/add.png" className="mr-2" alt = '#'/> Add a new Host</Link> */}
            </div>
          </div>
          </div>
          
        </div>
        {/* Script Start */}
        <div className="gray-box2 pb-4">
          <div className="session"><h3 className="info"><img src="/images/testing.png" className="mr-3 text_lft_icon" alt="script-icon" />Script</h3></div>
          <div className="row mx-0">
            <div className="col-md-5 px-4">
              <span className="white-text pl-0">Start next activity?</span>
              <Link to="FitnessSessionCreation" className="btn btn-primary text-uppercase mr-2">automatic</Link>
              <Link to="FitnessSessionCreation" className="btn btn-outline-secondary text-uppercase">manual</Link>
            </div>
            <div className="col-md-3 px-4 mt-3 mt-md-0">
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
            <div className="col-md-4 px-4">
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
          <div className="py-3 px-4">
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
                    <Link to="FitnessSessionCreation" className="mr-2 bg-circle"><i className="fa fa-bars"  onClick = {this.dragDrop} aria-hidden="true"></i></Link>
                    <Link to="FitnessSessionCreation" className="bg-circle"><i className="fa fa-minus" id ={i} onClick = {this.removeActivity} aria-hidden="true"></i></Link>
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
          <div className="py-3 px-4 activity-form mt-2">
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
                    {/* <select
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
                      </select> */}

                <select className="input-field" id="ActivityType" value = {this.state.ActivityType}  onChange = {(e)=>this.setState({[e.target.id]:e.target.value},()=>console.log('Activity Type',this.state.ActivityType))}>
                {activitynewtype}
                  </select>
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
                        <option>Time</option>
                        <option>Reps</option>
                      </select>
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
          <Link to="FitnessSessionCreation" className="activity-link pl-4"><span onClick = {this.addRow}>+</span> Activity</Link>
        </div>

        {/* Script End */}

        {/* Shopping List Start */}
        
        <div className="gray-box no-border-radius pb-2">
          <div className="session"><h3 className="info"><img src="/images/shopping-icon.png" className="mr-3 mb-2" />Shopping List</h3></div>
          <div className="px-4 pb-4">
            <div className="row pb-4">
              <div className="col-md-4">
                  <Link to ="FitnessSessionCreation" className="pick" data-toggle="modal" data-target="#myModal3"><img src="/images/picking.png" className="mr-2" alt = '#'/> Pick from existing list</Link>
              </div>
              <div className="col-md-4 mt-3 mt-md-0">
                  {/* <Link to="FitnessSessionCreation" className="pick"><img src="/images/add.png" className="mr-2" alt = '#'/> Add a new Product</Link> */}
              </div>
            </div>
          </div>
          {this.state.shoppingList1.map((listInsertion,i) => (
            (listInsertion.type && (listInsertion.Quantity!==0) && (listInsertion.itemNote!=="X")?
          <div className="row mt-4" key = {i}>
            <div className="col-md-2">
            <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">item Name</label>
                      <input type="text" value  = {listInsertion.name} onChange = {(e)=>console.log(e.target.value)} className="input-field" disabled/>
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
              <Link to="FitnessSessionCreation" className="bg-circle mt-3"><i id = {i} value = {listInsertion.name} onClick = {this.removeShoppingList} className="fa fa-minus" aria-hidden="true"></i></Link>
            </div>
          </div>
          : '')
          ))}
          
        </div>
        {/* Shopping List End  */}

        {/* Equipement List Start  */}
        <div className="gray-box2 no-border-radius">
          <div className="session"><h3 className="info"><img src="/images/shopping_icon.png" className="mr-3 mb-2" />Equipment List</h3></div>
          <div className="px-4 pb-4">
            <div className="row pb-4">
              <div className="col-md-4">
                  <Link to="FitnessSessionCreation" className="pick" data-toggle="modal" data-target="#myModal2"><img src="/images/picking.png" className="mr-2" alt = '#' /> Pick from existing list</Link>
              </div>
              <div className="col-md-4 mt-3 mt-md-0">
                  {/* <Link to ="FitnessSessionCreation" className="pick"><img src="/images/add.png" className="mr-2" alt = '#'/> Add a new item</Link> */}
              </div>
            </div>
          </div>
          {this.state.equipmentList1.map((listInsertion,i) => (
            (listInsertion.type && (listInsertion.Quantity!==0)?
          <div className="p-3" key = {i}>
          <div className="row mt-4 pb-4">
            
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
              <Link to="FitnessSessionCreation" className="bg-circle mt-3"><i id = {i} onClick = {this.removeEquipmentList} className="fa fa-minus" aria-hidden="true"></i></Link>
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
    {/* Equipement List End  */}

    <Link to ="FitnessSessionCreation" className="save-btn btn btn-primary my-5 mx-auto"   onClick={this.submitForm}>Save</Link>
    
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
  
  {/* Select Equipment List Start */}
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
                    <label className="custom-control custom-checkbox lebelheight pl-0">
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
  {/* Select Equipment List End */}

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
                    <label className="custom-control custom-checkbox lebelheight pl-0">
                      <input type="checkbox" 
                       name={row.userId}
                       id ={i} 
                      //  checked={row.type} 
                       onChange={this.selectHost}
                       className="form-radio"/>
                      <span className="checktxt">{row.username}</span>
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

{/*  Shopping List Selection Start */}

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
                  <div className="col-md-3">
                    <label className="custom-control custom-checkbox lebelheight pl-0">
                      <input type="checkbox" 
                       name={row.name}
                       id ={i} 
                       checked={row.type} 
                       onChange={this.selectShoppingList}
                       value = '20'
                      className="form-radio"/>
                      <span className="checktxt">{row.name}</span>
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
                    {/* <div  className="col-md-5" className="form-group"><span className="cover-border"></span>
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
                    placeholder="Add Link"/></div> */}
                  </div>
                  
                  : ''
                  }

                  {this.state.shoppingList[i].type ?
                  <div className="col-md-3">
                    <div  className="form-group"><span className="cover-border"></span>
                    <input type="text" 
                    id ={i}
                    value={row.itemNote}
                    onChange={this.handleShoppingitemNote(i)}
                    className="input-field-2" 
                    placeholder="item Note"/></div>
                    </div>
                   : ''}
                   {this.state.shoppingList[i].type ?
                  <div className="col-md-3">
                    <div  className="form-group"><span className="cover-border"></span>
                    <input type="text" 
                    id ={i}
                    value={row.Link}
                    onChange={this.handleShoppingLink(i)}
                    className="input-field-2" 
                    placeholder="Add Link"/></div>
                    </div>
                   : ''}


                </div>
                ))}
                
                {this.state.shoppingList.map((row,i) => (
                <div className="checkboxdiv_2" key = {i}>
               
        </div>
        ))}
        </div>
        
       </div>
      </div>
       {/* <div className="donebg"><button type="button" className="done">Done</button></div> */}

    </div>
  </div>

  {/* Shopping List Selection End */}
  
  
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
<div className="modal" id="linkGenerator">
  <div className="modal-dialog">
    <div className="modal-content">

      <div className="modal-header">
        <h4 className="modal-title text-white text-center">{this.state.Abhi}You have successfully created a session</h4>
        <button type="button" className="close" data-dismiss="modal">&times;</button>
      </div>


      <div className="modal-body">
        <h5 className="text-white">Congratulations ,you have created the session "Introduction to wine testing" to be hosted by Arjun on August 13th2019 12:30PM</h5>
        <h5 className="text-white"> You can start inviting Participants by sharing  the link below </h5><br></br>
        <div className="row" >
          <div className="form-group mb-5 m-auto"><span className="cover-border"></span>
            <label className="label">Link</label>
            <input type="text" 
            id ='Link'
            value='https://virdio.com'
            disabled
            className="input-field" />
          </div>
        </div>
    </div>

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
<div className="modal cal_modal" id="calenderModel">
<div className="modal-dialog d-md-flex d-block large_width1 mb-0">
    <div className="modal-content modalbg m-auto">
      <div className="modal-header px-4 pt-4 pb-0">
        <h4 className="white modal-title">Choose Date and Time</h4>
        <button type="button pr-3" className="close white closepopup" data-dismiss="modal">&times;</button>
      </div>
      <div className="modal-body">
      <h3>Calender</h3>
      
      {/* <ReactLightCalendar startDate={startDate} endDate={endDate} onChange={this.onChange} range displayTime /> */}
      {/* <ReactLightCalendar timezone = {this.state.localTimeZone}
      disableDates={date => date <= (new Date().getTime())}
      startDate={startDate} endDate={endDate} onChange={this.onChange} range = {true} displayTime ={true} /> */}

        <Calendar
           onChange={this.onChange1}
           value={this.state.sessionCalender}
           minDate={new Date()}
          // calendarType= "ISO 8601"
         />
      <div className="botm_container">
        <div className="row mt-4">
          <div className="col-md-5 mt-2 pl-4">
            <div className="form-group mb-0"><span className="cover-border"></span>
                <label className="label">Enter Time</label>
                {/* <input type="text" className="clockk input-field" id="timepicker1" placeholder="Time" /> */}
                <TimePicker
                  onChange={this.timeset2}
                  value={this.state.time2}
                  disableClock	={true}
                  />
                {/* <span className="clock-icon "></span> */}
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6 pr-4">
          <p className="mb-2 input-txt">On {this.state.sessionDay} {this.state.sessionMonth} {this.state.sessionYear}, at {this.state.sessionTime}</p>
          <div className="form-group input-txt mb-0">
              <label className="switch">
                  <input type="checkbox" 
                  id="repeatSession"
                  checked={this.state.repeatSession}
                  onChange={(e)=> this.setState({[e.target.id]:!this.state.repeatSession},()=>console.log(this.state.repeatSession))}
                  />
                  <span className="slider round"></span>
              </label>
              <span>This is a repeated session</span>
            </div>
            
          </div>
        </div>
      </div>
      </div>
        <div className="text-center position-absolute btn_btn1">
        {this.state.repeatSession?'':<button type="button" className="done mt-0" onClick={this.sessionDate} data-dismiss="modal">done</button>}
        </div>
      </div>
      {this.state.repeatSession?
      <div className="wd align-self-end d-none d-md-block"><img src="/images/path.png" className="w-100" /></div>:''}
      {this.state.repeatSession?
      <div className="modal-content modalbg align-self-end px-4 py-4 mt-2 mt-md-0">
      <div className="modal-header headerborder px-0">
        <h4 className="white modal-title">Repeat Session</h4>
      </div>
      <div className="modal-body px-0">
      <h5 className="white">Frequency</h5>
      <div className="d-flex flex-wrap">
      <a href="#" id='varietal' name='0' onClick = {this.sessionAttribute} className={(this.state.sessionClass[0]?"btn btn-primary":"")+" btn btn-outline-secondary text-uppercase mr-2 mt-2"}>varietal</a>
      <a href="#" id='Every day' name='1' onClick = {this.sessionAttribute} className={(this.state.sessionClass[1]?"btn btn-primary":"btn")+" btn-outline-secondary text-uppercase mr-2 mt-2"}>Every day</a>
      <a href="#" id='once a week' name='2' onClick = {this.sessionAttribute} className={(this.state.sessionClass[2]?"btn btn-primary":"btn")+" btn-outline-secondary text-uppercase mr-2 mt-2"}>once a week</a>
      <a href="#" id='twice a week' name='3' onClick = {this.sessionAttribute} className={(this.state.sessionClass[3]?"btn btn-primary":"btn")+" btn-outline-secondary text-uppercase mr-2 mt-2"}>twice a week</a>
      <a href="#" id='3 times a week' name='4' onClick = {this.sessionAttribute} className={(this.state.sessionClass[4]?"btn btn-primary":"btn")+" btn-outline-secondary text-uppercase mr-2 mt-2"}>3 times a week</a>
      <select className="custom_field mt-2 mb-0" 
      id="sessionFrequency"
      value = {this.state.sessionFrequency}
      onChange = {this.sessionInfo}>
        <option>custom</option>
        <option>1 week</option>
        <option>2 week</option>
        <option>3 week</option>
        <option>4 week</option>
        </select>
      </div>
      <h5 className="white mt-4">Duration</h5>
      <div className="d-flex flex-wrap">
      <a href="#" id='1 week' name='5' onClick = {this.sessionAttribute} className={(this.state.sessionClass[5]?"btn btn-primary":"")+" btn btn-outline-secondary text-uppercase mr-2 mt-2"}>1 week</a>
      <a href="#" id='2 weeks' name='6' onClick = {this.sessionAttribute} className={(this.state.sessionClass[6]?"btn btn-primary":"")+" btn btn-outline-secondary text-uppercase mr-2 mt-2"}>2 weeks</a>
      <a href="#" id='3 weeks' name='7' onClick = {this.sessionAttribute} className={(this.state.sessionClass[7]?"btn btn-primary":"")+" btn btn-outline-secondary text-uppercase mr-2 mt-2"}>3 weeks</a>
      <a href="#" id='4 weeks' name='8' onClick = {this.sessionAttribute} className={(this.state.sessionClass[8]?"btn btn-primary":"")+" btn btn-outline-secondary text-uppercase mr-2 mt-2"}>4 weeks</a>
      <a href="#" id='5 weeks' name='9' onClick = {this.sessionAttribute} className={(this.state.sessionClass[9]?"btn btn-primary":"")+" btn btn-outline-secondary text-uppercase mr-2 mt-2"}>5 weeks</a>
      <select className="custom_field mt-2 mb-0" 
      id="sessionDuration"
      value = {this.state.sessionDuration}
      onChange = {this.sessionInfo}
      >
        <option>custom</option>
        <option>1 week</option>
        <option>2 week</option>
        <option>3 week</option>
        <option>4 week</option>
        </select>
      </div>
      </div>
      <div className="text-center position-absolute btn_btn1">
          <button type="button" onClick={this.saveSessionCalenderDetail} className="done mt-0">save</button>
      </div>
     {/* <img src="images/path.png" className="small_cont" /> */}
      {/* <div className="modalbg small_cont"></div> */}
      </div>:''}
  </div>
</div>
 {/* Add a new Product End */}

 <div className="modal" id="link_generator" >
  <div className="modal-dialog small_width">
    <div className="modal-content">
      <div className="modal-header headerborder">
        <h4 className="modal-title text-white text-center">You have successfully created a session</h4>
       
      </div>
      <div className="modal-body">
      <h6 className="white text-center submit_congrat">Congratulations ,you have created the session "Introduction to wine testing" to be hosted by Arjun on August 13th2019 12:30PM</h6>
      <h6 className="white text-center submit_congrat">You can start inviting Participants by sharing  the link below </h6>
      
      <div className="form-group mb-0">
       
      <input type="text" ref={(textarea)=>this.textArea=textarea}  className="input-field2" placeholder="Session Name" value="https//virdio.com" onChange={(e)=>console.log()}/>
             
      </div>
      
    </div>
    <div className="fitness_save">
          <Link className="copy_link btn btn-primary mx-auto"   variant="secondary" onClick={this.handleClose}>
            Copy link
          </Link>
      </div>

       </div>
  </div>
</div> 
  

 {/* <Modal  size="sm" show={this.state.onSave} onHide={this.handleShow}>
    
    <Modal.Header className="text-center">
      <Modal.Title className="text-white h6">You have successfully created a session</Modal.Title>
    </Modal.Header>
      <Modal.Body>
        <p className="text-white text-center">Congratulations ,you have created the session "Introduction to wine testing" to be hosted by Arjun on August 13th2019 12:30PM. </p><br></br>
      <p className="text-white text-center">You can start inviting Participants by sharing the link below, you can also find this link in Session detail, from your dashboard.
      </p><br></br>
         <div className="col-md-12 m-auto">                           
          <div className="form-group">
           
            <input type="text" ref={(textarea)=>this.textArea=textarea}  className="input-field2" placeholder="Session Name" value="https//virdio.com" onChange={(e)=>console.log()}/>
              
          </div>
        </div>  
         
      </Modal.Body>
        <div className="fitness_save">
          <Button className="m-auto btn-primary pb-10 text-uppercase" variant="secondary" onClick={this.handleClose}>
            Copy link
          </Button>
      </div>
    
    
  </Modal> */}

  
{/* end */}
{/* Sign Up Calender Start */}
<div className="modal cal_modal" id="signUpCalenderModel">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="modal-title white">Select Duration</h4>
        <button type="button pr-3" className="close white closepopup" data-dismiss="modal">&times;</button>
      </div>
      {/* <div className="modal-body">
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
      </div> */}
      <div className="modal-body">
      <h3>Calender</h3>
      {/* <ReactLightCalendar startDate={startDate} endDate={endDate} onChange={this.onChange} range displayTime /> */}
      {/* <ReactLightCalendar timezone = {this.state.localTimeZone}
      disableDates={date => date <= (new Date().getTime())}
      startDate={this.state.cutoffStartDate} endDate={this.state.cutoffEndDate} onChange={this.signUpCutOff} range = {true} displayTime ={true} /> */}
      <Calendar
           onChange={this.onChange2}
           value={this.state.reminderCalender}
           minDate={new Date()}
          // calendarType= "ISO 8601"
         />
      <div className="botm_container">
        <div className="row mt-4">
        <div className="col-md-5 mt-2 pl-4">
            <div className="form-group mb-0"><span className="cover-border"></span>
                <label className="label">Enter Time</label>
                {/* <input type="text" className="clockk input-field" id="timepicker2" placeholder="Time" /> */}
                <TimePicker
                  onChange={this.timeset}
                  value={this.state.time}
                  disableClock	={true}
                  />
                {/* <span className="clock-icon "></span> */}
            </div>
          </div>
          <div className="col-md-7">
          <p className="mb-2 input-txt">On {this.state.reminderDay} {this.state.reminderMonth} {this.state.reminderYear}, at {this.state.reminderTime}</p>
          <div className="form-group input-txt">
              <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
              </label>
              <span>This is a repeated session</span>
            </div>
          </div>
        </div>
      </div>
      </div>
        <div className="text-center position-absolute btn_btn1">
        {this.state.signUpSessionStatus?'':<button type="button" className="done mt-0"onClick= {this.reminderDate} data-dismiss="modal">done</button>}
        </div>
      </div>
      {this.state.signUpSessionStatus?
      <div className="wd align-self-end d-none d-md-block"><img src="/images/path.png" className="w-100" /></div>:''}
      {this.state.signUpSessionStatus?
      <div className="modal-content modalbg align-self-end px-4 py-4 mt-2 mt-md-0">
      <div className="modal-header headerborder px-0">
        <h4 className="white modal-title">Repeat Session</h4>
      </div>
      <div className="modal-body px-0">
      <h5 className="white">Frequency</h5>
      <div className="d-flex flex-wrap">
      <a href="#" id='varietal' name='0' onClick = {this.signUpAttribute} className={(this.state.signUpClass[0]?"btn btn-primary":"")+" btn btn-outline-secondary text-uppercase mr-2 mt-2"}>varietal</a>
      <a href="#" id='Every day' name='1' onClick = {this.signUpAttribute} className={(this.state.signUpClass[1]?"btn btn-primary":"btn")+" btn-outline-secondary text-uppercase mr-2 mt-2"}>Every day</a>
      <a href="#" id='once a week' name='2' onClick = {this.signUpAttribute} className={(this.state.signUpClass[2]?"btn btn-primary":"btn")+" btn-outline-secondary text-uppercase mr-2 mt-2"}>once a week</a>
      <a href="#" id='twice a week' name='3' onClick = {this.signUpAttribute} className={(this.state.signUpClass[3]?"btn btn-primary":"btn")+" btn-outline-secondary text-uppercase mr-2 mt-2"}>twice a week</a>
      <a href="#" id='3 times a week' name='4' onClick = {this.signUpAttribute} className={(this.state.signUpClass[4]?"btn btn-primary":"btn")+" btn-outline-secondary text-uppercase mr-2 mt-2"}>3 times a week</a>
      <select className="custom_field mt-2 mb-0" 
      id="signUpFrequency"
      value = {this.state.signUpFrequency}
      onChange = {this.sessionInfo}
      >
        <option>custom</option>
        <option>1 week</option>
        <option>2 week</option>
        <option>3 week</option>
        <option>4 week</option>
        </select>
      </div>
      <h5 className="white mt-4">Duration</h5>
      <div className="d-flex flex-wrap">
      <a href="#" id='1 week' name='5' onClick = {this.signUpAttribute} className={(this.state.signUpClass[5]?"btn btn-primary":"")+" btn btn-outline-secondary text-uppercase mr-2 mt-2"}>1 week</a>
      <a href="#" id='2 weeks' name='6' onClick = {this.signUpAttribute} className={(this.state.signUpClass[6]?"btn btn-primary":"")+" btn btn-outline-secondary text-uppercase mr-2 mt-2"}>2 weeks</a>
      <a href="#" id='3 weeks' name='7' onClick = {this.signUpAttribute} className={(this.state.signUpClass[7]?"btn btn-primary":"")+" btn btn-outline-secondary text-uppercase mr-2 mt-2"}>3 weeks</a>
      <a href="#" id='4 weeks' name='8' onClick = {this.signUpAttribute} className={(this.state.signUpClass[8]?"btn btn-primary":"")+" btn btn-outline-secondary text-uppercase mr-2 mt-2"}>4 weeks</a>
      <a href="#" id='5 weeks' name='9' onClick = {this.signUpAttribute} className={(this.state.signUpClass[9]?"btn btn-primary":"")+" btn btn-outline-secondary text-uppercase mr-2 mt-2"}>5 weeks</a>
      <select className="custom_field mt-2 mb-0" 
      id="signUpDuration"
      value = {this.state.signUpDuration}
      onChange = {this.sessionInfo}
      >
        <option>custom</option>
        <option>1 week</option>
        <option>2 week</option>
        <option>3 week</option>
        <option>4 week</option>
        </select>
      </div>
      </div>
      <div className="text-center position-absolute btn_btn1">
          <button type="button" onClick = {this.saveSignUpCalender} className="done mt-0">save</button>
      </div>
     {/* <img src="images/path.png" className="small_cont" /> */}
      {/* <div className="modalbg small_cont"></div> */}
      </div>:''}
  </div>
</div>
{/* Sign up Calender Model End */}

<div className="modal" id="successResult">
  <div className="modal-dialog">
    <div className="modal-content equipmodalbg">

      <div className="modal-header headerborder">
        <h4 className="modal-title white">Success Result</h4>
        <button type="button" className="close white closepopup" onClick={this.modalClose.bind(this)} data-dismiss="modal">&times;</button>
      </div>


      <div className="modal-body">
        <p>Congratulation, You have created the session,"{this.state.sess_name}" to be hosted by {this.state.uname} on {this.state.sess_time}...
          you can start inviting the paticipants by sharingthe link below. you can also find this link in session details,
           from your Dashboard.
        </p>

      <input type="text" value = {this.state.urlLink} onChange = {(e)=>console.log(e.target.value)} className="input-field" />
      </div>


      {/* <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div> */}

    </div>
  </div>
</div> 

      </div>
    );
  }
}

export default Header;
