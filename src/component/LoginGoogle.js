import React, { useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; // Import thư viện sweetalert2

const Login = () => {
    useEffect(() => {
        const handleAfterLogin = async () => {
            try {
                console.log('handleAfterLogin called');
                // Gọi một phương thức khác sau khi đăng nhập thành công
                // const response = await axios.get('http://localhost:8080/login/google');
                // // Thay 'localhost:8080' bằng địa chỉ backend của bạn

                console.log('Response after login:', response.data);

                // Kiểm tra nếu phản hồi thành công
                if (response.status === 200) {
                    // // Hiển thị thông báo cho người dùng
                    // Swal.fire({
                    //     icon: 'success',
                    //     title: 'Login Successful',
                    //     text: `Success`,
                    //     showConfirmButton: true,
                    //     confirmButtonText: 'OK'
                    // }).then((result) => {
                    //     if (result.isConfirmed) {
                    //         // Chuyển hướng về trang chủ của frontend
                    //         window.location.href = 'http://localhost:3000'; // Thay 'localhost:3000' bằng địa chỉ frontend của bạn
                    //     }
                    // });
                } else {
                    console.error('Error after login:', response.data);
                }
            } catch (error) {
                console.error('Error after login:', error);
            }
        };

        // Đăng ký hàm callback để gọi sau khi đăng nhập thành công và chuyển hướng về trang chủ
        window.handleAfterLogin = handleAfterLogin;
    }, []); // useEffect chỉ chạy một lần sau khi component được render
};

export default Login;
