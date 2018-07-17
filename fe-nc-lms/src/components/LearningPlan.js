import React, { Component } from 'react';
import Navbar from '../components/navbar';
import LearningFeed from './LearningFeed';

class LearningPlan extends Component {
  
  

  render() {
    return (
          <div class="row">
          <div class="col-sm">
          <Navbar />
          <LearningFeed />
          
          </div>
          <div class="col-6">
            
            </div>
            <div class="col-sm">
              
            </div>
      </div>

    );
  }
}

export default LearningPlan;