import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const CheckoutStripeButton = ({ price }) => {
    const convertRupees = price * 1000;
    const publishableKey = 'pk_test_51HIdRdFMBHUEWRqVdR096PG7or4jEJv5ep9MljcpxnPatUJoPdXko4fOp2DTMW48A70LTDojXAgEV1EXClzc86WW00fxH55BMO';

 const  onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

return (
    <StripeCheckout 
    label = 'Pay Now'
    name = 'Yours Clothing'
    billingAddress
    shippingAddress
    image = 'https://sendeyo.com/up/d/f3eb2117da'
    description = {`Your total is $${price} `}
    amount = {convertRupees}
    panellabel = 'Pay Now'
    token = {onToken}
    stripeKey = {publishableKey}
    
    />


);
};

export default CheckoutStripeButton;