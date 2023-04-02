import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { updateState } from "../../store/reducers/images";
import { Card, CardActionArea, CardContent } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import "./Modal.scss";
const Modal = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [carouselIndex, setCarouselIndex] = useState(0);
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(updateState({ state: "modal", value: undefined }));
  };
  const { modal } = useSelector((state) => state.image);
  const { images } = modal || {};

  return (
    <Dialog open={modal} onClose={onClose}>
      <DialogContent>
        <div className="media">
          {/* <Carousel autoPlay={false} height={300} onChange={setCarouselIndex}> */}
          {images?.map((item) => (
            <div key={item.id}>
              {item.type === "video/mp4" ? (
                <video className="modal" controls src={item.mp4} />
              ) : (
                <img className="modal" src={item.link} alt="" />
              )}
            </div>
          ))}
          {/* </Carousel> */}
        </div>
      </DialogContent>

      {/* <DialogTitle id="responsive-dialog-title">
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <h6>{modal?.title}</h6>
          <h6>{images?.[carouselIndex]?.description}</h6>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h6>Downs Vote : {images?.[carouselIndex]?.downs || 0}</h6>
            <h6>Score : {images?.[carouselIndex]?.score || 0}</h6>
            <h6>UpVotes : {images?.[carouselIndex]?.ups || 0}</h6>
          </div>
        </DialogContentText>
      </DialogContent> */}
    </Dialog>
  );
};
export default Modal;
