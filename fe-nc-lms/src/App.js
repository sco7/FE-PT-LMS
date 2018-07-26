import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import LearningFeed from './components/LearningFeed';
import HomePage from './pages/HomePage';
import CourseView from './components/CourseView'
import CompleteHistoryView from './components/CompleteHistoryView'
import CurriculaView from './components/CurriculaView'
import AllSessionView from './components/AdminSessions'
import AllCourseView from './components/AdminCourses'
import AllUserView from './components/AdminUsers'
import CourseBuilder from './components/CourseBuilder'


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
              <Route path="/admin/sessions/:userId" component={AllSessionView} />
              <Route path="/curricula/:userId" component={CurriculaView} />
              <Route path="/admin/users/:userId" component={AllUserView} />
              <Route path="/admin/courses/:userId" component={AllCourseView} />
              <Route path="/admin/courseBuilder/:userId" component={CourseBuilder} />
            </Switch>
          </div>
        </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;