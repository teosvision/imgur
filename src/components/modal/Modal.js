import React, { useState } from "react";
import Box from "@mui/material/Box";
import { default as MUIModal } from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { updateState } from "../../store/reducers/images";
import { Card, CardActionArea, CardContent } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import "./Modal.scss";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const Modal = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(updateState({ state: "modal", value: undefined }));
  };

  const { modal } = useSelector((state) => state.image);
  const { images } = modal || {};

  return (
    <div>
      <MUIModal
        open={modal}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="box">
          <Carousel autoPlay={false} height={310} onChange={setCarouselIndex}>
            {images?.map((item) => (
              <div className="carousel" key={item.id}>
                {item.type === "video/mp4" ? (
                  <div className="media2">
                    <video controls src={item.mp4} />
                  </div>
                ) : (
                  <div className="media2">
                    <img src={item.link} alt="" />
                  </div>
                )}
              </div>
            ))}
          </Carousel>

          <Typography>
            <div className="first">
              <h3>{modal?.title}</h3>
              <div className="vote">
                <span className="likes">
                  <ThumbUpIcon /> {modal?.ups || 0}
                  {" |"}
                  <ThumbDownIcon /> {modal?.downs || 0}
                </span>
                <span className="score">Score : {modal?.score || 0}</span>
              </div>
            </div>
            <div className="second">
              <h4>{images?.[carouselIndex]?.description}</h4>
              <h4>{modal?.description}</h4>
            </div>
          </Typography>
        </div>
      </MUIModal>
    </div>
  );
};
export default Modal;
