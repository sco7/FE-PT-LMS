import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <React.Fragment>
        <div>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/articles/:articleId" component={ArticleView} />
              <Route path="/users/:userId" component={UserView} />
              <Route path="/articles/:articleId/comments" component={ArticleView} />
              <Route path="/topics/:topicId/articles" component={TopicView} />
              <Route path="/addComment/:articleId" component={AddCommentView} />
              <Route path="/comments/:commentId" component={CommentView} />
            </Switch>
          </div>
        </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;