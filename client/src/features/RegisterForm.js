import { useState } from "react";
import Button from "../ui/Button";
import Form from "../ui/Form";
import Input from "../ui/Input";
import FormRowVertical from "../ui/FormRowVertical";
import { useRegister } from "./useRegister";
import SpinnerMini from "../ui/SpinnerMini";
import styled from "styled-components";
import Row from "../ui/Row";

const CheckboxInput = styled.input.attrs({ type: "checkbox" })`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
`;

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState(false);
  const [user, setUser] = useState(false);
  const { register, isLoading } = useRegister();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    register(
      { name, email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
          setName("");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Name">
        <Input
          type="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical>
        <Button size="large" disabled={isLoading}>
          {!isLoading ? "Register" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </Form>
  );
};

export default RegisterForm;
