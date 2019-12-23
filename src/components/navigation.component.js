import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Navigation extends Component {
    render() {
        return(
            <div className="nav-links">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/storylist">Story List</Link></li>
                    <li><Link to="/story">Story</Link></li>
                    <li><Link to="/artifactlist">Artifact List</Link></li>
                    <li><Link to="/artifact">Artifact</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>                    
                <hr />
            </div>
        );
    }
}