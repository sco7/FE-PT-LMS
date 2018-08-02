import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { removeSession } from './api';
import Navbar from './navbar';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class DeleteSession extends Component {
  state = {
    sessionId: 0
  };

  handleChangeSessionId = event => {
    this.setState({
      sessionId: event.target.value
    });
  };

  handleDeleteSession = event => {
    event.preventDefault();
    let sessionId = this.state.sessionId;
    console.log(sessionId);
    removeSession(sessionId).then(res => {
      if (res.error === undefined) alert(res.message)
      if (res.message === undefined) alert(res.error)
      this.setState({
        sessionId: 0
      });
    });
  };

  render() {
    return (
      <div class="container">
        <Link to={`/admin/sessions/${this.props.match.params.userId}`}>
          <button type="button" id="backButton" class="btn btn-primary btn-sm">
            Back
          </button>
        </Link>
        <Navbar />

        <div class="row">
          <div class="col-sm" />
          <div class="col-6">
            <Form>
              <h5 id="deleteSession">Remove Session</h5>
              <FormGroup>
                <Label for="courseId">Session Id</Label>
                <Input
                  type="number"
                  name="id"
                  id="deleteSession"
                  onChange={this.handleChangeSessionId}
                />
              </FormGroup>

              <Button type="submit" onClick={this.handleDeleteSession}>
                Delete Session
              </Button>
            </Form>
          </div>
          <div class="col-sm" />
        </div>
      </div>
    );
  }
}

export default DeleteSession;