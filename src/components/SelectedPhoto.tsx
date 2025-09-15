import { useParams } from "react-router-dom";

function SelectedPhoto() {
  const { categoryName, img } = useParams();
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
            className="selected-img"
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
