// Import necessary libraries
import React from 'react';
import axios from 'axios';

// Function to convert currency from VND to USD
async function convertCurrency(amount) {
    const url = `https://api.apilayer.com/exchangerates_data/convert?to=USD&from=VND&amount=${amount}`;
    try {
        const response = await fetch(url, {
            headers: {
                "apikey": "CaL5Dsgtc1FeF8gQFWJMxOrPtvc0euON"
            }
        });
        const data = await response.json();
        const convertedAmount = data.result.toFixed(2);
        console.log(convertedAmount);
        return convertedAmount;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// PayPalButton component
const PayPalButton = ({ amount, userId }) => {
    const handleBuyNow = async () => {
        try {
            // Convert currency before creating the invoice
            const convertedAmount = await convertCurrency(amount);

            // Call API to create invoice from client side
            const response = await axios.post('http://localhost:8080/payment/create-payment', {
                amount: convertedAmount,
                currency: 'USD', // Add information about the currency
                method: 'paypal', // Payment method (can be 'paypal', 'credit_card', etc.)
                intent: 'sale', // Payment intent (can be 'sale', 'authorize', etc.)
                description: 'Payment for Service', // Payment description
                userId: userId
            });

            // After creating invoice successfully, log invoice and handle further processing
            console.log('Invoice created:', response.data);
            window.location.href = response.data;

            // Redirect or handle other processing here
        } catch (error) {
            console.error('Error creating invoice:', error);
        }
    };

    return <button onClick={handleBuyNow}>Mua Ngay</button>;
};

// Export the PayPalButton component as default
export default PayPalButton;
