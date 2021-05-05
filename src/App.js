import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';

import PublicRoute from './component/PublicRoute';
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <PublicRoute component={(props) => (<h1>Home page</h1>)} exact path="/" />
            <PublicRoute component={(props) => (<h1>test page</h1>)} exact path="/test" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
