import React, {useState} from 'react';
import { Link, history } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../action/alert';
import {login} from '../../action/auth'
import PropTypes from 'prop-types';
import SignInImg from '../../images/signinImg.webp'

const Login = ({login, isAuthenticated, setAlert, history}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const {email, password} = formData

    const changehandler = e => setFormData({...formData, [e.target.name]: e.target.value})

    const submitHandler = e => {
        e.preventDefault();

        if(!email || !password){
            return setAlert('Enter All fields', 'danger')
        }
        login({email, password}, history)
        setFormData({email: '', password: ''})
    }

    return (
        <div className="signup-main-container" style={{background: '#eee'}}>
            <div className="row signin-container">
            <div className="col s12 l6" style={{background: ''}}>
                <img src={SignInImg} alt="" className="signin-img" />
                <p className="create-account"><Link className="already-link" to="/signup">Create an account</Link></p>
            </div>

            <div className="col s12 l6" style={{background: ''}}>
            <h4 className="heading-text">Sign in</h4>
                <form onSubmit={submitHandler}>
                <div className="row sigup-input-container">
                    <div className="input-field col s11">
                        <i className="material-icons custom-icons">email</i>
                        <input 
                            id="email" 
                            name="email" 
                            type="email" 
                            value={email} 
                            onChange={e => changehandler(e)} 
                            className="custom-input"
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="input-field col s11">
                        <i className="material-icons custom-icons">lock</i>
                        <input 
                            id="password" 
                            type="password" 
                            name="password"
                            onChange={e => changehandler(e)} 
                            value={password}
                            className="custom-input"
                            placeholder="Password"
                        />
                    </div>
                    <div className="checkbox-main-container">
                        <label className="">
                            <input type="checkbox" name=""/>
                            <span className="checkmark"><span className="agreement-text remember-me">Remember me</span></span>
                        </label>
                    </div>
                    <button className="waves-effect waves-light btn 42a5f5 blue lighten-1 btn-register">Login</button>
                </div>
                </form>
            </div>
            </div>
        </div>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    // isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login, setAlert })(Login);
