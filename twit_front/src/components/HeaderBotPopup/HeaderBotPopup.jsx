import React from 'react';
import { connect } from 'react-redux';
import * as action from '../../redux/actions/authAction';
import './HeaderBotPopup.scss';

const HeaderBotPopup = ({ logoutUser, login, name }) => {
  return (
    <div className='header-bot-popup'>
      <div className='header-bot-popup__container'>
        <div className='header-bot-popup-user-avatar'>
          <img
            src='https://pbs.twimg.com/profile_images/1162986608515256322/EB8R-04B_400x400.jpg'
            alt='user logo'
          />
        </div>
        <div className='header-bot-popup-username'>
          <div className='header-bot-popup-username-name'>{login}</div>
          <div className='header-bot-popup-username-login'>{name}</div>
        </div>
        <div className='header-bot-popup-more'>
          <i className='bi bi-check2'></i>
        </div>
      </div>
      <div className='header-bot-popup__bottom-line'></div>
      <div onClick={logoutUser} className='header-bot-popup__exit-label'>
        Выход {login}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(action.logoutUser()),
  };
};

export default connect(null, mapDispatchToProps)(HeaderBotPopup);