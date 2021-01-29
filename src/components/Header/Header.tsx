import React from 'react';
import StarIcon from 'static/icons/StarIcon';
import './styles.scss'

const Header = () => {
  return (
    <div className="header">
      <div className="header_logo">
        Find Pet
      </div>
      <StarIcon height="30px" width="30px" />
    </div>
  )
}

export default Header;