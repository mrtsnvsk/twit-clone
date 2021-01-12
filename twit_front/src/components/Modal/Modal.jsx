import React, { useState } from 'react';
import './Modal.css';

const Modal = () => {
  return (
    <div
    // onClick={() => setActive(false)}
    // className={active ? 'modal--window active' : 'modal--window'}
    >
      <div
        className='modal--window__content'
        onClick={(e) => e.stopPropagation()}
      ></div>
    </div>
  );
};

export default Modal;

// props
// { active, setActive }
// import Modal from '../Modal';
// const [modalActive, setModalActive] = useState(true);
// <Modal active={modalActive} setActive={setModalActive} />
