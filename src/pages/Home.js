import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';
import '../styles/App.css';

class Home extends Component {

    render() {
        if (this.props.is_login === false) {
            return <Redirect to = {{ pathname: '/signin' }} />;
        } else {
            return (
                <div className="container">
                        <div className="card text-center">
                            <div className="card-body">
                                <h2 className="card-title">Romance</h2>
                                <img className="rounded" src='https://m.media-amazon.com/images/M/MV5BOWJhMjJjMDItODQxYS00ODIyLWJhYzAtNTliMDhkZjM0YTA1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg' alt=""/>
                                <br/><br/>
                                <Link to='/romance'><button className="btn btn-primary" type='button'>See movies...</button></Link>
                            </div>
                        </div>
                        <div className="card text-center">
                            <div className="card-body">
                                <h2 className="card-title">Action</h2>
                                <img className="rounded" src='https://m.media-amazon.com/images/M/MV5BZmEzNjhiZWEtNTM5OS00ZmQyLThhYjEtNjY4ZDZhOGFkMzI4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg' alt=""/>
                                <br/><br/>
                                <Link to='/action'><button className="btn btn-primary" type='button'>See movies...</button></Link>
                            </div>
                        </div>
                        <div className="card text-center">
                            <div className="card-body">
                                <h2 className="card-title">Fiction</h2>
                                <img className="rounded" src='https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg' alt=""/>
                                <br/><br/>
                                <Link to='/fiction'><button className="btn btn-primary" type='button'>See movies...</button></Link>
                            </div>
                        </div>
                        <div className="card text-center">
                            <div className="card-body">
                                <h2 className="card-title">Comedy</h2>
                                <img className="rounded" src='https://m.media-amazon.com/images/M/MV5BNTAyNDM0OGMtMmQ5OS00OGJiLTljMDUtY2Y1OTFlYmM2ZTk2XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg' alt=""/>
                                <br/><br/>
                                <Link to='/comedy'><button className="btn btn-primary" type='button'>See movies...</button></Link>
                            </div>
                        </div>
                </div>
            );
        }
    }
}

export default connect(
    'is_login',
    actions
)(withRouter(Home));