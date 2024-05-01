import styled from "styled-components";
import Heading from "../ui/Heading";
import RegisterForm from "../features/RegisterForm";

const RegisterLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-100);
`;

function Login() {
  return (
    <RegisterLayout>
      <Heading as="h4">Register</Heading>
      <RegisterForm />
    </RegisterLayout>
  );
}

export default Login;
