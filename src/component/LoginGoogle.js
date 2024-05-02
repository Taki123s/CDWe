import React from 'react';
import { GoogleLogin } from 'react-google-login';

function LoginGoogle() {
    const responseGoogle = (response) => {
        console.log(response);
        // Send token to server
        fetch('http://localhost:8080/api/googlelogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ tokenId: response.tokenId }),
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((error) => console.error('Error:', error));
    };

    return (
        <div className="App">
            <h1>Đăng nhập bằng Google</h1>
            <GoogleLogin
                clientId="653759297281-qjl19np77aug293a6tahskvbfri39e4v.apps.googleusercontent.com" // Replace with your actual client ID
                buttonText="Đăng nhập với Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
}

export default LoginGoogle;
