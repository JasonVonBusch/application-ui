import React, {Component} from "react";
import store from "../utils/store.utility";

let state = store.GetInitialState();
let votevalue = "";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.getUsername();
    }

    componentDidMount(){
        fetch("http://localhost:3000/add?a=12&b=22", {
            mode: "no-cors"
        })
        .then((data) => {
            return data;
        })
    }

    getUsername() {
        state = store.GetState();
    }

    handleChange(e) {
        votevalue = e.target.value;
    }

    handleClick(e) {
        store.UpdateState({id: state.users[state.users.length - 1].id, vote: votevalue});
    }

    render() {
        return(
            <div>{votevalue}</div>
            //<div>
            //    <h1>Welcome Home, {state.users[state.users.length - 1].username}!</h1>
            //    <input id="vote" type="text" onChange={this.handleChange}></input>
            //    <button onClick={this.handleClick}>Vote!</button>
            //    <h2>You voted: {state.users[state.users.length - 1].vote}!</h2>
            //</div>
        );
    }
}