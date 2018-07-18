import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Navbar from './components/navbar';
import LearningFeed from './components/LearningFeed';
import LearningPlan from './components/LearningPlan';
import HomePage from './pages/HomePage';
import CourseView from './components/CourseView'
import CompleteHistoryView from './components/CompleteHistoryView'



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
              <Route path="/course/:courseId" component={CourseView} />
              <Route path="/history/:userId" component={CompleteHistoryView} />
            </Switch>
          </div>
        </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;