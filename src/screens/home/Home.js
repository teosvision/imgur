import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchImgurData } from "../../store/utilis/thunk";
import ImageCard from "../../components/card/ImageCard";
import Modal from "../../components/modal/Modal";
import Animation from "../../assets/animation.json";
import Lottie from "lottie-react";
import Pagination from "../../components/pagination/Pagination";
import "./Home.scss";
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
  } = useSelector((state) => state.data);

  const getData = () => {
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
  };

  useEffect(() => {
    getData();
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

        <Modal />
      </div>
      <Pagination className="pagination" />
    </>
  );
};

export default Home;
