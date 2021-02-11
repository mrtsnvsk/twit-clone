import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/authAction';
import './HeaderBotPopup.scss';

const HeaderBotPopup = ({ logoutUser, login, name, currentUser }) => {
  return (
    <div className='header-bot-popup'>
      <div className='header-bot-popup__container'>
        <div className='header-bot-popup-user-avatar'>
          <img
            src={`http://localhost:8080/static/${currentUser.avatar}`}
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
        Выход из @{login}
      </div>
    </div>
  );
};

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBotPopup);
