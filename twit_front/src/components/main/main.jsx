import React from 'react';
import MainTweetHome from '../MainTweet/MainTweetHome';
import NewTwitArea from '../NewTwitArea/NewTwitArea';
import './Main.scss';

const Main = () => {
  return (
    <div className='app__main'>
      <div className='home'>
        <div className='home__header'>
          <span>Home</span>
        </div>
        <NewTwitArea />
        <div className='home__twits-line'>
          <MainTweetHome />
        </div>
      </div>
    </div>
  );
};

export default Main;
