import React from 'react';
import Header from '../Header';
import Main from '../Main';
import Sidebar from '../Sidebar';
import LoginForm from '../LoginForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.scss';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <div className='app'>
            <div className='app__container'>
              <div className='app__header'>
                <Header />
              </div>
              <div className='app__main'>
                <Main />
              </div>
              <div className='app__sidebar'>
                <Sidebar />
              </div>
            </div>
          </div>
        </Route>
        <Route exact path='/login' component={LoginForm} />
      </Switch>
    </>
  );
};

export default App;
