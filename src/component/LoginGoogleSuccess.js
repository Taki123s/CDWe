import React, { useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; // Import thư viện sweetalert2

const Login = () => {
    useEffect(() => {
        console.log('Login component rendered'); // Thêm dòng này để kiểm tra
        // Rest of your code...
        try {
            console.log('handleAfterLogin called');
            // Gọi một phương thức khác sau khi đăng nhập thành công
            axios.get('http://localhost:8080/login/google', { withCredentials: true })
                .then((response) => {
                    console.log('Response after login:', response.data);

                    // Kiểm tra nếu phản hồi thành công
                    if (response.status === 200) {
                        // Hiển thị thông báo cho người dùng
                        Swal.fire({
                            icon: 'success',
                            title: 'Login Successful',
                            text: `Success`,
                            showConfirmButton: true,
                            confirmButtonText: 'OK'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                // Chuyển hướng về trang chủ của frontend
                                window.location.href = 'http://localhost:3000'; // Thay 'localhost:3000' bằng địa chỉ frontend của bạn
                            }
                        });
                    } else {
                        console.error('Error after login:', response.data);
                    }
                });
        } catch (error) {
            console.error('Error after login:', error);
        }
    }, []);

    return null; // Không có giao diện được render trong component này
};

export default Login;
