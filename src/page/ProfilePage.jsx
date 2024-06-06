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
  const [service, setService] = useState([]);

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

    const FetchService = async () => {
      try {
        if (user) {
          const response = await axios.get(
            `http://localhost:8080/servicePack/findAll?userID=${user.idUser}`
          );
          const data = response.data;
          console.log(data);
          setService(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    FetchService();
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
  const convertToDateOnly = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(date.getUTCDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
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
            </div>
          </div>
          <div className="col-md-4">
            <img
              src={account.avatarPicture}
              alt="avatar"
              className="rounded-circle"
              style={{ width: "200px", height: "200px" }}
            />
          </div>
        </div>
        {/* <div className="row">
          <div className="col-md-8">
            <div className="display-5  text-primary mb-1">Gói Đã Mua</div>
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Tên gói</p>
                  </div>
                  <div className="col-sm-3">
                    <p>Ngày Mua</p>
                  </div>
                  <div className="col-sm-3">
                    <p>Ngày hết hạn</p>
                  </div>{" "}
                  <div className="col-sm-3">
                    <p>Trạng thái</p>
                  </div>
                </div>
                {service.map((s) => (
                  <>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">{s.servicePackId.service_type}</p>
                      </div>
                      <div className="col-sm-3">
                        <p>{convertToDateOnly(s.servicePackId.createAt)}</p>
                      </div>
                      <div className="col-sm-3">
                        <p>{convertToDateOnly(s.expiredTime)}</p>
                      </div>
                      <div className="col-sm-3">
                        {s.status ? (
                          <a className="text-success">Còn hạng</a>
                        ) : (
                          <a className="text-danger">Hết hạng</a>
                        )}
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div> */}
        <div className="row">
          {service.map((s) => (
            <>
              <div className="col-md-8">
                <div className="display-5  text-primary mb-1">Gói Đã Mua</div>

                <div className="card mb-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Tên gói</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="mb-0">{s.servicePackId.service_type}</p>
                      </div>
                    </div>

                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Ngày mua</p>
                      </div>
                      <div className="col-sm-9">
                        <p>{convertToDateOnly(s.servicePackId.createAt)}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Ngày hết hạn</p>
                      </div>
                      <div className="col-sm-9">
                        <p>{convertToDateOnly(s.expiredTime)}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Trạng thái</p>
                      </div>
                      <div className="col-sm-9">
                        {s.status ? (
                          <a className="text-success">Còn hạng</a>
                        ) : (
                          <a className="text-danger">Hết hạng</a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
export default ProfilePage;
