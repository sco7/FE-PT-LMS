import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

import { getCoursesByUserNotStarted } from '../components/api';

class LearningFeed extends React.Component {
  state = {
    courses: [],
    loading: true
  };

  componentDidMount() {
    console.log('loading');
    const { userId } = this.props.match.params;
    console.log(userId);
    getCoursesByUserNotStarted(this.props.match.params.userId).then(courseData => {
      console.log(courseData, 'mounted', userId);
      this.setState({
        courses: courseData.Courses,
        loading: false
      });
    });

  }
  render() {
    console.log('render');
    const { courses } = this.state;
    return (
      <div>
      {this.state.loading ? (
          <p>Courses loading........</p>
        ) : (
      <form id="CourseFeed">
        <h2 id ="CourseFeedTitle">Learning Plan</h2>
        <div class="row">
              <div class="col-1" />
              <h5>Courses Outstanding</h5>
                <div class="col-sm">
              </div>
              </div>
        {courses.map(course => {
          return (
            <div class="row">
              <div class="col-1" />
                <div class="col-10">
            <div id='CourseFeedRollUp' key={course._id}>
              <Link to={`/articles/${course._id}`}>
                <h6>{course.title}</h6>
              </Link>
              <p>
                {course.description}
              </p>
              <p>
                Start Date: <Moment format="DD/MM/YY">{course.start_date}
            </Moment>
                </p>
              <p>
                Location: {course.location} &emsp; Start time: {course.start_time}
              </p>
              </div>
            </div>
            <div class="col-sm" />
            </div>
          );
        })}
      </form>
        )}
      </div>
    );
  }
}

export default LearningFeed;