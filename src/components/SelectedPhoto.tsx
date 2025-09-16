import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function getAlignment(): string {
  const landscape = window.innerWidth > window.innerHeight;
  const alignImg = landscape ? "selected-img" : "selected-img-portrait";
  return alignImg;
}

function SelectedPhoto() {
  const { categoryName, img } = useParams();

  const [isPortrait, setIsPortrait] = useState(
    window.matchMedia("(orientation: portrait)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(orientation: portrait)");

    const handleOrientationChange = (e: MediaQueryListEvent) => {
      setIsPortrait(e.matches);
    };

    mediaQuery.addEventListener("change", handleOrientationChange);

    return () => {
      mediaQuery.removeEventListener("change", handleOrientationChange);
    };
  }, []);

  if (
    !categoryName ||
    !img ||
    categoryName === undefined ||
    img === undefined
  ) {
    return;
  }

  return (
    <>
      <div className="black-back-drop">
        <div className="selected-img-container">
          <img
            className={isPortrait ? "selected-img-portrait" : "selected-img"}
            src={`/src/assets/fulls/${img}.jpg`}
          ></img>
        </div>
      </div>
    </>
  );
}

function getPhotoPathString(number: number, category: string) {
  const num = number < 10 ? "0" + number : number;
  //return `/src/assets/${category}/thumbnails/${num}.jpg`
  return `/src/assets/thumbs/${num}.jpg`;
}

export default SelectedPhoto;
