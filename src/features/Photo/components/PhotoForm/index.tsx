import React from "react";
import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import { Formik, Form, FastField } from "formik";
import { FormGroup, Button } from "reactstrap";
import InputField from "custom-fields/InputField";
import SelectField from "custom-fields/SelectField";
import RandomPhotoField from "custom-fields/RandomPhotoField";
import * as Yup from "yup";

interface Props {
  // onSubmit: () => void
}

const PhotoForm = (props: Props) => {
  const initialValues = {
    title: "",
    categoryId: null,
    photo: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("This field is required."),
    categoryId: Yup.number().required("This field is required.").nullable(),
    photo: Yup.string().when("categoryId", {
      is: 1,
      then: Yup.string().required("This field is required."),
      otherwise: Yup.string().notRequired(),
    }),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log("Submit: ", values)}
      validationSchema={validationSchema}
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
