import React from 'react';
import axios from 'axios';

const PayPalButton = ({ amount, userId }) => {
    const handleBuyNow = async () => {
        try {
            // Gọi API tạo hóa đơn từ phía client
            const response = await axios.post('http://localhost:8080/payment/create-payment', {
                amount: amount,
                currency: 'USD', // Thêm thông tin về loại tiền tệ
                method: 'paypal', // Phương thức thanh toán (có thể là 'paypal', 'credit_card', vv.)
                intent: 'sale', // Mục đích của thanh toán (có thể là 'sale', 'authorize', vv.)
                description: 'Payment for Service', // Mô tả thanh toán
                userId: userId
            });
            // Sau khi tạo hóa đơn thành công, log hóa đơn và thực hiện các xử lý tiếp theo
            console.log('Invoice created:', response.data);
            window.location.href = response.data;

            // Redirect hoặc thực hiện các xử lý khác tại đây
        } catch (error) {
            console.error('Error creating invoice:', error);
        }
    };
    const handleExecutePayment = async () => {
        try {
            // Gọi API execute từ phía client
            const response = await axios.get('http://localhost:8080/payment/execute', {
                params: {
                    paymentId: 'YOUR_PAYMENT_ID', // Thay YOUR_PAYMENT_ID bằng giá trị thực tế của paymentId
                    PayerID: 'YOUR_PAYER_ID' // Thay YOUR_PAYER_ID bằng giá trị thực tế của PayerID
                }
            });
            // Log phản hồi từ server
            console.log('Payment executed:', response.data);

            // Hiển thị thông báo hoặc thực hiện các xử lý khác tại đây

        } catch (error) {
            console.error('Error executing payment:', error);
        }
    };

    return <button onClick={handleBuyNow}>Mua Ngay</button>;
};

export default PayPalButton;
