import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as action from '../../redux/actions/twitterAction';
import { connect } from 'react-redux';
import NewReplyArea from '../NewReplyArea';
import Quote from './Quote';
import './CurrentTweet.scss';

const CurrentTweet = ({ getCurrentTweet, currentTweet }) => {
  const [activeReplyes, setActiveReplyes] = useState(true);
  let { id } = useParams();
  useEffect(() => {
    getCurrentTweet(id);
  }, [id, getCurrentTweet]);

  return (
    <>
      {currentTweet && (
        <div className='app__main'>
          <NewReplyArea active={activeReplyes} setActive={setActiveReplyes} />
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
                  <span>3:23 PM</span>
                  <span>
                    <i className='bi bi-dot replyes__dot'></i>
                  </span>
                  <span>Feb 3, 2021</span>
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
                  <div
                    onClick={() => setActiveReplyes(false)}
                    className='replyes__tweeet-reply'
                  >
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

            <Quote />
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    currentTweet: state.currentTweet,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentTweet: (id) => dispatch(action.getCurrentTweet(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentTweet);
