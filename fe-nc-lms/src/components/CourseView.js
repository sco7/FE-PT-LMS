import React from 'react';

import {
  getCourseById
} from './api';

class CourseView extends React.Component {
  state = {
    course: {},
    loading: true
  };

  componentDidMount() {
    console.log('loading');
    const { courseId } = this.props.match.params;
    console.log(courseId);
    getCourseById(this.props.match.params.courseId).then(
      courseData => {
        console.log(courseData, 'mounted', courseId);
        this.setState({
          course: courseData.Courses,
          loading: false
        });
      }
    );
  }

    render() {
      console.log('render');
      const { title, description } = this.state.course;
      return (
        
        <div>
          <nav>
            {/* <Link to={`/learning/${title}`}>Back</Link> */}
          </nav>
          <nav>
            </nav>
          {this.state.loading ? (
            <p>Course loading........</p>
          ) : (
            <div class="row">
              <div class="col-sm" />
              <div class="col-8">
                <h1>{title}</h1>
                <h4 id="CourseBody">{description}</h4>
              </div>
              <div class="col-sm" />
            </div>
          )}
        </div>
      );
    }
  }
  
  export default CourseView;