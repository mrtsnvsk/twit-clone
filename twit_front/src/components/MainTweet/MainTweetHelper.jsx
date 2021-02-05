import React from 'react';
import './MainTweetHelper.scss';
import moment from 'moment';

const MainTweetHelper = ({
  data,
  currentUser,
  deleteTweet,
  likeTweet,
  unlikeTweet,
}) => {
  const tweetAgoTime = (start, end) => {
    let a = moment(end);
    let b = moment(start);
    let date = b.diff(a, 'minutes');
    if (date >= 60 && date >= 1440) {
      return `${Math.floor(date / 1440)}d ago`;
    } else if (date >= 60) {
      return `${Math.floor(date / 60)}h ago`;
    } else if (date < 1) {
      return 'now';
    } else {
      return `${date}m ago`;
    }
  };

  return data.map((el, idx) => {
    return (
      <div key={idx} className='main-twit__twit'>
        <div className='main-twit__twit-avatar'>
          <img
            type='button'
            src={`http://localhost:8080/static/${el.avatar}`}
            alt='user logo'
          />
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
              {window.location.href !== 'http://localhost:3000/home' && (
                <div
                  type='button'
                  className='main-twit__twit-user-data-label-more'
                  active={el.userId.includes(currentUser.id) ? 'true' : 'false'}
                  onClick={() => deleteTweet(currentUser.id, el.tweetId)}
                >
                  <i className='bi bi-trash main-twit__twit-user-data-label-second-data'></i>
                </div>
              )}
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
                {el.replyes}
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
              onClick={(e) =>
                el.likes.includes(currentUser.login)
                  ? unlikeTweet(el.userId, el.tweetId, currentUser.login) &&
                    e.stopPropagation()
                  : likeTweet(el.userId, el.tweetId, currentUser.login) &&
                    e.stopPropagation()
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
  });
};

export default MainTweetHelper;
