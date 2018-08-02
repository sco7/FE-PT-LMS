import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { removeCurricula } from './api';
import Navbar from './navbar';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class DeleteCurricula extends Component {
  state = {
    curriculaId: 0
  };

  handleChangeCurriculaId = event => {
    this.setState({
      curriculaId: event.target.value
    });
  };

  handleDeleteCurricula = event => {
    event.preventDefault();
    let curriculaId = this.state.curriculaId;
    console.log(curriculaId);
    removeCurricula(curriculaId).then(res => {
      if (res.error === undefined) alert(res.message)
      if (res.message === undefined) alert(res.error)
      this.setState({
        curriculaId: 0
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
              <h5 id="deleteCurricula">Remove Curricula</h5>
              <FormGroup>
                <Label for="userId">Curricula Id</Label>
                <Input
                  type="number"
                  name="id"
                  id="deleteCurricula"
                  onChange={this.handleChangeCurriculaId}
                />
              </FormGroup>

              <Button type="submit" onClick={this.handleDeleteCurricula}>
                Delete Curricula
              </Button>
            </Form>
          </div>
          <div class="col-sm" />
        </div>
      </div>
    );
  }
}

export default DeleteCurricula;