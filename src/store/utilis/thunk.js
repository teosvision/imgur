import axios from "axios";
import {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
} from "../reducers/images";

const clientId = "f4d5cb8a04710d0";
const headers = new Headers();
var data = new FormData();
//client id : 54d381fa15eed99
//client secret : fd63012bc9c48bdfbf0d1f846026367a6faa7065
////https://api.imgur.com/3/gallery/{{section}}/{{sort}}/{{window}}/{{page}}?showViral={{showViral}}&mature={{showMature}}&album_previews={{albumPreviews}}
export const fetchImgurData =
  (section, sort, window, page, showViral, showMature, albumPreviews) =>
  async (dispatch) => {
    try {
      dispatch(fetchDataStart());

      const response = await axios.get(
        // `https://api.imgur.com/3/gallery/hot/viral/day/1?showViral=true&mature=true&album_previews=true`
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

export const testAxios = async () => {
  const response = await axios.get(
    "https://api.imgur.com/3/gallery/hot/viral/day",
    {
      headers: {
        // Authorization: "Client f4d5cb8a04710d0",
        Authorization: "Client f4d5cb8a04710d0",
      },
    }
  );
  console.log(response, "RESPONSE");
};
