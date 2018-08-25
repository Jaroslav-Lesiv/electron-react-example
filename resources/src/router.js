import React, { PureComponent } from 'react';
import { withRouter } from 'react-router'
import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/auth/login/index'
import HomePage from './pages/home'
import ApiPage from './pages/api'


@withRouter
class AuthRouter extends PureComponent {

    render() {
        return (
            <Switch>
                <Route path='/' exact component={LoginPage} />
            </Switch>
        )
    }
}

@withRouter
class UserRouter extends PureComponent {

    render() {
        return (
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/api' component={ApiPage} />
            </Switch>
        )
    }
}

const RootRouter = ({ isLogin }) => isLogin ? <UserRouter /> : <AuthRouter />
export {
    RootRouter
}
