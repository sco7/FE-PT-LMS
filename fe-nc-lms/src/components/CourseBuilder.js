import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { addCourse } from './api';
import Navbar from './navbar';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddNewComment extends Component {
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
    this.setState({
      curriculaId: event.target.value
    });
  };

  submitNewCourse = event => {
    event.preventDefault();
    let title = this.state.title;
    let description = this.state.description;
    let curriculaId = this.state.curriculaId;
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
                <Input type="textarea" name="text" id="exampleText" onChange={this.handleChangeTitle}
                  value={this.state.title} />
              </FormGroup>
              <FormGroup>
                <Label for="courseDescription">Course Description</Label>
                <Input type="textarea" name="text" id="exampleText" onChange={this.handleChangeDescription}
                  value={this.state.description}/>
              </FormGroup>
              <FormGroup>
                <Label for="curriculaIdSelect">Curricula Id</Label>
                <Input type="select" name="select" id="exampleSelect" onChange={this.handleChangeCurriculaId}
                  value={this.state.curriculaId}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>

              <Button>Submit</Button>
            </Form>

            
            </div>
            <div class="col-sm" />

            {/* <label>Create new course</label>
              <div>
                <textarea
                  rows="1"
                  cols="40"
                  className="textarea"
                  placeholder="Course Title"
                  onChange={this.handleChangeTitle}
                  value={this.state.title}
                />
                <textarea
                  rows="1"
                  cols="40"
                  className="textarea"
                  placeholder="Course Description"
                  onChange={this.handleChangeDescription}
                  value={this.state.description}
                />
                <input
                  type="number"
                  cols="40"
                  className="textarea"
                  placeholder="Curricula Id"
                  onChange={this.handleChangeCurriculaId}
                  value={this.state.curriculaId}
                />
                <div>
                  <button
                    className="button"
                    type="submit"
                    //id={this.props.articleId}
                    onClick={this.submitNewCourse}
                    //value={this.state.comment}
                  >
                    {' '}
                    Submit
                  </button>
                </div>
              </div> */}
          </div>
       
      </div>
    );
  }
}

export default AddNewComment;
