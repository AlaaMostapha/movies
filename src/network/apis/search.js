import axiosInstance from "../index";
//api.themoviedb.org/3/search/movie?api_key=5788cd31e1d876b0148f680c1c9f8248&
//language=en-US&query=soul&page=1&include_adult=false
export const searchForMovie = async (query) => {
  return await axiosInstance.get("/search/movie?", {
    handlerEnabled: true,
    params: {
      query,
    },
  });
};
