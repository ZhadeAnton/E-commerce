import React from 'react';
import './checkout.style.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector.js'

import CheckoutItem from 'components/checkout-item/checkout-item.component';

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='checkout-block'>
        <span>Product</span>
      </div>
      <div className='checkout-block'>
        <span>Description</span>
      </div>
      <div className='checkout-block'>
        <span>Quantity</span>
      </div>
      <div className='checkout-block'>
        <span>Price</span>
      </div>
      <div className='checkout-block'>
        <span>Remove</span>
      </div>
    </div>
    {
      cartItems.length ?
        cartItems.map(item =>
          <CheckoutItem key={item.id} item={item} />)
        : 'Your cart is empty'
    }
    <div className='total'>
      <span>TOTAL: $ {total}</span>
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)