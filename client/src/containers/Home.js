import React, { Component } from 'react';
import ArticleList from '../components/ArticleList';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <ArticleList />
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
