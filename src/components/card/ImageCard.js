import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import "./ImageCard.scss";
import { useDispatch } from "react-redux";
import { updateState } from "../../store/reducers/images";
const ImageCard = (item) => {
  const { images } = item;
  const [carouselIndex, setCarouselIndex] = useState(0);
  console.log("images", images);
  // console.log("desc", item);
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(updateState({ state: "modal", value: item }));
  };
  if (images?.length >= 0) {
    return (
      <Card className="card" onClick={openModal}>
        {images.length > 1 ? (
          <Carousel
            swipe
            animation="fade"
            autoPlay={false}
            height={200}
            onChange={setCarouselIndex}
          >
            {images.map((item) => (
              <div className="media" key={item.id}>
                {item.type === "video/mp4" ? (
                  <video autoPlay muted className="vid" src={item.mp4} />
                ) : (
                  <img src={item.link} alt="" />
                )}
              </div>
            ))}
          </Carousel>
        ) : (
          <>
            {images.map((item) => (
              <div className="media" key={item.id}>
                {item.type === "video/mp4" ? (
                  <video autoPlay muted className="vid" src={item.mp4} />
                ) : (
                  <img src={item.link} alt="" />
                )}
              </div>
            ))}
          </>
        )}

        <h3>
          {item.title.substring(0, 80)}
          {item.title.length > 50 && ` ...`}
        </h3>
      </Card>
    );
  }
  return null;
};
export default ImageCard;
