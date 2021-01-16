import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as action from '../../redux/actions/authAction';
import './Profile.scss';

const Profile = ({ currentUser, getAvatar }) => {
  const [newAvatar, setNewAvatar] = useState();
  const { name, id, avatar } = currentUser;

  const onHandlerUserAvatar = (e) => {
    e.preventDefault();
    getAvatar(id, newAvatar);
  };

  return (
    <div className='app__main'>
      <form
        encType='multipart/form-data'
        name='avatar'
        onSubmit={onHandlerUserAvatar}
        className='profile'
      >
        <div className='profile__header d-flex'>
          <div className='profile__back-icon'>
            <i className='bi bi-arrow-left blue'></i>
          </div>
          <div className='profile__header-label'>
            <div>{name}</div>
            <div className='profile__header-label-count'>{`705 tweets`}</div>
          </div>
        </div>

        <div className='d-flex align-items-center justify-content-center'>
          <div>
            <img
              width={200}
              alt='user-logo'
              src={`http://localhost:8080/static/${avatar}`}
            />
          </div>
          <div>
            <input
              multiple
              onChange={(e) => setNewAvatar(e.target.files[0].name)}
              type='file'
            />
          </div>
          <div>
            <button type='submit' className='btn btn-primary'>
              add file
            </button>
          </div>
        </div>
      </form>
    </div>
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

    // getAvatar: (data) => dispatch(action.getAvatar(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
