import React from "react";
import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import { Formik, Form, FastField } from "formik";
import { FormGroup, Button } from "reactstrap";
import InputField from "custom-fields/InputField";
import SelectField from "custom-fields/SelectField";
import RandomPhotoField from "custom-fields/RandomPhotoField";

interface Props {
  // onSubmit: () => void
}

const PhotoForm = (props: Props) => {
  const initialValues = {
    title: "",
    categoryId: null,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log("Submit: ", values)}
    >
      {(formikProps: { values: any; errors: any; touched: any }) => {
        const { values, errors, touched } = formikProps;

        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Eg: Wow nature ..."
            />

            <FastField
              name="categoryId"
              component={SelectField}
              label="Category"
              placeholder="What's your photo category"
              options={PHOTO_CATEGORY_OPTIONS}
            />

            <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
            />

            <FormGroup>
              <Button type="submit" color="primary">
                Add to album
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
};

export default PhotoForm;
