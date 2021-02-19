import React from 'react';
import './pay-button.component.scss'
import StripeCheckout from 'react-stripe-checkout';

const PayButton = () => {
  const onToken = (token) => {
    console.log(token)
    alert('Success')
  }
  const stripeKey = 'pk_test_51IMH68D6XYb5VlJai1kzDNEMAb4woQ6msoXgDehQhw8axPi6pIoH5J1dVjJURnDBAAZnTvMZSZON6rVdX7LbKUaN00jaUxc09F'

  return (
    <div>
      <StripeCheckout
        token={onToken}
        stripeKey={stripeKey}
        label="Pay with card"
        name="CRWN Co."
        description="Pay with Cart"
        image="https://www.pngfind.com/pngs/m/13-133137_this-page-contains-all-info-about-black-crown.png"
      />
    </div>
  )
}

export default PayButton