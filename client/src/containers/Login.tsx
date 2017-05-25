import * as React from 'react';
import NavBar from '../components/NavBar';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { login } from '../actions/user';
import '../assets/styles/loginPage.scss';


const Login = ({ handleSubmit }: any) => (
  <div>
    <h2>Login</h2>

    <form className='login-form' onSubmit={handleSubmit}>
        <Field component='input' type='text' name='name' placeholder='Username'/>
        <Field component='input' type='password' name='password' placeholder='Password'/>
        <button type='submit'>Login</button>
    </form>
  </div>
);

export default reduxForm({
  form: 'login',
  onSubmit: (data, dispatch) => dispatch(login(data)),
})(Login);
