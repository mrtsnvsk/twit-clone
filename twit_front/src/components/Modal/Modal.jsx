import React from 'react';
import NewTwitArea from '../NewTwitArea';
import './Modal.scss';

const Modal = ({ active, setActive }) => {
  return (
    <div
      hidden={active}
      className='modal--window'
      onClick={() => setActive(true)}
    >
      <div
        className='modal--window__content'
        onClick={(e) => e.stopPropagation()}
      >
        <NewTwitArea isActive={active} />
      </div>
    </div>
  );
};

export default Modal;
