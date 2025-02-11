
import React, { Component } from "react";
import axios from "axios";
import uniqueId from 'lodash/uniqueId';
import Sortable from 'react-sortablejs';
// import ReactLightCalendar from '@lls/react-light-calendar'
import '@lls/react-light-calendar/dist/index.css'
import SimpleReactValidator from 'simple-react-validator';
import { Link } from 'react-router';
import TimePicker from 'react-time-picker';
import Calendar from 'react-calendar';
import $ from 'jquery';
import {  browserHistory} from 'react-router'
//import DateTimeField from "react-bootstrap-datetimepicker";

class DemoSessionWine extends Component {
  
  constructor(props) {
    super(props);
    const date = new Date();
    // let minDate= new Date();
    // minDate.setDate(minDate.getDate() - 1)
    const startDate = date.getTime();
    this.state = {
        sessions: [],
        session_details:'',
       // disableDate:minDate.getTime(),
        something:[false,false,false,false,false,false],
        send_input:'',
        // time: new Date (date.getTime()).getHours()+':'+new Date (date.getTime()).getMinutes(),
        // time2: new Date (date.getTime()).getHours()+':'+new Date (date.getTime()).getMinutes(),
        time: '00:00',
        time2: '00:00',
        msg:'',
        sessionCalender: new Date(),
        reminderCalender: new Date(),
        //////////Calender /////////////y
        startDate, // Today
        endDate: '', // Today + 6 days
        dateFormat : '',
        singUpEndDate:'',
        cutoffStartDate:date.getTime(),
        cutoffEndDate:'',
        repeatSession:false,
        sessionHour:0,
        sessionMinute:0,
        sessionAttribute:[],
        sessionClass:[false,false,false,false,false,false,false,false,false,false],
        cutoffDateTime:'',
        whenTime:'',
        sessionMonth:'',
        sessionYear:'',
        sessionDay:'',
        sessionTime:'',
        reminderSessionTime:'',
        reminderMonth:'',
        reminderYear:'',
        signUpFrequency:'CUSTOM',
        signUpDuration:'CUSTOM',
        reminderDay:'',
        reminderTime:'',
        signUpSessionStatus:false,
        signUpRepeatSession:[],
        signUpClass:[false,false,false,false,false,false,false,false,false,false],
        localTimeZone:Intl.DateTimeFormat().resolvedOptions().timeZone,
        //////////header state////////
        totalViews : '',
        weeklyAttendance:'',
        totalRevenue:'',
        messageCount:'',
        ///////////session info state ////////////////
        sessionName:'',
        urlLink:'',
        sess_name:'',
        sess_time:'',
        uname:'',
        when:'',
        phoneNumber:'',
        description:'',
        minimumParticipants:'',
        maximumParticipants:'',
        sessionAmount:'',
        exampleFormControlSelect1:'Pick a Duration',
        exampleFormControlSelect2 : 'Pick a Difficulty level',
        sessionFrequency:'CUSTOM',
        sessionDuration:'CUSTOM',
        sessionProperty:false,
        heartRateMonitor:true,
        zoneTracking : true,
        searchParticipant: false,
        sessionCharge:false,
        disableParticipant:false,
        allowParticipant:false,
        showParticipant:false,
        amountCharge: '',
        orderWine:false,

        onDemand:false,
        
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
        tablerows2:[
          { id:0,
            wineChoice:"Tom",
            ActivityType:[{emoji:"images/cherry.png",type:true,name:"Cherry"},{emoji:"images/burgundy.png",type:false,name:"Burgundy"},{emoji:"images/auburn.png",type:false,name:"Auburn"}],
            DurationType:23,Count:"30sec",Video:"NA",TargetBPM:"90bpm",TargetZone:"90%"
          },
          {
          id:1,  
          wineChoice:"Tommy",
          ActivityType:[{emoji:"images/cherry.png",type:true,name:"Cherry"},{emoji:"images/burgundy.png",type:false,name:"Burgundy"},{emoji:"images/auburn.png",type:false,name:"Auburn"}],
          DurationType:23,Count:"30sec",Video:"NA",TargetBPM:"88bpm",TargetZone:"67%"},
        ],
        // tablerows:[
        //   {ActivityName:"Tom",ActivityType:"Moody",DurationType:23,Count:"30sec",Video:"NA",TargetBPM:"90bpm",TargetZone:"90%"},
        //   {ActivityName:"Tommy",ActivityType:"Moody",DurationType:23,Count:"30sec",Video:"NA",TargetBPM:"88bpm",TargetZone:"67%"}
        // ],
        ///////////////////duplicate tablerow////////////////////
        chooseWine: false,
        tablerows:[],
        tablerows1:[],
        tablerows3:[],
        wineInfoArray:[],
        wineDescription:'',
        wineMedia:'',
        emojiForWineProduct:0,
        productModelStatus:0,
        wineChoice:[{wine:"Lacrima Lui Ovidiu 2001"},{wine:"Lui  2001"}],
         //listAppearance:[{image:"images/cherry.png"},{image:"images/burgundy.png"},{image:"images/auburn.png"}],
         listAroma :[{image:"images/apple.png"},{image:"images/grapes.png"},{image:"images/cheese.png"}],
         listPalate:[{image:"images/smily.png"},{image:"images/smily.png"},{image:"images/smily.png"}],
        listAppearance:[],
         appearanceEmoji:[{emoji:"images/cherry.png",type:false,name:"Cherry"},
        {emoji:"images/burgundy.png",type:false,name:"Burgundy"},
        {emoji:"images/auburn.png",type:false,name:"Auburn"}],
        appearanceStatus:[],
        assignEmojiStatus:false,
        aromaStatus:false,
        palateStatus:false,
        //appearanceEmoji:[],

        aromaEmoji:[{emoji:"images/apple.png",type:false,name:"Apple"},
        {emoji:"images/grapes.png",type:false,name:"Grape"},
        {emoji:"images/cheese.png",type:false,name:"Cheese"}],

        //aromaEmoji:[],
        
        palateEmoji:[{emoji:"images/apple.png",type:false,name:"Example"},
        {emoji:"images/grapes.png",type:false,name:"Another"},
        {emoji:"images/cheese.png",type:false,name:"Few Example"}], 

        //palateEmoji:[], 


        // wineProduct:[{type:false,name:"Mersedes Benz"},
        // {type:false,name:"Nissan Altima"},
        // {type:false,name:"Another Brand"}],
        wineProduct:[],
        wineIndexValue:0,                          
        ///////////////Equipment List
        selectedOption: null,
        selected: {},
        equipmentName : '',
        equipmentQunatity:'',
        equipmentArray : [],
        quantityValue:{},
        equipmentList : [],
        equipmentList1 : [],
        duplicateList:[],
        addToequipmentList1 : [],
        searchEquipment: "",
        shoppingList : [],
        shoppingList1:[],
        duplicateShoppingList: [],
        shoppingListValue: "",
        validateList:'',
       // shareholders: [{ name: "" },{ name: "" },{ name: "" },{ name: "" }],
       shareholders: [{ name: "",type:false,Quantity:"1" },{ name: "",type:false,Quantity:"1" }],
        euipmentCheckBox : [false,false],
        ///////////Add a new Product/////////////////////////
        shoppingProductName:'',
        shoppingVarietal:'',
        shoppingPrice:'',
        shoppingPh:'',
        shoppingAppearance:'',
        shoppingAroma:'',
        shoppingPalate:'',
        shoppingTestingNote:'',
        shoppingWineMakingNote:'',
        shoppingPair:'',
        addAttribute:[],
        ///////////existing host////////////////////
        hostList:[],
        hostList1:[],
        productlist:[],
        emojiesList:[],
        duplicatehostList:[],
        searchhostList:'',
        addProduct:[],
        productInformation:[],
        //////////////////////////
    }
    this.setHeaderValue();
    this.validator = new SimpleReactValidator();    
}

modalClose = e => {
  $("#successResult").attr({'style':'display:none'});
}
 
componentDidMount(){
  if(localStorage.getItem('userData')){
  this.fetchPrevSessionList();
  this.fetchExistingShopping();
  this.fetchExistingHostList();
  this.fetchExistingEquipments();
  this.fetchEmojiesList();
  this.fetchProductList();
  this.addToProductList();}
	else{
	browserHistory.push("/login");
	}
  }

  fetchProductList() {  

    let  channelId=1;
    
    // let eqarray =[{id: 10, channelId: 1, interestId: 1, product_name: "JCB", description: "This is good"}
    //   ,{id: 2, channelId: 1, interestId: 1, product_name: "Lynmar", description: "this is"},
    //   {id: 3, channelId: 1, interestId: 1, product_name: "2014 Bliss Block Pinot Noir", description: "this is "},
    //   {id: 4, channelId: 1, interestId: 1, product_name: "2016 Block 10 Pinot Noir", description: "this is"}]
    // let ka=[];
    // for(let i=0;i<eqarray.length;i++){
    //   //type:false,name:"Mersedes Benz"
    //   let n = {
    //     id: eqarray[i].id,
    //     type:false,
    //     channelId:eqarray[i].channelId,
    //     interestId:eqarray[i].interestId,
    //     product_name:eqarray[i].product_name,
    //     description: eqarray[i].description
    //   };
    //   ka.push(n)
    // } 
    // this.setState({
    //   wineProduct:ka
    // },()=>console.log('this.state.wineProduct--------------------',this.state.wineProduct))  


    console.log('-----asdfghjkl----------',channelId);  

      axios      
      
      .get(process.env.REACT_APP_NAME+"/api/v1/session/"+channelId+"/product-list")          
      .then(res => {
        console.log('---------channelproduct--------------',res.data.responseData);

          let eqarray=res.data.responseData;        
     
        let ka=[];
        for(let i=0;i<eqarray.length;i++){
          //type:false,name:"Mersedes Benz"
          let n = {
            id: eqarray[i].id,
            type:false,
            channelId:eqarray[i].channelId,
            interestId:eqarray[i].interestId,
            product_name:eqarray[i].product_name,
            description: eqarray[i].description
          };
          ka.push(n)
        }

        this.setState({
          wineProduct:ka
            });
      })
      .catch(err =>{
          console.log('----------there is problem------------');

      });

  }
  

