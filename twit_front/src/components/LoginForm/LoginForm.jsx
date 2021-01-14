import React, { useState } from 'react';
import RegistrationForm from '../RegistrationForm';
import './LoginForm.scss';

const LoginForm = () => {
  const [modalActive, setModalActive] = useState(true);

  const onHandleKeyPress = (e) => {
    if (e.keyCode === 27) {
      setModalActive(true);
    }
  };

  return (
    <div className='login-form' onKeyDown={onHandleKeyPress} tabIndex='0'>
      <RegistrationForm active={modalActive} setActive={setModalActive} />
      <div className='login-form__content'>
        <div className='login-form__twitter-logo'>
          <i className='bi bi-twitter login-form__twitter-logo-image'></i>
        </div>
        <div className='login-form__auth-label'>Войти в твиттер</div>
        <div className='login-form__authorization'>
          <div className='login-form__add-data'>
            <label>Адрес электронной почты</label>
            <input
              className='login-form__-input'
              placeholder='Адрес электронной почты'
            />
          </div>
          <div className='login-form__add-data'>
            <label>Пароль</label>
            <input className='login-form__-input' placeholder='Пароль' />
          </div>
          <div className='login-form__add-data'>
            <button type='submit' className='btn btn-primary'>
              Войти
            </button>
          </div>
        </div>
        <div className='login-form__help-labels'>
          <label type='button'>Забыли пароль?</label>
          <span>
            <i className='bi bi-dot'></i>
          </span>
          <label type='button' onClick={() => setModalActive(false)}>
            Зарегистрироваться в твиттере
          </label>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
