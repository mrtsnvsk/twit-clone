import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as action from '../../redux/actions/authAction';
import './RegistrationForm.scss';

const RegistrationForm = ({ active, setActive, registerUser }) => {
  const [regData, setRegData] = useState({
    name: '',
    login: '',
    email: '',
    password: '',
  });

  const onHandlerChange = (e) => {
    setRegData({ ...regData, [e.target.name]: e.target.value });
  };

  const onHandlerRegister = (e) => {
    e.preventDefault();
    registerUser({ ...regData });
  };

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
              <input
                onChange={onHandlerChange}
                name='name'
                className='login-form__-input'
                placeholder='Имя'
                required={true}
                autoComplete='off'
              />
            </div>
            <div className='login-form__add-data'>
              <label>Логин</label>
              <input
                onChange={onHandlerChange}
                name='login'
                className='login-form__-input'
                placeholder='Логин'
                required={true}
                autoComplete='off'
              />
            </div>
            <div className='login-form__add-data'>
              <label>Адрес электронной почты</label>
              <input
                onChange={onHandlerChange}
                name='email'
                className='login-form__-input'
                placeholder='Адрес электронной почты'
                required={true}
                autoComplete='off'
              />
            </div>
            <div className='login-form__add-data'>
              <label>Пароль</label>
              <input
                onChange={onHandlerChange}
                name='password'
                type='password'
                className='login-form__-input'
                placeholder='Пароль'
                required={true}
                autoComplete='off'
              />
            </div>
            <div className='login-form__add-data'>
              <button
                type='button'
                onClick={onHandlerRegister}
                className='btn btn-primary'
              >
                Регистрация
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (data) => dispatch(action.registerUser(data)),
  };
};

export default connect(null, mapDispatchToProps)(RegistrationForm);
