import CustomButton from 'components/custom-button/custom-button.component';
import React from 'react';
import './pay-button.component.scss'
import StripeCheckout from 'react-stripe-checkout';

const PayButton = () => {
  const onToken = (token) => {
    alert(token)
  }
  const stripeKey = 'pk_test_51IMH68D6XYb5VlJai1kzDNEMAb4woQ6msoXgDehQhw8axPi6pIoH5J1dVjJURnDBAAZnTvMZSZON6rVdX7LbKUaN00jaUxc09F'

  return (
    <div>
      <StripeCheckout
        token={onToken}
        stripeKey={stripeKey}>

        <CustomButton>Pay</CustomButton>
      </StripeCheckout>
    </div>
  )
}

export default PayButton