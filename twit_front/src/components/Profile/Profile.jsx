import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as action from '../../redux/actions/twitterAction';
import MainTweetProfile from '../MainTweet/MainTweetProfile';
import ProfileModal from '../ProfileModal';
import './Profile.scss';
import moment from 'moment';

const Profile = ({ currentUser, allTweets }) => {
  const [modalActive, setModalActive] = useState(true);
  const { name, login, avatar } = currentUser;

  const onHandleKeyPress = (e) => {
    if (e.keyCode === 27) {
      setModalActive(true);
    }
  };

  return (
    <div className='app__main'>
      <ProfileModal active={modalActive} setActive={setModalActive} />
      <div className='profile' onKeyDown={onHandleKeyPress} tabIndex='0'>
        <div className='profile__header d-flex'>
          <div className='profile__back-icon'>
            <i className='bi bi-arrow-left blue'></i>
          </div>
          <div className='profile__header-label'>
            <div>{name}</div>
            <div className='profile__header-label-count'>{`${currentUser.tweets.length} tweets`}</div>
          </div>
        </div>
        <div className='profile__user-data'>
          <div
            style={{
              backgroundImage:
                'url(https://pbs.twimg.com/profile_banners/774664361746976772/1518560971/600x200)',
            }}
            className='profile__user-data-bg-image'
          >
            <div className='profile__user-data-edit d-flex align-items-center justify-content-between'>
              <img
                alt='user-logo'
                src={`http://localhost:8080/static/${avatar}`}
              />
            </div>
          </div>
          <div className='profile__user-data-info'>
            <div>
              <div className='profile__user-data-info-edit-button d-flex justify-content-end'>
                <button
                  onClick={() => setModalActive(false)}
                  type='submit'
                  className='btn btn-primary'
                >
                  EditProfile
                </button>
              </div>
              <div className='profile__user-data-name'>{name}</div>
              <div className='profile__user-data-login'>{`@${login}`}</div>
              <div className='profile__user-data-bio'>BIO</div>
            </div>
            <div className='profile__user-data-info-label d-flex flex-row'>
              <div className='profile__user-data-info-icons'>
                <i className='bi bi-geo-alt'></i>
                Donetsk, Ukraine
              </div>
              <div className='profile__user-data-info-icons'>
                <i className='bi bi-gift'></i>
                Born 22 January, 1998
              </div>
              <div className='profile__user-data-info-icons'>
                <i className='bi bi-calendar3'></i>
                {`Joined ${moment(currentUser.regDate).format('MMMM YY')}`}
              </div>
            </div>
            <div className='d-flex flex-row profile__user-data-info-follow-text'>
              <div className='profile__user-data-info-follow-text-label'>
                <span>22</span>Following
              </div>
              <div className='profile__user-data-info-follow-text-label'>
                <span>37</span>Followers
              </div>
            </div>
          </div>
        </div>
        <MainTweetProfile />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    allTweets: state.allTweets,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAvatar: (id, avatar) => dispatch(action.getAvatar(id, avatar)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
