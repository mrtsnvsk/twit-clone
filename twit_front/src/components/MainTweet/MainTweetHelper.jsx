import React, { useState } from 'react';
import {
  getCurrentTweet,
  likeTweet,
  unlikeTweet,
  deleteTweet,
} from '../../redux/actions/twitterAction';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { tweetAgoTime } from '../../utils/tweetAgoTime';
import NewReplyArea from '../NewReplyArea';
import './MainTweetHelper.scss';

const MainTweetHelper = ({
  data,
  currentUser,
  deleteTweet,
  likeTweet,
  unlikeTweet,
}) => {
  const history = useHistory();

  const [activeReplyes, setActiveReplyes] = useState(true);
  const [curTweet, setCurTweet] = useState();

  const getCurrentTweet = (tweet) => {
    setCurTweet(tweet);
    setActiveReplyes(false);
  };

  return (
    <>
      {curTweet && (
        <>
          <NewReplyArea
            currentTweet={curTweet}
            active={activeReplyes}
            setActive={setActiveReplyes}
          />
        </>
      )}

      {data.map((el, idx) => {
        return (
          <div
            onClick={() => history.push(`/tweets/${el.tweetId}`)}
            className='main-twit__twit'
            key={idx}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className='main-twit__twit-avatar'
            >
              <img
                onClick={() => history.push(`/profile/${el.login}`)}
                type='button'
                src={`http://localhost:8080/static/${el.avatar}`}
                alt='user logo'
              />
            </div>
            <div className='main-twit__twit-content'>
              <div className='main-twit__twit-user-data d-flex justify-content-between'>
                <div onClick={(e) => e.stopPropagation()} className='d-flex'>
                  <div
                    onClick={() => history.push(`/profile/${el.login}`)}
                    type='button'
                    className='main-twit__twit-user-data-label main-twit__twit-user-data-label-name'
                  >
                    {el.name}
                  </div>
                  <div
                    onClick={() => history.push(`/profile/${el.login}`)}
                    className='main-twit__twit-user-data-label main-twit__twit-user-data-label-second-data'
                  >
                    {`@${el.login}`}
                  </div>
                  <div className='main-twit__twit-user-data-label main-twit__twit-user-data-label-second-data'>
                    <i className='bi bi-dot main-twit__twit-user-data-label-second-data'></i>
                  </div>
                  <div className='main-twit__twit-user-data-label main-twit__twit-user-data-label-second-data'>
                    {tweetAgoTime(new Date(), el.createDate)}
                  </div>
                </div>
                <div>
                  {currentUser.login === el.login && (
                    <div
                      onClick={(e) => e.stopPropagation()}
                      type='button'
                      className='main-twit__twit-user-data-label-more'
                      active={
                        el.userId.includes(currentUser.id) ? 'true' : 'false'
                      }
                    >
                      <i
                        onClick={(e) => deleteTweet(currentUser.id, el.tweetId)}
                        className='bi bi-trash main-twit__twit-user-data-label-second-data'
                      ></i>
                    </div>
                  )}
                </div>
              </div>
              <div>{el.text}</div>

              <div className='main-twit__twit-action-icons'>
                <div
                  onClick={(e) => e.stopPropagation()}
                  type='button'
                  className='main-twit__twit-icon main-twit__twit-icon-reply'
                >
                  <i
                    onClick={() => getCurrentTweet(el)}
                    className='bi bi-chat'
                  ></i>
                  <div className='main-twit__twit-icon-description main-twit__twit-icon-description-reply'>
                    {el.replyes.length > 0 ? el.replyes.length : null}
                  </div>
                </div>
                <div
                  onClick={(e) => e.stopPropagation()}
                  type='button'
                  className='main-twit__twit-icon main-twit__twit-icon-repost'
                >
                  <i className='bi bi-reply-all'></i>
                  <div className='main-twit__twit-icon-description main-twit__twit-icon-description-repost'>
                    {el.reposts.length > 0 ? el.reposts.length : null}
                  </div>
                </div>
                <div
                  onClick={(e) => e.stopPropagation()}
                  type='button'
                  className={`main-twit__twit-icon main-twit__twit-icon-like ${
                    el.likes.includes(currentUser.login)
                      ? 'main-twit__twit-icon-like-active'
                      : null
                  }`}
                >
                  <i
                    onClick={() =>
                      el.likes.includes(currentUser.login)
                        ? unlikeTweet(el.tweetId, currentUser.login)
                        : likeTweet(el.tweetId, currentUser.login)
                    }
                    className='bi bi-heart'
                  ></i>
                  <div className='main-twit__twit-icon-description main-twit__twit-icon-description-like'>
                    {el.likes.length > 0 ? el.likes.length : null}
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
      })}
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTweet: (userId, tweetId) => dispatch(deleteTweet(userId, tweetId)),
    getCurrentTweet: (id) => dispatch(getCurrentTweet(id)),
    likeTweet: (tweetId, likedUser) => dispatch(likeTweet(tweetId, likedUser)),
    unlikeTweet: (tweetId, likedUser) =>
      dispatch(unlikeTweet(tweetId, likedUser)),
  };
};

export default connect(null, mapDispatchToProps)(MainTweetHelper);
