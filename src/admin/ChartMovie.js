import React, { useEffect, useState } from "react";
import axios from "axios";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { fontSize } from "@mui/system";

const ChartMovie = () => {
  const [topViewMoviesMonth, setTopViewMoviesMonth] = useState([]);
  const [topViewMoviesYear, setTopViewMoviesYear] = useState([]);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        // Fetch data for the year chart
        const yearResponse = await axios.get("/admin/chartMovie");
        setTopViewMoviesYear(yearResponse.data);

        // Fetch data for the month chart
        const monthResponse = await axios.get("/admin/chartMovie", {
          params: { action: "month" },
        });
        setTopViewMoviesMonth(monthResponse.data);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchChartData();
  }, []);

  const drawChart = (title, seriesData) => {
    return {
      chart: {
        type: "pie",
      },
      title: {
        text: title
      },
      topViewMoviesMonth: {
        fontSize: '15px'
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.y}</b>",
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b>: {point.y}",
            distance: 0,
          },
        //   size: "40%", // Adjust the size of the pie chart here

        },

      },

      series: [
        {
          name: title,
          data: seriesData.map((item) => ({
            name: item.name,
            y: item.views,
          })),
          colors: [
            "rgba(255, 99, 132, 0.7)",
            "rgba(54, 162, 235, 0.7)",
            "rgba(255, 206, 86, 0.7)",
            "rgba(75, 192, 192, 0.7)",
            "rgba(153, 102, 255, 0.7)",
          ],
        },
      ],
    };
  };

  return (
    <div style={{ display: "flex", alignSelf: "auto"}}>
      <div style={{width: '300px'}}>
        <HighchartsReact 
          highcharts={Highcharts}
          options={drawChart(
            "Các bộ phim được xem nhiều nhất trong tháng",
            topViewMoviesMonth
          )}
        />
      </div>
      <div style={{width: '300px'}}>
        <HighchartsReact  
          highcharts={Highcharts}
          options={drawChart(
            "Các bộ phim được xem nhiều nhất trong năm",
            topViewMoviesYear
          )}
        />
      </div>
    </div>
  );
};

export default ChartMovie;
