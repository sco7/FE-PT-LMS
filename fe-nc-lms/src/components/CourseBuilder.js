import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { addCourse } from './api';
import Navbar from './navbar';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddNewCourse extends Component {
  state = {
    title: '',
    description: '',
    curriculaId: ''
  };

  handleChangeTitle = event => {
    this.setState({
      title: event.target.value
    });
  };

  handleChangeDescription = event => {
    this.setState({
      description: event.target.value
    });
  };

  handleChangeCurriculaId = event => {
    console.log(event.target.value);
    this.setState({
      curriculaId: event.target.value
    });
  };

  submitNewCourse = event => {
    event.preventDefault();
    let title = this.state.title;
    let description = this.state.description;
    let curriculaId = this.state.curriculaId;
    console.log(title);
    console.log(curriculaId);
    addCourse(title, description, curriculaId).then(res => {
      this.setState({
        title: '',
        description: '',
        curriculaId: 0
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
              <h5 id="courseBuilder">Add Course</h5>
              <FormGroup>
                <Label for="courseTitle">Course Title</Label>
                <Input
                  type="textarea"
                  name="text"
                  id="exampleText"
                  onChange={this.handleChangeTitle}
                  value={this.state.title}
                />
              </FormGroup>
              <FormGroup>
                <Label for="courseDescription">Course Description</Label>
                <Input
                  type="textarea"
                  name="text"
                  id="exampleText"
                  onChange={this.handleChangeDescription}
                  value={this.state.description}
                />
              </FormGroup>
              <FormGroup>
                <Label for="curriculaIdSelect">Curricula Id</Label>
                <Input
                  type="select"
                  name="select"
                  id="exampleSelect"
                  onChange={this.handleChangeCurriculaId}
                >
                  <option selected>Choose...</option>
                  <option value={1}>Basic Package</option>
                  <option value={2}>Advanced Package</option>
                  <option value={3}>Engineering Package</option>
                  <option value={4}>Technical Package</option>
                  <option value={5}>Management Package</option>
                </Input>
              </FormGroup>

              <Button type="submit" onClick={this.submitNewCourse}>
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

export default AddNewCourse;
