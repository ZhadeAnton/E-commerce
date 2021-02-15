import React from 'react';
import './checkout-item.style.scss'
import { connect } from 'react-redux'
import { removeItem } from 'redux/cart/cart.actions';

const CheckoutItem = ({ item, removeItem }) => {
  const { name, quantity, price, imageUrl } = item

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow'>&#10094;</div>
          <span className='value'>{quantity}</span>
        <div className='arrow'>&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => removeItem(item)}>&#10005;</div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)