import axiosInstance from "../index";
//https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US
export const getLastestMovies = async () => {
  return await axiosInstance.get("/movie/latest?", {
    handlerEnabled: true,
    // headers: {
    //   language: "en-US",
    // },
    params: {
      api_key: "5788cd31e1d876b0148f680c1c9f8248",
      language: "en-US",
    },
  });
};
