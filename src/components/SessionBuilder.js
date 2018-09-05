import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { addSession } from './api';
import Navbar from './navbar';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddNewSession extends Component {
  state = {
    start_date: '',
    start_time: '',
    duration: '',
    location: '',
    completed_status: '',
    course_id: 0,
    user_id: 0
  };

  handleChangeDate = event => {
    this.setState({
      start_date: event.target.value
    });
  };

  handleChangeTime = event => {
    this.setState({
      start_time: event.target.value
    });
  };

  handleChangeDuration = event => {
    this.setState({
      duration: event.target.value
    });
  };

  handleChangeLocation = event => {
    this.setState({
      location: event.target.value
    });
  };

  handleChangeStatus = event => {
    this.setState({
      completed_status: event.target.value
    });
  };

  handleChangeCourseId = event => {
    this.setState({
      course_id: event.target.value
    });
  };

  handleChangeUserId = event => {
    this.setState({
      user_id: event.target.value
    });
  };

  submitNewSession = event => {
    event.preventDefault();
    let startDate = this.state.start_date;
    let startTime = this.state.start_time;
    let duration = this.state.duration;
    let location = this.state.location;
    let completedStatus = this.state.completed_status;
    let courseId = this.state.course_id;
    let userId = this.state.user_id;
    addSession(
      startDate,
      startTime,
      duration,
      location,
      completedStatus,
      courseId,
      userId
    ).then(res => {
      this.setState({
        start_date: '',
        start_time: '',
        duration: '',
        location: '',
        completed_status: '',
        course_id: 0,
        user_id: 0
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
              <h5 id="sessionBuilder">Add Session</h5>
              <FormGroup>
                <Label for="sessionDate">Start Date</Label>
                <Input
                  type="datetime"
                  name="text"
                  id="exampleText"
                  onChange={this.handleChangeDate}
                  value={this.state.start_date}
                />
              </FormGroup>
              <FormGroup>
                <Label for="sessionTime">Start Time</Label>
                <Input
                  type="datetime"
                  name="text"
                  id="exampleText"
                  onChange={this.handleChangeTime}
                  value={this.state.start_time}
                />
              </FormGroup>
              <FormGroup>
                <Label for="sessionDuration">Duration (hours)</Label>
                <Input
                  type="number"
                  name="text"
                  id="exampleText"
                  onChange={this.handleChangeDuration}
                  value={this.state.duration}
                />
              </FormGroup>
              <FormGroup>
                <Label for="sessionLocation">Location</Label>
                <Input
                  type="textarea"
                  name="text"
                  id="exampleText"
                  onChange={this.handleChangeLocation}
                  value={this.state.location}
                />
              </FormGroup>

              <FormGroup>
                <Label for="sessionStatus">Status</Label>
                <Input
                  type="select"
                  name="select"
                  id="exampleSelect"
                  onChange={this.handleChangeStatus}
                  value={this.state.completed_status}
                >
                  <option selected>Choose...</option>
                  <option>Not started</option>
                  <option>Completed</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="sessionCourseId">Course Id</Label>
                <Input
                  type="number"
                  name="text"
                  id="exampleText"
                  onChange={this.handleChangeCourseId}
                  value={this.state.course_id}
                />
              </FormGroup>
              <FormGroup>
                <Label for="sessionUserId">User Id</Label>
                <Input
                  type="number"
                  name="text"
                  id="exampleText"
                  onChange={this.handleChangeUserId}
                  value={this.state.user_id}
                />
              </FormGroup>

              <Button type="submit" onClick={this.submitNewSession}>
                Submit
              </Button>
            </Form>
          </div>
          <div class="col-sm" />
        </div>
      </div>
    );
  }
}

export default AddNewSession;
