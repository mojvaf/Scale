import React, { useState, useEffect } from "react";
import CreateDataForm from "../features/CreateDataForm";
import LineChart from "../features/LineChart";
import { PieCharts } from "../features/PieCharts";
import BarCharts from "../features/BarCharts";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/data/analysis/"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error("Error fetching data");
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <CreateDataForm />
      <LineChart data={data} isLoading={isLoading} error={error} />
      <PieCharts data={data} isLoading={isLoading} error={error} />
      <BarCharts data={data} isLoading={isLoading} error={error} />
    </div>
  );
};

export default Dashboard;
