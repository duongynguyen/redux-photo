import React from "react";
import { FormGroup, Input, Label } from "reactstrap";
import { InputType } from "reactstrap/lib/Input";

export interface Props {
  field: { name: string };
  form: object;

  type?: InputType;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
}

const InputField: React.FC<Props> = ({
  field,
  form,
  type = "text",
  label = "",
  placeholder = "",
  disabled = false,
}) => {
  const { name } = field;

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}

      <Input
        id={name}
        type={type}
        {...field}
        placeholder={placeholder}
        disabled={disabled}
      ></Input>
    </FormGroup>
  );
};

export default InputField;
