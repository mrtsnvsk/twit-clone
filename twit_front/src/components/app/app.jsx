import React, { useEffect } from 'react';
import Header from '../Header';
import Main from '../Main';
import Sidebar from '../Sidebar';
import LoginForm from '../LoginForm';
import * as action from '../../redux/actions/authAction';
import * as tweetAction from '../../redux/actions/twitterAction';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';
import Profile from '../Profile/Profile';

const App = ({ isAuth, checkAuthUser, getAllTweets, allTweets }) => {
  useEffect(() => {
    getAllTweets();
    if (localStorage.getItem('token')) checkAuthUser();
  }, [checkAuthUser, getAllTweets, allTweets.length]);

  return (
    <>
      {isAuth && (
        <Route
          exact
          path={['/', '/home', '/profile', '/notifications', '/messages']}
        >
          <Redirect from='/' to='/home' />
          <div className='app'>
            <Header />
            <Switch>
              <Route path='/home' component={Main} />
              <Route path='/profile' component={Profile} />
            </Switch>
            <Sidebar />
          </div>
        </Route>
      )}
      {!isAuth && (
        <Redirect
          from={('/', '/home', '/profile', '/notifications', '/messages')}
          to='/login'
        />
      )}
      {!isAuth && <Route exact path='/login' component={LoginForm} />}
      {isAuth && <Redirect from='/login' to='/home' />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.isAuth,
    currentUser: state.currentUser,
    allTweets: state.allTweets,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    checkAuthUser: () => dispatch(action.checkAuthUser()),
    getAllTweets: () => dispatch(tweetAction.getAllTweets()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
