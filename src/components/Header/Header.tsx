import React from 'react';
import StarIcon from 'static/icons/StarIcon';
import CustomButton from 'components/CustomButton';
import Avatar from '@material-ui/core/Avatar';
import Logo from 'static/img/logo.png';
import './styles.scss'

const Header = () => {
  return (
    <div className="header">
      <div className="header_logo">
        <img src={Logo} alt="Find Pet" />
      </div>
      <div className="header_menu-wrapper">
        <CustomButton classes="header_favorites-btn">
          <StarIcon height="30px" width="30px" />
        </CustomButton>
        <CustomButton classes="header_add-btn">ADD AN ADD</CustomButton>
        <Avatar alt="Cindy Baker">AN</Avatar>
      </div>
    </div>
  )
}

export default Header;