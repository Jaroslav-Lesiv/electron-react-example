import React, { Component } from "react";
import "./App.css";
import { RootRouter } from "./router";
import { Wrapper, Main } from "./ui";
import {connect} from 'react-redux'
import { withRouter } from "react-router";
import CssBaseline from '@material-ui/core/CssBaseline';
import Navigation from './components/common/navigation'

class App extends Component {
  render() {
    const { isLogin } = this.props;
    console.log(isLogin)
    return (
      <Wrapper>
        <CssBaseline />
        <Navigation />
        <Main>
          <RootRouter isLogin={isLogin} />
        </Main>
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  isLogin: user.isLogin
});

const mapDispatchToProps = {
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));