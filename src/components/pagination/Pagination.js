import React from "react";
import { default as MUIPagination } from "@mui/material/Pagination";
import { Stack } from "@mui/material";
import { updateState } from "../../store/reducers/data";
import { useSelector, useDispatch } from "react-redux";
import "./Pagination.scss";
const Pagination = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);
  return (
    <div>
      <Stack className="pagination " spacing={2}>
        <MUIPagination
          size="medium"
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
