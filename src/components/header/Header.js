import React from "react";
import Container from "@mui/material/Container";
import "./Header.scss";
import { Link } from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { fetchImgurData } from "../../store/utilis/thunk";
import { updateState } from "../../store/reducers/data";
import Switch from "@mui/material/Switch";

const Header = () => {
  const dispatch = useDispatch();
  const { gallery, showViral, sort, window, showMature, albumPreviews } =
    useSelector((state) => state.data);

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
    { value: "all", description: "All" },
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
      <div className="logo">
        <Link to="/">
          <h1 className="name">Imgur Images</h1>
        </Link>
      </div>
      <div className="function">
        <div className="button-left">
          <h3>Show Viral</h3>
          <Switch checked={showViral} onChange={handleChangeViral} />
        </div>
        <div className="button-right">
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

          <Dropdown
            options={windowOptions}
            label={"Day"}
            value={window}
            action={handleWindowChange}
          />
        </div>
      </div>
    </Container>
  );
};

export default Header;
