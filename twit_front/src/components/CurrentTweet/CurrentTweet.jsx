import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  getUserProfile,
  likeTweet,
  unlikeTweet,
} from '../../redux/actions/twitterAction';
import moment from 'moment';
import { connect } from 'react-redux';
import NewReplyArea from '../NewReplyArea';
import Quote from './Quote';
import './CurrentTweet.scss';

const CurrentTweet = ({ currentUser, likeTweet, unlikeTweet, allTweets }) => {
  let { id } = useParams();
  const [currentTweet, setCurrentTweet] = useState();
  console.log(currentTweet);

  useEffect(() => {
    setCurrentTweet(allTweets.find((el) => el.tweetId === id));
  }, [id, allTweets]);

  const [activeReplyes, setActiveReplyes] = useState(true);

  return (
    <>
      <NewReplyArea
        currentTweet={currentTweet}
        active={activeReplyes}
        setActive={setActiveReplyes}
      />
      {currentTweet && (
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
                      src={`http://localhost:8080/static/${currentTweet.avatar}`}
                    />
                  </div>
                  <div className='replyes__tweet-header-data'>
                    <div className='replyes__tweet-header-data-name'>
                      {currentTweet.name}
                    </div>
                    <div className='replyes__tweet-header-data-login'>
                      @{currentTweet.login}
                    </div>
                  </div>
                </div>
                {/* // text */}
                <div className='replyes__tweet-text'>{currentTweet.text}</div>
                {/* // date */}
                <div className='replyes__tweet-create-date'>
                  <span>{moment(currentTweet.createDate).format('LT')}</span>
                  <span>
                    <i className='bi bi-dot replyes__dot'></i>
                  </span>
                  <span>{moment(currentTweet.createDate).format('ll')}</span>
                </div>
                {/* // counter */}
                <div className='replyes__tweet-counter d-flex'>
                  <div>
                    {currentTweet.reposts.length} <span>Retweets</span>
                  </div>
                  <div>
                    {currentTweet.replyes.length} <span>Quote</span>
                  </div>
                  <div>
                    {currentTweet.likes.length} <span>Likes</span>
                  </div>
                </div>
                {/* // actions */}
                <div className='replyes__tweet-action d-flex justify-content-around'>
                  <div className='replyes__tweeet-reply'>
                    <i
                      onClick={() => setActiveReplyes(false)}
                      className='bi bi-chat replyes__tweeet-icon replyes__tweeet-icon-reply'
                    ></i>
                  </div>
                  <div className='replyes__tweeet-repost'>
                    <i className='bi bi-reply-all replyes__tweeet-icon replyes__tweeet-icon-repost'></i>
                  </div>
                  <div
                    className='replyes__tweeet-like'
                    onClick={() =>
                      currentTweet.likes.includes(currentUser.login)
                        ? unlikeTweet(currentTweet.tweetId, currentUser.login)
                        : likeTweet(currentTweet.tweetId, currentUser.login)
                    }
                  >
                    <i
                      className={`bi bi-heart replyes__tweeet-icon replyes__tweeet-icon-like ${
                        currentTweet.likes.includes(currentUser.login)
                          ? 'replyes__tweeet-icon-like-active'
                          : null
                      }`}
                    ></i>
                  </div>
                  <div className='replyes__tweeet-share'>
                    <i className='bi bi-upload replyes__tweeet-icon replyes__tweeet-icon-share'></i>
                  </div>
                </div>
              </div>
            </div>
            <Quote currentTweet={currentTweet} />
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = ({ currentUser, allTweets }) => {
  return {
    currentUser,
    allTweets,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserProfile: (login) => dispatch(getUserProfile(login)),
    likeTweet: (tweetId, likedUser) => dispatch(likeTweet(tweetId, likedUser)),
    unlikeTweet: (tweetId, likedUser) =>
      dispatch(unlikeTweet(tweetId, likedUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentTweet);
