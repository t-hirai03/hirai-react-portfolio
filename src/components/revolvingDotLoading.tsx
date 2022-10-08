import React from "react";
import { Audio } from "react-loader-spinner";
import "../assets/scss/components/revolvingDotLoading.scss";

function Loading() {
  return (
    <Audio
      height="100"
      width="100"
      color="#61dafb"
      ariaLabel="revolving-dot-loading"
      wrapperStyle={{}}
      wrapperClass="revolvingDotLoading"
      visible={true}
    />
  );
}

export default Loading;
