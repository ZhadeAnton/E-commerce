import React from 'react';
import './checkout-item.style.scss'
import { connect } from 'react-redux'
import { addItem, removeItem, removeItemFromCkeckout } from 'redux/cart/cart.actions';

const CheckoutItem = ({ item, removeItemFromCkeckout, addItem, removeItem }) => {
  const { name, quantity, price, imageUrl } = item

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(item)}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(item)}>&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => removeItemFromCkeckout(item)}>&#10005;</div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  removeItemFromCkeckout: item => dispatch(removeItemFromCkeckout(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)