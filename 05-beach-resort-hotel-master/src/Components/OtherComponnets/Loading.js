import React from "react";
import LoadingGIF from "../../images/gif/loading-arrow.gif";

export default function Loading() {
  return (
    <div className="loading">
      <h4>Rooms are Loading....</h4>
      <img src={LoadingGIF} alt="Rooms are loading" />
    </div>
  );
}
