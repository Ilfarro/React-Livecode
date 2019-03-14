import React, { Component } from 'react';
// import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import {actions} from '../store'
import './SignIn.css'

class SignIn extends Component {

    doLogin = () => {
        this.props.postLogin().then(() => {
            this.props.history.replace('/profile');
        });
    };

    render() {
        console.log('Propsss', this.props);
        return (
            // <section className='content signin'>
            //     <form onSubmit = {e => e.preventDefault()}>
            //         <h4>Sign In</h4>
            //         <div>
            //             <input type='text' name='username' placeholder='Username' onChange = {e => this.props.setField(e)} />
            //         </div>
            //         <div>
            //             <input type='password' name='password' placeholder='Password' onChange = {e => this.props.setField(e)} />
            //         </div>
            //         <button onClick={() => this.doLogin()}>Sign In</button>
            //         <button type='reset'>Reset</button>
            //     </form>
            // </section>

            <div className="row">
            <div className="col-lg-10 col-xl-9 mx-auto">
                <div className="card card-signin flex-row my-5">
                    <div className="card-img-left d-none d-md-flex">
                        {/* <!-- Background image for card set in CSS! --> */}
                    </div>
                    <div className="card-body">
                        <h3 className="card-title text-center">Masuk</h3>
                        <form onSubmit = {e => e.preventDefault()} className="form-signin">
                        <div className="form-label-group">
                            <input type="text" name='username' onChange = {e => this.props.setField(e)} id="inputUserame" className="form-control" placeholder="Username" autofocus/>
                            <label for="inputUserame">Username</label>
                        </div>
                        <div className="form-label-group">
                            <input type="password" name='password' onChange = {e => this.props.setField(e)} id="inputPassword" className="form-control" placeholder="Password"/>
                            <label for="inputPassword">Password</label>
                        </div>
                        <button onClick={() => this.doLogin()} className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Masuk</button>
                        <a className="d-block text-center mt-2 small" href="#">Lupa password?</a>
                        <a className="d-block text-center mt-2 small" href="#">Belum punya akun? Daftar</a>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default connect(
    'username, password',
    actions
)(withRouter(SignIn));