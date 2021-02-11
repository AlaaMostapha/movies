import axiosInstance from "../index";
//https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US
export const getLastestMovies = async () => {
  console.log("api test");
  return await axiosInstance.get("/movie/popular?", {
    handlerEnabled: true,
  });
};
