<<<<<<< HEAD
import React, { Component } from "react";
import axios from 'axios'; 
import SimpleReactValidator from 'simple-react-validator';
// import Select from 'react-select';
// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
//   { value: 'chocosdsd', label: 'chocosdsd' },
//   { value: 'chocosdnsdk', label: 'chocosdnsdk' }
  
// ];
const users = [
  {id: 1, name: 'A'},
  {id: 2, name: 'B'},
  {id: 3, name: 'C'},
  {id: 4, name: 'D'},
];

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      // selectedOption: null,
      totalViews : '',
      weeklyAttendance:'',
      totalRevenue:'',
      messageCount:'',
      //////////////////////////
      session:[],
      sessionName:'',
        when:'',
        phoneNumber:'',
        description:'',
        minimumParticipants:'',
        maximumParticipants:'',
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
        ///////////////////////
        allowLocation:false,
        ///////////////////////
        ActivityName: '',
        ActivityType:2,
        DurationType:'',
        Count:'',
        Video:'',
        TargetBPM:'',
        TargetZone:'',
        ////////////////////////
        scriptHeartRateMonitor : false,
        scriptZoneTracking:false,
        ///////////////////////////
        Equipment:'',
        ages : ['Mongo', 'Apple', 'Grape', 'Fruit'],
        //////////////////////////
      tablerows:[
            {ActivityName:"Tom",ActivityType:"Moody",DurationType:23,Count:"30sec",Video:"NA",TargetBPM:"88bpm",TargetZone:"67%"},
            {ActivityName:"Tommy",ActivityType:"Moody",DurationType:23,Count:"30sec",Video:"NA",TargetBPM:"88bpm",TargetZone:"67%"}
           ],
           rows:[]
    }
    this.setHeaderValue();
    this.validator = new SimpleReactValidator();
}
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
addRow = () =>{
  // add new data from here    
  var newdata = {ActivityName:this.state.ActivityName,ActivityType:this.state.ActivityType,DurationType:this.state.DurationType,Count:this.state.Count,Video:this.state.Video,TargetBPM:this.state.TargetBPM,TargetZone:this.state.TargetZone}    
  //take the existing state and concat the new data and set the state again    
this.setState({ tablerows: this.state.tablerows.concat(newdata ) });    
}
myFunction = () => {
  const a = this.state.Equipment;
  console.log(this.state.Equipment,a);
  console.log(this.state.ages.filter(this.checkAdult));
}
 checkAdult=(age) => {
  return age === this.state.Equipment;
}
// handleChange = selectedOption => {
//   this.setState(
//     { selectedOption },
//     () => console.log(`Option selected:`, this.state.selectedOption)
//   );
// };
submitForm = (event) => {
  event.preventDefault();
  if (this.validator.allValid()) {
    const sessionInformation ={
      sessionName:this.state.sessionName,
      when:this.state.when,
      description:this.state.description,
      pick_Duration:this.state.exampleFormControlSelect1,
      pick_Difficulty_level:this.setState.exampleFormControlSelect2,
      minimumParticipants:this.state.minimumParticipants,
      maximumParticipants:this.state.maximumParticipants,
      searchParticipant:this.state.searchParticipant,
      sessionCharge:this.state.sessionCharge,
      amountCharge:this.state.amountCharge
      }
      const reminder = {
        hostSessionStart:this.state.hostSessionStart,
        participantSessionStart:this.state.participantSessionStart,
        signUpDateTime:this.state.signUpDateTime,
        minimumNotMet:this.state.minimumNotMet
      }
      const privacy ={
        disableParticipant:this.state.disableParticipant,
        showParticipant:this.state.showParticipant,
        allowParticipant:this.state.allowParticipant
      }
      const groupLocation = {
        groupLocation : this.state.allowLocation
        }
      const fitnessActivity = {
        fitnessActivity : this.state.tablerows
      } 
      const script ={
        scriptHeartRateMonitor:this.state.scriptHeartRateMonitor,
        scriptZoneTracking:this.state.scriptZoneTracking

      }  
     //   const fitnessData = {
    //     reminder,
    //     sessionInformation,
    //     privacy
    //   }
      axios.post(`https://jsonplaceholder.typicode.com/users`, { fitnessActivity,reminder,privacy,sessionInformation,groupLocation,script})
      .then(res => {
        console.log(res);
        console.log('================================>',res.data);
      })
    } else {
      this.validator.showMessages();
      // rerender to show messages for the first time
      // you can use the autoForceUpdate option to do this automatically`
      this.forceUpdate();
    }
    }


  render() {
    return (
      <div className="container-fluid">
        <div className="row top-header p-4">
          <div className="col-lg-2 d-flex d-md-block justify-content-center p-2">
            <img src="/images/login-logo.png" className="logo" />
          </div>
          <div className="col-lg-4 d-flex d-md-block justify-content-center p-4">
            <div className="user-info d-flex align-items-center">
              <img src="images/attendee.png" className="user-avtar" />
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
                <img src="/images/message.png" />
                <span className="message-count">{this.state.messageCount}</span>
              </div>
            </div>
          </div>
        </div>

        <h4 className="text-white pb-3">CREATE SESSION</h4>

        <div className="gray-box">
          <div className="session">
            <h3 className="info">Session Info</h3>
          </div>

          <div className="container-fluid register-form">
            <div className="form">
              <div className="form-content">
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">Session Name</label>
                      <input type="text" id = "sessionName" value = {this.state.sessionName} onChange = {this.sessionInfo} className="input-field" />
                      {this.validator.message('sessionName', this.state.sessionName, 'required')}
                    </div>
                    <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">Description</label>
                      <textarea type="text" id="description" value = {this.state.description} onChange = {this.sessionInfo} className="input-field"></textarea>
                      {this.validator.message('description', this.state.description, 'required|min:1|max:100')}                   
                    </div>									 
                    <div className="form-group">													
                      <span className="cover-border"></span>
                      <label className="label">Level</label>														
                      <select
                        className="input-field"
                        id="exampleFormControlSelect2"
                        value = {this.state.exampleFormControlSelect2}
                        onChange = {this.sessionInfo}
                      >
                        <option>Pick a Difficulty level</option>											
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                      {this.validator.message('level', this.state.exampleFormControlSelect2, 'required|numeric')}						  
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
                      />
                      <span className="when-icon"></span>
                    </div>
                    <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">How long?</label>
                      <select
                        className="input-field"
                        id="exampleFormControlSelect1"
                        value = {this.state.exampleFormControlSelect1}
                        onChange = {this.sessionInfo}
                      >
                        <option>Pick a Duration</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                      {this.validator.message('How long', this.state.exampleFormControlSelect1, 'required|numeric')}
                      <span className="dropdown-icon"></span>
                    </div>
                    <div className="form-group">
                      <span className="cover-border"></span>
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
                        {this.validator.message('Minimum participants', this.state.minimumParticipants, 'required|numeric')}
                        <span className="signedup_2"></span>
                      </div>
                    </div>
                    <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">Maximum Participants</label>
                      <input type="text" id = "maximumParticipants" value = {this.state.maximumParticipants} onChange = {this.sessionInfo} className="input-field" placeholder="max 50" />
                      {this.validator.message('Maximum Participants', this.state.maximumParticipants, 'required|min:1|max:50')}
                      <span className="signedup_2"></span>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="form-group input-txt">
                    <label className="switch">
                        <input id = "searchParticipant" checked={this.state.searchParticipant} onChange = {(e)=>{this.setState({[e.target.id]:!this.state.searchParticipant},()=>console.log('searchparticipant',this.state.searchParticipant))}} type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                      <span>Show Participants Signed Up Count on Searches?</span>
                    </div>
                    <div className="form-group input-txt">
                      <label className="switch">
                          <input id = "sessionCharge" defaultChecked = {this.state.sessionCharge} onChange = {(e)=>this.setState({[e.target.id]:!this.state.sessionCharge},()=>console.log("sessionCharge",this.state.sessionCharge))} type="checkbox" />
                          <span className="slider round"></span>
                      </label>
                      <span>Charging for Session?</span>
                      {this.state.sessionCharge?<p className="gray-text ml-5 mt-3 mb-4">You have enabled it in the Channel</p>:''}
                    </div>
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
                        {this.validator.message('Charge Amount', this.state.amountCharge, 'required|numeric|min:1')}
                        <span className="dollar"></span>
                      </div>
                    </div>
                  </div>

                  <button className="btn btn-primary" onClick={this.submitForm}>Button</button>  

                  
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
                      <input type="text" id ="hostSessionStart" value = {this.state.hostSessionStart} onChange = {this.sessionInfo} className="input-field" />
                      {this.validator.message('Host Session', this.state.hostSessionStart, 'required')}
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
                      />
                      {this.validator.message('Sign up Date and Time', this.state.signUpDateTime, 'required')}
                      <span className="when-icon"></span>
                    </div>
                    
                  </div>
                  <div className="col-md-4">
                    <p className="text1 mb-4">for Participants prior to start of Session</p>
                    <div className="form-group mt-2">
                      <span className="cover-border"></span>
                      <label className="label">Enter a value in Minutes</label>
                      <input type="text" id ="participantSessionStart" value = {this.state.participantSessionStart} onChange = {this.sessionInfo} className="input-field" />
                      {this.validator.message('Participant Session', this.state.participantSessionStart, 'required')}
                      <span className="clock-icon"></span>
                    </div>
                    <p className="text1 mb-4">for 'minimum not met'</p>
                    <div className="form-group mt-2">
                      <span className="cover-border"></span>
                      <label className="label">Enter a value in days</label>
                      <input type="text" id ="minimumNotMet" value = {this.state.minimumNotMet} onChange ={this.sessionInfo} className="input-field" />
                      {this.validator.message('Minimum not met', this.state.minimumNotMet, 'required|numeric')}
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
                  ref = "searchParticipant1" 
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
                    ref = "searchParticipant"
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
                   //  ref = "searchParticipant"
                     onChange = {(e)=> this.setState({[e.target.id]:!this.state.allowParticipant},()=>console.log("allowParticipant",this.state.allowParticipant))} 
                    />
                    <span className="slider round"></span>
                </label>
                <span>Allow Participants to pick their own playlist?</span>
                
              </div>
            </div>
        </div>
        </div>
        <div className="gray-box2">
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
        <div className="p-3">
          <div className="session"><h3 className="info">Select Host(s)</h3></div>
          <div className="row">
            <div className="col-md-4">
                <a href="#" className="pick"><img src="images/picking.png" className="mr-2" /> Pick from existing hosts</a>
            </div>
            <div className="col-md-4">
                <a href="#" className="pick"><img src="images/add.png" className="mr-2" /> Add a new Host</a>
            </div>
          </div>
        </div>
        <div className="gray-box2">
          <div className="session"><h3 className="info">Script</h3></div>
          <div className="row">
            <div className="col-md-5">
              <span className="white-text">Start next activity?</span>
              <a href="#" className="btn btn-primary text-uppercase mr-2">automatic</a>
              <a href="#" className="btn btn-outline-secondary text-uppercase">manual</a>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                  <span className="cover-border"></span>
                  <label className="label">Pick Emojis</label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Pick a date and time"
                  />
                  <span className="when-icon"></span>
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
              {this.state.tablerows.map((row,i) => (
                <tbody key = {i}>
                <tr>
                  <td>{row.ActivityName}</td>
                  <td>{row.ActivityType}</td>
                  <td>{row.DurationType}</td>
                  <td>{row.Count}</td>
                  <td>{row.Video}</td>
                  <td>{row.TargetBPM}</td>
                  <td>{row.TargetZone}</td>
                  <td className="d-flex justify-content-center">
                    <a href="#" className="mr-2 bg-circle"><i className="fa fa-bars" aria-hidden="true"></i></a>
                    <a href="#" className="bg-circle"><i className="fa fa-minus" aria-hidden="true"></i></a>
                  </td>
                </tr>
                
              </tbody>            ))}

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
                    <input type="text" id = "ActivityName" value= {this.state.ActivityName} 
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
                        <option value ='2'>2</option>
                        <option value ='3'>3</option>
                        <option value ='4'>4</option>
                        <option value ='5'>5</option>
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
                        <option value = '2'>2</option>
                        <option value = '3'>3</option>
                        <option value = '4'>4</option>
                        <option value = '5'>5</option>
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
          <a href="#" className="activity-link pl-3"><span onClick = {this.addRow}>+</span> Activity</a>
        </div>
        <div className="p-3 gray-box no-border-radius">
          <div className="session"><h3 className="info">Shopping List</h3></div>
          <div className="row">
            <div className="col-md-4">
                <a href="#" className="pick" data-toggle="modal" data-target="#myModal3"><img src="images/picking.png" className="mr-2" /> Pick from existing list</a>
            </div>
            <div className="col-md-4">
                <a href="#" className="pick"><img src="images/add.png" className="mr-2" /> Add a new Product</a>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
            <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">item Name</label>
                      <input type="text" className="input-field" />
                    </div>
            </div>
            <div className="col-md-3">
            <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">Quantity</label>
                      <input type="text" className="input-field" />
                    </div>
            </div>
            <div className="col-md-4">
            <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">Item  notes</label>
                      <input type="text" className="input-field" />
                    </div>
            </div>
            <div className="col-md-1">
              <a href="#" className="bg-circle mt-3"><i className="fa fa-minus" aria-hidden="true"></i></a>
            </div>
          </div>
          
        </div>
        <div className="p-3 gray-box2 no-border-radius">
          <div className="session"><h3 className="info">Equipment List</h3></div>
          <div className="row">
            <div className="col-md-4">
                <a href="#" className="pick" data-toggle="modal" data-target="#myModal2"><img src="images/picking.png" className="mr-2" /> Pick from existing list</a>
            </div>
            <div className="col-md-4">
                <a href="#" className="pick"><img src="images/add.png" className="mr-2" /> Add a new item</a>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
            <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">item Name</label>
                      <input type="text" className="input-field" />
                    </div>
            </div>
            <div className="col-md-3">
            <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">Quantity</label>
                      <input type="text" className="input-field" />
                    </div>
            </div>
            
            <div className="col-md-1">
              <a href="#" className="bg-circle mt-3"><i className="fa fa-minus" aria-hidden="true"></i></a>
            </div>
          </div>
          
        </div>
        <a href="#" className="save-btn btn btn-primary my-5 mx-auto">Save</a>
        <div className="modal" id="myModal">
    <div className="modal-dialog dialogwidth">
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
    <div className="">
      <div className="modal-content equipmodalbg">
      
        <div className="modal-header headerborder">
          <div className="plusicon"><i className="fa fa-plus" aria-hidden="true"></i></div>
          <h4 className="modal-title white">Pick from existing Equipments list</h4>
          <button type="button" className="close white closepopup" data-dismiss="modal">&times;</button>
        </div>
        
        <div className="modal-body ">
         <div className="card cardbg">
                
                
                <div className="searchbar">
                  <input type="text" id ="Equipment" value = {this.state.Equipment}  
                  onChange = {(e)=> this.setState({[e.target.id]:e.target.value},()=>console.log('Equipment',this.state.Equipment))} className="searchbarinput" placeholder="Search for Equipment"/>
                  <button className="inputbtn" onClick = {this.myFunction} type="button">
                     
                  </button>
                  {/* <Select
                    value={this.state.selectedOption}
                    onChange={this.handleChange}
                    options={options}
                  /> */}
                </div>
                 <div className="checkboxdiv">
                      <div className="mt-4"></div>
                      <label className="custom-control custom-checkbox lebelheight">
                        <input type="checkbox"  className="form-radio"/>
                        <span className="checktxt">i</span>
                      </label>

                      {/* <label className="custom-control custom-checkbox lebelheight">
                        <input type="checkbox" className="form-radio"/>
                        <span className="checktxt">Nam dapibus nisl vit.</span>
                      </label>

                     <label className="custom-control custom-checkbox lebelheight">
                        <input type="checkbox" className="form-radio"/>
                        <span className="checktxt">Donec facilisis tort.</span>
                      </label> */}
                </div>
                
           
{/* 
                <div className="row checkboxdiv_3">
                  <div className="col-md-4">
                    <label className="custom-control custom-checkbox lebelheight">
                      <input type="checkbox" className="form-radio"/>
                      <span className="checktxt">Curabitue lobortis.</span>
                    </label>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <span className="cover-border"></span>
                      <input type="text" className="input-field-2" placeholder="Quantity"/></div>
                  </div>
                </div> */}

                
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
 

  <div className="modal" id="myModal3">
    <div className="">
      <div className="modal-content equipmodalbg">
      
        <div className="modal-header headerborder">
          <div className="plusicon"><i className="fa fa-plus" aria-hidden="true"></i></div>
          <h4 className="modal-title white">Pick from existing Shopping list</h4>
          <button type="button" className="close white closepopup" data-dismiss="modal">&times;</button>
        </div>
        
        <div className="modal-body ">
         <div className="card cardbg">
                
                
                <div className="searchbar">
                  <input type="text" className="searchbarinput" placeholder="Search for Equipment"/>
                  <button className="inputbtn" type="button">
                     
                  </button>
                </div>


                <div className="checkboxdiv">
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
                </div>

                <div className="row checkboxdiv_3">
                  <div className="col-md-4">
                    <label className="custom-control custom-checkbox lebelheight">
                      <input type="checkbox" className="form-radio"/>
                      <span className="checktxt">In hac habitasse pla.</span>
                    </label>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group"><span className="cover-border"></span><input type="text" className="input-field-2" placeholder="Quantity"/></div>
                  </div>
                  <div className="col-md-5">
                    <div className="form-group"><span className="cover-border"></span><input type="text" className="input-field-2" placeholder="Item Notes"/></div>
                  </div>
                </div>

                
                <div className="checkboxdiv_2">
                <label className="custom-control custom-checkbox lebelheight">
                  <input type="checkbox" className="form-radio"/>
                  <span className="checktxt">Mauris non tempor qu.</span>
                </label>

                <label className="custom-control custom-checkbox lebelheight">
                  <input type="checkbox" className="form-radio"/>
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
                </div>

        </div>
         
        </div>
        
       </div>
      </div>
       <div className="donebg"><button type="button" className="done">Done</button></div>

    </div>
  </div>
  
  
  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
    Pick a product
  </button>
      </div>
    );
  }
}

