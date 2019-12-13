import React, {Component} from "react";
import store from "../utils/store.utility";

let loginuser = "";

export default class Login extends Component {
    handleChange(e) {
        loginuser = e.target.value;
    }

    handleClick(e) {
        store.UpdateState({username: loginuser})
    }

    render() {
        return(
            <div>
                <input id="username" type="text" onChange={this.handleChange}></input>
                <button onClick={this.handleClick}>Login</button>
            </div>
        );
    }
}