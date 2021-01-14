import React from 'react';
import './RegistrationForm.scss';

const RegistrationForm = ({ active, setActive }) => {
  return (
    <div
      className='registration-form'
      hidden={active}
      onClick={() => setActive(true)}
    >
      <div
        className='registration-form__container'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='registration-form__close-icon'>
          <i className='bi bi-x' onClick={() => setActive(true)}></i>
        </div>
        <div className='login-form__content'>
          <div className='login-form__twitter-logo'>
            <i className='bi bi-twitter login-form__twitter-logo-image'></i>
          </div>
          <div className='login-form__auth-label'>
            Зарегистрироваться в твиттере
          </div>
          <div className='login-form__authorization'>
            <div className='login-form__add-data'>
              <label>Имя</label>
              <input className='login-form__-input' placeholder='Имя' />
            </div>
            <div className='login-form__add-data'>
              <label>Логин</label>
              <input className='login-form__-input' placeholder='Логин' />
            </div>
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
                Регистрация
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
