import axios from "axios";
import {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
} from "../reducers/images";
const clientId = "54d381fa15eed99";
//client id : 54d381fa15eed99
//client secret : fd63012bc9c48bdfbf0d1f846026367a6faa7065
////https://api.imgur.com/3/gallery/{{section}}/{{sort}}/{{window}}/{{page}}?showViral={{showViral}}&mature={{showMature}}&album_previews={{albumPreviews}}
export const fetchImgurData =
  (section, sort, window, page, showViral, showMature, albumPreviews) =>
  async (dispatch) => {
    try {
      dispatch(fetchDataStart());

      const response = await axios
        .get(
          `https://api.imgur.com/3/gallery/${section}/${sort}/${window}/${page}?showViral=${showViral}&mature=true&album_previews=true`,
          {
            headers: {
              Authorization: `Client-ID ${"54d381fa15eed99"}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
        });
      console.log(response.data);
      dispatch(fetchDataSuccess(response.data));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
