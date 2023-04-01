import axios from "axios";
import { useSelector } from "react-redux";
import {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
} from "../reducers/images";

const clientId = "f4d5cb8a04710d0";

export const fetchImgurData =
  (section, sort, window, showViral, showMature, albumPreviews) =>
  async (dispatch) => {
    try {
      dispatch(fetchDataStart());

      const response = await axios.get(
        `https://api.imgur.com/3/gallery/${section}/${sort}/${window}/1?showViral=${showViral}&mature=${showMature}&album_previews=${albumPreviews}`,
        {
          headers: {
            Authorization: `Client-ID ${clientId}`,
          },
        }
      );

      dispatch(
        fetchDataSuccess(response.data.data.filter((post) => post.images))
      );
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
