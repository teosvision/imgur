import React, { useState } from "react";
import Box from "@mui/material/Box";
import { default as MUIModal } from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { updateState } from "../../store/reducers/images";
import { Card, CardActionArea, CardContent } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  maxHeight: "500px",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
};

const Modal = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(updateState({ state: "modal", value: undefined }));
  };
  const { modal } = useSelector((state) => state.image);
  const { images } = modal || {};
  return (
    <MUIModal open={modal} onClose={onClose}>
      <Box sx={style}>
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

        <CardContent>
          <h6>{modal?.title}</h6>
          <h6>{images?.[carouselIndex]?.description}</h6>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h6>Downs Vote : {images?.[carouselIndex]?.downs || 0}</h6>
            <h6>Score : {images?.[carouselIndex]?.score || 0}</h6>
            <h6>UpVotes : {images?.[carouselIndex]?.ups || 0}</h6>
          </div>
        </CardContent>
      </Box>
    </MUIModal>
  );
};
export default Modal;
