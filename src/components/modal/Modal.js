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

const Modal = (item) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.image);
  const onClose = () => {
    dispatch(updateState({ state: "modal", value: undefined }));
  };
  const { modal } = useSelector((state) => state.image);
  const { images } = modal || {};
  // console.log("item", );

  return (
    <div>
      <MUIModal
        open={modal}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="box">
          <div>
            <Carousel autoPlay={false} height={310} onChange={setCarouselIndex}>
              {images?.map((item) => (
                <div className="media2" key={item.id}>
                  {item.type === "video/mp4" ? (
                    <video controls src={item.mp4} />
                  ) : (
                    <img src={item.link} alt="" />
                  )}
                </div>
              ))}
            </Carousel>
          </div>

          <Typography>
            <h3>{modal?.title}</h3>
            <h3>{images?.[carouselIndex]?.description}</h3>

            <div className="second">
              <span className="vote">
                <ThumbDownIcon /> {images?.[carouselIndex]?.downs || 0}
              </span>
              <span className="vote">
                Score : {images?.[carouselIndex]?.score || 0}
              </span>
              <span className="vote">
                <ThumbUpIcon /> {images?.[carouselIndex]?.ups || 0}
              </span>
            </div>
          </Typography>
        </Box>
      </MUIModal>
    </div>
  );
};
export default Modal;

// <div className="modal">
//   <Box sx={style}>
//     <Carousel autoPlay={false} height={200} onChange={setCarouselIndex}>
//       {images?.map((item) => (
//         <div className="media" key={item.id}>
//           {item.type === "video/mp4" ? (
//             <video controls src={item.mp4} />
//           ) : (
//             <img src={item.link} alt="" />
//           )}
//         </div>
//       ))}
//     </Carousel>

//     <CardContent>
//       <h6>{modal?.title}</h6>
//       <h6>{images?.[carouselIndex]?.description}</h6>
//       <div style={{ display: "flex", justifyContent: "space-between" }}>
//         <h6>Downs Vote : {images?.[carouselIndex]?.downs || 0}</h6>
//         <h6>Score : {images?.[carouselIndex]?.score || 0}</h6>
//         <h6>UpVotes : {images?.[carouselIndex]?.ups || 0}</h6>
//       </div>
//     </CardContent>
//   </Box>
// </div>;