  fetchEmojiesList() {  
    let  interestId=1;
    let ka = [{id: 1, interestId: 1, name: "Cherry", emojies_type: "Appearance", path: "images/cherry.png"},
    {id: 2, interestId: 1, name: "Burgundy", emojies_type: "Appearance", path: "images/burgundy.png"},
    {id: 3, interestId: 1, name: "Auburn", emojies_type: "Appearance", path: "images/auburn.png"},
    {id: 4, interestId: 1, name: "Apple", emojies_type: "Aroma", path: "images/apple.png"},
    {id: 5, interestId: 1, name: "Grape", emojies_type: "Aroma", path: "images/grapes.png"},
    {id: 6, interestId: 1, name: "Cheese", emojies_type: "Aroma", path: "images/cheese.png"},
    {id: 7, interestId: 1, name: "Example", emojies_type: "Palate", path: "images/apple.png"},
    {id: 8, interestId: 1, name: "Another", emojies_type: "Palate", path: "images/grapes.png"},
    {id: 9, interestId: 1, name: "Few Example", emojies_type: "Palate", path: "images/cheese.png"}]   
    this.setState({
      emojiesList: ka
    });
    console.log('-----asdfghjkl----------',interestId);              
      axios      
      //.get("/api/v1/session/"+channelId+"/host")      
      .get(process.env.REACT_APP_NAME+"/api/v1/session/"+interestId+"/emojiesList")          
      .then(res => {

        console.log('---------InterestEmojies--------------',res.data.responseData);

        this.setState({
          emojiesList: res.data.responseData
            });

        // this.setState({
        //   emojiesList:{
        //     "Appearence": [{
        //       "id": 1,
        //       "name": "Cherry",
        //       "path": "images/cherry.png"
        //     }, {
        //       "id": 2,
        //       "name": "Burgundy",
        //       "path": "images/burgundy.png"
        //     }, {
        //       "id": 3,
        //       "name": "Auburn",
        //       "path": "images/auburn.png"
        //     }],
        //     "Aroma": [{
        //       "id": 4,
        //       "name": "Apple",
        //       "path": "images/apple.png"
        //     }, {
        //       "id": 5,
        //       "name": "Grape",
        //       "path": "images/grapes.png"
        //     }, {
        //       "id": 6,
        //       "name": "Cheese",
        //       "path": "images/cheese.png"
        //     }],
        //     "Palate": [{
        //       "id": 7,
        //       "name": "Example",
        //       "path": "images/apple.png"
        //     }, {
        //       "id": 8,
        //       "name": "Another",
        //       "path": "images/grapes.png"
        //     }, {
        //       "id": 9,
        //       "name": "Few Example",
        //       "path": "images/cheese.png"
        //     }]
        //   }
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
      .get(process.env.REACT_APP_NAME+"/api/v1/session/"+channelId+"/hosts-list1")          
      .then(res => {
        console.log('---------channelHost--------------',res.data.responseData);

         let eqarray=res.data.responseData;        
        let ka = []; 
        for(let i=0;i<eqarray.length;i++){
          let n = {userId: eqarray[i].userId, username: eqarray[i].username,image :'images/pic.jpg',type:false};
          ka.push(n);   
        }

        this.setState({
          hostList: ka
            });
      })
      .catch(err =>{
          console.log('----------there is problem------------');

      });

  }

 fetchExistingEquipments() {
    
    let  interestId=2;  
    console.log('-----a----------',interestId);              
      axios            
      .get(process.env.REACT_APP_NAME+"/api/v1/session/"+interestId+"/equipments")          
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
  //   ]
  //   let ka = [];
  //   for(let i=0;i<eqarray.length;i++){
  //     let n ={id:eqarray[i].id, interestId:eqarray[i].interestId , name:eqarray[i].name, createdAt:eqarray[i].createdAt , status:eqarray[i].status ,type:false,Quantity:0,itemNote:"X",Link :"addLink"}
  //     ka.push(n);
  //   }
  //   this.setState({
  //     shoppingList:ka
  //   },()=>console.log('------------------------',this.state.shoppingList))

    console.log('-----b----------',interestId);              
      axios      
      .get(process.env.REACT_APP_NAME+"/api/v1/session/"+interestId+"/shoppinglist")          
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
        .get(process.env.REACT_APP_NAME+"/api/v1/session/"+channelId+"/channel")        
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
      .get(process.env.REACT_APP_NAME+"/api/v1/session/"+sessionId+"/sess")        
      .then(res => {
        console.log('---------SessionId--------------',res.data)

        this.setState({
          session_details: res.data.responseData.name,
          description: res.data.responseData.description,
          exampleFormControlSelect1: res.data.responseData.duration,
          minimumParticipants: res.data.responseData.minAttendee,
          sessionCharge: res.data.responseData.chargeForSession,
          sessionDlevel: res.data.responseData.level,
          maximumParticipants: res.data.responseData.maxAttendee,
          sessionParticipantDisableDM: res.data.responseData.participantDisableDM,
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
    addToProductList=(e)=>{
      let arr = [
          {
              name: "thunderbird",
              attributes: [{
                      attrKey: "Varietal",
                      attrValue:'80% Pinot Noir',
                      
                  },
                  {
                      attrKey: "Price",
                      attrValue: "80",
                      
                  },
                  {
                      attrKey: "pH",
                      attrValue: 3.69,
                      
                  },
                  {
                      attrKey: "Tasting Notes",
                      attrValue: "NA",
                      
                  },
                  {
                      attrKey: "Winemaking",
                      attrValue: "The 2014 vintage in Napa Valley was one of the earliest harvested vintages in years. A warm spring led to early bud break and created the perfect environment for flowering and fruit set. ",
                      
                  },
                  {
                      attrKey: "Pairs Well With",
                      attrValue: "Meats and Fish: Seared Filet Mignon, Pan Roasted Veal Chops",
                   }
              ]
          }
          ];
          let attributes = [];
          let productList= this.state.addProduct;
          for(let i=0;i<arr.length;i++){
           attributes=[];
           for(let l =0;l<arr[i].attributes.length;l++){
           let n = {attrKey:arr[i].attributes[l].attrKey,attrValue:arr[i].attributes[l].attrValue,status:false,id:l};
           attributes.push(n);   
             }
          
          let n = {name : arr[i].name,
              attributes
          }
          productList.push(n);
          }
          this.setState({
          addProduct:productList
          },()=>console.log('-------------------------------------------addProduct',this.state.addProduct))
  }   
//////////////////////////////Integration Api///////////////////////////////////
//////////Calender
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
    if(a==12 && b>=0){
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
    if(a==12 && b>=0){
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
    if(e.target.id === attributeArray[i]){
     x=1;n=i;
    }
  }

  if(x===1){
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
      if(e.target.id === attributeArray[i]){
       x=1;n=i;
      }
    }
  
    if(x=== 1){
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
  if(this.state.dateFormat<endDate){
    startDate=endDate
   console.log('next Date');
 }else{
  console.log('previous date');
  endDate=startDate
}
  // let dt = new Date(startDate).toUTCString();
  let dt2 = new Date(startDate);
  // dt = dt.split('GMT')
//  endDate = startDate;
  startDate=endDate;
  this.setState({ startDate, endDate,dateFormat },
  ()=>console.log('sds',this.state.startDate,this.state.endDate))
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
  when : dt2 ,
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
  },()=>console.log('==========>'))
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
saveProductList=(e)=>{
  console.log('Product List',this.state.productInformation);
  const saveProduct = {
      name:this.state.addProduct[0].name,
      productName:this.state.shoppingProductName,
      productInfo:this.state.productInformation
  }
  console.log('saveProduct',saveProduct)
  // if (this.validator.allValid()) {
  // console.log('saveProduct',saveProduct);
  // }else{
  //     console.log('error');
  //     this.validator.showMessages();
  // }

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
}
findShoppingList = (listItem) => {
  console.log(listItem,this.state.shoppingListValue)
  if (listItem.name === this.state.shoppingListValue) {
    console.log(listItem.type);
    return listItem};
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
  addAttribute = (e) => {
    e.preventDefault();
    console.log(e.target.id,'-------------',e.target.name);
    console.log('e.target.id',e.target.id);
    let attributeArray=this.state.addProduct;
    let arr = this.state.productInformation;
   // let productCount = this.state.productCount;
    attributeArray[0].attributes[e.target.id].status = !attributeArray[0].attributes[e.target.id].status;
    if(attributeArray[0].attributes[e.target.id].status){
        arr.push(attributeArray[0].attributes[e.target.id]);
     //   productCount =  productCount+1;

    }else{
    for(let i=0;i<arr.length;i++){
        if(e.target.name === arr[i].attrKey){
            arr.splice(i,1);
       //     productCount =  productCount-1;
        }
    }
    }

    this.setState({
        addProduct:attributeArray,
        productInformation:arr,
        //productCount:productCount
    },()=>console.log('----------------',this.state.productInformation))
    }
///////////////////////////Host Selection
selectHost = (e) => {
  
  let hostContainer = this.state.hostList;
  hostContainer[e.target.id].type = !hostContainer[e.target.id].type;
  if(hostContainer[e.target.id].type) {
    
    } 
  else {
    let arrayCheck = [];
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
    },()=>
    { console.log('setEuipmentContainer==>',this.state.hostList);
      });
 
}
addToHost = () => {
  let addTohostListArray = [];
  let ka = [];
  if((this.state.duplicatehostList.length > 0 && this.state.hostList.length>0) && this.state.searchhostList !== "" ){
  let x =0 ,n=0;
  for (let i=0;i<this.state.hostList.length;i++) {
    x=0;n=0;
    for(let l=0;l<this.state.hostList1.length;l++){
      if(this.state.hostList[i].userId===this.state.hostList1[l]){
        x=1;n=l;
      }
    }
    if(x===1){ // update
     console.log('update');
    } else { // new insertion
    console.log('Search ******************************new insertion');
    if((this.state.hostList[i].type===true)){
    let ka = [];
    ka = this.state.hostList1;
    console.log('********value',ka);
     ka.push(this.state.hostList[i].userId);
      this.setState({
        hostList1:ka
        },()=> console.log(this.state.hostList1,'>>>>>>>>>>>>>>>>@index',i,'*****',this.state.hostList[i]));
      }
    }
  }

} else {
  this.setState({
    duplicatehostList : []
  })
  let x,n ;
  // checking for new insertion or update
  for (let i=0;i<this.state.hostList.length;i++) {
    x=0;n=0;
    for(let l=0;l<this.state.hostList1.length;l++){
      if(this.state.hostList[i].userId===this.state.hostList1[l]){
        x=1;n=l;
      }
    }
    if(x===1){ // update
     console.log('update');
    } else { // new insertion
    console.log('Search ******************************new insertion');
    if((this.state.hostList[i].type===true)){
    let ka = [];
    ka = this.state.hostList1;
    console.log('********value',ka);
     ka.push(this.state.hostList[i].userId);
      this.setState({
        hostList1:ka
        },()=> console.log(this.state.hostList1,'>>>>>>>>>>>>>>>>@index',i,'*****',this.state.hostList[i]));
      }
    }
  }
}
}

findhostList =(listItem) =>{
  console.log(listItem,this.state.searchhostList)
  if (listItem.username === this.state.searchhostList) {
    console.log(listItem.type);
    return listItem};
}
searchHostListMethod =(e)=>{
 
  if(this.state.duplicatehostList.length>0){
   this.setState({
    hostList:[]
   }, function() { // called by React after the state is updated
     this.setState({
       hostList:this.state.addToequipmentList1.concat(this.state.duplicatehostList.filter(this.findhostList)),
       addToequipmentList1 : this.state.hostList
      },()=> console.log('hostList',this.state.addToequipmentList1,'duplicateList',this.state.duplicatehostList,'----------Check-----------',this.state.hostList));
   });
 } else {
   this.setState({
    duplicatehostList: this.state.hostList,
    hostList:[]
  }, function() { // called by React after the state is updated
     this.setState({
       hostList:this.state.addToequipmentList1.concat(this.state.duplicatehostList.filter(this.findhostList)),
       addToequipmentList1 : this.state.hostList
     },()=> console.log('addToequipmentList',this.state.addToequipmentList1,'duplicatehostList',this.state.duplicatehostList,'----------Check-----------',this.state.hostList));
   });
   
 }
}
////////////////////////Host Selection End Here
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
testerStatus = (e) =>{
  let testerContainer = this.state.tablerows1;
    testerContainer[e.target.id].testerStatus = !testerContainer[e.target.id].testerStatus;
    this.setState({
    tablerows1 : testerContainer,
    },()=>
    { console.log('testerContainer==>',this.state.tablerows1);
    });
}
removeWineActivity = (e) => {
  console.log('e.target.id',e.target.id);
  let wineArray = this.state.tablerows;
  let wineContainer = this.state.wineProduct;
  for(let i =0 ;i<wineArray.length;i++){
    console.log(e.target.id ,'===', wineArray[i].id)
    if(e.target.id == wineArray[i].id){
      wineContainer[wineArray[i].wineProductId].type=false;
      wineArray.splice(i,1);
      this.setState({
        tablerows:wineArray,
        emojiForWineProduct:0,
        wineProduct:wineContainer
        
        },()=>
        { console.log('this.state.tablerows==>',this.state.tablerows);
      });
    }
  }
  wineArray = this.state.tablerows3;
  for(let i =0 ;i<wineArray.length;i++){
    console.log(e.target.id ,'===', wineArray[i].id)
    if(e.target.id == wineArray[i].id){
      wineArray.splice(i,1);
      this.setState({
        tablerows3:wineArray,
        },()=>
        { console.log('this.state.tablerows3==>',this.state.tablerows3);
      });
    }
  }
  wineArray = this.state.tablerows1;
  for(let i =0 ;i<wineArray.length;i++){
    console.log(e.target.id ,'===', wineArray[i].id)
    if(e.target.id == wineArray[i].id){
      wineArray.splice(i,1);
      this.setState({
        tablerows1:wineArray,
        },()=>
        { console.log('this.state.tablerows1==>',this.state.tablerows1);
      });
    }
  }
}
wineProductSelect = (e) => {
  let wineContainer = this.state.wineProduct;
  let addWine;
  let wineArray = [];
  let productModelStatus = this.state.productModelStatus;
  let wineStatus = this.state.chooseWine;
  if(productModelStatus===0){
    wineStatus = !wineStatus;
  }
  productModelStatus = productModelStatus+1;
  wineArray = this.state.tablerows3;
  wineContainer[e.target.id].type = !wineContainer[e.target.id].type;
  if(wineContainer[e.target.id].type){
    let indexValue = (this.state.wineIndexValue+1);
    console.log(this.state.tablerows,'this.state.tablerows3',this.state.tablerows3,'***************************','wineIndexValue',this.state.wineIndexValue,'IndexValue',indexValue);
  
    let la1=[];
    let la2=[];
    let ka = [];let appearanceSta=[];let aromaCheck=[];let palateCheck=[]; 
    for(let i=0;i<this.state.emojiesList.length;i++){
    if(this.state.emojiesList[i].emojies_type==="Appearance"){
    let n;
    n={appearanceStatus:false};
    appearanceSta.push(n);
      
     n = {interestId:this.state.emojiesList[i].interestId,
      path: this.state.emojiesList[i].path,
      emojies_type:this.state.emojiesList[i].emojies_type,
      status:false, 
      name:this.state.emojiesList[i].name,
      id:this.state.emojiesList[i].id };
      ka.push(n);
     }
     if(this.state.emojiesList[i].emojies_type==="Aroma"){
      let n;
      n={appearanceStatus:false};
      aromaCheck.push(n);
      n = {interestId:this.state.emojiesList[i].interestId,
      path:this.state.emojiesList[i].path,
      emojies_type:this.state.emojiesList[i].emojies_type, 
      status:false, 
      name:this.state.emojiesList[i].name,
      id:this.state.emojiesList[i].id };
      la1.push(n);
      }
      
      if(this.state.emojiesList[i].emojies_type==="Palate"){
        let n;
        n={appearanceStatus:false};
        palateCheck.push(n);
        n ={interestId:this.state.emojiesList[i].interestId,
        path:this.state.emojiesList[i].path,
        emojies_type:this.state.emojiesList[i].emojies_type,
        status:false, 
        name:this.state.emojiesList[i].name,
        id:this.state.emojiesList[i].id };
        la2.push(n);
      } 
     
    }

   
    // ------------------------------------------------------------------
    addWine = {
      wineChoice:wineContainer[e.target.id].product_name,
      id:indexValue,
      wineProductId:e.target.id,
      productId:wineContainer[e.target.id].id,
      // [{emoji:"images/cherry.png",type:false,name:"Cherry"},{emoji:"images/burgundy.png",type:false,name:"Burgundy"},{emoji:"images/auburn.png",type:false,name:"Auburn"}]
      //[{emoji:"images/apple.png",type:false,name:"Apple"},{emoji:"images/grapes.png",type:false,name:"Grape"},{emoji:"images/cheese.png",type:false,name:"Cheese"}]
      //[{emoji:"images/apple.png",type:false,name:"Example"},{emoji:"images/grapes.png",type:false,name:"Another"},{emoji:"images/cheese.png",type:false,name:"Few Example"}]
      appearanceSelect:appearanceSta,
      aromaSelect:aromaCheck,
      palateSelect:palateCheck,
      listAppearance:ka,
      listAroma :la1,
      listPalate:la2,
      testerStatus:false
      }
      wineArray.push(addWine);
      this.setState({
        wineProduct : wineContainer,
        wineIndexValue:indexValue,
        chooseWine:wineStatus,
        productModelStatus:productModelStatus,
        tablerows3:wineArray
        
        },()=>
        { console.log(this.state.tablerows,this.state.wineIndexValue,'===WindeIndexvalue',this.state.tablerows3,'Wine Product==>',this.state.wineProduct);
      });
  }else{
    for(let i =0 ;i<wineArray.length;i++){
      if(wineArray[i].wineChoice === wineContainer[e.target.id].product_name){
        console.log('this.state.emojiForWineProduct',this.state.emojiForWineProduct);
        let indexValue = ((wineArray.length+1)-1);
         wineArray.splice(i,1);
        this.setState({
          wineProduct : wineContainer,
          tablerows3:wineArray,
          wineIndexValue:indexValue,
          //chooseWine:!this.state.chooseWine,
          emojiForWineProduct:0
          },()=>
          { console.log(this.state.wineIndexValue,'*****',this.state.tablerows,'Wine Product==>',this.state.wineProduct);
        });
      }
    }

  }
  
}
addToWineDescription = (e) => {
  let addWine;
  let wineArray = this.state.wineInfoArray;
    addWine = {
      wineDescription:this.state.wineDescription,
      id:wineArray.length+1,
      wineMedia:this.state.wineMedia,
      listPalate:[{emoji:"images/apple.png",type:false,name:"Example"},{emoji:"images/grapes.png",type:false,name:"Another"},{emoji:"images/cheese.png",type:false,name:"Few Example"}]
      }
      wineArray.push(addWine);
      this.setState({
        wineInfoArray:wineArray
        },()=>
        { console.log(this.state.wineInfoArray,'Wine Product==>',this.state.wineInfoArray);
      });
  
}
removeToWineDescription = (e) => {
  let wineArray = this.state.wineInfoArray;
  wineArray.splice(e.target.id,1);
  this.setState({
    wineInfoArray:wineArray
    },()=>
    { console.log(this.state.wineInfoArray,'Wine Product==>',this.state.wineInfoArray);
  });

}
apperanceSelect = (e) => {
  
    // let emojiContainer = this.state.tablerows;
    // //let appearanceContainer = this.state.appearanceEmoji;
    // emojiContainer[this.state.emojiForWineProduct].listAppearance[e.target.id].type = !emojiContainer[this.state.emojiForWineProduct].listAppearance[e.target.id].type;
    
    // this.setState({
    // tablerows : emojiContainer,
    // //appearanceEmoji:appearanceContainer
    // },()=>
    // { console.log('<============appearanceEmoji==>',this.state.tablerows);
    // });
  
    let emojiContainer = this.state.tablerows;
    console.log('this.state.emojiForWineProduct',this.state.emojiForWineProduct);

    //let appearanceContainer = this.state.appearanceEmoji;
    emojiContainer[this.state.emojiForWineProduct].listAppearance[e.target.id].status = !emojiContainer[this.state.emojiForWineProduct].listAppearance[e.target.id].status;
    
    this.setState({
    tablerows : emojiContainer,
    //appearanceEmoji:appearanceContainer
    },()=>
    { console.log('<============appearanceEmoji==>',this.state.tablerows);
    });
  
  }
  setChooseWineStatus=(e)=>{
    console.log('HELLO');
     let wineArray = [];
     let addWine;
    //this.state.tablerows;
    // let a = JSON.parse(JSON.stringify(this.state.tablerows3[0]));
    // console.log('json value',a.appearanceSelect)
    for(let i=0;i<this.state.tablerows3.length;i++){
     wineArray.push(this.state.tablerows3[i]);
    }
    
  //   let arr2=[];
  //   arr2=this.state.tablerows3;
    // for(let i=0;i<this.state.tablerows3.length;i++){
    // let ak = JSON.parse(JSON.stringify(this.state.tablerows3[i]))
    // const a = {
    //   wineChoice:ak.wineChoice,
    //   id:ak.id,
    //   wineProductId:ak.wineProductId,
    //   productId:ak.productId,
    //   appearanceSelect:ak.appearanceSelect,
    //   aromaSelect:ak.aromaSelect,
    //   palateSelect:ak.palateSelect,
    //   listAppearance:ak.listAppearance,
    //   listAroma :ak.listAroma,
    //   listPalate:ak.listPalate,
    //   testerStatus:ak.testerStatus
    //   }
    //   console.log('addWine',a);
    //   wineArray.push(a);
    // }
    this.setState({
      chooseWine:false,
      //tablerows:wineArray,
      tablerows:wineArray
    },()=>console.log(this.state.chooseWine,this.state.tablerows))

  }
finalEmoji = () =>{
  // let addWine = {
  //   wineChoice:wineContainer[e.target.id].product_name,
  //   id:indexValue,
  //   appearanceSelect:appearanceSta,
  //   listAppearance:ka,
  //   listAroma :la1,
  //   listPalate:la2,
  //   testerStatus:false
  //   }

  //   let arr1=[];
  //  // let arr2 =this.state.tablerows;
  //   for(let i=0;i<this.state.tablerows.length;i++){
  //     if(this.state.tablerows[i].appearanceSelect[0].appearanceStatus || this.state.tablerows[i].aromaSelect[0].appearanceStatus || this.state.tablerows[i].palateSelect[0].appearanceStatus){
  //      let ak = JSON.parse(JSON.stringify(this.state.tablerows[i]))
  //   const a = {
  //     wineChoice:ak.wineChoice,
  //     id:ak.id,
  //     wineProductId:ak.wineProductId,
  //     productId:ak.productId,
  //     appearanceSelect:ak.appearanceSelect,
  //     aromaSelect:ak.aromaSelect,
  //     palateSelect:ak.palateSelect,
  //     listAppearance:ak.listAppearance,
  //     listAroma :ak.listAroma,
  //     listPalate:ak.listPalate,
  //     testerStatus:ak.testerStatus
  //     }
  //     //arr1.push(this.state.tablerows[i]);
  //     arr1.push(a);
  //     }
      

  //   }
  let arr1=this.state.tablerows1;
  let x=0,n=0;
for(let i=0;i<arr1.length;i++){
    n=i;
      if(this.state.tablerows[this.state.emojiForWineProduct].appearanceSelect[0].appearanceStatus || this.state.tablerows[this.state.emojiForWineProduct].aromaSelect[0].appearanceStatus || this.state.tablerows[this.state.emojiForWineProduct].palateSelect[0].appearanceStatus){
       let ak = JSON.parse(JSON.stringify(this.state.tablerows[this.state.emojiForWineProduct]))
       if(arr1[i].wineProductId===ak.wineProductId){
        x=1;
        arr1[i].wineChoice=ak.wineChoice;
        arr1[i].id=ak.id;
        arr1[i].wineProductId=ak.wineProductId;
        arr1[i].productId=ak.productId;
        arr1[i].appearanceSelect=ak.appearanceSelect;
        arr1[i].aromaSelect=ak.aromaSelect;
        arr1[i].palateSelect=ak.palateSelect;
        arr1[i].listAppearance=ak.listAppearance;
        arr1[i].listAroma =ak.listAroma;
        arr1[i].listPalate=ak.listPalate;
        arr1[i].testerStatus=arr1[i].testerStatus;
      
      
       }
      }
      

    }

    if(x===0){
     if(this.state.tablerows[this.state.emojiForWineProduct].appearanceSelect[0].appearanceStatus || this.state.tablerows[this.state.emojiForWineProduct].aromaSelect[0].appearanceStatus || this.state.tablerows[this.state.emojiForWineProduct].palateSelect[0].appearanceStatus){
     let ak = JSON.parse(JSON.stringify(this.state.tablerows[this.state.emojiForWineProduct]))
    const a = {
      wineChoice:ak.wineChoice,
      id:ak.id,
      wineProductId:ak.wineProductId,
      productId:ak.productId,
      appearanceSelect:ak.appearanceSelect,
      aromaSelect:ak.aromaSelect,
      palateSelect:ak.palateSelect,
      listAppearance:ak.listAppearance,
      listAroma :ak.listAroma,
      listPalate:ak.listPalate,
      testerStatus:ak.testerStatus
      }
      //arr1.push(this.state.tablerows[i]);
      arr1.push(a);
      }
    }
    if(this.state.emojiForWineProduct==1){
      console.log(this.state.tablerows[this.state.emojiForWineProduct],'this.state.emojiForWineProduct-----------------',this.state.tablerows[1])
    }
    this.setState({
      tablerows1:arr1
    },()=>console.log('this.state.tablerows2',this.state.tablerows1))
    console.log(arr1);
} 
resetEmoji=(e)=>{
// console.log(e.target.id);
// console.log(this.state.tablerows[e.target.id]);
// for(let i=0;i<this.state.tablerows[e.target.id].listPalate.length;i++){
//   this.state.tablerows[e.target.id].listPalate[i].status=false
// }
// for(let i=0;i<this.state.tablerows[e.target.id].listAroma.length;i++){
//   this.state.tablerows[e.target.id].listAroma[i].status=false
// }
// for(let i=0;i<this.state.tablerows[e.target.id].listPalate.length;i++){
//   this.state.tablerows[e.target.id].listPalate[i].status=false
// }

// let wineContainer = this.state.wineProduct;
// for(let i=0 ; i<wineContainer.length;i++){
//   if(wineContainer[i].type){
//     wineContainer[i].type = !wineContainer[i].type;
//   }

// }
// this.setState({
//   tablerows:[],
//   wineProduct:wineContainer
// },()=>console.log(this.state.wineProduct))

}
appearanceEmojiSelect =(e)=>{
 let emojiContainer=this.state.tablerows;
  console.log('this.state.emojiForWineProduct',this.state.emojiForWineProduct);
  emojiContainer[this.state.emojiForWineProduct].appearanceSelect[0].appearanceStatus =!emojiContainer[this.state.emojiForWineProduct].appearanceSelect[0].appearanceStatus;
  this.setState({
    appearanceStatus:emojiContainer
  },()=>console.log('appearanceStatus',this.state.tablerows))
}
aromaEmojiSelect=(e)=>{
  let emojiContainer=this.state.tablerows;
  console.log('this.state.emojiForWineProduct',this.state.emojiForWineProduct);
  emojiContainer[this.state.emojiForWineProduct].aromaSelect[0].appearanceStatus =!emojiContainer[this.state.emojiForWineProduct].aromaSelect[0].appearanceStatus;
  this.setState({
    appearanceStatus:emojiContainer
  },()=>console.log('appearanceStatus',this.state.tablerows))
}

palateEmojiSelect =(e)=>{
  let emojiContainer=this.state.tablerows;
   console.log('this.state.emojiForWineProduct',this.state.emojiForWineProduct);
   emojiContainer[this.state.emojiForWineProduct].palateSelect[0].appearanceStatus =!emojiContainer[this.state.emojiForWineProduct].palateSelect[0].appearanceStatus;
   this.setState({
     appearanceStatus:emojiContainer
   },()=>console.log('appearanceStatus',this.state.tablerows))
 }
  aromaSelect = (e) => {
  
    // let emojiContainer = this.state.tablerows;
    // emojiContainer[this.state.emojiForWineProduct].listAroma[e.target.id].type = !emojiContainer[this.state.emojiForWineProduct].listAroma[e.target.id].type;
    // this.setState({
    // tablerows : emojiContainer,
    // },()=>
    // { console.log('appearanceEmoji==>',this.state.tablerows);
    // });
    
    let emojiContainer = this.state.tablerows;
    emojiContainer[this.state.emojiForWineProduct].listAroma[e.target.id].status = !emojiContainer[this.state.emojiForWineProduct].listAroma[e.target.id].status;
    this.setState({
    tablerows : emojiContainer,
    },()=>
    { console.log('appearanceEmoji==>',this.state.tablerows);
    });
    
  }
  
  palateSelect = (e) => {
    
    // let emojiContainer = this.state.tablerows;
    // emojiContainer[this.state.emojiForWineProduct].listPalate[e.target.id].type = !emojiContainer[this.state.emojiForWineProduct].listPalate[e.target.id].type;
    // this.setState({
    // tablerows : emojiContainer,
    // },()=>
    // { console.log('PalateEmoji==>',this.state.tablerows);
    // });

    let emojiContainer = this.state.tablerows;
    emojiContainer[this.state.emojiForWineProduct].listPalate[e.target.id].status = !emojiContainer[this.state.emojiForWineProduct].listPalate[e.target.id].status;
    this.setState({
    tablerows : emojiContainer,
    },()=>
    { console.log('PalateEmoji==>',this.state.tablerows);
    });

    
   
  }
////////////////Submit data
submitForm = (event) => {
//alert('hi');
 let wineDetail = []; 
  // this.state.tablerows;
  let ap = [];
  let ar = [];
  let pa = [];
  // console.log(this.state.tablerows[0].listAppearance.length,'********',this.state.tablerows[0].listAppearance[0].type);
  // for(let i=0;i<this.state.tablerows.length;i++){
  //   ap = { wineChoice: this.state.tablerows[i].wineChoice,
  //     id: this.state.tablerows[i].id,
  //     Emojies:[],
  //     testerStatus: this.state.tablerows[i].testerStatus };
  //   wineDetail.push(ap);
  //   for(let t=0;t<this.state.tablerows[i].listAppearance.length;t++){
  //     console.log('this.state.tablerows[i].listAppearance.type',this.state.tablerows[i].listAppearance[t].type);
  //     if(this.state.tablerows[i].listAppearance[t].status){
  //       let emojiStructure = { path: this.state.tablerows[i].listAppearance[t].path, 
  //       emojies_type:this.state.tablerows[i].listAppearance[t].emojies_type, 
  //       name: this.state.tablerows[i].listAppearance[t].name,
  //       id:1 ,
  //       interestId:this.state.tablerows[i].listAppearance[t].interestId};
  //       wineDetail[i].Emojies.push(emojiStructure);
  //     }
  //   }

  //   for(let v=0;v<this.state.tablerows[i].listAroma.length;v++){
  //   console.log('this.state.tablerows[i].listAroma.type',this.state.tablerows[i].listAroma[v].type);
  //     if(this.state.tablerows[i].listAroma[v].status){
  //       ar.push(this.state.tablerows[i].listAroma[v]);
  //       let emojiStructure = { path: this.state.tablerows[i].listAroma[v].path, 
  //         emojies_type:this.state.tablerows[i].listAroma[v].emojies_type, 
  //         name: this.state.tablerows[i].listAroma[v].name,
  //         id:1 ,
  //         interestId:this.state.tablerows[i].listAroma[v].interestId};
  //       wineDetail[i].Emojies.push(emojiStructure);
  //     }
  //   }

  //   for(let l=0;l<this.state.tablerows[i].listPalate.length;l++){
  //     if(this.state.tablerows[i].listPalate[l].status){
  //       pa.push(this.state.tablerows[i].listPalate[l]);
  //       let emojiStructure = { path: this.state.tablerows[i].listPalate[l].path, 
  //         emojies_type: this.state.tablerows[i].listPalate[l].emojies_type, 
  //         name: this.state.tablerows[i].listPalate[l].name,
  //         id:1,
  //         interestId:this.state.tablerows[i].listPalate[l].interestId };
  //       wineDetail[i].Emojies.push(emojiStructure);
  //     }
  //   }
    
  // }

  
  for(let i=0;i<this.state.tablerows1.length;i++){
    ap = { wineChoice: this.state.tablerows1[i].wineChoice,
      id: this.state.tablerows1[i].productId,
      Emojies:[],
      testerStatus: this.state.tablerows1[i].testerStatus };
    wineDetail.push(ap);
    for(let t=0;t<this.state.tablerows1[i].listAppearance.length;t++){
      console.log('this.state.tablerows1[i].listAppearance.type',this.state.tablerows1[i].listAppearance[t].type);
      if(this.state.tablerows1[i].listAppearance[t].status){
        let emojiStructure = { path: this.state.tablerows1[i].listAppearance[t].path, 
        emojies_type:this.state.tablerows1[i].listAppearance[t].emojies_type, 
        name: this.state.tablerows1[i].listAppearance[t].name,
        id:1 ,
        interestId:this.state.tablerows1[i].listAppearance[t].interestId};
        wineDetail[i].Emojies.push(emojiStructure);
      }
    }

    for(let v=0;v<this.state.tablerows1[i].listAroma.length;v++){
    console.log('this.state.tablerows1[i].listAroma.type',this.state.tablerows1[i].listAroma[v].type);
      if(this.state.tablerows1[i].listAroma[v].status){
        ar.push(this.state.tablerows1[i].listAroma[v]);
        let emojiStructure = { path: this.state.tablerows1[i].listAroma[v].path, 
          emojies_type:this.state.tablerows1[i].listAroma[v].emojies_type, 
          name: this.state.tablerows1[i].listAroma[v].name,
          id:1 ,
          interestId:this.state.tablerows1[i].listAroma[v].interestId};
        wineDetail[i].Emojies.push(emojiStructure);
      }
    }

    for(let l=0;l<this.state.tablerows1[i].listPalate.length;l++){
      if(this.state.tablerows1[i].listPalate[l].status){
        pa.push(this.state.tablerows1[i].listPalate[l]);
        let emojiStructure = { path: this.state.tablerows1[i].listPalate[l].path, 
          emojies_type: this.state.tablerows1[i].listPalate[l].emojies_type, 
          name: this.state.tablerows1[i].listPalate[l].name,
          id:1,
          interestId:this.state.tablerows1[i].listPalate[l].interestId };
        wineDetail[i].Emojies.push(emojiStructure);
      }
    }
    
  }
  console.log('*******************************************',wineDetail);
  

  event.preventDefault();
  var activity_info = [];
  var activities = [];
//   var activities = [{ wineChoice: 'Mersedes Benz',
//   id: 1,
//   Emojies:
//    [ 
// { path: 'images/cherry.png', type: 'Appearence', name: 'Cherry',id:1 },
//   { path: 'images/burgundy.png', type: 'Appearence', name: 'Burgundy' ,id:2},
// { path: 'images/grapes.png', type: 'Aroma', name: 'Grape',id:6 },
// { path: 'images/cheese.png', type: 'Aroma', name: 'Cheese',id:7 },
// { emoji: 'images/grapes.png', type: 'Palate', name: 'Another',id:8 } 
// ],testerStatus: true },
// { wineChoice: 'Nissan Altima',
//   id: 2,
// Emojies:
//    [ { path: 'images/burgundy.png', type: 'Appearence', name: 'Burgundy',id:3 },
//      { path: 'images/auburn.png', type: 'Appearence', name: 'Auburn',id:4 },
//    { path: 'images/grapes.png', type: 'Aroma', name: 'Grape' ,id:6 } ,
//    { path: 'images/grapes.png', type: 'Palate', name: 'Another',id:8 } 
// ],testerStatus: false }];

  let input_result=[];
  let min_participants='';
  let max_participants='';
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
      onDemand:this.state.onDemand,
      orderWine:this.state.orderWine,
      session_charge:this.state.sessionCharge,
      currency:"USD",
      hour:(parseInt(this.state.sessionHour)*60)+parseInt(this.state.sessionMinute),
     // minute:this.state.sessionMinute,
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

      //activities=this.state.w;

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
        hostList : this.state.hostList1
      }
      activities = wineDetail;
      console.log("========sessioncreation222==================>",{shopping_list,equipment_list, activities,reminder,privacy,session,groups,script,host_list});
     
      if (this.validator.allValid()) {

        if(this.state.minimumParticipants>=1 && this.state.maximumParticipants<=50 ){  
        
      axios.post(process.env.REACT_APP_NAME+"/api/v1/session/createwineSession", { shopping_list,equipment_list, activities,reminder,privacy,session,groups,script,host_list})
      .then(res => {

        console.log('=============lallittiwari12345===================>',res.data);;

            if(res.data.responseMessage == "success")
            {
            this.setState({
            msg: "Session hasbeen created Successfully!!!!!!!",
          });

          this.setState({
            // msg: "Session hasbeen created Successfully!!!!!!!",
             urlLink:res.data.responseData.urlcode,
             sess_name:res.data.responseData.sessionDt.name,
             sess_time:res.data.responseData.sessionDt.scheduleDate,
             uname:res.data.responseData.sessionDt.firstName,
           });
 
           $("#successResult").attr({'style':'display:block'});
          }
          else{

          this.setState({
            msg: "There Is a error in session creation",
          });

        }
      
      })
    }
    else {
      console.log('Wrong');
      console.log('----------------This is a error--------------------')
    }
    }
    else{

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
              <p className="float-right purple_text mr-4 bordr-right mb-0"><Link to="WineSessionCreation" className="purple_text" data-toggle="modal" data-target="#allprevsession">Copy Form...</Link></p>
              <p className="float-right purple_text mr-4 ml-4 mb-0"><Link to="/DashboardLanding" className="purple_text">x</Link></p>
          </div>    
        </div>

        {/* <h4 className="text-white pb-3 float-left">CREATE SESSION</h4>

        <a href="#" className="btn btn-primary float-right" data-toggle="modal" data-target="#allprevsession"> COPY FORM ....</a>
      <div className="clearfix"></div> */}
        <div className="gray-box">
          <div className="row session mx-0">
            <h3 className="col-md-6 info"><img src="images/information.png" className="mr-3 mb-2 text_lft_icon" alt="information" />Session Info</h3>   
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
                      </select>
                      {this.validator.message('exampleFormControlSelect1', this.state.exampleFormControlSelect1, 'required')}						  
                
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
                      <Link to ="#" className="when-icon" data-toggle="modal" data-target="#calenderModel1"></Link>
                    </div>
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
                        {this.validator.message('minimumParticipants', this.state.minimumParticipants, 'required|integer|between:1,50')}
                        <span className="signedup_2"></span>
                      </div>
                    </div>
                    <div className="form-group">
                      <span className="cover-border bg_gray_clr"></span>
                      <label className="label">Maximum Participants</label>
                      <input type="text" id = "maximumParticipants" value = {this.state.maximumParticipants} onChange = {this.sessionInfo} className="input-field" placeholder="max 50"/>
                      {this.validator.message('maximumParticipants', this.state.maximumParticipants, 'required|integer|between:1,50')}
                      <span className="signedup_2"></span>
                    </div>
                  </div>
                  <div className="col-md-5 px-4">
                  <div className="form-group input-txt h-90">
                    <label className="switch">
                        <input type="checkbox" id = "sessionProperty"  checked={this.state.sessionProperty} onChange = {(e)=>{this.setState({[e.target.id]:!this.state.sessionProperty},()=>console.log('sessionProperty',this.state.sessionProperty))}}/>
                        <span className="slider round"></span>
                    </label>
                    
                    {this.state.sessionProperty?<span>Public Session</span>:<span>Private Session</span>}<img src="images/bulb.png" className="ml-3 mb-2" alt ='' />
                    </div>
                    <div className="form-group input-txt h-90">
                    <label className="switch">
                        <input type="checkbox" id = "searchParticipant"  checked={this.state.searchParticipant} onChange = {(e)=>{this.setState({[e.target.id]:!this.state.searchParticipant},()=>console.log('searchparticipant',this.state.searchParticipant))}}/>
                        <span className="slider round"></span>
                    </label>
                      <span>Show Participants Signed Up Count on Searches?</span>
                    </div>
                    <div className="row">
                      <div className="col-lg-7 pr-0">
                          <div className="form-group input-txt h-90">
                              <label className="switch">
                                <input type="checkbox" id="sessionCharge"  defaultChecked = {this.state.sessionCharge} onChange ={(e)=>this.setState({[e.target.id]:!this.state.sessionCharge})} />
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
                            <input type="text" className="input-field"id="amountCharge" placeholder="Enter amount" value={this.state.amountCharge} onChange= {this.sessionInfo} /><span className="dollar"></span>
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
                      {this.state.sessionCharge?<p className="gray-text ml-5 mt-3 mb-4">You have enabled it in the Channel</p>:''}
                    </div> */}

                    {/* {this.state.sessionCharge?
                    <div className="form-group w-50 ml-5 h-90">
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
                    <div className="form-group input-txt h-90">
                        <label className="switch">
                        <input type="checkbox" id = "orderWine" defaultChecked = {this.state.orderWine} onChange = {(e)=>this.setState({[e.target.id]:!this.state.orderWine},()=>console.log("orderWine",this.state.orderWine))} />
                        <span className="slider round"></span>
                        </label>
                        <span>Allow Participants To Order wine at end of session</span>
                    </div>
                    <div className="form-group input-txt">
                        <label className="switch">
                        <input type="checkbox" id = "onDemand" defaultChecked = {this.state.onDemand} onChange = {(e)=>this.setState({[e.target.id]:!this.state.onDemand},()=>console.log("onDemand",this.state.onDemand))} />
                        <span className="slider round"></span>
                        </label>
                        <span>Allow Participants on Demand</span>
                    </div>

                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gray-box2">
          <div className="session">
            <h3 className="info"><img src="images/reminder.png" className="mr-3 mb-2" alt="reminder-icon" />Reminders</h3>
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
                      <Link to ="#" className="when-icon" data-toggle="modal" data-target="#signUpCalenderModel1"></Link>
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
        <div className="px-3 pb-4 gray-box no-border-radius">
        <div className="row">
        <div className="session"><h3 className="info"><img src="images/privacy.png" className="mr-3 mb-2" alt="privacy" />Privacy during Session</h3></div>
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
          <div className="session"><h3 className="info"><img src="images/teamwork.png" className="mr-3 mb-2" alt="team" />Groups</h3></div>
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
                <img src="images/bulb.png" className="ml-3 mb-2" alt="bulb-icon" />
              </div>
              
              
            </div>
        </div>
        <div className="pb-4">
          <div className="session"><h3 className="info"><img src="images/user.png" className="mr-3 mb-2" alt="user-icon" />Select Host(s)</h3></div>
          <div className="px-3 pb-4">
          <div className="row">
            <div className="col-md-4 px-4">
                <Link to="WineSessionCreation" data-toggle="modal" data-target="#pick_host_modal" className="pick"><img src="images/picking.png" className="mr-2" alt = '#' /> Pick from existing hosts</Link>
            </div>
            <div className="col-md-4 px-4 mt-3 mt-md-0">
                {/* <Link to ="/" className="pick"><img src="images/add.png"  className="mr-2" alt = '#'/> Add a new Host</Link> */}
            </div>
          </div>
          </div>
          
        </div>
        {/* Testing Script Start */}
        <div className="gray-box2 pb-4">
          <div className="session">
          <h3 className="info myheading"><img src="images/testing.png" className="mr-3 text_lft_icon" alt="script-icon" />Testing Script</h3>
            </div>
          {/* Wine Product With Testing Sortable  */}
          {this.state.tablerows1.length?
          <div className="p-3">
            <table className="table text-gray activity-table">
              <thead>
                <tr>
                  <th className="border_none">Wine</th>
                  <th className="border_none">Appearance</th>
                  <th className="border_none">Aroma</th>
                  <th className="border_none">Palate</th>
                  <th className="border_none">&nbsp;</th>
                  <th className="border_none">&nbsp;</th>
                </tr>
              </thead>
              <Sortable
                  tag = "tbody"   // Defaults to "div"
                   onChange={(order, sortable, evt) => {
                   console.log('====================',order);
                    let arr = [];
                    for(var i=0 ;i<order.length;i++){
                     var splitData = order[i].split(',');
                       for(let l =0;l<this.state.tablerows1.length;l++){
                          console.log(splitData[1],'this.state.tablerows',this.state.tablerows1[l].id);
                            if(this.state.tablerows1[l].id==splitData[1]){
                            arr.push(this.state.tablerows1[l]);
                            console.log(this.state.tablerows1[l],'*************************************',arr);
                          }
                          
                      }
                   }

                    this.setState({ tablerows1: arr },()=>console.log('*******',this.state.tablerows1));
                    // console.log(order)
                    
                    // console.log(order)
                    
                }}
                >
                {this.state.tablerows1.map((row,i) => (
                 <tr className = "item" key={uniqueId()} data-id={Object.values(row)} >
                 <td>{row.wineChoice}</td>
                  <td>
                  <div className="color-icons pl-3">
                    {row.listAppearance.map((row,l) => (
                    (this.state.tablerows1[i].appearanceSelect[0].appearanceStatus && row.status) ?<img src={row.path} className="mr-2" alt="cherry" key = {l} />:''
                    ))}
                    <span>...</span>
                    </div>
                  </td>
                  <td>
                  <div className="color-icons pl-3">
                  {row.listAroma.map((row,i) => (    
                  (row.status) ?<img src={row.path} className="mr-2" alt="apple" key = {i} />:''
                  ))}
                  <span>...</span>
                 </div>
                  </td>
                  <td>
                  <div className="color-icons pl-3">
                  {row.listPalate.map((row,i) => (    
                  (row.status) ?<img src={row.path} className="mr-2" alt="apple" key = {i} />:''
                  ))}
                  <span>...</span>
                 </div>
                  </td>
                  <td className="d-flex justify-content-center">
                     <div className="form-group mb-0 input-txt">
                      <label className="switch mr-2">
                      <input type="checkbox" id = {i} checked={row.testerStatus} onChange = {this.testerStatus}/>
                      <span className="slider round"></span>
                      </label>
                      </div>
                    <div><span className="hdng p-0">Allow Testers to score? (opotional)</span></div>
                    </td>
                    <td>
                    <Link to="WineSessionCreation" className="mr-2 bg-circle"><i className="fa fa-bars"  onClick = {this.dragDrop} aria-hidden="true"></i></Link>
                    <Link to="WineSessionCreation" className="bg-circle"><i className="fa fa-minus" id ={row.id} onClick = {this.removeWineActivity} aria-hidden="true"></i></Link>
                  </td>
                  </tr>
                  
                ))}
              </Sortable>
             </table>
          </div>
          :''}
          {/* Wine Product With Testing Sortable End */}

            {/* Choose Wine */}
            {this.state.chooseWine?
            <div className="px-4 pb-0 mt-2 add_wine_expand">
                <div className="row mt-5">                        
                    <div className="col-lg-3 col-md-6 mt-3 mt-md-0">
                        <div className="form-group mb-0" data-toggle="modal" onClick={()=>this.setState({productModelStatus:0})} data-target="#myPickWineModel"><span className="cover-border"></span>
                        <label className="label">Pick a Wine</label>
                        <input type="text"  className="input-field" disabled /><span className="emojis-icon"></span>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6 mt-3 mt-md-0 pr-lg-4">
                        <div className="form-group mb-0" data-toggle="modal"  data-target="#pick_emojis_modal"><span className="cover-border"></span>
                            <label className="label">Pick Emojis (optional)</label>
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
                 : ''
                }         

            {/* ===================================================================== */}
            <div className="px-4 pb-0 mt-2 add_wine_expand">
              {this.state.tablerows.map((row,i)=>
                        <div className="row mt-5" key= {i}>                        
                            <div className="col-lg-3 col-md-6 mt-3 mt-md-0">
                                <div className="form-group mb-0" ><span className="cover-border"></span>
                                    <label className="label">Pick a Wine</label>
                                    <input type="text" value = {row.wineChoice} className="input-field" disabled />
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6 mt-3 mt-md-0 pr-lg-4">
                              <div className="form-group mb-0" data-toggle="modal" onClick ={(e)=> this.setState({emojiForWineProduct:i},()=>console.log('this.state.emojiForWineProduct',this.state.emojiForWineProduct)) } data-target="#pick_emojis_modal"><span className="cover-border"></span>
                                    <label className="label">Pick Emojis (optional)</label>
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
                            <div className="border-bottom mt-3"></div>                                             
                        </div>
                          )}
                        
                    </div>
              {/* Choose Wine End  */}
          {/* Wine Product Sortable Start */}
        
          {/* Wine Product Sortable End */}
          {/* Description start */}

          <div className="p-4 pb-0 mt-2">                    
                      <div className="row mt-4">
                          <div className="col-lg-5 col-md-6 mt-3 mt-md-0">
                            <div className="form-group"><span className="cover-border"></span>
                                <label className="label">Description</label>
                                <input type="text" 
                                id="wineDescription"  
                                value = {this.state.wineDescription}
                                onChange = {(e)=> this.setState({[e.target.id]:e.target.value})} 
                                className="input-field" />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 mt-3 mt-md-0 px-lg-0">
                              <div className="form-group"><span className="cover-border"></span>
                                    <label className="label">Add Media</label>
                                    <input type="text" 
                                    id="wineMedia"  
                                    value = {this.state.wineMedia}
                                    onChange = {(e)=> this.setState({[e.target.id]:e.target.value})}
                                    className="input-field" /><span className="browse">Browse</span>
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
          {/* description end */}

          {/* Next Description Box */}
          {/* Sortable test start*/}
          {this.state.wineInfoArray.length>0 ? 
          <div className="p-3">
            <table className="table text-gray activity-table">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Media Added</th>
                  <th>Emogis</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <Sortable
                  tag = "tbody"   // Defaults to "div"
                   onChange={(order, sortable, evt) => {
                   console.log('====================',order);
                    let arr = [];
                    for(var i=0 ;i<order.length;i++){
                     var splitData = order[i].split(',');
                       for(let l =0;l<this.state.wineInfoArray.length;l++){
                          console.log(splitData[1],'this.state.tablerows',this.state.wineInfoArray[l].id);
                            if(this.state.wineInfoArray[l].id==splitData[1]){
                            arr.push(this.state.wineInfoArray[l]);
                            console.log(this.state.wineInfoArray[l],'*************************************',arr);
                          }
                          
                      }
                   }
                  this.setState({ wineInfoArray: arr },()=>console.log('*******',this.state.wineInfoArray));
                }}
                >
                {this.state.wineInfoArray.map((row,i) => (
                 <tr className = "item" key={uniqueId()} data-id={Object.values(row)} >
                  <td>{row.wineDescription}</td>
                  <td>
                  <p><Link to="WineSessionCreation" className="purple_link">{row.wineMedia}</Link></p>
                  </td>
                  <td>
                  <div className="color-icons pl-3">
                  {row.listPalate.map((row,i) => (    
                  <img src={row.emoji} className="mr-2" alt="apple" key = {i} />
                  ))}
                  <span>...</span>
                 </div>
                  </td>
                  <td className="d-flex justify-content-center">
                    <Link to="WineSessionCreation" className="mr-2 bg-circle"><i className="fa fa-bars"   aria-hidden="true"></i></Link>
                    <Link to="WineSessionCreation" className="bg-circle"><i className="fa fa-minus" id ={i} onClick = {this.removeToWineDescription} aria-hidden="true"></i></Link>
                  </td>
                 </tr>
                ))}
              </Sortable>
             </table>
          </div>
          :''}
          {/* Sortable test end */}
          <div className="px-4 pb-0">
                        {/* <div className="row mt-4">
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
                                    <img src="images/apple.png" className="mr-2" />
                                    <img src="images/grapes.png" className="mr-2" />
                                    <img src="images/cheese.png" className="mr-2" />
                                    <span>...</span>
                                  </div>
                                  <div className="float-right pr-3">
                                      <a href="#" className="mr-2 bg-circle"><i className="fa fa-bars" aria-hidden="true"></i></a>
                                      <a href="#" className="bg-circle"><i className="fa fa-minus" aria-hidden="true"></i></a>
                                    </div>
                              </div>
                          </div>
                      </div> */}
                      {/* <div className="border-bottom mt-3">
                  </div> */}
                    <div className="px-3">                    
                        <Link to="WineSessionCreation" className="activity-link add_wine" onClick = {(e)=> this.setState({chooseWine : true})} ><span>+</span> Wine</Link>
                        <Link to="WineSessionCreation" className="activity-link ml-5"><span onClick = {this.addToWineDescription}>+</span> Info</Link><img src="images/bulb.png" className="ml-3 mb-2" alt='' />
                    </div>
                </div>
          {/* Next Description Box End */}
          
          {/* <Link to="header" className="activity-link pl-3"><span onClick = {this.addRow}>+</span> Activity</Link> */}
        </div>

        {/* Testing Script End */}
        
        {/* Shopping List Start */}
        <div className="gray-box no-border-radius pb-2">
          <div className="session"><h3 className="info"><img src="/images/shopping-icon.png" className="mr-3 mb-2" alt='' />Shopping List</h3></div>
          <div className="px-3 pb-4">
            <div className="row pb-4">
              <div className="col-md-4">
                  <Link to ="WineSessionCreation" className="pick" data-toggle="modal" data-target="#myModal3"><img src="/images/picking.png" className="mr-2" alt = '#'/> Pick from existing list</Link>
              </div>
              <div className="col-lg-4 col-md-4">
                {/* <Link to="WineSessionCreation" className="pick"><img src="/images/add.png" className="mr-2" alt=''/> Add all Product from Script</Link> */}
              </div>
              <div className="col-md-4">
                  {/* <Link to="WineSessionCreation" className="pick" data-toggle="modal" data-target="#add_product_modal" ><img src="/images/add.png" className="mr-2" alt = '#'/> Add a new Product</Link> */}
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
              <Link to="WineSessionCreation" className="bg-circle mt-3"><i id = {i} value = {listInsertion.name} onClick = {this.removeShoppingList} className="fa fa-minus" aria-hidden="true"></i></Link>
            </div>
          </div>
          : '')
          ))}
          
        </div>
        {/* Shopping List End */}

        {/* Equipemnt List Start */}
        <div className="gray-box2 no-border-radius">
          <div className="session"><h3 className="info"><img src="/images/shopping_icon.png" className="mr-3 mb-2" alt='' />Equipment List</h3></div>
          <div className="px-3 pb-4">
            <div className="row pb-4">
              <div className="col-md-4">
                  <Link to="WineSessionCreation" className="pick" data-toggle="modal" data-target="#myModal2"><img src="/images/picking.png" className="mr-2" alt = '#' /> Pick from existing list</Link>
              </div>
              <div className="col-md-4 mt-3 mt-md-0">
                  {/* <Link to ="WineSessionCreation" className="pick"><img src="images/add.png" className="mr-2" alt = '#'/> Add a new item</Link> */}
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
              <div className="form-group">
                <span className="cover-border"></span>
                  <label className="label">Quantity</label>
                  <input type="text" value = {listInsertion.Quantity} onChange = {(e)=>console.log(e.target.value)} className="input-field" disabled />
                  {/* <a href="#" className="bg-circle mt-3"></a><i id = {i} onClick = {this.removeEquipmentList} className="fa fa-minus" aria-hidden="true"></i></a> */}
              </div>
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
              <Link to="WineSessionCreation" className="bg-circle mt-3"><i id = {i} onClick = {this.removeEquipmentList} className="fa fa-minus" aria-hidden="true"></i></Link>
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
    {/* Equipemnt List End */}

  <Link to ="WineSessionCreation" className="save-btn btn btn-primary my-5 mx-auto" onClick={this.submitForm}>Save</Link>
         
  {/* Select Equipemnt List Start */}
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
{/* Select Equipemnt List End */}

{/* Select Shopping List */}
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
                    <label className="custom-control custom-checkbox lebelheight">
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
  {/* Select Shopping List End */}
  
  {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
    Pick a product
  </button> */}

  <div className="modal" id="allprevsession">
  <div className="modal-dialog">
    <div className="modal-content">

      <div className="modal-header">
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


      {/* <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
      </div> */}

    </div>
  </div>
</div>  

 <div className="modal" id="linkGenerator">
  <div className="modal-dialog">
    <div className="modal-content">

      <div className="modal-header">
        <h4 className="modal-title">You have successfully created a session</h4>
        <button type="button" className="close" data-dismiss="modal">&times;</button>
      </div>


      <div className="modal-body">
      <h3>Congratulations ,you have created the session "Introduction to wine testing" to be hosted by Arjun on August 13th2019 12:30PM</h3>
      <h3>You can start inviting Participants by sharing  the link below </h3>
      <div className="col-md-4" >
      <div className="form-group mb-0"><span className="cover-border"></span>
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

<div className="modal cal_modal pr-0" id="calenderModel1">
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
        {this.state.repeatSession?'':<button type="button" className="done mt-0" onClick= {this.sessionDate} data-dismiss="modal">done</button>}
        </div>
      </div>
      {this.state.repeatSession?
      <div className="wd align-self-end d-none d-md-block"><img src="images/path.png" className="w-100" alt='' /></div>:''}
      {this.state.repeatSession?
      <div className="modal-content modalbg align-self-end px-4 py-4 mt-2 mt-md-0">
      <div className="modal-header headerborder px-0">
        <h4 className="white modal-title">Repeat Session</h4>
      </div>
      <div className="modal-body px-0">
      <h5 className="white">Frequency</h5>
      <div className="d-flex flex-wrap">
      <Link to="WineSessionCreation" id='varietal' name='0' onClick = {this.sessionAttribute} className={(this.state.sessionClass[0]?"btn btn-primary":"")+" btn btn-outline-secondary text-uppercase mr-2 mt-2"}>varietal</Link>
      <Link to="WineSessionCreation" id='Every day' name='1' onClick = {this.sessionAttribute} className={(this.state.sessionClass[1]?"btn btn-primary":"btn")+" btn-outline-secondary text-uppercase mr-2 mt-2"}>Every day</Link>
      <Link to="WineSessionCreation" id='once a week' name='2' onClick = {this.sessionAttribute} className={(this.state.sessionClass[2]?"btn btn-primary":"btn")+" btn-outline-secondary text-uppercase mr-2 mt-2"}>once a week</Link>
      <Link to="WineSessionCreation" id='twice a week' name='3' onClick = {this.sessionAttribute} className={(this.state.sessionClass[3]?"btn btn-primary":"btn")+" btn-outline-secondary text-uppercase mr-2 mt-2"}>twice a week</Link>
      <Link to="WineSessionCreation" id='3 times a week' name='4' onClick = {this.sessionAttribute} className={(this.state.sessionClass[4]?"btn btn-primary":"btn")+" btn-outline-secondary text-uppercase mr-2 mt-2"}>3 times a week</Link>
      <select 
      className="custom_field mt-2 mb-0" 
      id="sessionFrequency"
      value = {this.state.sessionFrequency}
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
      <Link to="WineSessionCreation" id='1 week' name='5' onClick = {this.sessionAttribute} className={(this.state.sessionClass[5]?"btn btn-primary":"")+" btn btn-outline-secondary text-uppercase mr-2 mt-2"}>1 week</Link>
      <Link to="WineSessionCreation" id='2 weeks' name='6' onClick = {this.sessionAttribute} className={(this.state.sessionClass[6]?"btn btn-primary":"")+" btn btn-outline-secondary text-uppercase mr-2 mt-2"}>2 weeks</Link>
      <Link to="WineSessionCreation" id='3 weeks' name='7' onClick = {this.sessionAttribute} className={(this.state.sessionClass[7]?"btn btn-primary":"")+" btn btn-outline-secondary text-uppercase mr-2 mt-2"}>3 weeks</Link>
      <Link to="WineSessionCreation" id='4 weeks' name='8' onClick = {this.sessionAttribute} className={(this.state.sessionClass[8]?"btn btn-primary":"")+" btn btn-outline-secondary text-uppercase mr-2 mt-2"}>4 weeks</Link>
      <Link to="WineSessionCreation" id='5 weeks' name='9' onClick = {this.sessionAttribute} className={(this.state.sessionClass[9]?"btn btn-primary":"")+" btn btn-outline-secondary text-uppercase mr-2 mt-2"}>5 weeks</Link>
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
          <button type="button" onClick = 'this.saveSessionCalenderDetail' className="done mt-0">save</button>
      </div>
     {/* <img src="images/path.png" className="small_cont" /> */}
      {/* <div className="modalbg small_cont"></div> */}
      </div>:''}
  </div>
</div>
{/* Signup Calender Model */}

{/* Sign Up Calender Model End */}
<div className="modal cal_modal" id="signUpCalenderModel1">
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
      startDate={this.state.cutoffStartDate} endDate={this.state.cutoffEndDate} onChange={this.signUpCutOff} range = {true} displayTime ={false}  />
        */}
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
                <TimePicker
                  onChange={this.timeset}
                  value={this.state.time}
                  disableClock	={true}
                  />
                {/* <input type="text" value = {this.state.reminderSessionTime} onChange={(e)=>console.log()} className="input-field" placeholder="Time" disabled /> */}
                {/* <span className="clock-icon"></span> */}
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6 pr-4">
          <p className="mb-2 input-txt">On {this.state.reminderDay} {this.state.reminderMonth} {this.state.reminderYear}, at {this.state.reminderTime}</p>
          <div className="form-group input-txt mb-0">
              <label className="switch">
                  <input type="checkbox" 
                  id="signUpSessionStatus"
                  checked={this.state.signUpSessionStatus}
                  onChange={(e)=> this.setState({[e.target.id]:!this.state.signUpSessionStatus},()=>console.log(this.state.signUpSessionStatus))}
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
        {this.state.signUpSessionStatus?'':<button type="button"  onClick= {this.reminderDate} data-dismiss="modal" className="done mt-0">done</button>}
        </div>
      </div>
      {this.state.signUpSessionStatus?
      <div className="wd align-self-end d-none d-md-block"><img src="images/path.png" className="w-100" alt=''/></div>:''}
      {this.state.signUpSessionStatus?
      <div className="modal-content modalbg align-self-end px-4 py-4 mt-2 mt-md-0">
      <div className="modal-header headerborder px-0">
        <h4 className="white modal-title">Repeat Session</h4>
      </div>
      <div className="modal-body px-0">
      <h5 className="white">Frequency</h5>
      <div className="d-flex flex-wrap">
      <Link to="WineSessionCreation" id='varietal' name='0' onClick = {this.signUpAttribute} className={(this.state.signUpClass[0]?"btn btn-primary":"")+" btn btn-outline-secondary text-uppercase mr-2 mt-2"}>varietal</Link>
      <Link to="WineSessionCreation" id='Every day' name='1' onClick = {this.signUpAttribute} className={(this.state.signUpClass[1]?"btn btn-primary":"btn")+" btn-outline-secondary text-uppercase mr-2 mt-2"}>Every day</Link>
      <Link to="WineSessionCreation" id='once a week' name='2' onClick = {this.signUpAttribute} className={(this.state.signUpClass[2]?"btn btn-primary":"btn")+" btn-outline-secondary text-uppercase mr-2 mt-2"}>once a week</Link>
      <Link to="WineSessionCreation" id='twice a week' name='3' onClick = {this.signUpAttribute} className={(this.state.signUpClass[3]?"btn btn-primary":"btn")+" btn-outline-secondary text-uppercase mr-2 mt-2"}>twice a week</Link>
      <Link to="WineSessionCreation" id='3 times a week' name='4' onClick = {this.signUpAttribute} className={(this.state.signUpClass[4]?"btn btn-primary":"btn")+" btn-outline-secondary text-uppercase mr-2 mt-2"}>3 times a week</Link>
      <select className="custom_field mt-2 mb-0" 
      id="signUpFrequency"
      value = {this.state.signUpFrequency}
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
      <Link to="WineSessionCreation" id='1 week' name='5' onClick = {this.signUpAttribute} className={(this.state.signUpClass[5]?"btn btn-primary":"")+" btn btn-outline-secondary text-uppercase mr-2 mt-2"}>1 week</Link>
      <Link to="WineSessionCreation" id='2 weeks' name='6' onClick = {this.signUpAttribute} className={(this.state.signUpClass[6]?"btn btn-primary":"")+" btn btn-outline-secondary text-uppercase mr-2 mt-2"}>2 weeks</Link>
      <Link to="WineSessionCreation" id='3 weeks' name='7' onClick = {this.signUpAttribute} className={(this.state.signUpClass[7]?"btn btn-primary":"")+" btn btn-outline-secondary text-uppercase mr-2 mt-2"}>3 weeks</Link>
      <Link to="WineSessionCreation" id='4 weeks' name='8' onClick = {this.signUpAttribute} className={(this.state.signUpClass[8]?"btn btn-primary":"")+" btn btn-outline-secondary text-uppercase mr-2 mt-2"}>4 weeks</Link>
      <Link to="WineSessionCreation" id='5 weeks' name='9' onClick = {this.signUpAttribute} className={(this.state.signUpClass[9]?"btn btn-primary":"")+" btn btn-outline-secondary text-uppercase mr-2 mt-2"}>5 weeks</Link>
      <select className="custom_field mt-2 mb-0" 
      id="signUpDuration"
      value = {this.state.signUpDuration}
      onChange = {this.sessionInfo}>
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
  {/* <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="modal-title white">Select Duration</h4>
        <button type="button" className="close white closepopup" data-dismiss="modal">&times;</button>
      </div>
      <div className="modal-body">
      <h3>Calender</h3>
      <ReactLightCalendar timezone = {this.state.localTimeZone}
      disableDates={date => date <= (new Date().getTime())}
      startDate={this.state.cutoffStartDate} endDate={this.state.cutoffEndDate} onChange={this.signUpCutOff} range = {true} displayTime ={true} />
      <div className="botm_container">
        <div className="row mt-4">
          <div className="col-md-5 mt-2">
            <div className="form-group"><span className="cover-border"></span>
                <label className="label">Enter Time</label>
                <input type="text" value = {this.state.reminderSessionTime} onChange={(e)=>console.log()} className="input-field" placeholder="12:00 PM" />
                <span className="clock-icon"></span>
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
      </div>
  </div> */}
</div>
{/* Sign up Calender Model */}

<div className="modal" id="myPickWineModel">
  <div className="modal-dialog dialogwidth">
    <div className="modal-content modalbg">
      <div className="modal-header headerborder">
      <h4 className="modal-title white">Pick a Product</h4>
      <button type="button" className="close white closepopup" onClick={this.resetEmoji} data-dismiss="modal">×</button>
    </div>
    <form>
    <div className="modal-body ">
      <div className="card cardbg">
        <article className="card-group-item">
          <div className="filter-content">
          <div className="card-body ">
          {/* <form> */}
          {this.state.wineProduct.map((row,i) =>
          <label className="form-check labelborder" key ={i}>
          <input 
          className="form-radio" 
          type="checkbox" 
          name={row.product_name} 
          id={i} 
          checked={row.type}
          value={row.product_name} 
          onChange={this.wineProductSelect}/>
          <span className="form-check-label">{row.product_name}</span>
          </label>
          )}
          {/* <label className="form-check labelborder">
          <input className="form-radio" type="radio" name="audio-type" id="lbl-communications" value="communications" /><span className="form-check-label">Nissan Altima</span></label>
          <label className="form-check labelborder">
          <input className="form-radio" type="radio" name="audio-type" id="lbl-communications" value="communications" /><span className="form-check-label">Another Brand</span></label> */}
        {/* </form> */}
      </div>
      </div>
      </article>
      </div>
      <div className="ooterborder text-center mt-4"><button className="btn-primary"   onClick={this.setChooseWineStatus} data-dismiss="modal">Done</button></div>
      </div>
      </form>
      <div className="modal-footer footerborder"></div>
    </div>
   </div>
  </div>

        <div className="modal show" id="pick_emojis_modal">
        <div className="modal-dialog emojis-dialogwidth">
            <div className="modal-content">
                <div className="modal-header modalbg">
                    <h4 className="modal-title white">Assign Emogis</h4>
                    <button type="button" className="close" id = {this.state.emojiForWineProduct}  data-dismiss="modal">×</button>
                </div>
                <form>
                <div className="modal-body modalbg">
                    
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card cardbg">
                                {this.state.tablerows.length>0?
                                (this.state.tablerows[this.state.emojiForWineProduct].appearanceSelect.map((row,i) => (
                                  (i===0?
                                 <label className="form-check mb-4" key = {i}>
                                    <input 
                                    className="form-radio"
                                    id={i}
                                    name='appearanceStatus'
                                    type = "checkbox"
                                    checked={row.appearanceStatus} 
                                    onChange={this.appearanceEmojiSelect}
                                    ></input><span className="form-check-label ml-3">APPEARANCE</span></label>  
                                 :'') ))):''}                        
                                    {/* {this.state.tablerows[this.state.emojiForWineProduct].listAppearance.map((row,i) => ( */}
                                    {this.state.tablerows.length>0?
                                    (this.state.tablerows[this.state.emojiForWineProduct].listAppearance.map((row,i) => (
                                    <label className="form-check mb-4" key = {i}>
                                        <input className="form-radio" 
                                       type="checkbox" 
                                       name={row.name}
                                       id ={i} 
                                       checked={row.status} 
                                       onChange={this.apperanceSelect} />
                                        <span className="form-check-label">
                                        <img src={row.path} className="mx-3" alt="" />
                                        {row.name}</span>
                                    </label>
                                    ))) :''}
                                  </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card cardbg"> 
                                    {/* <label className="form-check mb-4">
                                    <span className="form-check-label ml-3">AROMA</span></label>
                                                                  */}
                                    {this.state.tablerows.length>0?
                                (this.state.tablerows[this.state.emojiForWineProduct].aromaSelect.map((row,i) => (
                                  (i===0?
                                 <label className="form-check mb-4" key = {i}>
                                    <input 
                                    className="form-radio"
                                    id={i}
                                    name='appearanceStatus'
                                    type = "checkbox"
                                    checked={row.appearanceStatus} 
                                    onChange={this.aromaEmojiSelect}
                                    ></input><span className="form-check-label ml-3">AROMA</span></label>  
                                 :'') ))):''}                              
                                    {this.state.tablerows.length>0?
                                    (this.state.tablerows[this.state.emojiForWineProduct].listAroma.map((row,i) => (
                                    <label className="form-check mb-4" key = {i}>
                                       <input className="form-radio" 
                                        type="checkbox" 
                                        name={row.name}
                                        id ={i} 
                                        checked={row.status} 
                                        onChange={this.aromaSelect} />
                                        <span className="form-check-label">
                                        <img src={row.path} className="mx-3" alt='' />{row.name}</span>
                                        </label>
                                    ))):''}
                                  </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card cardbg"> 
                                    {/* <label className="form-check mb-4">
                                    <span className="form-check-label ml-3">PALATE</span></label>                             
                                     */}

                                {this.state.tablerows.length>0?
                                (this.state.tablerows[this.state.emojiForWineProduct].palateSelect.map((row,i) => (
                                  (i===0?
                                 <label className="form-check mb-4" key = {i}>
                                    <input 
                                    className="form-radio"
                                    id={i}
                                    name='palateStatus'
                                    type = "checkbox"
                                    checked={row.appearanceStatus} 
                                    onChange={this.palateEmojiSelect}
                                    ></input><span className="form-check-label ml-3">PALATE</span></label>  
                                 :'') ))):''}
                                    {this.state.tablerows.length>0?
                                    (this.state.tablerows[this.state.emojiForWineProduct].listPalate.map((row,i) => (
                                    <label className="form-check mb-4" key = {i}>
                                        <input 
                                        className="form-radio" 
                                        type="checkbox" 
                                        name={row.name}
                                        id ={i} 
                                        checked={row.status} 
                                        onChange={this.palateSelect} />
                                        <span className="form-check-label">
                                        <img src={row.path} className="mx-3" alt="" />
                                        {row.name}</span>
                                       
                                    </label>
                                     ))):''}
                                    </div>
                            </div>
                        </div>
                    
                </div>
                <div className="ooterborder text-center mt-4"><button className="btn-primary"   onClick={this.finalEmoji} data-dismiss="modal">SELECT</button></div>
                </form>
            </div>
        </div>
    </div>

  {/* Add a new Product Start  */}
  <div className="modal" id="add_product_modal">
        <div className="">
            <div className="modal-content equipmodalbg">
                <div className="modal-header px-4">
                    <h4 className="modal-title white">Add a new Product<span>Tap on an attribute to make it active in the Product list</span></h4>
                    <button type="button" className="close white closepopup" data-dismiss="modal">×</button>
                </div>
                <div className="modal-body px-4">
                    <div className="card cardbg mt-4">
                        <div className="form-group mb-0"><span className="cover-border"></span>
                            <label className="label">Name of the Product</label>
                            <input type="text"  id='shoppingProductName' value={this.state.shoppingProductName} onChange={(e)=>this.setState({[e.target.id]:e.target.value},()=>console.log('*****',this.state.shoppingProductName))} className="input-field" />
                        </div>
                    </div>
                    <div className="card cardbg">
                        <h4 className="white mt-4 mb-3">Add Attribute</h4>
                        <div className="d-flex flex-wrap">
                        {this.state.addProduct.length>0?
                        (this.state.addProduct[0].attributes.map((row,i)=>
                        // {row.attributes.map((rows,l)=>
                        <Link to="wine-demo" key={i} id ={i} name={row.attrKey} onClick = {this.addAttribute} className={(row.status?"btn btn-primary":"")+" btn btn-outline-secondary text-uppercase mr-2 mt-2"} >{row.attrKey}</Link>
                        // )}
                        )):''}
                            {/* <Link to="wine-demo"id ='varietal' name='0' onClick = {this.addAttribute} className={(this.state.something[0]?"btn btn-primary":"")+" btn btn-outline-secondary text-uppercase mr-2 mt-2"} >varietal</Link> */}
                            {/* <Link to="wine-demo" id ='year' name='1' onClick = {this.addAttribute} className={(this.state.something[1]?"btn btn-primary":"")+" btn btn-outline-secondary text-uppercase mr-2 mt-2"}>year</Link>
                            <Link to="wine-demo" id ='country' name='2' onClick = {this.addAttribute} className={(this.state.something[2]?"btn btn-primary":"")+" btn btn-outline-secondary text-uppercase mr-2 mt-2"}>country</Link>
                            <Link to="wine-demo" id = 'applellation' name='3' onClick = {this.addAttribute} className={(this.state.something[3]?"btn btn-primary":"")+" btn btn-outline-secondary text-uppercase mr-2 mt-2"}>applellation</Link>
                            <Link to="wine-demo" id = 'harvest date' name='4' onClick = {this.addAttribute} className={(this.state.something[4]?"btn btn-primary":"")+" btn btn-outline-secondary text-uppercase mr-2 mt-2"}>harvest date</Link>
                            <Link to="wine-demo" className="btn btn-outline-secondary text-uppercase mr-2 mt-2">alcohol acidity</Link>
                            <Link to="wine-demo" className="btn btn-outline-secondary text-uppercase mr-2 mt-2">bottle date</Link>
                            <Link to="wine-demo" className="btn btn-outline-secondary text-uppercase mr-2 mt-2">acidity</Link>
                            <Link to="wine-demo" className="btn btn-outline-secondary text-uppercase mr-2 mt-2">aging</Link>
                            <Link to="wine-demo" className="btn btn-primary text-uppercase mr-2 mt-2">price</Link>
                            <Link to="wine-demo" className="btn btn-outline-secondary text-uppercase mr-2 mt-2">score</Link>
                            <Link to="wine-demo" className="btn btn-outline-secondary text-uppercase mr-2 mt-2">case production</Link>
                            <Link to="wine-demo" className="btn btn-outline-secondary text-uppercase mr-2 mt-2">storage temperature</Link>
                            <Link to="wine-demo" className="btn btn-primary mr-2 mt-2">pH</Link>
                            <Link to="wine-demo" className="btn btn-primary text-uppercase mr-2 mt-2">appearance</Link>
                            <Link to="wine-demo" className="btn btn-outline-secondary text-uppercase mr-2 mt-2">varietal composition</Link>
                            <Link to="wine-demo" className="btn btn-primary text-uppercase mr-2 mt-2">aroma</Link>
                            <Link to="wine-demo" className="btn btn-primary text-uppercase mr-2 mt-2">palate</Link>
                            <Link to="wine-demo" className="btn btn-primary text-uppercase mr-2 mt-2">winemaking notes</Link>
                            <Link to="wine-demo" className="btn btn-primary text-uppercase mr-2 mt-2">testing notes</Link>
                            <Link to="wine-demo" className="btn btn-primary text-uppercase mr-2 mt-2">pairs with</Link> */}
                        </div>
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
                            {/* <div className="col-md-4">
                                <div className="form-group mb-0"><span className="cover-border"></span>
                                    <label className="label">Varietal</label>
                                    <input type="text" id = 'shoppingVarietal' value = {this.state.shoppingVarietal} onChange={(e)=>this.setState({[e.target.id]:e.target.value},()=>console.log(this.state.shoppingVarietal))} className="input-field" />
                                </div>
                            </div> */}
                            {/* <div className="col-md-4">
                                <div className="form-group mb-0"><span className="cover-border"></span>
                                    <label className="label">Price</label>
                                    <input type="text" id = 'shoppingPrice' value = {this.state.shoppingPrice} onChange={(e)=>this.setState({[e.target.id]:e.target.value},()=>console.log(this.state.shoppingPrice))} className="input-field" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group mb-0">
                                    <label className="label">pH</label>
                                    <input type="text" id = 'shoppingPh' value = {this.state.shoppingPh} onChange={(e)=>this.setState({[e.target.id]:e.target.value},()=>console.log(this.state.shoppingPh))} className="input-field footerborder" />
                                </div>
                            </div> */}
                        </div>
                        {/* <div className="row mt-4">
                            <div className="col-md-4">
                                <div className="form-group mb-0"><span className="cover-border"></span>
                                    <label className="label">Appearance</label>
                                    <input type="text" id = 'shoppingAppearance' value = {this.state.shoppingAppearance} onChange={(e)=>this.setState({[e.target.id]:e.target.value},()=>console.log(this.state.shoppingAppearance))} className="input-field" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group mb-0"><span className="cover-border"></span>
                                    <label className="label">Aroma</label>
                                    <input type="text" id = 'shoppingAroma' value = {this.state.shoppingAroma} onChange={(e)=>this.setState({[e.target.id]:e.target.value},()=>console.log(this.state.shoppingAroma))} className="input-field" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group mb-0">
                                    <label className="label">Palate</label>
                                    <input type="text" id = 'shoppingPalate' value = {this.state.shoppingPalate} onChange={(e)=>this.setState({[e.target.id]:e.target.value},()=>console.log(this.state.shoppingPalate))} className="input-field footerborder" />
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="row mt-4">
                            <div className="col-md-4">
                                <div className="form-group mb-0"><span className="cover-border"></span>
                                    <label className="label">Testing Notes</label>
                                    <textarea rows="5" id = 'shoppingTestingNote' value = {this.state.shoppingTestingNote} onChange={(e)=>this.setState({[e.target.id]:e.target.value},()=>console.log(this.state.shoppingTestingNote))} className="input-field"></textarea>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group mb-0"><span className="cover-border"></span>
                                    <label className="label">Winemaking Notes</label>
                                    <textarea rows="5" id = 'shoppingWineMakingNote' value = {this.state.shoppingWineMakingNote} onChange={(e)=>this.setState({[e.target.id]:e.target.value},()=>console.log(this.state.shoppingWineMakingNote))} className="input-field"></textarea>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group mb-0">
                                    <label className="label">Pairs With</label>
                                    <textarea rows="5" id = 'shoppingPair' value = {this.state.shoppingPair} onChange={(e)=>this.setState({[e.target.id]:e.target.value},()=>console.log(this.state.shoppingPair))} className="input-field"></textarea>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="donebg">
                <button type="button" onClick= {this.saveProductList} className="done mt-4">Done</button>
            </div>
        </div>
    </div>
  {/* Add a new Product End */}

  {/* Select from existing host start */}
  <div className="modal" id="pick_host_modal">
        <div className="">
            <div className="modal-content equipmodalbg">
                <div className="modal-header">
                    <div className="plusicon"><i className="fa fa-plus" onClick={this.addToHost} aria-hidden="true"></i></div>
                    <h4 className="modal-title white">Pick Session Host(s)</h4>
                    <button type="button" className="close white closepopup" data-dismiss="modal">×</button>
                </div>
                <div className="modal-body ">
                    <div className="card cardbg headerborder pb-4">
                        <div className="searchbar">
                            <input type="text" 
                            id = "searchhostList" 
                            value ={this.state.searchhostList} 
                            onChange = {(e)=> this.setState({[e.target.id]:e.target.value},()=> console.log(this.state.searchhostList))}
                            className="searchbarinput" 
                            placeholder="Search for Host" />
                            <button className="inputbtn" type="button" onClick = {this.searchHostListMethod}></button>
                        </div>
                    </div>
                    <div className="card cardbg">
                        <div className="row mt-4">
                        {this.state.hostList.map((row,i) => (
                          (i%2===0?
                            <div className="col-md-6 pl-md-0" key = {i}>
                                <label className="custom-control custom-checkbox lebelheight">
                                    <input type="checkbox"
                                    id={i}
                                    checked = {row.type}
                                    onChange= {this.selectHost}
                                    className="form-radio" />
                                    <img src={row.image} className="ml-2 mr-3" alt="user-icon" />
                                    <div>
                                        <p className="checktxt_name pb-1">{row.username}</p>
                                        <p className="checktxt">Next session on 22 JUL, 3:45 PM</p>
                                    </div>

                                </label>
                                                             
                            </div>:''
                         )))}
                        {this.state.hostList.map((row,i) => (
                        (i%2===1?
                        <div className="col-md-6" key = {i}>
                              <label className="custom-control custom-checkbox lebelheight">
                                    <input type="checkbox"
                                    id={i}
                                    checked = {row.type}
                                    onChange = {this.selectHost}
                                    className="form-radio" />
                                    <img src={row.image} className="ml-2 mr-3" alt="user-icon" />
                                    <div>
                                        <p className="checktxt_name pb-1">{row.username}</p>
                                        <p className="checktxt">Next session on 22 JUL, 3:45 PM</p>
                                    </div>

                                </label>
                                
                            </div>:''
                            )))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="donebg">
                {/* <button type="button" className="done mt-4">Done</button> */}
            </div>
        </div>
    </div>
  {/* Select from existing host end */}

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

export default DemoSessionWine;
