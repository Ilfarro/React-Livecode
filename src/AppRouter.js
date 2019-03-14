import React, { Component } from 'react';
import MainRoute from './routes/MainRoute';
import { withRouter } from 'react-router-dom';
// App Styles
import './styles/App.css';
// Custom Components
import Navigation from './components/Navigation';

class AppRouter extends Component {
    postSignOut() {
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <Navigation postSignOut = {this.postSignOut} />
                <MainRoute />
            </div>
        )
    }
}

export default withRouter(AppRouter);