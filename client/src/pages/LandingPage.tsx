import React from "react";
import Header from "../ui/Header";
import styled from "styled-components";
import Heading from "../ui/Heading";

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

const LandingPage = () => {
  return (
    <Homepage>
      <Header />
      <HomepageSection>
        <Heading as="h1">Scaling Research Data Management</Heading>
        <Heading as="h3">
          Accelerate your research data management by choosing LinkAhead, our
          next generation and open source software solution for your data needs.
        </Heading>
      </HomepageSection>
    </Homepage>
  );
};

export default LandingPage;
