import React, {useState} from 'react';
import {Link, Redirect, useHistory } from 'react-router-dom'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { setAlert } from '../../action/alert';
import { register} from '../../action/auth'
import SignUpImg from '../../images/signupImg.webp'

const Register = ({ register, setAlert, history }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })
    const [checked, setChecked] = useState(false)

    const {name, email, password, password2} = formData;

    const changehandler = e => setFormData({...formData, [e.target.name] : e.target.value})

    const handleCheck = () => {
        setChecked(!checked)
    }

    const submitHandler = e => {
        e.preventDefault();
        if(!name || !email || !password || !password2){
            return setAlert('Enter All fields', 'danger')
        }
        if(password !== password2){
            return setAlert('password don\'t matched', 'danger')
        }
        if(!checked){
            return setAlert('Please check the agreement', 'danger')
        }
        register({name, email, password}, history)
        setAlert('You are registered', 'success')
        setFormData({name:'', email: '', password: '', password2: ''})
        setChecked(false)
        // return <Redirect to="/signin" />
    }

    // if(isAuthenticated){
    //     return <Redirect to="/" />
    // }

    return (
        <div className="signup-main-container" style={{background: '#eee'}}>
            <div className="row signup-container">
            <div className="col s12 l6" style={{background: ''}}>
            <h4 className="heading-text">Sign up</h4>
                <form onSubmit={submitHandler}>
                <div className="row sigup-input-container">
                    <div className="input-field col s11">
                        <i className="material-icons custom-icons">account_circle</i>
                        <input 
                            id="name" 
                            name="name" 
                            type="text" 
                            onChange={e => changehandler(e)} 
                            value={name} 
                            className="custom-input"
                            placeholder="Your Name"
                        />
                        {/* <label htmlFor="name">Your Name</label> */}
                    </div>
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
                        {/* <label htmlFor="email" className="custom-email-label"></label> */}
                        {/* <span className="helper-text" data-error="wrong" data-success="right">Helper text</span> */}
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
                        {/* <label htmlFor="password">Password</label> */}
                    </div>
                    <div className="input-field col s11">
                        <i className="material-icons custom-icons">lock</i>
                        <input 
                            id="password2" 
                            type="password" 
                            name="password2"
                            onChange={e => changehandler(e)} 
                            value={password2}
                            className="custom-input"
                            placeholder="Repeat your password"
                        />
                        {/* <label htmlFor="password">Password</label> */}
                    </div>
                    <div className="checkbox-main-container">
                        <label className="">
                            <input type="checkbox" name="" onClick={handleCheck}/>
                            <span className="checkmark"><span className="agreement-text">I agree all statements in Terms of service</span></span>
                        </label>
                    </div>
                    <button className="waves-effect waves-light btn 42a5f5 blue lighten-1 btn-register">Register</button>
                </div>
                </form>
            </div>
            <div className="col s12 l6" style={{background: ''}}>
                <img src={SignUpImg} alt="" className="signup-img" />
                <p className="already-member"><Link className="already-link" to="/signin">I am already member</Link></p>
            </div>
            </div>
        </div>
    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    // isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {register, setAlert})(Register);
