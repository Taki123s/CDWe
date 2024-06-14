import React, { useEffect, useState } from "react";
import { getRoles } from "../../service/RoleServices";
import DataTable from "react-data-table-component";
export const RoleManager = () => {
  const [roles, setRoles] = useState([]);
  useEffect(() => {
    getRoles()
      .then((response) => {
        setRoles(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const columns = [
    {
      id: 1,
      name: "No",
      selector: (row, index) => index + 1,
      reorder: true,
    },
    {
      id:2,
      name:"Id User",
      selector:(row)=>row.key      
    },

  ];
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="iq-card">
            <div className="iq-card-header d-flex justify-content-between">
              <div className="iq-header-title">
                <h4 className="card-title">Danh sách vai trò</h4>
              </div>
            </div>
            <div className="iq-card-body">
              {roles.map((item) => {
                return (
                  <>
                    <div className="table-responsive">
                      <h2>{item.name}</h2>

                      <button
                        type="submit"
                        className="btn iq-bg-warning btn-rounded btn-sm my-0"
                      >
                        <i className="ri-pencil-line"></i>
                      </button>
                      <button
                        type="button"
                        onclick="confirmRemove(this)"
                        className="btn iq-bg-warning btn-rounded btn-sm my-0"
                      >
                        <i className="ri-delete-bin-line"></i>
                      </button>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
