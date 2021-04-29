import React from 'react';
import { Provider, connect } from 'react-redux';

import store from './redux/store';

function App(props) {
  return (
    <Provider store={store}>

    </Provider>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  }
}

// const mapDispatchToProps = () => {

// }
export default connect(mapStateToProps)(App);
