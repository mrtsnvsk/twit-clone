import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as action from '../../redux/actions/twitterAction';
import './NewTwitArea.scss';

const NewTwitArea = ({ currentUser, addNewTweet, isActive }) => {
  const [newTweet, setNewTweet] = useState();

  const sentData = (e) => {
    e.preventDefault();
    addNewTweet({
      text: newTweet,
      likes: [],
      reposts: [],
      replyes: [],
      createDate: new Date(),
      login: currentUser.login,
      name: currentUser.name,
      avatar: currentUser.avatar,
      userId: currentUser.id,
      tweetId: Date.now(),
    });
    e.target.reset();
  };

  return (
    <form onSubmit={sentData}>
      <div className='new-twit-area__line'></div>
      <div className='new-twit-area'>
        <div className='new-twit-area__user-avatar'>
          <img
            src={`http://localhost:8080/static/${currentUser.avatar}`}
            alt='user logo'
          />
        </div>
        <div className='form-floating new-twit-area__new-twit-input'>
          <textarea
            onChange={(e) => setNewTweet(e.target.value)}
            required={true}
            placeholder='Что нового?'
            className='form-control-label new-twit-area__new-twit-label'
          ></textarea>
          <div className='new-twit-area__new-twit-input-line'></div>

          <div className='new-twit-area__new-twit-submit'>
            <button type='submit' className='btn btn-primary'>
              Твит
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewTweet: (tweet) => dispatch(action.addNewTweet(tweet)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTwitArea);
