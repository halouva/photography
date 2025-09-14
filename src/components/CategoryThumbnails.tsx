import categories from "../constants/constants";
import CategoryThumbnail from "./CategoryThumbnail";

type CategoryThumbnailsProps = {
  onClick: (category: string) => void;
};

function CategoryThumbnails({onClick}: CategoryThumbnailsProps) {
  const cats = Object.values(categories);
  const thumbnails = cats.map((cat) => {
    if (cat !== "") {
      return <CategoryThumbnail category={cat} onClick={onClick} />;
    }
  });

  return (
    <>
      <div className="category-thumbnail-container">
        {thumbnails}
      </div>
    </>
  );
}

export default CategoryThumbnails;
