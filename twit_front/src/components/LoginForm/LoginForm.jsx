import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as action from '../../redux/actions/authAction';
import * as yup from 'yup';
import { Field, Form, ErrorMessage, Formik } from 'formik';
import RegistrationForm from '../RegistrationForm';
import ErrorBundry from '../ErrorBundry';
import './LoginForm.scss';

const LoginForm = ({ loginUser, loginError, onLoginError }) => {
  const [modalActive, setModalActive] = useState(true);

  const onHandleKeyPress = (e) => {
    if (e.keyCode === 27) {
      return setModalActive(true);
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
        {loginError && setTimeout(() => onLoginError(null), 3000) && (
          <ErrorBundry error={loginError} />
        )}
        <Formik
          initialValues={{
            login: '',
            password: '',
          }}
          validationSchema={yup.object().shape({
            login: yup
              .string()
              .min(2, 'Некорректные данные')
              .required('Введите логин или email'),
            password: yup
              .string()
              .min(6, 'Пароль не может быть меньше 6 символов')
              .required('Введите пароль'),
          })}
          onSubmit={(values) => loginUser(values)}
        >
          <Form className='login-form__authorization'>
            <div className='login-form__add-data'>
              <label htmlFor='login'>Адрес электронной почты</label>
              <Field
                name='login'
                type='text'
                className='login-form__-input'
                placeholder='Логин или email'
              />
              <p className='login-form_add-data-validate-error'>
                <ErrorMessage name='login' />
              </p>
            </div>
            <div className='login-form__add-data'>
              <label htmlFor='password'>Пароль</label>
              <Field
                name='password'
                type='password'
                className='login-form__-input'
                placeholder='Пароль'
                autoComplete='off'
              />
              <p className='login-form_add-data-validate-error'>
                <ErrorMessage name='password' />
              </p>
            </div>
            <div className='login-form__add-data'>
              <button type='submit' className='btn btn-primary'>
                Войти
              </button>
            </div>
          </Form>
        </Formik>
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

const mapStateToProps = (state) => {
  return {
    loginError: state.loginError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (data) => dispatch(action.loginUser(data)),
    onLoginError: (error) => dispatch(action.onLoginError(error)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
