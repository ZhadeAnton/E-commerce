import React from 'react';
import './cart-dropdown.style.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart.selector.js'
import { withRouter } from 'react-router-dom'

import CustomButton from 'components/custom-button/custom-button.component';
import CartItem from 'components/cart-item/cart-item.component';

const CartDropdown = ({ cartItems, history }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.length ?
          cartItems.map(item => <CartItem key={item.id} item={item} />)
          : <span className='empty-message'>Your cart is empty</span>
      }
    </div>
    <CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))