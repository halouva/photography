import categories from "../constants/constants";
import CategoryThumbnail from "./CategoryThumbnail";
import { Link } from "react-router-dom";


function CategoryThumbnails() {
  const cats = Object.values(categories);
  const thumbnails = cats.map((cat) => {
    if (cat !== "") {
      return (
        <Link to={`/category/${cat}`}>
          <CategoryThumbnail category={cat} />
        </Link>
      );
    }
  });

  return (
    <>
      <div className="category-thumbnail-container">{thumbnails}</div>
    </>
  );
}

export default CategoryThumbnails;
