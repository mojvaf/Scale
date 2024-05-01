import styled from "styled-components";
import { useForm } from "react-hook-form";
import Input from "../ui/Input";
import Form from "../ui/Form";
import Button from "../ui/Button";
import { useCreateData } from "./useCreateData";

const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateDataForm() {
  const { register, handleSubmit, reset, formState, getValues } = useForm();
  const { errors } = formState;

  const { isCreating, createData } = useCreateData();

  function onSubmit(data) {
    createData(
      { newCabinData: { ...data } /*id: editId */ },
      {
        onSuccess: (data) => {
          reset();
        },
      }
    );
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow error={errors?.name?.message}>
        <Label htmlFor="name">Data name</Label>
        <Input
          type="text"
          id="name"
          disabled={isCreating}
          {...register("name", {
            required: "This field is required",
          })}
        />
        {errors && <Error>{errors}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="maxCapacity">A.1</Label>
        <Input
          type="number"
          id="A.1"
          {...register("A.1", {
            required: "This field is required",
            validate: (value) =>
              value < getValues() || "Number should be bigger than zero",
          })}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="regularPrice">A.2</Label>
        <Input
          type="number"
          id="A.2"
          {...register("A.2", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="discount">A.3</Label>
        <Input
          type="number"
          id="A.3"
          {...register("A.3", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        <Button disabled={isCreating}>Add Data</Button>
      </FormRow>
    </Form>
  );
}

export default CreateDataForm;
