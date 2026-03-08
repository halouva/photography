type CategoryThumbnailProps = {
  category: string;
};

function CategoryThumbnail({ category }: CategoryThumbnailProps) {
  const path = `src/assets/${category}/thumbnails/01.jpg`;
  return (
    <div className="category-thumbnail">
      <img className="category-thumbnail-img" src={path}></img>
      <span className="category-thumbnail-text">{category}</span>
    </div>
  );
}

export default CategoryThumbnail;
