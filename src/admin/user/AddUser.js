import { Title } from "chart.js";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { addUser } from "../../service/UserAdmin";
import { useNavigate } from "react-router-dom";

const AddUserForm = () => {
  const [imageSrc, setImageSrc] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
      setAvatar(file);

    }
  };
  const handleClick = async () => {
    const user = {
      name: document.getElementById("fullName").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      username: document.getElementById("uname").value,
      password: document.getElementById("pass").value,
    };
    if (
        !user.name ||
        !user.phone ||
        !user.email ||
        !user.username ||
        !user.password
      ) {
        Swal.fire({
          title: "Thông báo",
          text: "Vui lòng nhập đủ thông tin",
          icon: "warning",
          timer: 2000,
          showConfirmButton: false,
        });
        return;
    }
    const formData = new FormData();
    Object.keys(user).forEach(key => formData.append(key, user[key]));
    
    if (avatar==null) {
        Swal.fire({
            title: "Thông báo",
            text: "Vui lòng chọn ảnh đại diện",
            icon: "warning",
            timer: 2000,
            showConfirmButton: false,
          });
    }else{
        formData.append('avatarPicture', avatar);

    }

    setIsUploading(true);
      addUser(formData).then((response)=>{
        setIsUploading(false);
        Swal.fire({
          title: "Thành công",
          text: response.data,
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
        navigate(`/admin/UserList`);

      }).catch((error) => {
        setIsUploading(false);
        Swal.fire({
          title: "Lỗi",
          text: error.response.data,
          icon: "error",
          timer: 2000,
          showConfirmButton: false,
        });
      });
  
  };
  return (
    <div className="wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Thêm người dùng mới</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <div className="form-group">
                  <div className="add-img-user profile-img-edit">
                    <img
                      className="profile-pic img-fluid imgUserCustom"
                      src={imageSrc}
                      alt="profile-pic"
                    />
                    <div className="p-image">
                      <label className="upload-button btn iq-bg-primary">
                        Ảnh đại diện
                        <input
                          className="img-upload"
                          style={{ display: "none" }}
                          type="file"
                          accept="image/*"
                          name="avatar"
                          onChange={handleImageChange}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="img-extension mt-3">
                    <div className="d-inline-block align-items-center">
                      <span>Only</span>
                      <label>.jpg</label>
                      <label>.png</label>
                      <label>.jpeg</label>
                      <span>allowed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Thông tin người dùng mới</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <div className="new-user-info">
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="fullName">Tên người dùng: </label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        name="fullName"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="phone">Số điện thoại:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <hr />
                  <h5 className="mb-3">Bảo mật</h5>
                  <div className="row">
                    <div className="form-group col-md-12">
                      <label htmlFor="uname">Tên tài khoản:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="uname"
                        name="userName"
                        placeholder="Tên tài khoản"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="pass">Mật khẩu:</label>
                      <input
                        type="password"
                        className="form-control"
                        id="pass"
                        name="password"
                        placeholder="Mật khẩu"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleClick}
                  >
                    Xác nhận
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default AddUserForm;
