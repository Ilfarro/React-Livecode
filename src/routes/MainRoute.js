import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import Loadable from 'react-loadable';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import Profile from '../pages/Profile';
import Romance from '../pages/Romance';
import Action from '../pages/Action';
import Fiction from '../pages/Fiction';
import Comedy from '../pages/Comedy';

// const Profile = Loadable({
//     loader: () => import('../pages/Profile'),
//     loading: () => <div>LOAAADDINGG BOSSS</div>
// })

class MainRoute extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component = {Home} />
                <Route exact path='/signin' component = {SignIn} />
                <Route exact path='/profile' component = {Profile} />
                <Route exact path='/romance' component = {Romance} />
                <Route exact path='/action' component = {Action} />
                <Route exact path='/fiction' component = {Fiction} />
                <Route exact path='/comedy' component = {Comedy} />
            </Switch>
        )
    }
}

export default MainRoute;