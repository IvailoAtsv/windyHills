import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle, currentPage }) => {

  const handleClickScroll = () => {
    const element = document.getElementById('footer')
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    } else {
      console.log('ne brat ne stava');
    }
  }

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        {
          currentPage === 'about'
            ? <SidebarLink to='/'>Начало</SidebarLink>
            : <SidebarLink to='/about-us'>За Нас</SidebarLink>

        }
        {
          currentPage === 'gallery'
            ? <SidebarLink to='/'>Начало</SidebarLink>
            : <SidebarLink to='/gallery'>Галерия</SidebarLink>

        }
        <SidebarLink to='#' onClick={handleClickScroll}>Контакти</SidebarLink>
        <SidebarLink to='/menu'>Меню</SidebarLink>
        <SidebarLink to='/drinks'>Напитки</SidebarLink>
      </SidebarMenu>

      <SideBtnWrap>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
