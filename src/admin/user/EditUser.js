import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faLockOpen,
  faPlusCircle,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";

const EditUser = () => {
  const { userId } = useParams();
  const [account, setAccount] = useState({});
  const [roles, setRoles] = useState([]);
  const [unableRoles, setUnableRoles] = useState([]);

  useEffect(() => {
    // Fetch user data and roles from API
    fetchUserData();
    fetchRoles();
    // Initialize DataTables
    // $('#roleHaveTable').DataTable();
    // $('#roleMayHadTable').DataTable();
  }, []);

  const fetchUserData = () => {
    // Fetch user data by userId from API and update state
    // Example:
    // fetch(`/api/user/${userId}`)
    //   .then((response) => response.json())
    //   .then((data) => setAccount(data))
    //   .catch((error) => console.error("Error fetching user data:", error));
  };

  const fetchRoles = () => {
    // Fetch all roles from API and update state
    // Example:
    // fetch(`/api/roles`)
    //   .then((response) => response.json())
    //   .then((data) => setRoles(data))
    //   .catch((error) => console.error("Error fetching roles:", error));
  };

  const addRole = (roleId, roleName) => {
    // Add role to user by roleId using API
    // Example:
    // fetch(`/api/user/${userId}/roles`, {
    //   method: "POST",
    //   body: JSON.stringify({ roleId }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       return response.json();
    //     } else {
    //       throw new Error("Failed to add role to user");
    //     }
    //   })
    //   .then((data) => {
    //     // Update UI with added role
    //   })
    //   .catch((error) => console.error("Error adding role:", error));
  };

  const removeRole = (roleId) => {
    // Remove role from user by roleId using API
    // Example:
    // fetch(`/api/user/${userId}/roles/${roleId}`, {
    //   method: "DELETE",
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       // Update UI to remove role
    //     } else {
    //       throw new Error("Failed to remove role from user");
    //     }
    //   })
    //   .catch((error) => console.error("Error removing role:", error));
  };

  const handlePasswordChange = () => {
    // Handle password change logic
  };

  return (
    <div className="wrapper">
      {/* Page Content */}
      <div id="content-page" className="content-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="iq-card">
                <div className="iq-card-header d-flex justify-content-between">
                  <div className="iq-header-title">
                    <h4 className="card-title">Chỉnh sửa người dùng</h4>
                  </div>
                </div>
                <div className="iq-card-body p-0">
                  <div className="iq-edit-list">
                    <ul className="iq-edit-profile d-flex nav nav-pills">
                      <li className="col-md-3 p-0">
                        <a
                          className="nav-link active"
                          data-toggle="pill"
                          href="#personal-information"
                        >
                          Thông tin người dùng
                        </a>
                      </li>
                      <li className="col-md-3 p-0">
                        <a
                          className="nav-link"
                          data-toggle="pill"
                          href="#change-password"
                        >
                          Thay đổi mật khẩu
                        </a>
                      </li>
                      <li className="col-md-3 p-0">
                        <a
                          className="nav-link"
                          data-toggle="pill"
                          href="#change-roles"
                        >
                          Chỉnh sửa vai trò
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="iq-edit-list-data">
                <div className="tab-content">
                  <div
                    className="tab-pane fade active show"
                    id="personal-information"
                    role="tabpanel"
                  >
                    <div className="iq-card">
                      <div className="iq-card-header d-flex justify-content-between">
                        <div className="iq-header-title">
                          <h4 className="card-title">Thông tin cá nhân</h4>
                        </div>
                      </div>
                      <div className="iq-card-body">
                        <form
                          method="post"
                        //   action={SubmitEditAccount}
                          enctype="multipart/form-data"
                        //   onSubmit={onSubmit}
                        >
                          <div className="form-group row align-items-center">
                            <div className="col-md-12 add-img-user">
                              <div className="profile-img-edit">
                                <img
                                  className="profile-pic imgUserCustom"
                                //   src={accountAvatar}
                                  alt="profile-pic"
                                />
                                <div className="p-image">
                                  <i className="ri-pencil-line upload-button"></i>
                                  <input
                                    className="img-upload"
                                    type="file"
                                    accept="image/*"
                                    name="imageUser"
                                    // onChange={onChange}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className=" row align-items-center">
                            <div className="form-group col-sm-6">
                              <label htmlFor="fname">Tên người dùng :</label>
                              <input
                                type="text"
                                className="form-control"
                                id="fname"
                                value={account.fullName}
                                name="fullName"
                                required="required"
                                // onChange={onChange}
                              />
                            </div>
                            <div className="form-group col-sm-6">
                              <label htmlFor="email">Email :</label>
                              <input
                                type="text"
                                className="form-control"
                                id="email"
                                value={account.email}
                                name="email"
                                required="required"
                                // onChange={onChange}
                              />
                            </div>
                            <div className="form-group col-sm-6">
                              <label>Loại tài khoản :</label>
                              {/* <p>{account.getTypeAccount()}</p> */}
                              
                              <p></p>
                            </div>
                            <div className="form-group col-sm-6">
                              <label htmlFor="dob">Số điện thoại :</label>
                              <input
                                className="form-control"
                                id="dob"
                                value={account.phone}
                                name="phoneNumber"
                                required="required"
                                // onChange={onChange}
                              />
                            </div>
                          </div>
                          <div id="error" style={{ color: "red" }}>
                            {/* {error} */}
                          </div>
                          <button
                            type="submit"
                            className="btn btn-primary mr-2"
                          >
                            Xác nhận
                          </button>
                          <button type="reset" className="btn iq-bg-danger">
                            Hủy
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="change-password"
                    role="tabpanel"
                  >
                    <div className="iq-card">
                      <div className="iq-card-header d-flex justify-content-between">
                        <div className="iq-header-title">
                          <h4 className="card-title">Đổi mật khẩu</h4>
                        </div>
                      </div>
                      <div className="iq-card-body">
                        {/* Change password form */}
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="change-roles"
                    role="tabpanel"
                  >
                    <div className="iq-card">
                      <div className="iq-card-header d-flex justify-content-between">
                        <div className="iq-header-title">
                          <h4 className="card-title">Chỉnh sửa vai trò</h4>
                        </div>
                      </div>
                      <div className="iq-card-body">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-6">
                              <p>Vai trò đang có</p>
                              <table className="table" id="roleHaveTable">
                                <thead>
                                  <tr>
                                    <th></th>
                                    <th>Tên</th>
                                    <th>Tùy chọn</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {/* Add dynamic rows for roles */}
                                </tbody>
                              </table>
                            </div>
                            <div className="col-md-6">
                              <p>Vai trò có thể thêm</p>
                              <table className="table" id="roleMayHadTable">
                                <thead>
                                  <tr>
                                    <th></th>
                                    <th>Tên</th>
                                    <th>Tùy chỉnh</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {unableRoles.map((role) => (
                                    <tr key={role.id}>
                                      <td></td>
                                      <td>{role.name}</td>
                                      <td>
                                        <button
                                          className="btn iq-bg-info fa fa-plus-circle"
                                          onClick={() =>
                                            addRole(role.id, role.name)
                                          }
                                        ></button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
