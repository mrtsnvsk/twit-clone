import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import './Header.scss';

const Header = () => {
  const [modalActive, setModalActive] = useState(true);

  const onHandleKeyPress = (e) => {
    if (e.keyCode === 27) {
      setModalActive(true);
    }
  };
  return (
    <>
      <Modal active={modalActive} setActive={setModalActive} />
      <div className='header' onKeyDown={onHandleKeyPress} tabIndex='0'>
        <div className='header__sidebar'>
          <div className='header__sidebar-twitter-logo'>
            <Link to='/home'>
              <i className='bi bi-twitter header__twitter-icon'></i>
            </Link>
          </div>
          <div className='header__sidebar-menu-items'>
            <ul className='nav flex-column'>
              <li className='nav-item'>
                <Link className='nav-link' to='/home'>
                  <i className='bi bi-house'> Главная</i>
                </Link>
              </li>

              <li className='nav-item'>
                <Link className='nav-link' to='/notifications'>
                  <i className='bi bi-bell'> Уведомления</i>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/messages'>
                  <i className='bi bi-envelope'> Сообщения</i>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/profile'>
                  <i className='bi bi-person'> Профиль</i>
                </Link>
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
        <div className='header__user-profile'>
          <div className='header__user-profile-user-avatar'>
            <img
              src='https://pbs.twimg.com/profile_images/1162986608515256322/EB8R-04B_400x400.jpg'
              alt='user logo'
            />
          </div>
          <div className='header__user-profile-username'>
            <div className='header__user-profile-username-name'>Никита</div>
            <div className='header__user-profile-username-login'>@mrtsnvsk</div>
          </div>
          <div className='header__user-profile-more'>
            <i className='bi bi-three-dots'></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
