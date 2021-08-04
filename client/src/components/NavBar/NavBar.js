import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
  Row, Col,
  Card, CardBody,
  CardTitle, Nav, NavItem, NavLink
} from 'reactstrap';
import { Link, Switch, Route } from 'react-router-dom';
import styles from './NavBar.module.css';

// NavBar React
const NavBar = () => (
  <Fragment>
    <ReactCSSTransitionGroup
      component="div"
      transitionName="TabsAnimation"
      transitionAppear={true}
      transitionAppearTimeout={0}
      transitionEntclearer={false}
      transitionLeave={false}>

      <Row>
        <Col sm={12}>
          <Card className="main-card mb-3">
            <CardBody>
              <CardTitle>Horizontal Menu</CardTitle>
              <Nav>
                {/* TODO: create switch statement for home */}
                <NavLink active href="/">Link</NavLink>
              </Nav>
            </CardBody>
          </Card>
        </Col>
      </Row>

    </ReactCSSTransitionGroup>
  </Fragment >
);

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
