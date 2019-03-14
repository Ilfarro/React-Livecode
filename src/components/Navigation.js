import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { actions } from '../store';
import { connect } from 'unistore/react';
import logoAlterraAcademy from '../images/logo/logo-alterra-academy.png'
import './Navigation.css'

class Navigation extends Component {
    render() {
        if (this.props.is_login === false) {
            return (
                <div className="container">
                    <header>
                        <div className="row">
                            <div className="col-sm-3 col-md-2">
                                <img id="logo" src={logoAlterraAcademy} width="100px" />
                            </div>
                            <div className="col-sm-9 col-md-10">
                                <ul className="nav justify-content-end">
                                    <li className="nav-item">
                                        <a className='nav-link'><Link to='/'>HOME</Link></a>
                                    </li>
                                    <li className="nav-item">
                                    <a className='nav-link'><Link to='/profile'>PROFILE</Link></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className='nav-link'><Link to='/signin'>SIGN IN</Link></a>
                                    </li>
                                    {/* <li className="nav-item">
                                        <p className='nav-link'><Link to='/' onClick={() => this.props.postSignOut()}>
                                            SIGN OUT
                                        </Link></p>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </header>
                </div>
            )
        } else {
            return (
                <div className="container">
                    <header>
                        <div className="row">
                            <div className="col-sm-3 col-md-2">
                                <img id="logo" src={logoAlterraAcademy} width="100px" />
                            </div>
                            <div className="col-sm-9 col-md-10">
                                <ul className="nav justify-content-end">
                                    <li className="nav-item">
                                        <a className='nav-link'><Link to='/'>HOME</Link></a>
                                    </li>
                                    <li className="nav-item">
                                    <a className='nav-link'><Link to='/profile'>PROFILE</Link></a>
                                    </li>
                                    {/* <li className="nav-item">
                                        <a className='nav-link'><Link to='/signin'>SIGN IN</Link></a>
                                    </li> */}
                                    <li className="nav-item">
                                        <p className='nav-link'><Link to='/' onClick={() => this.props.postSignOut()}>
                                            SIGN OUT
                                        </Link></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </header>
                </div>
            )

        }
    }
}

export default connect(
    'is_login,listMovies',
    actions
)(withRouter(Navigation));