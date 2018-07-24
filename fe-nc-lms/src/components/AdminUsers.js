import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import { getAllUsers } from './api';

class AllUserView extends React.Component {
  state = {
    users: {},
    loading: true
  };

  componentDidMount() {
    console.log('loading');
    getAllUsers().then(userData => {
      console.log(userData, 'mounted');
      this.setState({
        users: userData.Users,
        loading: false
      });
    });
  }

  render() {
    console.log('render');
    const { users } = this.state;
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
                <p>Users loading........</p>
              ) : (
                <form id="CompleteUserFeed">
                  <Navbar />
                  <h4 id="CompleteUserView"> </h4>
                  <h5>All Users</h5>
                  {this.state.users === undefined ? (
                    <p>No users</p>
                  ) : (
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>User Name</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Gender</th>
                          <th>Job Title</th>
                          <th>Account Type</th>
                        </tr>
                      </thead>
                      <tbody>{users.map(this.renderSessions.bind(this))}</tbody>
                    </table>
                  )}
                </form>
              )}
            </div>
          </div>
        <Link to={`/Admin/UserBuilder`}>
            <button
              type="button"
              id="UserBuilderButton"
              class="btn btn-primary btn-sm"
            >
              User builder
            </button>
          </Link>
        </div>
      </div>
    );
  }

  renderSessions(user, index) {
    return (
      <tr key={index}>
        <td>{user.id}</td>
        <td>{user.username}</td>
        <td>{user.first_name}</td>
        <td>{user.last_name}</td>
        <td>{user.gender}</td>
        <td>{user.job_title}</td>
        <td>{user.account_type}</td>

      </tr>
    );
  }
}
export default AllUserView;
