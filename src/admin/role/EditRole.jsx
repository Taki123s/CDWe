import React from "react";

export const EditRole = () => {
  return (
    <>
      <div class="row">
        <div class="col-lg-9">
          <div class="iq-card">
            <div class="iq-card-header d-flex justify-content-between">
              <div class="iq-header-title">
                <h4 class="card-title">Chỉnh sửa quyền hạn</h4>
              </div>
            </div>
            <div class="iq-card-body">
              <form>
                <div class="new-user-info">
                  <div class="row">
                    <div class="form-group col-md-6">
                      <h3>
                        {/* Vai trò đang sửa : ${requestScope.role.description}{" "} */}
                      </h3>
                    </div>
                    <div class="container">
                      <div class="row">
                        <div class="col-md-6">
                          <p>Quyền hạn đang có</p>
                          <table class="table" id="permissionHaveTable">
                            <thead>
                              <tr>
                                <th></th>
                                <th>Tên</th>
                                <th>Tùy chọn</th>
                              </tr>
                            </thead>
                            <tbody>
                              {/* <c:forEach
                                var="pms"
                                items="${requestScope.role.permissions}"
                              >
                                <tr>
                                  <td></td>
                                  <td>${pms.name}</td>
                                  <td>
                                    <button
                                      type="button"
                                      class="btn iq-bg-danger btn-rounded btn-sm my-0"
                                    >
                                      <i
                                        class="ri-delete-bin-line"
                                        onclick="removeRole(this,${pms.id},`${pms.name}`)"
                                      ></i>
                                    </button>
                                    <input
                                      type="text"
                                      name="idPermission"
                                      value="${pms.id}"
                                      style="display: none"
                                    />
                                  </td>
                                </tr>
                              </c:forEach> */}
                            </tbody>
                          </table>
                        </div>
                        <div class="col-md-6">
                          <p>Quyền hạn có thể có</p>
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
                  <button
                    type="button"
                    class="btn btn-primary"
                    onclick="submitEdit(this)"
                  >
                    Chỉnh sửa vai trò
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
