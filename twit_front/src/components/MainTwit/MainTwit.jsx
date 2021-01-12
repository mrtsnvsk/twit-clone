import React from 'react';
import './MainTwit.css';

const MainTwit = () => {
  return (
    <div className='main-twit__twit'>
      <div type='button' className='main-twit__twit-avatar'>
        <img
          src='https://pbs.twimg.com/profile_images/1162986608515256322/EB8R-04B_400x400.jpg'
          alt='user logo'
        />
      </div>
      <div className='main-twit__twit-content'>
        <div className='main-twit__twit-user-data'>
          <div
            type='button'
            className='main-twit__twit-user-data-label main-twit__twit-user-data-label-name'
          >
            Никита
          </div>
          <div className='main-twit__twit-user-data-label main-twit__twit-user-data-label-second-data'>
            @martsinovsky
          </div>
          <div className='main-twit__twit-user-data-label main-twit__twit-user-data-label-second-data'>
            <i className='bi bi-dot main-twit__twit-user-data-label-second-data'></i>
          </div>
          <div className='main-twit__twit-user-data-label main-twit__twit-user-data-label-second-data'>
            1 ч.
          </div>
          <div type='button' className='main-twit__twit-user-data-label-more'>
            <i className='bi bi-three-dots main-twit__twit-user-data-label-second-data'></i>
          </div>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          laboriosam officiis dignissimos consequuntur a voluptatibus ea hic
          deserunt consequatur esse aut magnam, voluptate fuga exercitationem
          quam. Eligendi inventore rem nesciunt.
        </div>
        <div className='main-twit__twit-action-icons'>
          <div
            type='button'
            className='main-twit__twit-icon main-twit__twit-icon-reply'
          >
            <i className='bi bi-chat'></i>
            <div className='main-twit__twit-icon-description main-twit__twit-icon-description-reply'>
              123
            </div>
          </div>
          <div
            type='button'
            className='main-twit__twit-icon main-twit__twit-icon-repost'
          >
            <i className='bi bi-reply-all'></i>
            <div className='main-twit__twit-icon-description main-twit__twit-icon-description-repost'>
              123
            </div>
          </div>
          <div
            type='button'
            className='main-twit__twit-icon main-twit__twit-icon-like'
          >
            <i className='bi bi-heart'></i>
            <div className='main-twit__twit-icon-description main-twit__twit-icon-description-like'>
              123
            </div>
          </div>
          <div
            type='button'
            className='main-twit__twit-icon main-twit__twit-icon-share'
          >
            <i className='bi bi-upload'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTwit;
