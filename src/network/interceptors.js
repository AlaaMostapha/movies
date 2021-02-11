export const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && config.handlerEnabled
    ? true
    : false;
};
export const requestHandler = (request) => {
  //set loader
  if (isHandlerEnabled(request)) {
    request.headers["language"] = "en-US";
    request.params.api_key = "5788cd31e1d876b0148f680c1c9f8248";
  }
  return request;
};
export const responseHandler = (response) => {
  //stop loader
  if (isHandlerEnabled(response.config)) {
  }
  return response;
};
export const errorHandler = (error) => {
  const errors = error.response.data.errors;
  //stop loader

  if (isHandlerEnabled(error.config)) {
  }

  return Promise.reject({ ...error });
};
