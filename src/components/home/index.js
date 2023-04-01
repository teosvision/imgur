import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchImgurData, testAxios } from "../../store/utilis/thunk";
const Home = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.image);
  console.log(data);
  useEffect(() => {
    dispatch(fetchImgurData("hot", "viral", "day", 1, true, true, true));
  }, []);

  return (
    <div>
      <div>Viral Images</div>
    </div>
  );
};

export default Home;
