import React, {Component} from "react";

export default class Artifact extends Component {
    componentDidMount(){
        fetch("http://localhost:5000/getallartifacts", {
            mode: "no-cors"
        })
        .then((data) => {
            return data;
        })
    }

    render() {
        return(
            <div>
                <h1>Artifact</h1>
            </div>
        );
    }
}