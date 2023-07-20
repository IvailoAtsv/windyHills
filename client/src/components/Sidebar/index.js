import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
 


  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/menu'>Меню</SidebarLink>
        <SidebarLink to='/'>Контакти</SidebarLink>
        <SidebarLink to='/'>За Нас</SidebarLink>
      </SidebarMenu>

      <SideBtnWrap>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
