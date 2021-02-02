import React from 'react';
import { connect } from 'react-redux';
import * as action from '../../redux/actions/authAction';
import * as yup from 'yup';
import { Field, Form, ErrorMessage, Formik } from 'formik';
import './RegistrationForm.scss';

const RegistrationForm = ({ active, setActive, registerUser }) => {
  // const [regData, setRegData] = useState({
  //   name: '',
  //   login: '',
  //   email: '',
  //   password: '',
  // });

  // const onHandlerChange = (e) => {
  //   setRegData({ ...regData, [e.target.name]: e.target.value });
  // };

  // const onHandlerRegister = (e) => {
  //   const form = e.target;
  //   e.preventDefault();
  //   registerUser({ ...regData });
  //   form.reset();
  // };

  function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Ввведите email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Некорректный email';
    }
    return error;
  }

  return (
    <Formik
      initialValues={{
        name: '',
        login: '',
        email: '',
        password: '',
      }}
      validationSchema={yup.object().shape({
        name: yup
          .string()
          .min(2, 'Некорректные данные')
          .max(20, 'Имя не может быть длинее 20 символов')
          .required('Введите имя'),
        login: yup
          .string()
          .min(2, 'Некорректные данные')
          .max(20, 'Логин не должен быть длиннее 15 символов')
          .required('Введите логин'),
        email: yup
          .string()
          .email('Некорректный email')
          .required('Введите email'),
        password: yup
          .string()
          .min(6, 'Пароль не может быть меньше 6 символов')
          .required('Введите пароль'),
      })}
      onSubmit={(values) => registerUser(values)}
    >
      <Form
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
                <label htmlFor='name'>Имя</label>
                <Field
                  name='name'
                  className='login-form__-input'
                  placeholder='Имя'
                  autoComplete='off'
                />
                <p className='login-form_add-data-validate-error'>
                  <ErrorMessage name='name' />
                </p>
              </div>
              <div className='login-form__add-data'>
                <label htmlFor='login'>Логин</label>
                <Field
                  name='login'
                  className='login-form__-input'
                  placeholder='Логин'
                  autoComplete='off'
                />
                <p className='login-form_add-data-validate-error'>
                  <ErrorMessage name='login' />
                </p>
              </div>
              <div className='login-form__add-data'>
                <label htmlFor='email'>Адрес электронной почты</label>
                <Field
                  name='email'
                  className='login-form__-input'
                  placeholder='Адрес электронной почты'
                  validate={validateEmail}
                />
                <p className='login-form_add-data-validate-error'>
                  <ErrorMessage name='email' />
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
                  Регистрация
                </button>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (data) => dispatch(action.registerUser(data)),
  };
};

export default connect(null, mapDispatchToProps)(RegistrationForm);
