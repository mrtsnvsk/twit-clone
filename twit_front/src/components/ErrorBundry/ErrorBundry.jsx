import React from 'react';

const ErrorBundry = ({ error }) => {
  return (
    <div
      style={{ position: 'absolute' }}
      active={error.toString()}
      className='alert alert-danger'
      role='alert'
    >
      {error}
    </div>
  );
};

export default ErrorBundry;
