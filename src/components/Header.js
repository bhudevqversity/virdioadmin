import React, {Component} from 'react';

class Header extends Component {
    render(){
        return(
            <div className="container-fluid">
                <div className="row top-header">
                    <div className="col-lg-2">
                        <img src="/images/login-logo.png" className="logo" />
                    </div>
                    <div className="col-lg-4">
                        <div className="user-info d-flex align-items-center">
                            <img className="user-avtar" src="images/attendee.png" />
                            <div className="pl-4">
                                <h3>Welcome Cersei!</h3>
                                <p>You have 3 sessions this week</p>
                                <p>Next Session, Wednesday, 24 July 2019</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex justify-content-between">
                            <div className="header-info-right">
                                <p>Weekly Attendance</p>
                                <h3>66%</h3>
                            </div> 
                            <div className="header-info-right">
                                <p>Total Views</p>
                                <h3>45.6K</h3>
                            </div> 
                            <div className="header-info-right">
                                <p>Total Revenue</p>
                                <h3>$44,000</h3>
                            </div>
                            <div className="message-notification">
                                <img src="/images/message.png" />
                                <span className="message-count">2</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;