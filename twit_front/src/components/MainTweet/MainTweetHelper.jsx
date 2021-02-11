import React, { useState } from 'react';
import { getCurrentTweet } from '../../redux/actions/twitterAction';
import { connect } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { tweetAgoTime } from '../../utils/tweetAgoTime';
import NewReplyArea from '../NewReplyArea';
import './MainTweetHelper.scss';

const MainTweetHelper = ({
  data,
  currentUser,
  deleteTweet,
  likeTweet,
  unlikeTweet,
  getCurrentTweet,
}) => {
  const [activeReplyes, setActiveReplyes] = useState(true);

  const history = useHistory();
  return (
    <>
      <NewReplyArea active={activeReplyes} setActive={setActiveReplyes} />
      {data.map((el, idx) => {
        return (
          <div
            onClick={() => history.push(`/tweets/${el.tweetId}`)}
            className='main-twit__twit'
            key={idx}
          >
            <div className='main-twit__twit-avatar'>
              <Link key={idx} to={`/profile/${el.login}`}>
                <img
                  type='button'
                  src={`http://localhost:8080/static/${el.avatar}`}
                  alt='user logo'
                />
              </Link>
            </div>
            <div className='main-twit__twit-content'>
              <div className='main-twit__twit-user-data d-flex justify-content-between'>
                <div className='d-flex'>
                  <div
                    type='button'
                    className='main-twit__twit-user-data-label main-twit__twit-user-data-label-name'
                  >
                    {el.name}
                  </div>
                  <div className='main-twit__twit-user-data-label main-twit__twit-user-data-label-second-data'>
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
                  {window.location.href === 'http://localhost:3000/profile' && (
                    <div
                      style={{ zIndex: 100 }}
                      type='button'
                      className='main-twit__twit-user-data-label-more'
                      active={
                        el.userId.includes(currentUser.id) ? 'true' : 'false'
                      }
                      onClick={(e) =>
                        deleteTweet(currentUser.id, el.tweetId) &&
                        e.stopPropagation()
                      }
                    >
                      <i className='bi bi-trash main-twit__twit-user-data-label-second-data'></i>
                    </div>
                  )}
                </div>
              </div>
              <div>{el.text}</div>

              <div
                onClick={(e) => e.stopPropagation()}
                className='main-twit__twit-action-icons'
              >
                <div
                  onClick={() =>
                    getCurrentTweet(el.tweetId) && setActiveReplyes(false)
                  }
                  type='button'
                  className='main-twit__twit-icon main-twit__twit-icon-reply'
                >
                  <i className='bi bi-chat'></i>
                  <div className='main-twit__twit-icon-description main-twit__twit-icon-description-reply'>
                    {el.replyes.length > 0 ? el.replyes.length : null}
                  </div>
                </div>
                <div
                  type='button'
                  className='main-twit__twit-icon main-twit__twit-icon-repost'
                >
                  <i className='bi bi-reply-all'></i>
                  <div className='main-twit__twit-icon-description main-twit__twit-icon-description-repost'>
                    {el.reposts.length > 0 ? el.reposts.length : null}
                  </div>
                </div>
                <div
                  onClick={(e) =>
                    el.likes.includes(currentUser.login)
                      ? unlikeTweet(el.tweetId, currentUser.login)
                      : likeTweet(el.tweetId, currentUser.login)
                  }
                  type='button'
                  className={`main-twit__twit-icon main-twit__twit-icon-like ${
                    el.likes.includes(currentUser.login)
                      ? 'main-twit__twit-icon-like-active'
                      : null
                  }`}
                >
                  <i className='bi bi-heart'></i>
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
    getCurrentTweet: (id) => dispatch(getCurrentTweet(id)),
  };
};

export default connect(null, mapDispatchToProps)(MainTweetHelper);
