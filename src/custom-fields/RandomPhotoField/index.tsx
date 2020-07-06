import RandomPhoto from "components/RandomPhoto";
import React from "react";
import { FormGroup, Label } from "reactstrap";

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
    </FormGroup>
  );
};

export default RandomPhotoField;
