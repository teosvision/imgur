import React, { useState } from "react";
import Container from "@mui/material/Container";
import "../App.scss";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { fetchImgurData } from "../store/utilis/thunk";
import { updateState } from "../store/reducers/images";
import Switch from "@mui/material/Switch";
import { FormControlLabel } from "@mui/material";
const Header = () => {
  const dispatch = useDispatch();
  const { gallery, showViral, sort, window, showMature, albumPreviews } =
    useSelector((state) => state.image);

  const galleryOptions = [
    { value: "hot", description: "Hot" },
    { value: "top", description: "Top" },
    { value: "user", description: "User" },
  ];
  const sortOptions = [
    { value: "viral", description: "Viral" },
    { value: "top", description: "Top" },
    { value: "time", description: "Time" },
    { value: "rising", description: "Rising" },
  ];
  const windowOptions = [
    { value: "day", description: "Day" },
    { value: "week", description: "Week" },
    { value: "month", description: "Month" },
    { value: "year", description: "Year" },
    { value: "all", description: "all" },
  ];
  const handleGalleryChange = async (e) => {
    dispatch(updateState({ state: "gallery", value: e.target.value }));
    dispatch(
      fetchImgurData(
        e.target.value,
        sort,
        window,
        showViral,
        showMature,
        albumPreviews
      )
    );
  };
  const handleSortChange = async (e) => {
    dispatch(updateState({ state: "sort", value: e.target.value }));
    dispatch(
      fetchImgurData(
        gallery,
        e.target.value,
        window,
        showViral,
        showMature,
        albumPreviews
      )
    );
  };
  const handleWindowChange = async (e) => {
    dispatch(updateState({ state: "window", value: e.target.value }));
    dispatch(
      fetchImgurData(
        gallery,
        sort,
        e.target.value,
        showViral,
        showMature,
        albumPreviews
      )
    );
  };
  const handleChangeViral = async (e) => {
    dispatch(updateState({ state: "showViral", value: e.target.checked }));
    dispatch(
      fetchImgurData(
        gallery,
        sort,
        window,
        e.target.checked,
        showMature,
        albumPreviews
      )
    );
  };
  return (
    <Container className="header">
      <Link to="/">
        <h1 className="name">Viral Images</h1>
      </Link>
      <div className="function">
        <Dropdown
          options={galleryOptions}
          label={"Gallery"}
          value={gallery}
          action={handleGalleryChange}
        />
        <Dropdown
          options={sortOptions}
          label={"Sort"}
          value={sort}
          action={handleSortChange}
        />

        <FormControlLabel
          control={<Switch checked={showViral} onChange={handleChangeViral} />}
          label="Show viral"
        />
        <Dropdown
          options={windowOptions}
          label={"Gallery"}
          value={window}
          action={handleWindowChange}
        />
      </div>
    </Container>
  );
};

export default Header;
