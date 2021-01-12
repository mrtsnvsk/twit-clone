import React, { useState } from 'react';
import Header from '../header';
import Main from '../main';
import './app.css';

const App = () => {
  return (
    <div className='app'>
      <div className='container center'>
        <div className='row'>
          <div className='col-md-auto app__header'>
            <Header />
          </div>
          <div className='col-md-auto app__main'>
            <Main />
          </div>
          <div className='col-md-auto app__sidebar'>sidebar</div>
        </div>
      </div>
    </div>
  );
};

export default App;
