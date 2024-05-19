
import React, { useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert2

const ExecutePaymentComponent = () => {
    const location = useLocation(); // Sử dụng useLocation để lấy location

    useEffect(() => {
        const executePayment = async () => {
            try {
                const params = new URLSearchParams(location.search);
                const paymentId = params.get('paymentId');
                const payerId = params.get('PayerID');

                const response = await axios.get(`http://localhost:8080/payment/execute`, {
                    params: {
                        paymentId: paymentId,
                        payerId: payerId
                    }
                });

                if (response.data === 'success') {
                    Swal.fire({
                        icon: 'success',
                        title: 'Payment Successful',
                        text: `Payment Successful`,
                        showConfirmButton: true, // Hiển thị nút xác nhận
                        confirmButtonText: 'OK' // Chữ trên nút xác nhận
                    }).then((result) => {
                        if (result.isConfirmed) {
                            // Nếu người dùng click vào nút xác nhận
                            window.location.href = 'http://localhost:3000'; // Chuyển hướng về trang chủ
                        }
                    });
                }else{
                    Swal.fire({
                        icon: 'ERROR',
                        title: 'Payment Fail',
                        text: 'Your payment has been failed.',
                        showConfirmButton: true,
                        confirmButtonText: 'OK'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            // Redirect to home page or any other page
                            window.location.href = 'http://localhost:3000';
                        }
                    });
                }
// Trong useEffect khi xử lý thành công


                // Xử lý kết quả ở đây, ví dụ: hiển thị thông báo cho người dùng
            } catch (error) {
                console.error('Error executing payment:', error);
                // Xử lý lỗi ở đây, ví dụ: hiển thị thông báo cho người dùng
            }
        };

        executePayment();
    }, [location]); // Đảm bảo sử dụng location trong dependencies của useEffect

};

export default ExecutePaymentComponent;
