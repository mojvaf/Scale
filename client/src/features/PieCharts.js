import styled from "styled-components";
import Heading from "../ui/Heading";
import { PieChart, ResponsiveContainer, Pie, Tooltip, Legend } from "recharts";
import Row from "../ui/Row";

const ChartBox = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 2.4rem 3.2rem;
  grid-column: 3 / span 2;

  & > *:first-child {
    margin-bottom: 1.6rem;
  }

  & .recharts-pie-label-text {
    font-weight: 600;
  }
`;

const fakeData = [
  { label: "Jan 09", b1: 480, priority: 1 },
  { label: "Jan 10", b1: 580, priority: 0.2 },
  { label: "Jan 11", b1: 550, priority: 0.4 },
  { label: "Jan 12", b1: 600, priority: 0.6 },
  { label: "Jan 13", b1: 700, priority: 0.7 },
  { label: "Jan 14", b1: 800, priority: 0.4 },
  { label: "Jan 15", b1: 700, priority: 0.1 },
  { label: "Jan 16", b1: 650, priority: 0.1 },
  { label: "Jan 17", b1: 600, priority: 0.5 },
  { label: "Jan 18", b1: 550, priority: 1 },
  { label: "Jan 19", b1: 700, priority: 0.6 },
  { label: "Jan 20", b1: 800, priority: 0.5 },
  { label: "Jan 21", b2: 700, priority: 0.5 },
  { label: "Jan 22", b2: 310, priority: 0.4 },
  { label: "Jan 23", b2: 950, priority: 0.4 },
  { label: "Jan 24", b2: 970, priority: 0.9 },
  { label: "Jan 25", b2: 900, priority: 0.4 },
  { label: "Jan 26", b2: 950, priority: 0.3 },
  { label: "Jan 27", b2: 850, priority: 0.2 },
  { label: "Jan 28", b2: 900, priority: 0.4 },
  { label: "Jan 29", b2: 800, priority: 0.1 },
  { label: "Jan 30", b2: 950, priority: 0.4 },
  { label: "Jan 31", b2: 110, priority: 0.5 },
  { label: "Feb 01", b2: 1200, priority: 0.6 },
  { label: "Feb 02", b3: 1250, priority: 0.7 },
  { label: "Feb 03", b3: 1400, priority: 0.1 },
  { label: "Feb 04", b3: 1500, priority: 0.4 },
  { label: "Feb 05", b3: 1400, priority: 0.5 },
  { label: "Feb 06", b3: 1450, priority: 0.3 },
];

export const PieCharts = () => {
  return (
    <ChartBox>
      <Heading as="h2">Charts from B group</Heading>
      <Row type="horizontal">
        <ResponsiveContainer height={300} width="50%">
          <PieChart>
            <Tooltip />
            <Pie
              data={fakeData}
              dataKey="b1"
              nameKey="priority"
              innerRadius={85}
              outerRadius={110}
              cy="50%"
              cx="40%"
              paddingAngle={3}
              fill="orange"
              label
            />
          </PieChart>
        </ResponsiveContainer>
        <ResponsiveContainer height={300} width="50%">
          <PieChart>
            <Tooltip />
            <Pie
              data={fakeData}
              dataKey="b2"
              nameKey="priority"
              innerRadius={85}
              outerRadius={110}
              cy="50%"
              cx="40%"
              paddingAngle={3}
              fill="blue"
              label
            />
          </PieChart>
        </ResponsiveContainer>
        <ResponsiveContainer height={300} width="50%">
          <PieChart>
            <Tooltip />
            <Pie
              data={fakeData}
              dataKey="b3"
              nameKey="priority"
              innerRadius={85}
              outerRadius={110}
              cy="50%"
              cx="40%"
              paddingAngle={3}
              fill="purple"
              label
            />
          </PieChart>
        </ResponsiveContainer>
      </Row>
    </ChartBox>
  );
};
