import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles'
import { auth } from '../../firebase/firebase.utils'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { selectCardHidden } from '../../redux/cart/cart.selector'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from 'components/cart-icon/cart-icon.component'
import CartDropdown from 'components/cart-dropdown/cart-dropdown.component'

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'> SHOP </OptionLink>
      <OptionLink to='/shop'> CONTACT </OptionLink>
      {currentUser ?
        <OptionLink as='div' onClick={() => auth.signOut()}> SIGN OUT </OptionLink>
        :
        <OptionLink to='/sign-in'> SIGN IN </OptionLink>
      }
      <CartIcon />
    </OptionsContainer>
    {
      hidden ? null : <CartDropdown />
    }
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCardHidden
})

export default connect(mapStateToProps, null)(Header)