import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './state/store/store';
import Todos from './components/Todos/Todos';

const App = () => (
  <Provider store={store}>
    <Router>
      <Route path="/" exact component={Todos} />
    </Router>
  </Provider>
);
export default App;
