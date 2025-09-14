import React from "react";

type CategoryThumbnailProps = {
  category: string;
  onClick: (cat: string) => void;
};

function CategoryThumbnail({ category, onClick }: CategoryThumbnailProps) {
  const path = `src/assets/${category}/thumbnails/01.jpg`;
  return (
    <div onClick={() => onClick(category)} className="category-thumbnail">
      <img className="category-thumbnail-img" src={path}></img>
      <span className="category-thumbnail-text">{category}</span>
    </div>
  );
}

export default CategoryThumbnail;
