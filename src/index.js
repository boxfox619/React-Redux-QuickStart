import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/index';
import store from '../store';
import { Provider } from 'react-redux';

function renderAppInElement(el) {
  ReactDOM.render(
      <Provider store = {store}>
        <Router history = {browserHistory}>
          <div>
            <Route exact path = "/" component = {Index}/>
          </div>
        </Router>
      </Provider>, el);
}
