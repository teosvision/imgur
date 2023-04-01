import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchImgurData } from "../../store/utilis/thunk";
import ImageCard from "../card/ImageCard";
import "./Home.scss";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { updateState } from "../../store/reducers/images";
import Modal from "../modal/Modal";

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
    <div className="galery">
      {isLoading ? (
        <h1>Loading</h1>
      ) : error ? (
        <h1>Error</h1>
      ) : (
        data?.slice(page * 6 - 6, page * 6).map((item) => {
          return <ImageCard key={item.id} {...item} />;
        })
      )}
      <Modal />
      <Stack spacing={2}>
        <Pagination
          onChange={(_, value) =>
            dispatch(updateState({ state: "page", value }))
          }
          count={Math.round(data?.length / 6)}
        />
      </Stack>
    </div>
  );
};

export default Home;
