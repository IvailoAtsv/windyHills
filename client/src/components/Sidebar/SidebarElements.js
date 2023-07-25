import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 25%;
  height: 100%;
  background: white;
  display: grid;
  align-items: center;
  top: 0;
  transition: 0.35s ease-out;
  right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};

  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #000;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarMenu = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:2.5rem;
  text-align: center;
 
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  text-decoration: none;
  list-style: none;
  border-radius: 7px;
  font-weight:bold;
  font-family: 'Kanit, sans-serif';
  background-color: white;
  transition: 0.2s ease-in-out;
  color: #000;
  cursor: pointer;

  &:hover {
    font-size: 2.1rem;
    transition: 0.3s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(Link)`
  background: white;
  color:black;
  font-size: 1.3rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    font-size: 1.35rem;
    transition: 0.4s ease-in-out;
    color: #010606;
  }
`;
