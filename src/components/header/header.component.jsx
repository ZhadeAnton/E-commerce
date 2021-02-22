import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { selectCardHidden } from '../../redux/cart/cart.selector'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from 'components/cart-icon/cart-icon.component'
import CartDropdownContainer from 'components/cart-dropdown/cart-dropdown.container'
import { signOutStart } from '../../redux/user/user.actions.js'

const Header = ({ currentUser, hidden, signOut }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'> SHOP </OptionLink>
      <OptionLink to='/shop'> CONTACT </OptionLink>
      {currentUser ?
        <OptionLink as='div' onClick={() => signOut()}> SIGN OUT </OptionLink>
        :
        <OptionLink to='/sign-in'> SIGN IN </OptionLink>
      }
      <CartIcon />
    </OptionsContainer>
    {
      hidden ? null : <CartDropdownContainer />
    }
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCardHidden
})

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)