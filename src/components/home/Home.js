import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchImgurData } from "../../store/utilis/thunk";
import ImageCard from "../card/ImageCard";
import Modal from "../modal/Modal";
import "./Home.scss";
import Animation from "../../assets/animation.json";
import Lottie from "lottie-react";
import File from "../file/File";
const Home = () => {
  const dispatch = useDispatch();

  const {
    data,
    isLoading,
    error,
    gallery,
    showViral,
    sort,
    page,
    window,
    showMature,
    albumPreviews,
  } = useSelector((state) => state.image);

  useEffect(() => {
    dispatch(
      fetchImgurData(
        gallery,
        sort,
        window,
        showViral,
        showMature,
        albumPreviews
      )
    );
  }, []);

  return (
    <>
      <div className="gallery">
        {isLoading ? (
          <div className="animation">
            {" "}
            <Lottie className="yoda" animationData={Animation} />
          </div>
        ) : error ? (
          <h1>Error</h1>
        ) : (
          data?.slice(page * 6 - 6, page * 6).map((item) => {
            return <ImageCard key={item.id} {...item} />;
          })
        )}

        {/* <File /> */}
        <Modal />
      </div>
    </>
  );
};

export default Home;
