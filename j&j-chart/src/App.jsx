// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from "./components/Card.jsx";
import ChartDetails from "./components/ChartDetails.jsx";
import "./App.css"; // For styling
import { charts } from "./chartData.jsx";

const App = () => {
  return (
    <Router>
      <div className="chart-detail-title">
        <h2>J&J Analysis Dashboard</h2>
      </div>
      {/* <h3 style={{ color: "red" }}>Application is on Hold</h3> */}
      {/* <div className="blur"> */}
      <Routes>
        <Route
          path="/"
          element={
            <div className="card-container">
              {charts.map((chart) => (
                <Card
                  key={chart.id}
                  title={chart.title}
                  subtitle={chart.subtitle}
                  {...chart}
                />
              ))}
            </div>
          }
        />
        <Route path="/chart/:id" element={<ChartDetails />} />
      </Routes>
      {/* </div> */}
    </Router>
  );
};

export default App;
