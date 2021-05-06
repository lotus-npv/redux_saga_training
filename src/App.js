import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';

import PublicRoute from './component/PublicRoute';
import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Switch>
              <PublicRoute component={(props) => (<h1>Home page</h1>)} exact path="/" />
              <PublicRoute component={(props) => (<h1>test page</h1>)} exact path="/test" />
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
