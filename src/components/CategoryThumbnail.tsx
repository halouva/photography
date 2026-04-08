import { getCategoryThumbnail } from "../assets/images";

type CategoryThumbnailProps = {
  category: string;
};

function CategoryThumbnail({ category }: CategoryThumbnailProps) {
  const path = getCategoryThumbnail(category);

  if (!path) {
    return null;
  }

  return (
    <div className="category-thumbnail">
      <img className="category-thumbnail-img" src={path}></img>
      <span className="category-thumbnail-text">{category}</span>
    </div>
  );
}

export default CategoryThumbnail;
