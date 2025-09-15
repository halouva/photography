import Thumbnail from "./Thumbnail";
import Bio from "./Bio";
import { act, useState } from "react";
import { useParams, Link } from "react-router-dom";

// type CategoryScreenProps = {
//   category: string;
// };

function CategoryScreen() {
  // big screen
  // buttons under big screen
  // thumbnails
  let { categoryName } = useParams();
  if (!categoryName || categoryName === undefined) {
    return;
  }
  const category = categoryName;
  const [activePhoto, setActivePhoto] = useState(
    getPhotoPathString(1, category)
  );

  // const [photoClicked, setPhotoClicked] = useState(false);

  // if (photoClicked) {
  //   return (
  //     <>
  //       <div className="black-back-drop">
  //         <div className="selected-img-container">
  //           <img className="selected-img" src={activePhoto}></img>
  //         </div>
  //       </div>
  //     </>
  //   ); // full size image
  // } else {
  return (
    <>
      {/* container for the whole screen */}
      <div className="container">
        {/* container for left hand side */}
        <div className="bio-and-thumbs-container">
          <Bio />
          <div className="spacer-xl" />
          <div className="thumbnail-container">
            {getThumbnails(
              (imgPath: string) => setActivePhoto(imgPath),
              category
            )}
          </div>
        </div>
        {/* container for active image */}
        <div className="active-img-container">
          <Link to={`/category/${category}/${activePhoto.slice(-6, -4)}`}>
            <img className="active-img" src={activePhoto}></img>
          </Link>
        </div>
      </div>
    </>
  );
}

function getThumbnails(onClick: (imgPath: string) => void, category: string) {
  // ------ thumbnails ------
  const start = 1;
  const end = 30;
  const customRange = Array.from(
    { length: end - start },
    (_, index) => start + index
  );
  const thumnbnails = customRange.map((n, index) => {
    return (
      <Thumbnail
        category={category}
        onClick={onClick}
        path={getPhotoPathString(n, "bacon")}
      />
    );
  });

  return (
    <>
      <div className="thumbnail-container">{thumnbnails}</div>
    </>
  );
}

function getPhotoPathString(number: number, category: string) {
  const num = number < 10 ? "0" + number : number;
  //return `/src/assets/${category}/thumbnails/${num}.jpg`
  return `/src/assets/thumbs/${num}.jpg`;
}

export default CategoryScreen;
