import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import { getAllCurricula } from './api';

class AllCurriculaView extends React.Component {
  state = {
    curricula: {},
    loading: true
  };

  componentDidMount() {
    console.log('loading');
    getAllCurricula().then(curriculaData => {
      console.log(curriculaData, 'mounted');
      this.setState({
        curricula: curriculaData.Curricula,
        loading: false
      });
    });
  }

  render() {
    console.log('render');
    const { curricula } = this.state;
    return (
      <div class="container">
        <div class="row">
          <Link to={`/learning/${this.props.match.params.userId}`}>
            <button
              type="button"
              id="backButton"
              class="btn btn-primary btn-sm"
            >
              Back
            </button>
          </Link>

          <Link
            to={`/admin/CurriculaBuilder/${this.props.match.params.userId}`}
          >
            <button
              type="button"
              id="CurriculaBuilderButton"
              class="btn btn-primary btn-sm"
            >
              Add New Curricula
            </button>
          </Link>
          <Link
            to={`/admin/CurriculaRemover/${this.props.match.params.userId}`}
          >
            <button
              type="button"
              id="DeleteCurriculaButton"
              class="btn btn-primary btn-sm"
            >
              Remove Curricula
            </button>
          </Link>

          <div class="col-9">
            <div>
              {this.state.loading ? (
                <p>Courses loading........</p>
              ) : (
                <form id="CompleteCurriculaFeed">
                  <Navbar />
                  <h4 id="CompleteCurriculaViewAdmin"> </h4>
                  <h5>All Curricula</h5>
                  {this.state.curricula === undefined ? (
                    <p>No curricula</p>
                  ) : (
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Title</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {curricula.map(this.renderCurricula.bind(this))}
                      </tbody>
                    </table>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderCurricula(curricula, index) {
    return (
      <tr key={index}>
        <td>{curricula.id}</td>
        <td>{curricula.title}</td>
        <td>{curricula.description}</td>
      </tr>
    );
  }
}
export default AllCurriculaView;
