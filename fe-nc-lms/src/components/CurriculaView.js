import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';

import {
  getCoursesByUserId,
} from './api';

class CurriculaView extends React.Component {
  state = {
    courses: [],
    loading: true
  };
  
  componentDidMount() {
    console.log('loading');
    const { userId } = this.props.match.params;
    console.log(userId);
    getCoursesByUserId(this.props.match.params.userId).then(
      coursesData => {
        console.log(coursesData, 'mounted', userId);
        this.setState({
          courses: coursesData.Courses,
          loading: false
        });
      }
    );
  }

  render() {
    console.log('render');
    const { courses } = this.state;
    console.log(this.state.courses);
    return (
      <div class="container">
      <div class="row">
       
      <Link to={`/learning/${this.props.match.params.userId}`}>
    <button type="button" id="backButton" class="btn btn-primary btn-sm">Back</button>
   
    </Link>
        <div class="col-10">
          <div>
            {this.state.loading ? (
              <p>Courses loading........</p>
            ) : (
              <form id="CompleteCurriculaFeed">
                <Navbar />
                <h4 id="CompleteCurriculaView">Curricula contents</h4>
                <h5>My Courses</h5>
                {this.state.courses === undefined ? (
                  <p>No curricula assigned</p>
                ) : (
                        <table class="table table-hover">
                        <thead>
                          <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Description</th>
                          </tr>
                        </thead>
                        <tbody>
                  {courses.map(this.renderCourses)}
                        </tbody>
                        </table>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
      </div>
    );
  }
  
  renderCourses(courses, index) {
    return (
      <tr key={index}>
      <td>{courses.id}</td>
      <td>{courses.title}</td>
      <td>{courses.description}</td>
    </tr>
  )
}
}
export default CurriculaView;