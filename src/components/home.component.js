import React, {Component} from "react";
import store from "../utils/store.utility";

let state = store.GetInitialState();
let votevalue = "";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.getUsername();
        this.handleClick = this.handleClick.bind(this);
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
        store.UpdateState({username: state.users[state.users.length - 1].username, id: state.users[state.users.length - 1].id, vote: votevalue});
        this.setState(store.GetState());
    }

    render() {
        let numberOfUsers = state.users.length;
        let username      = numberOfUsers > 0 ? state.users[numberOfUsers - 1].username : '';
        let vote          = numberOfUsers > 0 ? state.users[numberOfUsers - 1].vote     : '';

        return(
            <div>
                {numberOfUsers   <= 0 ? <div className="header">Welcome Home!</div>
                 : username    !== '' ? <div className="header">Welcome Home, {username}!</div>
                 : null}
                {numberOfUsers > 0 && username !== '' ?
                   <div className="paragraph">
                       <input id="vote" type="text" onChange={this.handleChange}></input>
                       <button onClick={this.handleClick}>Vote!</button>
                   </div>
                 : null}
                {numberOfUsers > 0 && username !== '' && vote !== '' ?
                   <div  className="paragraph">You voted: {vote}!</div>
                 : null}
            </div>
        );
    }
}