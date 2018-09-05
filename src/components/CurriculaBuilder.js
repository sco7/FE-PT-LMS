import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { addCurricula } from './api';
import Navbar from './navbar';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddNewCurricula extends Component {
  state = {
    title: '',
    description: ''
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

  submitNewCurricula = event => {
    event.preventDefault();
    let title = this.state.title;
    let description = this.state.description;
    addCurricula(title, description).then(res => {
      this.setState({
        title: '',
        description: ''
        });
      });
    };
  
  render() {
    return (
      <div class="container">
        <Link to={`/admin/curricula/${this.props.match.params.userId}`}>
          <button type="button" id="backButton" class="btn btn-primary btn-sm">
            Back
          </button>
        </Link>
        <Navbar />

        <div class="row">
          <div class="col-sm" />
          <div class="col-6">
            <Form>
              <h5 id="curriculaBuilder">Add Curricula</h5>
              <FormGroup>
                <Label for="curriculaTitle">Curricula Title</Label>
                <Input
                  type="text"
                  name="text"
                  id="exampleText"
                  onChange={this.handleChangeTitle}
                  value={this.state.title}
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  type="textarea"
                  name="text"
                  id="exampleText"
                  onChange={this.handleChangeDescription}
                  value={this.state.description}
                />
              </FormGroup>

              <Button type="submit" onClick={this.submitNewCurricula}>
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

export default AddNewCurricula;