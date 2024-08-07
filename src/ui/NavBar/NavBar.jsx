import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';
import { Logo } from '../Logo/Logo';
import { CartIcon } from '../../components';
import { Button } from '../../ui';




export const  NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate()
  const closeNavbar = () => setExpanded(false);

  return (
    <Navbar expand="xl" className="navBar dark fixed-top" data-bs-theme="light" expanded={expanded}>
      <Container className='mobileContainerNav'>
        <Logo className='logo'/>
        <div className="mobileContainerNavRight">
          <CartIcon className="mobile"/>
          <Navbar.Toggle  aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navLinks" onSelect={closeNavbar}>
            <NavLink to="/" className={({ isActive }) => `primary ${isActive ? 'isActive' : "desactive"}`} onClick={closeNavbar}>Inicio</NavLink>
            <NavLink to='/categoria/mates' className={({ isActive }) => `primary ${isActive ? 'isActive' : "desactive"}`} >Mates</NavLink>
            <NavLink to="/categoria/termos" className={({ isActive }) => `primary ${isActive ? 'isActive' : "desactive"}`} onClick={closeNavbar}>Termos</NavLink>
            <NavLink to="/categoria/bombillas" className={({ isActive }) => `primary ${isActive ? 'isActive' : "desactive"}`} onClick={closeNavbar}>Bombillas</NavLink>
            <NavLink to="/categoria/materas" className={({ isActive }) => `primary ${isActive ? 'isActive' : "desactive"}`} onClick={closeNavbar}>Materas</NavLink>
            <NavLink to="/categoria/yerbas" className={({ isActive }) => `primary ${isActive ? 'isActive' : "desactive"}`} onClick={closeNavbar}>Yerbas</NavLink>
            <NavLink to="/categoria/vasos" className={({ isActive }) => `primary ${isActive ? 'isActive' : "desactive"}`} onClick={closeNavbar}>Vasos</NavLink>
            <NavLink to="/categoria/accesorios" className={({ isActive }) => `primary ${isActive ? 'isActive' : "desactive"}`} onClick={closeNavbar}>Accesorios</NavLink>
          </Nav>
        </Navbar.Collapse>
        <div className="desktopContainerNavRight">
          <CartIcon className="desktop" />
        </div>
      </Container>
    </Navbar>
  );
}



