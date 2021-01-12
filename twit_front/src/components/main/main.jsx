import React, { useState } from 'react';
import MainTwit from '../MainTwit';
import './main.css';

const Main = () => {
  return (
    <div className='home'>
      <div className='home__header'>
        <span>Home</span>
      </div>
      <div className='home__new-twit-area'>
        <div className='home__user-avatar'>
          <img
            src='https://pbs.twimg.com/profile_images/1162986608515256322/EB8R-04B_400x400.jpg'
            alt='user logo'
          />
        </div>
        <div className='form-floating home__new-twit-input'>
          <textarea
            placeholder='Что нового?'
            className='form-control-label'
          ></textarea>
          <div className='home__new-twit-input-line'></div>
          <div className='home__new-twit-submit'>
            <button type='button' className='btn btn-primary'>
              Твит
            </button>
          </div>
        </div>
      </div>

      <div className='home__twits-line'>
        <MainTwit />
        <MainTwit />
        <MainTwit />
      </div>
    </div>
  );
};

export default Main;
