import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons/css/boxicons.min.css";
import ChartMovie from "./ChartMovie";
import CostChart from "./CostChart";
import { API_GET_PATHS} from "./service/Constant";
import axios from "axios";

const Dashboard = () => {
  // const history = useHistory();
  const [data, setData] = useState({
    totalAccount: 0,
    totalMovie: 0,
    totalMoviePurchase: 0,
    blockAccount: 0,
    topPurchasedList: [],
    topPurchasedListYear: [],
    topNotPurchasedList: [],
    profit: 0,
  });
  const FetchCustomer=()=>{
    axios
      .get(API_GET_PATHS.GET_LIST_USER_BOUGHT_SERVICEPACK)
      .then((response) => {
        setData((prevData) => ({
          ...prevData,
          totalAccount: response.data.length,
        }));
      })
      .catch((error) => console.error("Error fetching user data:", error));
}
const FetchservicePack=()=>{
  axios
    .get(API_GET_PATHS.GET_ALL_SERVICEPACK)
    .then((response) => {
      setData((prevData) => ({
        ...prevData,
        totalMoviePurchase: response.data.length,
      }));
    })
    .catch((error) => console.error("Error fetching user data:", error));
}
const FetchMovie=()=>{
  axios
    .get(API_GET_PATHS.GET_ALL_MOVIE)
    .then((response) => {
      setData((prevData) => ({
        ...prevData,
        totalMovie: response.data.totalMovies,
      }));
    })
    .catch((error) => console.error("Error fetching user data:", error));
}

const FetchUserLocked=()=>{
  axios
    .get(API_GET_PATHS.GET_LIST_USER_LOCKED)
    .then((response) => {
      setData((prevData) => ({
        ...prevData,
        blockAccount: response.data.length,
      }));
    })
    .catch((error) => console.error("Error fetching user data:", error));
}
  const timer = setInterval(() => {
    const today = new Date();
    const days = [
      "Chủ Nhật",
      "Thứ Hai",
      "Thứ Ba",
      "Thứ Tư",
      "Thứ Năm",
      "Thứ Sáu",
      "Thứ Bảy",
    ];
    const day = days[today.getDay()];
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    const h = String(today.getHours()).padStart(2, "0");
    const m = String(today.getMinutes()).padStart(2, "0");
    const s = String(today.getSeconds()).padStart(2, "0");
    const nowTime = `${h} giờ ${m} phút ${s} giây`;
    const fullDate = `${day}, ${dd}/${mm}/${yyyy}`;
    const tmp = `<span class="date">${fullDate} - ${nowTime}</span>`;
    document.getElementById("clock").innerHTML = tmp;
  }, 1000);

 
  useEffect(() => {
    
    FetchCustomer();
    FetchservicePack();
    FetchMovie();
    FetchUserLocked();
    return () => clearInterval(timer);
  }, []);

  const handleRedirect = () => {
    alert("Redirecting...");
    // history.push('/new-path');  // Replace with the actual path
  };

  return (
    <div className="app sidebar-mini rtl">
      <div className="wrapper">
        <Sidebar />
        <Header />
        <div className="">
          <div className="row">
            <div className="col-md-12">
              <div className="app-title">
                <div id="clock"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <LeftPanel data={data} />
            <RightPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

const Sidebar = () => {
  return <div> {/* Sidebar content here */} </div>;
};

const Header = () => {
  return <div> {/* Header content here */} </div>;
};

const LeftPanel = ({ data }) => {
  return (
    <div className="col-md-12 col-lg-6">
      <div className="row">
        <StatisticsCard
          icon="bxs-user-account"
          title="Tổng khách hàng"
          value={`${data.totalAccount} khách hàng`}
          info="Tổng số khách hàng được quản lý."
        />
        <StatisticsCard
          icon="bxs-data"
          title="Tổng số phim"
          value={`${data.totalMovie} phim`}
          info="Tổng số phim được quản lý."
        />
        <StatisticsCard
          icon="bxs-shopping-bags"
          title="Tổng lượt mua gói"
          value={`${data.totalMoviePurchase} lượt mua`}
          info="Tổng số lượt mua gói."
        />
        <StatisticsCard
          icon="bxs-error-alt"
          title="Tài khoản bị khóa"
          value={`${data.blockAccount} tài khoản`}
          info="Tổng số tài khoản hiện tại đang bị khóa."
        />
        <DataTable
          title="Các gói được mua nhiều nhất trong tháng"
          data={data.topPurchasedList}
        />
        <DataTable
          title="Các gói được mua nhiều nhất trong trong năm"
          data={data.topPurchasedListYear}
        />
        <DataTable
          title="Các gói được mua ít nhất trong tháng"
          data={data.topNotPurchasedList}
        />
        <ProfitStatistics profit={data.profit} />
      </div>
    </div>
  );
};

const StatisticsCard = ({ icon, title, value, info }) => {
  return (
    <div className="col-md-6">
      <div className={`widget-small ${icon} coloured-icon`}>
        <i className={`icon bx ${icon} fa-3x`}></i>
        <div className="info">
          <h4>{title}</h4>
          <p>
            <b>{value}</b>
          </p>
          <p className="info-tong">{info}</p>
        </div>
      </div>
    </div>
  );
};

const DataTable = ({ title, data }) => {
  return (
    <div className="col-md-12">
      <div className="tile">
        <h3 className="tile-title">{title}</h3>
        <div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID Phim</th>
                <th>Tên Phim</th>
                <th>Thể loại</th>
                <th>Số lượng</th>
                <th>Giá</th>
              </tr>
            </thead>
            <tbody>
              {data.map((movie) => (
                <tr key={movie.id}>
                  <td>{movie.id}</td>
                  <td>{movie.name}</td>
                  <td>
                    {movie.genres.map((genre) => (
                      <div key={genre.id}>{genre.description}</div>
                    ))}
                  </td>
                  <td>
                    {new Intl.NumberFormat().format(movie.totalPurchased)}
                  </td>
                  <td>{new Intl.NumberFormat().format(movie.price)} VND</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const ProfitStatistics = ({ profit }) => {
  return (
    <div className="col-md-9">
      <div className="tile">
        <h3 className="tile-title">Thống kê thu chi của năm</h3>
        <CostChart />
        <div>
          Lợi nhuận thu được trong năm :
          <h5>{new Intl.NumberFormat().format(profit)} VND</h5>
        </div>
      </div>
    </div>
  );
};

const RightPanel = () => {
  return (
    <div className="col-md-12 col-lg-6">
      <div className="row">
        <div className="col-md-9">
          <div className="tile">
            <h4 className="tile-title">
              Top 5 các bộ phim được xem nhiều nhất
            </h4>
            {/* <iframe src="ChartMovie.js" width="100%" height="500" title="Chart Movie"></iframe> */}
            <ChartMovie />
          </div>
          <div className="col-md-9">
            <div className="tile">
              <h4 className="tile-title">Thống kê doanh thu</h4>
              <div className="embed-responsive embed-responsive-16by9">
                {/* <iframe src="revenue.jsp" width="100%" height="600" title="Revenue"></iframe> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
