import React from "react";
import { useNavigate } from "react-router-dom";

type ThumbnailProps = {
  path: string;
  category: string;
  onClick: (string: string) => void;
};

function Thumbnail({ path, category, onClick }: ThumbnailProps) {
  const isMobile = window.innerWidth < 1000;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        if (isMobile) {
          navigate(`/category/${category}/${path.slice(-6, -4)}`);
        } else {
          onClick(path);
        }
      }}
      className="thumbnail"
    >
      <img className="thumbnail-img" src={path}></img>
      {/* <span className="thumbnail-text">Description</span> */}
    </div>
  );
}

export default Thumbnail;
