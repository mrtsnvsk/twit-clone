import React, { useState } from 'react';
import './NewTwitArea.scss';
import axios from 'axios';

const NewTwitArea = () => {
  const [newTwit, setNewTwit] = useState();

  const sentData = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/newTwit', { twit: newTwit });
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
              onChange={(e) => setNewTwit(e.target.value)}
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

export default NewTwitArea;
