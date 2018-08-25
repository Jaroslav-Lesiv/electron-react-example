import React, { Component } from "react";
import { NavigationItemUI, NavigationLogo, NavigationLink } from "../../../ui";
import { withRouter } from 'react-router'

@withRouter
export default class NavigationItem extends Component {
  render() {
    const { to, icon } = this.props;
    return (
      <NavigationItemUI>
        <NavigationLink to={to} exact>
          {icon}
        </NavigationLink>
      </NavigationItemUI>
    );
  }
}
