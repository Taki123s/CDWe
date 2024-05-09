import React, { useState } from 'react';
import axios from 'axios';

const PaymentComponent = () => {
    const [amount, setAmount] = useState(0);
    const [userId, setUserId] = useState(0);

    const createPayment = async () => {
        try {
            const response = await axios.post('http://localhost:8080/payment/create-payment', {
                amount: amount,
                currency: 'USD',
                method: 'paypal',
                intent: 'sale',
                description: 'Test Payment'
            });
            console.log('Payment created:', response.data);
            if (response.data.paymentId && response.data.url) {
                // Chuyển hướng người dùng đến trang thanh toán PayPal
                window.location.href = response.data.url;
            } else {
                console.error('Error creating payment: Invalid response');
            }
            // Đoạn code sau này có thể chuyển hướng người dùng đến trang thanh toán PayPal
        } catch (error) {
            console.error('Error creating payment:', error);
            // Xử lý lỗi ở đây, ví dụ: hiển thị thông báo cho người dùng
        }
    };

    const handleChange = (event) => {
        setAmount(event.target.value);
    };

    const handleUserIdChange = (event) => {
        setUserId(event.target.value);
    };

    return (
        <div>
            <input type="number" value={amount} onChange={handleChange} />
            <input type="number" value={userId} onChange={handleUserIdChange} />
            <button onClick={createPayment}>Create Payment</button>
        </div>
    );
};

export default PaymentComponent;
