import Thumbnail from "./Thumbnail";
import Bio from "./Bio";
import { act, useState } from "react";

type CategoryScreenProps = {
  category: string;
};

function CategoryScreen({ category }: CategoryScreenProps) {
  // big screen
  // buttons under big screen
  // thumbnails
  const [activePhoto, setActivePhoto] = useState(
    getPhotoPathString(1, category)
  );

  return (
    <>
      {/* container for the whole screen */}
      <div className="container">
        {/* container for left hand side */}
        <div className="bio-and-thumbs-container">
          <Bio />
          <div className="thumbnail-container">{getThumbnails()}</div>
        </div>
        {/* container for active image */}
        <div className="active-img-container">
          <img className="active-img" src={activePhoto}></img>
        </div>
      </div>
    </>
  );
}

function getThumbnails() {
  // ------ thumbnails ------
  const start = 1;
  const end = 30;
  const customRange = Array.from(
    { length: end - start },
    (_, index) => start + index
  );
  const thumnbnails = customRange.map((n, index) => {
    return <Thumbnail path={getPhotoPathString(n, "bacon")} />;
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
