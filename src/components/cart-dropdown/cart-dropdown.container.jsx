import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from 'redux/cart/cart.actions'
import { selectCartItems } from 'redux/cart/cart.selector'
import { createStructuredSelector } from 'reselect'
import CartDropdown from './cart-dropdown.component'

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

const CartDropdownContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(CartDropdown)

export default CartDropdownContainer