import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import About      from "./components/about.component";
import Artifact   from "./components/artifact.component";
import Home       from "./components/home.component";
import Login      from "./components/login.component";
import Navigation from './components/navigation.component';
import Story      from './components/story.component';
import StoryList    from './components/storylist.component';

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/home"     render={(props) => (<Home {...props} userName="Jason" />)} /> 
          <Route exact path="/story/:id" component={Story} />
          <Route exact path="/storylist"  component={StoryList} /> 
          <Route exact path="/artifact"  component={Artifact} /> 
          <Route exact path="/about"     component={About} />
          <Route exact path="/login"     component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
