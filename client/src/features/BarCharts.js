import React from "react";
import styled from "styled-components";
import {
  BarChart,
  ResponsiveContainer,
  Bar,
  Rectangle,
  Tooltip,
  XAxis,
} from "recharts";
import Spinner from "../ui/Spinner";
import Heading from "../ui/Heading";

const StyledSalesChart = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 3.2rem;
  grid-column: 1 / -1;
`;

const Errors = styled.span`
  font-size: 1.4rem;
  color: var(--color-grey-0);
  background-color: var(--color-red-700);
  padding: 2rem;
  margin: 2rem;
`;

const BarCharts = ({ data, isLoading, error }) => {
  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Errors>Group C: {error.message}</Errors>;
  }

  return (
    <StyledSalesChart>
      <Heading as="h2">Chart from group C</Heading>
      <ResponsiveContainer height={300} width="100%">
        <BarChart data={data}>
          <Tooltip />
          <XAxis dataKey="label" />
          <Bar
            dataKey="a1"
            fill="orange"
            activeBar={<Rectangle fill="green" stroke="blue" />}
          />
          <Bar
            dataKey="a2"
            fill="blue"
            activeBar={<Rectangle fill="green" stroke="blue" />}
          />
          <Bar
            dataKey="a3"
            fill="purple"
            activeBar={<Rectangle fill="green" stroke="blue" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </StyledSalesChart>
  );
};

export default BarCharts;
