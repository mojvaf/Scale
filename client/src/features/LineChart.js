import styled from "styled-components";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import Heading from "../ui/Heading";
import Spinner from "../ui/Spinner";

const StyledSalesChart = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  grid-column: 1 / -1;
`;

const Errors = styled.span`
  font-size: 1.4rem;
  color: var(--color-grey-0);
  background-color: var(--color-red-700);
  padding: 2rem;
  margin: 2rem;
`;

function LineChart({ data, isLoading, error }) {
  const renderLegendText = (value, entry) => {
    return <span>{value}</span>;
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Errors>Group A: {error.message}</Errors>;
  }

  return (
    <StyledSalesChart>
      <Heading as="h2">Chart from group A</Heading>
      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={data}>
          <XAxis dataKey="label" />

          <CartesianGrid />
          <Tooltip />
          <Legend formatter={renderLegendText} />
          <Area dataKey="a1" type="monotone" stroke="orange" fill="orange" />
          <Area dataKey="a2" type="monotone" stroke="blue" fill="blue" />
          <Area dataKey="a3" type="monotone" stroke="purple" fill="purple" />
        </AreaChart>
      </ResponsiveContainer>
    </StyledSalesChart>
  );
}

export default LineChart;
