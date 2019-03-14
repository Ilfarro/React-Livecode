import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';

class Profile extends Component {
    render () {
    if (!this.props.is_login) {
        return <Redirect to = {{ pathname: '/signin' }} />;
    } else {
        return (
            <section>
                <h1 style={{ textalign: 'center' }}>Profile</h1>
                <img className="img-fluid rounded mb-3 mb-md-0 mx-auto d-block w-25" src={this.props.avatar} alt=""/>
                <h1><label>Username:</label> {this.props.username} </h1>
                <h1><label>Email:</label> {this.props.email} </h1>
            </section>
        );
    }
};
}

export default connect(
    'is_login,email,username, avatar',
    actions
)(withRouter(Profile));