import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
function ProfilePage() {
  const [account, setAccount] = useState("");
  var token = Cookies.get("jwt_token");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");

  const user = typeof token === "undefined" ? null : jwtDecode(token);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user) {
          const response = await axios.get(
            `http://localhost:8080/account/view/${user.idUser}`
          );
          const data = response.data;
          setAccount(data);
          setUsername(data.userName);
          setFullName(data.fullName);
          setPhone(data.phone);
          setEmail(data.email);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once after the initial render

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);

    if (!validateEmail(email)) {
      setEmailError("Invalid email address format");
    } else {
      setEmailError("");
    }
  };

  const handlePhoneChange = (e) => {
    const phone = e.target.value;
    setPhone(phone);

    if (!validatePhone(phone)) {
      setPhoneError("Invalid phone number format");
    } else {
      setPhoneError("");
    }
  };
  const handleFullNameChange = (e) => {
    const fullName = e.target.value;
    setFullName(fullName);
  };
  const handleUserNameChange = (e) => {
    const userName = e.target.value;
    setUsername(userName);
  };
  const isSaveDisabled = emailError || phoneError;

  const ChangeInformation = async () => {

    try {
      // Make POST request using Axios
      const response = await axios.post(
        "http://localhost:8080/account/update",
        {
          id: account.id,
          userName: username,
          avatarPicture: account.avatarPicture,
          password: account.password,
          email: email,
          fullName: fullName,
          phone: phone,
        }
      );

      // Optionally, handle success response
      console.log("User information updated successfully:", response.data);
    } catch (error) {
      // Handle error
      console.error("Error updating user information:", error.message);
    }
  };
  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <nav
              aria-label="breadcrumb"
              className="bg-light rounded-3 p-3 mb-4"
            >
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a className="text-dark" href="#">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a className="text-dark" href="#">
                    User
                  </a>
                </li>
                <li
                  className="breadcrumb-item active text-primary"
                  aria-current="page"
                >
                  User Profile
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-2">
            <img
              src={account.avatarPicture}
              alt="avatar"
              className="rounded-circle"
              style={{ width: "150px", height: "150px" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Full Name</p>
                  </div>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control text-dark border-0"
                      defaultValue={account.fullName}
                      onChange={handleFullNameChange}
                    />
                  </div>
                </div>

                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">User Name</p>
                  </div>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control text-dark border-0"
                      defaultValue={account.userName}
                      onChange={handleUserNameChange}
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control text-dark border-0"
                      defaultValue={account.email}
                      onChange={handleEmailChange}
                    />
                    {emailError && (
                      <div style={{ color: "red" }}>{emailError}</div>
                    )}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Phone</p>
                  </div>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control text-dark border-0"
                      defaultValue={account.phone}
                      onChange={handlePhoneChange}
                    />
                    {phoneError && (
                      <div style={{ color: "red" }}>{phoneError}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button
                  className="btn btn-primary"
                  onClick={() => ChangeInformation()}
                  disabled={isSaveDisabled}
                >
                  Save
                </button>
              </div>

              {/* <div className="col">
              <button className="btn btn-secondary">Change Password</button>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ProfilePage;
