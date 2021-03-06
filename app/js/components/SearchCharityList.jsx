import React from 'react';

export default class SearchCharityList extends React.Component {
    constructor(props) {
        super(props);
    }

    returnText(Text, Id, e) {
        e.preventDefault();
        this.props.onText(Text,Id);
    }

    render(){
        // var All = "";
        // console.log(list.props.asd);
        if(this.props.items.length !== 0) {
            return (
                <div className="search-charity-list">
                    <ul>
                        {
                            this.props.items.map((item) => <li key={item.name} onClick={this.returnText.bind(this, item.name, item.id)}>{item.name}</li>)
                        }
                    </ul>
                </div>
            )
        }
        else {
            return (
                <div className="search-charity-list">
                    <ul>
                    </ul>
                </div>
            )
        }
    }
}