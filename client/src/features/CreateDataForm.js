import styled from "styled-components";
import { Controller, useForm } from "react-hook-form";
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

const Select = styled.select`
  padding: 1rem;
  font-size: 1.5;
  border: 1px solid var(--color-brand-50);
  border-radius: 5px;
  outline: none;
  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

function CreateDataForm() {
  const { register, handleSubmit, reset, formState, getValues, control } =
    useForm();
  const { errors } = formState;

  const { isCreating, create } = useCreateData();

  function onSubmit(data) {
    create(
      { newCabinData: { ...data } },
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
        <Label htmlFor="name">Analyses Type </Label>
        <Select
          {...register("type", {
            required: "This field is required",
          })}
        >
          <option>select a type</option>
          <option value="a">Analyses A</option>
          <option value="b">Analyses B</option>
          <option value="c">Analyses C</option>
        </Select>
      </FormRow>
      <Controller
        control={control}
        name="type"
        render={({ field }) => {
          if (field.value === "a")
            return (
              <>
                <FormRow>
                  <Label htmlFor="maxCapacity">A.1</Label>
                  <Input
                    type="number"
                    id="A.1"
                    {...register("A.1", {
                      required: "This field is required",
                      validate: (value) =>
                        value < getValues() ||
                        "Number should be bigger than zero",
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
              </>
            );
          if (field.value === "b")
            return (
              <>
                <FormRow>
                  <Label htmlFor="maxCapacity">B.1</Label>
                  <Input
                    type="number"
                    id="B.1"
                    {...register("B.1", {
                      required: "This field is required",
                      validate: (value) =>
                        value < getValues() ||
                        "Number should be bigger than zero",
                    })}
                  />
                </FormRow>

                <FormRow>
                  <Label htmlFor="regularPrice">B.2</Label>
                  <Input
                    type="number"
                    id="B.2"
                    {...register("B.2", {
                      required: "This field is required",
                    })}
                  />
                </FormRow>

                <FormRow>
                  <Label htmlFor="discount">B.3</Label>
                  <Input
                    type="number"
                    id="B.3"
                    {...register("B.3", {
                      required: "This field is required",
                    })}
                  />
                </FormRow>
              </>
            );
          if (field.value === "c")
            return (
              <>
                <FormRow>
                  <Label htmlFor="maxCapacity">C.1</Label>
                  <Input
                    type="number"
                    id="C.1"
                    {...register("C.1", {
                      required: "This field is required",
                      validate: (value) =>
                        value < getValues() ||
                        "Number should be bigger than zero",
                    })}
                  />
                </FormRow>

                <FormRow>
                  <Label htmlFor="regularPrice">C.2</Label>
                  <Input
                    type="number"
                    id="C.2"
                    {...register("C.2", {
                      required: "This field is required",
                    })}
                  />
                </FormRow>

                <FormRow>
                  <Label htmlFor="discount">C.3</Label>
                  <Input
                    type="number"
                    id="C.3"
                    {...register("C.3", {
                      required: "This field is required",
                    })}
                  />
                </FormRow>
              </>
            );
        }}
      />

      <FormRow>
        <Button disabled={isCreating}>Add Data</Button>
      </FormRow>
    </Form>
  );
}

export default CreateDataForm;
