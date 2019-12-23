import React, {Component} from "react";
import store from "../utils/store.utility";

let loginuser = "";

export default class Login extends Component {
    handleChange(e) {
        loginuser = e.target.value;
    }

    handleClick(e) {
        store.UpdateState({username: loginuser, vote: ""})
    }

    render() {
        return(
            <div>
                <div className="header">Sign-in</div>
                <div className="paragraph">
                    <input type="text" onChange={this.handleChange}></input>
                    <button onClick={this.handleClick}>Login</button>
                </div>
            </div>
        );
    }
}
