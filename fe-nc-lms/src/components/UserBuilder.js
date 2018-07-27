import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { addUser } from './api';
import Navbar from './navbar';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddNewUser extends Component {
  state = {
    account_type: '',
    first_name: '',
    last_name: '',
    job_title: '',
    gender: '',
    username: '',
    curricula_id: 0
  };

  handleChangeAccount = event => {
    this.setState({
      account_type: event.target.value
    });
  };

  handleChangeFirstName = event => {
    this.setState({
      first_name: event.target.value
    });
  };

  handleChangeLastName = event => {
    this.setState({
      last_name: event.target.value
    });
  };

  handleChangeJob = event => {
    this.setState({
      job_title: event.target.value
    });
  };

  handleChangeGender = event => {
    this.setState({
      gender: event.target.value
    });
  };

  handleChangeUsername = event => {
    this.setState({
      username: event.target.value
    });
  };

  handleChangeCurriculaId = event => {
    this.setState({
      curricula_id: event.target.value
    });
  };

  submitNewUser = event => {
    event.preventDefault();
    let accountType = this.state.account_type;
    let firstName = this.state.first_name;
    let lastName = this.state.last_name;
    let jobTitle = this.state.job_title;
    let gender = this.state.gender;
    let userName = this.state.username;
    let CurriculaId = this.state.curricula_id;
    addUser(accountType, firstName, lastName, jobTitle, gender, userName, CurriculaId).then(res => {
      this.setState({
        account_type: '',
        first_name: '',
        last_name: '',
        job_title: '',
        gender: '',
        username: '',
        curricula_id: 0
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
              <h5 id="userBuilder">Add User</h5>
              <FormGroup>
                <Label for="userAccount">Account Type</Label>
                <Input
                type="select"
                name="select"
                id="exampleSelect"
                onChange={this.handleChangeAccount}
                value={this.state.account_type}
                >
                  <option selected>Choose...</option>
                  <option>User</option>
                  <option>Admin</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input
                  type="text"
                  name="text"
                  id="exampleText"
                  onChange={this.handleChangeFirstName}
                  value={this.state.first_name}
                />
              </FormGroup>
              <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input
                  type="text"
                  name="text"
                  id="exampleText"
                  onChange={this.handleChangeLastName}
                  value={this.state.last_name}
                />
              </FormGroup>
              <FormGroup>
                <Label for="jobTitle">Job Title</Label>
                <Input
                  type="text"
                  name="text"
                  id="exampleText"
                  onChange={this.handleChangeJob}
                  value={this.state.job_title}
                />
              </FormGroup>
              <FormGroup>
                <Label for="Gender">Gender</Label>
                <Input
                type="select"
                name="select"
                id="exampleSelect"
                onChange={this.handleChangeGender}
                value={this.state.gender}
                >
                  <option selected>Choose...</option>
                  <option>M</option>
                  <option>F</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="userName">Username</Label>
                <Input
                  type="text"
                  name="text"
                  id="exampleText"
                  onChange={this.handleChangeUsername}
                  value={this.state.username}
                />
              </FormGroup>

              <FormGroup>
                <Label for="userCurriculaId">Curricula Id</Label>
                <Input
                  type="number"
                  name="text"
                  id="exampleText"
                  onChange={this.handleChangeCurriculaId}
                  value={this.state.curricula_id}
                />
              </FormGroup>

              <Button type="submit" onClick={this.submitNewUser}>
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

export default AddNewUser;