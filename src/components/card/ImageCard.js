import React from "react";
import Card from "@mui/material/Card";
import Carousel from "react-material-ui-carousel";
import { useDispatch } from "react-redux";
import { updateState } from "../../store/reducers/data";
import "./ImageCard.scss";
const ImageCard = (item) => {
  const { images } = item;
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(updateState({ state: "modal", value: item }));
  };
  if (images?.length >= 0) {
    return (
      <Card className="card" onClick={openModal}>
        {images.length > 1 ? (
          <Carousel swipe animation="fade" autoPlay={false} height={200}>
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
