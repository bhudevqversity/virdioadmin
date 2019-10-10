import React, {Component} from 'react';

class Header extends Component {
    render(){
        return(
            <div className="container-fluid">
                <div className="row top-header">
                    <div className="col-lg-2">
                        <img src="/images/login-logo.png" className="logo" />
                    </div>
                    <div className="col-lg-4 d-flex align-items-center">
                        <img src="images/attendee.png" />
                        <div>
                            <h3>Welcome Cersei!</h3>
                            <p>You have 3 sessions this week</p>
                            <p>Next Session, Wednesday, 24 July 2019</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;