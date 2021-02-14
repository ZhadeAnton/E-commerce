import React from 'react';
import './cart-dropdown.style.scss'
import { connect } from 'react-redux'
import CustomButton from 'components/custom-button/custom-button.component';
import CartItem from 'components/cart-item/cart-item.component';

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.map(item => <CartItem key={item.id} item={item} />)
      }
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
})

export default connect(mapStateToProps)(CartDropdown)