import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { removeUser } from './api';
import Navbar from './navbar';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class DeleteUser extends Component {
  state = {
    userId: 0
  };

  handleChangeUserId = event => {
    this.setState({
      userId: event.target.value
    });
  };

  handleDeleteUser = event => {
    event.preventDefault();
    let userId = this.state.userId;
    console.log(userId);
    removeUser(userId).then(res => {
      if (res.error === undefined) alert(res.message);
      if (res.message === undefined) alert(res.error);
      this.setState({
        userId: 0
      });
    });
  };

  render() {
    return (
      <div class="container">
        <Link to={`/admin/users/${this.props.match.params.userId}`}>
          <button type="button" id="backButton" class="btn btn-primary btn-sm">
            Back
          </button>
        </Link>
        <Navbar />
        <div class="row">
          <div class="col-sm" />
          <div class="col-6">
            <Form>
              <h5 id="deleteUser">Remove User</h5>
              <FormGroup>
                <Label for="userId">User Id</Label>
                <Input
                  type="number"
                  name="id"
                  id="deleteUser"
                  onChange={this.handleChangeUserId}
                />
              </FormGroup>
              <Button type="submit" onClick={this.handleDeleteUser}>
                Delete User
              </Button>
            </Form>
          </div>
          <div class="col-sm" />
        </div>
      </div>
    );
  }
}

export default DeleteUser;
