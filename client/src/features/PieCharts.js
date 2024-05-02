import styled from "styled-components";
import Heading from "../ui/Heading";
import { PieChart, ResponsiveContainer, Pie, Tooltip } from "recharts";
import Row from "../ui/Row";
import Spinner from "../ui/Spinner";

const ChartBox = styled.div`
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

const Errors = styled.span`
  font-size: 1.4rem;
  color: var(--color-grey-0);
  background-color: var(--color-red-700);
  padding: 2rem;
  margin: 2rem;
`;

export const PieCharts = ({ data, isLoading, error }) => {
  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Errors>Group B: {error.message}</Errors>;
  }

  return (
    <ChartBox>
      <Heading as="h2">Charts from group B</Heading>
      <Row type="horizontal">
        <ResponsiveContainer height={300} width="50%">
          <PieChart>
            <Tooltip />
            <Pie
              data={data}
              dataKey="a1"
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
              data={data}
              dataKey="a2"
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
              data={data}
              dataKey="a3"
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
