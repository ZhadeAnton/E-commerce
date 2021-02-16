import React from 'react';
import './cart-dropdown.style.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart.selector.js'
import { withRouter } from 'react-router-dom'

import CustomButton from 'components/custom-button/custom-button.component';
import CartItem from 'components/cart-item/cart-item.component';
import { toggleCartHidden } from 'redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (<div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.length ?
          cartItems.map(item => <CartItem key={item.id} item={item} />)
          : <span className='empty-message'>Your cart is empty</span>
      }
    </div>
    <CustomButton onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden())
    }}>GO TO CHECKOUT</CustomButton>
  </div>)
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))