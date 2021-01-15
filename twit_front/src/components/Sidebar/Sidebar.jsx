import React from 'react';
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className='app__sidebar'>
      <div className='sidebar'>
        <div className='sidebar__content'>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className='sidebar__search'>
              <div className='sidebar__search-logo'>
                <i className='bi bi-search'></i>
              </div>
              <div className='sidebar__search-input'>
                <input placeholder='Поиск в твиттере' />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
