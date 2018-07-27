import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import Moment from 'react-moment';
import { completeSessionById } from './api';

import { getAllSessions } from './api';

class AllSessionView extends React.Component {
  state = {
    sessions: {},
    loading: true
  };

  completeSession = id => event => {
    event.preventDefault();
    console.log(id);
    completeSessionById(id).then(res => {
      this.setState({
        sessions: res.sessions
      })
        getAllSessions().then(sessionData => {
          console.log(sessionData, 'mounted');
          this.setState({
            sessions: sessionData.Sessions,
          });
        })
    })
  };

  componentDidMount() {
    console.log('loading');
    getAllSessions().then(sessionData => {
      console.log(sessionData, 'mounted');
      this.setState({
        sessions: sessionData.Sessions,
        loading: false
      });
    });
  }

  render() {
    console.log('render');
    const { sessions } = this.state;
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

          <Link to={`/admin/SessionBuilder/${this.props.match.params.userId}`}>
            <button
              type="button"
              id="CourseBuilderButton"
              class="btn btn-primary btn-sm"
            >
              Add New Session
            </button>
          </Link>
          <Link to={`/admin/SessionRemover/${this.props.match.params.userId}`}>
            <button
              type="button"
              id="DeleteCourseButton"
              class="btn btn-primary btn-sm"
            >
              Remove Session
            </button>
          </Link>

          <div class="col-10">
            <div>
              {this.state.loading ? (
                <p>Sessions loading........</p>
              ) : (
                <form id="CompleteSessionFeed">
                  <Navbar />
                  <h4 id="CompleteSessionView"> </h4>
                  <h5>All Sessions</h5>
                  {this.state.sessions === undefined ? (
                    <p>No sessions</p>
                  ) : (
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Date</th>
                          <th>Start Time</th>
                          <th>Title</th>
                          <th>User Name</th>
                          <th>Status</th>
                          <th>Complete Session</th>
                        </tr>
                      </thead>
                      <tbody>{sessions.map(this.renderSessions.bind(this))}</tbody>
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

  renderSessions(session, index) {
    return (
      <tr key={index}>
        <td>{session.id}</td>
        <td>{<Moment format="DD/MM/YY">{session.start_date}</Moment>}</td>
        <td>{session.start_time}</td>
        <td>{session.title}</td>
        <td>
          {session.first_name} {session.last_name}
        </td>
        <td>{session.completed_status}</td>
        <td>
          <button
            type="button"
            id="completeButton"
            class="btn btn-primary btn-sm"
            onClick={this.completeSession(session.id)}>
            Complete
          </button>
        </td>
      </tr>
    );
  }
}
export default AllSessionView;


