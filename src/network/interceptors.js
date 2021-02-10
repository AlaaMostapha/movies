// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import history from "../routes/history";
export const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && config.handlerEnabled
    ? true
    : false;
};
export const requestHandler = (request) => {
  // console.log("interceptor request", request);
  //set loader
  if (isHandlerEnabled(request)) {
    // console.log("isHandlerEnabled(request)", isHandlerEnabled(request));
  }
  return request;
};
export const responseHandler = (response) => {
  // console.log(response);
  //stop loader
  if (isHandlerEnabled(response.config)) {
    //   // console.log("response", response);
    //   // toast.success("Success !", {
    //   //   position: toast.POSITION.TOP_CENTER,
    //   // });
    //   // history.push("home");
  }
  return response;
};
export const errorHandler = (error) => {
  const errors = error.response.data.errors;
  // console.log("error", errors);
  //stop loader
  // toast.error(error, {
  //   position: toast.POSITION.TOP_CENTER,
  // });
  if (isHandlerEnabled(error.config)) {
  }

  return Promise.reject({ ...error });
};
