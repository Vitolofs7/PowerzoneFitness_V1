import React from 'react';

const SideMenu = ({ onClick }) => {
  return (
    <div className="header-nav-responsive" onClick={onClick}>
      <i className="fa-solid fa-bars"></i>
    </div>
  );
};

export default SideMenu;
