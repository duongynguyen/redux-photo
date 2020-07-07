import React from "react";
import { FormGroup, Input, Label, FormFeedback } from "reactstrap";
import { InputType } from "reactstrap/lib/Input";
import { ErrorMessage } from "formik";

export interface Props {
  field: { name: string };
  form: any;

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
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}

      <Input
        id={name}
        type={type}
        {...field}
        placeholder={placeholder}
        disabled={disabled}
        invalid={showError}
      />

      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
};

export default InputField;
