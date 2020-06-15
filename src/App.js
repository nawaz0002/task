import React, {Fragment, useEffect} from 'react';
import './App.css';
import Home from './components/Home';
import Weather from './components/Weather';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { setAuth } from './action/auth'

// redux
import store from './store';
import {Provider } from 'react-redux';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';

// if(localStorage.isAuthenticated){
//   console.log(localStorage.getItem('isAuthenticated'))
//   console.log(setAuth)
//   setAuth(localStorage.getItem('isAuthenticated'))
// }

function App() {
  useEffect(() => {
    store.dispatch(setAuth(localStorage.getItem('isAuthenticated')))
  }, [])
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Alert />
        <Fragment>
          {/* <Register /> */}
          {/* <Login /> */}
          {/* <Test /> */}
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/weather" component={Weather}></Route>
            <Route path="/signin" component={Login}></Route>
            <Route path="/signup" component={Register}></Route>
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
