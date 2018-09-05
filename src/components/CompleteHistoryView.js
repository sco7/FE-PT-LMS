import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import Moment from 'react-moment';

import { getCoursesByUserCompleted } from './api';

class CompleteHistoryView extends React.Component {
  state = {
    history: [],
    loading: true
  };

  componentDidMount() {
    console.log('loading');
    const { userId } = this.props.match.params;
    console.log(userId);
    getCoursesByUserCompleted(this.props.match.params.userId).then(
      historyData => {
        console.log(historyData, 'mounted', userId);
        this.setState({
          history: historyData.Courses,
          loading: false
        });
      }
    );
  }

  render() {
    console.log('render');
    const { history } = this.state;
    console.log(this.state.history);
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
                <p>Learning History loading........</p>
              ) : (
                <form id="CompleteHistoryFeed">
                  <Navbar />
                  <h4 id="CompleteHistoryView">Learning History</h4>
                  <h5>Courses Completed</h5>
                  {this.state.history === undefined ? (
                    <p>No courses complete</p>
                  ) : (
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>Completion Date</th>
                          <th>Title</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>{history.map(this.renderHistory)}</tbody>
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

  renderHistory(course, index) {
    return (
      <tr key={index}>
        <td>{<Moment format="DD/MM/YY">{course.start_date}</Moment>}</td>
        <td>{course.title}</td>
        <td>{course.completed_status}</td>
      </tr>
    );
  }
}
export default CompleteHistoryView;
