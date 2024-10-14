// src/components/ChartDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Line } from "react-chartjs-2";
import ChartOverview from "./ChartOverview.jsx";
import "./chartDetails.css";
import { charts } from "../chartData.jsx";
import moment from "moment";

const ChartDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [timeSpent, setTimeSpent] = useState(
    parseInt(localStorage.getItem(`chart-${id}-time`)) || 0
  );
  const [viewCount, setViewCount] = useState(() => {
    const storedCount = localStorage.getItem(`chart-${id}-view-count`);
    return storedCount ? parseInt(storedCount, 10) : 0;
  });

  useEffect(() => {
    const storedTime = localStorage.getItem(`chart-${id}-time`);

    if (storedTime) {
      setTimeSpent(parseInt(storedTime, 10));
    }

    const intervalId = setInterval(() => {
      setTimeSpent((prevTime) => prevTime + 1);
    }, 1000);

    localStorage.setItem(`chart-${id}-time`, timeSpent);
    // Cleanup function to run when the component unmounts
    return () => {
      clearInterval(intervalId);

      localStorage.setItem(`chart-${id}-time`, timeSpent + 1);
    };
  }, [id, timeSpent]);

  useEffect(() => {
    const totalViewCount = viewCount + 1;
    setViewCount(totalViewCount);
    localStorage.setItem(`chart-${id}-view-count`, totalViewCount);
  }, [id]);

  const formattedTime = moment.utc(timeSpent * 1000).format("m [min] s [sec]");

  const averageSessionTime = viewCount > 0 ? timeSpent / viewCount : 0;
  const formattedAverageTime = moment
    .utc(averageSessionTime * 1000)
    .format("m [min] s [sec]");

  return (
    <div className="chart-details-component">
      <div className="chart-detail-body">
        <div className="user-details">
          <h2 style={{ "padding-bottom": "10px" }}>
            {charts.map((data) => {
              if (data.id == id) return data.subtitle;
            })}
          </h2>
          <p>
            <strong>Total View Time:</strong> {formattedTime}
          </p>
          <p>
            <strong>View Count:</strong> {viewCount}
          </p>
          <p>
            <strong>Average Session time per viewing:</strong>{" "}
            {formattedAverageTime}
          </p>
        </div>
        <ChartOverview id={id} />
        <div className="chart-detail-footer">
          <button className="back-btn" onClick={() => navigate("/")}>
            Back to Cards
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChartDetails;
