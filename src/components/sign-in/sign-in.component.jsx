import React from 'react'
import { connect } from 'react-redux'
import './sign-in.style.scss'
import FormInput from "../form-input/form-input.component";
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions.js'
import CustomButton from "../custom-button/custom-button.component";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault()
    const { email, password } = this.state
    const { emailSignInStart } = this.props

    emailSignInStart(email, password)
  }

  handleChange = event => {
    const { value, name } = event.target

    this.setState({ [name]: value })
  }

  render() {
    const { googleSignInStart } = this.props

    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='Password'
            required
          />

          <div className='buttons'>
            <CustomButton children={'Sign in'} type={'submit'} />
            <CustomButton children={'Sign with Google'} type={'button'} onClick={googleSignInStart} isGoogleSignIn />
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn)