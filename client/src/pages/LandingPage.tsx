import React from "react";
import Header from "../ui/Header";
import styled from "styled-components";

const Homepage = styled.div`
  height: calc(100vh - 6rem);
  margin: 2.5rem;
  background-image: linear-gradient(
      rgba(36, 42, 46, 0.8),
      rgba(36, 42, 46, 0.8)
    ),
    url("../an.png");
  background-size: cover;
  background-position: center;
  padding: 2.5rem 5rem;
`;

const HomepageSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 85%;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  text-align: center;
`;

const HomepageHeading1 = styled.h1`
  font-size: 4.5rem;
  color: var(--color-brand-50);
  line-height: 1.3;
`;

const HomepageHeading2 = styled.h2`
  width: 60%;
  color: var(--color-brand-50);
  font-size: 1.9rem;
  margin-bottom: 2.5rem;
`;

const LandingPage = () => {
  return (
    <Homepage>
      <Header />
      <HomepageSection>
        <HomepageHeading1>Scaling Research Data Management</HomepageHeading1>
        <HomepageHeading2>
          Accelerate your research data management by choosing LinkAhead, our
          next generation and open source software solution for your data needs.
        </HomepageHeading2>
      </HomepageSection>
    </Homepage>
  );
};

export default LandingPage;
