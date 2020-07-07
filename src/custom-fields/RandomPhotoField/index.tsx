import RandomPhoto from "components/RandomPhoto";
import React from "react";
import { FormGroup, Label, FormFeedback } from "reactstrap";
import { ErrorMessage } from "formik";

export interface Props {
  field: {
    name: string;
    value: string;
    onChange?: any;
    onBlur?: any;
  };
  form: any;

  label: string;
}

const RandomPhotoField: React.FC<Props> = ({ field, form, label = "" }) => {
  const { name, value, onBlur } = field;

  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const handleImageUrlChange = (newImageUrl: string) => {
    form.setFieldValue(name, newImageUrl);
  };

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}

      <RandomPhoto
        name={name}
        imageUrl={value}
        onImageUrlChange={handleImageUrlChange}
        onRandomButtonBlur={onBlur}
      />

      <div className={showError ? "is-invalid" : ""}></div>

      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
};

export default RandomPhotoField;
