import React from 'react';

const Quote = ({ currentTweet }) => {
  return currentTweet.replyes.map((el, idx) => {
    return (
      <div
        key={idx}
        style={{ border: '1px solid grey', margin: 10 }}
        className='quote'
      >
        <div className='quote__container d-flex'>
          <div className='quote__user-image'>
            <img
              width='49px'
              src={`http://localhost:8080/static/${currentTweet.avatar}`}
              alt='avatar'
            />
          </div>
          <div className='quote__user-data'>
            <div className='d-flex'>
              <div className='quote__user-data-name'>{el.name}</div>
              <div className='quote__user-data-other'>
                <span>{el.login}</span>
                <span>....</span>
                <span>time</span>
              </div>
            </div>
            <div className='quote__text'>{el.text}</div>
          </div>
        </div>
      </div>
    );
  });
};

export default Quote;
