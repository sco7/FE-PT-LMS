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
import AllCurriculaView from './components/AdminCurricula'
import AllUserView from './components/AdminUsers'
import AddNewCourse from './components/CourseBuilder'
import DeleteCourse from './components/CourseRemover'
import AddNewSession from './components/SessionBuilder'
import DeleteSession from './components/SessionRemover.js'
import AddNewUser from './components/UserBuilder'
import DeleteUser from './components/UserRemover.js'
import AddNewCurricula from './components/CurriculaBuilder'
import DeleteCurricula from './components/CurriculaRemover.js'




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
              <Route path="/admin/curricula/:userId" component={AllCurriculaView} />
              <Route path="/curricula/:userId" component={CurriculaView} />
              <Route path="/admin/users/:userId" component={AllUserView} />
              <Route path="/admin/courses/:userId" component={AllCourseView} />
              <Route path="/admin/courseBuilder/:userId" component={AddNewCourse} />
              <Route path="/admin/courseRemover/:userId" component={DeleteCourse} />
              <Route path="/admin/sessionBuilder/:userId" component={AddNewSession} />
              <Route path="/admin/sessionRemover/:userId" component={DeleteSession} />
              <Route path="/admin/userBuilder/:userId" component={AddNewUser} />
              <Route path="/admin/userRemover/:userId" component={DeleteUser} />
              <Route path="/admin/curriculaBuilder/:userId" component={AddNewCurricula} />
              <Route path="/admin/curriculaRemover/:userId" component={DeleteCurricula} />
            </Switch>
          </div>
        </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;