export default Header;
=======

import React, { Component } from "react";
import axios from "axios";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
        sessions: [],
        session_details: {}
    }
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
          session_details: res.data.responseData,
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


  render() {

    let allSessions = '';

    allSessions = this.state.sessions.map((session, idx) => {
       
          const { id, Name, channelId, hostId, interestId } = session;
          return (
            <tr data-position="100000000000000" id={"online-user-row-"+id} key={idx}>
            <td>{idx+1}</td>
            <td>{session.name.toLowerCase()}</td>
           <td>{session.channelId}</td>
           <td>{session.hostId}</td>
             <td>{session.interestId}</td>
             <td><input type="radio" name="id" 
                            value={id}   
                            onChange={this.onSessionChanged} /></td>
            </tr>
          );
       
      })

 console.log('------lalit--------------',this.state.session_details.name)

    return (
      <div className="container-fluid">
        <div className="row top-header p-4">
          <div className="col-lg-2 d-flex d-md-block justify-content-center p-2">
            <img src="/images/login-logo.png" className="logo" />
          </div>
          <div className="col-lg-4 d-flex d-md-block justify-content-center p-4">
            <div className="user-info d-flex align-items-center">
              <img src="images/attendee.png" className="user-avtar" />
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
                <h3>66%</h3>
              </div>
              <span className="border-right gray-border"></span>
              <div className="header-info-right">
                <p>Total Views</p>
                <h3>45.6K</h3>
              </div>
              <span className="border-right gray-border"></span>
              <div className="header-info-right">
                <p>Total Revenue</p>
                <h3>$44,000</h3>
              </div>
              <span className="border-right gray-border"></span>
              <div className="message-notification">
                <img src="/images/message.png" />
                <span className="message-count">2</span>
              </div>
            </div>
          </div>
        </div>

        <h4 className="text-white pb-3">CREATE SESSION</h4>

        <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#allprevsession"> coppy from ....</a>

        <div className="gray-box">
          <div className="session">
            <h3 className="info">Session Info</h3>
          </div>

          <div className="container-fluid register-form">
            <div className="form">
              <div className="form-content">
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">Session Name</label>
                      <input type="text" className="input-field" value= {this.state.session_details.name} placeholder="Session Name"/>
                    </div>
                    <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">Description</label>
                      <textarea type="text" className="input-field"></textarea>
                    </div>									 
                    <div className="form-group">													
                      <span className="cover-border"></span>
                      <label className="label">Level</label>														
                      <select
                        className="input-field"
                        id="exampleFormControlSelect1"
                      >
                        <option>Pick a Difficulty level</option>											
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>						  
                      <span className="dropdown-icon"></span>
                  </div>
                  </div>
                  <div className="col-md-3">																 
                    <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">When?</label>
                      <input
                        type="text"
                        className="input-field"
                        placeholder="Pick a date and time"
                      />
                      <span className="when-icon"></span>
                    </div>
                    <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">How long?</label>
                      <select
                        className="input-field"
                        id="exampleFormControlSelect1"
                      >
                        <option>Pick a Duration</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                      <span className="dropdown-icon"></span>
                    </div>
                    <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">Minimum Participants</label>
                      <div className="">
                        <input
                          type="text"
                          className="input-field"
                          placeholder="min 1"
                        />
                        <span className="signedup_2"></span>
                      </div>
                    </div>
                    <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">Maximum Participants</label>
                      <input type="text" className="input-field" placeholder="max 50" />
                      <span className="signedup_2"></span>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="form-group input-txt">
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                      <span>Show Participants Signed Up Count on Searches?</span>
                    </div>
                    <div className="form-group input-txt">
                      <label className="switch">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                      </label>
                      <span>Charging for Session?</span>
                      <p className="gray-text ml-5 mt-3 mb-4">You have enabled it in the Channel</p>
                    </div>
                    <div className="form-group w-50 ml-5">
                      <span className="cover-border"></span>
                      <label className="label">Charge amount</label>
                      <div className="">
                        <input
                          type="text"
                          className="input-field"
                          placeholder="Enter amount"
                        />
                        <span className="dollar"></span>
                      </div>
                    </div>
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
                      <input type="text" className="input-field" />
                      <span className="clock-icon"></span>
                    </div>
                    <p className="text1 mb-4">Sign up Cut off Date/Time</p>
                    <div className="form-group mt-2">
                      <span className="cover-border"></span>
                      <label className="label">Pick Date/Time</label>
                      <input
                        type="text"
                        className="input-field"
                        placeholder=""
                      />
                      <span className="when-icon"></span>
                    </div>
                    
                  </div>
                  <div className="col-md-4">
                    <p className="text1 mb-4">for Participants prior to start of Session</p>
                    <div className="form-group mt-2">
                      <span className="cover-border"></span>
                      <label className="label">Enter a value in Minutes</label>
                      <input type="text" className="input-field" />
                      <span className="clock-icon"></span>
                    </div>
                    <p className="text1 mb-4">for 'minimum not met'</p>
                    <div className="form-group mt-2">
                      <span className="cover-border"></span>
                      <label className="label">Enter a value in days</label>
                      <input type="text" className="input-field" />
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
                  <input type="checkbox" />
                  <span className="slider round"></span>
              </label>
                <span>Participants allowed to disable DM with others</span>
              </div>
              <div className="form-group input-txt">
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <span>Show Participants picture to other Participants?</span>
                
              </div>
              
            </div>
            <div className="col-md-6">
            <div className="form-group input-txt">
                <label className="switch">
                    <input type="checkbox" />
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
                  <input type="checkbox" />
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
                <a href="#" className="pick"><img src="images/picking.png" className="mr-2" /> Pick from existing hosts</a>
            </div>
            <div className="col-md-4">
                <a href="#" className="pick"><img src="images/add.png" className="mr-2" /> Add a new Host</a>
            </div>
          </div>
          </div>
          
        </div>
        <div className="gray-box2 pb-4">
          <div className="session"><h3 className="info">Script</h3></div>
          <div className="row">
            <div className="col-md-5">
              <span className="white-text">Start next activity?</span>
              <a href="#" className="btn btn-primary text-uppercase mr-2">automatic</a>
              <a href="#" className="btn btn-outline-secondary text-uppercase">manual</a>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                  <span className="cover-border"></span>
                  <label className="label">Pick Emojis</label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Pick a date and time"
                  />
                  <span className="when-icon"></span>
                </div>
            </div>
            <div className="col-md-4">
              <div className="form-group input-txt">
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <span>Use Heart Rate Monitor</span>
              </div>
              <div className="form-group input-txt">
                <label className="switch">
                    <input type="checkbox" />
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
              <tbody>
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
                
              </tbody>
            </table>
          </div>
          <div className="p-3 activity-form mt-2">
            <div className="border-bottom">
              <div className="row">

              
              <div className="col-md-2">
                <div className="form-group mt-3">
                    <span className="cover-border"></span>
                    <label className="label">Activity name</label>
                    <input type="text" className="input-field" />
                  </div>
                  
              </div>
              <div className="col-md-2">
                <div className="form-group mt-3">
                    <span className="cover-border"></span>
                    <label className="label">Activity type</label>
                    <select
                        className="input-field"
                        id="exampleFormControlSelect1"
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
                        id="exampleFormControlSelect1"
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
                    <input type="text" className="input-field" />
                  </div>
                  
              </div>
              <div className="col-md-1">
                <div className="form-group mt-3">
                    <span className="cover-border"></span>
                    <label className="label">Video</label>
                    <input type="text" placeholder="browse" className="input-field" />
                  </div>
                  
              </div>
              <div className="col-md-2">
                <div className="form-group mt-3">
                    <span className="cover-border"></span>
                    <label className="label">Target BPM</label>
                    <input type="text" className="input-field" />
                  </div>
                  
              </div>
              <div className="col-md-2">
                <div className="form-group mt-3">
                    <span className="cover-border"></span>
                    <label className="label">Target Zone</label>
                    <input type="text" className="input-field" />
                  </div>
                  
              </div>
            </div>
            </div>
          </div>
          <a href="#" className="activity-link pl-3"><span>+</span> Activity</a>
        </div>
        <div className="gray-box no-border-radius pb-2">
          <div className="session"><h3 className="info">Shopping List</h3></div>
          <div className="p-3">
            <div className="row">
              <div className="col-md-4">
                  <a href="#" className="pick" data-toggle="modal" data-target="#myModal3"><img src="images/picking.png" className="mr-2" /> Pick from existing list</a>
              </div>
              <div className="col-md-4">
                  <a href="#" className="pick"><img src="images/add.png" className="mr-2" /> Add a new Product</a>
              </div>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-md-4">
            <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">item Name</label>
                      <input type="text" className="input-field" />
                    </div>
            </div>
            <div className="col-md-3">
            <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">Quantity</label>
                      <input type="text" className="input-field" />
                    </div>
            </div>
            <div className="col-md-4">
            <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">Item  notes</label>
                      <input type="text" className="input-field" />
                    </div>
            </div>
            <div className="col-md-1">
              <a href="#" className="bg-circle mt-3"><i className="fa fa-minus" aria-hidden="true"></i></a>
            </div>
          </div>
          
        </div>
        <div className="gray-box2 no-border-radius">
          <div className="session"><h3 className="info">Equipment List</h3></div>
          <div className="p-3">
            <div className="row">
              <div className="col-md-4">
                  <a href="#" className="pick" data-toggle="modal" data-target="#myModal2"><img src="images/picking.png" className="mr-2" /> Pick from existing list</a>
              </div>
              <div className="col-md-4">
                  <a href="#" className="pick"><img src="images/add.png" className="mr-2" /> Add a new item</a>
              </div>
            </div>
          </div>
          <div className="p-3">
          <div className="row mt-5 pb-4">
            <div className="col-md-4">
            <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">item Name</label>
                      <input type="text" className="input-field" />
                    </div>
            </div>
            <div className="col-md-3">
            <div className="form-group">
                      <span className="cover-border"></span>
                      <label className="label">Quantity</label>
                      <input type="text" className="input-field" />
                    </div>
            </div>
            
            <div className="col-md-1">
              <a href="#" className="bg-circle mt-3"><i className="fa fa-minus" aria-hidden="true"></i></a>
            </div>
          </div>
          </div>
        </div>
        <a href="#" className="save-btn btn btn-primary my-5 mx-auto">Save</a>
        <div className="modal" id="myModal">
    <div className="modal-dialog dialogwidth">
      <div className="modal-content modalbg">
      
        <div className="modal-header headerborder">
          <h4 className="modal-title white">Pick a Product</h4>
          <button type="button" class="close white" data-dismiss="modal">&times;</button>
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
    <div className="">
      <div className="modal-content equipmodalbg">
      
        <div className="modal-header headerborder">
          <div className="plusicon"><i className="fa fa-plus" aria-hidden="true"></i></div>
          <h4 className="modal-title white">Pick from existing Equipments list</h4>
          <button type="button" className="close white closepopup" data-dismiss="modal">&times;</button>
        </div>
        
        <div className="modal-body ">
         <div className="card cardbg">
                
                
                <div className="searchbar">
                  <input type="text" className="searchbarinput" placeholder="Search for Equipment"/>
                  <button className="inputbtn" type="button">
                     
                  </button>
                </div>


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
                </div>

                <div className="row checkboxdiv_3">
                  <div className="col-md-4">
                    <label className="custom-control custom-checkbox lebelheight">
                      <input type="checkbox" className="form-radio"/>
                      <span className="checktxt">Curabitue lobortis.</span>
                    </label>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group"><span className="cover-border"></span><input type="text" className="input-field-2" placeholder="Quantity"/></div>
                  </div>
                </div>

                
                <div className="checkboxdiv_2">
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

        </div>
         
        </div>
        
       </div>
      </div>
       <div className="donebg"><button type="button" className="done">Done</button></div>

    </div>
  </div>
 

  <div className="modal" id="myModal3">
    <div className="">
      <div className="modal-content equipmodalbg">
      
        <div className="modal-header headerborder">
          <div className="plusicon"><i className="fa fa-plus" aria-hidden="true"></i></div>
          <h4 className="modal-title white">Pick from existing Shopping list</h4>
          <button type="button" className="close white closepopup" data-dismiss="modal">&times;</button>
        </div>
        
        <div className="modal-body ">
         <div className="card cardbg">
                
                
                <div className="searchbar">
                  <input type="text" className="searchbarinput" placeholder="Search for Equipment"/>
                  <button className="inputbtn" type="button">
                     
                  </button>
                </div>


                <div className="checkboxdiv">
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
                </div>

                <div className="row checkboxdiv_3">
                  <div className="col-md-4">
                    <label className="custom-control custom-checkbox lebelheight">
                      <input type="checkbox" className="form-radio"/>
                      <span className="checktxt">In hac habitasse pla.</span>
                    </label>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group"><span className="cover-border"></span><input type="text" className="input-field-2" placeholder="Quantity"/></div>
                  </div>
                  <div className="col-md-5">
                    <div className="form-group"><span className="cover-border"></span><input type="text" className="input-field-2" placeholder="Item Notes"/></div>
                  </div>
                </div>

                
                <div className="checkboxdiv_2">
                <label className="custom-control custom-checkbox lebelheight">
                  <input type="checkbox" className="form-radio"/>
                  <span className="checktxt">Mauris non tempor qu.</span>
                </label>

                <label className="custom-control custom-checkbox lebelheight">
                  <input type="checkbox" className="form-radio"/>
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
                </div>

        </div>
         
        </div>
        
       </div>
      </div>
       <div className="donebg"><button type="button" className="done">Done</button></div>

    </div>
  </div>
  
  
  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
    Pick a product
  </button>

  <div class="modal" id="allprevsession">
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="modal-title">Session List</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>


      <div class="modal-body">


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
      </div>
    );
  }
}

export default Header;
>>>>>>> 052e2c753a6583c80eae62cbc5501b7f2b61ed29
