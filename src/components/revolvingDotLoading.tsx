import React from "react";
import { RevolvingDot } from "react-loader-spinner";
import "../assets/scss/components/revolvingDotLoading.scss";

function Loading() {
  return (
    <RevolvingDot
      height="100"
      width="100"
      color="#61dafb"
      secondaryColor=""
      ariaLabel="revolving-dot-loading"
      wrapperStyle={{}}
      wrapperClass="revolvingDotLoading"
      visible={true}
    />
  );
}

export default Loading;
