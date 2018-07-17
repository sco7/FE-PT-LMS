import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import Navbar from './components/navbar';
import LearningFeed from './components/LearningFeed';
import LearningPlan from './components/LearningPlan';
import HomePage from './pages/HomePage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <React.Fragment>
        <div>
          <div>
            <Switch>
              <Route exact path="/" component={LoginPage} />
              <Route path="/home" component={HomePage} />
              <Route path="/learning/:userId" component={LearningFeed} />
            </Switch>
          </div>
        </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;