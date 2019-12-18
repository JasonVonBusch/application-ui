import React, {Component} from "react";

export default class About extends Component {
    render() {
        return(
            <div>
                <div className="header">About</div>
                <div className="paragraph">This is a ReactJS application. This application was built after running "npm create-react-app" and removing the components that aren't being used. This application makes API calls to another application to get information for various pages including but not limited to Story List and Story. This application also takes advantage of state when the user does a Login or votes on the Home page.</div>
            </div>
        );
    }
}