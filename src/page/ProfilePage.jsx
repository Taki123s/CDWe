import React, { useState, useEffect } from "react";

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBBtn,MDBInput
} from "mdb-react-ui-kit";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
function ProfilePage() {
  const [account, setAccount] = useState("");
  var token = Cookies.get("jwt_token");
  const user = typeof token === "undefined" ? null : jwtDecode(token);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user) {
          const response = await axios.get(
            `http://localhost:8080/account/view/${user.idUser}`
          );
          const data = response.data;
          console.log(data);
          setAccount(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once after the initial render

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a className="text-dark" href="#">
                  Home
                </a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a className="text-dark" href="#">
                  User
                </a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem
                active
                className="text-primary"
              >
                User Profile
              </MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow className="">
          <MDBCardImage
            src={account.avatarPicture}
            alt="avatar"
            className="rounded-circle"
            style={{ width: "150px", height: "150px   " }}
            fluid
          />
          {/* </MDBCardBody> */}
          {/* </MDBCard> */}
          <MDBCol className="">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                
                    <MDBInput type="text"  className="text-dark" value={account.fullName} noBorder >
                    </MDBInput >
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBInput  type="text"  className="text-dark" value={account.email} noBorder >
                    </MDBInput >
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {account.phone}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />

                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol>
            <MDBBtn>Đổi mật khẩu</MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
export default ProfilePage;
