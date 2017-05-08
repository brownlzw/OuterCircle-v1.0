import React from 'react';

import AddDonation from './AddDonation.jsx';
import DonationHistory from './DonationHistory.jsx';
import DonorProfile from './DonorProfile.jsx';
import DonorStats from './DonorStats.jsx';
import Feed from './Feed.jsx';
import Navbar from './Navbar.jsx';
import SuggestDonor from './SuggestDonor.jsx';

export default class DonorPage extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        loggedIn: true,
        userId: 0,
      };

    this.checkLogin();
  }

  checkLogin() {
    $.post('/loggedIn', "", function(data, status) {
        if (status === 'success' && data.isAuth === "authorized") {
            this.setState({loggedIn: true, userId:data.userId});
            console.log('logged in, user id is '+data.userId);
        }
        else {
            this.setState({loggedIn: false});
            console.log('not logged in');
        }
    }.bind(this));
  }

  render() {
    let add = {};
    if(this.props.match.params.id===this.state.userId){
      add = <AddDonation userId={this.state.userId}/>;
    } else{
      add = <br/>;
    }

    return (
      <div>
        <Navbar/>
        <div id="main">
          <div className="row">
            <div className="container">
              <DonorProfile donor={this.props.match.params.id} user={this.state.userId}/>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 col-sm-push-6 col-sm-offset-1">
              {add}
              <DonorStats donor={this.props.match.params.id}/>
              <DonationHistory donor={this.props.match.params.id} id={this.state.userId}/>
              <SuggestDonor donor={this.props.match.params.id} user={this.state.userId}/>
            </div>
            <div className="col-sm-6 col-sm-pull-4">
              <Feed id={this.state.id} type="donor"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
