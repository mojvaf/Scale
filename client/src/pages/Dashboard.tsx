import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
//import { getCabins } from "../services/apiCabins";
import Spinner from "../ui/Spinner";
import CreateDataForm from "../features/CreateDataForm";

const Dashboard = () => {
  const [show, setShow] = useState(false);

  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    //queryFn: getCabins,
  });

  if (isLoading) return <Spinner />;

  return (
    <div>
      <button onClick={() => setShow((show) => !show)}>Add</button>
      {show && <CreateDataForm />}
    </div>
  );
};

export default Dashboard;
