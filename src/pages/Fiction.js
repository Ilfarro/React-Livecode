import React, { Component } from 'react';
// import axios from 'axios';
import { Redirect, withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';
import IsiFiction from '../components/IsiFiction';

class Romance extends Component {

    componentDidMount() {
        this.props.fictionMovie();
    }
    
    render() {
        if (this.props.is_login === false) {
            return <Redirect to = {{ pathname: '/signin' }}/>
        } else {
            return (
                <div className="container">
                    {this.props.listMovies.map((item, key) => {
                        return <IsiFiction key={key} title={item.Title} year={item.Year} synopsis={item.Synopsis} poster={item.Poster}/>
                    })}
                </div>
            )
        }
    }
}

export default connect(
    'is_login,listMovies',
    actions
)(withRouter(Romance));