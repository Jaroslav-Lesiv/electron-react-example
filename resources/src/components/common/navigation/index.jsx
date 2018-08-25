import React, { Component } from 'react'
import PropTypes from 'prop-types'
import logo from '../../../logo.svg'
import {
    NavigationWrapper,
    NavigationList,
    NavigationLogo,
    Logo
} from '../../../ui'
import { Home, LiveHelp } from '@material-ui/icons'
import NavigationItem from './item'
import { withRouter } from 'react-router'

@withRouter
export default class Navigation extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <NavigationWrapper>
          <NavigationLogo>
            <Logo />
          </NavigationLogo>

          <NavigationList>
            <NavigationItem to={`/`} icon={<Home />} />
            <NavigationItem to={`/api`} icon={<LiveHelp />} />

          </NavigationList>
        
      </NavigationWrapper>
    )
  }
}
