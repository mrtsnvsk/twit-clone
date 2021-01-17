import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as action from '../../redux/actions/twitterAction';
import './NewTwitArea.scss';

const NewTwitArea = ({ currentUser, addNewTweet }) => {
  const [newTweet, setNewTweet] = useState();

  const sentData = (e) => {
    e.preventDefault();
    addNewTweet(currentUser.id, { text: newTweet });
    e.target.reset();
  };

  return (
    <form onSubmit={sentData}>
      <div>
        <div className='new-twit-area__line'></div>
        <div className='new-twit-area'>
          <div className='new-twit-area__user-avatar'>
            <img
              src='https://pbs.twimg.com/profile_images/1162986608515256322/EB8R-04B_400x400.jpg'
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
    addNewTweet: (id, tweet) => dispatch(action.addNewTweet(id, tweet)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTwitArea);
