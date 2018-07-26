import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import { getAllCourses } from './api';

class AllCourseView extends React.Component {
  state = {
    courses: {},
    loading: true
  };

  componentDidMount() {
    console.log('loading');
    getAllCourses().then(courseData => {
      console.log(courseData, 'mounted');
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
      <div class="container">
        <div class="row">
          <Link to={`/learning/${this.props.match.params.userId}`}>
            <button
              type="button"
              id="backButton"
              class="btn btn-primary btn-sm"
            >
              Back
            </button>
          </Link>          
          <div class="col-10">
            <div>
              {this.state.loading ? (
                <p>Courses loading........</p>
              ) : (
                <form id="CompleteCoursesFeed">
                  <Navbar />
                  <h4 id="CompleteCoursesView"> </h4>
                  <h5>All Courses</h5>
                  {this.state.courses === undefined ? (
                    <p>No courses</p>
                  ) : (
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Title</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>{courses.map(this.renderCourses.bind(this))}</tbody>
                    </table>
                  )}
                </form>
              )}
            </div>
          </div>
        <Link to={`/Admin/CourseBuilder/${this.props.match.params.userId}`}>
            <button
              type="button"
              id="CourseBuilderButton"
              class="btn btn-primary btn-sm"
            >
              Course builder
            </button>
          </Link>
        </div>
      </div>
    );
  }

  renderCourses(course, index) {
    return (
      <tr key={index}>
        <td>{course.id}</td>
        <td>{course.title}</td>
        <td>{course.description}</td>
      </tr>
    );
  }
}
export default AllCourseView;