import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const DataLoader = () => {
  return <Loader type="ThreeDots" height={100} width={100} color="#000" />;
};

export default DataLoader;
