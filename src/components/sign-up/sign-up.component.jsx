import React, { useState } from 'react';
import './sign-up.style.scss';
import { connect } from 'react-redux'
import FormInput from 'components/form-input/form-input.component';
import CustomButton from 'components/custom-button/custom-button.component';
import { signUpStart } from 'redux/user/user.actions';

const SignUp = ({ signUp }) => {
  const [userData, setUserData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const { displayName, email, password, confirmPassword } = userData

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Password don\'t match')
      return
    }

    signUp({ displayName, email, password })
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setUserData({ ...userData, [name]: value })
  }

  return (
    <div className='sign-up'>
      <h2>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />

        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />

        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />

        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <CustomButton type='sibmit'>SIGN UP</CustomButton>
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  signUp: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp)