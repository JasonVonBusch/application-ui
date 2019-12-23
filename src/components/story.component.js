import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Story extends Component {
    state = {
        story: {}
    }

    componentDidMount(){
        let request = new Request("http://localhost:5000/getstory?id=" + this.props.match.params.id, {
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
            this.setState({story: response_json})
        })
        .catch((error) => {console.log(error)})
    }

    render() {
        return(
            <div>
                <div className="header">Story</div>
                <div className="tablerow">
                  <div className="title">ID</div>
                  <div className="title">Description</div>
                </div>
                {this.state.story ? <div className="tablerow" key={this.state.story.id}>
                                        <div className="rowitem">{this.state.story.id}</div>
                                        <div className="rowitem">{this.state.story.description}</div>
                                    </div>
                : null}
                <div className="paragraph"><Link to="/storylist">BACK TO STORY LIST</Link></div>
            </div>
        );
    }
}