import React, { useEffect, useState } from "react";
export const AddMovie = () => {
  const [avatar, setAvatar] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    totalChapters: "",
    vietnameseDescriptions: "",
    englishDescriptions: "",
    producer: "",
    seriesDescriptions: "",
    genres: [],
  });

  return (
    <div>
      <h1>Nhập phim mới</h1>
      <form className="needs-validation">
        <div className="row">
          <div className="col-lg-3">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Chọn ảnh đại diện</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <div className="form-group">
                  <div className="add-img-user profile-img-edit">
                    <div className="p-image">
                      <div id="image-render-area"></div>
                      <label className="upload-button btn iq-bg-primary">
                        Ảnh đại diện
                        <input
                          className="file-upload"
                          type="file"
                          accept="image/*"
                          name="avatar"
                          id="uploadImage"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="img-extension mt-3">
                    <div className="d-inline-block align-items-center">
                      <span>Chấp nhận</span> <label href="">.jpg</label>{" "}
                      <label>.png</label> <label>.jpeg</label>
                      <span></span>
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
                  <h4 className="card-title">Thông tin phim mới</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <div className="new-user-info">
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Tên phim: </label>{" "}
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Name"
                        required
                      />
                    </div>

                    <div className="form-group col-md-6">
                      <label htmlFor="totalEpisode">Tổng số tập:</label>{" "}
                      <input
                        type="number"
                        className="form-control"
                        id="totalEpisode"
                        name="totalEpisode"
                        placeholder="Total Episode"
                        required
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="descriptionVN">Mô tả tiếng Việt:</label>{" "}
                      <input
                        type="text"
                        className="form-control"
                        id="descriptionVN"
                        name="descriptionVN"
                        placeholder="Description VN"
                        required
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="descriptionEN">Mô tả tiếng Anh:</label>{" "}
                      <input
                        type="text"
                        className="form-control"
                        id="descriptionEN"
                        name="descriptionEN"
                        placeholder="Description EN"
                        required
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="producer">Nhà sản xuất:</label>{" "}
                      <input
                        type="text"
                        className="form-control"
                        id="producer"
                        name="producer"
                        placeholder="producer"
                        required
                      />
                    </div>
                  </div>
                  <hr />
                  <h5 className="mb-3">Mở rộng</h5>
                  <div className="row">
                    <div className="form-group col-md-12">
                      <div id="pickedGenre"></div>
                      <div id="GenresRender">
                        <label>Chọn thể loại</label>
                        {/* <c:forEach
                          var="genre"
                          items="${requestScope.listGenre}"
                        >
                          <input
                            type="checkbox"
                            name="genreValue"
                            value="${genre.id}"
                          />
                          ${genre.description}
                        </c:forEach> */}
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    id="addMovieBt"
                  >
                    Xác nhận
                  </button>
                </div>
                {/* <p>${requestScope.error}</p> */}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
