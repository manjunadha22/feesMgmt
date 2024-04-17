import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AmountContext } from './AmountContext'
import './Payment.css'
import { PaymentMethodContext } from './PaymentMethod';

function Payment() {
    const navigate = useNavigate();
    const location = useLocation();
    const { amount, setAmount } = useContext(AmountContext);
    const { paymentMethod, setPaymentMethod } = useContext(PaymentMethodContext)
    const data = location.state.name;
    const handlePaymentMethodSelect = () => {
        setAmount(parseInt(document.getElementById("amt").value))
        const paymentOptions = document.getElementsByName("payment");

        // Iterate through the radio buttons to find the selected one
        let selectedPayment;
        for (const option of paymentOptions) {
            if (option.checked) {
                // The value of the selected radio button
                selectedPayment = option.id;
                break; // Exit the loop once we find the selected option
            }
        }
        console.log(selectedPayment);
        setPaymentMethod(selectedPayment)
        navigate('/studentHome', { state: { name: data } })
    }
    return (
        <div className='payment'>
            <label for="amt">Enter amount:</label>
            <input id="amt" type="text" placeholder="Enter the amount" required />
            <h3 className="heading">Select the payment option</h3>
            <div className="radioBtns">
                <div className="radiol">
                    <input type="radio" name="payment" id="phonepay" />
                    <label for="phonepay">Phone Pay</label>
                </div>
                <div className="radiol">
                    <input type="radio" name="payment" id="paytm" />
                    <label for="paytm">Paytm</label>
                </div>
                <div className="radiol">
                    <input type="radio" name="payment" id="googlepay" />
                    <label for="googlepay">Google Pay</label>
                </div>
                <div className="radiol">
                    <input type="radio" name="payment" id="netbanking" />
                    <label for="netbanking">Net Banking</label>
                </div>
            </div>
            <div className="buttonss">
                <button onClick={handlePaymentMethodSelect}>Continue to pay</button>
                <button>Cancel</button>
            </div>
        </div>
    )
}

export default Payment