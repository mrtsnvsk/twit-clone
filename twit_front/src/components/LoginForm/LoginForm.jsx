import React, { useState } from 'react';
import RegistrationForm from '../RegistrationForm';
import { connect } from 'react-redux';
import * as action from '../../redux/actions/authAction';
import './LoginForm.scss';

const LoginForm = ({ loginUser }) => {
  const [modalActive, setModalActive] = useState(true);
  const [loginData, setLoginData] = useState({ login: '', password: '' });

  const onHandlerChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const onHandlerLogin = (e) => {
    e.preventDefault();
    loginUser(loginData);
  };

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
        <form onSubmit={onHandlerLogin} className='login-form__authorization'>
          <div className='login-form__add-data'>
            <label>Адрес электронной почты</label>
            <input
              onChange={onHandlerChange}
              name='login'
              className='login-form__-input'
              placeholder='Адрес электронной почты или email'
            />
          </div>
          <div className='login-form__add-data'>
            <label>Пароль</label>
            <input
              onChange={onHandlerChange}
              name='password'
              className='login-form__-input'
              placeholder='Пароль'
            />
          </div>
          <div className='login-form__add-data'>
            <button type='submit' className='btn btn-primary'>
              Войти
            </button>
          </div>
        </form>
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

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (data) => dispatch(action.loginUser(data)),
  };
};

export default connect(null, mapDispatchToProps)(LoginForm);
