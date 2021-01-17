import React from 'react';
import { connect } from 'react-redux';
import * as action from '../../redux/actions/twitterAction';
import './ProfileModal.scss';

const ProfileModal = ({ currentUser, getAvatar, active, setActive }) => {
  const { id, avatar } = currentUser;

  return (
    <form
      className='profile-modal'
      hidden={active}
      onClick={() => setActive(true)}
    >
      <div
        className='profile-modal__container'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='profile-modal__header d-flex'>
          <div className='profile-modal__back-icon'>
            <i onClick={() => setActive(true)} className='bi bi-x'></i>
          </div>
          <div className='profile-modal-header-content d-flex justify-content-between'>
            <div className='profile-modal__header-label'>
              Редактирование профиля
            </div>
            <div className='profile-modal__edit-button'>
              <button type='button' className='btn btn-primary'>
                Сохранить
              </button>
            </div>
          </div>
        </div>

        <div className='d-flex align-items-center'>
          <div className='profile-modal__change-avatar-form d-flex align-items-center'>
            <div className='profile-modal__avatar-change-input'>
              <input
                type='file'
                id='upload'
                hidden
                onChange={(e) => getAvatar(id, e.target.files[0].name)}
              />
              <label htmlFor='upload'>
                <img
                  alt='user-logo'
                  src={`http://localhost:8080/static/${avatar}`}
                />
              </label>
            </div>
            <div style={{ marginLeft: 20, fontSize: 14, textAlign: 'center' }}>
              <div>Нажмите на аватарку,</div>
              <div>чтобы сменить фото.</div>
            </div>
          </div>
        </div>
        <div className='profile-modal__form-content'>
          <div className='profile-modal__add-data'>
            <label>Имя</label>
            <input
              className='profile-modal__input'
              placeholder='Имя'
              autoComplete='off'
            />
          </div>
          <div className='profile-modal__add-data'>
            <label>О себе</label>
            <input
              style={{ height: 108, paddingBottom: 10 }}
              className='profile-modal__input-add-data'
              placeholder='О себе'
              autoComplete='off'
            />
          </div>
          <div className='profile-modal__add-data'>
            <label>Город</label>
            <input
              className='profile-modal__input'
              placeholder='Город'
              autoComplete='off'
            />
          </div>
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAvatar: (id, avatar) => dispatch(action.getAvatar(id, avatar)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileModal);
