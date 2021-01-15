import React from 'react';
import MainTwit from '../MainTwit';
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
          <MainTwit />
        </div>
      </div>
    </div>
  );
};

export default Main;
