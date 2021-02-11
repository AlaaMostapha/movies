export const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && config.handlerEnabled
    ? true
    : false;
};
export const requestHandler = (request) => {
  //set loader
  if (isHandlerEnabled(request)) {
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
