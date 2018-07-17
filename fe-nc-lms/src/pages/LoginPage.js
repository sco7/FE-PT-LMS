import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { getLogin } from '../components/api';

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    user: {} 
  }

  handleChangeUsername = event => {
    this.setState({
      username: event.target.value,
    });
  };

  handleChangePassword = event => {
    this.setState({
      password: event.target.value,
    });
  };

  submitLogin = event => {
    event.preventDefault();
    let username = this.state.username;
    let password = this.state.password;
    let userId = this.props.match.params.userId;
    console.log(username);
    console.log(password);
    getLogin(username, password).then(res => {
      console.log(res, 'mounted');
      this.setState({
        user: res.Users.id
      });
      this.props.history.push('/learning/'+this.state.user);
    });
  };
  render() {
    const { user } = this.state;
    console.log(user);
    return (
      <div className="row justify-content-center">
        <div className="col-10 col-sm-7 col-md-5 col-lg-4">
          <Form>
            <FormGroup>
              <h3 id="loginTitle">Learning Management System</h3>
              <h4 id='login'>Login</h4>
              <Label for="username">Username</Label>
              <Input
                type="text"
                name="text"
                id="username"
                placeholder="username"
                onChange={this.handleChangeUsername}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                onChange={this.handleChangePassword}
              />
            </FormGroup>
            <Button
              className="button2"
              type="submit"
              onClick={this.submitLogin}
              value={this.state.id}>
              Log In
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default LoginPage;