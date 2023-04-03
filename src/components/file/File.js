import React from "react";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchImgurData } from "../../store/utilis/thunk";
const File = () => {
  const { data, page } = useSelector((state) => state.image);
  const dispatch = useDispatch();
  let { id } = useParams();

  //   useEffect(() => {
  //     dispatch(fetchImgurData(params.id));
  //     console.log(params.id);
  //   }, []);
  //   const image = data.slice(page * 6 - 6, page * 6).map((item) => item.images);
  //   console.log(id, "id");
  //   console.log(image[1], "image");
  //   console.log(image;

  return (
    <div>
      {/* {image[params.id]?.map((item) => (
        <div className="media2" key={item.id}>
          {item.type === "video/mp4" ? (
            <video controls src={item.mp4} />
          ) : (
            <img src={item.link} alt="" />
          )}
        </div>
      ))} */}
    </div>
  );
};

export default File;
