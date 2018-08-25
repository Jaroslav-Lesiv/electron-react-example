import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import logo from '../../logo.svg';
import { NavLink as DefaultNavLink } from "react-router-dom";
import { withRouter } from 'react-router'

@withRouter
export class HomePage extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Electron React App</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save.
        </p>
        <p>created by Jaroslav Lesiv</p>
        <p>v 0.0.1</p>
        <DefaultNavLink to={`/api`}>ncdsklmvlkdmv</DefaultNavLink>
      </div>
    );
  }
}

const mapStateToProps = ({ app }) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
