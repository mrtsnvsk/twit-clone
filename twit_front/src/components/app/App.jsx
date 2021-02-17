import React, { useEffect } from 'react';
import Header from '../Header';
import Main from '../Main';
import Sidebar from '../Sidebar';
import LoginForm from '../LoginForm';
import * as action from '../../redux/actions/authAction';
import * as tweetAction from '../../redux/actions/twitterAction';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Profile from '../Profile';
import CurrentTweet from '../CurrentTweet/CurrentTweet';
import './App.scss';

const App = ({
  isAuth,
  checkAuthUser,
  getAllTweets,
  allTweets,
  logoutUser,
}) => {
  useEffect(() => {
    getAllTweets();
    localStorage.getItem('token') ? checkAuthUser() : logoutUser();
  }, [checkAuthUser, getAllTweets, logoutUser]);

  return (
    <>
      {!isAuth && <Route path='/login' component={LoginForm} />}
      {isAuth && (
        <div className='app'>
          <Header />
          <Switch>
            <Route path='/home' component={Main} />
            <Route path='/profile/:login' component={Profile} />
            <Route path='/tweets/:id' component={CurrentTweet} />
          </Switch>
          <Sidebar />
        </div>
      )}
      {/* {!isAuth && <Redirect to='/login' />} */}
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
    logoutUser: () => dispatch(action.logoutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
