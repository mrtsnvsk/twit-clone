import React from 'react';
import MainTwit from '../MainTwit';
import NewTwitArea from '../NewTwitArea/NewTwitArea';
import './Main.scss';

const Main = () => {
  return (
    <div className='home'>
      <div className='home__header'>
        <span>Home</span>
      </div>
      <NewTwitArea />
      <div className='home__twits-line'>
        <MainTwit />
        <MainTwit />
        <MainTwit />
      </div>
    </div>
  );
};

export default Main;
