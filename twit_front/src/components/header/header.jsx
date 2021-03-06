import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Modal from '../Modal';
import HeaderBotPopup from '../HeaderBotPopup';
import { connect } from 'react-redux';
import './Header.scss';

const Header = ({ currentUser }) => {
  const { name, login } = currentUser;
  const [modalActive, setModalActive] = useState(true);
  const [popupActive, setPopupActive] = useState(true);

  const onHandleKeyPress = (e) => {
    if (e.keyCode === 27) {
      setModalActive(true);
    }
  };

  return (
    <div className='app__header'>
      <Modal active={modalActive} setActive={setModalActive} />
      <div
        className='header flex-column'
        onKeyDown={onHandleKeyPress}
        tabIndex='0'
      >
        <div className='header__sidebar'>
          <div className='header__sidebar-twitter-logo'>
            <Link to='/home'>
              <i className='bi bi-twitter header__twitter-icon'></i>
            </Link>
          </div>
          <div className='header__sidebar-menu-items'>
            <ul className='nav flex-column'>
              <li className='nav-item'>
                <div>
                  <NavLink
                    className='nav-link'
                    to='/home'
                    exact
                    activeClassName='nav-link-active'
                  >
                    <i className='bi bi-house'>{` `}</i>
                    Главная
                  </NavLink>
                </div>
              </li>

              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  to='/notifications'
                  exact
                  activeClassName='nav-link-active'
                >
                  <i className='bi bi-bell'>{` `}</i>
                  Уведомления
                </NavLink>
              </li>
              <li className='nav-item '>
                <NavLink
                  className='nav-link'
                  to='/messages'
                  exact
                  activeClassName='nav-link-active'
                >
                  <i className='bi bi-envelope'>{` `}</i>
                  Сообщения
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  to={`/profile/${currentUser.login}`}
                  exact
                  activeClassName='nav-link-active'
                >
                  <i className='bi bi-person'>{` `}</i>
                  Профиль
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className='header__btn-new-tweet'>
          <button
            onClick={() => setModalActive(false)}
            type='button'
            className='btn btn-primary'
          >
            Новый твит
          </button>
        </div>
        <div hidden={popupActive}>
          <HeaderBotPopup name={name} login={login} />
        </div>
        <div
          onClick={() => setPopupActive(!popupActive)}
          className='header__user-profile'
        >
          <div className='header__user-profile-user-avatar'>
            <img
              src={`http://localhost:8080/static/${currentUser.avatar}`}
              alt='user logo'
            />
          </div>
          <div className='header__user-profile-username'>
            <div className='header__user-profile-username-name'>{name}</div>
            <div className='header__user-profile-username-login'>{`@${login}`}</div>
          </div>
          <div className='header__user-profile-more'>
            <i className='bi bi-three-dots'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
  };
};

export default connect(mapStateToProps)(Header);
