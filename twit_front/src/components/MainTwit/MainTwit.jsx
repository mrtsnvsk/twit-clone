import React from 'react';
import { connect } from 'react-redux';
import './MainTwit.scss';

const MainTwit = ({ currentUser }) => {
  const { name, login } = currentUser;

  const twit = currentUser.twits.map((el, idx) => {
    return (
      <div key={idx} className='main-twit__twit'>
        <div className='main-twit__twit-avatar'>
          <img
            type='button'
            src='https://pbs.twimg.com/profile_images/1162986608515256322/EB8R-04B_400x400.jpg'
            alt='user logo'
          />
        </div>
        <div className='main-twit__twit-content'>
          <div className='main-twit__twit-content'></div>
          <div className='main-twit__twit-user-data'>
            <div
              type='button'
              className='main-twit__twit-user-data-label main-twit__twit-user-data-label-name'
            >
              {name}
            </div>
            <div className='main-twit__twit-user-data-label main-twit__twit-user-data-label-second-data'>
              {login}
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
          <div>{el.text}</div>
          <div className='main-twit__twit-action-icons'>
            <div
              type='button'
              className='main-twit__twit-icon main-twit__twit-icon-reply'
            >
              <i className='bi bi-chat'></i>
              <div className='main-twit__twit-icon-description main-twit__twit-icon-description-reply'>
                {el.reposts}
              </div>
            </div>
            <div
              type='button'
              className='main-twit__twit-icon main-twit__twit-icon-repost'
            >
              <i className='bi bi-reply-all'></i>
              <div className='main-twit__twit-icon-description main-twit__twit-icon-description-repost'>
                {el.reposts}
              </div>
            </div>
            <div
              type='button'
              className='main-twit__twit-icon main-twit__twit-icon-like'
            >
              <i className='bi bi-heart'></i>
              <div className='main-twit__twit-icon-description main-twit__twit-icon-description-like'>
                {el.likes}
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
  });

  return twit;
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(MainTwit);
