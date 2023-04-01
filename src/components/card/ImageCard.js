import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import "./ImageCard.scss";
import Modal from "../modal/Modal";
import { useDispatch } from "react-redux";
import { updateState } from "../../store/reducers/images";
const ImageCard = (item) => {
  const { title, images } = item;
  const [carouselIndex, setCarouselIndex] = useState(0);

  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(updateState({ state: "modal", value: item }));
  };
  if (images?.length >= 0) {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <Carousel autoPlay={false} height={200} onChange={setCarouselIndex}>
            {images?.map(({ link, type }, index) => (
              <div className="media" key={index}>
                {type === "video/mp4" ? (
                  <video controls src={link} />
                ) : (
                  <img src={link} alt="" />
                )}
              </div>
            ))}
          </Carousel>

          <CardContent onClick={openModal}>
            <h3>{title}</h3>
            <h3>
              {images?.[carouselIndex]?.description?.substring(0, 124)}
              {images?.[carouselIndex]?.description?.length > 124 && `...`}
            </h3>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
  return null;
};
export default ImageCard;
