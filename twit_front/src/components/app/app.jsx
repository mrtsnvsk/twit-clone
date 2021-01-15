import React, { useEffect, useRef } from 'react';
import Header from '../Header';
import Main from '../Main';
import Sidebar from '../Sidebar';
import LoginForm from '../LoginForm';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';

const App = ({ isAuth }) => {
  return (
    <>
      <Route
        exact
        path={['/', '/home', '/profile', '/notifications', '/messages']}
      >
        <Redirect from='/' to='/home' />
        {!isAuth && <Redirect from='/home' to='login' />}
        <div className='app'>
          <Header />
          <Switch>
            <Route path='/home' component={Main} />
          </Switch>
          <Sidebar />
        </div>
      </Route>
      {!isAuth && <Route exact path='/login' component={LoginForm} />}
      {isAuth && <Redirect from='login' to='home' />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.isAuth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
