export const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && config.handlerEnabled
    ? true
    : false;
};

export const requestHandler = (request) => {
  //set loader
  const loader = document.getElementsByClassName("loader")[0];
  loader.classList.remove("display_none");

  if (isHandlerEnabled(request)) {
    request.headers["language"] = "en-US";
    request.params = {
      ...request.params,
      api_key: "5788cd31e1d876b0148f680c1c9f8248",
    };
  }
  return request;
};
export const responseHandler = (response) => {
  //stop loader
  const loader = document.getElementsByClassName("loader")[0];
  loader.classList.add("display_none");

  if (isHandlerEnabled(response.config)) {
  }
  return response;
};
export const errorHandler = (error) => {
  const errors = error.response.data.errors;
  //stop loader
  const loader = document.getElementsByClassName("loader")[0];
  loader.classList.add("display_none");
  if (isHandlerEnabled(error.config)) {
  }

  return Promise.reject({ ...error });
};
