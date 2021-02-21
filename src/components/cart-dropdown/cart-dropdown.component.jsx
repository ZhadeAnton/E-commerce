import React from 'react';
import './cart-dropdown.style.scss'
import CartItem from 'components/cart-item/cart-item.component';
import CustomButton from 'components/custom-button/custom-button.component';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
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
      toggleCartHidden()
    }}>GO TO CHECKOUT</CustomButton>
  </div>)
}

export default CartDropdown