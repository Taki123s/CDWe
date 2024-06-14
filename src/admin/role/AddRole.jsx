import React from "react";

export const AddRole = () => {
  return (
    <>
      <h1>Thêm vai trò mới</h1>
      <form method="post" action="${addRole}">
        <div class="row">
          <div class="col-lg-9">
            <div class="iq-card">
              <div class="iq-card-header d-flex justify-content-between">
                <div class="iq-header-title">
                  <h4 class="card-title">Thông tin vai trò mới</h4>
                </div>
              </div>
              <div class="iq-card-body">
                <div class="new-user-info">
                  <div class="row">
                    <div class="form-group col-md-6">
                      <label for="name">Tên vai trò: </label>{" "}
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        name="nameRole"
                        placeholder="Name Role"
                      />
                    </div>
                    <div class="container">
                      <div class="row">
                        <div class="col-md-6">
                          <p>Quyền hạn cho phép</p>
                          <table class="table" id="permissionHaveTable">
                            <thead>
                              <tr>
                                <th></th>
                                <th>Tên</th>
                                <th>Tùy chọn</th>
                              </tr>
                            </thead>
                            <tbody></tbody>
                          </table>
                        </div>
                        <div class="col-md-6">
                          <p>Quyền hạn có thể thêm cho vai trò</p>
                          <table class="table" id="permissionMayHadTable">
                            <thead>
                              <tr>
                                <th></th>
                                <th>Tên</th>
                                <th>Tùy chọn</th>
                              </tr>
                            </thead>
                            <tbody>
                              {/* <c:forEach
                                var="permission"
                                items="${requestScope.enablePermission}"
                              >
                                <tr>
                                  <td></td>
                                  <td>${permission.name}</td>
                                  <td>
                                    <button
                                      class="btn iq-bg-info fa fa-plus-circle"
                                      type="button"
                                      onclick="addToRole(this,${permission.id},`${permission.name}`)"
                                    ></button>
                                  </td>
                                </tr>
                              </c:forEach> */}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Xác nhận
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
