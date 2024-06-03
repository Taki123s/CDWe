import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faLockOpen, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'; // Import Font Awesome icons

const UserList = () => {
  // State for list of accounts
  const [listAccount, setListAccount] = useState([]);

  // Simulated data for demonstration
  useEffect(() => {
    // Simulated data
    const simulatedData = [
      { id: 1, avatar: 'avatar1.jpg', fullName: 'John Doe', userName: 'johndoe', phone: '123456789', email: 'john@example.com', typeAccount: 'Regular', roles: [{ description: 'Role 1' }, { description: 'Role 2' }], isActive: 1, joinDate: '2024-06-01' },
      { id: 2, avatar: 'avatar2.jpg', fullName: 'Jane Doe', userName: 'janedoe', phone: '987654321', email: 'jane@example.com', typeAccount: 'Admin', roles: [{ description: 'Admin Role' }], isActive: 0, joinDate: '2024-06-02' }
    ];

    // Set simulated data to state
    setListAccount(simulatedData);

    // Initialize DataTable
    // $('#user-list-table').DataTable({
    //   searching: true,
    //   sorting: true,
    //   dom: 'Bfrtip',
    //   buttons: [
    //     { extend: 'copy', className: 'btn btn-outline-primary' },
    //     { extend: 'csv', className: 'btn btn-outline-info' },
    //     { extend: 'excel', className: 'btn btn-outline-success' },
    //     { extend: 'pdf', className: 'btn btn-outline-warning' },
    //     { extend: 'print', className: 'btn btn-outline-danger' }
    //   ]
    // });
  }, []);

  // Event handlers
  const handleRemove = (id) => {
    // Handle remove action
    console.log('Remove user with id:', id);
  };

  const handleLock = (id) => {
    // Handle lock action
    console.log('Lock user with id:', id);
  };

  const handleUnlock = (id) => {
    // Handle unlock action
    console.log('Unlock user with id:', id);
  };

  return (
    <div id="content-page" class="content-page">
 <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="iq-card">
            <div className="iq-card-header d-flex justify-content-between">
              <div className="iq-header-title">
                <h4 className="card-title">Danh sách người dùng</h4>
              </div>
            </div>
            <div className="iq-card-body">
              <div className="table-responsive">
                <table id="user-list-table" className="table table-striped table-bordered mt-4" style={{ textAlign: 'center' }}>
                  <thead>
                    <tr>
                      <th>Ảnh đại diện</th>
                      <th>Tên người dùng</th>
                      <th>Tên tài khoản</th>
                      <th>Số điện thoại</th>
                      <th>Email</th>
                      <th>Loại tài khoản</th>
                      <th>Vai trò</th>
                      <th>Trạng thái</th>
                      <th>Ngày đăng ký</th>
                      <th>Tùy chỉnh</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listAccount.map((item) => (
                      <tr key={item.id}>
                        <td className="text-center"><img className="rounded img-fluid avatar-40" src={item.avatar} alt="profile" /></td>
                        <td>{item.fullName}</td>
                        <td>{item.userName}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.typeAccount}</td>
                        <td>
                          {item.roles.map((role, index) => (
                            <div key={index}>
                              <p>{role.description}</p>
                            </div>
                          ))}
                        </td>
                        <td>
                          <div id={`renderIsActive${item.id}`}>
                            <span className={`badge ${item.isActive === 1 ? 'iq-bg-success' : 'iq-bg-danger'}`}>{item.isActive === 1 ? 'Active' : 'Inactive'}</span>
                          </div>
                        </td>
                        <td>{item.joinDate}</td>
                        <td>
                          <div className="flex align-items-center list-user-action" style={{ float: 'left !important' }}>
                            {item.isActive === 0 ? (
                              <>
                                <button className="btn text-success" onClick={() => handleUnlock(item.id)}><FontAwesomeIcon icon={faLockOpen} /></button>
                                <button className="btn text-danger" onClick={() => handleLock(item.id)} style={{ display: 'none' }}><FontAwesomeIcon icon={faLock} /></button>
                              </>
                            ) : (
                              <>
                                <button className="btn text-success" onClick={() => handleUnlock(item.id)} style={{ display: 'none' }}><FontAwesomeIcon icon={faLockOpen} /></button>
                                <button className="btn text-danger" onClick={() => handleLock(item.id)}><FontAwesomeIcon icon={faLock} /></button>
                              </>
                            )}
                            <button className="btn text-primary" onClick={() => console.log('Edit user', item.id)}><FontAwesomeIcon icon={faEdit} /></button>
                            <button className="btn text-danger" onClick={() => handleRemove(item.id)}><FontAwesomeIcon icon={faTrash} /></button>
                          </div>
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
   
  );
};

export default UserList;
