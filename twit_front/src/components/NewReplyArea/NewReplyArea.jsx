import React, { useState } from 'react';
import { connect } from 'react-redux';
import { newReply } from '../../redux/actions/twitterAction';
import { tweetAgoTime } from '../../utils/tweetAgoTime';
import './NewReplyArea.scss';

const NewReplyArea = ({
  currentUser,
  currentTweet,
  active,
  setActive,
  newReply,
}) => {
  const [text, setText] = useState();

  const onHandlerSubmit = (e) => {
    e.preventDefault();
    const newQuote = {
      text,
      name: currentUser.name,
      login: currentUser.login,
      avatar: currentUser.avatar,
      likes: [],
      reposts: [],
      replyes: [],
      tweetId: Date.now(),
      tweetIdOwner: currentTweet.tweetId,
      createDate: Date.now(),
    };
    setActive(true);
    newReply(newQuote);
    setText('');
  };

  return (
    <>
      {currentTweet && (
        <form
          onSubmit={(e) => onHandlerSubmit(e)}
          hidden={active}
          onClick={(e) => setActive(true) && e.stopPropagation()}
          className='new-reply'
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className='new-reply__content'
          >
            <div className='new-reply__header d-flex align-items-center'>
              <div
                onClick={() => setActive(true)}
                className='new-reply__header-icon d-flex justify-content-center align-items-center'
              >
                <i className='bi bi-x'></i>
              </div>
            </div>
            <div className='new-reply__quote-content'>
              <div className='d-flex'>
                <div className='new-reply__quote-content-avatar'>
                  <img
                    src={`http://localhost:8080/static/${currentTweet.avatar}`}
                    alt='tweet-logo'
                  />
                  <div
                    style={{
                      width: 2,
                      height: '60%',
                      borderRight: '2px solid grey',
                      marginLeft: 24,
                    }}
                  ></div>
                </div>

                <div className='new-reply__quote-container'>
                  <div className='new-reply__quote-user-data d-flex'>
                    <div className='new-reply__quote-user-data-name'>
                      {currentTweet.name}
                    </div>
                    <div className='new-reply__quote-user-data-other'>
                      <span>@{currentTweet.login}</span>
                      <span>
                        <i className='bi bi-dot replyes__dot'></i>
                      </span>
                      <span>
                        {tweetAgoTime(new Date(), currentTweet.createDate)}
                      </span>
                    </div>
                  </div>
                  <div className='new-reply__quote-text'>
                    {currentTweet.text}
                  </div>

                  <div className='new-reply__quote-from'>
                    <span>В ответ</span> @{currentTweet.login}
                  </div>
                </div>
              </div>
            </div>

            <div className='new-reply__quote d-flex'>
              <div className='new-reply__quote-avatar'>
                <img
                  src={`http://localhost:8080/static/${currentUser.avatar}`}
                  alt='tweet-logo'
                />
              </div>
              <div className='new-reply__quote-area'>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  required={true}
                  placeholder='Твитнуть в ответ'
                ></textarea>
              </div>
            </div>
            <div className='new-reply__submit'>
              <button type='submit' className='btn btn-primary'>
                Ответить
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

const mapStateToProps = ({ currentUser, currentTweet }) => {
  return {
    currentUser,
    currentTweet,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    newReply: (reply) => dispatch(newReply(reply)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewReplyArea);
