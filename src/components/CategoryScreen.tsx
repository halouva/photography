import Thumbnail from "./Thumbnail";
import Bio from "./Bio";
import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";

// type CategoryScreenProps = {
//   category: string;
// };

function CategoryScreen() {
  function getThumbnails(onClick: (imgPath: string) => void, category: string) {
    // ------ thumbnails ------
    const start = 1;
    const end = 12;
    const customRange = Array.from(
      { length: end - start },
      (_, i) => start + i,
    );
    const thumnbnails = customRange.map((n) => {
      return (
        <Thumbnail
          category={category}
          onClick={onClick}
          path={getPhotoPathString(n)}
        />
      );
    });

    return <>{thumnbnails}</>;
  }

  function getPhotoPathString(number: number) {
    const num = number < 10 ? "0" + number : number;
    return `/src/assets/${category}/thumbnails/${num}.jpg`;
  }

  let { categoryName } = useParams();
  if (!categoryName || categoryName === undefined) {
    return;
  }
  const category = categoryName;
  const [activePhoto, setActivePhoto] = useState(getPhotoPathString(1));
  const activeImgContainerRef = useRef<HTMLDivElement | null>(null);
  const [sidebarHeight, setSidebarHeight] = useState<number | null>(null);

  useEffect(() => {
    const activeImgContainer = activeImgContainerRef.current;
    if (!activeImgContainer) {
      setSidebarHeight(null);
      return;
    }

    const syncSidebarHeight = () => {
      if (window.innerWidth <= 1000) {
        setSidebarHeight(null);
        return;
      }

      const nextHeight = activeImgContainer.getBoundingClientRect().height;
      setSidebarHeight(nextHeight > 0 ? nextHeight : null);
    };

    syncSidebarHeight();

    const resizeObserver = new ResizeObserver(() => {
      syncSidebarHeight();
    });

    resizeObserver.observe(activeImgContainer);
    window.addEventListener("resize", syncSidebarHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", syncSidebarHeight);
    };
  }, []);

  return (
    <>
      {/* container for the whole screen */}
      <div className="container">
        {/* container for active image */}
        <div className="active-img-container" ref={activeImgContainerRef}>
          <Link
            to={`/category/${category}/${activePhoto.slice(-6, -4)}`}
            viewTransition
          >
            <img className="active-img" src={activePhoto}></img>
          </Link>
        </div>
        {/* container for left hand side */}
        <div
          className="bio-and-thumbs-container"
          style={sidebarHeight ? { height: `${sidebarHeight}px` } : undefined}
        >
          <Bio />
          <div className="thumbnail-container">
            {getThumbnails(
              (imgPath: string) => setActivePhoto(imgPath),
              category,
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryScreen;
