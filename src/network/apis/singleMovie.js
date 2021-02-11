import axiosInstance from "../index";
//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
export const getSingleMovie = async (id) => {
  return await axiosInstance.get(`/movie/${id}?`, {
    handlerEnabled: true,
  });
};
