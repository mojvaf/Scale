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

import Heading from "../ui/Heading";

const StyledSalesChart = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 3.2rem;
  grid-column: 1 / -1;
`;

const fakeData = [
  { label: "Jan 09", c1: 480, priority: 1 },
  { label: "Jan 10", c1: 580, priority: 0.2 },
  { label: "Jan 11", c1: 550, priority: 0.4 },
  { label: "Jan 12", c1: 600, priority: 0.6 },
  { label: "Jan 13", c1: 700, priority: 0.7 },
  { label: "Jan 14", c1: 800, priority: 0.4 },
  { label: "Jan 15", c1: 700, priority: 0.2 },
  { label: "Jan 16", c1: 650, priority: 0.4 },
  { label: "Jan 17", c1: 600, priority: 0.5 },
  { label: "Jan 18", c1: 550, priority: 1 },
  { label: "Jan 19", c1: 700, priority: 0.6 },
  { label: "Jan 20", c1: 800, priority: 0.5 },
  { label: "Jan 21", c2: 700, priority: 0.5 },
  { label: "Jan 22", c2: 310, priority: 0.4 },
  { label: "Jan 23", c2: 950, priority: 0.4 },
  { label: "Jan 24", c2: 970, priority: 0.9 },
  { label: "Jan 25", c2: 900, priority: 0.4 },
  { label: "Jan 26", c2: 950, priority: 0.3 },
  { label: "Jan 27", c2: 850, priority: 0.2 },
  { label: "Jan 28", c2: 900, priority: 0.4 },
  { label: "Jan 29", c2: 800, priority: 0.1 },
  { label: "Jan 30", c2: 950, priority: 0.4 },
  { label: "Jan 31", c2: 110, priority: 0.5 },
  { label: "Feb 01", c2: 1200, priority: 0.6 },
  { label: "Feb 02", c3: 1250, priority: 0.7 },
  { label: "Feb 03", c3: 1400, priority: 0.1 },
  { label: "Feb 04", c3: 1500, priority: 0.4 },
  { label: "Feb 05", c3: 1400, priority: 0.5 },
  { label: "Feb 06", c3: 1450, priority: 0.3 },
];

const BarCharts = () => {
  return (
    <StyledSalesChart>
      <Heading as="h2">Charts from C group</Heading>
      <ResponsiveContainer height={300} width="100%">
        <BarChart data={fakeData}>
          <XAxis dataKey="label" />
          <Bar
            dataKey="c1"
            fill="orange"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="c2"
            fill="blue"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="c3"
            fill="purple"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </StyledSalesChart>
  );
};

export default BarCharts;
