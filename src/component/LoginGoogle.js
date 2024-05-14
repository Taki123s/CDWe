import React, { useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; // Import thư viện sweetalert2

const Login = () => {
    useEffect(() => {
        const handleGoogleLogin = async () => {
            // Chuyển hướng đến trang đăng nhập của Google
            window.location.href = 'http://localhost:8080/oauth2/authorization/google';
        };

        // Gọi hàm handleGoogleLogin ngay khi component được render
        handleGoogleLogin();

        // Hàm callback sẽ được gọi sau khi quá trình đăng nhập hoàn thành và chuyển hướng về trang chủ
        const handleAfterLogin = async () => {
            try {
                // Gọi một phương thức khác sau khi đăng nhập thành công
                const response = await axios.get('http://localhost:8080/login/google');
                console.log('Response after login:', response.data);

                // Hiển thị thông báo cho người dùng và chuyển hướng về trang chủ
                Swal.fire({
                    icon: 'success',
                    title: 'Payment Successful',
                    text: `Success`,
                    showConfirmButton: true,
                    confirmButtonText: 'OK'
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = 'http://localhost:3000'; // Chuyển hướng về trang chủ
                    }
                });
            } catch (error) {
                console.error('Error after login:', error);
            }
        };

        // Đăng ký hàm callback để gọi sau khi đăng nhập thành công và chuyển hướng về trang chủ
        window.handleAfterLogin = handleAfterLogin;
    }, []); // useEffect chỉ chạy một lần sau khi component được render

    return null; // Không có giao diện được render trong component này
};
export default Login;
