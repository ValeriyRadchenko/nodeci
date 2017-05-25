import * as React from 'react';
import NavBar from '../components/NavBar';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { login } from '../actions/user';
import { Button } from 'react-bootstrap';
import { Input } from '../components/FormBootstrapComponents';
import '../assets/styles/loginPage.scss';


const Login = ({ handleSubmit }: any) => (
  <div>
    <h2>Login</h2>

    <form className='login-form' onSubmit={handleSubmit}>
        <Field component={Input} type='text' name='name' placeholder='Username'/>
        <Field component={Input} type='password' name='password' placeholder='Password'/>
        <Button type='submit'>Login</Button>
    </form>
  </div>
);

export default reduxForm({
  form: 'login',
  onSubmit: (data, dispatch) => dispatch(login(data)),
})(Login);
