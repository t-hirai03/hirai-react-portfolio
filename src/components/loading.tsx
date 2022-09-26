import React from "react";
import { RevolvingDot, Audio } from "react-loader-spinner";
import "../assets/scss/components/loading.scss";

function Loading() {
  return (
    // <RevolvingDot
    //   height="100"
    //   width="100"
    //   color="#61dafb"
    //   secondaryColor=""
    //   ariaLabel="revolving-dot-loading"
    //   wrapperStyle={{}}
    //   wrapperClass="loading"
    //   visible={true}
    // />
    <Audio
      height="100"
      width="100"
      color="#61dafb"
      ariaLabel="revolving-dot-loading"
      wrapperStyle={{}}
      wrapperClass="loading"
      visible={true}
    />
  );
}

export default Loading;
