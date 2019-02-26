import React, {Component} from "react";
import Drawer from "./components/Drawer";
import Message from "./components/Message";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{padding: 40}}>
          <Switch>
            <Route path="/conversations/:id" component={Message} />
            <Route exact path="/" component={Drawer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
