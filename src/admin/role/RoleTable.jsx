import React, { useEffect, useState } from "react";
import {
  getRoles,
  deleteUserRole,
  deleteRole,
  addRole,
} from "../../service/RoleServices";
import DataTable from "react-data-table-component";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import { useParams, Link } from "react-router-dom";
import Modal from "react-modal";

export const RoleTable = ({ idRole, title, data, description }) => {
  const [users, setUsers] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  useEffect(() => {
    const usersArray = Object.keys(data).map((key) => ({
      id: key,
      name: data[key],
    }));
    setUsers(usersArray);
  }, [data]);
  const handleRemoveRole = () => {
    Swal.fire({
      title: "Xác nhận!",
      text: `Bạn có đồng ý xóa không?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Đồng ý!",
      cancelButtonText: "Hủy bỏ",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteRole(idRole)
          .then((response) => {
            Swal.fire({
              title: "Đã xóa!",
              text: response.data,
              icon: "success",
              timer: 2000,
              showConfirmButton: false,
            });
            setIsDeleted(true);
          })
          .catch((error) => {
            Swal.fire({
              title: "Lỗi",
              text: error.response.data,
              icon: "error",
              timer: 2000,
              showConfirmButton: false,
            });
          });
      }
    });
  };
  const handleRemoveUserRole = (row) => {
    Swal.fire({
      title: "Xác nhận!",
      text: `Bạn có đồng ý xóakhông?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Đồng ý!",
      cancelButtonText: "Hủy bỏ",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUserRole(idRole, row.id)
          .then((response) => {
            Swal.fire({
              title: "Đã xóa!",
              text: response.data,
              icon: "success",
              timer: 2000,
              showConfirmButton: false,
            });
            setUsers((prevUsers) =>
              prevUsers.filter((user) => user.id !== row.id)
            );
          })
          .catch((error) => {
            Swal.fire({
              title: "Lỗi",
              text: error.response.data,
              icon: "error",
              timer: 2000,
              showConfirmButton: false,
            });
          });
      }
    });
  };
  const columns = [
    {
      id: 1,
      name: "No",
      selector: (row, index) => index + 1,
    },
    {
      id: 2,
      name: "Id User",
      selector: (row) => row.id,
      sortable: true,
      reorder: true,
    },
    {
      id: 3,
      name: "Username",
      selector: (row) => row.name,
      sortable: true,
      reorder: true,
    },
    {
      id: 4,
      name: "Option",
      cell: (row) => (
        <div style={{ textAlign: "center" }}>
          <span className="table-remove">
            <Button onClick={() => handleRemoveUserRole(row)}>
              <i className="btn iq-bg-danger fa fa-minus-circle"></i>
            </Button>
          </span>
        </div>
      ),
    },
  ];

  const customTitle = (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>{title}</h2>
      <h2>{description}</h2>
      <div>
        <Link
          className="btn iq-bg-info btn-rounded btn-sm my-0"
          to={`/admin/editRole/${idRole}`}
        >
          <i className="ri-pencil-line"></i>
        </Link>
        {title !== "USER" && (
          <Button
            className="btn iq-bg-danger btn-rounded btn-sm my-0"
            onClick={handleRemoveRole}
          >
            <i className="ri-delete-bin-line"></i>
          </Button>
        )}
      </div>
    </div>
  );

  if (isDeleted) return null;
  return (
    <div style={{ border: "3px solid #19e0e0", margin: "30px 0px" }}>
      <DataTable
        title={customTitle}
        columns={columns}
        defaultSortFieldId={1}
        sortIcon={<ArrowDownward />}
        pagination
        data={Array.isArray(users) ? users : []}
      />
    </div>
  );
};
