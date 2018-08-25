import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import logo from '../../logo.svg';

export class ApiPage extends Component {

  render() {
    return (
      <div className="App">
      api page
      </div>
    );
  }
}

const mapStateToProps = ({ app }) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApiPage);
