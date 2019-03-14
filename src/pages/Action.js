import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';
import IsiAction from '../components/IsiAction';

class Action extends Component {

    componentDidMount() {
        this.props.actionMovie();
    }

    render() {
        if (this.props.is_login === false) {
            return <Redirect to = {{ pathname: '/signin' }}/>
        } else {
            return (
                <div className="container">
                    {this.props.listMovies.map((item, key) => {
                        return <IsiAction key={key} title={item.Title} year={item.Year} synopsis={item.Synopsis} poster={item.Poster}/>
                    })}
                </div>
            )
        }
    }
}

export default connect(
    'is_login,listMovies',
    actions
)(withRouter(Action));