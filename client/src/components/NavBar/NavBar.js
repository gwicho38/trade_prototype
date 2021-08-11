import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link, Switch, Route } from 'react-router-dom';
// or less ideally
import { Navbar, Nav, Container } from 'react-bootstrap';
import styles from './NavBar.module.css';

// NavBar React
const NavBar = () => (
  <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
