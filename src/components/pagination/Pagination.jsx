import React from "react";
import "./Pagination.scss";
import { default as MUIPagination } from "@mui/material/Pagination";
import { Stack } from "@mui/material";
import { updateState } from "../../store/reducers/images";
import { useSelector, useDispatch } from "react-redux";
const Pagination = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.image);
  return (
    <div>
      <Stack spacing={2}>
        <MUIPagination
          size="large"
          sx={{
            color: "white",
            backgroundColor: "white",
            borderRadius: "0.5rem",
          }}
          onChange={(_, value) =>
            dispatch(updateState({ state: "page", value }))
          }
          count={Math.round(data?.length / 6)}
        />
      </Stack>
    </div>
  );
};

export default Pagination;
