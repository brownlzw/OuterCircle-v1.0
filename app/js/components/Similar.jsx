import React from 'react';
import { Link } from 'react-router-dom';
import Follow from './Follow.jsx';


export default class Similar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let btn = {};
        if(this.props.type==="charity")
            btn = <Follow isFollow={false} truetext='Followed' falsetext='Follow' id={this.props.data.id} user={this.props.user}/>;
        else
            btn = <Follow isFollow={false} truetext='Connected' falsetext='Connect' id={this.props.data.id} user={this.props.user}/>;

        return (
          <div>
            <div className="post-header">
              <Link to={'/'+this.props.type+'/' + this.props.data.id}>
                 <img
                   src={window.location.origin + "/" + this.props.data.profile_image}
                   className="img-rounded donor-thumbnail suggest-img"
                   alt="profile image"
                 />
              </Link>
              <div className="post-title">
                <Link to={'/'+this.props.type+'/' + this.props.data.id}>
                  <p>{this.props.data.name}</p>
                </Link>
                <p className="post-time">{this.props.data.description}</p>
                {btn}
              </div>
            </div>
          </div>
        )
    }
}