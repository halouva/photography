import { useNavigate } from "react-router-dom";

type ThumbnailProps = {
  path: string;
  category: string;
  imageId: string;
  onClick: (imageId: string) => void;
};

function Thumbnail({ path, category, imageId, onClick }: ThumbnailProps) {
  const isMobile = window.innerWidth < 1000;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        if (isMobile) {
          navigate(`/category/${category}/${imageId}`);
        } else {
          onClick(imageId);
        }
      }}
      className="thumbnail"
    >
      <img className="thumbnail-img" src={path}></img>
    </div>
  );
}

export default Thumbnail;
