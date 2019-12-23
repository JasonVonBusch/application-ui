import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class StoryList extends Component {
    state = {
        stories: []
    }

    componentDidMount(){
        let request = new Request("http://localhost:5000/getallstories", {
            headers: new Headers({
                "Content-Type": "text/json",
            }),
            method: "GET",
            mode: "cors",
        });
        
        fetch(request)
        .then(response => {
            return response.json()
        })
        .then((response_json) => {
            this.setState({stories: response_json.stories})
        })
        .catch((error) => {console.log(error)})
    }

    render() {
        return(<div>
                <div className="header">Story List</div>
                <div className="tablerow">
                    <div className="title">ID</div>
                    <div className="title">Description</div>
                </div>
                {this.state.stories.map(stories => <div className="tablerow" key={stories.id}>
                                                       <div className="rowitem"><Link to={`/story/${stories.id}`}>{stories.id}</Link></div>
                                                       <div className="rowitem">{stories.description}</div>
                                                   </div>)}
               </div>
        );
    }
}