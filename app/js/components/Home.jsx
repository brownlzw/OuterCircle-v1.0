import React from 'react';
import { Redirect } from 'react-router-dom';

import Feed from './Feed.jsx';
import Navbar from './Navbar.jsx';
import SuggestDonor from './SuggestDonor.jsx';
import SuggestCharity from './SuggestCharity.jsx';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: true
    };

    this.checkLogin();
  }

  checkLogin() {
    $.post('/loggedIn', "", function(data, status) {
        if (status === 'success' && data.isAuth === "authorized") {
            this.setState({loggedIn: true, userId:data.userId});
        }
        else {
            this.setState({loggedIn: false});
        }
    }.bind(this));
  }

  
  render() {
    if (!this.state.loggedIn) {
      return (<Redirect to="/login"/>);
    } else {
      return (
        <div>
          <Navbar loggedIn={this.state.loggedIn} user={this.state.userId}/>
          <div id="main" className="center-block">
              <div className="col-md-4 col-sm-4 col-sm-push-7">
                  <SuggestDonor user={this.state.userId}/>
                  <SuggestCharity user={this.state.userId}/>
              </div>
              <div className="col-md-6 col-sm-6 col-sm-pull-3">
                  <Feed user={this.state.userId} type="home"/>
              </div>
          </div>
        </div>
    );
    }
  }
}
