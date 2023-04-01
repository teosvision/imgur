import axios from "axios";
import {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
} from "../reducers/images";

const clientId = "f4d5cb8a04710d0";

export const fetchImgurData =
  (section, sort, window, page, showViral, showMature, albumPreviews) =>
  async (dispatch) => {
    try {
      dispatch(fetchDataStart());

      const response = await axios.get(
        `https://api.imgur.com/3/gallery/${section}/${sort}/${window}/${page}?showViral=${showViral}&mature=${showMature}&album_previews=${albumPreviews}`,
        {
          headers: {
            Authorization: `Client-ID ${clientId}`,
          },
        }
      );

      console.log(response.data);
      dispatch(fetchDataSuccess(response.data));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
