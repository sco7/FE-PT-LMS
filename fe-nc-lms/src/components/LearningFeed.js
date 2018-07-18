import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import Navbar from '../components/navbar';

import {
  getCoursesByUserNotStarted,
  getCoursesByUserCompleted,
  getCurriculaByUserId,
  getUserById
} from './api';

class LearningFeed extends React.Component {
  state = {
    courses: [],
    history: [],
    curricula: [],
    user: {},
    loading: true
  };
  
  componentDidMount() {
    console.log('loading');
    const { userId } = this.props.match.params;
    console.log(userId);
    getCoursesByUserNotStarted(this.props.match.params.userId).then(
      courseData => {
        console.log(courseData, 'mounted', userId);
        this.setState({
          courses: courseData.Courses,
          loading: false
        });
      }
    );

    getUserById(this.props.match.params.userId).then(
      userData => {
        console.log(userData, 'mounted', userId);
        this.setState({
          user: userData.Users
        });
      }
    );

    getCoursesByUserCompleted(this.props.match.params.userId).then(
      historyData => {
        console.log(historyData, 'mounted', userId);
        this.setState({
          history: historyData.Courses
        });
      }
    );

    getCurriculaByUserId(this.props.match.params.userId).then(
      curriculaData => {
        console.log(curriculaData, 'mounted', userId);
        this.setState({
          curricula: curriculaData.Curricula
        });
      }
    );
  }

  render() {
    console.log('render');
    const { courses, history, curricula, user } = this.state;
    console.log(this.state.courses);
    return (
      <div class="container">
      <div class="row">
        <div class="col-1" />
        <div class="col-5">
          <div>
            {this.state.loading ? (
              <p>Courses loading........</p>
            ) : (
              <form id="CourseFeed">
                <Navbar />
                <h4 id="CourseFeedTitle">{user.first_name}'s Learning Plan</h4>
                <h5>Courses Outstanding</h5>
                {this.state.courses === undefined ? (
                  <p>No courses planned</p>
                ) : (
                  courses.map(course => {
                    return (
                      <div id="CourseFeedRollUp" key={course.course_id}>
                        {/* <Link to={`/course/${course.course_id}`}> */}
                          <h6>{course.title}</h6>
                          <p>{course.description}</p>
                        {/* </Link> */}
                        <p>
                          Start Date:{' '}
                          <Moment format="DD/MM/YY">{course.start_date}</Moment> &emsp; Start time:{' '}
                          {course.start_time}
                        </p>
                        <p>
                          Location: {course.location} &emsp; Length:{' '}
                          {course.duration_hours} hours
                        </p>
                      </div>
                    );
                  })
                )}
              </form>
            )}
          </div>

          </div>
          <div class="col-3">
            <div>
              {this.state.loading ? (
                <p>History loading........</p>
              ) : ( 
                <form id="HistoryFeed">
                  <h4 id="HistoryFeedTitle"></h4>
                  <h5>Learning History</h5>
                  <p><b>Most Recently Added</b></p>
                  {this.state.history === undefined ? (
                    <p>No Learning completed</p>
                  ) : (
                    history.slice(0, 3).map(course => {
                      return (
                        <div id="HistoryFeedRollUp" key={course._id}>
                          <p>
                            {course.title}
                          </p>
                        </div>
                      );
                    })
                  )}
                </form>
              )}
            </div>
            
            <div>
              {this.state.loading ? (
                <p>Curricula loading........</p>
              ) : (
                <form id="CurriculaFeed">
                  <h5 id="CurriculaFeedTitle">Assigned Curricula</h5>
                  {this.state.curricula === undefined ? (
                    <p>No curricula assigned</p>
                  ) : (
                    curricula.map(curricula => {
                      return (
                        <div id="CurriculaFeedRollUp" key={curricula._id}>
                          <p>
                            {curricula.title}
                          </p>
                        </div>
                      );
                    })
                  )}
                </form>
              )}
            </div>
        </div>
      </div>
      </div>
    );
  }
}

export default LearningFeed;
