import React from "react";
import { Button } from "reactstrap";
import "./RandomPhoto.scss";

export interface Props {
  name: string;
  imageUrl: string;
  onImageUrlChange: any;
  onRandomButtonBlur: any;
}

const getRandomImageUrl = () => {
  const randomId = Math.trunc(Math.random() * 2000);
  return `https://picsum.photos/id/${randomId}/300/300`;
};

const RandomPhoto: React.FC<Props> = ({
  name = "",
  imageUrl = "",
  onImageUrlChange = null,
  onRandomButtonBlur = null,
}) => {
  const handleRandomPhotoClick = async () => {
    if (onImageUrlChange) {
      const randomImageUrl = getRandomImageUrl();
      onImageUrlChange(randomImageUrl);
    }
  };

  return (
    <div className="random-photo">
      <div className="random-photo__button">
        <Button
          outline
          name={name}
          color="primary"
          onBlur={onRandomButtonBlur}
          onClick={handleRandomPhotoClick}
        >
          Random a photo
        </Button>
      </div>

      <div className="random-photo__photo">
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Oops ... not found. Please click random again!"
          />
        )}
      </div>
    </div>
  );
};

export default RandomPhoto;
