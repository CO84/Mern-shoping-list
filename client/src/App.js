import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemModal from './components/ItemModal';
import { Container } from 'reactstrap';
import { loadUser } from './actions/authActions';

import { Provider } from 'react-redux';
import store from './store';

import './App.css';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <AppNavbar />
          <Container>
            <ItemModal />
            <List />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
