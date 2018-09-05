import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { removeCourse } from './api';
import Navbar from './navbar';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class DeleteCourse extends Component {
  state = {
    courseId: 0
  };

  handleChangeCourseId = event => {
    this.setState({
      courseId: event.target.value
    });
  };

  handleDeleteCourse = event => {
    event.preventDefault();
    let courseId = this.state.courseId;
    console.log(courseId);
    removeCourse(courseId).then(res => {
      if (res.error === undefined) alert(res.message);
      if (res.message === undefined) alert(res.error);
      this.setState({
        courseId: 0
      });
    });
  };

  render() {
    return (
      <div class="container">
        <Link to={`/admin/courses/${this.props.match.params.userId}`}>
          <button type="button" id="backButton" class="btn btn-primary btn-sm">
            Back
          </button>
        </Link>
        <Navbar />
        <div class="row">
          <div class="col-sm" />
          <div class="col-6">
            <Form>
              <h5 id="deleteCourse">Remove Course</h5>
              <FormGroup>
                <Label for="courseId">Course Id</Label>
                <Input
                  type="number"
                  name="id"
                  id="deleteCourse"
                  onChange={this.handleChangeCourseId}
                />
              </FormGroup>
              <Button type="submit" onClick={this.handleDeleteCourse}>
                Delete Course
              </Button>
            </Form>
          </div>
          <div class="col-sm" />
        </div>
      </div>
    );
  }
}

export default DeleteCourse;
