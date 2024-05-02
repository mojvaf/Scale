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

const fakeData = [
  { label: "Jan 09", a1: 480, priority: 1 },
  { label: "Jan 10", a1: 580, priority: 0.2 },
  { label: "Jan 11", a1: 550, priority: 0.4 },
  { label: "Jan 12", a1: 600, priority: 0.6 },
  { label: "Jan 13", a1: 700, priority: 0.7 },
  { label: "Jan 14", a1: 800, priority: 0.4 },
  { label: "Jan 15", a1: 700, priority: 0.2 },
  { label: "Jan 16", a1: 650, priority: 0.4 },
  { label: "Jan 17", a1: 600, priority: 0.5 },
  { label: "Jan 18", a1: 550, priority: 1 },
  { label: "Jan 19", a1: 700, priority: 0.6 },
  { label: "Jan 20", a1: 800, priority: 0.5 },
  { label: "Jan 21", a2: 700, priority: 0.5 },
  { label: "Jan 22", a2: 310, priority: 0.4 },
  { label: "Jan 23", a2: 950, priority: 0.4 },
  { label: "Jan 24", a2: 970, priority: 0.9 },
  { label: "Jan 25", a2: 900, priority: 0.4 },
  { label: "Jan 26", a2: 950, priority: 0.3 },
  { label: "Jan 27", a2: 850, priority: 0.2 },
  { label: "Jan 28", a2: 900, priority: 0.4 },
  { label: "Jan 29", a2: 800, priority: 0.1 },
  { label: "Jan 30", a2: 950, priority: 0.4 },
  { label: "Jan 31", a2: 110, priority: 0.5 },
  { label: "Feb 01", a2: 1200, priority: 0.6 },
  { label: "Feb 02", a3: 1250, priority: 0.7 },
  { label: "Feb 03", a3: 1400, priority: 0.1 },
  { label: "Feb 04", a3: 1500, priority: 0.4 },
  { label: "Feb 05", a3: 1400, priority: 0.5 },
  { label: "Feb 06", a3: 1450, priority: 0.3 },
];

function LineChart() {
  const renderLegendText = (value, entry) => {
    return <span>{value}</span>;
  };
  return (
    <StyledSalesChart>
      <Heading as="h2">Charts from A group</Heading>
      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={fakeData}>
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
