import React from 'react';
import MainTweetProfile from '../MainTweet/MainTweetProfile';
import './Replyes.scss';

const Replyes = () => {
  return (
    <div className='app__main'>
      <div className='replyes__container'>
        <div className='replyes__container-header'>
          <div>Replyes</div>
        </div>
        <div className='replyes__content'>
          <div className='replyes__tweet'>
            {/* // header */}
            <div className='replyes__tweet-header d-flex'>
              <div className='replyes__tweet-header-avatar'>
                <img
                  alt='avatar'
                  src='https://pbs.twimg.com/media/EtTVv_eXYAEElxJ?format=jpg&name=small'
                />
              </div>
              <div className='replyes__tweet-header-data'>
                <div className='replyes__tweet-header-data-name'>Name</div>
                <div className='replyes__tweet-header-data-login'>@login</div>
              </div>
            </div>
            {/* // text */}
            <div className='replyes__tweet-text'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo cum
              est veritatis, aspernatur rem dicta debitis dignissimos nemo
              eligendi fuga quaerat quos minima animi, voluptas suscipit eius
              tenetur? Nulla, nam!
            </div>
            {/* // date */}
            <div className='replyes__tweet-create-date'>
              <span>3:23 PM</span>
              <span>
                <i className='bi bi-dot replyes__dot'></i>
              </span>
              <span>Feb 3, 2021</span>
            </div>
            {/* // counter */}
            <div className='replyes__tweet-counter d-flex'>
              <div>
                9 <span>Retweets</span>
              </div>
              <div>
                8 <span>Quote</span>
              </div>
              <div>
                10 <span>Likes</span>
              </div>
            </div>
            {/* // actions */}
            <div className='replyes__tweet-action d-flex justify-content-around'>
              <div className='replyes__tweeet-reply'>
                <i className='bi bi-chat replyes__tweeet-icon replyes__tweeet-icon-reply'></i>
              </div>
              <div className='replyes__tweeet-repost'>
                <i className='bi bi-reply-all replyes__tweeet-icon replyes__tweeet-icon-repost'></i>
              </div>
              <div className='replyes__tweeet-like'>
                <i className='bi bi-heart replyes__tweeet-icon replyes__tweeet-icon-like'></i>
              </div>
              <div className='replyes__tweeet-share'>
                <i className='bi bi-upload replyes__tweeet-icon replyes__tweeet-icon-share'></i>
              </div>
            </div>
          </div>
        </div>
        <MainTweetProfile />
      </div>
    </div>
  );
};

export default Replyes;
