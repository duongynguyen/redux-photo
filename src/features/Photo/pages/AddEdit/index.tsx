import React from "react";
import Banner from "components/Banner";
import PhotoForm from "features/Photo/components/PhotoForm";
import "./AddEdit.scss";
import { useDispatch } from "react-redux";
import { addPhoto } from "features/Photo/photoSlice";
import { useHistory } from "react-router-dom";

function AddEditPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (values: any) => {
    return new Promise((resolve) => {
      console.log("handleSubmit -> values", values);
      setTimeout(() => {
        const action = addPhoto(values);
        dispatch(action);

        history.push("/photos");
        resolve(true);
      }, 2000);
    });
  };

  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo" />

      <div className="photo-edit__form">
        <PhotoForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default AddEditPage;
