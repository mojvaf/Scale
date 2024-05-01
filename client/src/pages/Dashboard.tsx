import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
//import { getCabins } from "../services/apiCabins";
import Spinner from "../ui/Spinner";
import CreateDataForm from "../features/CreateDataForm";

const Dashboard = () => {
  const {
    isLoading,
    data: getData,
    error,
  } = useQuery({
    queryKey: ["data"],
    //queryFn: getCabins,
  });

  if (isLoading) return <Spinner />;

  return (
    <div>
      <CreateDataForm />
    </div>
  );
};

export default Dashboard;
