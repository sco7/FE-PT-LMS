import React, { Component } from 'react';
import Navbar from '../components/navbar';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  componentDidMount() {
    console.log('loading');
    const { userId } = this.props.match.params;
    console.log(userId);
  }

  render() {
    return (
          <div class="row">
          <div class="col-sm">
          <Navbar />
          <Button
              className="button"
              type="submit">
              <Link to="/">Learning Plan</Link>
            </Button>
            
          </div>
          <div class="col-8">
          <Button
              className="button"
              type="submit">
              <Link to="/">Admin Centre</Link>
            </Button>
            </div>
            <div class="col-sm">
              
            </div>
      </div>

    );
  }
}

export default HomePage;

