import React from "react";

type ThumbnailProps = {
  path: string;
};

function Thumbnail({ path }: ThumbnailProps) {
  return (
    <div className="thumbnail">
      <img className="thumbnail-img" src={path}></img>
      {/* <span className="thumbnail-text">Description</span> */}
    </div>
  );
}

export default Thumbnail;
